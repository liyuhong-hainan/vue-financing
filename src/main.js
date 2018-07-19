import Vue from 'vue';
import App from './App';
import router from './router';
import './common/stylus/index.styl';
require('swiper/dist/css/swiper.css');
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
// router.afterEach((to, from, next) => {
//   window.scrollTo(0, 0);
// });
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
