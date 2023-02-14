<template>
  <auth-form/>
</template>

<script>
import AuthForm from '@/components/pages/auth/AuthForm'

export default {
  name: 'Auth',
  components: {
    AuthForm
  },
  beforeCreate () {
    this.$store.dispatch('users/getUsersList')
  }
}
</script>
