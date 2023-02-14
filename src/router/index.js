import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/Auth.vue'

const routes = [
  {
    path: '/',
    name: 'auth',
    meta: {
      layout: 'auth-layout'
    },
    component: Auth
  },
  {
    path: '/todos/:id',
    name: 'todos',
    meta: {
      layout: 'default-layout'
    },
    component: () => import('../views/Todos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
