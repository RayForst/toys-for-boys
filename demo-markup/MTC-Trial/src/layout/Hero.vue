<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import hero2x from '@/assets/Hero@2x.png'

const pagination = ref({
  clickable: true,
  renderBullet(index, className) {
    return `<span class="hero-slider__pagination ${className}"></span>`
  }
})

const modules = ref([Pagination])
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <div class="animated-box animate__animated animate__fadeInUp">
        <span class="caption">Design and order your new kitchen online today</span>
        <h1>Bespoke & made to measure handmade kitchen design</h1>
        <a class="button">Order Now</a>
      </div>
    </div>
    <swiper
      :pagination="pagination"
      :cssMode="true"
      :modules="modules"
      class="custom-swiper hero-slider"
    >
      <swiper-slide
        ><div class="my-slide">
          <img
            src="@/assets/Hero.png"
            :srcset="hero2x"
            alt="Kitchen design"
            width="2000"
            height="980"
          /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="my-slide">
          <img
            src="@/assets/Hero.png"
            :srcset="hero2x"
            alt="Kitchen design 2"
            width="2000"
            height="980"
          /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="my-slide">
          <img
            src="@/assets/Hero.png"
            :srcset="hero2x"
            alt="Kitchen design 3"
            width="2000"
            height="980"
          /></div
      ></swiper-slide>
    </swiper>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.hero {
  position: relative;
  color: var(--color-white);
  z-index: 1;

  .hero-content {
    position: absolute;
    z-index: 2;
    width: 100%;
    padding: 0 24px;
    @include respond-to($breakpoint-lg) {
      width: 700px;
      padding: 0;
    }
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    .caption {
      padding: 0 24px;
      @include respond-to($breakpoint-lg) {
        padding: 0;
      }
    }
  }
  .caption {
    text-shadow: 0px 0px 4px #000000;
  }
  h1 {
    text-shadow: 0px 0px 25px #00000080;
    color: var(--color-white);
  }
  .button {
    box-shadow: 0px 2px 10px #00000033;
    &:hover,
    &:active {
      box-shadow: 0px 2px 5px #00000040;
    }
  }
}

.my-slide {
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  background: var(--color-body);
  position: relative;
  display: flex;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @include respond-to($breakpoint-lg) {
    height: 900px;
  }
}

.hero-slider {
  caret-color: transparent;
}
</style>
