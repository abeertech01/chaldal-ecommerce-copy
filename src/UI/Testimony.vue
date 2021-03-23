<template>
  <div :hidden="testimony.isHidden">
    <div class="testimony">
      <!-- Profile -->
      <div class="profile text-center">
        <div
          class="dp"
          :style="{
            backgroundImage: `url('${require('../assets/' +
              testimony.id +
              '.jpg')}')`,
          }"
        ></div>
        <div class="customer-name">{{ testimony.name }}</div>
      </div>

      <!-- Comment -->
      <div class="comment">
        <p>
          {{ testimony.comment }}
        </p>
      </div>
    </div>

    <!-- Dot Buttons -->
    <div class="dots">
      <button
        class="checker-btn c1-checker"
        :class="{ 'not-active': !checkerBtn1, active: checkerBtn1 }"
        @click="c1Fetcher"
      ></button>
      <button
        class="checker-btn c2-checker"
        :class="{ 'not-active': !checkerBtn2, active: checkerBtn2 }"
        @click="c2Fetcher"
      ></button>
      <button
        class="checker-btn c3-checker"
        :class="{ 'not-active': !checkerBtn3, active: checkerBtn3 }"
        @click="c3Fetcher"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["testimony"],
  emits: ["c1Click", "c2Click", "c3Click"],
  data() {
    return {
      // image: "../assets/logo.png",
    };
  },
  computed: {
    checkerBtn1() {
      if (this.testimony.id === "dp1") {
        return true;
      } else {
        return false;
      }
    },
    checkerBtn2() {
      if (this.testimony.id === "dp2") {
        return true;
      } else {
        return false;
      }
    },
    checkerBtn3() {
      if (this.testimony.id === "dp3") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    c1Fetcher() {
      this.$emit("c1Click");
    },
    c2Fetcher() {
      this.$emit("c2Click");
    },
    c3Fetcher() {
      this.$emit("c3Click");
    },
  },
};
</script>

<style scoped>
.testimony {
  display: grid;
  grid-template-columns: 160px auto;
  align-items: center;
  margin: 20px 0;
}
.testimony .dp {
  display: inline-block;
  width: 120px;
  height: 120px;
  /* background-color: burlywood; */
  background-position: center;
  background-size: 300px;
  border-radius: 50%;
}
.testimony .profile .customer-name {
  font-size: 17px;
}
.testimony .comment {
  padding: 15px 15px 0 15px;
  margin: 0 25px 25px 25px;
  background-color: rgb(233, 233, 233);
  border-radius: 10px;
}
.dots {
  text-align: center;
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