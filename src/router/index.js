import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '../components/LandingPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome to Knightride',
      component: LandingPage,
    },
  ],
  // eslint-disable-next-line consistent-return
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
  },
});
