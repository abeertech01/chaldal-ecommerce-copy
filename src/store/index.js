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
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    foodTypes(state) {
      return state.foodTypes;
    }
  }
});