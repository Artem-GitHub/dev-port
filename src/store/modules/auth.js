import axios from 'axios'

const state = {
  user: {}
}

const mutations = {
  setUser (state, user) {
    state.user = user
  }
}

const actions = {
  async authUser ({ commit }, id) {
    try {
      const { data, status } = await axios.get(`/users/${id}`)

      if (status === 200) {
        return data
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  },

  async getUser ({ commit }, id) {
    try {
      const { data, status } = await axios.get(`/users/${id}`)

      if (status === 200) {
        commit('setUser', data)
        return data
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

const getters = {
  userData (state) {
    const user = obj => {
      return Object.entries(obj).reduce((acc, [key, value]) => {
        if (typeof value === 'object') {
          return [...acc, ...user(value)]
        } else {
          return [...acc, { key, value }]
        }
      }, [])
    }

    return user(state.user)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
