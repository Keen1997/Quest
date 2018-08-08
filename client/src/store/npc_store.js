import Vue from 'vue'
import Vuex from 'vuex'
import user_store from'@/store/user_store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentNPC: {
      ID: null
    }
  },
  mutations: {
    npcLogin(state, ID) {
      state.currentNPC.ID = ID
    },
    npcLogout(state) {
      state.currentNPC.ID = null
    },
  },
  actions: {
    npcLogin(context, ID) {
      context.commit('npcLogin', ID)
    },
    npcLogout(context) {
      context.commit('npcLogout')
    },
  }
})
