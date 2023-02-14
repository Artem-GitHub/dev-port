<template>
  <section class="default-layout">
    <the-header/>
    <div class="container">
      <router-view/>
    </div>
    <the-footer/>
  </section>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: $grey-33;
}
</style>
