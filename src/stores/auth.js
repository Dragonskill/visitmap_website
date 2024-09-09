import {defineStore} from 'pinia'
import authApi from '@/api/endpoints/auth'
import router from "@/router"

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: '',
    isAuthenticated: false,
  }),
  actions: {
    setToken(token) {
      localStorage.setItem('token', token)
      console.log(token)
      this.token = token
      this.isAuthenticated = true
    },
    clearToken() {
      localStorage.removeItem('token')
      this.token = ''
      this.isAuthenticated = false
    },
    check() {
      const token = localStorage.getItem('token')
      if (!token) return
      this.setToken(token)
    },

    async register(name, email, password) {
      try {
        const response = await authApi.register(name, email, password)
        const token = response.data.token
        this.setToken(token)
      } catch (error) {
        // Handle register error
      }
    },
    async login(identifier, password) {
      try {
        const response = await authApi.login(identifier, password)
        const token = response.data.data.token
        this.setToken(token)
      } catch (error) {
        // Handle login error
      }
    },
    async logout() {
      try {
        await authApi.logout()
        await this.clearToken()
        // load current route again
        await router.go(0)
      } catch (error) {
        // Handle logout error
      }
    }
  },
})
