import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LandingPage from '../views/LandingPage.vue'
import Dashboard from '../views/Dashboard.vue';
import Techniques from '../views/Techniques.vue';
import Profile from '../views/Profile.vue';
import Resources from '../views/Resources.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/techniques',
    name: 'Techniques',
    component: Techniques,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
