<template>
  <div id="app">

    <div id='header'>
      <nav id='nav'>

        <div v-if='currentUserType == null'>
          <initialNav/>
        </div>

        <div v-else-if='currentUserType == "player"'>
          <playerNav/>
        </div>

        <div v-else-if='currentUserType == "npc"'>
          <npcNav/>
        </div>

        <div v-else-if='currentUserType == "gm"'>
          <gmNav/>
        </div>

      </nav>
    </div>

    <router-view/>

  </div>
</template>

<script>
import initialNav from '@/components/initialNav'
import playerNav from '@/components/player/playerNav'
import npcNav from '@/components/npc/npcNav'
import gmNav from '@/components/gm/gmNav'
import user_store from '@/store/user_store'

export default {
  name: 'App',
  components: {
    initialNav, playerNav, npcNav, gmNav
  },
  computed: {
    currentUserType() {
      return user_store.state.currentUser.type
    },
  }

}
</script>

<style lang="sass">

  @import '@/themes/bit/main.sass'

</style>
