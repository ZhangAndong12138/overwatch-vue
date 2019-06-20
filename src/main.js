import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
