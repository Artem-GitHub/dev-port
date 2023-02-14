<template>
  <div class="todos-list-item">
    <p class="todos-list-item__title">
      {{ todoItem.title }}
    </p>

    <div>
      <app-button
        v-if="todoItem.favorites"
        small
        :type-button="'button'"
        @click="removeFromFavorites(todoItem.id)"
      >
        remove
      </app-button>

      <app-button
        v-else
        small
        :type-button="'button'"
        @click="addToFavorites(todoItem.id)"
      >
        save
      </app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/UI/AppButton'

export default {
  name: 'TodosListItem',
  components: {
    AppButton
  },
  props: {
    todoItem: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    addToFavorites (id) {
      this.$store.dispatch('todos/addFavoritesTodoId', id)
    },
    removeFromFavorites (id) {
      this.$store.dispatch('todos/removeFavoritesTodoId', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.todos-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  background: $white;
  border-radius: 5px;
  padding: 10px;

  &__title {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.025em;
    color: $grey-21;
  }
}
</style>
