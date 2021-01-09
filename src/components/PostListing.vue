<template>
  <div class="d-flex align-center flex-column">
    <h1>Posts</h1>
    <v-btn color="primary" @click="$router.push('/create')">Add New Post</v-btn>
    <ul v-if="localPosts">
      <v-card
        v-for="post in localPosts" :key="post.id"
        class="mx-auto my-12"
        min-width="500"
        @click="sendToPost(post.id)"
      >
        <v-img
          height="150"
          src="https://picsum.photos/id/237/200/300"
        ></v-img>
        <v-card-title>{{post.title}}</v-card-title>
      </v-card>
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
      getPosts: 'post/getPosts',
      getComments: 'comment/getComments'
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
    if (this.$store.state.post.fetchStatus === false) this.loadData()
    else this.localPosts = this.$store.state.post.posts
    if (this.$store.state.comment.fetchStatus === false) this.getComments()
  }
}
</script>