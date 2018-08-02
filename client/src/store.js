import Vue from 'vue'
import Vuex from 'vuex'
import user_api from './api/user_api'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentUser: null,
    isLogin: false
  },
  mutations: {
    setUser(state, user) {
      state.currentUser = user
      if (user) state.isLogin = true
    }
  },
  actions: {
    setUser(context, user) {
      context.commit('setUser', user)
    }
  }
})
