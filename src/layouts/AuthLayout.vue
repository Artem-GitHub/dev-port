<template>
  <section class="auth-layout">
    <router-view/>
  </section>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style lang="scss" scoped>
.auth-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: $grey-33;
}
</style>
