<template>
  <div class="app-input-field">
    <Field
      v-model="fieldValue"
      class="app-input-field__input"
      :type="fieldType"
      :name="fieldName"
      :placeholder="fieldPlaceholder"
      :rules="fieldRules"
      :validate-on-input="validateOnInput"
    />

    <ErrorMessage
      class="app-input-field__error-massage"
      :name="fieldName"
    />
  </div>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate'

export default {
  name: 'AppInputField',
  components: {
    Field,
    ErrorMessage
  },
  props: {
    modelValue: {
      type: String,
      default: null
    },
    fieldType: {
      type: String,
      default: 'text'
    },
    fieldName: {
      type: String,
      required: true
    },
    fieldPlaceholder: {
      type: String,
      default: null
    },
    fieldRules: {
      type: String,
      default: null
    },
    validateOnInput: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    fieldValue: {
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

<style lang="scss" scoped>
.app-input-field {
  display: flex;
  align-items: center;
  width: 100%;
  height: 41px;
  background: $white;
  border-radius: 5px;
  position: relative;

  &__input {
    width: 100%;
    background: transparent;
    color: $grey-21;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.025em;
    padding-left: 10px;

    &::placeholder {
      color: $grey-21;
    }
  }

  &__error-massage {
    position: absolute;
    top: 41px;
    left: 10px;
    color: red;
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
  }
}
</style>
