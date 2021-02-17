import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  },

  {
    path:'/company',
    name:'company',
    component: () => import(/* webpackChunkName: "company" */ '../views/About.vue')
  },

  {
    path:'/display',
    name:'display',
    component: () => import(/* webpackChunkName: "display" */ '../views/Display.vue')

  },

  {
    path:'/product',
    name:'product',
    component: () => import(/* webpackChunkName: "product" */ '../views/FullDisplay.vue')

  } ,
   {
    path:'/video',
    name:'video',
    component: () => import(/* webpackChunkName: "video" */ '../views/Videoplayer.vue')

  },
  {
    path:'/cart',
    name:'cart',
    component: () => import(/* webpackChunkName: "video" */ '../views/Cart.vue')

  },
  {
    path:'/empty',
    name:'empty',
    component: () => import(/* webpackChunkName: "video" */ '../views/Empty.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
