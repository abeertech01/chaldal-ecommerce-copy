<template>
  <div class="search-list">
    <div :class="{ 'get-down': isBagOpen }" class="headline">
      <hr />
      <h4 class="name">Search Results</h4>
      <hr />
    </div>
    <div class="all-types">
      <search-prod
        v-for="sProd in searchProds"
        :key="sProd.imgName"
        :sProd="sProd"
      ></search-prod>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SearchProd from "../UI/SearchProd.vue";

export default {
  components: { SearchProd },
  computed: {
    ...mapGetters([
      "fruits",
      "vegetables",
      "colorsFlavors",
      "spices",
      "softDrinks",
      "syrupsPowders",
      "foodSupplements",
      "antiseptics",

      // non-products
      "searchedText",
      "isBagOpen",
    ]),
    searchProds() {
      let sText = this.searchedText;
      const textRegex = new RegExp(sText, "gi");

      return this.allProducts.filter((el) => {
        let name = el.name;
        return textRegex.test(name);
      });
    },
    allProducts() {
      return [
        ...this.fruits,
        ...this.vegetables,
        ...this.colorsFlavors,
        ...this.spices,
        ...this.softDrinks,
        ...this.syrupsPowders,
        ...this.foodSupplements,
        ...this.antiseptics,
      ];
    },
  },
};
</script>

<style scoped>
.get-down {
  margin-top: 55px;
}
.search-list {
  margin: 0 20px;
}
.headline {
  display: flex;
  flex-direction: row;
}
hr {
  width: 100%;
  height: 1px;
  border: none;
  background-color: rgb(161, 161, 161);
}
.name {
  text-align: center;
  width: 500px;
  margin: 0 20px;
  font-weight: 300;
}
</style>