<template>
  <div class="health-care">
    <ads-on-top></ads-on-top>
    <nav-links></nav-links>
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
import NavLinks from "../../components/NavLinks.vue";
import HealthProdTypes from "../../UI/prodTypes/HealthProdTypes.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    AdsOnTop,
    NavLinks,
    HealthProdTypes,
  },
  computed: {
    ...mapGetters(["healthProdTypes"]),
  },
  methods: {
    setPath() {
      this.$store.dispatch("clearPaths");
      this.$store.dispatch("clearUrls");
      this.$store.dispatch("takePaths", ["Health Care"]);
      this.$store.dispatch("takeUrls", ["health-care"]);
    },
  },
  created() {
    this.setPath();
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