import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ContactPage from '../pages/ContactPage.vue'
import CatalogPage from '../pages/CatalogPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import CoursePage from '../pages/CoursePage.vue'

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
  },
  {
    path: '/catalogo',
    name: 'Catalogo',
    component: CatalogPage
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: AboutPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/curso/:id?',
    name: 'Curso',
    component: CoursePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 