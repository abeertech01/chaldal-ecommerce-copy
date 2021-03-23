<template>
  <div class="fruits-veg">
    <div>
      <img :src="require('../assets/' + fv.imgName + '.jpg')" alt="" />
      <h4 class="name">{{ fv.name }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["fv"],
};
</script>

<style scoped>
.fruits-veg {
  display: inline-block;
  text-align: center;
}
.fruits-veg img {
  width: 280px;
}
.fruits-veg h4 {
  font-weight: 300;
}
</style>