import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LandingPage from '../views/LandingPage.vue'
import Dashboard from '../views/Dashboard.vue';
import Techniques from '../views/Techniques.vue';
import TechniqueDetails from'../views/TechniqueDetails.vue';
import CreateTechniqueForm from '@/views/CreateTechniqueForm.vue';
import CreateReviewForm from '@/views/CreateReviewForm.vue';
import Profile from '../views/Profile.vue';
import Resources from '../views/Resources.vue';
import NotFound from '../views/NotFound.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';


const routes: Array<RouteRecordRaw> = [
  { 
    path: '/', 
    redirect: '/synergy'
},
  {
    path: '/synergy',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/synergy/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/synergy/register',
    name: 'Register',
    component: Register,
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
    path: '/synergy/techniques/:techniqueId',
    name: 'TechniqueDetails',
    component: TechniqueDetails,
    props: true,
  },
  {
    path: '/synergy/techniques/createtechniqueform',
    name: 'CreateTechniqueForm',
    component: CreateTechniqueForm,
  },
  {
    path: '/synergy/profile/:userId',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/synergy/techniques/createtereviewform',
    name: 'CreateREviewForm',
    component: CreateReviewForm,
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
