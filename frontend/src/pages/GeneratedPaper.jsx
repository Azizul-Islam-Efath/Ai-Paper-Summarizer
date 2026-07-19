import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { generatedPaperAPI } from '../services/generatedPaperService'
import { projectAPI } from '../services/projectService'
import Button from '../components/Button'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import MarkdownPreview from '@uiw/react-markdown-preview'

const GeneratedPaper = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [paper, setPaper] = useState(null)
  const [project, setProject] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const [isExportingPdf, setIsExportingPdf] = useState(false)
  const [isExportingDocx, setIsExportingDocx] = useState(false)
  const [isExportingMarkdown, setIsExportingMarkdown] = useState(false)
  const [isExportingHtml, setIsExportingHtml] = useState(false)

  useEffect(() => {
    fetchData()
  }, [id])

  const fetchData = async () => {
    try {
      const paperRes = await generatedPaperAPI.getGeneratedPaper(id)
      const p = paperRes.data.data
      setPaper(p)
      
      if (p.projectId) {
        const projRes = await projectAPI.getProject(p.projectId)
        setProject(projRes.data.data)
      }

      // Auto-refresh while processing
      if (p.status === 'PROCESSING') {
        setTimeout(fetchData, 5000)
      }
    } catch (error) {
      toast.error('Failed to load generated paper')
      navigate('/dashboard/projects')
    } finally {
      setIsLoading(false)
    }
  }

  const handleExportPdf = async () => {
    setIsExportingPdf(true)
    try {
      const response = await generatedPaperAPI.exportPdf(id)
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `${paper.title || 'Generated_Paper'}.pdf`)
      document.body.appendChild(link)
      link.click()
    } catch (error) {
      toast.error('Failed to export PDF')
    } finally {
      setIsExportingPdf(false)
    }
  }

  const handleExportDocx = async () => {
    setIsExportingDocx(true)
    try {
      const response = await generatedPaperAPI.exportDocx(id)
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `${paper.title || 'Generated_Paper'}.docx`)
      document.body.appendChild(link)
      link.click()
    } catch (error) {
      toast.error('Failed to export DOCX')
    } finally {
      setIsExportingDocx(false)
    }
  }

  const handleExportMarkdown = async () => {
    setIsExportingMarkdown(true)
    try {
      const response = await generatedPaperAPI.exportMarkdown(id)
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `${paper.title || 'Generated_Paper'}.md`)
      document.body.appendChild(link)
      link.click()
    } catch (error) {
      toast.error('Failed to export Markdown')
    } finally {
      setIsExportingMarkdown(false)
    }
  }

  const handleExportHtml = async () => {
    setIsExportingHtml(true)
    try {
      const response = await generatedPaperAPI.exportHtml(id)
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `${paper.title || 'Generated_Paper'}.html`)
      document.body.appendChild(link)
      link.click()
    } catch (error) {
      toast.error('Failed to export HTML')
    } finally {
      setIsExportingHtml(false)
    }
  }


  const handleDelete = async () => {
    if (!window.confirm('Delete this synthesis draft? This cannot be undone.')) return
    try {
      toast.loading('Deleting draft...', { id: 'del-draft' })
      await generatedPaperAPI.deleteGeneratedPaper(id)
      toast.success('Draft deleted.', { id: 'del-draft' })
      navigate(project ? `/dashboard/projects/${project.id}` : '/dashboard/projects')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to delete draft', { id: 'del-draft' })
    }
  }

  if (isLoading) {
    return <div className="p-8 text-center text-gray-500">Loading paper...</div>
  }

  if (!paper) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-500 mb-4">Paper not found.</p>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    )
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto space-y-6"
    >
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
            <span>Generated Paper</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{paper.title}</h1>
          <div className="flex items-center gap-4 mt-2">
            <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
              paper.status === 'COMPLETED' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
              paper.status === 'PROCESSING' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
              'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
            }`}>
              {paper.status}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Generated on {new Date(paper.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 flex-wrap">
          <Button variant="outline" onClick={handleExportMarkdown} isLoading={isExportingMarkdown} disabled={paper.status !== 'COMPLETED'}>
            Export MD
          </Button>
          <Button variant="outline" onClick={handleExportHtml} isLoading={isExportingHtml} disabled={paper.status !== 'COMPLETED'}>
            Export HTML
          </Button>
          <Button variant="outline" onClick={handleExportDocx} isLoading={isExportingDocx} disabled={paper.status !== 'COMPLETED'}>
            Export DOCX
          </Button>
          <Button onClick={handleExportPdf} isLoading={isExportingPdf} disabled={paper.status !== 'COMPLETED'}>
            Export PDF
          </Button>
          <Button
            variant="outline"
            className="text-red-600 border-red-200 hover:bg-red-50 dark:hover:bg-red-900/20"
            onClick={handleDelete}
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            Delete Draft
          </Button>
        </div>
      </div>

      <div className="card">
        {paper.status === 'PROCESSING' ? (
          <div className="p-20 text-center">
            <svg className="animate-spin h-10 w-10 text-primary-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <h2 className="text-xl font-medium text-gray-900 dark:text-white">AI is writing your paper...</h2>
            <p className="text-gray-500 mt-2">This may take a few minutes depending on the complexity of your project.</p>
          </div>
        ) : paper.status === 'ERROR' ? (
          <div className="p-12 text-center text-red-500">
            Failed to generate paper. Please try again.
          </div>
        ) : (
          <div className="p-8 md:p-12 bg-white dark:bg-gray-900" style={{ minHeight: '600px' }}>
            {paper.fullContent ? (
              <MarkdownPreview 
                source={paper.fullContent} 
                style={{ backgroundColor: 'transparent' }}
                wrapperElement={{
                  "data-color-mode": "light"
                }}
              />
            ) : (
              <p className="text-gray-500">No content available.</p>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default GeneratedPaper
