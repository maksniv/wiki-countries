<template>
  <header class="header">
    <div class="header__title">
      <router-link class="header__link" to="/">Where is the world?</router-link>
    </div>
    <div class="header__button-switch-color">
      <svg
        class="button-switch-color__svg"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        height="14px"
        width="14px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
        ></path>
      </svg>
      <span class="button-switch-color__span">Light mode</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.header {
  color: $VeryDarkBlueText;
}
</style>
