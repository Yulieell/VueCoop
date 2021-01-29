import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/se-connecter',
    component: () => import('../views/seConnecter.vue')
  },
  {
    path: '/creer-compte',
    component: () => import('../views/creerCompte.vue')
  }
  ,
  {
    path: '/header',
    component: () => import('../views/Header.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
