import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/skills',
      name: 'skills',
      // Lazy loading
      component: () => import('../views/SkillsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // Lazy loading
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      // Lazy loading
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // Lazy loading
      component: () => import('../views/ContactView.vue')
    }
  ]
});

export default router;
