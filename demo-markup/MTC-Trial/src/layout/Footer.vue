<script setup>
import SocialNetworks from '@/components/SocialNetworks.vue'
import Logo from '@/components/icons/Logo.vue'
</script>

<template>
  <footer class="footer">
    <div class="footer-logo container">
      <Logo />
    </div>
    <div class="footer-container container">
      <div class="footer-section about">
        <h4>About</h4>
        <ul>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Plan My Kitchen</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Gallery</a></li>
        </ul>
      </div>
      <div class="footer-section service">
        <h4>Service</h4>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">How to Buy</a></li>
          <li><a href="#">Downloads</a></li>
        </ul>
      </div>
      <div class="footer-section info">
        <h4>Info</h4>
        <ul>
          <li><a href="#">Delivery</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy</a></li>
        </ul>
      </div>
      <div class="footer-section follow">
        <h4>Follow</h4>
        <SocialNetworks class="footer-social" size="large"></SocialNetworks>
      </div>
    </div>
    <div class="footer-copyright container">
      <p>
        © Online MTC Home Kitchens 2018 - All rights reserved. <br />
        Responsive website design, Development & Hosting by mtc.
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.footer {
  background: var(--color-title);
  color: var(--color-white);
  padding: 40px 0 60px 0;
  text-align: left;
  background-image: url('@/assets/footer.png');
  overflow: hidden;

  &-logo {
    text-align: center;
    position: relative;

    &::before,
    &::after {
      content: '';
      width: calc(((100% / 2) - (84px / 2)) - 20px);
      height: 1px;
      background: var(--line);
      display: block;
      position: absolute;
      top: 50%;
    }

    &::after {
      right: 0;
    }
  }

  &-container {
    padding: 0 var(--gutter);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    margin-top: 42px;

    @include respond-to($breakpoint-lg) {
      flex-direction: row;
      width: 810px;
      padding: 0 50px 0 0;
    }

    h4 {
      color: var(--color-white);
    }
  }

  &-section {
    margin: 0;

    &:not(:last-child) {
      width: 220px;
    }

    &:last-child {
      flex: 1;
    }

    h4 {
      font-size: 1.125rem;
      margin-bottom: 10px;
    }
    ul {
      list-style: none;
      padding: 0;
      margin-top: 35px;

      li {
        margin: 0;
      }
      a {
        color: var(--color-white);
        text-decoration: none;
        text-transform: uppercase;
        font-size: 13px;
        line-height: 27px;
        opacity: 0.8;
        letter-spacing: 3px;
        width: 100%;
        display: block;
        margin-right: 100px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  &-copyright {
    border-bottom: 1px solid rgba(255, 255, 2555, 0.2);
    padding: 10px 0;
    text-align: center;
    font-size: 13px;
    line-height: 26px;
    padding-bottom: 59px;
    padding-top: 32px;

    p {
      font-size: inherit;
      line-height: inherit;
      margin: 0;
      color: var(--color-white);
      opacity: 0.5;
    }
  }

  &-social {
    margin-top: 38px;
  }
}
</style>
