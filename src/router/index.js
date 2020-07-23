import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Index from '@/views/Index.vue';
import Communication from '../views/communication/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/demo',
    name: 'Demo',
    // component: () => import('../views/communication/index.vue')
    component: Communication
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/form/Index.vue')
  },
  {
    path: '/form-re',
    name: 'FormRe',
    component: () => import('../views/form-re/Index.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
