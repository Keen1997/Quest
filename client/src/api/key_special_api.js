import api from './api'

  export default {

    checkKey (credentials) {
      return api().post('checkSpecialKey', credentials)
    },

  }
