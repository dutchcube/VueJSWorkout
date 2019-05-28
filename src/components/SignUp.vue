<template>
  <!--<div class="sign-up">-->
    <!--<h3>Create a new account</h3>-->
    <!--<input-->
      <!--v-model="email"-->
      <!--type="text"-->
      <!--class="input"-->
      <!--placeholder="Email"-->
      <!--required>-->
    <!--<br>-->
    <!--<input-->
      <!--v-model="password"-->
      <!--type="password"-->
      <!--class="input"-->
      <!--placeholder="Password"-->
      <!--required>-->
    <!--<br>-->
    <!--<button v-on:click="signUp" class="button">Sign Up!</button>-->
    <!--<button class="button">-->
      <!--<router-link to="/login">-->
        <!--Back-->
      <!--</router-link>-->
    <!--</button>-->
  <!--</div>-->

  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card>
        <v-card-text>
          <h1>Sign up now!</h1>
          <v-form>
            <v-text-field v-model="email" name="login" label="Login" type="text"></v-text-field>
            <v-text-field v-model="password" name="password" label="Password" id="password" type="password"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <p>Big boy, already have an account? <router-link to="/Login">Log in!</router-link></p>
          <v-spacer></v-spacer>
          <v-btn @click="signUp" color="primary">Sign up!</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'signup',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
        this.$router.replace('/login')
      }).catch((err) => {
        alert(err.message)
      })
    }
  }
}
</script>

<style scoped>
</style>
