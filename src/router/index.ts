import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ContactPage from '../pages/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contato',
    name: 'Contato',
    component: ContactPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 