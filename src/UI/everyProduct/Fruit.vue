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

    <!-- Adding to shopping bag -->
    <button class="bag adding" v-if="!inBag" @click="addProd">
      <i class="fas fa-shopping-bag"></i> Add to bag
    </button>
    <div class="bag counting d-flex justify-content-between" v-if="inBag">
      <button class="minus" @click="subtractProd">-</button>
      <button class="writing" @click="addProd">{{ numOfProd }} in bag</button>
      <button class="plus" @click="addProd">+</button>
    </div>
  </div>
</template>

<script>
import bagMixin from "../../mixins/bagMixin";

export default {
  props: ["fruit"],
  mixins: [bagMixin],
  data() {
    return {
      product: {
        imgName: this.fruit.imgName,
        name: this.fruit.name,
        quantity: this.fruit.quantity,
        price: this.fruit.price,
        prodNum: 0,
        group: this.fruit.group,
      },
    };
  },
};
</script>

<style scoped>
/*  */
.bag {
  width: 100%;
  border-radius: 3px;
}
.adding {
  background-color: white;
  border: 0.2px solid rgb(185, 185, 185);
  color: rgb(233, 106, 106);
  font-size: 15px;
  padding: 5px 0;
  font-weight: 600;
}
.counting {
  background-color: rgb(233, 106, 106);
  border: none;
  outline: none;
}
.counting button {
  padding: 5px 10px;
  font-size: 15px;
  background: none;
  color: white;
  font-weight: 600;
}
.writing {
  border: none;
}
.minus {
  border-top: none;
  border-bottom: none;
  border-left: none;
  border-right: 0.3px solid rgba(0, 0, 0, 0.363);
}
.plus {
  border-top: none;
  border-bottom: none;
  border-right: none;
  border-left: 0.3px solid rgba(0, 0, 0, 0.363);
}
/*  */
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
.prod-img img {
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