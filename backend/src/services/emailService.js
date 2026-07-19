import nodemailer from 'nodemailer';
import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';

// Create transporter lazily so missing creds don't crash startup
let _transporter = null;

const getTransporter = () => {
  if (_transporter) return _transporter;
  _transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: false, // TLS via STARTTLS
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  });
  return _transporter;
};

/**
 * Send a password reset email with a styled HTML template.
 * Falls back to console-logging the link if SMTP creds are not configured.
 */
export const sendPasswordResetEmail = async (toEmail, resetToken) => {
  const resetUrl = `${env.FRONTEND_URL}/reset-password/${resetToken}`;

  // If SMTP is not configured, spin up a free Ethereal test account
  const smtpReady =
    env.SMTP_USER &&
    env.SMTP_USER !== 'your-gmail@gmail.com' &&
    env.SMTP_PASS &&
    env.SMTP_PASS !== 'your-16-char-app-password';

  let transporter;

  if (!smtpReady) {
    // Auto-create a disposable Ethereal inbox — no config needed
    logger.info('SMTP not configured — creating Ethereal test account...');
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    logger.info(`Ethereal inbox: ${testAccount.user} / ${testAccount.pass}`);
  } else {
    transporter = getTransporter();
  }

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Reset your password</title>
</head>
<body style="margin:0;padding:0;background:#0f0a1e;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0a1e;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.05);border:1px solid rgba(124,77,255,0.25);border-radius:20px;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td align="center" style="padding:40px 40px 32px;background:linear-gradient(135deg,rgba(124,77,255,0.2),rgba(196,78,240,0.1));">
              <div style="width:56px;height:56px;background:linear-gradient(135deg,#7c4dff,#c44ef0);border-radius:16px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:16px;">
                <span style="font-size:26px;">🔐</span>
              </div>
              <h1 style="color:#fff;font-size:24px;font-weight:700;margin:0 0 8px;">Reset your password</h1>
              <p style="color:rgba(196,181,253,0.7);font-size:14px;margin:0;">SynthAI Research Platform</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">
              <p style="color:rgba(196,181,253,0.8);font-size:15px;line-height:1.6;margin:0 0 20px;">
                Hi there,<br/><br/>
                We received a request to reset the password for your SynthAI account associated with <strong style="color:#c4b5fd;">${toEmail}</strong>.
              </p>
              <p style="color:rgba(196,181,253,0.8);font-size:15px;line-height:1.6;margin:0 0 28px;">
                Click the button below to set a new password. This link is valid for <strong style="color:#c4b5fd;">1 hour</strong>.
              </p>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <a href="${resetUrl}"
                       style="display:inline-block;padding:14px 36px;background:linear-gradient(135deg,#7c4dff,#c44ef0);color:#fff;font-size:15px;font-weight:600;text-decoration:none;border-radius:12px;letter-spacing:0.3px;box-shadow:0 4px 20px rgba(124,77,255,0.4);">
                      Reset Password
                    </a>
                  </td>
                </tr>
              </table>

              <p style="color:rgba(196,181,253,0.5);font-size:13px;margin:28px 0 0;line-height:1.6;">
                If the button doesn't work, copy and paste this link into your browser:<br/>
                <a href="${resetUrl}" style="color:#a78bfa;word-break:break-all;">${resetUrl}</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px 32px;border-top:1px solid rgba(124,77,255,0.15);">
              <p style="color:rgba(196,181,253,0.35);font-size:12px;margin:0;text-align:center;line-height:1.6;">
                If you didn't request a password reset, you can safely ignore this email.<br/>
                Your password will remain unchanged.<br/><br/>
                &copy; ${new Date().getFullYear()} SynthAI Research Platform
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  try {
    const info = await transporter.sendMail({
      from: `"SynthAI" <${env.EMAIL_FROM || env.SMTP_USER || 'noreply@synthai.dev'}>`,
      to: toEmail,
      subject: '🔐 Reset your SynthAI password',
      html,
    });
    logger.info(`Password reset email sent → Message ID: ${info.messageId}`);

    // If Ethereal was used, print the preview URL so you can see the email in browser
    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      logger.warn(
        `\n╔══════════════════════════════════════════════╗\n` +
        `║        📧  EMAIL PREVIEW READY               ║\n` +
        `╠══════════════════════════════════════════════╣\n` +
        `║  Open this URL in your browser to see        ║\n` +
        `║  the password reset email:                   ║\n` +
        `║                                              ║\n` +
        `║  ${previewUrl.padEnd(44)} ║\n` +
        `╚══════════════════════════════════════════════╝`
      );
    }
  } catch (err) {
    logger.error(`Failed to send password reset email to ${toEmail}: ${err.message}`);
    // Still log the direct link so development is never blocked
    logger.warn(`Direct reset link for ${toEmail}: ${resetUrl}`);
    throw err;
  }
};
