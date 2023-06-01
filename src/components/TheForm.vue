<template>
  <form class="form" @submit.prevent>
    <input
      :value="searchValue"
      @input="changeInput"
      class="form__input"
      type="text"
      placeholder="Search for a country..."
    />
    <div class="form__wrapper">
      <select class="form__select" :value="optionValue" @change="changeOption">
        <option disabled value="">Filter by Region</option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.name }}
        </option>
      </select>
      <button class="form__select-button" @click="changeOption">
        &#10006;
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'TheForm',
  props: {
    optionValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
    searchValue: {
      type: String,
    },
  },
  methods: {
    changeOption(event = '') {
      this.$emit('updateOptionValue', event.target.value);
    },
    changeInput(event) {
      this.$emit('updateSearchValue', event.target.value);
    },
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
  .form__wrapper {
    position: relative;
    width: 100%;
    max-width: 210px;
    .form__select {
      width: 100%;
      height: 60px;

      padding: 1rem 1rem 1rem 1rem;

      border-radius: 0.4rem;
      background-color: $whiteElements;
      box-shadow: 0px 0px 10px -5px $VeryDarkBlueText;
    }
    .form__select-button {
      position: absolute;
      color: tomato;
      font-size: 11px;
      z-index: 1;
      top: 22px;
      right: 40px;
      width: 5px;
      height: 5px;
    }
  }
}
</style>
