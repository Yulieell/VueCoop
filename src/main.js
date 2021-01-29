import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

Vue.use(SuiVue);
window.api = axios.create({
  baseURL: 'https://tools.sopress.net/iut/coop/api/',
  params : {
    token : false
  },
  headers: { Authorization: '57233e5510cfe595d6ccb19738616a0c69605b78' }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
