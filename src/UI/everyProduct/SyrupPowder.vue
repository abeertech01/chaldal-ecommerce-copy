<template>
  <div class="syrup-powder-ui">
    <div>
      <img
        :src="
          require('../../prodImages/syrupsPowders/' + sDrink.imgName + '.jpg')
        "
        :alt="sDrink.imgName"
      />
      <h4 class="name">{{ sDrink.name }}</h4>
      <p>{{ sDrink.quantity }}</p>
      <p>
        <span class="price text-danger">{{ sDrink.price }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sDrink"],
};
</script>

<style scoped>
.syrup-powder-ui {
  display: inline-block;
  text-align: center;
  margin-right: 20px;
}
.syrup-powder-ui img {
  width: 200px;
}
.syrup-powder-ui h4 {
  font-weight: 300;
}
.syrup-powder-ui .price {
  font-size: 18px;
  font-weight: 600;
}
</style>