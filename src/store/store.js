import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    id: "",
    point: 0
  },
  mutations: {
    login(state){
      state.isLogin = true;
    },
    setPt(state, point){
      state.point = point;
    },
  },
  getters: {
    getId(state){
      return state.id;
    },
    isLogin(state){
      return state.isLogin;
    },
    getPt(state) {
      return state.point;
    }
  },
  actions: {},
  modules: {}
});
