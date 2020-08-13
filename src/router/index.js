import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: 'Home'
    },
    {
      path: '/StampStore',
      name: 'StampStore'
    },
    {
      path: '/PointStore',
      name: 'PointStore'
    },
    {
      path: '/Login',
      name: 'Login'
    }
  ]
})
