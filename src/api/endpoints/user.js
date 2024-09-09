import api from '@/api'

export default {
  getUser() {
    return api.get('/user')
  }
}
