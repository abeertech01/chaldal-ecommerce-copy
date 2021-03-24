export default {
  state: {
    beverageProdTypes: [
      {
        imgName: 'soft-drinks',
        name: 'Soft Drinks'
      },
      {
        imgName: 'syrups-powders',
        name: 'Syrups & Powder Drinks'
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    beverageProdTypes(state) {
      return state.beverageProdTypes;
    }
  }
}