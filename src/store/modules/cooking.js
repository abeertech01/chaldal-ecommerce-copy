export default {
  state: {
    cookingProdTypes: [
      {
        imgName: 'spices',
        name: 'Spices'
      },
      {
        imgName: 'colors-flavors',
        name: 'Colors and Flavors'
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    cookingProdTypes(state) {
      return state.cookingProdTypes;
    }
  }
}