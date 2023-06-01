<template>
  <form class="form">
    <input
      v-model="searchValue"
      class="form__input"
      type="text"
      placeholder="Search for a country..."
    />
    <select class="form__select">
      <option disabled value="">Filter by Region</option>
      <option>Africa</option>
      <option>America</option>
      <option>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </select>
  </form>
</template>

<script>
export default {
  name: 'TheForm',
  data() {
    return {
      searchValue: '',
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';
@import 'vue-select/dist/vue-select.css';

.form {
  color: $VeryDarkBlueText;
  width: 100%;
  max-width: 1440px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  .form__input {
    width: 100%;
    max-width: 480px;
    height: 60px;

    padding: 0.75rem 2.75rem 0.75rem 4.75rem;

    font-size: 14px;

    border-radius: 0.4rem;
    background-color: $whiteElements;
    box-shadow: 0px 0px 10px -5px $VeryDarkBlueText;
  }
  .form__select {
    width: 100%;
    height: 60px;
    max-width: 210px;

    padding: 1rem 1rem 1rem 1rem;

    border-radius: 0.4rem;
    background-color: $whiteElements;
    box-shadow: 0px 0px 10px -5px $VeryDarkBlueText;
  }
}
</style>
