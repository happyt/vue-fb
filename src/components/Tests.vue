<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Test page</h1>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <p>This is a test page</p>
        <p>Meaning - {{wordData}}</p>
        <v-btn color="info" v-on:click.native="doSomething">Test Word API</v-btn>
        <v-btn color="secondary" v-on:click.native="doSomethingElse">Else</v-btn>
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
    // example - http://api.pearson.com/v2/dictionaries/wordwise/entries?limit=1&headword=area
    async doSomething () {
      const response = await WordService.getWord({ word: 'full' })
      this.wordData = response.data.results[0].senses[0].definition
    },
    async doSomethingElse () {
      const response = await WordService.getWord({ word: 'empty' })
      this.wordData = response.data.results[0].senses[0].definition
    }
  }
}
</script>
