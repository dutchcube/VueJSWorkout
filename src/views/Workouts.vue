<template>
  <v-container>
    <v-layout justify-center text-xs-center xs6 row wrap>
      <v-flex xs12 md5>
        <!--<h1 v-if="workouts.length < 1">Get your ass of the couch and get a workout in there!</h1>-->
        <v-card md-4 class="workout mt-5 caption" v-for="(workout, idx) in workouts" :key="idx">
          <v-card-title text-sm-left >
            <v-flex>
              <p class="day">{{ workout.workoutName }}</p>
              <p class="day">{{ days[(new Date(workout.dateAdded*1000).getDay())] }}</p>
              <p class="date">{{  new Date(workout.dateAdded*1000).getDate() + '/' + (new Date(workout.dateAdded*1000).getMonth()+1) }}</p>
            </v-flex>

            <v-flex text-sm-right
            >
              <ul class="ex">
                <li v-for="(exercises, idy) in workout.exercises" :key="idy">
                  {{ exercises.name }}
                </li>
              </ul>
            </v-flex>

            <v-flex text-sm-left justify-end>
              <ul class="ex">
                <li v-for="(exercises, idy) in workout.exercises" :key="idy">
                  {{ exercises.sets }} x {{ exercises.reps }} x <span>{{ exercises.weight }}</span> kg
                </li>
              </ul>
            </v-flex>
            <v-flex>
              <v-icon @click="deleteWorkout(workout.id)">delete</v-icon>
            </v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase'
import { db } from '../main'
// import 'vuetify/dist/vuetify.min.css'

export default {
  name: 'Workouts',
  data () {
    return {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      workouts: [],
      workoutName: '',
      exercises: '',
      workout: '',
      id: '',
      currentUserId: firebase.auth().currentUser.uid
    }
  },
  firestore () {
    return {
      workouts: db.collection('workouts').orderBy('dateAdded').where('userId', '==', this.currentUserId)
    }
  },
  methods: {
    deleteWorkout (id) {
      db.collection('workouts').doc(id).delete()
    }
  },
  logout () {
    firebase.auth().signOut().then(() => {
      this.$router.replace('login')
    })
  }

}
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
