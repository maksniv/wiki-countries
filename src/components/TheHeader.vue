<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__title">
        <router-link class="header__link" to="/"
          >Where in the world?</router-link
        >
      </div>
      <div class="header__button-switch-color" @click="toggleTheme">
        <v-icon name="md-darkmode-outlined" v-if="theme === 'light'" />
        <v-icon name="md-darkmode" v-else />
        <span class="button-switch-color__span">{{ theme }} Mode</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      theme: 'dark',
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    },
  },
  watch: {
    theme() {
      document.body.setAttribute('data-theme', this.theme);
    },
  },
  mounted() {
    this.toggleTheme();
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 5rem;
  padding: 0rem 5rem;

  color: var(--fontColor);
  background-color: var(--elementsColor);
  box-shadow: 0px 0px 10px -5px var(--fontColor);

  display: flex;
  justify-content: center;
  align-items: center;
  .header__wrapper {
    max-width: 1440px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    .header__title {
      font-size: 25px;
      font-weight: 800;
    }
    .header__button-switch-color {
      display: flex;
      gap: 0.5rem;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s ease-in;
      &:hover {
        transform: scale(1.02);
      }
      .button-switch-color__span {
        text-transform: capitalize;
      }
    }
  }
}
/* xs (<=543px) */
@media (max-width: 575px) {
  .header {
    padding: 0rem 2rem;
    .header__wrapper {
      .header__title {
        font-size: 15px;
        font-weight: 800;
      }
      .header__button-switch-color {
        display: flex;
        font-size: 14px;
        font-weight: 600;
        .button-switch-color__span {
          margin-left: 8px;
        }
      }
    }
  }
}

/* sm (>=576 и <=767) */
@media (min-width: 576px) and (max-width: 767px) {
}

/* md (>=768 и <=991) */
@media (min-width: 768px) and (max-width: 991px) {
}

/* lg (>=992 и <=1199) */
@media (min-width: 992px) and (max-width: 1199px) {
}

/* xl (>=1200) */
@media (min-width: 1200px) {
}
</style>
