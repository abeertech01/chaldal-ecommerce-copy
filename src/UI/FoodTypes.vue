<template>
  <div class="food-types">
    <div>
      <img :src="require('../assets/' + food.imgName + '.jpg')" alt="" />
      <h4 class="name">{{ food.name }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["food"],
};
</script>

<style scoped>
.food-types {
  display: inline-block;
  text-align: center;
}
.food-types img {
  width: 280px;
}
.food-types h4 {
  font-weight: 300;
}
</style>