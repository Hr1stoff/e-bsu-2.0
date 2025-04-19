import { createRouter, createWebHistory } from 'vue-router'
import AppLogin from '@/views/AppLogin.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: AppLogin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
