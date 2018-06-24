<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Home page</h1>
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
import WordService from '@/services/WordService'

export default {
  data () {
    return {
      wordData: 'aa'
    }
  },
  methods: {
    async doSomething () {

    }
  }
}
</script>
