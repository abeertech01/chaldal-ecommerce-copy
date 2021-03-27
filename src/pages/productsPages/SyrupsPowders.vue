<template>
  <div class="syrups-powders">
    <ads-on-top></ads-on-top>
    <nav-links></nav-links>
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

import AdsOnTop from "../../components/AdsOnTop.vue";
import NavLinks from "../../components/NavLinks.vue";

import SyrupPowder from "../../UI/everyProduct/SyrupPowder.vue";

export default {
  components: {
    AdsOnTop,
    NavLinks,
    SyrupPowder,
  },
  computed: {
    ...mapGetters(["syrupsPowders"]),
  },
  methods: {
    setPath() {
      this.$store.dispatch("clearPaths");
      this.$store.dispatch("clearUrls");
      this.$store.dispatch("takePaths", [
        "Beverages",
        "Syrups & Powder Drinks",
      ]);
      this.$store.dispatch("takeUrls", ["beverages", "syrups-powders"]);
    },
  },
  created() {
    this.setPath();
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
.all-types {
  display: flex;
  flex-direction: row;
}
</style>