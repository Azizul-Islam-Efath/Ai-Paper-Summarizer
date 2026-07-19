import api from './api'

export const paperAPI = {
  uploadPdf: (formData, onProgress) =>
    api.post('/papers/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: onProgress,
    }),
  uploadText: (data) => api.post('/papers/text', data),
  getPapers: (params) => api.get('/papers', { params }),
  getPaper: (id) => api.get(`/papers/${id}`),
  deletePaper: (id) => api.delete(`/papers/${id}`),
  toggleFavorite: (id) => api.patch(`/papers/${id}/favorite`),
}
