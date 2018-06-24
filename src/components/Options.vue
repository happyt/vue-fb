<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Options page</h1>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <p>This is a user's options page</p>
        <v-btn color="primary" v-on:click.native="doSomething">Swap Dark</v-btn>
        <v-btn color="primary" to="/tests">Tests page</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    doSomething () {
      this.$store.dispatch('swapDarkTheme', null)
    }
  }
}
</script>
