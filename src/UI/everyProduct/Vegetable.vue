<template>
  <div class="vegetable">
    <div class="prod-img d-flex align-items-center">
      <img
        :src="
          require('../../prodImages/vegetables/' + vegetable.imgName + '.jpg')
        "
        alt="vegetable.imgName"
      />
    </div>

    <div class="prod-info">
      <div class="name">{{ vegetable.name }}</div>
      <div class="info">
        <p class="quantity">{{ vegetable.quantity }}</p>
        <p>
          <span class="price text-danger">{{ vegetable.price }}</span>
          <small
            ><del> {{ vegetable.oldPrice }}</del></small
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
  props: ["vegetable"],
};
</script>

<style scoped>
.vegetable {
  display: inline-block;
  width: 200px;
  text-align: center;
  margin-right: 20px;
  /* background-color: rgb(216, 216, 216); */
}
.prod-img {
  width: 180px;
  height: 220px;
  margin: 0 auto;
  /* background-color: rgb(255, 236, 172); */
}
.vegetable img {
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