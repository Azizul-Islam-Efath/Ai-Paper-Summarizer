import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { usePapers } from '../hooks/usePapers'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
import LoadingSpinner from '../components/LoadingSpinner'
import EmptyState from '../components/EmptyState'
import Modal from '../components/Modal'
import Button from '../components/Button'
import toast from 'react-hot-toast'

const PaperCard = ({ paper, onDelete, onToggleFavorite }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="card card-hover p-5 group"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              paper.uploadType === 'PDF' ? 'bg-red-100 dark:bg-red-900/30 text-red-600' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600'
            }`}>
              {paper.uploadType === 'PDF' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                {paper.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(paper.createdAt).toLocaleDateString()} · {paper.uploadType}
              </p>
            </div>
          </div>
          <button
            onClick={() => onToggleFavorite(paper.id)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className={`w-5 h-5 ${paper.isFavorite ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </button>
        </div>

        {paper.summary && (
          <div className="mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
              {paper.summary.abstractSummary}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {paper.summary.keywords?.slice(0, 3).map((keyword, i) => (
                <span key={i} className="px-2 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-medium">
                  {keyword}
                </span>
              ))}
              {paper.summary.year && (
                <span className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs">
                  {paper.summary.year}
                </span>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 pt-3 border-t border-gray-100 dark:border-gray-700">
          <Link
            to={`/dashboard/papers/${paper.id}`}
            className="flex-1 text-center py-2 rounded-lg text-sm font-medium text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
          >
            View Details
          </Link>
          {paper.summary ? (
            <Link
              to={`/dashboard/summaries/${paper.summary.id}`}
              className="flex-1 text-center py-2 rounded-lg text-sm font-medium text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
            >
              View Summary
            </Link>
          ) : (
            <Link
              to={`/dashboard/papers/${paper.id}`}
              className="flex-1 text-center py-2 rounded-lg text-sm font-medium text-secondary-600 hover:bg-secondary-50 dark:hover:bg-secondary-900/20 transition-colors"
            >
              Generate Summary
            </Link>
          )}
          <button
            onClick={() => setShowDeleteModal(true)}
            className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </motion.div>

      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Delete Paper"
      >
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Are you sure you want to delete "{paper.title}"? This action cannot be undone and will also delete any associated summary.
        </p>
        <div className="flex gap-3 justify-end">
          <Button variant="ghost" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              onDelete(paper.id)
              setShowDeleteModal(false)
            }}
          >
            Delete
          </Button>
        </div>
      </Modal>
    </>
  )
}

const Papers = () => {
  const { papers, loading, pagination, params, setParams, fetchPapers, deletePaper, toggleFavorite } = usePapers()
  const [filter, setFilter] = useState('all')

  const handleSearch = (query) => {
    setParams((prev) => ({ ...prev, search: query, page: 1 }))
  }

  const handlePageChange = (page) => {
    setParams((prev) => ({ ...prev, page }))
  }

  const filteredPapers = filter === 'favorites'
    ? papers.filter((p) => p.isFavorite)
    : papers

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Papers</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage and organize your research papers.</p>
        </div>
        <Link to="/dashboard/upload" className="btn-primary self-start">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Upload Paper
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <SearchBar
          onSearch={handleSearch}
          placeholder="Search papers..."
          className="flex-1"
        />
        <div className="flex gap-2">
          {['all', 'favorites'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl font-medium text-sm capitalize transition-all ${
                filter === f
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {loading && papers.length === 0 ? (
        <div className="flex justify-center py-12">
          <LoadingSpinner size="lg" />
        </div>
      ) : filteredPapers.length === 0 ? (
        <EmptyState
          title={filter === 'favorites' ? 'No favorites yet' : 'No papers yet'}
          description={filter === 'favorites' ? 'Star papers to see them here.' : 'Upload your first research paper to get started.'}
          action={() => window.location.href = '/dashboard/upload'}
          actionLabel="Upload Paper"
        />
      ) : (
        <>
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredPapers.map((paper) => (
              <PaperCard
                key={paper.id}
                paper={paper}
                onDelete={deletePaper}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </motion.div>

          <Pagination
            page={pagination.page}
            totalPages={pagination.totalPages}
            hasNext={pagination.hasNext}
            hasPrev={pagination.hasPrev}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  )
}

export default Papers
