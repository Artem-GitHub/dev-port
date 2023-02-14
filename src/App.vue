<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'
import AuthLayout from '@/layouts/AuthLayout'

export default {
  components: {
    DefaultLayout,
    AuthLayout
  },
  computed: {
    layout () {
      return this.$route.meta.layout
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/main.scss';
</style>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
