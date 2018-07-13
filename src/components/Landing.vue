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
    <section id="screen">Screen section</section>
  </v-container>
</template>

<script>

CSS.paintWorklet.addModule('http://localhost:8080/static/scripts/patternWorklet.js')

export default {

}
</script>
<style>
#screen {
  box-sizing: border-box;
  margin: 10px; padding: 0px;
  width: calc(50vw);
  height: calc(10vh);
  background-color: #111;
  background-image: paint(awesomePattern);
}

img {
  max-width:100%;
  height:auto;
  max-height:100%;
  }
</style>
