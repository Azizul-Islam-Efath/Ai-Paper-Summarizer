import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { path: '/dashboard', label: 'Overview' },
  { path: '/dashboard/projects', label: 'Projects' },
  { path: '/dashboard/upload', label: 'Upload' },
  { path: '/dashboard/papers', label: 'My Papers' },
]

const DashboardNavbar = () => {
  const { user, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) =>
    path === '/dashboard'
      ? location.pathname === '/dashboard'
      : location.pathname.startsWith(path)

  return (
    <header className="lg:hidden sticky top-0 z-20"
      style={{
        background: isDark
          ? 'rgba(15,10,30,0.88)'
          : 'rgba(245,240,255,0.88)',
        backdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: `1px solid ${isDark ? 'rgba(124,77,255,0.15)' : 'rgba(124,77,255,0.22)'}`,
        boxShadow: isDark ? 'none' : '0 4px 24px rgba(124,77,255,0.08)',
      }}
    >
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #7c4dff 0%, #c44ef0 100%)',
              boxShadow: '0 3px 12px rgba(124,77,255,0.4)',
            }}
          >
            <svg className="w-4.5 h-4.5 text-white w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="font-display font-bold text-lg gradient-text">SynthAI</span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors"
            style={{
              color: isDark ? 'rgba(196,181,253,0.7)' : 'rgba(100,60,180,0.65)',
              background: isDark ? 'rgba(124,77,255,0.08)' : 'rgba(124,77,255,0.08)',
            }}
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg transition-colors"
            style={{
              color: isDark ? 'rgba(196,181,253,0.7)' : 'rgba(100,60,180,0.65)',
              background: mobileMenuOpen
                ? (isDark ? 'rgba(124,77,255,0.15)' : 'rgba(124,77,255,0.1)')
                : 'transparent',
            }}
          >
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={mobileMenuOpen ? 'open' : 'closed'}
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden"
            style={{
              borderTop: `1px solid ${isDark ? 'rgba(124,77,255,0.15)' : 'rgba(124,77,255,0.18)'}`,
            }}
          >
            <div className="px-3 py-3 space-y-1">
              {navItems.map((item) => {
                const active = isActive(item.path)
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{
                      background: active
                        ? 'linear-gradient(135deg, rgba(124,77,255,0.15), rgba(196,78,240,0.08))'
                        : 'transparent',
                      color: active
                        ? (isDark ? '#c4b5fd' : '#7c4dff')
                        : (isDark ? 'rgba(232,228,255,0.6)' : 'rgba(100,60,180,0.58)'),
                      border: active
                        ? `1px solid ${isDark ? 'rgba(124,77,255,0.3)' : 'rgba(124,77,255,0.2)'}`
                        : '1px solid transparent',
                    }}
                  >
                    {item.label}
                  </Link>
                )
              })}

              {/* Mobile logout */}
              <button
                onClick={() => { setMobileMenuOpen(false); logout() }}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors mt-2"
                style={{ color: '#dc2626' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sign Out
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default DashboardNavbar
