<template>
  <div>
    <h3> Comments </h3>
    <v-list-item v-for="comment of comments" :key="comment.id">
      <v-list-item-content>
        <v-list-item-title>{{comment.body}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <hr />
    <br />
    <CreateComment />
  </div>
</template>

<script>
import CreateComment from './CreateComment'
export default {
  components: {
    CreateComment
  },
  data: () => ({
    localComments: null
  }),
  computed: {
    comments () {
      // eslint-disable-next-line eqeqeq
      return this.$store.state.comment.comments.filter(comment => comment.postId == this.$route.params.id)
    }
  }
}
</script>