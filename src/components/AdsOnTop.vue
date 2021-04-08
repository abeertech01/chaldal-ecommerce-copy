<template>
  <div class="d-flex justify-content-center">
    <div class="get-down ads">
      <div class="ad1"></div>
      <div class="ad2"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isBagOpen"]),
  },
};
</script>

<style scoped>
.ads {
  width: 74%;
  margin-bottom: 20px;
}
.get-down {
  margin-top: 55px;
}
.ad1 {
  display: inline-block;
  width: 49.9%;
  height: 200px;
  background-image: url("../adImages/pic-1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.ad2 {
  display: inline;
  float: right;
  width: 49.9%;
  height: 200px;
  background-image: url("../adImages/pic-4.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>