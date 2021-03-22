<template>
  <div class="howtoorder row" :hidden="step.isHidden">
    <div class="image col-6 d-flex justify-content-center align-items-center">
      <img :src="require('../assets/' + step.name + '.jpg')" :alt="step.name" />
    </div>
    <div class="step col-6 d-flex justify-content-center align-items-center">
      <div>
        <h1 class="text-center">{{ step.title }}</h1>
        <p class="text-center">{{ step.subTitle }}</p>
      </div>
      <div class="dots">
        <button><i class="fas fa-circle"></i></button>
        <button><i class="fas fa-circle"></i></button>
        <button><i class="fas fa-circle"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["step"],
};
</script>

<style scoped>
.howtoorder {
  height: 300px;
  width: 500px;
  border: 1px solid rgb(153, 153, 153);
  border-radius: 8px;
}
.image img {
  height: 200px;
}
.step h1 {
  color: #ff686e;
}
.step p {
  font-size: 18px;
}
.dots {
  position: absolute;
  bottom: 0;
}
.dots button {
  border: none;
  outline: none;
  background: none;
  font-size: 10px;
  color: rgb(146, 146, 146);
}
.active {
  color: #ff686e;
}
</style>