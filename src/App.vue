<template>
  <TheHeader></TheHeader>
  <router-link class="header__link" to="/">home </router-link>
  <router-link class="header__link" to="/about"> country</router-link>
  <router-view />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'App',
  components: { TheHeader },
};
</script>

<style lang="scss"></style>
