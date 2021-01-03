// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import modernizr from 'modernizr'; // eslint-disable-line no-unused-vars
import Vue from 'vue';
import App from './App';
import router from './router';
// eslint-disable-next-line import/first
import 'bootstrap';
// eslint-disable-next-line import/first
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line import/first
import 'bootstrap-vue/dist/bootstrap-vue.min.css';
// eslint-disable-next-line import/first
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
