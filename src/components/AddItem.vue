<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <v-form @submit.prevent="saveContact">
          <v-layout row>
            <v-flex xs4>
              <v-subheader>Label for the name</v-subheader>
            </v-flex>
            <v-flex xs4>
              <v-text-field v-model="name" required label="Name"></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs4>
              <v-subheader></v-subheader>
            </v-flex>
            <v-flex xs4>
              <v-text-field v-model="value" label="Value"></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs4>
              <v-subheader></v-subheader>
            </v-flex>
            <v-flex xs4>
              <v-text-field v-model="tempo" label="Tempo"></v-text-field>
            </v-flex>
          </v-layout>

          <div class="field">
            <div class="control">
              <v-btn type="submit" color="info" class="button is-link">Submit</v-btn>
            </div>
          </div>

        </v-form>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <p>Fill in and press SUBMIT</p>
        <p>xxx</p>
        <v-btn color="info" v-on:click.native="doSomething">BBBB</v-btn>
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
      name: null,
      value: null,
      tempo: null,
      locations: []
    }
  },
  created () {
  },
  methods: {
    saveContact () {
      db.collection('locations').add({
        name: this.name,
        value: this.value,
        tempo: this.tempo
      })
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    },
    async doSomething () {

    }
  }
}
</script>
