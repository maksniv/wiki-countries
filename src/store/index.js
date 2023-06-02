import { createStore } from 'vuex';

export default createStore({
  state: () => ({
    dataCountries: '',
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
    sortedCountries(state) {
      if (state.selectedSort === '') return state.dataCountries;
      return [...state.dataCountries].filter(
        (country) => country.region === state.selectedSort
      );
    },
    searchCountries(state, getters) {
      if (state.searchCountry === '') return state.sortedCountries;
      return getters.sortedCountries.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(state.searchCountry.toLowerCase())
      );
    },
  },
  mutations: {
    setDataCountries(state, dataCountries) {
      state.dataCountries = dataCountries;
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
        console.log(response);
        commit('setDataCountries', response);
      } catch (error) {
        console.error(error);
      } finally {
        commit('setIsLoading', false);
      }
    },
  },
});
