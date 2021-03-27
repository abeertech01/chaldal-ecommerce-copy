<template>
  <div class="food-types" @click="typeClick">
    <div>
      <img :src="require('../assets/' + food.imgName + '.jpg')" alt="" />
      <h4 class="name">{{ food.name }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["food"],
  methods: {
    typeClick() {
      if (this.food.imgName === "fruits-veg-food") {
        this.$router.push("/fruits-vegetables");
      } else if (this.food.imgName === "cooking-food") {
        this.$router.push("/cooking");
      } else {
        this.$router.push("/beverages");
      }
    },
  },
};
</script>

<style scoped>
.food-types {
  display: inline-block;
  text-align: center;
  margin-right: 20px;
  cursor: pointer;
}
.food-types img {
  width: 280px;
}
.food-types h4 {
  font-weight: 300;
}
</style>