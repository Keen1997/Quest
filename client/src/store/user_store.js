import Vue from 'vue'
import Vuex from 'vuex'
import player_store from'@/store/player_store'
import npc_store from'@/store/npc_store'
import gm_store from'@/store/gm_store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      type: null
    }
  },
  mutations: {
    login(state, {ID, type}) {
      state.currentUser.type = type
      if (state.currentUser.type == 'player') player_store.dispatch('playerLogin', ID)
      if (state.currentUser.type == 'npc') npc_store.dispatch('npcLogin', ID)
      if (state.currentUser.type == 'gm') gm_store.dispatch('gmLogin', ID)
    },
    logout(state) {
      state.currentUser.type = null
      if (state.currentUser.type == 'player') player_store.dispatch('playerLogout')
      if (state.currentUser.type == 'npc') npc_store.dispatch('npcLogout')
      if (state.currentUser.type == 'gm') gm_store.dispatch('gmLogout')
    }
  },
  actions: {
    login(context, {ID, type}) {
      context.commit('login', {ID, type})
    },
    logout(context) {
      context.commit('logout')
    }
  }
})
