<template>
  <div class="bag-items">
    <div class="quantity">
      <button class="increase"><i class="fas fa-chevron-up"></i></button>
      <button class="num">0</button>
      <button class="decrease"><i class="fas fa-chevron-down"></i></button>
    </div>

    <div class="product info">
      <!-- image -->
    </div>

    <div class="price"></div>

    <button class="remove-btn"></button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bag-items {
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 8px;
}
.quantity {
  display: grid;
  grid-template-rows: auto auto auto;
}
</style>