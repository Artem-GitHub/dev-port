<template>
  <todos-actions-wrapper class="todos-search">
    <template #title>
      Search todo by title
    </template>

    <template #actions>
      <app-search @search="$emit('search', $event)"/>
    </template>
  </todos-actions-wrapper>
</template>

<script>
import TodosActionsWrapper from '@/components/pages/todos/TodosActionsWrapper'
import AppSearch from '@/components/UI/AppSearch'

export default {
  name: 'TodosSearch',
  components: {
    TodosActionsWrapper,
    AppSearch
  }
}
</script>

<style lang="scss" scoped>
.todos-search {
  @include media-breakpoint-up(md) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
}
</style>
