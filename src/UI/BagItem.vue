<template>
  <div class="bag-items">
    <div class="quantity">
      <button class="increase"><i class="fas fa-chevron-up"></i></button>
      <button class="num">0</button>
      <button class="decrease"><i class="fas fa-chevron-down"></i></button>
    </div>

    <div class="product-info">
      <div class="prod-img">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="info">
        <div class="prod-name">
          Lorem ipsum dolor sit amet.<br /><small
            ><strong>36tk/150gm</strong></small
          >
        </div>
      </div>
    </div>

    <div class="price">50tk</div>

    <button class="remove-btn"><i class="fas fa-times"></i></button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bag-items {
  display: grid;
  grid-template-columns: 10% 60% 20% 10%;
  align-items: center;
  padding: 8px;
  font-size: 14px;
  border-bottom: 0.3px solid #eee;
}
.quantity {
  display: grid;
  grid-template-rows: auto auto auto;
  width: 20px;
}
.quantity button {
  background: none;
  border: none;
}
.product-info {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.product-info .info {
  padding-left: 10px;
}
.prod-img img {
  width: 35px;
}
.price {
  padding-left: 10px;
}
.remove-btn {
  border: none;
  background: none;
}
</style>