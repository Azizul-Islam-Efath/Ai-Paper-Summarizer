import { useState, useCallback } from 'react'
import { summaryAPI } from '../services/summaryService'
import toast from 'react-hot-toast'

export const useSummary = () => {
  const [summary, setSummary] = useState(null)
  const [loading, setLoading] = useState(false)
  const [generating, setGenerating] = useState(false)

  const generateSummary = useCallback(async (paperId) => {
    setGenerating(true)
    try {
      const response = await summaryAPI.generate(paperId)
      setSummary(response.data.data)
      toast.success('Summary generated successfully!')
      return response.data.data
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to generate summary')
      throw error
    } finally {
      setGenerating(false)
    }
  }, [])

  const regenerateSummary = useCallback(async (paperId) => {
    setGenerating(true)
    try {
      const response = await summaryAPI.regenerate(paperId)
      setSummary(response.data.data)
      toast.success('Summary regenerated!')
      return response.data.data
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to regenerate summary')
      throw error
    } finally {
      setGenerating(false)
    }
  }, [])

  const fetchSummary = useCallback(async (id) => {
    setLoading(true)
    try {
      const response = await summaryAPI.getSummary(id)
      setSummary(response.data.data)
      return response.data.data
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to fetch summary')
      throw error
    } finally {
      setLoading(false)
    }
  }, [])

  const deleteSummary = useCallback(async (id) => {
    try {
      await summaryAPI.deleteSummary(id)
      setSummary(null)
      toast.success('Summary deleted')
    } catch (error) {
      toast.error('Failed to delete summary')
    }
  }, [])

  const exportPdf = async (id, filename) => {
    try {
      const response = await summaryAPI.exportPdf(id)
      const blob = new Blob([response.data], { type: 'application/pdf' })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${filename}.pdf`
      link.click()
      window.URL.revokeObjectURL(url)
      toast.success('PDF exported!')
    } catch (error) {
      toast.error('Failed to export PDF')
    }
  }

  const exportDocx = async (id, filename) => {
    try {
      const response = await summaryAPI.exportDocx(id)
      const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${filename}.docx`
      link.click()
      window.URL.revokeObjectURL(url)
      toast.success('DOCX exported!')
    } catch (error) {
      toast.error('Failed to export DOCX')
    }
  }

  const shareSummary = async (id) => {
    try {
      const response = await summaryAPI.share(id)
      const { shareToken } = response.data.data
      const shareUrl = `${window.location.origin}/share/${shareToken}`
      await navigator.clipboard.writeText(shareUrl)
      toast.success('Share link copied to clipboard!')
      return shareUrl
    } catch (error) {
      toast.error('Failed to create share link')
    }
  }

  return {
    summary,
    loading,
    generating,
    generateSummary,
    regenerateSummary,
    fetchSummary,
    deleteSummary,
    exportPdf,
    exportDocx,
    shareSummary,
  }
}
