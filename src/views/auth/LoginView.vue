<script>
import { useAuthStore } from "@/stores/auth"
import {useRouter} from "vue-router"

export default {
  name: 'LoginView',
  data: () => ({
    identifier: '',
    password: '',
    auth: useAuthStore(),
    router: useRouter()
  }),
  methods: {
    async login() {
      await this.auth.login(this.identifier, this.password)
      await this.router.push({ name: 'home' })
    }
  }
}
</script>

<template>
  <div>
    <v-form>
      <v-text-field
        variant="plain"
        v-model="identifier"
        label="Email or Phone"
        type="text"
        outlined
      ></v-text-field>
      <v-text-field
        variant="plain"
        v-model="password"
        label="Password"
        type="password"
        outlined
      ></v-text-field>
      <v-btn
        color="primary"
        @click="login"
      >
        Login
      </v-btn>
    </v-form>
  </div>
</template>

<style scoped>

</style>
