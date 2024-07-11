<script setup>
import { ref, onMounted, onUnmounted, getCurrentInstance } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver.js'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'

const { proxy } = getCurrentInstance()
const { element, isIntersecting } = useIntersectionObserver()
const imageModules = import.meta.glob('@/assets/gallery/*.png')
const images = ref([])

Object.keys(imageModules).forEach((path) => {
  if (!path.includes('@2x')) {
    imageModules[path]().then((module) => {
      images.value.push({
        src: module.default,
        alt: `Gallery Image ${path.match(/\d+/) ? path.match(/\d+/)[0] : ''}`
      })
    })
  }
})

const slidesPerView = ref(4)
const center = ref(true)

const handleResize = () => {
  const width = window.innerWidth
  if (width <= 768) {
    slidesPerView.value = 2
  } else if (width <= 1024) {
    slidesPerView.value = 3
  } else {
    slidesPerView.value = 4
    center.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize() // Initialize value on mount
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <section class="gallery">
    <div
      class="container"
      ref="element"
      :class="['animated-box', 'animate__animated', { animate__fadeInUp: isIntersecting }]"
    >
      <h3>Customer Gallery</h3>
      <div class="gallery-container">
        <Swiper
          :slidesPerView="'auto'"
          :centeredSlides="center"
          :spaceBetween="20"
          :freeMode="true"
          class="custom-swiper"
        >
          <SwiperSlide v-for="(image, index) in images" :key="index" class="slide">
            <img
              class="gallery-image"
              width="310"
              height="310"
              :src="image.src"
              :srcset="`${image.src} 1x, ${proxy.$getRetinaImage(image.src)} 2x`"
              :alt="image.alt"
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <a class="button" href="#">View More</a>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.gallery {
  text-align: center;
  padding: 40px 0;
  overflow: hidden;

  @include respond-to($breakpoint-lg) {
    padding: 93px 0 100px 0;
  }

  &-container {
    height: 310px;
    margin-top: 38px;
    margin-bottom: 40px;
    display: flex;

    &-image {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }
    .slide {
      width: 310px;
    }
  }
}
</style>
