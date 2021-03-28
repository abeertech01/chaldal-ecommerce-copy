<template>
  <div class="antiseptic">
    <div class="prod-img d-flex align-items-center">
      <img
        :src="require('../../prodImages/antiseptics/' + anti.imgName + '.jpg')"
        :alt="anti.imgName"
      />
    </div>

    <div class="prod-info">
      <div class="name">{{ anti.name }}</div>
      <div class="info">
        <p class="quantity">{{ anti.quantity }}</p>
        <p class="price text-danger">{{ anti.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["anti"],
};
</script>

<style scoped>
.antiseptic {
  display: inline-block;
  width: 200px;
  text-align: center;
  margin-right: 20px;
}
.prod-img {
  width: 180px;
  height: 220px;
  margin: 0 auto;
  /* background-color: rgb(255, 236, 172); */
}
.antiseptic img {
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