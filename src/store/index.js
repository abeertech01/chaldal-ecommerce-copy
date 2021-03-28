import Vue from 'vue';
import Vuex from 'vuex';

import home from './modules/home';
import fruitsAndVeg from './modules/fruitsAndVeg';
import cooking from './modules/cooking';
import beverages from './modules/beverages';
import healthProducts from './modules/healthProducts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    fruitsAndVeg,
    cooking,
    beverages,
    healthProducts
  },
  state: {
    bag: [],
    itemSet: [],
    itemNum: 0,
    foodTypes: [
      {
        imgName: 'fruits-veg-food',
        name: 'Fruits and Vegetables'
      },
      {
        imgName: 'cooking-food',
        name: 'Cooking'
      },
      {
        imgName: 'beverages-food',
        name: 'Beverages'
      }
    ],
    paths: [],
    urls: [],
  },
  mutations: {
    TAKE_PATHS(state, payload) {
      for (let i = 0; i < payload.length; i++) {
        state.paths.push(payload[i]);
      }
    },
    TAKE_URLS(state, payload) {
      for (let i = 0; i < payload.length; i++) {
        state.urls.push(payload[i]);
      }
    },
    CLEAR_PATHS(state) {
      state.paths = [];
    },
    CLEAR_URLS(state) {
      state.urls = [];
    },
    ADD_TO_BAG(state, payload) {
      state.bag.push(payload);
      state.itemSet = [...new Set(state.bag)]
      state.itemNum = state.itemSet.length;
    }
  },
  actions: {
    takePaths(context, payload) {
      context.commit('TAKE_PATHS', payload);
    },
    takeUrls(context, payload) {
      context.commit('TAKE_URLS', payload);
    },
    clearPaths(context) {
      context.commit('CLEAR_PATHS');
    },
    clearUrls(context) {
      context.commit('CLEAR_URLS');
    },
    addToBag(context, payload) {
      context.commit('ADD_TO_BAG', payload);
    }
  },
  getters: {
    foodTypes(state) {
      return state.foodTypes;
    },
    paths(state) {
      return state.paths;
    },
    urls(state) {
      return state.urls;
    }
  }
});