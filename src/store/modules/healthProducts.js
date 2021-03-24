export default {
  state: {
    healthProdTypes: [
      {
        imgName: 'food-supple',
        name: 'Food Supplements'
      },
      {
        imgName: 'antiseptics',
        name: 'Antiseptics'
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    healthProdTypes(state) {
      return state.healthProdTypes;
    }
  }
}