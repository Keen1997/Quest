<template>
  <div>
    <h3>npc Signup !</h3><br>
    <form @submit.prevent="signup">
      <span>ID </span>
      <input type="text" v-model='npc.ID'><span class='qm'><span id='qm_ID'>?</span><span class='qm_detail'>6-12 charecters / only a-z, A-Z, 0-9</span></span>
      <br><br>
      <span>password </span>
      <input type="text" v-model='npc.password'><span class='qm'><span id='qm_password'>?</span><span class='qm_detail'>6-12 charecters / only a-z, A-Z, 0-9</span></span>
      <br>
      <span>confirm password </span>
      <input type="text" v-model='confirmPassword'><span class='not_pass'>{{password_not_match}}</span></span>
      <br><br>
      <span>contact <i>( ex. name, tel, lineID, email, etc )</i></span>
      <br><br>
      <textarea rows="8" cols="60" v-model='npc.contact' placeholder='up to you , no have format'></textarea>
      <br><br><br>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import validator from 'validator'
import user_api from '@/api/user_api'

export default {
  name: 'npcSignup',
  data() {
    return {
      npc: {
        ID: '',
        password: '',
        contact: ''
      },
      confirmPassword: '',
      password_not_match: '',
      pass: ''
    }
  },
  methods: {

    async check_data() {

      this.pass = true

      let ID_format = true

      document.getElementById('qm_ID').className = ''
      document.getElementById('qm_password').className = ''

      this.password_not_match = ''

      if (!validator.isLength(this.npc.ID,{min:6, max:12}) || !validator.isAlphanumeric(this.npc.ID)) {
        document.getElementById('qm_ID').className = 'qm_not_pass'
        ID_format = false
        this.pass = false
      }

      if (!validator.isLength(this.npc.password,{min:6, max:12}) || !validator.isAlphanumeric(this.npc.password)) {
        document.getElementById('qm_password').className = 'qm_not_pass'
        this.pass = false
      }

      if (this.npc.password != this.confirmPassword) {
        this.password_not_match = 'password not match'
        this.pass = false
      }

      if (ID_format) {
        if (JSON.parse(JSON.stringify(await user_api.haveID({ID: this.npc.ID}))).data == 'have') {
          alert(this.npc.ID + ' : is already uesd.')
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
              ID: this.npc.ID,
              password: this.npc.password,
              confirmPassword: this.confirmPassword,
              contact: this.npc.contact,
              type: 'npc'
            })
          )).data == 'success') {
            alert('You have success registered for NPC !!')
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

    textarea
      font-family: monospace
      font-size: 18px

  </style>
