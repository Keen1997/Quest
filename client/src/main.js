import Vue from 'vue'
import router from './router'
import { sync } from 'vuex-router-sync'
import {store} from './store'
import App from './App'

Vue.config.productionTip = false

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
