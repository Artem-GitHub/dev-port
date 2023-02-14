<template>
  <Form
    class="auth-form"
    @submit="userAuth"
  >
    <div class="auth-form__heading">
      <h2 class="auth-form__title">
        description
      </h2>
    </div>

    <div class="auth-form__inner">
      <h3 class="auth-form__subtitle">
        description
      </h3>

      <div class="auth-form__inputs-wrap">
        <app-input-field
          v-model="form.name"
          field-name="name"
          field-placeholder="Username"
          :field-rules="'required|alpha_spaces'"
          validate-on-input
        />

        <app-input-field
          v-model="form.phone"
          field-name="phone"
          field-placeholder="Phone Number"
          :field-rules="'required|phone'"
          validate-on-input
        />
      </div>

      <app-button>
        Register
      </app-button>
    </div>
  </Form>
</template>

<script>
import { Form } from 'vee-validate'
import AppInputField from '@/components/UI/AppInputField'
import AppButton from '@/components/UI/AppButton'
import { mapGetters } from 'vuex'

export default {
  name: 'AuthForm',
  components: {
    Form,
    AppInputField,
    AppButton
  },
  data () {
    return {
      form: {
        name: null,
        phone: null
      }
    }
  },
  computed: {
    ...mapGetters('users', ['usersList']),
    userId () {
      return this.usersList.find(user => {
        return user.username === this.form.name &&
          user.phone.split(' ')[0] === this.form.phone
      })?.id
    }
  },
  methods: {
    async userAuth () {
      if (!this.userId) {
        return alert('User not found')
      }

      const user = await this.$store.dispatch('auth/authUser', this.userId)

      this.$router.push({
        name: 'todos',
        params: {
          id: user.id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  flex-basis: 447px;

  &__heading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background: $grey-65;
    border-radius: 5px 5px 0 0;
  }

  &__title {
    color: $grey-37;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.025em;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    background: $grey-77;
    border-radius: 0 0 5px 5px;
    padding: 15px 25px 30px;
  }

  &__subtitle {
    color: $grey-37;
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    letter-spacing: -0.025em;
    margin-bottom: 15px;
  }

  &__inputs-wrap {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-bottom: 25px;
  }
}
</style>
