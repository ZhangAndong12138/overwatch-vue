import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'

//contributions test
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.echarts = echarts 
Vue.use(ElementUI)

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
