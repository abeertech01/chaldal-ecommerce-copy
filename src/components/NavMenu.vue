<template>
  <div class="navmenu">
    <ul class="prod-list">
      <li>Food</li>
      <li>Health Care</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["prodTypes"]),
  },
  methods: {
    prodClick(ev) {
      if (ev === "food") {
        console.log(ev);
      } else if (ev === "healthCare") {
        console.log(ev);
      }
    },
  },
};
</script>

<style scoped>
.navmenu {
  padding-top: 55px;
  width: 230px;
}
.prod-list {
  list-style: none;
  padding-top: 20px;
  list-style-position: outside;
}
.prod-list li {
  width: 100%;
  background: palevioletred;
}
</style>