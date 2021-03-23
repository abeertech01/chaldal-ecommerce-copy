export default {
  state: {
    steps: [
      {
        name: "order",
        title: "Place Order",
        subTitle: "Choose your desired products and press order button",
        isHidden: true,
      },
      {
        name: "payment",
        title: "Easy Payment",
        subTitle: "Pay at your convenience, from wherever you are",
        isHidden: true,
      },
      {
        name: "delivery",
        title: "Fast Delivery",
        subTitle: "Get your order delivered within 1 hour at your doorstep",
        isHidden: true,
      },
    ],
    testimonies: [
      {
        id: 'dp1',
        name: 'Rakib Hossain',
        comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus in maiores, modi rerum similique aliquam ut eius! Est, amet dicta.',
        isHidden: true,
      },
      {
        id: 'dp2',
        name: 'Belal Hasan',
        comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque temporibus aperiam, accusamus facilis blanditiis aspernatur deleniti ratione placeat totam saepe, suscipit voluptates?',
        isHidden: true,
      },
      {
        id: 'dp3',
        name: 'Mizanur Rahman',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui reprehenderit cumque dolores expedita quam. Enim nostrum eveniet dolorum.',
        isHidden: true,
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    steps(state) {
      return state.steps;
    },
    testimonies(state) {
      return state.testimonies;
    }
  }
}