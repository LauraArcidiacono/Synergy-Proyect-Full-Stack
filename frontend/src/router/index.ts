import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LandingPage from '../views/LandingPage.vue'
import Dashboard from '../views/Dashboard.vue';
import Techniques from '../views/Techniques.vue';
import Profile from '../views/Profile.vue';
import Resources from '../views/Resources.vue';
import NotFound from '../views/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/synergy',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/synergy/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/synergy/techniques',
    name: 'Techniques',
    component: Techniques,
  },
  {
    path: '/synergy/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/synergy/resources',
    name: 'Resources',
    component: Resources,
  },
  {
    path: '/synergy/notfound',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
