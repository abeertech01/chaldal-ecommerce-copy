export default {
  state: {
    healthProdTypes: [
      {
        imgName: 'food-supplements',
        name: 'Food Supplements'
      },
      {
        imgName: 'antiseptics',
        name: 'Antiseptics'
      }
    ],
    foodSupplements: [
      {
        imgName: 'boost',
        name: 'Boost Chocolate Jar',
        quantity: '400 gm',
        price: '320 BDT.',
        group: "supplements",
      },
      {
        imgName: 'ensure-diabetes',
        name: 'Ensure Diabetes Care Adult Health Drink',
        quantity: '400 gm',
        price: '940 BDT.',
        group: "supplements",
      },
      {
        imgName: 'ensure-vanilla',
        name: 'Ensure Nutrition Vanilla Flavor Powder Jar',
        quantity: '400 gm',
        price: '732 BDT.',
        group: "supplements",
      },
      {
        imgName: 'horlicks',
        name: 'Horlicks Standard Jar',
        quantity: '500 gm',
        price: '350 BDT.',
        group: "supplements",
      },
      {
        imgName: 'pediasure-vanilla',
        name: 'PediaSure Vanilla Delight',
        quantity: '400 gm',
        price: '689 BDT.',
        group: "supplements",
      },
    ],
    antiseptics: [
      {
        imgName: 'dettol-liquid',
        name: 'Dettol Antiseptic Liquid',
        quantity: '100 ml',
        price: '52 BDT.',
        group: "antiseptics",
      },
      {
        imgName: 'dettol-spray',
        name: 'Dettol Disinfectant Spray',
        quantity: '225 ml',
        price: '350 BDT.',
        group: "antiseptics",
      },
      {
        imgName: 'hexisol',
        name: 'Hexisol Hand Rub',
        quantity: '250 ml',
        price: '130 BDT.',
        group: "antiseptics",
      },
      {
        imgName: 'savlon-liquid',
        name: 'Savlon Antiseptic Liquid',
        quantity: '112 ml',
        price: '44 BDT.',
        group: "antiseptics",
      },
      {
        imgName: 'savlon-spray',
        name: 'Savlon Disinfectant Spray',
        quantity: '300 ml',
        price: '350 BDT.',
        group: "antiseptics",
      },
    ],
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    healthProdTypes(state) {
      return state.healthProdTypes;
    },
    foodSupplements(state) {
      return state.foodSupplements;
    },
    antiseptics(state) {
      return state.antiseptics;
    }
  }
}