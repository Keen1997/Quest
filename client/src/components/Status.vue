<template>
  <div id='Status'>
    <h3>status</h3>
    <p>all : {{all}}</p>
    <p>writing : {{writing}}</p>
    <p>learning : {{learning}}</p>
    <p>traveling : {{traveling}}</p>
    <p>creative : {{creative}}</p>
    <p>community : {{community}}</p>
    <p>volunteer : {{volunteer}}</p>
  </div>
</template>

<script>
export default {
  name: 'Status',
  data() {
    return {
      all: 0
    }
  },
  computed: {
    writing() {
      return this.$store.state.user_status.writing
    },
    learning() {
      return this.$store.state.user_status.learning
    },
    traveling() {
      return this.$store.state.user_status.traveling
    },
    creative() {
      return this.$store.state.user_status.creative
    },
    community() {
      return this.$store.state.user_status.community
    },
    volunteer() {
      return this.$store.state.user_status.volunteer
    }
  },
  async created() {
    await this.$store.dispatch('getStatus')
    this.all = this.writing + this.learning + this.traveling + this.creative + this.community + this.volunteer
  }
}
</script>

<style lang="sass">
</style>
