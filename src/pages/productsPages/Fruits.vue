<template>
  <div class="fruits">
    <ads-on-top></ads-on-top>
    <nav-links></nav-links>
    <div class="headline">
      <hr />
      <h4 class="name">Fresh Fruits</h4>
      <hr />
    </div>
    <div class="all-types">
      <fruit
        v-for="fruit in fruits"
        :key="fruit.imgName"
        :fruit="fruit"
      ></fruit>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AdsOnTop from "../../components/AdsOnTop.vue";
import NavLinks from "../../components/NavLinks.vue";

import Fruit from "../../UI/everyProduct/Fruit.vue";

export default {
  components: {
    AdsOnTop,
    NavLinks,
    Fruit,
  },
  computed: {
    ...mapGetters(["fruits"]),
  },
  methods: {
    setPath() {
      this.$store.dispatch("clearPaths");
      this.$store.dispatch("clearUrls");
      this.$store.dispatch("takePaths", [
        "Fruits & Vegetables",
        "Fresh Fruits",
      ]);
      this.$store.dispatch("takeUrls", ["fruits-vegetables", "fruits"]);
    },
  },
  created() {
    this.setPath();
  },
};
</script>

<style scoped>
.fruits {
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