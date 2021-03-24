<template>
  <div class="cooking-types">
    <div>
      <img
        :src="require('../assets/' + ct.imgName + '.jpg')"
        alt="ct.imgName"
      />
      <h4 class="name">{{ ct.name }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ct"],
};
</script>

<style scoped>
.cooking-types {
  display: inline-block;
  text-align: center;
}
.cooking-types img {
  width: 280px;
}
.cooking-types h4 {
  font-weight: 300;
}
</style>