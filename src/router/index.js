import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from 'Components/layout/layout.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})

export default router
