import api from './api'

  export default {

    have_ID (credentials) {
      return api().post('have_ID', credentials)
    },

    have_email (credentials) {
      return api().post('have_email', credentials)
    },

    signup (credentials) {
      return api().post('signup', credentials)
    },

    login (credentials) {
      return api().post('login', credentials)
    },

  }
