<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Options page</h1>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <p>This is a user's options page</p>
        <v-btn color="primary" v-on:click.native="doSomething">Swap Dark</v-btn>
        <v-btn color="accent" to="/tests">Tests page</v-btn>
        <v-btn color="accent" to="/addItem">Add item</v-btn>
      </v-flex>      
      <v-flex xs12 class="text-xs-center" mt-3>
        <v-btn color="accent" to="/lists">Lists page</v-btn>
        <v-btn color="accent" to="/dashboard">Dashboard page</v-btn>
        <v-btn color="accent" to="/dashlayout">Dashboard test</v-btn>
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
