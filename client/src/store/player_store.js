import Vue from 'vue'
import Vuex from 'vuex'
import player_api from '@/api/player_api'
import user_store from'@/store/user_store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPlayer: {
      ID: null,
      status: null
    }
  },
  mutations: {
    playerLogin(state, ID) {
      state.currentPlayer.ID = ID
    },
    playerLogout(state) {
      state.currentPlayer.ID = null
      state.currentPlayer.status = null
    },
    async getStatus(state) {
      if (state.currentPlayer.ID) {
        state.currentPlayer.status = JSON.parse(JSON.stringify(await player_api.getStatus({ID: state.currentPlayer.ID}))).data
      }
    }
  },
  actions: {
    playerLogin(context, ID) {
      context.commit('playerLogin', ID)
    },
    playerLogout(context) {
      context.commit('playerLogout')
    },
    getStatus(context) {
      context.commit('getStatus')
    }
  }
})
