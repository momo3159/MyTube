import Vue from "vue";
import VueRouter from "vue-router";
import homePage from "../views/homePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: homePage
  },
  {
    path: "/stampstore",
    name: "StampStore",
    component: () =>
      import("../views/StampStore.vue")
  },
  {
    path: "/pointstore",
    name: "PointStore",
    component: () => import("../views/PointStore.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  base: "/my-tube-test", // GithHub Pagesの設定用
  routes
});

export default router;
