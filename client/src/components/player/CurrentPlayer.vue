<template>
  <div>
    <h3>Hello %?$x^! {{currentPlayerID}}</h3>
    <status/>
    <br>
    <button @click='logout()'>logout</button>
  </div>
</template>

<script>
import Status from '@/components/player/Status'
import user_store from '@/store/user_store'
import player_store from '@/store/player_store'

export default {
  name: 'CurrentPlayer',
  components: {
    Status
  },
  computed: {
    currentPlayerID() {
      return player_store.state.currentPlayer.ID
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

<style lang="sass">
</style>
