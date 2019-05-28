<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card>
        <v-card-text>
          <h3>You're not on the right place!</h3>
        </v-card-text>
        <v-card-actions>
          <p>Don't you have an account? <router-link to="/signUp">Sign up!</router-link></p>
          <v-spacer></v-spacer>
          <button v-on:click="notFound" class="button">Go Back To Login</button>
          <v-btn @click="login" color="primary">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'login',
  data: function () {
    return {}
  },
  methods: {
    notFound () {
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped>
</style>
