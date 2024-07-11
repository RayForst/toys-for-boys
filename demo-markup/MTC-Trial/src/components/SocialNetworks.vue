<template>
  <div :class="['social', sizeClass]">
    <a
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <template v-if="size === 'large'">
        <img :src="link.img" loading="lazy" :alt="link.name" />
      </template>
      <template v-else>
        <font-awesome-icon :icon="link.icon" inverse></font-awesome-icon>
      </template>
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'regular',
    validator: (value) => ['regular', 'large'].includes(value)
  }
})

// to boring to just hardcode in template
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com',
    img: new URL('@/assets/facebook.svg', import.meta.url).href,
    icon: ['fab', 'facebook']
  },
  {
    name: 'Twitter',
    url: 'https://www.twitter.com',
    img: new URL('@/assets/twitter.svg', import.meta.url).href,
    icon: ['fab', 'twitter']
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com',
    img: new URL('@/assets/instagram.svg', import.meta.url).href,
    icon: ['fab', 'instagram']
  }
]

const sizeClass = computed(() => {
  return props.size === 'large' ? 'social--large' : 'social--regular'
})
</script>

<style scoped lang="scss">
.social {
  padding: 0 14px;
  display: flex;
  align-items: center;

  a {
    margin-right: 10px;
    text-decoration: none;

    &:last-child {
      margin: 0;
    }

    &:hover {
      svg,
      img {
        transform: scale(1.3);
      }
    }
    svg,
    img {
      display: block;
      transition: transform 0.3s ease;
    }
  }

  &--large {
    font-size: 1.25rem;
    padding: 0;

    & > a {
      margin-right: 15px;
    }
  }
}
</style>
