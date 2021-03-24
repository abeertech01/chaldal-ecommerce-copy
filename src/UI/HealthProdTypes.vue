<template>
  <div class="health-prod-types">
    <div>
      <img
        :src="require('../assets/' + ht.imgName + '.jpg')"
        alt="ht.imgName"
      />
      <h4 class="name">{{ ht.name }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ht"],
};
</script>

<style scoped>
.health-prod-types {
  display: inline-block;
  text-align: center;
}
.health-prod-types img {
  width: 280px;
}
.health-prod-types h4 {
  font-weight: 300;
}
</style>