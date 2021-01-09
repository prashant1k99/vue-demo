import axios from '@/axios.js'

const state = {
  status: false,
  userData: {
    displayName: '',
    photoUrl: 'https://i.pravatar.cc/150?u=1',
    userId: ''
  }
}

// getters
const getters = {
  userLoggedStatus (state) {
    return state.status
  }
}

// actions
const actions = {
  async signInUser (
    { commit },
    data
  ) {
    const users = await axios.get('/users')
    for (const user of users.data) {
      // eslint-disable-next-line eqeqeq
      if (user.uId == data.email) {
        const data = {
          displayName: user.name,
          photoUrl: 'https://i.pravatar.cc/150?u=1',
          userId: user.uId
        }
        commit('SET_USER', data)
        return ('Success')
      }
    }
    return ('Failure')
  },
  signOutUser ({ commit }) {
    commit('REMOVE_USER')
  }
}

// mutations
const mutations = {
  SET_USER (state, data) {
    state.status = true
    state.userData = data
  },
  REMOVE_USER (state) {
    // eslint-disable-next-line no-unused-expressions
    state.status = false,
    state.userData = {
      displayName: '',
      photoUrl: 'https://i.pravatar.cc/150?u=1',
      userId: ''
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
