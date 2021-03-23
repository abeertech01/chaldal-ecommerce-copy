import Vue from 'vue';
import Vuex from 'vuex';

import home from './modules/home';
import fruitsAndVeg from './modules/fruitsAndVeg';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    fruitsAndVeg
  },
  state: {
    foodChain: []
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
});