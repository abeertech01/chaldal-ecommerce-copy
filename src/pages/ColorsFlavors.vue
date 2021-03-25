<template>
  <div class="colors-flavors">
    <ads-on-top></ads-on-top>
    <div class="headline">
      <hr />
      <h4 class="name">Colors and Flavors</h4>
      <hr />
    </div>
    <div class="all-types">
      <color-flavor
        v-for="cf in colorsFlavors"
        :key="cf.imgName"
        :cf="cf"
      ></color-flavor>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import AdsOnTop from "../components/AdsOnTop.vue";
import ColorFlavor from "../UI/ColorFlavor.vue";

export default {
  components: {
    AdsOnTop,
    ColorFlavor,
  },
  computed: {
    ...mapGetters(["colorsFlavors"]),
  },
};
</script>

<style scoped>
.colors-flavors {
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