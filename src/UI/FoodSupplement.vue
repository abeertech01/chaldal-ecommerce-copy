<template>
  <div class="food-supplement">
    <div>
      <img
        :src="
          require('../prodImages/supplements/' + foodSupple.imgName + '.jpg')
        "
        :alt="foodSupple.imgName"
      />
      <h4 class="name">{{ foodSupple.name }}</h4>
      <p>{{ foodSupple.quantity }}</p>
      <p>
        <span class="price text-danger">{{ foodSupple.price }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["foodSupple"],
};
</script>

<style scoped>
.food-supplement {
  display: inline-block;
  text-align: center;
  margin-right: 20px;
}
.food-supplement img {
  width: 200px;
}
.food-supplement h4 {
  font-weight: 300;
}
.food-supplement .price {
  font-size: 18px;
  font-weight: 600;
}
</style>