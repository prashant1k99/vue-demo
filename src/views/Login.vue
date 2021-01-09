<template>
  <div>
    <v-toolbar-title
      align="center"
      color="primary"
      flat
      class="text-uppercase font-weight-regular"
    >Login</v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-text v-if="wrongValue">Invalid Email</v-text>
    <v-card
      elevation="2"
      class="mx-auto my-12"
      max-width="500"
    >
    <v-card-text>
      <v-form>
        <v-text-field
          label="Email / Username"
          name="email"
          type="email"
          v-model="email"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions class="login_card_action">
      <v-btn
        class="px-8"
        color="primary"
        :loading="loading"
        :disabled="validate || loading"
        @keydown.prevent="listenForEnter"
        @click.prevent="sendDataForLogin"
      >Login</v-btn>
    </v-card-actions>
</v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['emailLogIn'],
  data: () => ({
    email: '1',
    wrongValue: false,
    loading: false
  }),
  mounted () {
    this.email = this.emailLogIn
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signInUser'
    }),
    listenForEnter (e) {
      if (e.key === 'Enter') {
        this.sendDataForLogin()
      }
    }, 
    sendDataForLogin () {
      const email = this.email
      this.loading = true
      this.signIn({
        email
      }).then((status) => {
        if (status === 'Success') {
          this.$router.push('/')
        } else {
          this.wrongValue = true
        }
        this.loading = false
      })
    }    
  },
  computed: {
    validate () {
      if (!this.email) return true
      return false
    }
  }
}
</script>

<style lang="scss">
.login_card_action {
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
