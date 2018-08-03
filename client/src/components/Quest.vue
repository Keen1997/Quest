<template>
  <div id='Quest'>
    <h3>Quest</h3>
  </div>
</template>

<script>

export default {
  name: 'Quest',
  data() {
    return {

    }
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser
    }
  },
}
</script>

<style lang="sass">
</style>
