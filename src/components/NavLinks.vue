<template>
  <div class="nav-links">
    <router-link to="/food">Food</router-link>
    <span v-for="(path, i) in paths" :key="i">
      >
      <router-link
        :class="{
          'font-weight-bold': path === paths[paths.length - 1] ? true : false,
        }"
        :to="urls[i]"
        >{{ path }}</router-link
      ></span
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["paths", "urls"]),
    // activePage(){
    //   if(this.paths[this.paths.length-1]){
    //     return true;
    //   }()
    // }
  },
};
</script>

<style scoped>
.nav-links {
  margin: 5px 0;
}
a {
  color: black;
}
</style>