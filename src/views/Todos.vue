<template>
  <div class="todos">
    <todos-user-information/>
    <todos-filters
      v-model:todos-status="selectedStatus"
      v-model:user-id="selectedId"
      :todos-status-options="todosStatusOptions"
      :user-id-options="userIdOptions"
    />
    <todos-search @search="searchTodos"/>
    <todos-add-todo/>
    <todos-list :todos-list="resultFilteredTodos"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TodosUserInformation from '@/components/pages/todos/TodosUserInformation'
import TodosFilters from '@/components/pages/todos/TodosFilters'
import TodosSearch from '@/components/pages/todos/TodosSearch'
import TodosAddTodo from '@/components/pages/todos/TodosAddTodo'
import TodosList from '@/components/pages/todos/TodosList'

export default {
  name: 'Todos',
  components: {
    TodosUserInformation,
    TodosFilters,
    TodosSearch,
    TodosAddTodo,
    TodosList
  },
  mounted () {
    this.$store.dispatch('auth/getUser', this.$route.params.id)
    this.$store.dispatch('users/getUsersList')
    this.$store.dispatch('todos/getTodosList')
  },
  data () {
    return {
      selectedStatus: 'All',
      todosStatusOptions: [
        'All',
        'Completed',
        'Uncompleted',
        'Favorites'
      ],
      selectedId: 'All Users',
      searchValue: ''
    }
  },
  computed: {
    ...mapGetters('users', ['usersList']),
    ...mapGetters('todos', ['todosList']),
    userIdOptions () {
      return ['All Users', ...this.usersList.map(user => String(user.id))]
    },
    filteredTodosListByStatus () {
      switch (this.selectedStatus) {
        case 'Completed':
          return this.todosList.filter(todo => todo.completed)
        case 'Uncompleted':
          return this.todosList.filter(todo => !todo.completed)
        case 'Favorites':
          return this.todosList.filter(todo => todo.favorites)
        default:
          return this.todosList
      }
    },
    filteredTodosListByUserId () {
      return this.filteredTodosListByStatus.filter(todo => {
        return (this.selectedId === 'All Users') ? todo : String(todo.userId) === this.selectedId
      })
    },
    resultFilteredTodos () {
      return this.filteredTodosListByUserId.filter(todo => {
        return todo.title.toLowerCase().includes(this.searchValue.toLowerCase())
      })
    }
  },
  methods: {
    searchTodos (event) {
      this.searchValue = event.target.value
    }
  }
}
</script>

<style lang="scss" scoped>
.todos {
  display: grid;
  grid-gap: 10px;
  padding: 20px;

  @include media-breakpoint-up(md) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto repeat(4, 126px);
  }
}
</style>
