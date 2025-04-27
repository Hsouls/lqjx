import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../views/login.vue';
import canteen from '../views/canteen.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/canteen',
    name: 'canteen',
    component: canteen
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
    