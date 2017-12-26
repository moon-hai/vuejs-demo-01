// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './store/store';
import moment from 'moment'

Vue.use(require('vue-moment'));

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MMMM YYYY h:mm a')
  }
});

axios.defaults.baseURL = 'https://conduit.productionready.io/api';
axios.defaults.headers.Accepts = 'application/json';

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
