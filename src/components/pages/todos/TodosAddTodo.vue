<template>
  <todos-actions-wrapper class="todos-add-todo">
    <template #title>
      Add todo
    </template>

    <template #actions>
      <Form
        class="todos-add-todo__form"
        @submit="addTodo"
      >
        <app-input-field
          v-model="form.title"
          field-name="title"
          field-placeholder="Title"
          :field-rules="'required'"
        />

        <app-input-field
          v-model="form.userId"
          field-name="userId"
          field-placeholder="User ID"
          :field-rules="'required|numbers'"
        />

        <app-button>
          Add
        </app-button>
      </Form>
    </template>
  </todos-actions-wrapper>
</template>

<script>
import { Form } from 'vee-validate'
import TodosActionsWrapper from '@/components/pages/todos/TodosActionsWrapper'
import AppInputField from '@/components/UI/AppInputField'
import AppButton from '@/components/UI/AppButton'

export default {
  name: 'TodosAddTodo',
  components: {
    TodosActionsWrapper,
    AppInputField,
    AppButton,
    Form
  },
  data () {
    return {
      form: {
        title: null,
        userId: null
      }
    }
  },
  methods: {
    async addTodo (values, { setValues }) {
      await this.$store.dispatch('todos/addTodo', {
        ...values,
        completed: false
      })

      setValues({
        title: null,
        userId: null
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.todos-add-todo {
  @include media-breakpoint-up(md) {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }

  &__form {
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 10px;

    @include media-breakpoint-up(sm) {
      flex-direction: row;
      column-gap: 10px;
    }
  }
}
</style>
