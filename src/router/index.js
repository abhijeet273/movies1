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
    path: '/Movie/:id',
    name: 'Movie',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Movie.vue')
  },

  {
    path: '/newmovie',
    name: 'NewMovie',
    component: () => import('../views/NewMovie.vue')
  },

  {
    path: '/Movie/:id/newreview',
    name: 'NewReview',
    component: () => import('../views/NewReview.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
