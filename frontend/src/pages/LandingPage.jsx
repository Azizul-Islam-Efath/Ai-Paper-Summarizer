import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { useRef } from 'react'

/* ─── Animation variants ─── */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: 'easeOut' },
}
const stagger = { animate: { transition: { staggerChildren: 0.12 } } }

/* ─── Floating orb ─── */
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

/* ─── Particle dots ─── */
const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 30 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: Math.random() * 3 + 1,
          height: Math.random() * 3 + 1,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: `rgba(${Math.random() > 0.5 ? '124,77,255' : '196,78,240'}, ${Math.random() * 0.6 + 0.2})`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: Math.random() * 4 + 3,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
)

/* ─── Feature card ─── */
const FeatureCard = ({ icon, title, description, gradient, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -4 }}
    className="group relative rounded-2xl p-6 overflow-hidden cursor-default"
    style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      backdropFilter: 'blur(12px)',
    }}
  >
    {/* Hover gradient overlay */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
      style={{ background: gradient || 'linear-gradient(135deg, rgba(124,77,255,0.08), rgba(196,78,240,0.05))' }}
    />
    {/* Top accent line */}
    <div
      className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: 'linear-gradient(to right, transparent, #7c4dff, #c44ef0, transparent)' }}
    />

    <div
      className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4"
      style={{
        background: 'linear-gradient(135deg, rgba(124,77,255,0.2), rgba(196,78,240,0.12))',
        border: '1px solid rgba(124,77,255,0.25)',
      }}
    >
      {icon}
    </div>
    <h3 className="relative text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="relative text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
      {description}
    </p>
  </motion.div>
)

/* ─── Step card ─── */
const StepCard = ({ number, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col items-center text-center"
  >
    <div
      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold font-display mb-5 relative"
      style={{
        background: 'linear-gradient(135deg, #7c4dff, #c44ef0)',
        boxShadow: '0 8px 32px rgba(124,77,255,0.4)',
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl animate-pulse"
        style={{ boxShadow: '0 0 24px rgba(124,77,255,0.5)', opacity: 0.5 }}
      />
      {number}
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-sm max-w-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
      {description}
    </p>
  </motion.div>
)

const LandingPage = () => {
  const { isAuthenticated } = useAuth()
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, 80])

  return (
    <div className="overflow-x-hidden"
      style={{ background: '#0f0a1e' }}
    >
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #0f0a1e 0%, #1a0f3d 40%, #2a1060 70%, #1a0a40 100%)',
        }}
      >
        {/* Decorative orbs */}
        <Orb size="700px" color="rgba(124,77,255,0.18)"  style={{ top: '-200px',  right: '-200px' }} />
        <Orb size="500px" color="rgba(196,78,240,0.14)"  style={{ bottom: '-100px', left: '-100px' }} />
        <Orb size="300px" color="rgba(124,77,255,0.10)"  style={{ top: '40%',     left: '10%' }}    />
        <Particles />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(124,77,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(124,77,255,0.15) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #7c4dff, #c44ef0)',
                  boxShadow: '0 4px 16px rgba(124,77,255,0.5)',
                }}
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-white">SynthAI</span>
            </Link>

            <div className="flex items-center gap-3">
              {isAuthenticated ? (
                <Link
                  to="/dashboard"
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #7c4dff, #c44ef0)',
                    boxShadow: '0 4px 16px rgba(124,77,255,0.35)',
                  }}
                >
                  Go to Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{ color: 'rgba(255,255,255,0.75)', background: 'rgba(255,255,255,0.06)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                    style={{
                      background: 'linear-gradient(135deg, #7c4dff, #c44ef0)',
                      boxShadow: '0 4px 16px rgba(124,77,255,0.35)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 24px rgba(124,77,255,0.5)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(124,77,255,0.35)'}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 text-sm font-medium"
            style={{
              background: 'rgba(124,77,255,0.15)',
              border: '1px solid rgba(124,77,255,0.3)',
              color: '#c4b5fd',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
              style={{ boxShadow: '0 0 6px rgba(74,222,128,0.8)' }}
            />
            Powered by Claude AI · Research Made Intelligent
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#fff' }}
          >
            Transform Research Papers{' '}
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 40%, #e879f9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Into Pure Insight
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Upload any research paper. Our AI extracts key insights, synthesizes
            summaries, and generates new, publication-ready papers — automatically.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to={isAuthenticated ? '/dashboard' : '/register'}
              className="relative group px-8 py-4 rounded-2xl text-white font-semibold text-base overflow-hidden transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #7c4dff 0%, #c44ef0 100%)',
                boxShadow: '0 8px 32px rgba(124,77,255,0.4)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(124,77,255,0.55)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(124,77,255,0.4)'
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {isAuthenticated ? 'Open Dashboard' : 'Start for Free'}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            {!isAuthenticated && (
              <Link
                to="/login"
                className="px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-200"
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.10)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
              >
                Sign In →
              </Link>
            )}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: '10K+', label: 'Papers Processed' },
              { value: '98%',  label: 'Accuracy Rate' },
              { value: '<30s', label: 'Avg Processing' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-display text-3xl font-bold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #c4b5fd, #e879f9)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #0f0a1e, transparent)' }}
        />
      </section>

      {/* ═══════════════ FEATURES SECTION ═══════════════ */}
      <section className="py-28 relative" style={{ background: '#0f0a1e' }}>
        <Orb size="600px" color="rgba(124,77,255,0.10)" style={{ top: '20%', left: '-10%' }} />
        <Orb size="400px" color="rgba(196,78,240,0.08)" style={{ bottom: '10%', right: '-5%' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            {...fadeUp}
            className="text-center mb-16"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{
                background: 'rgba(124,77,255,0.12)',
                border: '1px solid rgba(124,77,255,0.25)',
                color: '#a78bfa',
              }}
            >
              ✦ CAPABILITIES
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything you need for{' '}
              <span style={{
                background: 'linear-gradient(135deg, #c4b5fd, #e879f9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                serious research
              </span>
            </h2>
            <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Powerful AI tools designed to accelerate how researchers, students, and academics work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard
              delay={0.0}
              icon={<svg className="w-6 h-6" style={{ color: '#a78bfa' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
              title="PDF & Text Upload"
              description="Upload PDFs or paste text directly. Our system extracts and processes content with remarkable accuracy."
            />
            <FeatureCard
              delay={0.1}
              icon={<svg className="w-6 h-6" style={{ color: '#e879f9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              title="AI-Powered Summaries"
              description="Claude AI generates structured summaries with methodology, findings, and key contributions."
              gradient="linear-gradient(135deg, rgba(196,78,240,0.08), rgba(124,77,255,0.04))"
            />
            <FeatureCard
              delay={0.2}
              icon={<svg className="w-6 h-6" style={{ color: '#60a5fa' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>}
              title="Synthesis Engine"
              description="Combine multiple papers to synthesize a new, more accurate and publication-ready research paper."
              gradient="linear-gradient(135deg, rgba(96,165,250,0.06), rgba(124,77,255,0.04))"
            />
            <FeatureCard
              delay={0.3}
              icon={<svg className="w-6 h-6" style={{ color: '#34d399' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
              title="Smart Search"
              description="Full-text search across all papers, summaries, and generated content instantly."
              gradient="linear-gradient(135deg, rgba(52,211,153,0.06), rgba(124,77,255,0.04))"
            />
            <FeatureCard
              delay={0.4}
              icon={<svg className="w-6 h-6" style={{ color: '#fbbf24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0L8 8m4-4v12" /></svg>}
              title="Export & Share"
              description="Export to PDF or DOCX. Generate shareable links for seamless collaboration."
              gradient="linear-gradient(135deg, rgba(251,191,36,0.06), rgba(124,77,255,0.04))"
            />
            <FeatureCard
              delay={0.5}
              icon={<svg className="w-6 h-6" style={{ color: '#f87171' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
              title="Secure & Private"
              description="End-to-end encryption with JWT authentication and refresh token rotation."
              gradient="linear-gradient(135deg, rgba(248,113,113,0.06), rgba(124,77,255,0.04))"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <section
        className="py-28 relative"
        style={{
          background: 'linear-gradient(160deg, #120b2e 0%, #0f0a1e 100%)',
          borderTop: '1px solid rgba(124,77,255,0.1)',
          borderBottom: '1px solid rgba(124,77,255,0.1)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-20">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{
                background: 'rgba(124,77,255,0.12)',
                border: '1px solid rgba(124,77,255,0.25)',
                color: '#a78bfa',
              }}
            >
              ✦ WORKFLOW
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Three steps to brilliance
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Go from raw PDFs to publication-ready synthesis in minutes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector lines */}
            <div
              className="hidden md:block absolute top-8 left-1/3 right-1/3 h-px"
              style={{ background: 'linear-gradient(to right, transparent, rgba(124,77,255,0.4), transparent)' }}
            />

            <StepCard
              number="1" delay={0.0}
              title="Upload Your Papers"
              description="Drag and drop PDFs or paste text directly. Supports bulk uploads for multi-paper projects."
            />
            <StepCard
              number="2" delay={0.15}
              title="AI Analyzes & Summarizes"
              description="Claude AI extracts structured insights — methodology, findings, limitations — in seconds."
            />
            <StepCard
              number="3" delay={0.3}
              title="Synthesize & Export"
              description="Get a new, accurate, publication-ready paper generated from your curated summaries."
            />
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA SECTION ═══════════════ */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ background: '#0f0a1e' }}
      >
        <Orb size="700px" color="rgba(124,77,255,0.15)" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <Particles />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                background: 'rgba(124,77,255,0.12)',
                border: '1px solid rgba(124,77,255,0.25)',
                color: '#a78bfa',
              }}
            >
              ✦ GET STARTED TODAY
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to{' '}
              <span style={{
                background: 'linear-gradient(135deg, #c4b5fd, #e879f9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                elevate your research?
              </span>
            </h2>
            <p className="text-base mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Join thousands of researchers saving hours every week with AI-powered summaries and synthesis.
            </p>
            <Link
              to={isAuthenticated ? '/dashboard' : '/register'}
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-2xl text-white font-semibold text-base transition-all duration-300 group"
              style={{
                background: 'linear-gradient(135deg, #7c4dff 0%, #c44ef0 100%)',
                boxShadow: '0 8px 40px rgba(124,77,255,0.45)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 16px 56px rgba(124,77,255,0.6)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(124,77,255,0.45)'
              }}
            >
              {isAuthenticated ? 'Go to Dashboard' : 'Start for Free — No credit card'}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer
        className="py-10 text-center text-sm"
        style={{
          borderTop: '1px solid rgba(124,77,255,0.1)',
          color: 'rgba(255,255,255,0.25)',
          background: '#0f0a1e',
        }}
      >
        © {new Date().getFullYear()} SynthAI Research Engine · Built with Claude AI
      </footer>
    </div>
  )
}

export default LandingPage
