<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Welcome to SPA Test App</h1>
        <section id="screen"></section>
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

CSS.paintWorklet.addModule('http://localhost:8080/static/scripts/patternWorklet.js')

export default {
  mounted () {
    window.addEventListener('keyup', (event) => {
    // if the key is escape
      if (event.keyCode === 27) {
        // due to `=>` this is the this you're expecting
        alert('now')
      }
    })
  }
}
</script>
<style>
#screen {
  --star-colour: rgb(45, 134, 82, .3); /* col val | default is white */
  --star-scale: 0.3; /* int | default is 1 */
  --ball-colour: rgb(233, 93, 13); 
  margin: 0 auto;
  box-sizing: border-box;
  width: calc(50vw);
  height: calc(10vh);
  background-color: rgb(134, 243, 192);
  background-image: paint(awesomePattern);
}

img {
  max-width:100%;
  height:auto;
  max-height:100%;
  }
</style>
