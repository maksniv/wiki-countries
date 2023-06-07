<template>
  <form class="form" @submit.prevent>
    <div class="form__input-wrapper">
      <v-icon name="hi-solid-search" class="form__input-icon" />
      <input
        class="form__input"
        :value="searchValue"
        @input="changeInput"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
    <div class="form__select-wrapper">
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
    changeInput(event = '') {
      this.$emit('updateSearchValue', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  color: var(--fontColor);
  width: 100%;
  max-width: 1440px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .form__input-wrapper {
    width: 100%;
    max-width: 480px;
    position: relative;
    .form__input-icon {
      width: 20px;
      height: 20px;
      position: absolute;
      top: calc(51% - 10px);
      left: calc(10% - 10px);
      cursor: text;
    }
    .form__input {
      width: 100%;
      height: 60px;

      padding: 0.75rem 2.75rem 0.75rem 4.75rem;

      font-size: 14px;

      border-radius: 0.4rem;
      background-color: var(--elementsColor);
      box-shadow: 0px 0px 10px -5px var(--fontColor);
    }
  }
  .form__select-wrapper {
    position: relative;
    width: 100%;
    max-width: 210px;
    .form__select {
      width: 100%;
      height: 60px;

      padding: 1rem 1rem 1rem 1rem;

      border-radius: 0.4rem;
      background-color: var(--elementsColor);
      box-shadow: 0px 0px 10px -5px var(--fontColor);
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
/* xs (<=543px) */
@media (max-width: 575px) {
  .form {
    .form__select-wrapper {
      margin-top: 2.5rem;
    }
  }
}

/* sm (>=576 и <=767) */
@media (min-width: 576px) and (max-width: 768px) {
  .form {
    .form__select-wrapper {
      margin-top: 2.5rem;
    }
  }
}

/* md (>=768 и <=991) */
@media (min-width: 768px) and (max-width: 991px) {
}

/* lg (>=992 и <=1199) */
@media (min-width: 992px) and (max-width: 1199px) {
}

/* xl (>=1200) */
@media (min-width: 1200px) {
}
</style>
