<template>
  <div class="card">
    <img
      class="card__flag"
      :src="dataCountry.flags?.svg"
      :alt="dataCountry.flags?.alt"
    />
    <div class="card__description">
      <div class="card__title">{{ dataCountry.name?.official }}</div>
      <div class="card__container">
        <div class="card__column">
          <div class="card__native-name" v-if="dataCountry.name?.nativeName">
            <span class="card__span">Native Name: </span>
            <span v-for="name in dataCountry.name?.nativeName" :key="name">
              {{ name.official + '; ' }}
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
          <div class="card__sub-region" v-if="dataCountry.subregion">
            <span class="card__span">Sub Region: </span
            >{{ dataCountry.subregion }}
          </div>
          <div class="card__capital" v-if="dataCountry.capital">
            <span class="card__span">Capital: </span>
            {{ dataCountry.capital[0] }}
          </div>
        </div>
        <div class="card__column">
          <div class="card__top-Level-domain" v-if="dataCountry.tld">
            <span class="card__span">Top Level Domain: </span>
            <span v-for="tld in dataCountry.tld" :key="tld">
              {{ tld + ' ' }}
            </span>
          </div>
          <div class="card__currencies" v-if="dataCountry.currencies">
            <span class="card__span">Currencies: </span>
            <span v-for="currency in dataCountry.currencies" :key="currency">
              {{ currency.name + ' ' }}
            </span>
          </div>
          <div class="card__languages" v-if="dataCountry.languages">
            <span class="card__span">Languages: </span>
            <span v-for="language in dataCountry.languages" :key="language">
              {{ language + '; ' }}
            </span>
          </div>
        </div>
      </div>
      <div class="card__border-countries">
        <span class="card__span">Border Countries: </span>
        <span v-if="!dataCountry.borders">No border country</span>
        <TheBorderCountry
          v-else
          v-for="codeBorderCountry in dataCountry.borders"
          :key="codeBorderCountry"
          :codeBorderCountry="codeBorderCountry"
        ></TheBorderCountry>
      </div>
    </div>
  </div>
</template>
<script>
import TheBorderCountry from '@/components/TheBorderCountry.vue';

export default {
  name: 'TheCardAbout',
  components: { TheBorderCountry },
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
.card {
  display: grid;
  gap: 7rem;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;

  .card__flag {
    display: block;

    width: 100%;
    height: 400px;

    object-fit: cover;
    object-position: center center;

    box-shadow: 0px 0px 10px -5px var(--fontColor);
  }
  .card__description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 2;
    .card__title {
      font-size: 32px;
      font-weight: 800;
      margin-top: 1.6rem;
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
      gap: 0.7rem;
    }
    .card__span {
      font-weight: 600;
    }
  }
}
/* xs (<=543px) */
@media (max-width: 575px) {
  .card {
    gap: 1rem;
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 3rem;
    .card__flag {
      height: 200px;
    }
    .card__description {
      .card__title {
        margin-top: 1rem;
        margin-bottom: 1rem;
        line-height: 1.5;
      }
      .card__container {
        gap: 2rem;
        grid-template-columns: repeat(1, 1fr);
        margin-top: 0rem;
      }
      .card__border-countries {
        margin-top: 2rem;
      }
    }
  }
}

/* sm (>=576 и <=767) */
@media (min-width: 576px) and (max-width: 767px) {
  .card {
    gap: 1rem;
    grid-template-columns: repeat(1, 1fr);
    .card__flag {
      height: 300px;
    }
    .card__description {
      .card__title {
        margin-top: 1rem;
        margin-bottom: 1rem;
        line-height: 1.5;
      }
      .card__container {
        gap: 2rem;
        grid-template-columns: repeat(1, 1fr);
        margin-top: 0rem;
      }
      .card__border-countries {
        margin-top: 2rem;
      }
    }
  }
}

/* md (>=768 и <=991) */
@media (min-width: 768px) and (max-width: 991px) {
  .card {
    gap: 1rem;
    grid-template-columns: repeat(1, 1fr);
    .card__flag {
      height: 350px;
    }
    .card__description {
      .card__title {
        margin-top: 1rem;
        margin-bottom: 1rem;
        line-height: 1.5;
      }
      .card__container {
        gap: 2rem;
        grid-template-columns: repeat(1, 1fr);
        margin-top: 0rem;
      }
      .card__border-countries {
        margin-top: 2rem;
      }
    }
  }
}

/* lg (>=992 и <=1199) */
@media (min-width: 992px) and (max-width: 1199px) {
}

/* xl (>=1200) */
@media (min-width: 1200px) {
}
</style>
