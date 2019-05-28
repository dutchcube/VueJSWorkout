<template>
  <v-container>
    <v-card>
      <v-container>
        <v-layout xs12 md3 text-xs-center>
          <v-form v-on:submit.prevent="submit">
            <v-layout row>
              <v-flex md9>
                <v-text-field v-model="workoutName" placeholder="Workout name"></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout align-center row wrap v-for="(exercise, index) in exercises" :key="index">
              <v-flex xs12 md3>
                <v-text-field v-model="exercise.name" placeholder="Exercisename"></v-text-field>
              </v-flex>
              <v-flex xs2 md1 offset-md1>
                <v-text-field v-model="exercise.sets" placeholder="Sets"></v-text-field>
              </v-flex>
              <v-flex xs1>
                x
              </v-flex>
              <v-flex xs2 md1>
                <v-text-field v-model="exercise.reps" placeholder="Reps"></v-text-field>
              </v-flex>
              <v-flex xs1>
                x
              </v-flex>
              <v-flex xs2 md1>
                <v-text-field v-model="exercise.weight" placeholder="Weight"></v-text-field>
              </v-flex>
              <v-flex align-self-center xs3 md1>
                <v-icon @click="deleteExercise(index)">delete</v-icon>
              </v-flex>
            </v-layout>

            <v-layout text-xs-left align-start>
              <v-flex row>
                <v-btn @click="addExercise" color="primary">Add exercise</v-btn>
                <v-btn @click="addWorkout()" color="success">Complete workout</v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import firebase from 'firebase'
import { db } from '../main'

export default {
  name: 'addWorkoutPlan',
  data () {
    return {
      exercises: [{ name: '', sets: '', reps: '', weight: '' }],
      workoutName: '',
      dateAdded: ''
    }
  },
  firestore () {
    return {
      // workouts: db.collection('workouts').orderBy('dateAdded')
    }
  },
  methods: {
    addExercise () {
      this.exercises.push({ name: '', sets: '', reps: '', weight: '' })
    },
    deleteExercise (index) {
      this.exercises.splice(index, 1)
      if (index === 0) {
        this.addExercise()
      }
    },
    addWorkout () {
      const dateAdded = Math.round(new Date().getTime() / 1000)
      const exercises = this.exercises
      let workoutName = this.workoutName

      db.collection('workouts').add({ workoutName, dateAdded, exercises, userId: firebase.auth().currentUser.uid })

      this.workoutName = ''
      this.dateAdded = ''

      this.$router.push('Home')
    }
  }
}
</script>

<style scoped>

</style>
