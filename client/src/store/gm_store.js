import Vue from 'vue'
import Vuex from 'vuex'
import user_store from'@/store/user_store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentGM: {
      ID: null
    }
  },
  mutations: {
    gmLogin(state, ID) {
      state.currentGM.ID = ID
    },
    gmLogout(state) {
      state.currentGM.ID = null
    },
  },
  actions: {
    gmLogin(context, ID) {
      context.commit('gmLogin', ID)
    },
    gmLogout(context) {
      context.commit('gmLogout')
    },
  }
})
