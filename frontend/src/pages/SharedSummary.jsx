import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { summaryAPI } from '../services/summaryService'
import LoadingSpinner from '../components/LoadingSpinner'
import EmptyState from '../components/EmptyState'

const SharedSummary = () => {
  const { token } = useParams()
  const [summary, setSummary] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchSharedSummary()
  }, [token])

  const fetchSharedSummary = async () => {
    try {
      const response = await summaryAPI.getShared(token)
      setSummary(response.data.data)
    } catch (err) {
      setError(err.response?.data?.message || 'Link expired or invalid')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <LoadingSpinner fullScreen />
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <EmptyState
          title="Link Expired"
          description={error}
          action={() => window.location.href = '/'}
          actionLabel="Go Home"
        />
      </div>
    )
  }
  if (!summary) return null

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-8 mb-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{summary.paper.title}</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Shared summary · {new Date(summary.paper.createdAt).toLocaleDateString()}
              </p>
            </div>
            <Link to="/" className="btn-primary text-sm">
              Try PaperSummarizer
            </Link>
          </div>

          {summary.year && (
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm font-medium">
                Year: {summary.year}
              </span>
              {summary.accuracy && (
                <span className="px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium">
                  Accuracy: {summary.accuracy}
                </span>
              )}
            </div>
          )}

          <div className="space-y-6">
            {[
              { title: 'Abstract Summary', content: summary.abstractSummary },
              { title: 'Research Problem', content: summary.researchProblem },
              { title: 'Methodology', content: summary.methodology },
              { title: 'Key Contributions', content: summary.keyContributions },
              { title: 'Novelty', content: summary.novelty },
              { title: 'Applications', content: summary.applications },
              { title: 'Advantages', content: summary.advantages },
              { title: 'Disadvantages', content: summary.disadvantages },
              { title: 'Limitations', content: summary.limitations },
              { title: 'Future Work', content: summary.futureWork },
              { title: 'Conclusion', content: summary.conclusion },
            ].map((section) => (
              <div key={section.title} className="border-b border-gray-100 dark:border-gray-700 pb-6 last:border-0">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{section.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{section.content || 'Not specified'}</p>
              </div>
            ))}

            {summary.keywords && summary.keywords.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {summary.keywords.map((keyword, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm font-medium">
                    {keyword}
                  </span>
                ))}
              </div>
            )}

            {summary.citation && (
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 font-mono text-sm text-gray-700 dark:text-gray-300">
                {summary.citation}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SharedSummary
