<template>
  <div class="home">
    <Banner/><br>
    <Product/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '../components/Banner'
import Product from '../components/Product'

export default {
  name: 'Home',
  components: {
    Banner,
    Product
  }
}
</script>
