import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projectAPI } from '../services/projectService'
import Button from '../components/Button'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import Modal from '../components/Modal'
import LoadingSpinner from '../components/LoadingSpinner'
import EmptyState from '../components/EmptyState'
import SearchBar from '../components/SearchBar'
import toast from 'react-hot-toast'

const ProjectCard = ({ project, onDelete }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card card-hover p-6 flex flex-col justify-between"
      >
        <div>
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate max-w-[80%]">
              {project.name}
            </h3>
            <span className="px-2.5 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-semibold uppercase">
              {project.status.toLowerCase()}
            </span>
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-3 h-12">
            {project.description || 'No description provided.'}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6 border-t border-b border-gray-100 dark:border-gray-700 py-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {project._count?.papers || 0}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 uppercase font-semibold">Papers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {project._count?.generatedPapers || 0}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 uppercase font-semibold">Generated</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-4 pt-2 border-t border-gray-100 dark:border-gray-700">
          <Link
            to={`/dashboard/projects/${project.id}`}
            className="flex-1 text-center py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-sm"
          >
            Open Workspace
          </Link>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-400 hover:text-red-500 hover:border-red-200 dark:hover:bg-red-950/20 transition-all"
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
        title="Delete Project"
      >
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Are you sure you want to delete the project <strong>"{project.name}"</strong>?
          All uploaded papers, summaries, and generated papers inside this project will be permanently deleted. This action cannot be undone.
        </p>
        <div className="flex gap-3 justify-end">
          <Button variant="ghost" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              onDelete(project.id)
              setShowDeleteModal(false)
            }}
          >
            Delete Project
          </Button>
        </div>
      </Modal>
    </>
  )
}

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const fetchProjects = async () => {
    try {
      const response = await projectAPI.getProjects({ search })
      setProjects(response.data.data)
    } catch {
      toast.error('Failed to load projects')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [search])

  const handleCreateProject = async (e) => {
    e.preventDefault()
    if (!name.trim()) return

    setIsSubmitting(true)
    try {
      await projectAPI.createProject({ name, description })
      toast.success('Project created successfully!')
      setName('')
      setDescription('')
      setIsModalOpen(false)
      fetchProjects()
    } catch {
      toast.error('Failed to create project')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeleteProject = async (id) => {
    try {
      await projectAPI.deleteProject(id)
      toast.success('Project deleted')
      fetchProjects()
    } catch {
      toast.error('Failed to delete project')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Research Projects</h1>
          <p className="text-gray-500 dark:text-gray-400">Organize and manage multi-paper research workspaces.</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Project
        </Button>
      </div>

      <div className="flex gap-4">
        <SearchBar
          onSearch={setSearch}
          placeholder="Search projects..."
          className="flex-1"
        />
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <LoadingSpinner size="lg" />
        </div>
      ) : projects.length === 0 ? (
        <EmptyState
          title={search ? 'No matches found' : 'No projects yet'}
          description={search ? 'Try adjusting your search keywords.' : 'Create a research project to start uploading papers and generating literature syntheses.'}
          action={() => setIsModalOpen(true)}
          actionLabel="Create Project"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDelete={handleDeleteProject}
            />
          ))}
        </div>
      )}

      {/* New Project Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Research Project"
      >
        <form onSubmit={handleCreateProject} className="space-y-5">
          <Input
            label="Project Name"
            placeholder="e.g., Deep Learning in Oncology"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextArea
            label="Description"
            placeholder="Describe the research direction, themes, or goals of this workspace..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" isLoading={isSubmitting}>
              Create Project
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default Projects
