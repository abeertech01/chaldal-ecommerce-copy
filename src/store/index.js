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
    bag: [], //change    
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
    ADD_TO_BAG(state, payload) {//change
      let record = state.itemSet.find(el => el.imgName === payload.imgName);
      let price = parseInt(payload.price);

      if (record) {
        let recordIndex = state.itemSet.indexOf(record);
        let product = state.itemSet[recordIndex];

        product.prodNum++;
        state.totalPrice += price;
      } else {
        payload.prodNum++;
        state.itemSet.push(payload);
        state.itemNum++;
        state.totalPrice += price;
        state.isBagOpen = true;
      }

      console.log(state.itemSet);
    },
    REMOVE_FROM_BAG(state, payload) {//change
      let record = state.itemSet.find(el => el.imgName === payload);
      let recordIndex;
      let product;
      let price;

      if (record) {
        recordIndex = state.itemSet.indexOf(record);
        product = state.itemSet[recordIndex];
        price = parseInt(product.price);

        if (product.prodNum > 1) {
          product.prodNum--;
          state.totalPrice -= price;
        } else if (product.prodNum === 1) {
          product.prodNum = 0;
          state.itemSet.splice(recordIndex, 1);
          state.itemNum--;
          state.totalPrice -= price;
          state.inBag = false;
        }
      }
    },
    incProdNum(state, payload) {
      let record = state.itemSet.find(el => el.imgName === payload);
      let recordIndex = state.itemSet.indexOf(record);
      let product = state.itemSet[recordIndex];
      let price = parseInt(product.price);

      if (record) {
        product.prodNum++;
        state.totalPrice += price;
      }
    },
    decProdNum(state, payload) {
      let record = state.itemSet.find(el => el.imgName === payload);
      let recordIndex;
      let product;
      let price;

      if (record) {
        recordIndex = state.itemSet.indexOf(record);
        product = state.itemSet[recordIndex];
        price = parseInt(product.price);

        if (record.prodNum > 1) {
          product.prodNum--;
          state.totalPrice -= price;
        }
      }
    },
    removeProd(state, payload) {
      let record = state.itemSet.find(el => el.imgName === payload);
      let recordIndex = state.itemSet.indexOf(record);
      let product = state.itemSet[recordIndex];
      let price = parseInt(product.price);

      if (record) {
        state.totalPrice -= (product.prodNum * price);
        product.prodNum = 0;
        state.itemSet.splice(recordIndex, 1);
      }
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
    removeFromBag(context, payload) {
      context.commit('REMOVE_FROM_BAG', payload);
    }
  },
  getters: {
    foodTypes(state) {
      return state.foodTypes;
    },
    bag(state) {//change
      return state.bag;
    },
    isBagOpen(state) {
      return state.isBagOpen;
    },
    // inBag(state) {
    //   return state.inBag;
    // },
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