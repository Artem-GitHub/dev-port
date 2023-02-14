import { defineRule } from 'vee-validate'

export default {
  install: (app) => {
    defineRule('required', value => {
      if (!value || !value.length) {
        return 'This field is required'
      }
      return true
    })

    defineRule('alpha_spaces', value => {
      const rule = /[^a-zA-Z ]/g
      if (rule.test(value)) {
        return 'Must be only letters'
      }
      return true
    })

    defineRule('phone', value => {
      const rule = /[^0-9-+()]/g
      if (rule.test(value)) {
        return 'Must be only digits and symbols'
      }
      return true
    })

    defineRule('numbers', value => {
      const rule = /[^0-9]/g
      if (rule.test(value)) {
        return 'Must be only digits'
      }
      return true
    })
  }
}
