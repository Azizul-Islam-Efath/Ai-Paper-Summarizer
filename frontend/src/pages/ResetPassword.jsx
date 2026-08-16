import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { authAPI } from '../services/authService'
import toast from 'react-hot-toast'

const Orb = ({ size, color, style }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size, height: size,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      filter: 'blur(60px)',
      ...style,
    }}
  />
)

/* Reusable premium field with forwardRef to support react-hook-form */
const Field = React.forwardRef(({ label, type = 'text', placeholder, error, ...props }, ref) => (
  <div>
    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
      style={{ color: 'rgba(196,181,253,0.55)' }}
    >
      {label}
    </label>
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
      style={{
        background: 'rgba(255,255,255,0.06)',
        border: error ? '1px solid rgba(248,113,113,0.5)' : '1px solid rgba(255,255,255,0.1)',
        color: '#fff',
        caretColor: '#c4b5fd',
      }}
      onFocus={e => {
        e.target.style.borderColor = 'rgba(124,77,255,0.6)'
        e.target.style.boxShadow = '0 0 0 3px rgba(124,77,255,0.15)'
      }}
      onBlur={e => {
        e.target.style.borderColor = error ? 'rgba(248,113,113,0.5)' : 'rgba(255,255,255,0.1)'
        e.target.style.boxShadow = 'none'
      }}
      {...props}
    />
    {error && <p className="mt-1.5 text-xs" style={{ color: '#f87171' }}>{error}</p>}
  </div>
))
Field.displayName = 'Field'

const ResetPassword = () => {
  const { token } = useParams()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const password = watch('password')

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      await authAPI.resetPassword(token, data.password)
      setSuccess(true)
      toast.success('Password reset successfully!')
      setTimeout(() => navigate('/login'), 2000)
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to reset password')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0f0a1e 0%, #1a0f3d 40%, #2a1060 70%, #1a0a40 100%)' }}
    >
      <Orb size="600px" color="rgba(124,77,255,0.16)" style={{ top: '-200px', left: '-200px' }} />
      <Orb size="500px" color="rgba(196,78,240,0.12)" style={{ bottom: '-100px', right: '-100px' }} />

      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(124,77,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(124,77,255,0.2) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-md"
      >
        <div
          className="rounded-3xl p-8"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(24px)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{
                background: 'linear-gradient(135deg, #7c4dff 0%, #c44ef0 100%)',
                boxShadow: '0 6px 24px rgba(124,77,255,0.5)',
              }}
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="font-display text-2xl font-bold text-white">New password</h1>
            <p className="mt-1.5 text-sm" style={{ color: 'rgba(196,181,253,0.6)' }}>
              Create a new secure password for your account
            </p>
          </div>

          {success ? (
            <div className="text-center py-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{
                  background: 'rgba(34,197,94,0.15)',
                  border: '1px solid rgba(34,197,94,0.25)',
                }}
              >
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Password Updated!</h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'rgba(196,181,253,0.6)' }}>
                Your password has been reset successfully. Redirecting you to login...
              </p>
              <Link
                to="/login"
                className="inline-flex px-6 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
              >
                Go to Sign In
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Field
                label="New Password"
                type="password"
                placeholder="Min 8 chars · uppercase · number"
                error={errors.password?.message}
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 8, message: 'At least 8 characters' },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                    message: 'Needs uppercase, lowercase, and number',
                  },
                })}
              />
              <Field
                label="Confirm Password"
                type="password"
                placeholder="Repeat your new password"
                error={errors.confirmPassword?.message}
                {...register('confirmPassword', {
                  required: 'Please confirm password',
                  validate: value => value === password || 'Passwords do not match',
                })}
              />

              <div className="pt-2">
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(135deg, #7c4dff 0%, #c44ef0 100%)',
                    boxShadow: '0 4px 20px rgba(124,77,255,0.4)',
                  }}
                  onMouseEnter={e => !isLoading && (e.currentTarget.style.boxShadow = '0 6px 28px rgba(124,77,255,0.55)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,77,255,0.4)')}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Resetting password…
                    </>
                  ) : 'Reset Password'}
                </motion.button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default ResetPassword
