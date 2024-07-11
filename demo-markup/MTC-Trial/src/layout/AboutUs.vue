<script setup>
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver.js'
import image2x from '@/assets/About@2x.png'

const { element, isIntersecting } = useIntersectionObserver()
const srcset = `${image2x} 2x`
</script>

<template>
  <section class="about-us">
    <div class="container">
      <div class="image">
        <img src="@/assets/About.png" loading="lazy" :srcset="srcset" alt="about image" />
      </div>
      <div
        ref="element"
        :class="[
          'content',
          'animated-box',
          'animate__animated',
          { animate__fadeInUp: isIntersecting }
        ]"
      >
        <span class="caption color-accent">Quality Craftmanship from build to delivery</span>
        <h2>Discover the beauty of a handmade kitchen</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien
          venenatis maximus vel in urna. Nam mauris arcu, feugiat in finibus vitae, sollicitudin id
          purus. Ut imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.
        </p>
        <button>About Us</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.about-us {
  margin-top: 2px;
  padding: 40px 20px;
  position: relative;
  text-align: center;
  overflow: hidden;

  @include respond-to($breakpoint-lg) {
    padding: 168px 0;
    text-align: left;
  }

  .content {
    @include respond-to($breakpoint-lg) {
      margin-left: 50%;
      padding-left: 70px;
    }
  }
  .image {
    display: none;
    @include respond-to($breakpoint-lg) {
      width: 50%;
      height: 100%;
      display: inline-block;
      max-width: 1800px; // for widescreen but limit in ultrawide
      margin-left: auto;
      left: 50%;
      transform: translateX(-100%);
    }
    background: var(--color-body);
    position: absolute;
    left: 0;
    top: 0;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
