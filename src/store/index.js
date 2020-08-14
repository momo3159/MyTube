import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    id: ""
  },
  mutations: {
    login(state){
      state.isLogin = true;
    }
  },
  getters: {
    getId(state){
      return state.id;
    },
    isLogin(state){
      return state.isLogin;
    }
  },
  actions: {},
  modules: {}
});
