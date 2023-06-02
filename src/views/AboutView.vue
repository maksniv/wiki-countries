<template>
  <main class="main">
    <div class="card__wrapper" v-if="!isCountryLoading">
      <button class="card__button" @click="$router.push('/')">Back</button>
      <TheCardAbout :dataCountry="dataCountry"></TheCardAbout>
    </div>
    <TheLoader v-else></TheLoader>
  </main>
</template>

<script>
import TheLoader from '@/components/TheLoader.vue';
import TheCardAbout from '@/components/TheCardAbout.vue';

export default {
  name: 'AboutView',
  components: { TheLoader, TheCardAbout },
  data() {
    return {
      isCountryLoading: false,
      dataCountry: {},
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
      position: relative;
      width: 100%;
      max-width: 140px;
      height: 40px;

      padding: 0.75rem 2.75rem 0.75rem 4.75rem;

      font-size: 14px;

      border-radius: 0.4rem;
      background-color: $whiteElements;
      box-shadow: 0px 0px 10px -5px $VeryDarkBlueText;
      &::after {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        background-image: url('@/assets/img/arrow-back.svg');
        background-size: cover;
        position: absolute;
        top: calc(52% - 10px);
        left: calc(20% - 10px);
      }
    }
  }
}
</style>
