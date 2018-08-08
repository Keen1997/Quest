<template >
  <div>
    <router-link to="/">player</router-link>
    <router-link to="/quest">Quest</router-link>
    <router-link to="/">Item</router-link>
    <router-link to="/">Shop</router-link>
    <router-link to="/">community</router-link>
    <router-link to="/hello">about</router-link>
    <router-link to="/" style="padding-right: 0">setting</router-link>
  </div>
</template>

<script>
export default {
  name: 'playerNav',
}
</script>
