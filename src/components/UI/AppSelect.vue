<template>
  <VueMultiselect
    v-model="selectedValue"
    :options="selectOptions"
  >
  </VueMultiselect>
</template>

<script>
import VueMultiselect from 'vue-multiselect'

export default {
  name: 'AppSelect',
  components: {
    VueMultiselect
  },
  props: {
    modelValue: {
      type: String,
      default: null
    },
    selectOptions: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    selectedValue: {
      get () {
        return this.modelValue
      },
      set (newValue) {
        this.$emit('update:modelValue', newValue)
      }
    }
  }
}
</script>

<style lang="scss">
.multiselect {
  height: 41px;

  &__tags {
    min-height: 41px;
    padding: 10px 40px 0 10px;
  }

  &__placeholder, &__input {
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.025em;
    color: $grey-21;
  }

  &__input {
    padding: 0;
  }

  &__single {
    padding-left: 0;
  }

  &__option--highlight {
    background: $green-44;
  }

  &__option--highlight::after {
    background: $green-44;
  }
}
</style>
