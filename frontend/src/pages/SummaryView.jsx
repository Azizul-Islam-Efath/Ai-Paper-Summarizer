import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { summaryAPI } from '../services/summaryService'
import Button from '../components/Button'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

const SummarySection = ({ title, content, accent = false, wide = false }) => {
  if (!content) return null
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mb-6 ${wide ? 'col-span-full' : ''}`}
    >
      <h3 className={`text-sm font-bold uppercase tracking-wider mb-2 ${
        accent ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'
      }`}>{title}</h3>
      <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap text-justify">
        {content}
      </p>
    </motion.div>
  )
}

const TagList = ({ title, items }) => {
  if (!items || items.length === 0) return null
  return (
    <div className="mb-6">
      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span key={i} className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

const SummaryView = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [summary, setSummary] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isExportingPdf, setIsExportingPdf] = useState(false)
  const [isExportingDocx, setIsExportingDocx] = useState(false)

  useEffect(() => {
    fetchSummary()
  }, [id])

  const fetchSummary = async () => {
    try {
      const response = await summaryAPI.getSummary(id)
      setSummary(response.data.data)
    } catch (error) {
      toast.error('Failed to load summary details')
      navigate('/dashboard/projects')
    } finally {
      setIsLoading(false)
    }
  }

  const handleExportPdf = async () => {
    setIsExportingPdf(true)
    try {
      const response = await summaryAPI.exportPdf(id)
      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `Summary_${summary.paper?.title || id}.pdf`)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch {
      toast.error('Failed to export PDF')
    } finally {
      setIsExportingPdf(false)
    }
  }

  const handleExportDocx = async () => {
    setIsExportingDocx(true)
    try {
      const response = await summaryAPI.exportDocx(id)
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `Summary_${summary.paper?.title || id}.docx`)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch {
      toast.error('Failed to export DOCX')
    } finally {
      setIsExportingDocx(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 dark:text-gray-400">Loading summary...</p>
        </div>
      </div>
    )
  }

  if (!summary) {
    return <div className="p-8 text-center text-red-500">Summary not found.</div>
  }

  const { paper } = summary
  const project = paper?.project

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto space-y-6"
    >
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2 flex-wrap">
            <Link to="/dashboard/projects" className="hover:text-primary-500 transition-colors">Projects</Link>
            <span>/</span>
            {project && (
              <>
                <Link to={`/dashboard/projects/${project.id}`} className="hover:text-primary-500 transition-colors">{project.name}</Link>
                <span>/</span>
              </>
            )}
            {paper && (
              <>
                <Link to={`/dashboard/papers/${paper.id}`} className="hover:text-primary-500 transition-colors truncate max-w-[160px]">{paper.title}</Link>
                <span>/</span>
              </>
            )}
            <span>Summary</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI Summary</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Generated on {new Date(summary.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={handleExportDocx} isLoading={isExportingDocx}>
            Export DOCX
          </Button>
          <Button onClick={handleExportPdf} isLoading={isExportingPdf}>
            Export PDF
          </Button>
        </div>
      </div>

      {/* Paper Title Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-primary-600 to-purple-600 p-6 text-white">
        <p className="text-xs font-semibold uppercase tracking-widest opacity-75 mb-1">Research Paper</p>
        <h2 className="text-xl font-bold leading-tight">{paper?.title}</h2>
        {(summary.authors?.length > 0 || summary.year) && (
          <p className="text-sm opacity-80 mt-2">
            {summary.authors?.join(', ')}{summary.year ? ` · ${summary.year}` : ''}
            {summary.journal ? ` · ${summary.journal}` : ''}
          </p>
        )}
      </div>

      {/* Full Summary Content */}
      <div className="card p-8 space-y-2">

        {/* Abstract Summary */}
        {summary.abstractSummary && (
          <div className="mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-3">Abstract Summary</h3>
            <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed text-justify whitespace-pre-wrap">
              {summary.abstractSummary}
            </p>
          </div>
        )}

        {/* Core Research */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <SummarySection title="Research Problem" content={summary.researchProblem} />
          <SummarySection title="Objectives" content={summary.objectives} />
        </div>

        {/* Methodology */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-6 mt-2">
          <SummarySection title="Methodology" content={summary.methodology} />
        </div>

        {/* Datasets & Algorithms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 border-t border-gray-100 dark:border-gray-800 pt-6 mt-2">
          <SummarySection title="Dataset" content={summary.dataset} />
          <SummarySection title="Algorithms & Models" content={summary.algorithms} />
        </div>

        {/* Experiments & Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 border-t border-gray-100 dark:border-gray-800 pt-6 mt-2">
          <SummarySection title="Experiments" content={summary.experiments} />
          <SummarySection title="Results & Metrics" content={summary.results} />
        </div>

        {/* Advantages vs Limitations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 dark:border-gray-800 pt-6 mt-2">
          <div className="bg-green-50 dark:bg-green-900/10 rounded-2xl p-5">
            <SummarySection title="⚡ Advantages & Strengths" content={summary.advantages} accent />
          </div>
          <div className="bg-red-50 dark:bg-red-900/10 rounded-2xl p-5">
            <SummarySection title="⚠️ Limitations & Weaknesses" content={summary.limitations} accent />
          </div>
        </div>

        {/* Key Contributions */}
        {summary.keyContributions && (
          <div className="border-t border-gray-100 dark:border-gray-800 pt-6 mt-2 bg-primary-50 dark:bg-primary-900/10 rounded-2xl p-5">
            <SummarySection title="🎯 Key Contributions" content={summary.keyContributions} accent />
          </div>
        )}

        {/* Novel Contributions & Novelty */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 border-t border-gray-100 dark:border-gray-800 pt-6 mt-2">
          <SummarySection title="Novel Contributions" content={summary.novelContributions} />
          <SummarySection title="Novelty vs Prior Work" content={summary.novelty} />
        </div>

        {/* Applications & Disadvantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 border-t border-gray-100 dark:border-gray-800 pt-6 mt-2">
          <SummarySection title="Real-World Applications" content={summary.applications} />
          <SummarySection title="Disadvantages" content={summary.disadvantages} />
        </div>

        {/* Important Equations */}
        {summary.importantEquations && (
          <div className="border-t border-gray-100 dark:border-gray-800 pt-6 mt-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Important Equations</h3>
            <div className="bg-gray-900 dark:bg-gray-950 text-green-400 rounded-xl p-4 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
              {summary.importantEquations}
            </div>
          </div>
        )}

        {/* Future Work & Conclusion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 border-t border-gray-100 dark:border-gray-800 pt-6 mt-2">
          <SummarySection title="Future Work" content={summary.futureWork} />
          <SummarySection title="Conclusion" content={summary.conclusion} />
        </div>

        {/* Citation */}
        {summary.citation && (
          <div className="border-t border-gray-100 dark:border-gray-800 pt-6 mt-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">IEEE Citation</h3>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 text-sm text-gray-700 dark:text-gray-300 font-mono">
              {summary.citation}
            </div>
          </div>
        )}

        {/* Keywords */}
        {summary.keywords?.length > 0 && (
          <div className="border-t border-gray-100 dark:border-gray-800 pt-6 mt-2">
            <TagList title="Keywords" items={summary.keywords} />
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default SummaryView
