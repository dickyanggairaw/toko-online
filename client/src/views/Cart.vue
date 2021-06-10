<template>
  <div class="container">
      <table class="table">
        <thead class="thead-light">
            <tr>
            <th scope="col">No.</th>
            <th scope="col">Nama Product</th>
            <th scope="col">Jumlah</th>
            <th scope="col">Harga</th>
            <th scope="col">Total Harga</th>
            <th scope="col">Aksi</th>
            </tr>
        </thead>
        <tbody v-for="(cart, i) in carts" :key="i">
            <tr>
            <th scope="row">{{i + 1}}</th>
            <td>{{cart.nama}}</td>
            <td>{{cart.cart_stock}}</td>
            <td>{{cart.harga}}</td>
            <td>{{cart.harga * cart.stock}}</td>
            <td>
                <button class="btn btn-danger btn-sm" @click="deleteCart(cart)">delete</button>
            </td>
            </tr>
        </tbody>
        </table>
  </div>
</template>

<script>
export default {
    methods :{
        getCart(){
            this.$store.dispatch('getCart')
        },
        deleteCart(payload){
            this.$store.dispatch('deleteCart', payload)
        }
    },
    computed: {
        carts () {
            return this.$store.state.carts
        }
    },
    created () {
        this.getCart()
    }
}
</script>

<style>

</style>