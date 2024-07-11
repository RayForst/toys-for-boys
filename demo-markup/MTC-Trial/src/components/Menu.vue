<script setup>
const { menuOpen, toggleMenu } = defineProps({
  menuOpen: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <ul :class="['menu', { 'menu--open': menuOpen }]">
    <li class="menu-item caption">
      <a class="menu-link" href="#home">Shop</a>
    </li>
    <li class="menu-item caption">
      <a class="menu-link" href="#about">Plan My Kitchen</a>
    </li>
    <li class="menu-item caption">
      <a class="menu-link" href="#services">About Us</a>
    </li>
    <li class="menu-item caption">
      <a class="menu-link" href="#contact">Gallery</a>
    </li>
    <li class="menu-item caption">
      <a class="menu-link-cart button button--secondary button--small" href="#cart">
        My order
        <font-awesome-icon :icon="['fas', 'shopping-cart']"></font-awesome-icon>
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.menu {
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 0;
  flex: 1;
  justify-content: space-between;
  margin-right: 0;
  position: fixed;
  top: 0;
  left: -100%;
  height: 100%;
  width: 250px;
  background-color: var(--color-title);
  transition: left 0.3s ease;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  list-style: none;
  padding: 100px var(--gutter) 0 var(--gutter);
  margin: 0;
  flex: 1;
  margin-right: 0;
  margin-left: 0;

  @include respond-to($breakpoint-lg) {
    display: flex;
    position: static;
    background-color: transparent;
    flex-direction: row;
    width: auto;
    height: auto;
    left: auto;
    transition: none;
    padding: 0;
    align-items: center;
    margin-left: 115px;
  }

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  &.menu--open {
    left: 0;
  }

  // split menu 2 by 2. We should not create extra html if we don't need it
  // So I keep html clean and simple
  .menu-item {
    &:nth-child(2) {
      margin-right: auto;
    }
  }

  .menu-link-cart {
    margin-top: var(--gutter);
    @include respond-to($breakpoint-lg) {
      margin-top: 0;
      margin-left: 52px;
    }
  }
}

.menu-item {
  margin: 0;
}

.menu-link {
  color: var(--color-white);
  padding: 0.5rem 14px;
  display: block;
}

.caption {
  font-size: 0.8125rem;
}
</style>
