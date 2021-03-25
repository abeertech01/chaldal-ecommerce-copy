<template>
  <div class="beverage-types" @click="typeClick">
    <div>
      <img
        :src="require('../assets/' + bt.imgName + '.jpg')"
        alt="bt.imgName"
      />
      <h4 class="name">{{ bt.name }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bt"],
  methods: {
    typeClick() {
      if (this.bt.imgName === "soft-drinks") {
        this.$router.push("/soft-drinks");
      } else {
        this.$router.push("/syrups-powders");
      }
    },
  },
};
</script>

<style scoped>
.beverage-types {
  display: inline-block;
  text-align: center;
  cursor: pointer;
}
.beverage-types img {
  width: 280px;
}
.beverage-types h4 {
  font-weight: 300;
}
</style>