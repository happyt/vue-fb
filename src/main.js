// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import Toasted from 'vue-toasted'

// Initialize Firebase
var config = require(`../fbconfig.js`)

firebase
  .initializeApp(config)

export const db = firebase.firestore()

const settings = {timestampsInSnapshots: true}
db.settings(settings)

Vue.use(Vuetify, { theme: {
  primary: '#ee44aa',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.use(Toasted)

Vue.config.productionTip = false

/* eslint-disable no-new */
const subscribe = firebase.auth()
.onAuthStateChanged((firebaseUser) => {
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created () {
      // console.log('user:', firebaseUser)
      if (firebaseUser) {
        store.dispatch('autoSignIn', firebaseUser)
      }
    }
  })
  subscribe()
})
