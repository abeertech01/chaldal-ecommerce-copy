<template>
  <div class="cooking">
    <ads-on-top></ads-on-top>
    <nav-links></nav-links>
    <div class="headline">
      <hr />
      <h4 class="name">Cooking</h4>
      <hr />
    </div>
    <div class="all-types">
      <cooking-types
        v-for="ct in cookingProdTypes"
        :key="ct.imgName"
        :ct="ct"
      ></cooking-types>
    </div>
  </div>
</template>

<script>
import AdsOnTop from "../../components/AdsOnTop.vue";
import NavLinks from "../../components/NavLinks.vue";
import CookingTypes from "../../UI/prodTypes/CookingTypes.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    AdsOnTop,
    NavLinks,
    CookingTypes,
  },
  computed: {
    ...mapGetters(["cookingProdTypes"]),
  },
  methods: {
    setPath() {
      this.$store.dispatch("clearPaths");
      this.$store.dispatch("clearUrls");
      this.$store.dispatch("takePaths", ["Cooking"]);
      this.$store.dispatch("takeUrls", ["cooking"]);
    },
  },
  created() {
    this.setPath();
  },
};
</script>

<style scoped>
.cooking {
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