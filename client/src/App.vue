<template>
  <div id="app">
    <div id='header'>
      <nav id='nav'>

        <router-link to="/" v-if='!currentUser'>Home</router-link>
        <router-link to="/quest" v-if='!currentUser'>Quest</router-link>
        <router-link to="/" v-if='!currentUser'>Shop</router-link>
        <router-link to="/login" v-if='!currentUser'>Log In</router-link>
        <router-link to="/signup" v-if='!currentUser'>Sign Up</router-link>

        <router-link to="/" v-if='currentUser'>{{currentUser}}</router-link>
        <router-link to="/quest" v-if='currentUser'>Quest</router-link>
        <router-link to="/" v-if='currentUser'>Item</router-link>
        <router-link to="/" v-if='currentUser'>Shop</router-link>
        <router-link to="/" v-if='currentUser'>community</router-link>

        <router-link to="/hello">about</router-link>
        <router-link to="/" style="padding-right: 0">Setting</router-link>

      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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

  @import './themes/bit/main.sass'


</style>
