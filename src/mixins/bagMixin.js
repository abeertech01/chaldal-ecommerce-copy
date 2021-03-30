import { mapGetters } from "vuex";

export default {
  data() {
    return {
      inBag: false,
      prodNum: 0,
    };
  },
  computed: {
    ...mapGetters(["bag"]),
  },
  methods: {
    addClick() {
      this.inBag = true;
      this.prodNum += 1;
      this.$store.dispatch("addToBag", this.product);
    },
    addProd() {
      this.prodNum += 1;
      this.$store.dispatch("addToBag", this.product);
    },
    subtractProd() {
      if (this.bag.length && this.bag[this.bag.length - 1].name === this.product.name) {
        this.prodNum -= 1;
        this.$store.dispatch("removeFromBag");
      }
    },
  },
}