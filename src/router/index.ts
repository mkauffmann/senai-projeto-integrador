import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import AboutPage from '../pages/AboutPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import CoursePage from '../pages/CoursePage.vue'
import AdminCourse from '../pages/AdminCourse.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  },
  {
    path: '/gerenciar-curso',
    name: 'GerenciarCurso',
    component: AdminCourse
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 