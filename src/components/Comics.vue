<template>
  <v-container>
    <v-layout justify-center text-xs-center xs6 row wrap>
      <article class="covers" v-for="(workout, idx) in workouts" :key="idx">
        <div>
          <p>{{ workout.workoutName }}</p>
        </div>
      </article>
      <v-flex xs12 md5>
        <v-card md-4 class="align-center workout caption">
          <v-card-title>
            <v-flex>
              <p class="day">mon</p>
              <p class="date">26 Aug</p>

            </v-flex>

            <v-flex justify-end>
              <ul class="ex">
                <li>Squat</li>
                <li>Squat</li>
                <li>Squat</li>
                <li>Squat</li>
                <li>Squat</li>
                <li>Squat</li>
                <li>Squat</li>
                <li>Squat</li>
              </ul>
            </v-flex>

            <v-flex justify-end>
              <ul class="ex">
                <li>12/12/12 <span>50kg</span></li>
                <li>12/12/12 <span>50kg</span></li>
                <li>12/12/12 <span>50kg</span></li>
                <li>12/12/12 <span>50kg</span></li>
                <li>12/12/12 <span>50kg</span></li>
                <li>12/12/12 <span>50kg</span></li>
                <li>12/12/12 <span>50kg</span></li>
                <li>12/12/12 <span>50kg</span></li>
              </ul>
            </v-flex>
          </v-card-title>
        </v-card>


        <v-card align-center  color="" class="workout mt-5 caption">
          <v-card-title>
            <v-flex>
              <p class="day">Mon</p>
              <p class="date">26 Aug</p>
            </v-flex>

            <v-flex justify-end>
              <ul class="ex">
                <li>Squat</li>
                <li>Squat</li>
                <li>Squat</li>
                <li>Squat</li>
                <li>Squat</li>
                <li>Squat</li>
                <li>Squat</li>
                <li>Squat</li>
              </ul>
            </v-flex>

            <v-flex justify-end>
              <ul class="ex">
                <li>12/12/12 <span>50kg</span></li>
                <li>12/12/12 <span>50kg</span></li>
                <li>12/12/12 <span>50kg</span></li>
                <li>12/12/12 <span>50kg</span></li>
                <li>12/12/12 <span>50kg</span></li>
                <li>12/12/12 <span>50kg</span></li>
                <li>12/12/12 <span>50kg</span></li>
                <li>12/12/12 <span>50kg</span></li>

              </ul>
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

export default {
  name: 'Comics',
  data () {
    return {
      comics: [],
      name: '',
      image: '',
      workouts: [],
      workoutName: ''
    }
  },
  firestore () {
    return {
      workouts: db.collection('workouts')
    }
  },
  methods: {
    addComic (name, image) {
      const createdAt = new Date()
      db.collection('comics').add({ name, image, createdAt })
      // Clear values
      this.name = ''
      this.image = ''
    },
    deleteComic (id) {
      db.collection('comics').doc(id).delete()
    },
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
}
input, button {
  margin-bottom: 10px;
}
button {
  background-color: #0476F2;
}
.logout {
  left: 50%;
  top: 100%;
}
</style>
