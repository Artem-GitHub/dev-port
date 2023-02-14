import axios from 'axios'

const state = {
  todosList: [],
  favoritesTodoIds: new Set()
}

const mutations = {
  setTodosList (state, todosList) {
    state.todosList = todosList
  },

  setTodo (state, todo) {
    state.todosList.unshift(todo)
  },

  setFavoritesTodoIds (state) {
    const todosIdsFromStorage = JSON.parse(localStorage.getItem('todosIds'))
    state.favoritesTodoIds = new Set(todosIdsFromStorage)

    Array.from(state.favoritesTodoIds).forEach(id => {
      const index = state.todosList.findIndex(todo => todo.id === id)

      if (index !== -1) {
        state.todosList[index].favorites = true
      }
    })
  },

  setFavoritesId (state, id) {
    state.favoritesTodoIds.add(id)
    const todosIdsToStorage = JSON.stringify(Array.from(state.favoritesTodoIds))
    localStorage.setItem('todosIds', todosIdsToStorage)
  },

  removeFavoritesTodoId (state, id) {
    const index = state.todosList.findIndex(todo => todo.id === id)
    state.todosList[index].favorites = false
    state.favoritesTodoIds.delete(id)
    const todosIdsToStorage = JSON.stringify(Array.from(state.favoritesTodoIds))
    localStorage.setItem('todosIds', todosIdsToStorage)
  }
}

const actions = {
  async getTodosList ({ commit }) {
    try {
      const { data, status } = await axios.get('/todos')

      if (status === 200) {
        commit('setTodosList', data)
        commit('setFavoritesTodoIds')
        return data
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  },

  async addTodo ({ commit }, payload) {
    try {
      const { data, status } = await axios.post('/todos', payload)

      if (status === 201) {
        commit('setTodo', data)
        return data
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  },

  addFavoritesTodoId ({ commit }, id) {
    commit('setFavoritesId', id)
    commit('setFavoritesTodoIds')
  },

  removeFavoritesTodoId ({ commit }, id) {
    commit('removeFavoritesTodoId', id)
  }
}

const getters = {
  todosList (state) {
    return state.todosList
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
