<template>
  <div class="fruits">
    <ads-on-top></ads-on-top>
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
import Fruit from "../../UI/everyProduct/Fruit.vue";

export default {
  components: {
    AdsOnTop,
    Fruit,
  },
  computed: {
    ...mapGetters(["fruits"]),
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
</style>