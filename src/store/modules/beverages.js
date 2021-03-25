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
        price: '70 BDT.'
      },
      {
        imgName: 'fanta',
        name: 'Fanta',
        quantity: '1.25 ltr',
        price: '65 BDT.',
      },
      {
        imgName: 'frutika',
        name: 'Frutika Mango Juice',
        quantity: '1 ltr',
        price: '65 BDT.',
      },
      {
        imgName: 'pepsi',
        name: 'Pepsi',
        quantity: '1 ltr',
        price: '50 BDT.',
      },
      {
        imgName: 'sprite',
        name: 'Sprite',
        quantity: '1.25 ltr',
        price: '65 BDT.',
      },
    ],
    syrupsPowders: [
      {
        imgName: 'hershey-choco',
        name: `Hershey's Chocolate Syrup`,
        quantity: '680 gm',
        price: '435 BDT.'
      },
      {
        imgName: 'ovaltine',
        name: 'Ovaltine Malted Chocolate Drink Jar',
        quantity: '400 gm',
        price: '325 BDT.',
      },
      {
        imgName: 'pancake-syrup',
        name: 'AG Pancake Syrup Original',
        quantity: '710 ml',
        price: '459 BDT.',
      },
      {
        imgName: 'tang-orange',
        name: 'Tang Orange',
        quantity: '500 gm',
        price: '315 BDT.',
      },
      {
        imgName: 'tang-pineapple',
        name: 'Tang Pineapple Powder',
        quantity: '500 gm',
        price: '400 BDT.',
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