<template>
  <div class="antiseptic">
    <img
      :src="require('../../prodImages/antiseptics/' + anti.imgName + '.jpg')"
      :alt="anti.imgName"
    />
    <h4 class="name">{{ anti.name }}</h4>
    <p>{{ anti.quantity }}</p>
    <p>
      <span class="price text-danger">{{ anti.price }}</span>
    </p>
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
  text-align: center;
  margin-right: 20px;
}
.antiseptic img {
  width: 200px;
}
.antiseptic h4 {
  font-weight: 300;
}
.antiseptic .price {
  font-size: 18px;
  font-weight: 600;
}
</style>