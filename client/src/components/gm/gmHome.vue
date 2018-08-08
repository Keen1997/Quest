<template>
  <div>
    <h3>Hello %?$x^! {{currentGmID}}</h3>
    <br>
    <button @click='logout()'>logout</button>
  </div>
</template>

<script>
import user_store from '@/store/user_store'
import gm_store from '@/store/gm_store'

export default {
  name: 'gmHome',
  computed: {
    currentGmID() {
      return gm_store.state.currentGM.ID
    }
  },
  methods: {
    logout() {
      user_store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>
