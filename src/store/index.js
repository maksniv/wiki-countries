import { createStore } from 'vuex';

export default createStore({
  state: () => ({
    dataCountries: [],
    currentDataCountry: [],
    isLoading: false,
    selectedSort: '',
    sortOptions: [
      { value: 'Africa', name: 'Africa' },
      { value: 'Americas', name: 'America' },
      { value: 'Asia', name: 'Asia' },
      { value: 'Europe', name: 'Europe' },
      { value: 'Oceania', name: 'Oceania' },
    ],
    searchCountry: '',
  }),
  getters: {
    getDataCountries: (state) => state.dataCountries,
    getSearchCountryInputValue: (state) => state.searchCountry,
    getSelectedSortInputValue: (state) => state.selectedSort,

    getCurrentDataCountry: (state) => state.currentDataCountry,

    getLoadingStatus: (state) => state.isLoading,

    getSortOptions: (state) => state.sortOptions,
    searchCountries: (state, getters) => {
      if (state.searchCountry === '') return getters.sortedCountries;
      return getters.sortedCountries.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(state.searchCountry.toLowerCase())
      );
    },
    sortedCountries: (state) => {
      if (state.selectedSort === '') return state.dataCountries;
      return [...state.dataCountries].filter(
        (country) => country.region === state.selectedSort
      );
    },
  },
  mutations: {
    setDataCountries(state, dataCountries) {
      state.dataCountries = dataCountries;
    },
    setCurrentDataCountries(state, currentDataCountry) {
      state.currentDataCountry = currentDataCountry;
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSearchCountry(state, searchCountry) {
      state.searchCountry = searchCountry;
    },
  },
  actions: {
    async getDataCountries({ commit }) {
      try {
        commit('setIsLoading', true);
        const request = await fetch(`https://restcountries.com/v3.1/all`);
        const response = await request.json();
        commit('setDataCountries', response);
      } catch (error) {
        console.error(error);
      } finally {
        commit('setIsLoading', false);
      }
    },

    async getDataCountry({ commit }, countryCode) {
      try {
        commit('setIsLoading', true);
        const request = await fetch(
          `https://restcountries.com/v3.1/alpha/${countryCode}`
        );
        const response = await request.json();
        commit('setCurrentDataCountries', response[0]);
      } catch (error) {
        console.error(error);
      } finally {
        commit('setIsLoading', false);
      }
    },
  },
});
