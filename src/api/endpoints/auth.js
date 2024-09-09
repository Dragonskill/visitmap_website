import api from '@/api'

export default {
  register(name, email, password) {
    return api.post('register', {name, email, password})
  },
  login(identifier, password) {
    return api.post('login', {identifier, password})
  },
  logout() {
    return api.post('logout')
  }
}
