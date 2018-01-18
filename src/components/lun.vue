<!--轮播图-->
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../assets/img/images/banner/01.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../assets/img/images/banner/02.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../assets/img/images/banner/03.jpg" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
 import '../assets/lib/js/swiper.js'

export default {
  mounted:function () {
    var mySwiper = new Swiper ('.swiper-container', {
      pagination : '.swiper-pagination',
      autoplay : 2000,
    })
  }
}
</script>

<style>
  @import '../assets/lib/css/swiper.css';

  .swiper-container {
    width: 100%;
    z-index: -1;
  }
  .swiper-slide img{
    width: 100%;
    height: 150px;
  }
  ..swiper-pagination-bullet-active{
    background-color: white;
  }
  .swiper-pagination{
    text-align: right;
  }
</style>
