<template>
  <main class="main">
    <div class="card__wrapper" v-if="!isCountryLoading">
      <div class="card__button_wrapper" @click="$router.go(-1)">
        <v-icon name="co-arrow-left" class="card__button_icon" />
        <button class="card__button">Back</button>
      </div>
      <TheCardAbout :dataCountry="dataCountry"></TheCardAbout>
    </div>
    <TheLoader v-else></TheLoader>
  </main>
</template>

<script>
import TheLoader from '@/components/TheLoader.vue';
import TheCardAbout from '@/components/TheCardAbout.vue';

export default {
  name: 'AboutView',
  components: { TheLoader, TheCardAbout },
  data() {
    return {
      isCountryLoading: false,
      dataCountry: [],
    };
  },
  methods: {
    async getDataCountry(countryName) {
      this.isCountryLoading = true;
      try {
        const request = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        const response = await request.json();
        this.dataCountry = response[0];
      } catch (error) {
        console.error(error);
      } finally {
        this.isCountryLoading = false;
      }
    },
  },
  mounted() {
    this.getDataCountry(this.$route.params.name);
  },
  watch: {
    $route() {
      this.getDataCountry(this.$route.params.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--fontColor);
  background-color: var(--backgroundColor);
  min-height: calc(100vh - 5rem);
  padding: 5rem 5rem;
  .card__wrapper {
    max-width: 1440px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    .card__button_wrapper {
      align-self: flex-start;
      position: relative;
      width: 100%;
      max-width: 140px;
      transition: all 0.2s ease-in;
      &:hover {
        transform: scale(1.05);
      }
      .card__button_icon {
        width: 25px;
        height: 25px;
        position: absolute;
        top: calc(48% - 12px);
        left: calc(25% - 12px);
      }
      .card__button {
        width: 100%;
        height: 40px;

        padding: 0.6rem 1rem 0.75rem 1.8rem;

        font-size: 15px;
        font-weight: 600;

        border-radius: 0.4rem;
        background-color: var(--elementsColor);
        box-shadow: 0px 0px 10px -5px var(--fontColor);
      }
    }
  }
}
/* xs (<=543px) */
@media (max-width: 575px) {
  .main {
    padding: 2rem 2rem;
    .card__wrapper {
      gap: 4rem;
      .card__button {
        font-size: 15px;
        font-weight: 600;
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
