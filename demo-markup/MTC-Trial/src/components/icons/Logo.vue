<script setup>
import logo2x from '@/assets/Logo@2x.png'

const srcset = `${logo2x} 2x`
</script>

<template>
  <a class="logo" href="/">
    <img src="@/assets/Logo.png" :srcset="srcset" alt="logo" width="84" height="33" />
  </a>
</template>
