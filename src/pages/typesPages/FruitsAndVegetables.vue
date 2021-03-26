<template>
  <div class="fruits-vegetables">
    <ads-on-top></ads-on-top>
    <div class="headline">
      <hr />
      <h4 class="name">Fruits & Vegetables</h4>
      <hr />
    </div>
    <div class="all-types">
      <fruits-veg-types
        v-for="fv in fruitsVegTypes"
        :key="fv.imgName"
        :fv="fv"
      ></fruits-veg-types>
    </div>
  </div>
</template>

<script>
import AdsOnTop from "../../components/AdsOnTop.vue";
import FruitsVegTypes from "../../UI/prodTypes/FruitsVegTypes.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    AdsOnTop,
    FruitsVegTypes,
  },
  computed: {
    ...mapGetters(["fruitsVegTypes"]),
  },
};
</script>

<style scoped>
.fruits-vegetables {
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