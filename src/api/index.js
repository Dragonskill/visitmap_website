import axios from 'axios'
import {useAuthStore} from '@/stores/auth'
import router from '@/router'

const api = axios.create({
  baseURL: (import.meta.env.VITE_API_URL || 'http://localhost:3000') + '/api',
})

api.interceptors.request.use((config) => {
  const token = useAuthStore().token || localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use((response) => {
    return response
  },
  async (error) => {
    if (error.response.status === 401 && useAuthStore().isAuthenticated) {
      await useAuthStore().clearToken()
      console.warn('Unauthorized, logging out ...')

      // redirect to log in page
      await router.push({name: 'login'})
    }
    return Promise.reject(error)
  }
)

export default api
