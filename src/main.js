import Vue from 'vue'
import App from './App'
import router from './router'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(Vuetify)
Vue.use(VueFire)

firebase.initializeApp({
  apiKey: 'AIzaSyBQb91bPAJhS1IPoSbRevPjiH6W1HFx76o',
  authDomain: 'workout-c62f1.firebaseapp.com',
  databaseURL: 'https://workout-c62f1.firebaseio.com',
  projectId: 'workout-c62f1',
  storageBucket: 'workout-c62f1.appspot.com',
  messagingSenderId: '52444776037',
  appId: '1:52444776037:web:d7405dfa5c4d77b7'
})

export const db = firebase.firestore()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
