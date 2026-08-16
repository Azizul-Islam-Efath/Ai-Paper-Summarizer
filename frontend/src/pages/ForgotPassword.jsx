import { useState } from 'react'
import { Link } from 'react-router-dom'
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

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      await authAPI.forgotPassword(data.email)
      setSent(true)
      toast.success('Reset link generated!')
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to generate reset link')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0f0a1e 0%, #1a0f3d 40%, #2a1060 70%, #1a0a40 100%)' }}
    >
      <Orb size="600px" color="rgba(124,77,255,0.16)" style={{ top: '-200px', right: '-200px' }} />
      <Orb size="500px" color="rgba(196,78,240,0.12)" style={{ bottom: '-100px', left: '-100px' }} />

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
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex flex-col items-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{
                  background: 'linear-gradient(135deg, #7c4dff 0%, #c44ef0 100%)',
                  boxShadow: '0 6px 24px rgba(124,77,255,0.5)',
                }}
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2}
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
            </Link>
            <h1 className="font-display text-2xl font-bold text-white">Reset password</h1>
            <p className="mt-1.5 text-sm" style={{ color: 'rgba(196,181,253,0.6)' }}>
              Enter your email to generate a reset link
            </p>
          </div>

          {sent ? (
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
              <h3 className="text-lg font-semibold text-white mb-2">Link Generated!</h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'rgba(196,181,253,0.6)' }}>
                We've sent a password reset link to your email address. Please check your inbox (and spam folder).
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
                Back to Sign In
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                  style={{ color: 'rgba(196,181,253,0.55)' }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: errors.email ? '1px solid rgba(248,113,113,0.5)' : '1px solid rgba(255,255,255,0.1)',
                    color: '#fff',
                    caretColor: '#c4b5fd',
                  }}
                  onFocus={e => { e.target.style.borderColor = 'rgba(124,77,255,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(124,77,255,0.15)' }}
                  onBlur={e => { e.target.style.borderColor = errors.email ? 'rgba(248,113,113,0.5)' : 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none' }}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                  })}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs" style={{ color: '#f87171' }}>{errors.email.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
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
                    Generating link…
                  </>
                ) : 'Generate Reset Link'}
              </motion.button>
            </form>
          )}

          <div className="my-6 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)' }} />

          <p className="text-center text-sm" style={{ color: 'rgba(196,181,253,0.5)' }}>
            Remember your password?{' '}
            <Link
              to="/login"
              className="font-semibold transition-colors"
              style={{ color: '#c4b5fd' }}
              onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
              onMouseLeave={e => e.currentTarget.style.color = '#c4b5fd'}
            >
              Sign in →
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default ForgotPassword
