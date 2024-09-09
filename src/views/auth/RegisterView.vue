<script>
import { useAuthStore } from "@/stores/auth"
import {useRouter} from "vue-router"

export default {
  name: 'RegisterView',
  data: () => ({
    name: '',
    email: '',
    password: '',
    auth: useAuthStore(),
    router: useRouter()
  }),
  methods: {
    async register() {
      await this.auth.register(this.name, this.email, this.password)
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
        v-model="name"
        label="Name"
        type="text"
        outlined
      ></v-text-field>
      <v-text-field
        variant="plain"
        v-model="email"
        label="Email"
        type="email"
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
        @click="register"
      >
        Register
      </v-btn>
    </v-form>
  </div>
</template>

<style scoped>

</style>
