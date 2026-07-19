import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'

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

/* Reusable premium field */
const Field = ({ label, type = 'text', placeholder, error, ...props }) => (
  <div>
    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
      style={{ color: 'rgba(196,181,253,0.55)' }}
    >
      {label}
    </label>
    <input
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
)

const Register = () => {
  const { register: registerUser } = useAuth()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      await registerUser(data.name, data.email, data.password)
      navigate('/dashboard')
    } catch (error) {
      // Error handled by auth context toast
    } finally {
      setIsLoading(false)
    }
  }

  const password = watch('password')

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden"
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
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
            </Link>
            <h1 className="font-display text-2xl font-bold text-white">Create account</h1>
            <p className="mt-1.5 text-sm" style={{ color: 'rgba(196,181,253,0.6)' }}>
              Start synthesizing research today — it's free
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Field
              label="Full Name"
              placeholder="John Doe"
              error={errors.name?.message}
              {...register('name', {
                required: 'Name is required',
                minLength: { value: 2, message: 'Name too short' },
              })}
            />
            <Field
              label="Email"
              type="email"
              placeholder="you@example.com"
              error={errors.email?.message}
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
              })}
            />
            <Field
              label="Password"
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
              placeholder="Repeat your password"
              error={errors.confirmPassword?.message}
              {...register('confirmPassword', {
                required: 'Please confirm password',
                validate: value => value === password || 'Passwords do not match',
              })}
            />

            <div className="pt-1">
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
                    Creating account…
                  </>
                ) : 'Create Account'}
              </motion.button>
            </div>
          </form>

          {/* Divider */}
          <div className="my-6 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)' }} />

          {/* Login link */}
          <p className="text-center text-sm" style={{ color: 'rgba(196,181,253,0.5)' }}>
            Already have an account?{' '}
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

export default Register
