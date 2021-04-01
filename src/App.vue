<template>
  <div id="app">
    <head-vue class="head-app"></head-vue>
    <short-bag-info class="short-bag-app"></short-bag-info>
    <div class="main-page-app">
      <router-view class="mother-router-app"></router-view>
      <entire-bag class="entire-bag-app"></entire-bag>
    </div>
  </div>
</template>

<script>
import Head from "./components/Head.vue";
import ShortBagInfo from "./components/ShortBagInfo.vue";
import EntireBag from "./components/EntireBag.vue";

export default {
  name: "App",
  components: {
    HeadVue: Head,
    ShortBagInfo,
    EntireBag,
  },
};
</script>

<style>
.head-app {
  position: fixed;
  width: 100%;
  z-index: 3;
}
.short-bag-app {
  position: fixed;
  right: 0;
  top: 40%;
  z-index: 1;
}
.main-page-app {
  display: grid;
  grid-template-columns: auto 320px;
}
.mother-router-app {
  margin-top: 55px;
}
.entire-bag-app {
  box-sizing: border-box;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 320px;
  z-index: 2;
}
</style>
