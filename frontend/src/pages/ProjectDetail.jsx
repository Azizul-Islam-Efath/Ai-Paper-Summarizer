import { useState, useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { generatedPaperAPI } from '../services/generatedPaperService'
import { projectAPI } from '../services/projectService'
import { summaryAPI } from '../services/summaryService'
import LoadingSpinner from '../components/LoadingSpinner'
import EmptyState from '../components/EmptyState'
import Button from '../components/Button'
import Modal from '../components/Modal'
import toast from 'react-hot-toast'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [summarizingAll, setSummarizingAll] = useState(false)
  
  // Paper Generation Modal States
  const [isGenModalOpen, setIsGenModalOpen] = useState(false)
  const [genTitle, setGenTitle] = useState('')
  const [genFormat, setGenFormat] = useState('IEEE')
  const [genObjectives, setGenObjectives] = useState('')
  const [isGeneratingPaper, setIsGeneratingPaper] = useState(false)

  const pollingRef = useRef(null)

  const fetchProjectData = async () => {
    try {
      const [projRes, statsRes] = await Promise.all([
        projectAPI.getProject(id),
        projectAPI.getStats(id),
      ])
      const proj = projRes.data.data
      setProject(proj)
      setStats(statsRes.data.data)

      // Start polling if anything is currently running/processing
      const hasProcessing = 
        proj?.papers?.some(p => p.status === 'PROCESSING' || p.status === 'SUMMARIZING')

      if (hasProcessing) {
        startPolling()
      }
    } catch {
      toast.error('Failed to load project details')
    } finally {
      setLoading(false)
    }
  }

  const startPolling = () => {
    if (pollingRef.current) return
    pollingRef.current = setInterval(async () => {
      try {
        const [projRes, statsRes] = await Promise.all([
          projectAPI.getProject(id),
          projectAPI.getStats(id),
        ])
        const proj = projRes.data.data
        setProject(proj)
        setStats(statsRes.data.data)

        const stillProcessing = 
          proj?.papers?.some(p => p.status === 'PROCESSING' || p.status === 'SUMMARIZING')

        if (!stillProcessing) {
          clearInterval(pollingRef.current)
          pollingRef.current = null
        }
      } catch {}
    }, 4000)
  }

  useEffect(() => {
    fetchProjectData()
    return () => { if (pollingRef.current) clearInterval(pollingRef.current) }
  }, [id])

  const handleSummarizeAll = async () => {
    const unsummarized = project?.papers?.filter(p => p.status === 'READY' && !p.summary)
    if (!unsummarized || unsummarized.length === 0) {
      toast('All papers are already summarized!', { icon: '✓' })
      return
    }
    setSummarizingAll(true)
    toast.loading(`Summarizing ${unsummarized.length} paper(s)...`, { id: 'summarize-all' })
    let successCount = 0
    for (const paper of unsummarized) {
      try {
        await summaryAPI.generate(paper.id)
        successCount++
      } catch (err) {
        const msg = err.response?.data?.message || err.message
        toast.error(`Failed for "${paper.title.substring(0, 30)}...": ${msg}`)
      }
    }
    toast.success(`${successCount}/${unsummarized.length} papers summarized!`, { id: 'summarize-all' })
    setSummarizingAll(false)
    fetchProjectData()
  }



  const handleDeleteDraft = async (draftId) => {
    if (!window.confirm('Delete this synthesis draft? This cannot be undone.')) return
    try {
      toast.loading('Deleting draft...', { id: 'del-draft' })
      await generatedPaperAPI.deleteGeneratedPaper(draftId)
      toast.success('Draft deleted', { id: 'del-draft' })
      fetchProjectData()
    } catch (err) {
      toast.error(err.response?.data?.message || err.message, { id: 'del-draft' })
    }
  }

  const openGenModal = () => {
    setGenTitle(`Synthesized Paper - ${project?.name || 'Workspace'}`)
    setGenFormat('IEEE')
    setGenObjectives('')
    setIsGenModalOpen(true)
  }

  const handleGeneratePaperSubmit = async (e) => {
    e.preventDefault()
    setIsGeneratingPaper(true)
    try {
      toast.loading('Initializing synthesis pipeline...', { id: 'gen-paper' })
      const res = await generatedPaperAPI.generate({
        projectId: id,
        title: genTitle,
        format: genFormat,
        objectives: genObjectives,
      })
      const newPaper = res.data.data
      toast.success('Synthesis draft initialized!', { id: 'gen-paper' })
      setIsGenModalOpen(false)
      navigate(`/dashboard/generator/${newPaper.id}`)
    } catch (err) {
      const msg = err.response?.data?.message || err.message
      toast.error(msg, { id: 'gen-paper' })
    } finally {
      setIsGeneratingPaper(false)
    }
  }

  if (loading) return <LoadingSpinner fullScreen />
  if (!project) {
    return (
      <EmptyState
        title="Project Not Found"
        description="The project you are looking for does not exist or you do not have permission to view it."
        action={() => window.location.href = '/dashboard/projects'}
        actionLabel="Back to Projects"
      />
    )
  }



  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{project.name}</h1>
            <span className="px-2.5 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-semibold uppercase">
              {project.status.toLowerCase()}
            </span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-3xl">
            {project.description || 'No description provided.'}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            isLoading={summarizingAll}
            disabled={summarizingAll}
            onClick={handleSummarizeAll}
          >
            Summarize All Papers
          </Button>
          <Link to={`/dashboard/upload?projectId=${project.id}`} className="btn-primary">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Upload Papers
          </Link>
        </div>
      </div>

      {/* Grid Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6 flex flex-col justify-between">
          <span className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase">Uploaded Papers</span>
          <span className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stats?.paperCount || 0}</span>
        </div>
        <div className="card p-6 flex flex-col justify-between">
          <span className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase">Summarized Papers</span>
          <span className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">{stats?.summarizedCount || 0}</span>
        </div>
        <div className="card p-6 flex flex-col justify-between">
          <span className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase">AI Synthesis Drafts</span>
          <span className="text-3xl font-bold text-primary-600 dark:text-primary-400 mt-2">{stats?.generatedCount || 0}</span>
        </div>
        <div className="card p-6 flex flex-col justify-between">
          <span className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase">Status</span>
          <span className={`text-sm font-bold mt-2 ${stats?.readyToGenerate ? 'text-green-500' : 'text-yellow-500'}`}>
            {stats?.readyToGenerate ? 'Synthesis Ready' : 'Summarize min. 1 paper'}
          </span>
        </div>
      </div>

      {/* Core Tabs Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          {/* Papers List */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Workspace Papers</h2>
              <span className="text-xs text-gray-400 font-medium">Max 20 PDFs</span>
            </div>

            {project.papers.length === 0 ? (
              <div className="card p-8 text-center bg-white dark:bg-gray-800">
                <p className="text-gray-500 dark:text-gray-400 mb-4">No papers uploaded to this project yet.</p>
                <Link to={`/dashboard/upload?projectId=${project.id}`} className="btn-secondary text-sm">
                  Upload first paper
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {project.papers.map((paper) => (
                  <div key={paper.id} className="card p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950/20 text-red-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-gray-900 dark:text-white truncate">{paper.title}</h3>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {paper.metadata?.year ? `${paper.metadata.year} · ` : ''}
                          Status: <span className="font-medium text-primary-600">{paper.status}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        to={`/dashboard/papers/${paper.id}`}
                        className="px-3 py-1.5 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-xs font-semibold"
                      >
                        Details
                      </Link>
                      {paper.summary && (
                        <Link
                          to={`/dashboard/summaries/${paper.summary.id}`}
                          className="px-3 py-1.5 bg-green-50 dark:bg-green-950/30 hover:bg-green-100 text-green-700 dark:text-green-400 rounded-lg text-xs font-semibold"
                        >
                          Summary
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Generated Papers List */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">AI Synthesis Drafts</h2>
            {project.generatedPapers.length === 0 ? (
              <div className="card p-6 text-center bg-gray-50/50 dark:bg-gray-800/20 border-dashed border border-gray-200 dark:border-gray-800">
                <p className="text-gray-500 dark:text-gray-400 text-sm">No synthesis drafts generated yet.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {project.generatedPapers.map((paper) => (
                  <div key={paper.id} className="card p-4 flex items-center justify-between border-l-4 border-purple-500 bg-white dark:bg-gray-800">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/20 text-purple-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-gray-900 dark:text-white truncate">{paper.title}</h3>
                        <p className="text-xs text-gray-400 mt-0.5">
                          Format: <span className="font-medium text-purple-600 uppercase">{paper.format}</span> · Status: <span className="font-medium text-purple-600">{paper.status}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/dashboard/generator/${paper.id}`}
                        className="px-3 py-1.5 bg-purple-50 dark:bg-purple-950/30 hover:bg-purple-100 text-purple-700 dark:text-purple-400 rounded-lg text-xs font-semibold"
                      >
                        {paper.status === 'COMPLETED' ? 'View Draft' : 'Check Progress'}
                      </Link>
                      <button
                        onClick={() => handleDeleteDraft(paper.id)}
                        title="Delete this draft"
                        className="p-1.5 rounded-lg text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* AI Synthesis Actions (Sidebar) */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Workspace Synthesis</h2>

          {/* AI Research Paper Generator */}
          <div className="card p-6 bg-white dark:bg-gray-800 space-y-4 border border-primary-200 dark:border-primary-900">
            <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              AI Paper Generator
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Synthesize all uploaded evidence to write a completely new academic paper addressing gaps and featuring IEEE, Elsevier, or Springer formatting.
            </p>
            <Button
              className="w-full"
              disabled={!stats?.readyToGenerate}
              title={!stats?.readyToGenerate ? 'Requires at least 1 summarized paper' : ''}
              onClick={openGenModal}
            >
              Generate Synthesis Draft
            </Button>
          </div>
        </div>
      </div>

      {/* Generate Paper Config Modal */}
      <Modal isOpen={isGenModalOpen} onClose={() => setIsGenModalOpen(false)} title="Generate AI Synthesis Paper">
        <form onSubmit={handleGeneratePaperSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Research Paper Title
            </label>
            <input
              type="text"
              required
              value={genTitle}
              onChange={(e) => setGenTitle(e.target.value)}
              className="w-full rounded-xl border border-gray-200 dark:border-gray-700 p-2.5 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="e.g. A Novel Music Classification Architecture"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Academic Format Standard
            </label>
            <select
              value={genFormat}
              onChange={(e) => setGenFormat(e.target.value)}
              className="w-full rounded-xl border border-gray-200 dark:border-gray-700 p-2.5 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="IEEE">IEEE Template (Conference Style)</option>
              <option value="SPRINGER">Springer LNCS Standard</option>
              <option value="ELSEVIER">Elsevier Science Direct</option>
              <option value="APA">APA Academic Format</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
              User Objectives & Focus (Optional)
            </label>
            <textarea
              value={genObjectives}
              onChange={(e) => setGenObjectives(e.target.value)}
              className="w-full rounded-xl border border-gray-200 dark:border-gray-700 p-2.5 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 h-28 resize-none"
              placeholder="Outline specific objectives (e.g. Focus on CNN hybrid model performance compared to SVM baselines)"
            />
          </div>

          <div className="flex justify-end gap-3 pt-3">
            <Button variant="outline" type="button" onClick={() => setIsGenModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" isLoading={isGeneratingPaper}>
              Generate Paper
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default ProjectDetail
