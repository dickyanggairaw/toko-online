<template>
  <div id="nav" class="container navbar navbar-light bg-light">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>    
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm" type="search" placeholder="Search" aria-label="Search">
      </form>
    <div>
      <a href="#" @click="login" v-if="!isLoginUser">Login</a>
      <a href="#" @click="register" v-if="!isLoginUser">Register</a>
      <a href="#" v-if="isLoginUser">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      this.$router.push('/login')
    },
    register () {
      this.$router.push('/register')
    }
  }
}
</script>

<style>

</style>