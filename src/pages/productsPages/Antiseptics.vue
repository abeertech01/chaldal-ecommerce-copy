<template>
  <div class="antiseptics">
    <ads-on-top></ads-on-top>
    <div class="headline">
      <hr />
      <h4 class="name">Antiseptics</h4>
      <hr />
    </div>
    <div class="all-types">
      <antiseptic
        v-for="anti in antiseptics"
        :key="anti.imgName"
        :anti="anti"
      ></antiseptic>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import AdsOnTop from "../../components/AdsOnTop.vue";
import Antiseptic from "../../UI/everyProduct/Antiseptic.vue";

export default {
  components: {
    AdsOnTop,
    Antiseptic,
  },
  computed: {
    ...mapGetters(["antiseptics"]),
  },
};
</script>

<style scoped>
.antiseptics {
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