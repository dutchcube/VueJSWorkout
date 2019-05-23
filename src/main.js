// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'

import App from './App'
import router from './router'

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueFire)
Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'

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
