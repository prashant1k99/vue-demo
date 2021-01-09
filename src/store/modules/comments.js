import axios from '@/axios.js'

const state = {
  fetchStatus: false,
  comments: []
}

const getters = {
  getComments: (state) => (id) => {
    // eslint-disable-next-line eqeqeq
    return state.comments.find(comment => comment.postId == id)
  }
}

const actions = {
  async getComments ({commit, rootState }) {
    if (rootState.post.fetchStatus === false) {
      const comments = await axios.get('/comments')
      commit('ADD_COMMENT', comments.data)
      commit('SET_FETCH_STATUS', true)
      return comments.data
    } else {
      return rootState.post.posts
    }
  },
  async addComment ({commit}, data) {
    await axios.post('/posts', {
      body: data.body,
      postId: data.postId
    }).catch(err => {
      console.log(err)
    })
    commit('PUSH_COMMENT', data)
    return ('Success')
  }
}

const mutations = {
  ADD_COMMENT (state, data) {
    state.comments = data
  },
  PUSH_COMMENT (state, data) {
    state.comments.push({
      id: state.comments.length + 1,
      body: data.body,
      postId: data.postId
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
