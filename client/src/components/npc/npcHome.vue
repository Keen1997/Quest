<template>
  <div>
    <h3>Hello %?$x^! {{currentNpcID}}</h3>
    <br>
    <button @click='logout()'>logout</button>
  </div>
</template>

<script>
import user_store from '@/store/user_store'
import npc_store from '@/store/npc_store'

export default {
  name: 'npcHome',
  computed: {
    currentNpcID() {
      return npc_store.state.currentNPC.ID
    }
  },
  methods: {
    logout() {
      user_store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>
