<script setup>
import { ref } from 'vue'
import SocialNetworks from '@/components/SocialNetworks.vue'
import Logo from '@/components/icons/Logo.vue'
import Ham from '@/components/icons/Ham.vue'
import Menu from '@/components/Menu.vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <header>
    <nav class="header-container container">
      <Ham @click="toggleMenu" :menuOpen="menuOpen"></Ham>
      <SocialNetworks class="hide show-md header-social"></SocialNetworks>

      <Menu :menuOpen="menuOpen" :toggleMenu="toggleMenu" />
      <Logo />
    </nav>
    <div v-if="menuOpen" class="menu-overlay" @click="toggleMenu"></div>
  </header>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

header {
  position: absolute;
  z-index: 2;
  width: 100%;
  text-align: center;

  .header-container {
    padding: 14px 0;

    @include respond-to($breakpoint-lg) {
      padding: 30px 0;
    }
    border-bottom: 1px solid var(--line);
  }
}

nav {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.5rem 1rem;
  @include respond-to($breakpoint-lg) {
    justify-content: space-between;
  }
}

.header-social {
  margin-left: auto;
  @include respond-to($breakpoint-lg) {
    margin-left: 14px;
  }
}

.logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
</style>
