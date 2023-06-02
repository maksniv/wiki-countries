<template>
  <main class="main">
    <TheForm
      :optionValue="selectedSort"
      :options="sortOptions"
      @updateOptionValue="updateOptionValue"
      :searchValue="searchValue"
      @updateSearchValue="updateSearchValue"
    ></TheForm>
    <div v-if="!isCountriesLoading" class="card__wrapper">
      <TheCard
        v-for="country in searchCountries"
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
// import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components: { TheForm, TheCard, TheLoader },
  data() {
    return {
      dataCountries: '',
      isCountriesLoading: false,
      selectedSort: '',
      sortOptions: [
        { value: 'Africa', name: 'Africa' },
        { value: 'Americas', name: 'America' },
        { value: 'Asia', name: 'Asia' },
        { value: 'Europe', name: 'Europe' },
        { value: 'Oceania', name: 'Oceania' },
      ],
      searchValue: '',
    };
  },
  methods: {
    // ...mapActions({
    //   getDataCountries: 'getDataCountries',
    // }),
    async getDataCountries() {
      this.isCountriesLoading = true;
      try {
        const request = await fetch(`https://restcountries.com/v3.1/all`);
        const response = await request.json();
        this.dataCountries = response;
      } catch (error) {
        console.error(error);
      } finally {
        this.isCountriesLoading = false;
      }
    },
    updateOptionValue(value) {
      this.selectedSort = value;
    },
    updateSearchValue(value) {
      this.searchValue = value;
    },
  },
  mounted() {
    this.getDataCountries();
    // this.$store.dispatch('getDataCountries');
  },
  computed: {
    sortedCountries() {
      if (this.selectedSort === '') return this.dataCountries;
      return [...this.dataCountries].filter(
        (country) => country.region === this.selectedSort
      );
    },
    searchCountries() {
      if (this.searchValue === '') return this.sortedCountries;
      return this.sortedCountries.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(this.searchValue.toLowerCase())
      );
    },
    // ...mapState({
    //   dataCountries: (state) => state.state.dataCountries,
    //   // isCountriesLoading: (state) => state.state.isLoading,
    //   selectedSort: (state) => state.state.selectedSort,
    //   sortOptions: (state) => state.state.sortOptions,
    //   searchValue: (state) => state.state.searchCountry,
    // }),
    // ...mapGetters({
    //   sortedCountries: 'sortedCountries',
    //   searchCountries: 'searchCountries',
    // }),
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
