<template>
  <div class="bag-items">
    <div class="quantity">
      <button class="increase" @click="incQuan">
        <i class="fas fa-chevron-up"></i>
      </button>
      <button class="num" @click="incQuan">{{ item.prodNum }}</button>
      <button class="decrease" @click="decQuan">
        <i class="fas fa-chevron-down"></i>
      </button>
    </div>

    <div class="product-info">
      <div class="prod-img">
        <img
          :src="
            require('../prodImages/' + item.group + '/' + item.imgName + '.jpg')
          "
          :alt="item.imgName"
        />
      </div>
      <div class="info">
        <div class="prod-name">
          {{ item.name }}<br /><small
            ><strong>&#2547; {{ price }} / {{ item.quantity }}</strong></small
          >
        </div>
      </div>
    </div>

    <div class="price">&#2547; {{ price * item.prodNum }}</div>

    <button class="remove-btn" @click="removeItem">
      <i class="fas fa-times"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    price() {
      let prodPrice = parseInt(this.item.price);
      return prodPrice;
    },
  },
  methods: {
    incQuan() {
      this.$store.commit("incProdNum", this.item.imgName);
    },
    decQuan() {
      if (this.item.prodNum > 1) {
        this.$store.commit("decProdNum", this.item.imgName);
      } else {
        this.$store.commit("removeProd", this.item.imgName);
      }
    },
    removeItem() {
      this.$store.commit("removeProd", this.item.imgName);
    },
  },
};
</script>

<style scoped>
.bag-items {
  display: grid;
  grid-template-columns: 10% 60% 20% 10%;
  align-items: center;
  padding: 8px;
  font-size: 14px;
  border-bottom: 0.3px solid #eee;
}
.quantity {
  display: grid;
  grid-template-rows: auto auto auto;
  width: 20px;
}
.quantity button {
  background: none;
  border: none;
}
.product-info {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.product-info .info {
  padding-left: 10px;
}
.prod-img img {
  width: 35px;
}
.price {
  padding-left: 10px;
}
.remove-btn {
  border: none;
  background: none;
}
</style>