<template>
  <div class="spices">
    <ads-on-top></ads-on-top>
    <nav-links></nav-links>
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

import AdsOnTop from "../../components/AdsOnTop.vue";
import NavLinks from "../../components/NavLinks.vue";

import Spice from "../../UI/everyProduct/Spice.vue";

export default {
  components: {
    AdsOnTop,
    NavLinks,
    Spice,
  },
  computed: {
    ...mapGetters(["spices"]),
  },
  methods: {
    setPath() {
      this.$store.dispatch("clearPaths");
      this.$store.dispatch("clearUrls");
      this.$store.dispatch("takePaths", ["Cooking", "Spices"]);
      this.$store.dispatch("takeUrls", ["cooking", "spices"]);
    },
  },
  created() {
    this.setPath();
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
.all-types {
  display: flex;
  flex-direction: row;
}
</style>