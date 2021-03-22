<template>
  <div class="prod-category p-3 text-center" @click="cateClick">
    <p class="d-inline-block">{{ category }}</p>
    <img
      class="icon-img float-right"
      :src="require('../icons/' + cateIcon + '.png')"
      :alt="cateIcon"
    />
  </div>
</template>

<script>
export default {
  props: ["category", "iconIndex"],
  computed: {
    // srcImage() {
    //   return "../icons/" + this.cateIcon + ".png";
    // },
    cateIcon() {
      if (this.iconIndex === 0) {
        return "vegetables";
      } else if (this.iconIndex === 1) {
        return "cooking";
      } else if (this.iconIndex === 2) {
        return "beverages";
      } else if (this.iconIndex === 3) {
        return "healthProducts";
      } else {
        return "nothing";
      }
    },
  },
  methods: {
    cateClick() {
      console.log(this.category);
    },
  },
};
</script>

<style scoped>
.prod-category {
  border: 1px solid rgb(216, 216, 216);
  border-radius: 5px;
  cursor: pointer;
}
.prod-category p {
  height: 100%;
  position: relative;
  top: 7px;

  /* background-color: burlywood; */
}
.icon-img {
  height: 35px;
  vertical-align: baseline;
}
</style>