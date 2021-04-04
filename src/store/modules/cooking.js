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
    ],
    colorsFlavors: [
      {
        imgName: 'apple-cider',
        name: 'Apple Cider Vinegar',
        quantity: '473 ml',
        price: '530 BDT.',
        group: "colorsFlavors",
      },
      {
        imgName: 'kasundi',
        name: 'Kasundi',
        quantity: '285 ml',
        price: '45 BDT.',
        group: "colorsFlavors",
      },
      {
        imgName: 'soya-sauce',
        name: 'Soya Sauce',
        quantity: '600 ml',
        price: '530 BDT.',
        group: "colorsFlavors",
      },
      {
        imgName: 'white-vinegar',
        name: 'White Vinegar',
        quantity: '473 ml',
        price: '200 BDT.',
        group: "colorsFlavors",
      },
      {
        imgName: 'yellow-mustard',
        name: 'Classic Yellow Mustard',
        quantity: '255 gm',
        price: '203 BDT.',
        group: "colorsFlavors",
      },
    ],
    spices: [
      {
        imgName: 'black-cumin',
        name: 'Black Cumin(Kalo Jira)',
        quantity: '100 gm',
        price: '49 BDT.',
        group: "spices",
      },
      {
        imgName: 'cinamon',
        name: 'Cinamon(Daruchini)',
        quantity: '100 gm',
        price: '69 BDT.',
        group: "spices",
      },
      {
        imgName: 'cumin-seeds',
        name: 'Cumin Seeds(Jira)',
        quantity: '100 gm',
        price: '49 BDT.',
        group: "spices",
      },
      {
        imgName: 'dried-chillies',
        name: 'Dried Chillies(Shukna Morich)',
        quantity: '100 gm',
        price: '59 BDT.',
        group: "spices",
      },
      {
        imgName: 'fennel-seeds',
        name: 'Fennel Seeds(Mouri)',
        quantity: '100 gm',
        price: '15 BDT.',
        group: "spices",
      },
    ],
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    cookingProdTypes(state) {
      return state.cookingProdTypes;
    },
    colorsFlavors(state) {
      return state.colorsFlavors;
    },
    spices(state) {
      return state.spices;
    }
  }
}