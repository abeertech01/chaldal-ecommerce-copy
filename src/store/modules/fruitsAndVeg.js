export default {
  state: {
    fruitsVegTypes: [
      {
        imgName: 'fresh-fruits',
        name: 'Fresh Fruits'
      },
      {
        imgName: 'fresh-veg',
        name: 'Fresh Vegetables'
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    fruitsVegTypes(state) {
      return state.fruitsVegTypes;
    }
  }
}