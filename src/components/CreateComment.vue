<template>
  <div>
    <h5> Add Comment </h5>
    <br />
    <form>
      <v-text-field
        v-model="body"
        required
      ></v-text-field>
      <v-btn
        :disabled="loading"
        color="primary"
        class="mr-4"
        @click="createPost"
      >
        Add Comment
      </v-btn>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    body: '',
    loading: false
  }),
  methods: {
    ...mapActions({
      addComment: 'comment/addComment'
    }),
    createPost () {
      this.loading = true
      this.addComment({
        body: this.body,
        postId: this.$route.params.id
      }).then((status) => {
        console.log(status)
        // do check for status
        this.body = ''
        this.loading = false
      })
    }
  }
}
</script>