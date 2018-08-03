import api from './api'

  export default {

    getStatus (credentials) {
      return api().post('user_status', credentials)
    },

  }
