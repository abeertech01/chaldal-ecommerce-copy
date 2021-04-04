<template>
  <div class="food-supple">
    <ads-on-top></ads-on-top>
    <nav-links></nav-links>
    <div class="headline">
      <hr />
      <h4 class="name">Food Supplements</h4>
      <hr />
    </div>
    <div class="all-types">
      <food-supplement
        v-for="foodSupple in foodSupplements"
        :key="foodSupple.imgName"
        :foodSupple="foodSupple"
      ></food-supplement>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import AdsOnTop from "../../components/AdsOnTop.vue";
import NavLinks from "../../components/NavLinks.vue";
import FoodSupplement from "../../UI/everyProduct/FoodSupplement.vue";

export default {
  components: {
    AdsOnTop,
    NavLinks,
    FoodSupplement,
  },
  computed: {
    ...mapGetters(["foodSupplements"]),
  },
  methods: {
    setPath() {
      this.$store.dispatch("clearPaths");
      this.$store.dispatch("clearUrls");
      this.$store.dispatch("takePaths", ["Health Care", "Food Supplements"]);
      this.$store.dispatch("takeUrls", ["health-care", "food-supplements"]);
    },
  },
  created() {
    this.setPath();
  },
};
</script>

<style scoped>
.food-supple {
  margin: 0 20px;
}
.headline {
  display: flex;
  flex-direction: row;
}
hr {
  width: 100%;
  height: 1px;
  border: none;
  background-color: rgb(161, 161, 161);
}
.name {
  text-align: center;
  width: 500px;
  margin: 0 20px;
  font-weight: 300;
}
</style>