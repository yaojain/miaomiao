import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'
Vue.config.productionTip = false; //设置为 false 以阻止 vue 在启动时生成生产提示
Vue.prototype.$axios = axios;
Vue.filter('setWh',(url,arg)=>{
  return url.replace(/w\.h/,arg)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
