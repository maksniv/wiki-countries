<template>
  <span
    class="card__span-border"
    @click="$router.push(`/country/${codeBorderCountry}`)"
    >{{ commonNameBorderCountry }}
  </span>
</template>

<script>
export default {
  name: 'TheBorderCountry',
  data() {
    return {
      commonNameBorderCountry: '',
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
          `https://restcountries.com/v3.1/alpha/${code}?fields=name`
        );
        const response = await request.json();
        this.commonNameBorderCountry = response.name.common;
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
  max-height: 28px;
  box-shadow: 0px 0px 10px -5px var(--fontColor);
  padding: 0rem 1.5rem;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.15s ease-in;
  &:hover {
    transform: scale(1.05);
  }
}
</style>
