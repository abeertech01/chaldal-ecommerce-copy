<template>
  <div class="vegetable">
    <img
      :src="
        require('../../prodImages/vegetables/' + vegetable.imgName + '.jpg')
      "
      alt="vegetable.imgName"
    />
    <h4 class="name">{{ vegetable.name }}</h4>
    <p>{{ vegetable.quantity }}</p>
    <p>
      <span class="price text-danger">{{ vegetable.price }}</span>
      <small
        ><del> {{ vegetable.oldPrice }}</del></small
      >
    </p>
  </div>
</template>

<script>
export default {
  props: ["vegetable"],
};
</script>

<style scoped>
.vegetable {
  display: inline-block;
  text-align: center;
  margin-right: 20px;
}
.vegetable img {
  width: 200px;
}
.vegetable h4 {
  font-weight: 300;
}
.vegetable .price {
  font-size: 18px;
  font-weight: 600;
}
</style>