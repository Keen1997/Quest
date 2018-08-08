<template>
  <div>

    <div v-if='currentUserType == null'>
      <h3>Hello</h3>
    </div>

    <div v-else-if='currentUserType == "player"'>
      <CurrentPlayer/>
    </div>

    <div v-else-if='currentUserType == "npc"'>
      <npcHome/>
    </div>

    <div v-else-if='currentUserType == "gm"'>
      <gmHome/>
    </div>

  </div>
</template>

<script>
import CurrentPlayer from '@/components/player/CurrentPlayer'
import npcHome from '@/components/npc/npcHome'
import gmHome from '@/components/gm/gmHome'
import user_store from '@/store/user_store'

export default {
  name: 'Home',
  components: {
    CurrentPlayer, npcHome, gmHome
  },
  computed: {
    currentUserType() {
      return user_store.state.currentUser.type
    }
  }
}
</script>

<style lang="sass">
</style>
