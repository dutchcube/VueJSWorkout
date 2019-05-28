<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card>
        <v-card-text>
          <h1>Login</h1>
          <v-form>
            <v-text-field v-model="email" name="login" label="Login" type="text"></v-text-field>
            <v-text-field v-model="password" name="password" label="Password" id="password" type="password"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <p>No account pussy? <router-link to="/signUp">Sign up!</router-link></p>
          <v-spacer></v-spacer>
          <v-btn @click="login" color="primary">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
        this.$router.replace('/workouts')
      }).catch((err) => {
        alert(err.message)
      })
    }
  }
}
</script>

<style scoped>

</style>
