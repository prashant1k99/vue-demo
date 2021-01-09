<template>
  <div class="text-center">
    <v-menu nudge-bottom="20" transition="scale-transition" offset-y>
      <template v-slot:activator="{ on }">
        <v-avatar class="mx-1" v-on="on" size="45">
          <img :src="userImage" alt="John" />
        </v-avatar>
      </template>
      <v-list class="py-2">
        <v-list-item>
          <v-list-item-title> {{userName}}</v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-list-item color="error" @click="removeUser">Sign Out</v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions({
      logOut: 'auth/signOutUser'
    }),
    removeUser () {
      this.logOut()
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState({
      userImage: (state) => state.auth.userData.photoUrl,
      userName: (state) => state.auth.userData.displayName
    })
  }
}
</script>

<style lang="scss">
.avatar {
  cursor: pointer;
}
</style>