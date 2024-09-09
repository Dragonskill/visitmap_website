<script>
import AuthLayout from "@/layouts/AuthLayout.vue"
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import {useAuthStore} from "@/stores/auth"

export default {
  name: 'App',
  components: {
    AuthLayout,
    DefaultLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout
    }
  },
  setup() {
    // check auth
    useAuthStore().check()
  }
}
</script>

<template>
  <component :is="layout || 'div'" class="app">
    <router-view />
  </component>
</template>

<style scoped>
</style>
