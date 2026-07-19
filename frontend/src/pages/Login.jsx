import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import Input from '../components/Input'
import Button from '../components/Button'

/* Floating background orb */
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

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      await login(data.email, data.password)
      navigate('/dashboard')
    } catch (error) {
      // Error handled by auth context toast
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0f0a1e 0%, #1a0f3d 40%, #2a1060 70%, #1a0a40 100%)' }}
    >
      {/* Background orbs */}
      <Orb size="600px" color="rgba(124,77,255,0.18)" style={{ top: '-200px', right: '-200px' }} />
      <Orb size="500px" color="rgba(196,78,240,0.12)" style={{ bottom: '-100px', left: '-100px' }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(124,77,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(124,77,255,0.2) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Card */}
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </Link>
            <h1 className="font-display text-2xl font-bold text-white">Welcome back</h1>
            <p className="mt-1.5 text-sm" style={{ color: 'rgba(196,181,253,0.6)' }}>
              Sign in to your SynthAI account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                style={{ color: 'rgba(196,181,253,0.55)' }}
              >
                Email
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

            {/* Password */}
            <div>
              <div className="mb-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wide"
                  style={{ color: 'rgba(196,181,253,0.55)' }}
                >
                  Password
                </label>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: errors.password ? '1px solid rgba(248,113,113,0.5)' : '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  caretColor: '#c4b5fd',
                }}
                onFocus={e => { e.target.style.borderColor = 'rgba(124,77,255,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(124,77,255,0.15)' }}
                onBlur={e => { e.target.style.borderColor = errors.password ? 'rgba(248,113,113,0.5)' : 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none' }}
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && (
                <p className="mt-1.5 text-xs" style={{ color: '#f87171' }}>{errors.password.message}</p>
              )}
            </div>

            {/* Submit */}
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
                  Signing in…
                </>
              ) : 'Sign In'}
            </motion.button>

            <div className="text-center mt-3">
              <Link to="/forgot-password"
                className="text-xs font-medium transition-colors"
                style={{ color: 'rgba(196,181,253,0.55)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#c4b5fd'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(196,181,253,0.55)'}
              >
                Forgot password?
              </Link>
            </div>
          </form>

          {/* Divider */}
          <div className="my-6 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)' }} />

          {/* Register link */}
          <p className="text-center text-sm" style={{ color: 'rgba(196,181,253,0.5)' }}>
            Don't have an account?{' '}
            <Link
              to="/register"
              className="font-semibold transition-colors"
              style={{ color: '#c4b5fd' }}
              onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
              onMouseLeave={e => e.currentTarget.style.color = '#c4b5fd'}
            >
              Create one free →
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
