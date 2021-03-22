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
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    steps(state) {
      return state.steps
    }
  }
}