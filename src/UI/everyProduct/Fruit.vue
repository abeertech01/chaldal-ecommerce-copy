<template>
  <div class="fruit">
    <img
      :src="require('../../prodImages/fruits/' + fruit.imgName + '.jpg')"
      alt="fruit.imgName"
    />
    <h4 class="name">{{ fruit.name }}</h4>
    <p>{{ fruit.quantity }}</p>
    <p>
      <span class="price text-danger">{{ fruit.price }}</span>
      <small
        ><del> {{ fruit.oldPrice }}</del></small
      >
    </p>
  </div>
</template>

<script>
export default {
  props: ["fruit"],
};
</script>

<style scoped>
.fruit {
  display: inline-block;
  text-align: center;
  margin-right: 20px;
}
.fruit img {
  width: 200px;
}
.fruit h4 {
  font-weight: 300;
}
.fruit .price {
  font-size: 18px;
  font-weight: 600;
}
</style>