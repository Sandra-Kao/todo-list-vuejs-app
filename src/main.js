import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
const isDebug_mode = process.env.NODE_ENV !== 'production';

Vue.config.debug = isDebug_mode;
Vue.config.devtools = isDebug_mode;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
