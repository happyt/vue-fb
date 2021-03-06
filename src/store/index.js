import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import router from '@/router'
// import axios from 'axios'

Vue.use(Vuex)

// firebase.database.ref().on('value', snapshot => {
//   console.log(snapshot)
// })

export const store = new Vuex.Store({
  state: {
    appTitle: 'SPA - Firebase',
    user: null,
    error: null,
    loading: false,
    goDark: false
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setDarkTheme (state, payload) {
      state.goDark = payload
    }
  },
  actions: {
    userSignUp ({commit}, payload) {
      commit('setLoading', true)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
        commit('setUser', {email: firebaseUser.email})
        commit('setLoading', false)
        commit('setError', null)
        router.push('/home')
      })
      .catch(error => {
        commit('setError', error.message)
        commit('setLoading', false)
      })
    },
    userSignIn ({commit}, payload) {
      commit('setLoading', true)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
        // console.log(firebaseUser)
        commit('setUser', {email: firebaseUser.email})
        commit('setLoading', false)
        commit('setError', null)
        router.push('/home')
      })
      .catch(error => {
        commit('setError', error.message)
        commit('setLoading', false)
      })
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {email: payload.email})
    },
    userSignOut ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
      router.push('/')
    },
    swapDarkTheme ({commit}) {
      commit('setDarkTheme', !this.state.goDark)
    },
    raiseEvent () {

    }
  },
  getters: {
    isAuthenticated (state) {
      return state.user !== null && state.user !== undefined
    },
    isDark (state) {
      return state.goDark
    }
  }
})
