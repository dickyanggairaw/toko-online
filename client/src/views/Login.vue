<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Login</h4>
          <button type="button" class="btn btn-sm" v-on:click="closeModal">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="loginForm">
            <div class="form-group">
              <label>Email address</label>
              <input type="email" class="form-control mr-sm" v-model="email">
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control mr-sm" v-model="password">
            </div><br>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" v-on:click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
   data(){
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      closeModal() {
        this.$emit('close-modal');
      },
      loginForm () {
        let data = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('login', data)
        this.closeModal()
        this.email = ''
        this.password = ''
      }
    },
  };
</script>
<style scoped>
  .modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: block;
  overflow: hidden;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.6);
  }
</style>