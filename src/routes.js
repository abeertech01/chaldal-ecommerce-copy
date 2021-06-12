import Home from './pages/Home.vue';
import SearchList from './pages/SearchList.vue';
import FruitsAndVegetables from './pages/typesPages/FruitsAndVegetables.vue';
import Cooking from './pages/typesPages/Cooking.vue';
import Beverages from './pages/typesPages/Beverages.vue';
import HealthCare from './pages/typesPages/HealthCare.vue';
import Food from './pages/Food.vue';

import Fruits from './pages/productsPages/Fruits.vue';
import Vegetables from './pages/productsPages/Vegetables.vue';

import Spices from './pages/productsPages/Spices.vue';
import ColorsFlavors from './pages/productsPages/ColorsFlavors.vue';

import SoftDrinks from './pages/productsPages/SoftDrinks.vue';
import SyrupsPowders from './pages/productsPages/SyrupsPowders.vue';

import FoodSupplements from './pages/productsPages/FoodSupplements.vue';
import Antiseptics from './pages/productsPages/Antiseptics.vue';

import NotFound from './pages/NotFound.vue';

export default [
  { path: '/', component: Home },
  { path: '/search-list', component: SearchList },
  { path: '/fruits-vegetables', component: FruitsAndVegetables },
  { path: '/cooking', component: Cooking },
  { path: '/beverages', component: Beverages },
  { path: '/health-care', component: HealthCare },
  { path: '/food', component: Food },

  { path: '/fruits', component: Fruits },
  { path: '/vegetables', component: Vegetables },

  { path: '/spices', component: Spices },
  { path: '/colors-flavors', component: ColorsFlavors },

  { path: '/soft-drinks', component: SoftDrinks },
  { path: '/syrups-powders', component: SyrupsPowders },

  { path: '/food-supplements', component: FoodSupplements },
  { path: '/antiseptics', component: Antiseptics },
  { path: '/:notFound(.*)', component: NotFound }
]