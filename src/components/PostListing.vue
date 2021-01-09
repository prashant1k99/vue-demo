<template>
  <div>
    <h1>Posts</h1>
    <ul v-if="localPosts">
      <li v-for="post in localPosts" :key="post.id" @click="sendToPost(post.id)">
        <a @click="sendToPost(post.id)">{{post.title}}</a>
      </li>
    </ul>
    <v-progress-circular
      v-else
      indeterminate
      color="primary"
    ></v-progress-circular>
  </div>
</template>

<script>
import {  mapActions } from 'vuex'
export default {
  data: () => ({
    localPosts: null
  }),
  methods: {
    ...mapActions({
      getPosts: 'post/getPosts' // map `this.add()` to `this.$store.dispatch('increment')`
    }),
    sendToPost (id) {
      this.$router.push(`/view/${id}`)
    },
    loadData () {
      this.getPosts().then(posts => {
        this.localPosts = posts
      })
    }
  },
  beforeMount () {
    this.loadData()
  }
}
</script>