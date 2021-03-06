import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('../views/Articles.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../components/SignOut.vue')
  },
  {
    path: '*',
    name: 'error_404',
    component: () => import('../views/Error_404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
