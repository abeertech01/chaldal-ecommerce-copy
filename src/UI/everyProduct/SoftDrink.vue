<template>
  <div class="soft-drink">
    <img
      :src="require('../../prodImages/softDrinks/' + drink.imgName + '.jpg')"
      :alt="drink.imgName"
    />
    <h4 class="name">{{ drink.name }}</h4>
    <p>{{ drink.quantity }}</p>
    <p>
      <span class="price text-danger">{{ drink.price }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["drink"],
};
</script>

<style scoped>
.soft-drink {
  display: inline-block;
  text-align: center;
  margin-right: 20px;
}
.soft-drink img {
  width: 200px;
}
.soft-drink h4 {
  font-weight: 300;
}
.soft-drink .price {
  font-size: 18px;
  font-weight: 600;
}
</style>