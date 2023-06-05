<template>
  <main class="main">
    <div class="card__wrapper" v-if="!isCountryLoading">
      <div class="card__button_wrapper">
        <v-icon name="co-arrow-left" class="card__button_icon" />
        <button class="card__button" @click="$router.push('/')">Back</button>
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
      dataCountry: {},
    };
  },
  methods: {
    async getDataCountry() {
      this.isCountryLoading = true;
      try {
        const request = await fetch(
          `https://restcountries.com/v3.1/name/${this.$route.params.name}`
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
    this.getDataCountry();
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
  padding: 2.5rem 5rem;
  .card__wrapper {
    max-width: 1440px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .card__button_wrapper {
      align-self: flex-start;
      position: relative;
      width: 100%;
      max-width: 140px;
      .card__button_icon {
        width: 20px;
        height: 20px;
        position: absolute;
        top: calc(50% - 10px);
        left: calc(28% - 10px);
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
    padding: 1rem 2rem;
    .card__wrapper {
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
