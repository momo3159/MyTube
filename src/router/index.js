import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // ここにHOMEのルート
    {
      path: "/stampStore",
      name: "StampStore",
      component: () =>
        import("../views/StampStore.vue")
    },
    {
      path: "/pointStore",
      name: "PointStore",
      component: () => 
        import("../views/PointStore.vue")
    }
  ]
})
