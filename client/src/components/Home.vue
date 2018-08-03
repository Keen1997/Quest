<template>
  <div id='Home'>

    <div v-if='!currentUser'>
      <h3>Hello</h3>
    </div>

    <div v-if='currentUser'>
      <CurrentUser/>
    </div>

  </div>
</template>

<script>
import CurrentUser from '@/components/CurrentUser'
import user_status_api from '../api/user_status_api'

export default {
  name: 'Home',
  components: {
    CurrentUser
  },
  data() {
    return {

    }
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser
    }
  }
}
</script>

<style lang="sass">
</style>
