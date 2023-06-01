<template>
  <main class="main">
    <div class="card__wrapper" v-if="!isCountryLoading">
      <button class="card__button" @click="$router.push('/')">Back</button>
      <div class="card">
        <img class="card__flag" />
        <div class="card__description">
          <div class="card__title">{{ $route.params.name }}</div>
          <div class="card__container">
            <div class="card__column">
              <div class="card__native-name">
                <span class="card__span">Native name: </span>
                {{ dataCountry.subregion }}
              </div>
              <div class="card__population">
                <span class="card__span">Population: </span>
                {{ dataCountry.population }}
              </div>
              <div class="card__region">
                <span class="card__span">Region: </span>
                {{ dataCountry.region }}
              </div>
              <div class="card__sub-region">
                <span class="card__span">Sub Region: </span
                >{{ dataCountry.subregion }}
              </div>
              <div class="card__capital" v-if="dataCountry.capital">
                <span class="card__span">Capital: </span>
                {{ dataCountry.capital[0] }}
              </div>
            </div>
            <div class="card__column">
              <div class="card__top-Level-domain">
                <span class="card__span">Top Level Domain: </span>
                <span v-for="tld in dataCountry.tld" :key="tld">
                  {{ tld + ' ' }}
                </span>
              </div>
              <div class="card__currencies:">
                <span class="card__span">Currencies: </span>
                {{ dataCountry.currencies }}
              </div>
              <div class="card__languages">
                <span class="card__span">Languages: </span>
                <span v-for="language in dataCountry.languages" :key="language">
                  {{ language + ' ' }}
                </span>
              </div>
            </div>
          </div>
          <div class="card__border-countries">
            <span class="card__span">Border Countries: </span>
            <span
              class="card__span-border"
              v-for="country in dataCountry.borders"
              :key="country"
            >
              {{ country }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <TheLoader v-else></TheLoader>
  </main>
</template>

<script>
import TheLoader from '@/components/TheLoader.vue';

export default {
  name: 'AboutView',
  components: { TheLoader },
  data() {
    return {
      isCountryLoading: false,
      dataCountry: '',
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
@import '@/assets/styles/variables.scss';
.main {
  color: $VeryDarkBlueText;
  background-color: $whiteElements;
  padding: 5% 5.5%;
  .card__wrapper {
    display: flex;
    flex-direction: column;
    .card__button {
      align-self: flex-start;
      width: 100%;
      max-width: 140px;
      height: 40px;

      padding: 0.75rem 2.75rem 0.75rem 4.75rem;

      font-size: 14px;

      border-radius: 0.4rem;
      background-color: $whiteElements;
      box-shadow: 0px 0px 10px -5px $VeryDarkBlueText;
    }
    .card {
      display: grid;
      gap: 8rem;
      grid-template-columns: repeat(2, 1fr);

      min-width: 100%;
      max-width: 1440px;
      .card__flag {
        display: block;

        width: 100%;
        height: 400px;

        object-fit: cover;
        object-position: center center;

        box-shadow: 0px 0px 10px -5px $VeryDarkBlueText;
      }
      .card__description {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        line-height: 2;
        .card__title {
          font-size: 31px;
          font-weight: 800;
          margin-top: 1.9rem;
        }
        .card__container {
          display: grid;
          gap: 13.3rem;
          grid-template-columns: repeat(2, 1fr);
          margin-top: 0.9rem;
        }
        .card__border-countries {
          margin-top: 4.1rem;
        }
        .card__span {
          font-weight: 600;
        }
        .card__span-border {
          box-shadow: 0px 0px 10px -5px $VeryDarkBlueText;
          padding: 0rem 1em;
          margin: 0.5rem;
        }
      }
    }
  }
}
</style>
