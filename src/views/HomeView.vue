<template>
  <main class="main">
    <TheForm></TheForm>
    <div v-if="!isCountriesLoading" class="card__wrapper">
      <TheCard
        v-for="country in dataCountries"
        :key="country.name.official"
        :country="country"
      />
    </div>
    <TheLoader v-else></TheLoader>
  </main>
</template>

<script>
import TheForm from '@/components/TheForm.vue';
import TheCard from '@/components/TheCard.vue';
import TheLoader from '@/components/TheLoader.vue';

export default {
  name: 'HomeView',
  components: { TheForm, TheCard, TheLoader },
  data() {
    return {
      dataCountries: '',
      isCountriesLoading: false,
    };
  },
  methods: {
    async getDataCountries() {
      this.isCountriesLoading = true;
      try {
        const request = await fetch(`https://restcountries.com/v3.1/all`);
        const response = await request.json();
        console.log(response);
        this.dataCountries = response;
      } catch (error) {
        console.error(error);
      } finally {
        this.isCountriesLoading = false;
      }
    },
  },
  mounted() {
    this.getDataCountries();
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.main {
  color: $VeryDarkBlueText;
  padding: 3% 5.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .card__wrapper {
    padding: 2.5rem 0px;
    width: 100%;
    max-width: 1440px;
    height: 100%;

    display: grid;
    gap: 4rem;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
