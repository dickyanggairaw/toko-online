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
      <a href="#" @click="openModal" v-if="!isLoginUser">Login</a>
      <Login v-show="isModalVisible" @close-modal="closeModal" />
      <a href="#" @click="register" v-if="!isLoginUser">Register</a>
      <Register v-show="isRegister" @register-close="closeRegister"/>
      <i class="fa fa-shopping-cart" aria-hidden="true" v-if="isLoginUser" @click="cart"></i>
      <a href="#" v-if="isLoginUser" @click="logout">Logout</a>
    </div>
  </div>
</template>

<script>
import Login from '../views/Login' 
import Register from '../views/Register'
export default {
  components: {
    Login,
    Register
  },
  data(){
    return {  
      isModalVisible: false,  
      isRegister: false
    }
  }, 
  methods: {
    login () {
      if(localStorage.access_token){
        this.$store.dispatch('logout', true)
      }
    },
    register () {
      this.isRegister = true;
    },
    closeRegister () {
      this.isRegister = false;
    },
    openModal() { 
      this.isModalVisible = true;
    }, 
    closeModal() {
      this.isModalVisible = false;
    }, 
    logout() {
      this.$store.dispatch('logout', false)
    },
    cart () {
      this.$router.push('/cart')
    }
  },
  computed: {
    isLoginUser () {
      return this.$store.state.isLogin
    }
  },
  created() {
    this.login()
  }
}
</script>

<style>
  i {
    color: #42b983;
  }
  i:hover {
    cursor: pointer;
    color: black;
  }
</style>