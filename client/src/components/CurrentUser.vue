<template>
  <div id='CurrentUser'>
    <h3>Hello %?$x^! {{currentUser}}</h3>
    <status/>
    <br>
    <button @click='logout()'>logout</button>
  </div>
</template>

<script>
import Status from '@/components/Status'

export default {
  name: 'CurrentUser',
  components: {
    Status
  },
  data() {
    return {

    }
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="sass">
</style>
