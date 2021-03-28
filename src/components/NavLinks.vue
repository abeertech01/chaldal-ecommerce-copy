<template>
  <div class="nav-links">
    <router-link v-if="!isHealthCare" to="/food">Food</router-link>
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
    isHealthCare() {
      return this.paths.some((path) => {
        return path === "Health Care";
      });
    },
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