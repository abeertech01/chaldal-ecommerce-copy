<template>
  <div class="health-prod-types" @click="typeClick">
    <div>
      <img
        :src="require('../assets/' + ht.imgName + '.jpg')"
        alt="ht.imgName"
      />
      <h4 class="name">{{ ht.name }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ht"],
  methods: {
    typeClick() {
      if (this.ht.imgName === "food-supplements") {
        this.$router.push("/food-supplements");
      } else {
        this.$router.push("/antiseptics");
      }
    },
  },
};
</script>

<style scoped>
.health-prod-types {
  display: inline-block;
  text-align: center;
  cursor: pointer;
}
.health-prod-types img {
  width: 280px;
}
.health-prod-types h4 {
  font-weight: 300;
}
</style>