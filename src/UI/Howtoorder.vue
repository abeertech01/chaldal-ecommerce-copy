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
        ></button>
        <button
          class="checker-btn payment-checker"
          :class="{ 'not-active': !checkerBtn2, active: checkerBtn2 }"
        ></button>
        <button
          class="checker-btn delivery-checker"
          :class="{ 'not-active': !checkerBtn3, active: checkerBtn3 }"
        ></button>
        <!-- <input type="radio" name="order" :checked="radio1" />
        <input type="radio" name="payment" :checked="radio2" />
        <input type="radio" name="delivery" :checked="radio3" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
};
</script>

<style scoped>
.howtoorder {
  height: 300px;
  width: 500px;
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
/* .dots input {
  margin: 0 2px 0 2px;
  cursor: pointer;
} */
.not-active {
  background-color: #cacaca;
}
.active {
  background-color: #ff686e;
}
</style>