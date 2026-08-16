import { useEffect, useState } from 'react'

/**
 * AnimatedBackground Component
 * Signature Aleksei Vasileika style: Iridescent shifting mesh gradients,
 * organic morphing light orbs, interactive cursor glow, subtle cyber grid,
 * floating particle nodes, and film grain noise.
 */
export default function AnimatedBackground({ children, className = '' }) {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className={`relative min-h-screen overflow-hidden bg-[#0a0618] text-white ${className}`}>
      {/* ── 1. Interactive Ambient Mouse Follower ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x * 100}% ${
            mousePos.y * 100
          }%, rgba(124, 77, 255, 0.15), rgba(196, 78, 240, 0.08) 40%, transparent 80%)`,
        }}
      />

      {/* ── 2. Animated Floating Iridescent Mesh Orbs ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Orb 1: Primary Electric Purple */}
        <div
          className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full blur-[110px] opacity-70 animate-mesh-orb-1"
          style={{
            background: 'radial-gradient(circle, rgba(124,77,255,0.45) 0%, rgba(168,50,216,0.2) 60%, transparent 80%)',
          }}
        />

        {/* Orb 2: Neon Cyan & Violet Shift */}
        <div
          className="absolute top-1/4 -right-32 w-[700px] h-[700px] rounded-full blur-[130px] opacity-65 animate-mesh-orb-2"
          style={{
            background: 'radial-gradient(circle, rgba(196,78,240,0.4) 0%, rgba(6,182,212,0.2) 55%, transparent 75%)',
          }}
        />

        {/* Orb 3: Deep Indigo Center Wave */}
        <div
          className="absolute -bottom-32 left-1/3 w-[750px] h-[750px] rounded-full blur-[140px] opacity-60 animate-mesh-orb-3"
          style={{
            background: 'radial-gradient(circle, rgba(79,70,229,0.35) 0%, rgba(236,72,153,0.18) 60%, transparent 80%)',
          }}
        />

        {/* Orb 4: Golden Amber Accent */}
        <div
          className="absolute top-2/3 -left-20 w-[550px] h-[550px] rounded-full blur-[120px] opacity-40 animate-mesh-orb-4"
          style={{
            background: 'radial-gradient(circle, rgba(147,51,234,0.35) 0%, rgba(245,158,11,0.15) 60%, transparent 80%)',
          }}
        />
      </div>

      {/* ── 3. Cyber Grid Lines with Glowing Perspective ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124, 77, 255, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 77, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* ── 4. Floating Interactive Particle Constellations ── */}
      <svg className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-30">
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c44ef0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7c4dff" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Animated Grid Constellation Lines */}
        <g stroke="rgba(196,78,240,0.15)" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse">
          <line x1="15%" y1="20%" x2="40%" y2="35%" />
          <line x1="40%" y1="35%" x2="70%" y2="25%" />
          <line x1="70%" y1="25%" x2="85%" y2="60%" />
          <line x1="40%" y1="35%" x2="55%" y2="70%" />
          <line x1="15%" y1="80%" x2="55%" y2="70%" />
        </g>
        {/* Nodes */}
        <circle cx="15%" cy="20%" r="3" fill="#7c4dff" className="animate-ping" style={{ animationDuration: '4s' }} />
        <circle cx="40%" cy="35%" r="4" fill="#c44ef0" className="animate-pulse" />
        <circle cx="70%" cy="25%" r="3" fill="#06b6d4" />
        <circle cx="85%" cy="60%" r="4" fill="#a832d8" className="animate-ping" style={{ animationDuration: '6s' }} />
        <circle cx="55%" cy="70%" r="3" fill="#7c4dff" />
      </svg>

      {/* ── 5. Analog Noise Film Grain Overlay (Vasileika Aesthetic Signature) ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── 6. Page Content Container ── */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
