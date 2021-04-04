import { mapGetters } from "vuex";

export default {
  data() {
    return {
      inBag: false,
    };
  },
  computed: {
    ...mapGetters(["itemSet", 'searchedText']),
    prodName() {
      let name = this.product.name;
      let text = this.searchedText;
      let regex = new RegExp(text, 'gi');

      return name.replace(regex, '<strong>' + text + '</strong>');
    },
    numOfProd() {
      let record = this.itemSet.find(el => el.imgName === this.product.imgName);
      let product;

      if (record) {
        product = this.itemSet[this.itemSet.indexOf(record)];

        return product.prodNum;
      } else {
        return 0;
      }
    }
  },
  watch: {
    numOfProd() {
      if (this.numOfProd === 1) {
        this.inBag = true;
      } else if (this.numOfProd === 0) {
        this.inBag = false;
      }
    }
  },
  methods: {
    addProd() {
      this.$store.dispatch("addToBag", this.product);
    },
    subtractProd() {
      this.$store.dispatch("removeFromBag", this.product.imgName);
    },
  },
}