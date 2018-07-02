<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <v-form @submit.prevent="saveContact">
          <v-layout row>
            <v-flex xs4>
              <v-subheader>Label for the block</v-subheader>
            </v-flex>
            <v-flex xs4>
              <v-text-field v-model="name" required label="Name"></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs4>
              <v-subheader v-if='errors.length'>
                <ul>
                  <li><span class="red--text">Correct these errors:</span></li>
                  <li class="red--text" v-for='(error,index) in errors' :key=index>{{error}}</li>
                </ul>
              </v-subheader>
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
      errors: [],
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
      // should check to see if NAME is already in the collection
      if (this.name && this.value && this.tempo) {
        db.collection('locations').add({
          name: this.name,
          value: this.value,
          tempo: this.tempo
        })
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id)
          this.$toasted.show('Updated', {type: 'success', icon: 'check', duration: 2000})
          this.name = ''
          this.value = ''
          this.tempo = ''
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
        })
      } else {
        this.errors = []
        if (!this.name) {
          this.errors.push('Name required.')
        }
        if (!this.value) {
          this.errors.push('Value required.')
        }
        if (!this.tempo) {
          this.errors.push('Tempo required.')
        }
      }
    }
  }
}
</script>
