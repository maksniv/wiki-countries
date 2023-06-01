<template>
  <div class="card" @click="$router.push(`/country/${country.name.common}`)">
    <img class="card__flag" :src="country.flags.png" />
    <div class="card__description">
      <div class="card__title">{{ country.name.common }}</div>
      <div class="card__population">
        <span class="card__span">Population:</span> {{ country.population }}
      </div>
      <div class="card__region">
        <span class="card__span">Region:</span> {{ country.region }}
      </div>
      <div class="card__capital" v-if="country.capital">
        <span class="card__span">Capital:</span>
        {{ country.capital[0] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheCard',
  props: {
    country: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  @import '@/assets/styles/variables.scss';
  background-color: $whiteElements;
  border-radius: 0.4rem;
  box-shadow: 0px 0px 10px -5px $VeryDarkBlueText;
  cursor: pointer;
  .card__flag {
    display: block;
    width: 100%;
    height: 160px;

    border-radius: 0.4rem 0.4rem 0rem 0rem;

    object-fit: cover;
    object-position: center center;

    box-shadow: 0px 0px 10px -5px $VeryDarkBlueText;
  }
  .card__description {
    padding: 1.5rem;
    line-height: 1.5;
    .card__title {
      font-size: 18px;
      font-weight: 800;
      margin-bottom: 1rem;
    }
    .card__population {
      font-size: 15px;
    }
    .card__region {
      font-size: 15px;
    }

    .card__capital {
      font-size: 15px;
    }
    .card__span {
      font-weight: 600;
    }
  }
}
</style>
