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
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.main {
  color: $VeryDarkBlueText;
  background-color: $VeryLightGrayBackground;
  padding: 2.5rem 2.5rem;
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
/* xs (<=543px) */
@media (max-width: 575px) {
  .main {
    .card__wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}

/* sm (>=576 и <=767) */
@media (min-width: 576px) and (max-width: 768px) {
  .main {
    .card__wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

/* md (>=768 и <=991) */
@media (min-width: 768px) and (max-width: 991px) {
  .main {
    .card__wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

/* lg (>=992 и <=1199) */
@media (min-width: 992px) and (max-width: 1199px) {
  .main {
    .card__wrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

/* xl (>=1200) */
@media (min-width: 1200px) {
  .main {
    .card__wrapper {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
