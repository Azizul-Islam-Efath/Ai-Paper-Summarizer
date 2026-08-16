import api from './api'

export const summaryAPI = {
  generate: (paperId) => api.post('/summaries/generate', { paperId }),
  regenerate: (paperId) => api.post('/summaries/regenerate', { paperId }),
  getSummaries: (params) => api.get('/summaries', { params }),
  getSummary: (id) => api.get(`/summaries/${id}`),
  deleteSummary: (id) => api.delete(`/summaries/${id}`),
  share: (id) => api.post(`/summaries/${id}/share`),
  getShared: (token) => api.get(`/summaries/share/${token}`),
  exportPdf: (id) => api.get(`/summaries/${id}/export/pdf`, { responseType: 'blob' }),
  exportDocx: (id) => api.get(`/summaries/${id}/export/docx`, { responseType: 'blob' }),
}
