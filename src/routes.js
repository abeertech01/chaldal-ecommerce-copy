import Home from './pages/Home.vue';
import FruitsAndVegetables from './pages/FruitsAndVegetables.vue';
import Cooking from './pages/Cooking.vue';
import Beverages from './pages/Beverages.vue';
import Food from './pages/Food.vue';

export default [
  { path: '/', component: Home },
  { path: '/fruits-vegetables', component: FruitsAndVegetables },
  { path: '/cooking', component: Cooking },
  { path: '/beverages', component: Beverages },
  { path: '/food', component: Food }
]