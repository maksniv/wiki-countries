<template>
  <div class="card">
    <img
      class="card__flag"
      :src="dataCountry.flags?.svg"
      :alt="dataCountry.flags?.alt"
    />
    <div class="card__description">
      <div class="card__title">{{ $route.params.name }}</div>
      <div class="card__container">
        <div class="card__column">
          <div class="card__native-name">
            <span class="card__span">Native Name: </span>
            <span v-for="name in dataCountry.name?.nativeName" :key="name">
              {{ ' ' + name.official }}
            </span>
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
            <span v-for="currency in dataCountry.currencies" :key="currency">
              {{ currency.name + ' ' }}
            </span>
          </div>
          <div class="card__languages">
            <span class="card__span">Languages: </span>
            <span v-for="language in dataCountry.languages" :key="language">
              {{ language + ', ' }}
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
</template>
<script>
export default {
  name: 'TheCardAbout',
  data() {
    return {};
  },
  props: {
    dataCountry: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.card {
  display: grid;
  gap: 10rem;
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
      margin-top: 1rem;
    }
    .card__container {
      display: grid;
      gap: 5rem;
      grid-template-columns: repeat(2, 1fr);
      margin-top: 0.9rem;
    }
    .card__border-countries {
      margin-top: 4.1rem;
      display: flex;
      flex-wrap: wrap;

      .card__span-border {
        font-size: 12px;
        box-shadow: 0px 0px 10px -5px $VeryDarkBlueText;
        padding: 0rem 1em;
        margin: 0.5rem;
      }
    }
    .card__span {
      font-weight: 600;
    }
  }
}
</style>
