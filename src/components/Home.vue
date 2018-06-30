<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Home page</h1>
      </v-flex>
      <v-flex>
        Names here
        <article v-for="(location, idx) in locations" :key="idx">
          <h1>{{ location.name }}</h1>
        </article>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <p>This is a user's home page</p>
        <p>xxx</p>
        <v-btn color="info" v-on:click.native="doSomething">Test</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import { db } from '../main'

export default {
  name: 'Home',
  data () {
    // console.log(db)
    return {
      locations: []
    }
  },
  created () {
    // db.collection('locations').get()
    // .then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     console.log('get doc:', doc)
    //     let data = {
    //       name: doc.data().name,
    //       value: doc.data().value,
    //       tempo: doc.data().tempo
    //     }
    //     this.locations.push(data)
    //     // console.log('get data:', data)
    //   })
    // }, function (error) {
    //   console.log('error:', error)
    // })
    db.collection('locations')
    .onSnapshot((snapshot) => {
      this.locations = []
      // console.log('snapshot:', snapshot)
      snapshot.forEach((doc) => {
        console.log('snap doc:', doc, 'name:', doc.data().name)
        let data = {
          name: doc.data().name,
          value: doc.data().value,
          tempo: doc.data().tempo
        }
        this.locations.push(data)
        // console.log(data)
      })
    }, function (error) {
      console.log('error:', error)
    })
  },
  methods: {
    async doSomething () {
      this.$toasted.show('hello billo', {
          action: [
            {
              text: 'Cancel',
              onClick: (e, toastObject) => {
                toastObject.goAway(0)
              }
            },
            {
              text: 'Undo',
              // router navigation
              push: {
                name: '/options',
                // thise will prevent toast from closing
                dontClose: true
              }
            }
          ],
          type: 'error',
          theme: 'bubble',
          icon: 'check',
          duration: 4000
        })    
      }
  }
}
</script>
