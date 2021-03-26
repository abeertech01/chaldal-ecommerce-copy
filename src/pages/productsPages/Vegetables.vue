<template>
  <div class="vegetables">
    <ads-on-top></ads-on-top>
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
import Vegetable from "../../UI/everyProduct/Vegetable.vue";

export default {
  components: {
    AdsOnTop,
    Vegetable,
  },
  computed: {
    ...mapGetters(["vegetables"]),
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
</style>