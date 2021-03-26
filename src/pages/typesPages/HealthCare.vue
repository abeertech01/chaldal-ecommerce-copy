<template>
  <div class="health-care">
    <ads-on-top></ads-on-top>
    <div class="headline">
      <hr />
      <h4 class="name">Health Care</h4>
      <hr />
    </div>
    <div class="all-types">
      <health-prod-types
        v-for="ht in healthProdTypes"
        :key="ht.imgName"
        :ht="ht"
      ></health-prod-types>
    </div>
  </div>
</template>

<script>
import AdsOnTop from "../../components/AdsOnTop.vue";
import HealthProdTypes from "../../UI/prodTypes/HealthProdTypes.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    AdsOnTop,
    HealthProdTypes,
  },
  computed: {
    ...mapGetters(["healthProdTypes"]),
  },
};
</script>

<style scoped>
.health-care {
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