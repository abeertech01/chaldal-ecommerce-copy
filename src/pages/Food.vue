<template>
  <div class="food">
    <ads-on-top></ads-on-top>
    <nav-links></nav-links>
    <div class="headline">
      <hr />
      <h4 class="name">Food</h4>
      <hr />
    </div>
    <div class="all-types">
      <food-types
        v-for="food in foodTypes"
        :key="food.imgName"
        :food="food"
      ></food-types>
    </div>
  </div>
</template>

<script>
import AdsOnTop from "../components/AdsOnTop.vue";
import NavLinks from "../components/NavLinks.vue";
import FoodTypes from "../UI/FoodTypes.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    AdsOnTop,
    NavLinks,
    FoodTypes,
  },
  computed: {
    ...mapGetters(["foodTypes"]),
  },
  methods: {
    setPath() {
      this.$store.dispatch("clearPaths");
      this.$store.dispatch("clearUrls");
    },
  },
  created() {
    this.setPath();
  },
};
</script>

<style scoped>
.food {
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
.all-types {
  margin: 15px 0px;
}
</style>