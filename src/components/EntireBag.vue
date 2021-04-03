<template>
  <div class="entire-bag">
    <section class="item-num">
      <p class="d-inline">
        <i class="fas fa-shopping-bag"></i> {{ itemNum }} ITEMS
      </p>
      <button @click="closeEntireBag" class="float-right">Close</button>
    </section>
    <section
      :class="{ green: discountPrice, grey: !discountPrice }"
      class="discount-info pl-2 pr-2"
    >
      <p v-if="!discountPrice" class="d-inline">
        Shop &#2547; {{ 400 - totalPrice }} more and save &#2547; {{ 10 }} fee
      </p>
      <p v-else class="d-inline">You have reduced delivery charge</p>
      <p class="d-inline float-right">
        &#2547; {{ discountPrice ? 9 : 19 }} <i class="fas fa-info-circle"></i>
      </p>
    </section>
    <section class="bag-details">
      <div v-if="itemNum === 0" class="bag-empty">
        <div class="bag-pic">
          <img src="../assets/bag.png" alt="bag" />
        </div>
        <p class="text-center">Your shopping bag is empty. Start shopping</p>
      </div>

      <bag-item
        v-for="item in itemSet"
        :key="item.imgName"
        :item="item"
        class="w-100"
        v-else
      ></bag-item>
    </section>
    <section class="contact-code text-center">
      <div class="special-code">
        <p class="code-btn" @click="codeClick">
          <i v-if="!sCode" class="far fa-arrow-alt-circle-down"></i
          ><i v-else class="far fa-arrow-alt-circle-up"></i> Have a special
          code?
        </p>
        <div
          v-if="sCode"
          class="taking-input d-flex justify-content-center pt-2 pb-2"
        >
          <input type="text" placeholder="Special Code" />
          <button class="go-btn">Go</button>
          <button @click="codeClick" class="close-btn">close</button>
        </div>
      </div>
      <div class="contact">
        <p>Phone: 0121-2222222</p>
      </div>
      <div class="place-order">
        <button class="order-btn">Place Order</button>
        <div class="total-price">&#2547; {{ totalPrice }}</div>
      </div>
    </section>
  </div>
</template>

<script>
import BagItem from "../UI/BagItem.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BagItem,
  },
  data() {
    return {
      sCode: false,
    };
  },
  computed: {
    ...mapGetters(["totalPrice", "itemNum", "itemSet"]),
    discountPrice() {
      if (this.totalPrice >= 400) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    codeClick() {
      this.sCode = !this.sCode;
    },
    closeEntireBag() {
      this.$store.commit("closeBag");
    },
  },
};
</script>

<style scoped>
/* Entire Bag */
.entire-bag {
  padding-top: 55px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

/* Item Number */
.item-num {
  background: #e4e0e1;
  height: 40px;
  font-size: 18px;
  font-weight: 600;
  padding: 5px 10px 0 10px;
}
.item-num i {
  font-size: 24px;
}
.item-num button {
  border: 1px solid rgb(151, 151, 151);
  font-size: 17px;
}

/* Discount */
.discount-info {
  height: 35px;
  color: rgb(255, 255, 255);
  padding: 6px 0;
  font-size: 14px;
}
.grey {
  background: #7b797a;
}
.green {
  background: #99ce6f;
}
/* Bag Details */
.bag-empty {
  margin: 100px auto 0 auto;
  width: 280px;
  height: 280px;
  color: rgb(150, 150, 150);
  font-size: 17px;
}
.bag-pic {
  background-color: #eee;
  margin-top: 100px;
  margin: 100px auto 0 auto;
  width: 260px;
  height: 260px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
}
.bag-pic img {
  width: 220px;
  margin-top: 50px;
}
.contact-code {
  position: absolute;
  bottom: 10px;
  width: 100%;
  background: white;
}
.special-code {
  background: rgb(241, 241, 241);
}
.code-btn:hover {
  background: rgb(216, 216, 216);
  cursor: pointer;
}
.taking-input input {
  border: none;
  border-radius: 4px;
  margin-right: 8px;
  background: rgb(214, 214, 214);
  padding: 4px;
  text-align: center;
}
.taking-input .go-btn {
  background: #ff686e;
  border: none;
  outline: none;
  border-radius: 4px;
  color: white;
  padding: 4px 12px;
  margin-right: 8px;
}
.taking-input .close-btn {
  border: none;
  outline: none;
  background: none;
  padding: 4px 8px;
}
.contact p {
  font-weight: 700;
  font-size: 18px;
  margin-top: 10px;
  color: rgb(150, 150, 150);
}
.place-order {
  margin: 10px 20px;
}
.place-order .order-btn {
  width: 60%;
  background: #ff686e;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px 0 0 4px;
  font-size: 18px;
}
.place-order .total-price {
  width: 40%;
  display: inline-block;
  background: #cc565a;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 0 4px 4px 0;
  font-size: 18px;
}
</style>