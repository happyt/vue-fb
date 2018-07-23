<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Error - page not found</h1>
        <div id='three'></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const THREE = require('three')

export default {

  methods: {
    init: function () {
      var scene = new THREE.Scene()
      var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

      var renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      var threeWin = document.getElementById('three')
      threeWin.appendChild(this.renderer.domElement)

      var geometry = new THREE.BoxGeometry(1, 1, 1)
      var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      var cube = new THREE.Mesh(geometry, material)
      scene.add(cube)

      camera.position.z = 5
    }
  },
  mounted () {
    this.init()
    // this.animate()
  }
}
</script>
