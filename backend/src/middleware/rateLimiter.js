import rateLimit from 'express-rate-limit';

const isDev = process.env.NODE_ENV !== 'production';

const createLimiter = (windowMs, max, message) => {
  // In development, allow effectively unlimited requests
  if (isDev) {
    return rateLimit({ windowMs, max: 100000, message: { success: false, message } });
  }
  return rateLimit({
    windowMs,
    max,
    message: { success: false, message },
    standardHeaders: true,
    legacyHeaders: false,
  });
};

// General API rate limit
export const globalLimiter = createLimiter(
  15 * 60 * 1000,
  500,
  'Too many requests. Please try again later.'
);

// Auth endpoints
export const authLimiter = createLimiter(
  15 * 60 * 1000,
  100,
  'Too many authentication attempts. Please try again in 15 minutes.'
);

// AI endpoints (expensive)
export const aiLimiter = createLimiter(
  60 * 60 * 1000,
  30,
  'AI rate limit reached. You can make 30 AI requests per hour.'
);

// Upload endpoints
export const uploadLimiter = createLimiter(
  60 * 60 * 1000,
  50,
  'Upload limit reached. Maximum 50 uploads per hour.'
);
