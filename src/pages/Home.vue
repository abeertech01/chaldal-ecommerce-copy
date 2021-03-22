<template>
  <div>
    <!-- Alu Potol Search Box -->
    <div class="alupotol-search">
      <div class="search-box d-flex justify-content-center align-items-center">
        <span>
          <h1>Groceries Delivered in 1 hour</h1>
          <input class="d-block" type="text" :placeholder="searchPlaceholder" />
        </span>
      </div>
    </div>

    <!-- Product Categories -->
    <div class="product-categories container mt-4">
      <div class="cate-head mb-2 text-center">Our Product Categories</div>
      <div class="cate-list mt-4">
        <prod-category
          v-for="(cate, index) in cateList"
          :key="index"
          :category="cate"
          :icon-index="index"
        ></prod-category>
      </div>
    </div>

    <!-- How to order -->
    <div class="howtoorder container mt-4">
      <div class="howtoorder-head text-center">
        How to order from Alupotol ?
      </div>
      <howtoorder
        class="step w-100 mt-4"
        v-for="step in steps"
        :key="step.name"
        :step="step"
        @orderClick="orderTruth"
        @paymentClick="paymentTruth"
        @deliveryClick="deliveryTruth"
      ></howtoorder>
    </div>
  </div>
</template>

<script>
import ProdCategory from "../UI/ProdCategory.vue";
import Howtoorder from "../UI/Howtoorder.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    ProdCategory,
    Howtoorder,
  },
  data() {
    return {
      int: 0,
      intervalData: null,
      searchPlaceholder: `Search for products (e.g. eggs, milk, potato)`,
      cateList: [
        "Fruits and Vegetables",
        "Cooking",
        "Beverages",
        "Health Products",
      ],
      iconList: ["vegetables", "cooking", "beverage", "healthProducts"],
    };
  },
  computed: {
    ...mapGetters(["steps"]),
  },
  methods: {
    appear() {
      this.intervalData = setInterval(() => {
        this.int++;
        this.steps[this.int - 1].isHidden = true;
        if (this.int === 3) {
          this.int = 0;
        }
        this.steps[this.int].isHidden = false;
      }, 3000);
    },
    orderTruth() {
      this.int = 0;

      // make false
      this.steps[0].isHidden = false;
      this.steps[1].isHidden = true;
      this.steps[2].isHidden = true;

      clearInterval(this.intervalData);
      this.appear();
    },
    paymentTruth() {
      this.int = 1;

      // make false
      this.steps[0].isHidden = true;
      this.steps[1].isHidden = false;
      this.steps[2].isHidden = true;

      clearInterval(this.intervalData);
      this.appear();
    },
    deliveryTruth() {
      this.int = 2;

      // make false
      this.steps[0].isHidden = true;
      this.steps[1].isHidden = true;
      this.steps[2].isHidden = false;

      clearInterval(this.intervalData);
      this.appear();
    },
  },
  created() {
    this.steps[this.int].isHidden = false;
    this.appear();
  },
};
</script>

<style scoped>
.veg-img {
  width: 100%;
}
.alupotol-search {
  height: 300px;
  background-image: url("../assets/vegetables.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.search-box {
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.486);
}
.search-box h1 {
  text-shadow: 2px 2px 8px #ffffff;
  font-weight: bold;
}
.search-box input {
  width: 150%;
  position: relative;
  left: -25%;
  height: 40px;
  padding: 2px 10px;
  border: 1px solid rgb(172, 172, 172);
  border-radius: 5px;
  outline: none;
  font-size: 17px;
}
.search-box input {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.product-categories .cate-head,
.howtoorder-head {
  font-size: 28px;
  font-weight: lighter;
}
.cate-list {
  display: grid;
  grid-template-columns: auto auto auto;
  row-gap: 10px;
  column-gap: 10px;
}
.step {
  margin: 0 auto 0 auto;
}
</style>