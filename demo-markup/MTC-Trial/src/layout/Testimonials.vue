<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver.js'

const { element, isIntersecting } = useIntersectionObserver()
const modules = [Navigation]
</script>

<template>
  <section class="testimonials">
    <div class="container">
      <div
        ref="element"
        :class="[
          'testimonials-content',
          'animated-box',
          'animate__animated',
          { animate__fadeInUp: isIntersecting }
        ]"
      >
        <span class="caption color-accent testimonials-container">What Our Customers Say</span>
        <h3 class="testimonials-container">Over 35 years experience designing handmade kitchens</h3>

        <swiper :navigation="true" :modules="modules" class="custom-swiper">
          <swiper-slide class="testimonials-container">
            <blockquote>
              <p>
                Since my first contact I have received a very high level of customer service and
                advice with my kitchen plans. Ben responded very quickly to all of my emails and
                delivery of the kitchen was as planned.
              </p>
              <cite>John, Dundee</cite>
            </blockquote>
          </swiper-slide>
          <swiper-slide class="testimonials-container">
            <blockquote>
              <p>
                Since my first contact I have received a very high level of customer service and
                advice with my kitchen plans. Ben responded very quickly to all of my emails and
                delivery of the kitchen was as planned.
              </p>
              <cite>John, Dundee</cite>
            </blockquote>
          </swiper-slide>
          <swiper-slide class="testimonials-container">
            <blockquote>
              <p>
                Since my first contact I have received a very high level of customer service and
                advice with my kitchen plans. Ben responded very quickly to all of my emails and
                delivery of the kitchen was as planned.
              </p>
              <cite>John, Dundee</cite>
            </blockquote>
          </swiper-slide>
        </swiper>

        <button>Frequently Asked Questions</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.testimonials {
  background: #eeeeee;
  margin-top: 2px;
  padding: 40px 0 40px 0;
  text-align: center;
  overflow: hidden;

  @include respond-to($breakpoint-lg) {
    padding: 117px 0;
  }

  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    --swiper-navigation-sides-offset: -10px;
    @include respond-to($breakpoint-lg) {
      --swiper-navigation-sides-offset: 0;
    }
  }

  .testimonials-container {
    padding: 0 30px;

    @include respond-to($breakpoint-lg) {
      padding: 0 240px;
    }

    &.swiper-slide {
      padding: 0 40px;

      @include respond-to($breakpoint-lg) {
        padding: 0 240px;
      }
    }
  }

  .testimonials-content {
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;

    @include respond-to($breakpoint-lg) {
      width: 1080px;
      padding: 0;
    }

    :deep(blockquote) {
      margin-left: 0;
      margin-right: 0;
    }
  }
}
</style>
