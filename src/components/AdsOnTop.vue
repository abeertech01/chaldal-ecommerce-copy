<template>
  <div class="d-flex justify-content-center">
    <div class="ads">
      <div class="ad1"></div>
      <div class="ad2"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ads {
  width: 74%;
  margin-bottom: 20px;
}
.ad1 {
  display: inline-block;
  width: 49.9%;
  height: 200px;
  background-image: url("https://source.unsplash.com/1600x900/?spices,vegetables,salad");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.ad2 {
  display: inline;
  float: right;
  width: 49.9%;
  height: 200px;
  background-image: url("https://source.unsplash.com/1600x900/?salad,spices,vegetables");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>