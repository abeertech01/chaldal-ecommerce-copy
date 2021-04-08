<template>
  <div class="navmenu">
    <div class="type-list">
      <div class="type-prod food" @click="clickFood">
        <i class="fas fa-leaf"></i> Food
      </div>

      <div class="type-prod health-care" @click="clickHealth">
        <i class="fas fa-heartbeat"></i> Health Care
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["prodTypes"]),
  },
  methods: {
    clickFood() {
      this.$router.push("/food");
    },
    clickHealth() {
      this.$router.push("/health-care");
    },
  },
};
</script>

<style scoped>
.navmenu {
  padding-top: 55px;
  width: 230px;
}
.type-list {
  padding: 10px 0 10px 10px;
}
.food-list {
  padding-left: 15px;
}
.type-prod {
  cursor: pointer;
}
.food {
  margin-bottom: 10px;
}
</style>