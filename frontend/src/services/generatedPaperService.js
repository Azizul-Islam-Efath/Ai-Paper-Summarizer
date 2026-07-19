import api from './api'

export const generatedPaperAPI = {
  generate: (data) => api.post('/generated-papers/generate', data),
  getGeneratedPaper: (id) => api.get(`/generated-papers/${id}`),
  getProjectPapers: (projectId) => api.get(`/generated-papers/project/${projectId}`),
  deleteGeneratedPaper: (id) => api.delete(`/generated-papers/${id}`),
  exportPdf: (id) => api.get(`/generated-papers/${id}/export/pdf`, { responseType: 'blob' }),
  exportDocx: (id) => api.get(`/generated-papers/${id}/export/docx`, { responseType: 'blob' }),
  exportMarkdown: (id) => api.get(`/generated-papers/${id}/export/markdown`, { responseType: 'blob' }),
  exportHtml: (id) => api.get(`/generated-papers/${id}/export/html`, { responseType: 'blob' }),
}
