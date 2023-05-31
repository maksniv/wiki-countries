<template>
  <TheHeader></TheHeader>
  <router-link class="header__link" to="/">Where is the world?</router-link>
  <router-link class="header__link" to="/about">Where is the world? 2</router-link>
  <router-view />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'App',
  components: { TheHeader },
};
</script>

<style lang="scss">
</style>
