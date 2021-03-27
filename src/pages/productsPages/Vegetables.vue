<template>
  <div class="vegetables">
    <ads-on-top></ads-on-top>
    <nav-links></nav-links>
    <div class="headline">
      <hr />
      <h4 class="name">Fresh Vegetables</h4>
      <hr />
    </div>
    <div class="all-types">
      <vegetable
        v-for="vegetable in vegetables"
        :key="vegetable.imgName"
        :vegetable="vegetable"
      ></vegetable>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AdsOnTop from "../../components/AdsOnTop.vue";
import NavLinks from "../../components/NavLinks.vue";

import Vegetable from "../../UI/everyProduct/Vegetable.vue";

export default {
  components: {
    AdsOnTop,
    NavLinks,
    Vegetable,
  },
  computed: {
    ...mapGetters(["vegetables"]),
  },
  methods: {
    setPath() {
      this.$store.dispatch("clearPaths");
      this.$store.dispatch("clearUrls");
      this.$store.dispatch("takePaths", [
        "Fruits & Vegetables",
        "Fresh Vegetables",
      ]);
      this.$store.dispatch("takeUrls", ["fruits-vegetables", "vegetables"]);
    },
  },
  created() {
    this.setPath();
  },
};
</script>

<style scoped>
.vegetables {
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