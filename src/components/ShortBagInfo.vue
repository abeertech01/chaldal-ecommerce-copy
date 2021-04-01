<template>
  <div>
    <div class="short-info" @click="openEntireBag">
      <div class="item-num text-center">
        <div class="icon">
          <i class="fas fa-shopping-bag"></i>
        </div>
        <div class="num">{{ itemNum }} ITEMS</div>
      </div>
      <div class="total-price text-center">
        {{ totalPrice }} <small>Tk</small>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    ...mapGetters(["totalPrice", "itemNum"]),
  },
  methods: {
    openEntireBag() {
      this.$store.commit("openBag");
    },
  },
};
</script>

<style scoped>
.short-info {
  width: 60px;
  height: 75px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  cursor: pointer;
}
.item-num {
  background: rgb(119, 119, 119);
  color: rgb(247, 193, 128);
}
.item-num .num {
  font-size: 14px;
  font-weight: 650;
}
</style>