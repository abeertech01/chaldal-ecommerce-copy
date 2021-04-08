<template>
  <div id="app">
    <head-vue class="head-app"></head-vue>
    <short-bag-info class="short-bag-app"></short-bag-info>
    <div :class="{ 'with-navmenu-app': isMenuOpen }">
      <div v-if="isMenuOpen" :class="{ 'navmenu-div-app': true }">
        <nav-menu class="navmenu-app"></nav-menu>
      </div>
      <div :class="{ 'main-page-app': isBagOpen }">
        <router-view class="mother-router-app"></router-view>
        <entire-bag v-if="isBagOpen" class="entire-bag-app"></entire-bag>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "./components/Head.vue";
import ShortBagInfo from "./components/ShortBagInfo.vue";
import EntireBag from "./components/EntireBag.vue";
import NavMenu from "./components/NavMenu.vue";

import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    HeadVue: Head,
    ShortBagInfo,
    EntireBag,
    NavMenu,
  },
  computed: {
    ...mapGetters(["isBagOpen", "searchedText", "isMenuOpen"]),
  },
};
</script>

<style>
.head-app {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
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
.with-navmenu-app {
  display: grid;
  grid-template-columns: 230px auto;
}
.navmenu-div-app {
  height: 100vh;
}
.navmenu-app {
  box-sizing: border-box;
  height: 100vh;
  position: fixed;
  border-right: 0.1px solid rgb(212, 212, 212);
  left: 0;
  top: 0;
  z-index: 3;
}
</style>
