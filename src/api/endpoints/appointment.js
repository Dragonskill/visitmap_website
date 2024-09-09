import api from '@/api'

export default {
  getAppointments() {
    return api.get('/appointments')
  }
}
