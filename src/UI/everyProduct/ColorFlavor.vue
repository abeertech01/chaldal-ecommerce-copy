<template>
  <div class="color-flavor">
    <div>
      <img
        :src="require('../../prodImages/colorsFlavors/' + cf.imgName + '.jpg')"
        :alt="cf.imgName"
      />
      <h4 class="name">{{ cf.name }}</h4>
      <p>{{ cf.quantity }}</p>
      <p>
        <span class="price text-danger">{{ cf.price }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cf"],
};
</script>

<style scoped>
.color-flavor {
  display: inline-block;
  text-align: center;
  margin-right: 20px;
}
.color-flavor img {
  width: 200px;
}
.color-flavor h4 {
  font-weight: 300;
}
.color-flavor .price {
  font-size: 18px;
  font-weight: 600;
}
</style>