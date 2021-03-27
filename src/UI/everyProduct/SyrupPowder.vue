<template>
  <div class="syrup-powder-ui">
    <div class="prod-img d-flex align-items-center">
      <img
        :src="
          require('../../prodImages/syrupsPowders/' + sDrink.imgName + '.jpg')
        "
        :alt="sDrink.imgName"
      />
    </div>

    <div class="prod-info">
      <div class="name">{{ sDrink.name }}</div>
      <div class="info">
        <p class="quantity">{{ sDrink.quantity }}</p>
        <p class="price text-danger">{{ sDrink.price }}</p>
      </div>
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
  width: 200px;
  text-align: center;
  margin-right: 20px;
  /* background-color: rgb(216, 216, 216); */
}
.prod-img {
  width: 180px;
  height: 220px;
  margin: 0 auto;
  /* background-color: rgb(255, 236, 172); */
}
.syrup-powder-ui img {
  width: 100%;
}
.prod-info {
  height: 150px;
  display: grid;
  align-content: space-between;
}
.prod-info .name {
  font-size: 17px;
  height: 100%;
}
.prod-info .info .price {
  color: rgb(255, 61, 61);
  font-size: 18px;
  font-weight: 600;
}
</style>