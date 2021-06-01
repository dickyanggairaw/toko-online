<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 mb-4 team-area">
        <div class="single-team">
          <img src="https://id.360buyimg.com/Indonesia/s220x220_/nHBfsgABQgAAAAEAM9hZKgAA9lE.jpg.dpg.webp" class="w-100 item-cart-2" alt="...">
          <div class="card-body body-style team-text">
            <h5 className="mb-0">Sepatu</h5>
            <p className="mb-0">20 Likes</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-4 team-area">
        <div class="single-team">
          <img src="https://id.360buyimg.com/Indonesia/s220x220_/nHBfsgABQgAAAAEAM9hZKgAA9lE.jpg.dpg.webp" class="w-100 item-cart-2" alt="...">
          <div class="card-body body-style team-text">
            <h5 className="mb-0">sepatu</h5>
            <p className="mb-0">20 Likes</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-4 team-area">
        <div class="single-team">
          <img src="https://id.360buyimg.com/Indonesia/s220x220_/nHBfsgABQgAAAAEAM9hZKgAA9lE.jpg.dpg.webp" class="w-100 item-cart-2" alt="...">
          <div class="card-body body-style team-text">
            <h5 className="mb-0">sepatu</h5>
            <p className="mb-0">20 Likes</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-4 team-area">
        <div class="single-team">
          <img src="https://id.360buyimg.com/Indonesia/s220x220_/nHBfsgABQgAAAAEAM9hZKgAA9lE.jpg.dpg.webp" class="w-100 item-cart-2" alt="...">
          <div class="card-body body-style team-text">
            <h5 className="mb-0">sepatu</h5>
            <p className="mb-0">20 Likes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product'
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
</style>