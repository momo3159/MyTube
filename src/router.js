import Vue from "vue";
import Router from "vue-router";

import Home from "./components/pages/index";
import Login from "./components/pages/Login";
import PointStore from "./components/pages/PointStore";
import StampStore from "./components/pages/StampStore"

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/Login",
      component: Login
    },
    {
      path: "/PointStore",
      component: PointStore
    },
    {
      path: "/StampStore",
      component: StampStore
    }
  ]
});
