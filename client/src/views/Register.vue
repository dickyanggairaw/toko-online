<template>
  <div class="modal" >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Register</h4>
          <button type="button" class="btn btn-sm" v-on:click="closeModal">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group container">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control mr-sm" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="form-group container">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control mr-sm" id="exampleInputPassword1">
            </div><br>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" v-on:click="closeModal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
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
        //
      }
    },
    methods: {
      closeModal() {
        console.log('bisa register')
        this.$emit('register-close');
      },
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