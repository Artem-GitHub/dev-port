import axios from 'axios'

const state = {
  usersList: []
}

const mutations = {
  setUsers (state, users) {
    state.usersList = users
  }
}

const actions = {
  async getUsersList ({ commit }) {
    try {
      const { data, status } = await axios.get('/users')

      if (status === 200) {
        commit('setUsers', data)
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

const getters = {
  usersList (state) {
    return state.usersList
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
