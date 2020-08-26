import Vue from 'vue'
import App from './App.vue'
import router from "../router/router";
import  "../vant/vant"
import VueLazyload from 'vue-lazyload'
// import axios from "axios";
import "./Mock/MockSever";
import "../until/until";
// axios.defaults.baseURL="http://localhost:8080";
// Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading: 'dist/loading.gif',
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
