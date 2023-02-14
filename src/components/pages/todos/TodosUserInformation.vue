<template>
  <div class="user-information">
    <div class="user-information__heading">
      <h2 class="user-information__title">
        User Information
      </h2>
    </div>

    <todos-user-information-list/>
  </div>
</template>

<script>
import TodosUserInformationList from '@/components/pages/todos/TodosUserInformationList'

export default {
  name: 'TodosUserInformation',
  components: {
    TodosUserInformationList
  }
}
</script>

<style lang="scss" scoped>
.user-information {
  display: flex;
  flex-direction: column;

  @include media-breakpoint-up(md) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

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
}
</style>
