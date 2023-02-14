import { createStore } from 'vuex'
import auth from './modules/auth'
import users from './modules/users'
import todos from './modules/todos'

export default createStore({
  modules: {
    auth,
    users,
    todos
  }
})
