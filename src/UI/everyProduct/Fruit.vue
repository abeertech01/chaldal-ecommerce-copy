<template>
  <div class="fruit">
    <div class="prod-img d-flex align-items-center">
      <img
        :src="require('../../prodImages/fruits/' + fruit.imgName + '.jpg')"
        alt="fruit.imgName"
      />
    </div>

    <div class="prod-info">
      <div class="name">{{ fruit.name }}</div>
      <div class="info">
        <p class="quantity">{{ fruit.quantity }}</p>
        <p>
          <span class="price text-danger">{{ fruit.price }}</span>
          <small
            ><del> {{ fruit.oldPrice }}</del></small
          >
        </p>
      </div>
    </div>

    <add-button></add-button>
  </div>
</template>

<script>
import AddButton from "../AddButton.vue";

export default {
  components: {
    AddButton,
  },
  props: ["fruit"],
};
</script>

<style scoped>
.fruit {
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
.fruit img {
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