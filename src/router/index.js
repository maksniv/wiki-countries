import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  {
    path: '/wiki-countries/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/wiki-countries/country/:name',
    name: 'about',
    component: AboutView,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
