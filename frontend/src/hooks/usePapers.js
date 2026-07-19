import { useState, useEffect, useCallback } from 'react'
import { paperAPI } from '../services/paperService'
import toast from 'react-hot-toast'

export const usePapers = (initialParams = {}) => {
  const [papers, setPapers] = useState([])
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: false,
    hasPrev: false,
  })
  const [params, setParams] = useState(initialParams)

  const fetchPapers = useCallback(async () => {
    setLoading(true)
    try {
      const response = await paperAPI.getPapers(params)
      setPapers(response.data.data.papers)
      setPagination(response.data.data.pagination)
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to fetch papers')
    } finally {
      setLoading(false)
    }
  }, [params])

  useEffect(() => {
    fetchPapers()
  }, [fetchPapers])

  const deletePaper = async (id) => {
    try {
      await paperAPI.deletePaper(id)
      toast.success('Paper deleted')
      fetchPapers()
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to delete paper')
    }
  }

  const toggleFavorite = async (id) => {
    try {
      await paperAPI.toggleFavorite(id)
      setPapers((prev) =>
        prev.map((p) =>
          p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
        )
      )
    } catch (error) {
      toast.error('Failed to update favorite')
    }
  }

  return {
    papers,
    loading,
    pagination,
    params,
    setParams,
    fetchPapers,
    deletePaper,
    toggleFavorite,
  }
}
