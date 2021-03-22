<template>
  <div id="app">
    <head-vue></head-vue>
    <router-view></router-view>
  </div>
</template>

<script>
import Head from "./components/Head.vue";

export default {
  name: "App",
  components: {
    HeadVue: Head,
  },
};
</script>

<style>
/* .nav-menu-comp {
  
} */
</style>
