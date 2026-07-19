import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { paperAPI } from '../services/paperService'
import { summaryAPI } from '../services/summaryService'
import Button from '../components/Button'
import toast from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'

const StatusBadge = ({ status }) => {
  const styles = {
    READY: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    PROCESSING: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    SUMMARIZING: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    SUMMARIZED: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    ERROR: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  }
  return (
    <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${styles[status] || styles.ERROR}`}>
      {status}
    </span>
  )
}

const PaperDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [paper, setPaper] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatingStep, setGeneratingStep] = useState('')
  const pollingRef = useRef(null)

  useEffect(() => {
    fetchPaper()
    return () => { if (pollingRef.current) clearInterval(pollingRef.current) }
  }, [id])

  const fetchPaper = async () => {
    try {
      const response = await paperAPI.getPaper(id)
      const p = response.data.data
      setPaper(p)
      // If paper is stuck in SUMMARIZING, poll until done
      if (p.status === 'SUMMARIZING') {
        startPolling()
      }
    } catch (error) {
      toast.error('Failed to load paper details')
      navigate('/dashboard/projects')
    } finally {
      setIsLoading(false)
    }
  }

  const startPolling = () => {
    if (pollingRef.current) return
    pollingRef.current = setInterval(async () => {
      try {
        const response = await paperAPI.getPaper(id)
        const p = response.data.data
        setPaper(p)
        if (p.status !== 'SUMMARIZING') {
          clearInterval(pollingRef.current)
          pollingRef.current = null
          setIsGenerating(false)
          setGeneratingStep('')
          if (p.status === 'SUMMARIZED') {
            toast.success('Summary generated successfully!')
          }
        }
      } catch {}
    }, 3000)
  }

  const handleGenerateSummary = async () => {
    if (isGenerating) return
    setIsGenerating(true)
    setGeneratingStep('Sending paper to AI...')

    try {
      const hasSummary = paper?.summary

      setGeneratingStep('Analyzing paper content with Gemini 2.5...')

      if (hasSummary) {
        await summaryAPI.regenerate(id)
      } else {
        await summaryAPI.generate(id)
      }

      setGeneratingStep('Summary generated! Loading...')
      await fetchPaper()
      toast.success('Summary generated successfully!')
    } catch (error) {
      const msg = error.response?.data?.message || error.message || 'Failed to generate summary'
      toast.error(msg)
      console.error('Summary generation error:', error.response?.data || error)
    } finally {
      setIsGenerating(false)
      setGeneratingStep('')
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 dark:text-gray-400">Loading paper...</p>
        </div>
      </div>
    )
  }

  if (!paper) {
    return <div className="p-8 text-center text-red-500">Paper not found.</div>
  }

  const { metadata, summary, content, project } = paper
  const canGenerate = paper.status === 'READY' || paper.status === 'SUMMARIZED'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto space-y-6"
    >
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Link to="/dashboard/projects" className="hover:text-primary-500 transition-colors">Projects</Link>
            <span>/</span>
            {project && (
              <>
                <Link to={`/dashboard/projects/${project.id}`} className="hover:text-primary-500 transition-colors">{project.name}</Link>
                <span>/</span>
              </>
            )}
            <span className="truncate max-w-xs">{paper.title}</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">{paper.title}</h1>
          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <StatusBadge status={paper.status} />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Uploaded on {new Date(paper.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          {summary && (
            <Button variant="outline" onClick={() => navigate(`/dashboard/summaries/${summary.id}`)}>
              View Summary
            </Button>
          )}
          <Button
            onClick={handleGenerateSummary}
            isLoading={isGenerating}
            disabled={!canGenerate || paper.status === 'PROCESSING'}
            title={!canGenerate ? `Paper must be READY to summarize (current: ${paper.status})` : ''}
          >
            {isGenerating
              ? 'Generating...'
              : summary
              ? 'Regenerate Summary'
              : 'Generate AI Summary'}
          </Button>
        </div>
      </div>

      {/* Generation Progress Banner */}
      <AnimatePresence>
        {isGenerating && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="rounded-2xl bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-200 dark:border-primary-800 p-4 flex items-center gap-4"
          >
            <div className="w-6 h-6 border-3 border-primary-500 border-t-transparent rounded-full animate-spin flex-shrink-0" />
            <div>
              <p className="font-semibold text-primary-700 dark:text-primary-300 text-sm">
                Generating comprehensive AI summary...
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {generatingStep || 'This may take 15-30 seconds for a thorough analysis.'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Metadata */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Paper Metadata</h2>
            {metadata ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Authors</p>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    {metadata.authors?.length > 0 ? metadata.authors.join(', ') : 'Unknown'}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Journal / Conference</p>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    {metadata.journal || metadata.conference || 'Unknown'}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Year</p>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">{metadata.year || 'Unknown'}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">DOI</p>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">{metadata.doi || '�'}</p>
                </div>
                {metadata.keywords?.length > 0 && (
                  <div className="md:col-span-2">
                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-2">Keywords</p>
                    <div className="flex flex-wrap gap-2">
                      {metadata.keywords.map(kw => (
                        <span key={kw} className="px-2.5 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg text-xs font-medium">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {metadata.abstract && (
                  <div className="md:col-span-2 mt-2">
                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-2">Abstract</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed text-justify bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                      {metadata.abstract}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-sm">Metadata extraction pending or failed.</p>
            )}
          </div>

          {/* Summary Preview (if exists) */}
          {summary && (
            <div className="card p-6 border-l-4 border-primary-500">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Summary Preview</h2>
                <Button size="sm" onClick={() => navigate(`/dashboard/summaries/${summary.id}`)}>
                  View Full Summary
                </Button>
              </div>
              {summary.abstractSummary && (
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-4">
                  {summary.abstractSummary}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">File Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Type</span>
                <span className="font-medium text-gray-900 dark:text-white">{paper.uploadType}</span>
              </li>
              {paper.fileSize && (
                <li className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Size</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {(paper.fileSize / 1024 / 1024).toFixed(2)} MB
                  </span>
                </li>
              )}
              {content && (
                <>
                  <li className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Word Count</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {content.wordCount?.toLocaleString()}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Language</span>
                    <span className="font-medium text-gray-900 dark:text-white uppercase">{content.language}</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* AI Summary Status Card */}
          <div className={`card p-6 ${summary ? 'border border-green-200 dark:border-green-800' : 'border border-dashed border-gray-300 dark:border-gray-700'}`}>
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">AI Summary Status</h3>
            {summary ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold text-sm">Summary Available</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Generated on {new Date(summary.createdAt).toLocaleDateString()}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  No summary yet. Click "Generate AI Summary" to create a comprehensive analysis using Gemini AI.
                </p>
                <div className="text-xs text-gray-400 dark:text-gray-500 space-y-1">
                  <p><span className="text-primary-400 mr-1">&#10003;</span> Research problem & objectives</p>
                  <p><span className="text-primary-400 mr-1">&#10003;</span> Methodology & algorithms</p>
                  <p><span className="text-primary-400 mr-1">&#10003;</span> Results & contributions</p>
                  <p><span className="text-primary-400 mr-1">&#10003;</span> Limitations & future work</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PaperDetail
