import axios from '@/axios.js'

const state = {
  fetchStatus: false,
  posts: []
}

const getters = {
  getPost: (state) => (id) => {
    return state.posts.find(post => post.id === id)
  }
}

const actions = {
  async getPosts ({commit, rootState }) {
    if (rootState.post.fetchStatus === false) {
      const posts = await axios.get('/posts')
      const usersPost = posts.data
      commit('ADD_POST', usersPost)
      commit('SET_FETCH_STATUS', true)
      return usersPost
    } else {
      return rootState.post.posts
    }
  },
  async addPost ({commit}, data) {
    await axios.post('/posts', {
      title: data.title
    }).catch(err => {
      console.log(err)
    })
    commit('PUSH_POST', data)
    return ('Success')
  }
}

const mutations = {
  REMOVE_POST (state, data) {
    state.posts = data
  },
  ADD_POST (state, data) {
    state.posts = data
  },
  PUSH_POST (state, data) {
    state.posts.push({
      id: state.posts.length + 1,
      title: data.title
    })
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
