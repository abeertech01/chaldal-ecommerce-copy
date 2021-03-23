<template>
  <div class="howtoorder row" :hidden="step.isHidden">
    <div class="image col-6 d-flex justify-content-center align-items-center">
      <img :src="require('../assets/' + step.name + '.jpg')" :alt="step.name" />
    </div>
    <div class="step col-6 d-flex justify-content-center align-items-center">
      <div>
        <h1 class="text-center">{{ step.title }}</h1>
        <p class="text-center">{{ step.subTitle }}</p>
      </div>
      <div class="dots">
        <button
          class="checker-btn order-checker"
          :class="{ 'not-active': !checkerBtn1, active: checkerBtn1 }"
          @click="orderFetcher"
        ></button>
        <button
          class="checker-btn payment-checker"
          :class="{ 'not-active': !checkerBtn2, active: checkerBtn2 }"
          @click="paymentFetcher"
        ></button>
        <button
          class="checker-btn delivery-checker"
          :class="{ 'not-active': !checkerBtn3, active: checkerBtn3 }"
          @click="deliveryFetcher"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["orderClick", "paymentClick", "deliveryClick"],
  data() {
    return {};
  },
  props: ["step"],
  computed: {
    checkerBtn1() {
      if (this.step.name === "order") {
        return true;
      } else {
        return false;
      }
    },
    checkerBtn2() {
      if (this.step.name === "payment") {
        return true;
      } else {
        return false;
      }
    },
    checkerBtn3() {
      if (this.step.name === "delivery") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    orderFetcher() {
      this.$emit("orderClick");
    },
    paymentFetcher() {
      this.$emit("paymentClick");
    },
    deliveryFetcher() {
      this.$emit("deliveryClick");
    },
  },
};
</script>

<style scoped>
.howtoorder {
  height: 300px;
  width: 900px;
  border: 1px solid rgb(153, 153, 153);
  border-radius: 8px;
}
.image img {
  height: 200px;
}
.step h1 {
  color: #ff686e;
}
.step p {
  font-size: 18px;
}
.dots {
  position: absolute;
  bottom: 0;
}
.checker-btn {
  width: 11px;
  height: 11px;
  margin: 0 2px;
  border: none;
  outline: none;
  border-radius: 50%;
}
.not-active {
  background-color: #cacaca;
}
.active {
  background-color: #ff686e;
}
</style>