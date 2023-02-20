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
  mounted () {
    this.$store.dispatch('users/getUsersList')
  }
}
</script>
