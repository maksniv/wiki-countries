<template>
  <main class="main">
    <TheForm
      :optionValue="getSelectedSortInputValue"
      :options="getSortOptions"
      @updateOptionValue="updateOptionValue"
      :searchValue="getSearchCountryInputValue"
      @updateSearchValue="updateSearchValue"
    ></TheForm>
    <div v-show="!getLoadingStatus" class="card__wrapper">
      <TheCard
        v-for="country in searchCountries"
        :key="country.name.official"
        :country="country"
      />
    </div>
    <TheLoader v-show="getLoadingStatus"></TheLoader>
  </main>
</template>

<script>
import TheForm from '@/components/TheForm.vue';
import TheCard from '@/components/TheCard.vue';
import TheLoader from '@/components/TheLoader.vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'HomeView',
  components: { TheForm, TheCard, TheLoader },
  data() {
    return {};
  },
  methods: {
    ...mapActions(['getDataCountries']),
    ...mapMutations(['setSelectedSort', 'setSearchCountry']),

    updateOptionValue(value) {
      this.setSelectedSort(value);
    },
    updateSearchValue(value) {
      this.setSearchCountry(value);
    },
  },
  mounted() {
    this.getDataCountries();
  },
  computed: {
    ...mapGetters([
      'getSortOptions',
      'searchCountries',
      'getLoadingStatus',
      'getSearchCountryInputValue',
      'getSelectedSortInputValue',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.main {
  color: var(--fontColor);
  background-color: var(--backgroundColor);
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
      gap: 3rem;
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
