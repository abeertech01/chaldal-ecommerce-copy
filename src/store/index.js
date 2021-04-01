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
    isBagOpen: false,
    itemSet: [],
    itemNum: 0,
    totalPrice: 0,
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
      let price = parseInt(state.bag[state.bag.length - 1].price);
      state.totalPrice += price;
      state.itemSet = [...new Set(state.bag)]
      state.itemNum = state.itemSet.length;

      console.log('after adding = ' + state.totalPrice);
    },
    REMOVE_FROM_BAG(state) {
      let price = parseInt(state.bag[state.bag.length - 1].price);
      state.totalPrice -= price;
      state.bag.pop();

      console.log('after subtracting = ' + state.totalPrice);
    },
    openBag(state) {
      state.isBagOpen = true;
    },
    closeBag(state) {
      state.isBagOpen = false;
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
    },
    removeFromBag(context) {
      context.commit('REMOVE_FROM_BAG');
    }
  },
  getters: {
    foodTypes(state) {
      return state.foodTypes;
    },
    bag(state) {
      return state.bag;
    },
    isBagOpen(state) {
      return state.isBagOpen;
    },
    totalPrice(state) {
      return state.totalPrice;
    },
    itemSet(state) {
      return state.itemSet;
    },
    itemNum(state) {
      return state.itemNum;
    },
    paths(state) {
      return state.paths;
    },
    urls(state) {
      return state.urls;
    }
  }
});