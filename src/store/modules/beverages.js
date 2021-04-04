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
    ],
    softDrinks: [
      {
        imgName: 'coke',
        name: 'Coca-Cola',
        quantity: '1.25 ltr',
        price: '70 BDT.',
        group: "softDrinks",
      },
      {
        imgName: 'fanta',
        name: 'Fanta',
        quantity: '1.25 ltr',
        price: '65 BDT.',
        group: "softDrinks",
      },
      {
        imgName: 'frutika',
        name: 'Frutika Mango Juice',
        quantity: '1 ltr',
        price: '65 BDT.',
        group: "softDrinks",
      },
      {
        imgName: 'pepsi',
        name: 'Pepsi',
        quantity: '1 ltr',
        price: '50 BDT.',
        group: "softDrinks",
      },
      {
        imgName: 'sprite',
        name: 'Sprite',
        quantity: '1.25 ltr',
        price: '65 BDT.',
        group: "softDrinks",
      },
    ],
    syrupsPowders: [
      {
        imgName: 'hershey-choco',
        name: `Hershey's Chocolate Syrup`,
        quantity: '680 gm',
        price: '435 BDT.',
        group: "syrupsPowders",
      },
      {
        imgName: 'ovaltine',
        name: 'Ovaltine Malted Chocolate Drink Jar',
        quantity: '400 gm',
        price: '325 BDT.',
        group: "syrupsPowders",
      },
      {
        imgName: 'pancake-syrup',
        name: 'AG Pancake Syrup Original',
        quantity: '710 ml',
        price: '459 BDT.',
        group: "syrupsPowders",
      },
      {
        imgName: 'tang-orange',
        name: 'Tang Orange',
        quantity: '500 gm',
        price: '315 BDT.',
        group: "syrupsPowders",
      },
      {
        imgName: 'tang-pineapple',
        name: 'Tang Pineapple Powder',
        quantity: '500 gm',
        price: '400 BDT.',
        group: "syrupsPowders",
      },
    ],
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    beverageProdTypes(state) {
      return state.beverageProdTypes;
    },
    syrupsPowders(state) {
      return state.syrupsPowders;
    },
    softDrinks(state) {
      return state.softDrinks;
    }
  }
}