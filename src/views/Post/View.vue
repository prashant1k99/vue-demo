<template>
  <div>
    <h1> {{post.title}}</h1>
    <br />
    <br />
    <hr />
    <br />
    <br />
    <Comments />
  </div>
</template>

<script>
import Comments from '../../components/Comments.vue'
export default {
  components: {
    Comments
  },
  computed: {
    post () {
      // eslint-disable-next-line eqeqeq
      return this.$store.state.post.posts.find(post => post.id == this.$route.params.id)
    }
  }
}
</script>