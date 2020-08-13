import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/StampStore",
      name: "StampStore",
      component: () =>
        import("../views/StampStore.vue")
    },
    {
      path: "/PointStore",
      name: "PointStore",
      component: () =>
        import("../views/PointStore.vue")
    },
    {
      path: "/Login",
      name: "Login",
      component: () =>
        import("../views/Login.vue")
    }
  ]
})
