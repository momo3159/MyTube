import Vue from 'vue'
import Router from 'vue-router'
import homePage from "../views/homePage.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/stampStore',
      name: 'StampStore',
      component: () =>
        import('../views/StampStore.vue')
    },
    {
      path: '/pointStore',
      name: 'PointStore',
      component: () =>
        import('../views/PointStore.vue')
    },
    {
      path: 'login',
      name: 'Login',
      component: () =>
        import('../views/Login.vue')
    }
  ]
})
