<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 mb-4 team-area" v-for="product in products" :key="product.id">
        <div class="single-team">
          <img v-bind:src="product.image" class="w-100 item-cart-2" alt="...">
          <div class="card-body body-style team-text">
            <h5 className="mb-0" @click="addCart(product.id)">{{product.nama}}</h5>
            <p className="mb-0">{{product.harga}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  methods: {
    getProduct () {
      this.$store.dispatch('getProducts')
    },
    addCart (id) {
      console.log("bisa")
      this.$store.dispatch('addCart', id)
    }
  },
  computed:{
    products () {
      return this.$store.state.products
    }
  },
  created(){
    this.getProduct()
  }
}
</script>

<style>
.single-team {
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.6s ease-out;
  padding: 25px;
}
.single-team:hover {
  transform: translateY(15px);
}
.single-team:hover:before {
  opacity: 1;
}
.single-team .team-text {
  position: relative;
  z-index: 2;
  color: #fff;
  opacity: 0;
  transform: translateY(60px);
  transition: 1s;
}
.single-team:hover .team-text {
  opacity: 1;
  transform: translateY(0);
  transform: translateX(-140px);
}
.single-team:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgb(71, 71, 71), transparent);
  z-index: 2;
  transition: 0.5s;
  opacity: 0;
}
h5:hover {
  cursor: pointer;
}
</style>