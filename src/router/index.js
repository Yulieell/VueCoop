import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/se-connecter',
    component: () => import('../views/seConnecter.vue')
  },
  {
    path: '/creer-compte',
    component: () => import('../views/creerCompte.vue')
  },
  {
    path: '/conversations',
    component: () => import('../views/Conversations.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
