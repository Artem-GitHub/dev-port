<template>
  <todos-actions-wrapper class="todos-filters">
    <template #title>
      Todos filters
    </template>

    <template #actions>
      <app-select
        v-model="selectedStatus"
        :select-options="todosStatusOptions"
      />

      <app-select
        v-model="selectedId"
        :select-options="userIdOptions"
      />
    </template>
  </todos-actions-wrapper>
</template>

<script>
import TodosActionsWrapper from '@/components/pages/todos/TodosActionsWrapper'
import AppSelect from '@/components/UI/AppSelect'

export default {
  name: 'TodosFilters',
  components: {
    TodosActionsWrapper,
    AppSelect
  },
  props: {
    todosStatus: {
      type: String,
      default: null
    },
    todosStatusOptions: {
      type: Array,
      default: () => []
    },
    userId: {
      type: String,
      default: null
    },
    userIdOptions: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    selectedStatus: {
      get () {
        return this.todosStatus
      },
      set (newValue) {
        this.$emit('update:todosStatus', newValue)
      }
    },
    selectedId: {
      get () {
        return this.userId
      },
      set (newValue) {
        this.$emit('update:userId', newValue)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.todos-filters {
  @include media-breakpoint-up(md) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
}
</style>
