import Vue from 'vue'
import Vuex from 'vuex'
import user_api from './api/user_status_api'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentUser: null,
    user_status: {
      writing: null,
      learning: null,
      traveling: null,
      creative: null,
      community: null,
      volunteer: null
    }
  },
  mutations: {
    setUser(state, user) {
      state.currentUser = user
    },
    logout(state){
      state.currentUser = null
    },
    async getStatus(state) {
      if (state.currentUser) {
        state.user_status.writing = JSON.parse(JSON.stringify(await user_api.getStatus({ID: state.currentUser}))).data.writing
        state.user_status.learning = JSON.parse(JSON.stringify(await user_api.getStatus({ID: state.currentUser}))).data.learning
        state.user_status.traveling = JSON.parse(JSON.stringify(await user_api.getStatus({ID: state.currentUser}))).data.traveling
        state.user_status.creative = JSON.parse(JSON.stringify(await user_api.getStatus({ID: state.currentUser}))).data.creative
        state.user_status.community = JSON.parse(JSON.stringify(await user_api.getStatus({ID: state.currentUser}))).data.community
        state.user_status.volunteer = JSON.parse(JSON.stringify(await user_api.getStatus({ID: state.currentUser}))).data.volunteer
      }
    }
  },
  actions: {
    setUser(context, user) {
      context.commit('setUser', user)
    },
    logout(context, user) {
      context.commit('logout', user)
    },
    getStatus(context, status) {
      context.commit('getStatus')
    }
  }
})
