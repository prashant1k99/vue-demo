import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import post from './modules/posts'
import comment from './modules/comments'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    post,
    comment
  }
})
