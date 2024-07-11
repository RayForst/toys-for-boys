<script setup>
import { onMounted, onUnmounted } from 'vue'
import AppHeader from './layout/Header.vue'
import Hero from './layout/Hero.vue'
import AboutUs from './layout/AboutUs.vue'
import Testimonials from './layout/Testimonials.vue'
import CustomerGallery from './layout/CustomerGallery.vue'
import AppFooter from './layout/Footer.vue'

const setVH = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

onMounted(() => {
  setVH()
  window.addEventListener('resize', setVH)
})

onUnmounted(() => {
  window.removeEventListener('resize', setVH)
})
</script>

<template>
  <AppHeader />

  <main>
    <Hero />
    <AboutUs />
    <Testimonials />
    <CustomerGallery />
  </main>

  <AppFooter />
</template>

<style scoped></style>
