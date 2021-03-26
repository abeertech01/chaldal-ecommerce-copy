<template>
  <div class="soft-drinks">
    <ads-on-top></ads-on-top>
    <div class="headline">
      <hr />
      <h4 class="name">Soft Drinks</h4>
      <hr />
    </div>
    <div class="all-types">
      <soft-drink
        v-for="drink in softDrinks"
        :key="drink.imgName"
        :drink="drink"
      ></soft-drink>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import AdsOnTop from "../../components/AdsOnTop.vue";
import SoftDrink from "../../UI/everyProduct/SoftDrink.vue";

export default {
  components: {
    AdsOnTop,
    SoftDrink,
  },
  computed: {
    ...mapGetters(["softDrinks"]),
  },
};
</script>

<style scoped>
.soft-drinks {
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