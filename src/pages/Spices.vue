<template>
  <div class="spices">
    <ads-on-top></ads-on-top>
    <div class="headline">
      <hr />
      <h4 class="name">Spices</h4>
      <hr />
    </div>
    <div class="all-types">
      <spice
        v-for="spice in spices"
        :key="spice.imgName"
        :spice="spice"
      ></spice>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import AdsOnTop from "../components/AdsOnTop.vue";
import Spice from "../UI/Spice.vue";

export default {
  components: {
    AdsOnTop,
    Spice,
  },
  computed: {
    ...mapGetters(["spices"]),
  },
};
</script>

<style scoped>
.spices {
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