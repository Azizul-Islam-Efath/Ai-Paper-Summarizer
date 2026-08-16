import { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { paperAPI } from '../services/paperService'
import { projectAPI } from '../services/projectService'
import Button from '../components/Button'
import TextArea from '../components/TextArea'
import Input from '../components/Input'
import toast from 'react-hot-toast'

const Upload = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('pdf')
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [files, setFiles] = useState([])
  const [projects, setProjects] = useState([])
  const [selectedProjectId, setSelectedProjectId] = useState('')
  const [isLoadingProjects, setIsLoadingProjects] = useState(true)

  const { register, handleSubmit, formState: { errors } } = useForm()

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectAPI.getProjects({ limit: 100 })
        const projectList = response.data.data || []
        setProjects(projectList)
        if (projectList.length > 0) {
          setSelectedProjectId(projectList[0].id)
        }
      } catch (error) {
        toast.error('Failed to load projects')
      } finally {
        setIsLoadingProjects(false)
      }
    }
    fetchProjects()
  }, [])

  const onDrop = useCallback((acceptedFiles) => {
    const validFiles = acceptedFiles.filter(file => {
      if (file.size > 10 * 1024 * 1024) {
        toast.error(`${file.name} is too large. Max 10MB.`)
        return false
      }
      return true
    })

    setFiles(prev => {
      const newFiles = [...prev, ...validFiles]
      if (newFiles.length > 20) {
        toast.error('Maximum 20 files allowed.')
        return newFiles.slice(0, 20)
      }
      return newFiles
    })
  }, [])

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleUploadFiles = async () => {
    if (files.length === 0) return
    if (!selectedProjectId) {
      toast.error('Please select a project')
      return
    }

    setIsUploading(true)
    setUploadProgress(0)

    const formData = new FormData()
    files.forEach(file => {
      formData.append('files', file)
    })
    formData.append('projectId', selectedProjectId)

    try {
      const response = await paperAPI.uploadPdf(formData, (progressEvent) => {
        const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        setUploadProgress(progress)
      })
      toast.success(`${files.length} paper(s) uploaded successfully!`)
      // Navigate to project detail page
      navigate(`/dashboard/projects/${selectedProjectId}`)
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to upload papers')
      setIsUploading(false)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    maxFiles: 20,
    disabled: isUploading,
  })

  const onTextSubmit = async (data) => {
    if (!selectedProjectId) {
      toast.error('Please select a project')
      return
    }
    
    setIsUploading(true)
    try {
      const response = await paperAPI.uploadText({ ...data, projectId: selectedProjectId })
      toast.success('Paper uploaded successfully!')
      navigate(`/dashboard/projects/${selectedProjectId}`)
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to upload text')
      setIsUploading(false)
    }
  }

  if (isLoadingProjects) {
    return <div className="p-8 text-center">Loading...</div>
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Upload Papers</h1>
        <p className="text-gray-500 dark:text-gray-400">Upload multiple PDFs to a project for summarization and comparison.</p>
      </div>

      {projects.length === 0 ? (
        <div className="card p-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">You need a project to upload papers.</p>
          <Button onClick={() => navigate('/dashboard/projects')}>Create Project</Button>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Select Project
            </label>
            <select
              value={selectedProjectId}
              onChange={(e) => setSelectedProjectId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
              disabled={isUploading}
            >
              {projects.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab('pdf')}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                activeTab === 'pdf'
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Upload PDFs
              </span>
            </button>
            <button
              onClick={() => setActiveTab('text')}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                activeTab === 'text'
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Paste Text
              </span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'pdf' ? (
              <motion.div
                key="pdf"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer ${
                    isDragActive
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                  } ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <input {...getInputProps()} />
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    {isDragActive ? 'Drop your PDFs here' : 'Drag & drop up to 20 PDFs here'}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    or click to browse files
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    Maximum file size: 10MB per file
                  </p>
                </div>

                {files.length > 0 && (
                  <div className="mt-6 space-y-3">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{files.length} File(s) Selected</h3>
                      <Button onClick={handleUploadFiles} isLoading={isUploading}>
                        Upload {files.length} File(s)
                      </Button>
                    </div>

                    {isUploading && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-500 dark:text-gray-400">Uploading Batch...</span>
                          <span className="text-primary-600 font-medium">{uploadProgress}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full gradient-bg rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${uploadProgress}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>
                    )}

                    <div className="max-h-64 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                      <AnimatePresence>
                        {files.map((file, index) => (
                          <motion.div
                            key={`${file.name}-${index}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="card p-3 flex items-center justify-between"
                          >
                            <div className="flex items-center gap-3 overflow-hidden">
                              <div className="w-8 h-8 rounded bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <div className="min-w-0">
                                <p className="font-medium text-sm text-gray-900 dark:text-white truncate">{file.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  {(file.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </div>
                            </div>
                            {!isUploading && (
                              <button
                                onClick={() => removeFile(index)}
                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="text"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <form onSubmit={handleSubmit(onTextSubmit)} className="space-y-5">
                  <Input
                    label="Paper Title"
                    placeholder="Enter the paper title..."
                    error={errors.title?.message}
                    {...register('title', { required: 'Title is required', maxLength: { value: 500, message: 'Title too long' } })}
                  />
                  <TextArea
                    label="Paper Content"
                    placeholder="Paste the full paper text here..."
                    rows={12}
                    error={errors.text?.message}
                    helperText="Minimum 100 characters required"
                    {...register('text', { required: 'Text is required', minLength: { value: 100, message: 'At least 100 characters' }, maxLength: { value: 500000, message: 'Maximum 500,000 characters' } })}
                  />
                  <Button type="submit" isLoading={isUploading} className="w-full">
                    Upload Text
                  </Button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  )
}

export default Upload
