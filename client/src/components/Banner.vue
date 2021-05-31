<template>
  <div class="container">
    <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true">
      <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0255/3331/7156/files/TieDyeForThis.jpg?v=1613629456"
            class="d-block w-100 h-50 height-banner"
            alt="..."
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0255/3331/7156/files/LOOKBOOK-SU-2_3b2cf567-93b4-4cd9-8b0d-9b3760f5201d.jpg?v=1618906795"
            class="d-block w-100 height-banner"
            alt="..."
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/originals/9a/71/6f/9a716f90fc2e24079b8960168d5ea089.jpg"
            class="d-block w-100 height-banner"
            alt="..."
          />
        </div>
        <div>
          <img
            src="https://www.muscatgrandmall.com/media/2437/men-fashion.jpg?anchor=center&mode=crop&width=1600&height=600&rnd=132032467470000000"
            class="d-block w-100 height-banner"
            alt="..."
          />
        </div>
        <div>
          <img
            src="https://images.vans.com/is/image/VansBrand/sp21-womens-bettertogether-1390x556?$fullres$"
            className="d-block w-75 height-banner"
            alt="..."
          />
        </div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
  }
</script> 