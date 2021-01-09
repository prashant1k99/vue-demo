import axios from '@/axios.js'

const state = {
  fetchStatus: false,
  posts: []
}

// getters
const getters = {
  getPost: (state) => (id) => {
    return state.posts.find(post => post.id === id)
  }
}

// actions
const actions = {
  async getPosts ({commit, rootState }) {
    if (rootState.post.fetchStatus === false) {
      const posts = await axios.get('/posts')
      const usersPost = posts.data.filter(post => post.creator === rootState.auth.userData.userId)
      commit('ADD_POST', usersPost)
      commit('SET_FETCH_STATUS', true)
      return usersPost
    } else {
      return rootState.post.posts
    }
  },
  async deletePost (
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
  }
  // async addPost ({commit}, data) {

  // }
}

// mutations
const mutations = {
  REMOVE_POST (state, data) {
    state.posts = data
  },
  ADD_POST (state, data) {
    state.posts = data
  },
  SET_FETCH_STATUS (state, data) {
    state.fetchStatus = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
