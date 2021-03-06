import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSplide from '@splidejs/vue-splide';

import './assets/styles/reset.css';
import './assets/styles/main.css';

Vue.config.productionTip = false;
Vue.use(VueSplide);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
