import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { usePapers } from '../hooks/usePapers'
import { projectAPI } from '../services/projectService'
import LoadingSpinner from '../components/LoadingSpinner'
import EmptyState from '../components/EmptyState'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'

/* ─── Stat Card ─── */
const StatCard = ({ title, value, icon, gradFrom, gradTo, delay = 0 }) => {
  const { isDark } = useTheme()
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -3 }}
      className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300"
      style={{
        background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.8)',
        border: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(124,77,255,0.1)',
        backdropFilter: 'blur(12px)',
        boxShadow: isDark
          ? '0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)'
          : '0 4px 24px rgba(0,0,0,0.06)',
      }}
    >
      {/* Gradient background blob */}
      <div
        className="absolute -right-6 -top-6 w-28 h-28 rounded-full opacity-20 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${gradFrom}, transparent 70%)` }}
      />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: isDark ? 'rgba(196,181,253,0.45)' : 'rgba(100,60,180,0.45)' }}
          >
            {title}
          </p>
          <p className="text-3xl font-bold font-display"
            style={{ color: isDark ? '#e8e4ff' : '#1a1035' }}
          >
            {value}
          </p>
        </div>
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{
            background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})`,
            boxShadow: `0 4px 16px ${gradFrom}55`,
          }}
        >
          {icon}
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Recent Paper Card ─── */
const RecentPaperCard = ({ paper }) => {
  const { isDark } = useTheme()
  const statusMap = {
    READY: { label: 'Ready', color: '#22c55e', bg: 'rgba(34,197,94,0.12)', border: 'rgba(34,197,94,0.25)' },
    PROCESSING: { label: 'Processing', color: '#60a5fa', bg: 'rgba(96,165,250,0.12)', border: 'rgba(96,165,250,0.25)' },
    FAILED: { label: 'Failed', color: '#f87171', bg: 'rgba(248,113,113,0.12)', border: 'rgba(248,113,113,0.25)' },
  }
  const status = statusMap[paper.status] || statusMap.FAILED

  return (
    <Link to={`/dashboard/papers/${paper.id}`}>
      <motion.div
        whileHover={{ x: 3 }}
        className="flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group"
        style={{
          background: 'transparent',
          border: '1px solid transparent',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = isDark ? 'rgba(124,77,255,0.06)' : 'rgba(124,77,255,0.04)'
          e.currentTarget.style.borderColor = isDark ? 'rgba(124,77,255,0.15)' : 'rgba(124,77,255,0.1)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.borderColor = 'transparent'
        }}
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
          style={{
            background: paper.uploadType === 'PDF'
              ? 'rgba(248,113,113,0.15)'
              : 'rgba(96,165,250,0.15)',
            border: `1px solid ${paper.uploadType === 'PDF' ? 'rgba(248,113,113,0.25)' : 'rgba(96,165,250,0.25)'}`,
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            style={{ color: paper.uploadType === 'PDF' ? '#f87171' : '#60a5fa' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium truncate"
            style={{ color: isDark ? '#e8e4ff' : '#1e0a5e' }}
          >
            {paper.title}
          </h3>
          <p className="text-xs mt-0.5" style={{ color: isDark ? 'rgba(196,181,253,0.4)' : 'rgba(100,60,180,0.42)' }}>
            {new Date(paper.createdAt).toLocaleDateString()}
          </p>
        </div>
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full shrink-0"
          style={{ color: status.color, background: status.bg, border: `1px solid ${status.border}` }}
        >
          {status.label}
        </span>
      </motion.div>
    </Link>
  )
}

/* ─── Custom Tooltip for Chart ─── */
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="px-4 py-3 rounded-xl text-sm"
        style={{
          background: 'rgba(15,10,30,0.95)',
          border: '1px solid rgba(124,77,255,0.3)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        <p className="font-semibold mb-1.5" style={{ color: '#c4b5fd' }}>{label}</p>
        {payload.map((entry) => (
          <div key={entry.name} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: entry.color }} />
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{entry.name}: </span>
            <span className="font-semibold text-white">{entry.value}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

/* ─── Dashboard ─── */
const Dashboard = () => {
  const { user } = useAuth()
  const { isDark } = useTheme()
  const { papers, loading: papersLoading, pagination, fetchPapers } = usePapers({ limit: 5 })
  const [projects, setProjects] = useState([])
  const [projectsLoading, setProjectsLoading] = useState(true)
  const [stats, setStats] = useState({ totalPapers: 0, summarized: 0, totalProjects: 0, storageUsed: 0 })

  const activityData = [
    { name: 'Mon', uploads: 4, generations: 1 },
    { name: 'Tue', uploads: 3, generations: 2 },
    { name: 'Wed', uploads: 2, generations: 0 },
    { name: 'Thu', uploads: 7, generations: 3 },
    { name: 'Fri', uploads: 5, generations: 2 },
    { name: 'Sat', uploads: 1, generations: 1 },
    { name: 'Sun', uploads: 4, generations: 4 },
  ]

  useEffect(() => { fetchPapers(); fetchProjects() }, [])

  const fetchProjects = async () => {
    try {
      const response = await projectAPI.getProjects({ limit: 100 })
      setProjects(response.data.data || [])
    } catch { toast.error('Failed to load projects') }
    finally { setProjectsLoading(false) }
  }

  useEffect(() => {
    setStats({
      totalPapers: pagination.total || 0,
      summarized: papers.filter(p => p.summary).length,
      totalProjects: projects.length,
      storageUsed: papers.reduce((a, c) => a + ((c.fileSize || 0) / 1024 / 1024), 0).toFixed(1),
    })
  }, [papers, projects, pagination])

  if (papersLoading && projectsLoading) return <LoadingSpinner fullScreen />

  const greeting = () => {
    const h = new Date().getHours()
    if (h < 12) return 'Good morning'
    if (h < 18) return 'Good afternoon'
    return 'Good evening'
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-start justify-between"
      >
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold"
            style={{ color: isDark ? '#e8e4ff' : '#1a1035' }}
          >
            {greeting()},{' '}
            <span style={{
              background: 'linear-gradient(135deg, #7c4dff, #c44ef0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {user?.name?.split(' ')[0] || 'Researcher'} 👋
            </span>
          </h1>
          <p className="mt-1 text-sm" style={{ color: isDark ? 'rgba(196,181,253,0.5)' : 'rgba(26,16,53,0.4)' }}>
            Here's an overview of your AI research workspace.
          </p>
        </div>

        <Link to="/dashboard/upload" className="btn-primary hidden sm:inline-flex items-center gap-2 text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          Upload Paper
        </Link>
      </motion.div>

      {/* ── Stat Cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        <StatCard delay={0.0} title="Total Projects" value={stats.totalProjects}
          gradFrom="#7c4dff" gradTo="#6c30f8"
          icon={<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>}
        />
        <StatCard delay={0.1} title="Total Papers" value={stats.totalPapers}
          gradFrom="#60a5fa" gradTo="#3b82f6"
          icon={<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
        />
        <StatCard delay={0.2} title="AI Summaries" value={stats.summarized}
          gradFrom="#34d399" gradTo="#059669"
          icon={<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
        <StatCard delay={0.3} title="Storage (MB)" value={stats.storageUsed}
          gradFrom="#f59e0b" gradTo="#d97706"
          icon={<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>}
        />
      </div>

      {/* ── Main Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="lg:col-span-2 rounded-2xl p-6"
          style={{
            background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.8)',
            border: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(124,77,255,0.1)',
            backdropFilter: 'blur(12px)',
            boxShadow: isDark ? '0 4px 24px rgba(0,0,0,0.25)' : '0 4px 24px rgba(0,0,0,0.06)',
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display text-lg font-bold" style={{ color: isDark ? '#e8e4ff' : '#1a1035' }}>
                Activity Overview
              </h2>
              <p className="text-xs mt-0.5" style={{ color: isDark ? 'rgba(196,181,253,0.4)' : 'rgba(26,16,53,0.35)' }}>
                Last 7 days
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium">
              <span className="flex items-center gap-1.5" style={{ color: isDark ? 'rgba(196,181,253,0.6)' : 'rgba(26,16,53,0.5)' }}>
                <span className="w-3 h-3 rounded-full inline-block" style={{ background: '#7c4dff' }} />
                Uploads
              </span>
              <span className="flex items-center gap-1.5" style={{ color: isDark ? 'rgba(196,181,253,0.6)' : 'rgba(26,16,53,0.5)' }}>
                <span className="w-3 h-3 rounded-full inline-block" style={{ background: '#34d399' }} />
                Syntheses
              </span>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="colUploads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#7c4dff" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#7c4dff" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="colGens" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#34d399" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#34d399" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  stroke={isDark ? 'rgba(196,181,253,0.25)' : 'rgba(26,16,53,0.2)'}
                  fontSize={11} tickLine={false} axisLine={false}
                  tick={{ fill: isDark ? 'rgba(196,181,253,0.45)' : 'rgba(26,16,53,0.35)' }}
                />
                <YAxis
                  stroke={isDark ? 'rgba(196,181,253,0.25)' : 'rgba(26,16,53,0.2)'}
                  fontSize={11} tickLine={false} axisLine={false}
                  tick={{ fill: isDark ? 'rgba(196,181,253,0.45)' : 'rgba(26,16,53,0.35)' }}
                />
                <CartesianGrid
                  strokeDasharray="4 4" vertical={false}
                  stroke={isDark ? 'rgba(124,77,255,0.1)' : 'rgba(124,77,255,0.12)'}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="uploads" stroke="#7c4dff" strokeWidth={2}
                  fillOpacity={1} fill="url(#colUploads)" name="Uploads" dot={false} activeDot={{ r: 4, fill: '#7c4dff' }} />
                <Area type="monotone" dataKey="generations" stroke="#34d399" strokeWidth={2}
                  fillOpacity={1} fill="url(#colGens)" name="Syntheses" dot={false} activeDot={{ r: 4, fill: '#34d399' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Right column */}
        <div className="space-y-5">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="rounded-2xl p-5"
            style={{
              background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.8)',
              border: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(124,77,255,0.1)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <h2 className="font-display font-bold mb-4 text-base" style={{ color: isDark ? '#e8e4ff' : '#1a1035' }}>
              Quick Actions
            </h2>
            <div className="flex flex-col gap-3">
              <Link to="/dashboard/upload" className="btn-primary flex justify-center items-center gap-2 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Upload Papers
              </Link>
              <Link to="/dashboard/projects" className="btn-secondary flex justify-center items-center gap-2 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                New Project
              </Link>
            </div>
          </motion.div>

          {/* Recent Papers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="rounded-2xl p-5"
            style={{
              background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.8)',
              border: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(124,77,255,0.1)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-bold text-base" style={{ color: isDark ? '#e8e4ff' : '#1a1035' }}>
                Recent Papers
              </h2>
              <Link
                to="/dashboard/papers"
                className="text-xs font-semibold transition-colors"
                style={{ color: '#7c4dff' }}
              >
                View all →
              </Link>
            </div>

            {papers.length === 0 ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ background: 'rgba(124,77,255,0.1)', border: '1px solid rgba(124,77,255,0.2)' }}
                >
                  <svg className="w-6 h-6" style={{ color: '#7c4dff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-sm font-medium" style={{ color: isDark ? 'rgba(196,181,253,0.6)' : 'rgba(26,16,53,0.5)' }}>
                  No papers yet
                </p>
                <p className="text-xs mt-1" style={{ color: isDark ? 'rgba(196,181,253,0.35)' : 'rgba(26,16,53,0.3)' }}>
                  Upload your first research paper
                </p>
              </div>
            ) : (
              <div className="space-y-1">
                {papers.map((paper) => (
                  <RecentPaperCard key={paper.id} paper={paper} />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* ── Projects Quick View ── */}
      {projects.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="rounded-2xl p-6"
          style={{
            background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.8)',
            border: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(124,77,255,0.1)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display font-bold text-base" style={{ color: isDark ? '#e8e4ff' : '#1a1035' }}>
              Your Projects
            </h2>
            <Link to="/dashboard/projects" className="text-xs font-semibold" style={{ color: '#7c4dff' }}>
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(0, 3).map((project, i) => (
              <Link key={project.id} to={`/dashboard/projects/${project.id}`}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-xl transition-all duration-200"
                  style={{
                    background: isDark ? 'rgba(124,77,255,0.06)' : 'rgba(124,77,255,0.04)',
                    border: isDark ? '1px solid rgba(124,77,255,0.15)' : '1px solid rgba(124,77,255,0.1)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = isDark ? 'rgba(124,77,255,0.3)' : 'rgba(124,77,255,0.25)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = isDark ? 'rgba(124,77,255,0.15)' : 'rgba(124,77,255,0.1)'}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: 'linear-gradient(135deg, #7c4dff, #c44ef0)' }}
                    >
                      {project.name?.charAt(0)?.toUpperCase()}
                    </div>
                    <h3 className="font-semibold text-sm truncate" style={{ color: isDark ? '#e8e4ff' : '#1e0a5e' }}>
                      {project.name}
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed line-clamp-2"
                    style={{ color: isDark ? 'rgba(196,181,253,0.4)' : 'rgba(100,60,180,0.42)' }}
                  >
                    {project.description || 'No description'}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Dashboard
