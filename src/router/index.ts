import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dm',
      name: 'dm',
      component: () => import('../views/DM.vue')
    },
    {
      path: '/goblin',
      name: 'goblin',
      component: () => import('../views/Goblin.vue')
    }
  ]
});

export default router;
