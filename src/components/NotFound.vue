<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Oops - we cannot find that page!</h1>
        <div id='three'>
          <v-btn color="warning" class='black--text' v-on:click.native=clicker>
            Action</v-btn>
          <v-btn color="warning" class='black--text' v-on:click.native=clickStop>
            Stop</v-btn>
        </div>
      </v-flex>
    </v-layout>
     
  </v-container>
</template>

<script>
import * as Three from 'three'

export default {
  name: 'ThreeTest',
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      incrX: 0.01,
      incrY: 0.01
    }
  },
  methods: {
    init: function () {
      var container = document.getElementById('three')

      this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10)
      this.camera.position.z = 1

      this.scene = new Three.Scene()

      var geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
      var material = new Three.MeshNormalMaterial()

      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)

      this.renderer = new Three.WebGLRenderer({antialias: true})
      console.log(container.clientWidth, container.clientHeight)
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
    },
    animate: function () {
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += this.incrX
      this.mesh.rotation.y += this.incrY
      this.renderer.render(this.scene, this.camera)
    },
    clicker: function () {
      this.incrX += 0.12
    },
    clickStop: function () {
      this.incrX = 0
    },
    clickLeft: function () {
      console.log('left')
      this.incr -= 0.1
    },
    clickRight: function () {
      console.log('right')
      this.incr += 0.1
    }
  },
  mounted () {
    window.addEventListener('keypress', e => {
      let text = ''
      switch (e.key) {
        case 'w':
          text = 'Forward'
          this.incrY -= 0.1
          break
        case 'a':
          this.clickLeft()
          text = 'Left'
          this.incrX -= 0.1
          break
        case 's':
          text = 'Back'
          this.incrY += 0.1
          break
        case 'd':
          this.clickRight()
          text = 'Right'
          this.incrX += 0.1
          break
        default:
          text = 'What...?'
      }
      console.log(text)
 //     console.log(text, String.fromCharCode(e.keyCode))
    })
    this.init()
    this.animate()
  }
}
</script>
<style>
  canvas {
    border: rgba(255, 0, 0, 0.514);
    border-width: 1em;
    border-radius: 20px;
}
#three {
  width: 50pc;
  height: 30pc;
  margin: auto;
}
</style>
