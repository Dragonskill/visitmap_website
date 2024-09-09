import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ScheduleView from '@/views/ScheduleView.vue'
import ScheduleSidebar from '@/views/ScheduleSidebar.vue'
import TasksView from '@/views/TasksView.vue'
import PatientsView from '@/views/PatientsView.vue'
import OrganizationsView from '@/views/OrganizationsView.vue'
import SettingsView from '@/views/SettingsView.vue'
import {useAuthStore} from "@/stores/auth"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'DefaultLayout',
        requireAuth: true,
        noAuth: false,
      }
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: ScheduleView,
      meta: {
        layout: 'DefaultLayout',
        sidebarLayout: 'ScheduleSidebar',
        requireAuth: false,
        noAuth: false,
      }
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView,
      meta: {
        layout: 'DefaultLayout',
        requireAuth: false,
        noAuth: false,
      }
    },
    {
      path: '/patients',
      name: 'patients',
      component: PatientsView,
      meta: {
        layout: 'DefaultLayout',
        requireAuth: false,
        noAuth: false,
      }
    },
    {
      path: '/organizations',
      name: 'organizations',
      component: OrganizationsView,
      meta: {
        layout: 'DefaultLayout',
        requireAuth: false,
        noAuth: false,
      }
    },

    {
      path: '/faq',
      name: 'faq',
      component: () => import('@/views/FAQView.vue'),
      meta: {
        layout: 'DefaultLayout',
        requireAuth: false,
        noAuth: false,
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      meta: {
        layout: 'DefaultLayout',
        requireAuth: false,
        noAuth: false,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/LoginView.vue'),
      meta: {
        layout: 'AuthLayout',
        requireAuth: false,
        noAuth: true,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/RegisterView.vue'),
      meta: {
        layout: 'AuthLayout',
        requireAuth: false,
        noAuth: true,
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isAuth = useAuthStore().isAuthenticated

  if (to.meta.requireAuth && !isAuth) next({name: 'login'})
  else if (to.meta.noAuth && isAuth) next({name: 'home'})
  else next()
  // next()
})

export default router
