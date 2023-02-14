<template>
  <input
    class="app-search-input"
    type="text"
    name="search"
    placeholder="Search by title"
    @input="$emit('search', $event)"
  >
</template>

<script>
export default {
  name: 'AppSearch'
}
</script>

<style lang="scss" scoped>
.app-search-input {
  width: 100%;
  height: 40px;
  color: $grey-21;
  padding-left: 10px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  letter-spacing: -0.025em;

  &::placeholder {
    color: $grey-21;
  }
}
</style>
