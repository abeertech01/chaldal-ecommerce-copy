<template>
  <div class="beverage-types">
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
};
</script>

<style scoped>
.beverage-types {
  display: inline-block;
  text-align: center;
}
.beverage-types img {
  width: 280px;
}
.beverage-types h4 {
  font-weight: 300;
}
</style>