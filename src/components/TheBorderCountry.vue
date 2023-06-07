<template>
  <span
    class="card__span-border"
    @click="$router.push(`/country/${nameBorderCountry}`)"
    >{{ nameBorderCountry }}
  </span>
</template>

<script>
export default {
  name: 'TheBorderCountry',
  data() {
    return {
      nameBorderCountry: '',
    };
  },
  props: {
    codeBorderCountry: {
      type: String,
    },
  },
  methods: {
    async getBorderCountry(code) {
      try {
        const request = await fetch(
          `https://restcountries.com/v3.1/alpha/${code}`
        );
        const response = await request.json();
        this.nameBorderCountry = response[0].name.common;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getBorderCountry(this.codeBorderCountry);
  },
};
</script>

<style lang="scss" scoped>
.card__span-border {
  font-size: 14px;
  box-shadow: 0px 0px 10px -5px var(--fontColor);
  padding: 0.5rem 1rem;
}
</style>
