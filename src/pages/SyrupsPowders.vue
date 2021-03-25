<template>
  <div class="syrups-powders">
    <ads-on-top></ads-on-top>
    <div class="headline">
      <hr />
      <h4 class="name">Soft Drinks</h4>
      <hr />
    </div>
    <div class="all-types">
      <syrup-powder
        v-for="sDrink in syrupsPowders"
        :key="sDrink.imgName"
        :sDrink="sDrink"
      ></syrup-powder>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import AdsOnTop from "../components/AdsOnTop.vue";
import SyrupPowder from "../UI/SyrupPowder.vue";

export default {
  components: {
    AdsOnTop,
    SyrupPowder,
  },
  computed: {
    ...mapGetters(["syrupsPowders"]),
  },
};
</script>

<style scoped>
.syrups-powders {
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