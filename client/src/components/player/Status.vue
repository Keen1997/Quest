<template>
  <div>
    <h3>status</h3>
    <ul>
      <li v-for="(value, key) in allStatus">{{key}} : {{value}}</li>
    </ul>
  </div>
</template>

<script>
import player_store from '@/store/player_store'

export default {
  name: 'Status',
  data() {
    return {

    }
  },
  computed: {
    allStatus() {
      return player_store.state.currentPlayer.status
    }
  },
  async created() {
    await player_store.dispatch('getStatus')
  }
}
</script>

<style lang="sass">
</style>
