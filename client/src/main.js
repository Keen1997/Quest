import Vue from 'vue'
import router from './router'
import user_store from '@/store/user_store'
import player_store from '@/store/player_store'
import App from './App'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  user_store,
  player_store,
  components: { App },
  template: '<App/>'
})
