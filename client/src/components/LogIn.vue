<template lang="html">
  <div>
    <h3>Log In !</h3><br>
    <form @submit.prevent="login">
      <span>ID </span>
      <input type="text" v-model='user.ID'>
      <br>
      <span>password </span>
      <input type="text" v-model='user.password'>
      <br><br>
      <input type="submit" value="LogIn">
      <br><br>
      <span class="not_pass" id='check'></span>
    </form>
  </div>
</template>

<script>
import validator from 'validator'
import user_api from '@/api/user_api'
import user_store from '@/store/user_store'
import player_store from '@/store/player_store'

export default {
  name: 'LogIn',
  data() {
    return {
      user: {
        ID: '',
        password: ''
      },
    }
  },
  created() {
    if (user_store.state.userType) this.$router.push('/')
  },
  methods: {
    async login() {

      document.getElementById('check').innerHTML = ''

      let data =
      JSON.parse(JSON.stringify(
        await user_api.login({
          ID: this.user.ID,
          password: this.user.password,
        })
      )).data

      if (data.msg == 'success') {
        user_store.dispatch('login', {ID: data.userID, type:  data.userType})
        this.$router.push('/')
      }
      else document.getElementById('check').innerHTML = data.msg

    },

  }
}
</script>

<style lang="sass" scoped>

  @import '@/themes/bit/form.sass'

</style>
