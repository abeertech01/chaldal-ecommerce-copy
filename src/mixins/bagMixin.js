import { mapGetters } from "vuex";

export default {
  data() {
    return {
      inBag: false,
      numOfProd: 0
    };
  },
  computed: {
    ...mapGetters(["itemSet"])
  },
  methods: {
    addClick() {
      this.inBag = true;
      this.numOfProd += 1;
      this.$store.dispatch("addToBag", this.product);
    },
    addProd() {
      this.numOfProd += 1;
      this.$store.dispatch("addToBag", this.product);
    },
    subtractProd() {
      this.numOfProd -= 1;
      if (this.numOfProd === 0) {
        this.inBag = false;
      }
      this.$store.dispatch("removeFromBag", this.product.imgName);
    },
  },
}