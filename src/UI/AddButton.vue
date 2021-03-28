<template>
  <div class="add-btn">
    <button class="adding w-100" @click="addClick" :hidden="hideIt">
      <i class="fas fa-shopping-bag"></i> Add to bag
    </button>
    <div class="counting w-100" :hidden="!hideIt">
      <button class="minus">-</button>
      <button class="writing">in bag</button>
      <button class="plus">+</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hideIt: false,
    };
  },
  methods: {
    addClick() {
      this.hideIt = true;
    },
  },
};
</script>

<style scoped>
.adding {
  color: rgb(255, 116, 111);
  border: 0.3px solid rgb(216, 216, 216);
  border-radius: 2px;
  background-color: white;
  padding: 5px 0;
  font-size: 15px;
  font-weight: 700;
}
.counting {
  display: flex;
  justify-content: space-between;
  background-color: rgb(255, 116, 111);
  border-radius: 2px;
}
.counting button {
  background: none;
  padding: 5px 12px;
  font-size: 15px;
  font-weight: 700;
  color: white;
}
.minus {
  border-right: 0.5px solid rgb(190, 72, 72);
  border-bottom: none;
  border-left: none;
  border-top: none;
}
.writing {
  border: none;
}
.plus {
  border-right: none;
  border-bottom: none;
  border-left: 0.5px solid rgb(190, 72, 72);
  border-top: none;
}
</style>