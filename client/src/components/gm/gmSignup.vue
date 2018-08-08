<template>
  <div>
    <h3>gm Signup !</h3><br>
    <form @submit.prevent="signup">
      <span>ID </span>
      <input type="text" v-model='gm.ID'><span class='qm'><span id='qm_ID'>?</span><span class='qm_detail'>6-12 charecters / only a-z, A-Z, 0-9</span></span>
      <br><br>
      <span>password </span>
      <input type="text" v-model='gm.password'><span class='qm'><span id='qm_password'>?</span><span class='qm_detail'>6-12 charecters / only a-z, A-Z, 0-9</span></span>
      <br>
      <span>confirm password </span>
      <input type="text" v-model='confirmPassword'><span class='not_pass'>{{password_not_match}}</span></span>
      <br><br>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import validator from 'validator'
import user_api from '@/api/user_api'

export default {
  name: 'gmSignup',
  data() {
    return {
      gm: {
        ID: '',
        password: '',
      },
      confirmPassword: '',
      password_not_match: '',
      pass: false
    }
  },
  methods: {

    async check_data() {

      this.pass = true

      let ID_format = true

      document.getElementById('qm_ID').className = ''
      document.getElementById('qm_password').className = ''

      this.password_not_match = ''

      if (!validator.isLength(this.gm.ID,{min:6, max:12}) || !validator.isAlphanumeric(this.gm.ID)) {
        document.getElementById('qm_ID').className = 'qm_not_pass'
        ID_format = false
        this.pass = false
      }

      if (!validator.isLength(this.gm.password,{min:6, max:12}) || !validator.isAlphanumeric(this.gm.password)) {
        document.getElementById('qm_password').className = 'qm_not_pass'
        this.pass = false
      }

      if (this.gm.password != this.confirmPassword) {
        this.password_not_match = 'password not match'
        this.pass = false
      }

      if (ID_format) {
        if (JSON.parse(JSON.stringify(await user_api.haveID({ID: this.gm.ID}))).data == 'have') {
          alert(this.gm.ID + ' : is already uesd.')
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
              ID: this.gm.ID,
              password: this.gm.password,
              confirmPassword: this.confirmPassword,
              type: 'gm'
            })
          )).data == 'success') {
            alert('You have success registered for gm !!')
            alert('thank you')
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

  <style lang="sass" scoped>

    @import '@/themes/bit/form.sass'

  </style>
