<template lang="html">
  <div id="SignUp">
    <h3>Sign Up !</h3><br>
    <form @submit.prevent="signup">
      <span>ID </span>
      <input type="text" v-model='user.ID'><span class='qm'><span id='qm_ID'>?</span><span class='qm_detail'>6-12 charecters / only a-z, A-Z, 0-9</span></span>
      <br><br>
      <span>password </span>
      <input type="text" v-model='user.password'><span class='qm'><span id='qm_password'>?</span><span class='qm_detail'>6-12 charecters / only a-z, A-Z, 0-9</span></span>
      <br>
      <span>confirm password </span>
      <input type="text" v-model='user.confirmPassword'><span class='not_pass'>{{warn.password_not_match}}</span></span>
      <br><br>
      <span>email </span>
      <input type="text" v-model='user.email'><span class='qm'><span id='qm_email'>?</span><span class='qm_detail'>for verify / right email format</span></span>
      <br>
      <span>confirm email </span>
      <input type="text" v-model='user.confirmEmail'><span class='not_pass'>{{warn.email_not_match}}</span></span>
      <br><br>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import validator from 'validator'
import user_api from '../api/user_api'

export default {
  name: 'SignUp',
  data() {
    return {
      user: {
        ID: '',
        password: '',
        email:'',
        confirmPassword: '',
        confirmEmail: '',
      },
      warn: {
        password_not_match: '',
        email_not_match: ''
      },
      pass: false
    }
  },
  methods: {

    async check_data() {

      this.pass = true

      let ID_format = true
      let email_format = true

      document.getElementById('qm_ID').className = ''
      document.getElementById('qm_password').className = ''
      document.getElementById('qm_email').className = ''

      this.warn.password_not_match = ''
      this.warn.email_not_match = ''

      if (!validator.isLength(this.user.ID,{min:6, max:12}) || !validator.isAlphanumeric(this.user.ID)) {
        document.getElementById('qm_ID').className = 'qm_not_pass'
        ID_format = false
        this.pass = false
      }

      if (!validator.isLength(this.user.password,{min:6, max:12}) || !validator.isAlphanumeric(this.user.password)) {
        document.getElementById('qm_password').className = 'qm_not_pass'
        this.pass = false
      }

      if (this.user.password != this.user.confirmPassword) {
        this.warn.password_not_match = 'password not match'
        this.pass = false
      }

      if (ID_format) {
        if (JSON.parse(JSON.stringify(await user_api.have_ID({ID: this.user.ID}))).data == 'have') {
          alert(this.user.ID + ' : is already uesd.')
          this.pass = false
        }
      }

      if (!validator.isEmail(this.user.email)) {
        document.getElementById('qm_email').className = 'qm_not_pass'
        email_format = false
        this.pass = false
      }

      if (email_format) {
        if (JSON.parse(JSON.stringify(await user_api.have_email({email: this.user.email}))).data == 'have') {
          alert(this.user.email + ' : is already uesd.')
          this.pass = false
        }
      }

      if (email_format) {
        if (this.user.email != this.user.confirmEmail) {
          this.warn.email_not_match = 'email not match'
          this.pass = false
        }
      }

    },

    async signup () {
      await this.check_data()
      if (this.pass) {
        this.$router.push('/')
        if (JSON.parse(JSON.stringify(
            await user_api.signup({
              ID: this.user.ID,
              password: this.user.password,
              confirmPassword: this.user.confirmPassword,
              email: this.user.email,
              confirmEmail: this.user.confirmEmail
            })
          )).data == 'success') {
            alert('You have success registered !!')
            alert('welcome to the Quest !')
            alert('thank! for join us')
        }
        else {
          alert('Sorry, have some error')
          alert('Sorry again')
        }

      }
    }

  }
}
</script>

<style lang="sass">

  @import '../themes/bit/form.sass'

</style>
