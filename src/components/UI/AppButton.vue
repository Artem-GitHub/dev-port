<template>
  <button
    class="app-button"
    :class="{ 'app-button--small': small }"
    :type="buttonType"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    buttonType: {
      type: String,
      default: 'submit'
    },
    small: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.app-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $green-44;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: -0.025em;
  color: $white;
  padding: 10px 25px;
  border-radius: 5px;

  &--small {
    font-size: 12px;
    line-height: 17px;
    padding: 2px 10px;
  }
}
</style>
