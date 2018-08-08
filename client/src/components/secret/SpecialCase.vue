<template>
  <div>

    <div v-if='!goTo' id='SpecialCase'>
      <form @submit.prevent="checkKey">
        <input type="password" v-model='key'>
        <br><br>
        <input type="submit" value="send">
      </form>
    </div>

    <div v-else-if='goTo == "gmSignup"'>
      <gmSignup/>
    </div>

    <div v-else-if='goTo == "npcSignup"'>
      <npcSignup/>
    </div>

  </div>
</template>

<script>
import key_special_api from '@/api/key_special_api'
import gmSignup from '@/components/gm/gmSignup'
import npcSignup from '@/components/npc/npcSignup'

export default {
  name: 'SpecialCase',
  components: {
    gmSignup,
    npcSignup
  },
  data() {
    return {
      key: '',
      goTo: ''
    }
  },
  methods: {
    async checkKey() {

      let data =
      JSON.parse(JSON.stringify(
        await key_special_api.checkKey({
          key: this.key
        })
      )).data
      if (data.msg == 'success') {
        this.goTo = data.keyTo
      }
      else alert(data.msg)
    }
  }
}
</script>

  <style lang="sass" scoped>

    #SpecialCase
      margin-top: 200px
      text-align: center

    input
      font-size: 22px

    input[type='password']
      padding: 10px 20px
      width: 500px

  </style>
