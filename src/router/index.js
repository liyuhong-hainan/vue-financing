import Vue from 'vue';
import Router from 'vue-router';
import Financing from '@/pages/financing';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Financing',
      component: Financing
    }
  ]
});
