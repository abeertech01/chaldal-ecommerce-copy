import Home from './pages/Home.vue';
import FruitsAndVegetables from './pages/FruitsAndVegetables.vue';
import Cooking from './pages/Cooking.vue';
import Beverages from './pages/Beverages.vue';
import HealthCare from './pages/HealthCare.vue';
import Food from './pages/Food.vue';

import Fruits from './pages/Fruits.vue';
import Vegetables from './pages/Vegetables.vue';

import Spices from './pages/Spices.vue';
import ColorsFlavors from './pages/ColorsFlavors.vue';

import SoftDrinks from './pages/SoftDrinks.vue';
import SyrupsPowders from './pages/SyrupsPowders.vue';

import FoodSupplements from './pages/FoodSupplements.vue';
import Antiseptics from './pages/Antiseptics.vue';

export default [
  { path: '/', component: Home },
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
]