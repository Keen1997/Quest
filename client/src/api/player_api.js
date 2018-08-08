import api from './api'

  export default {

    getStatus (credentials) {
      return api().post('playerStatus', credentials)
    },
    
  }
