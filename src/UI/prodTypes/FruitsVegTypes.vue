<template>
  <div class="fruits-veg" @click="typeClick">
    <div>
      <img :src="require('../../assets/' + fv.imgName + '.jpg')" alt="" />
      <h4 class="name">{{ fv.name }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["fv"],
  methods: {
    typeClick() {
      if (this.fv.imgName === "fresh-fruits") {
        this.$router.push("/fruits");
      } else {
        this.$router.push("/vegetables");
      }
    },
  },
};
</script>

<style scoped>
.fruits-veg {
  display: inline-block;
  text-align: center;
  cursor: pointer;
}
.fruits-veg img {
  width: 280px;
}
.fruits-veg h4 {
  font-weight: 300;
}
</style>