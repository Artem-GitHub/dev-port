<template>
  <ul class="user-information-list">
    <li
      v-for="item in userData"
      :key="item.key"
      class="user-information-list__item"
    >
      <span class="user-information-list__item-name">
        <strong>
          {{ item.key }}
        </strong>
      </span>

      <span class="user-information-list__item-value">
        {{ item.key === 'phone' ? item.value.split(' ')[0] : item.value }}
      </span>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TodosUserInformationList',
  computed: {
    ...mapGetters('auth', {
      userData: 'userData'
    })
  }
}
</script>

<style lang="scss" scoped>
.user-information-list {
  display: grid;
  grid-column-gap: 10px;
  background: $grey-77;
  border-radius: 0 0 5px 5px;
  padding: 10px;

  @include media-breakpoint-up(xs) {
    grid-template-columns: 1fr 1fr;
  }

  @include media-breakpoint-up(md) {
    grid-template-columns: repeat(3, 1fr);
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 20px;
    color: $grey-21;
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    letter-spacing: -0.025em;
    border-bottom: 1px solid $grey-37;
    padding: 0 10px;

    &-value {
      text-align: right;
    }
  }
}
</style>
