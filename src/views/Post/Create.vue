<template>
  <div>
    <h1> Create New Post </h1>
    <br />
    <form>
      <v-text-field
        v-model="title"
        required
      ></v-text-field>
      <v-btn
        :disabled="validate || loading"
        color="primary"
        class="mr-4"
        @click="createPost"
      >
        Create
      </v-btn>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    title: '',
    loading: false
  }),
  computed: {
    post () {
      // eslint-disable-next-line eqeqeq
      return this.$store.state.post.posts.find(post => post.id == this.$route.params.id)
    },
    validate () {
      if (!this.title) return true
      else return false
    }
  },
  methods: {
    ...mapActions({
      addPost: 'post/addPost'
    }),
    createPost () {
      this.loading = true
      this.addPost({
        title: this.title
      }).then((status) => {
        console.log(status)
        // do check for status
        this.loading = false
        this.$router.push('/')
      })
    }
  }
}
</script>