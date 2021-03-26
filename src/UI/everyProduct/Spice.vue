<template>
  <div class="spice">
    <div>
      <img
        :src="require('../../prodImages/spices/' + spice.imgName + '.jpg')"
        :alt="spice.imgName"
      />
      <h4 class="name">{{ spice.name }}</h4>
      <p>{{ spice.quantity }}</p>
      <p>
        <span class="price text-danger">{{ spice.price }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["spice"],
};
</script>

<style scoped>
.spice {
  display: inline-block;
  text-align: center;
  margin-right: 20px;
}
.spice img {
  width: 200px;
}
.spice h4 {
  font-weight: 300;
}
.spice .price {
  font-size: 18px;
  font-weight: 600;
}
</style>