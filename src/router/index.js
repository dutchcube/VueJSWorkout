import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Login from '../components/Login'
import SignUp from '../components/SignUp'
import NotFound from '../components/NotFound'

import Workouts from '../views/Workouts'
import addWorkout from '../views/addWorkout'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/workouts',
      name: 'Workouts',
      component: Workouts,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/addWorkout',
      name: 'addWorkout',
      component: addWorkout,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('workouts')
  else next()
})

export default router
