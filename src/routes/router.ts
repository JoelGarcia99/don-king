import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Add other routes here, e.g.:
  // {
  //   path: '/tournaments',
  //   name: 'Tournaments',
  //   component: () => import('@/pages/Tournaments.vue') // Lazy load
  // },
  // {
  //   path: '/training',
  //   name: 'Training',
  //   component: () => import('@/pages/Training.vue')
  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: () => import('@/pages/Contact.vue')
  // }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
