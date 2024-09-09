<script>
import userApi from "@/api/endpoints/user"
import appointmentApi from "@/api/endpoints/appointment"

export default {
  name: 'HomeView',
  data: () => ({
    userApi,
    appointmentApi
  })
}
</script>

<template>
  <button @click="userApi.getUser()" class="v-btn v-btn--border">Load user</button>
  <button @click="appointmentApi.getAppointments()" class="v-btn v-btn--border">Load app</button>
</template>