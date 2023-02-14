<template>
  <div class="todos-list">
    <todos-list-item
      v-for="todo in todosList"
      :key="todo.id"
      :todo-item="todo"
    />
  </div>
</template>

<script>
import TodosListItem from '@/components/pages/todos/TodosListItem'

export default {
  name: 'TodosList',
  components: {
    TodosListItem
  },
  props: {
    todosList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.todos-list {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background: $grey-77;
  border-radius: 5px;
  row-gap: 10px;
  padding: 20px;

  @include media-breakpoint-up(md) {
    grid-column: 2 / 3;
    grid-row: 2 / 6;
  }
}
</style>
