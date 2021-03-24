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

    <!-- Ad -->
    <div class="ad container mt-3">
      <div class="ad1"></div>
      <div class="ad2"></div>
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
          @typesPage="goToPage"
        ></prod-category>
      </div>
    </div>

    <!-- How to order -->
    <div class="howtoorder container mt-4">
      <div class="howtoorder-head text-center">
        How to order from Alupotol ?
      </div>
      <howtoorder
        class="step mt-4"
        v-for="step in steps"
        :key="step.name"
        :step="step"
        @orderClick="orderTruth"
        @paymentClick="paymentTruth"
        @deliveryClick="deliveryTruth"
      ></howtoorder>
    </div>

    <!-- Testimonies -->
    <div class="testimonies">
      <h1 class="testimony-head text-center">What our clients are saying</h1>
      <testimony
        class="each-testimony container"
        v-for="t in testimonies"
        :key="t.id"
        :testimony="t"
        @c1Click="c1Truth"
        @c2Click="c2Truth"
        @c3Click="c3Truth"
      ></testimony>
    </div>

    <!-- Footer -->
    <footer class="pt-5 pb-5">
      <h3 class="text-center">
        <i class="fa fa-copyright" aria-hidden="true"></i> Made By Abeer
      </h3>
    </footer>
  </div>
</template>

<script>
import ProdCategory from "../UI/ProdCategory.vue";
import Howtoorder from "../UI/Howtoorder.vue";
import Testimony from "../UI/Testimony.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    ProdCategory,
    Howtoorder,
    Testimony,
  },
  data() {
    return {
      testimonyInt: 0,
      tIntervalData: null,
      orderInt: 0,
      oIntervalData: null,
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
    ...mapGetters(["steps", "testimonies"]),
  },
  methods: {
    // For How To Order
    appearOrderManual() {
      this.oIntervalData = setInterval(() => {
        this.orderInt++;
        this.steps[this.orderInt - 1].isHidden = true;
        if (this.orderInt === 3) {
          this.orderInt = 0;
        }
        this.steps[this.orderInt].isHidden = false;
      }, 3000);
    },
    orderTruth() {
      this.orderInt = 0;

      // make false
      this.steps[0].isHidden = false;
      this.steps[1].isHidden = true;
      this.steps[2].isHidden = true;

      clearInterval(this.oIntervalData);
      this.appearOrderManual();
    },
    paymentTruth() {
      this.orderInt = 1;

      // make false
      this.steps[0].isHidden = true;
      this.steps[1].isHidden = false;
      this.steps[2].isHidden = true;

      clearInterval(this.oIntervalData);
      this.appearOrderManual();
    },
    deliveryTruth() {
      this.orderInt = 2;

      // make false
      this.steps[0].isHidden = true;
      this.steps[1].isHidden = true;
      this.steps[2].isHidden = false;

      clearInterval(this.oIntervalData);
      this.appearOrderManual();
    },

    // For Testimonies
    appearTestimonies() {
      this.tIntervalData = setInterval(() => {
        this.testimonyInt++;
        this.testimonies[this.testimonyInt - 1].isHidden = true;
        if (this.testimonyInt === 3) {
          this.testimonyInt = 0;
        }
        this.testimonies[this.testimonyInt].isHidden = false;
      }, 5000);
    },
    c1Truth() {
      this.testimonyInt = 0;

      // make false
      this.testimonies[0].isHidden = false;
      this.testimonies[1].isHidden = true;
      this.testimonies[2].isHidden = true;

      clearInterval(this.tIntervalData);
      this.appearTestimonies();
    },
    c2Truth() {
      this.testimonyInt = 1;

      // make false
      this.testimonies[0].isHidden = true;
      this.testimonies[1].isHidden = false;
      this.testimonies[2].isHidden = true;

      clearInterval(this.tIntervalData);
      this.appearTestimonies();
    },
    c3Truth() {
      this.testimonyInt = 2;

      // make false
      this.testimonies[0].isHidden = true;
      this.testimonies[1].isHidden = true;
      this.testimonies[2].isHidden = false;

      clearInterval(this.tIntervalData);
      this.appearTestimonies();
    },

    hideAll() {
      // For Order
      this.orderInt = 0;

      this.steps[0].isHidden = true;
      this.steps[1].isHidden = true;
      this.steps[2].isHidden = true;

      // For Testimonies
      this.testimonyInt = 0;

      this.testimonies[0].isHidden = true;
      this.testimonies[1].isHidden = true;
      this.testimonies[2].isHidden = true;

      // Clear intervals
      clearInterval(this.oIntervalData);
      clearInterval(this.tIntervalData);
    },

    // Go To Types Page
    goToPage(ev) {
      if (ev === this.cateList[0]) {
        this.$router.push("/fruits-vegetables");
      } else if (ev === this.cateList[1]) {
        this.$router.push("/cooking");
      } else if (ev === this.cateList[2]) {
        this.$router.push("/beverages");
      }
      this.hideAll();
    },
  },
  created() {
    this.orderTruth();
    this.c1Truth();
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
.ad1 {
  display: inline-block;
  height: 150px;
  width: 49.9%;
  background-image: url("https://source.unsplash.com/1600x900/?supermarket,vegetables,ingredients,cooking");
  background-size: cover;
  background-position: center;
}
.ad2 {
  display: inline;
  float: right;
  height: 150px;
  width: 49.9%;
  background-image: url("https://source.unsplash.com/1600x900/?cooking,ingredients,vegetables,supermarket");
  background-size: cover;
  background-position: center;
}
.product-categories .cate-head,
.howtoorder-head,
.testimony-head {
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
.testimonies {
  margin: 80px 0;
}
footer {
  background-color: #fdd670;
}
</style>