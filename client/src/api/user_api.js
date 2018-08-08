import api from './api'

  export default {

    signup (credentials) {
      return api().post('signup', credentials)
    },

    haveID (credentials) {
      return api().post('haveID', credentials)
    },

    playerHaveEmail (credentials) {
      return api().post('haveEmail', credentials)
    },

    login (credentials) {
      return api().post('login', credentials)
    },

  }
