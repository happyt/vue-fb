<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Welcome to SPA Test App</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <blockquote class="blockquote text-xs-center">
          A SPA looking at Vuex & Firestore
        </blockquote>
        <img src="@/assets/vuex-flow.png" alt="Vuex flow" class="mb-5">
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>
<style>
img {
  max-width:100%;
  height:auto;
  max-height:100%;
  }
</style>
<!-- License information for this page may be viewed at https://static.bbc.co.uk/onesport/2.11.612/licenses.txt -->