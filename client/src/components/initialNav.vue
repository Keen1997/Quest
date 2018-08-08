<template >
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/hello">about</router-link>
    <router-link to="/quest">Quest</router-link>
    <router-link to="/">Shop</router-link>
    <router-link to="/login">Log In</router-link>
    <router-link to="/signup">Sign Up</router-link>
    <router-link to="/" style="padding-right: 0">setting</router-link>
  </div>
</template>

<script>
export default {
  name: 'initialNav',
}
</script>
