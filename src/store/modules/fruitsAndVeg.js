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
    ],
    fruits: [
      {
        imgName: 'green-coconut',
        name: 'Green Coconut',
        quantity: 'each',
        price: '65 BDT.',
        oldPrice: '70 BDT.'
      },
      {
        imgName: 'guava',
        name: 'Guava(Thai)',
        quantity: '1 kg',
        price: '69 BDT.',
        oldPrice: '95 BDT.'
      },
      {
        imgName: 'papaya',
        name: 'Papaya(Paka Pepe)',
        quantity: '1 kg',
        price: '93 BDT.',
        oldPrice: '110 BDT.'
      },
      {
        imgName: 'pineapple',
        name: 'Pineapple',
        quantity: 'each',
        price: '29 BDT.',
        oldPrice: '50 BDT.'
      },
      {
        imgName: 'pomegranate',
        name: 'Pomegranate(Dalim)',
        quantity: '700 gm',
        price: '268 BDT.',
        oldPrice: '275 BDT.'
      },
    ],
    vegetables: [
      {
        imgName: 'carrot',
        name: 'Carrot(Deshi)',
        quantity: '500 gm',
        price: '11 BDT.',
        oldPrice: '15 BDT.'
      },
      {
        imgName: 'gourd',
        name: 'Gourd',
        quantity: 'each',
        price: '58 BDT.',
        oldPrice: '69 BDT.'
      },
      {
        imgName: 'potato',
        name: 'Potato',
        quantity: '1 kg',
        price: '17 BDT.',
        oldPrice: '20 BDT.'
      },
      {
        imgName: 'potol',
        name: 'Potol',
        quantity: '500gm',
        price: '27 BDT.',
        oldPrice: '35 BDT.'
      },
      {
        imgName: 'spinach',
        name: 'Palong Spinach',
        quantity: '1 bundle',
        price: '8 BDT.',
        oldPrice: '15 BDT.'
      },
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    fruitsVegTypes(state) {
      return state.fruitsVegTypes;
    },
    fruits(state) {
      return state.fruits;
    },
    vegetables(state) {
      return state.vegetables;
    }
  }
}