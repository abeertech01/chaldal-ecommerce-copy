<template>
  <div class="beverages">
    <ads-on-top></ads-on-top>
    <nav-links></nav-links>
    <div class="headline">
      <hr />
      <h4 class="name">Beverages</h4>
      <hr />
    </div>
    <div class="all-types">
      <beverage-types
        v-for="bt in beverageProdTypes"
        :key="bt.imgName"
        :bt="bt"
      ></beverage-types>
    </div>
  </div>
</template>

<script>
import AdsOnTop from "../../components/AdsOnTop.vue";
import NavLinks from "../../components/NavLinks.vue";
import BeverageTypes from "../../UI/prodTypes/BeverageTypes.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    AdsOnTop,
    NavLinks,
    BeverageTypes,
  },
  computed: {
    ...mapGetters(["beverageProdTypes"]),
  },
  methods: {
    setPath() {
      this.$store.dispatch("clearPaths");
      this.$store.dispatch("clearUrls");
      this.$store.dispatch("takePaths", ["Beverages"]);
      this.$store.dispatch("takeUrls", ["beverages"]);
    },
  },
  created() {
    this.setPath();
  },
};
</script>

<style scoped>
.beverages {
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