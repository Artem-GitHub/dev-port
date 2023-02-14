<template>
  <div class="todos-actions-wrapper">
    <div class="todos-actions-wrapper__heading">
      <h3 class="todos-actions-wrapper__title">
        <slot name="title"/>
      </h3>
    </div>

    <div class="todos-actions-wrapper__actions">
      <slot name="actions"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodosActionsWrapper'
}
</script>

<style lang="scss" scoped>
.todos-actions-wrapper {
  display: flex;
  flex-direction: column;

  &__heading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background: $grey-65;
    border-radius: 5px 5px 0 0;

    @include media-breakpoint-up(md) {
      height: 50px;
    }
  }

  &__title {
    color: $grey-37;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.025em;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    background: $grey-77;
    border-radius: 0 0 5px 5px;
    row-gap: 10px;
    padding: 10px 20px 25px;

    @include media-breakpoint-up(sm) {
      flex-direction: row;
      column-gap: 10px;
    }
  }
}
</style>
