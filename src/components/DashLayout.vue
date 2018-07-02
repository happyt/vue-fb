<template>
<v-container fluid>
    <div  class="grid-container">
        <div class="grid-row1">
            <div class="grid-row1a">
                <div class="red white--text">TOP MESSAGES</div>
                <div class="grid-row1a-cols">
                    <div class="white"><my-chart /></div>
                    <div class="white"><my-chart /></div>
                    <div class="white"><my-bubble-chart /></div>
                </div>
                
            </div>
            <div class="blue">xxx</div>
        </div>
        <div class="grid-row2-cols">
            <div class="pink">pink</div>
            <div class="yellow">yellow</div>
        </div>
        <div class="green">Green</div>
    </div>
    <v-footer class="footing" color="info">
        <v-flex xs12 class="text-xs-center white--text">
            <div>Footy</div>
      </v-flex>
    </v-footer>
</v-container>
</template>

<script>

import PlaceCard from './PlaceCard'
import MyChart from './Charts/MyChart'
import MyLine from './Charts/MyLine'
import MyBubble from './Charts/MyBubble'
import MyDoughnut from './Charts/MyDoughnut'
import MyPie from './Charts/MyPie'

export default {
  components: {
    'place-card': PlaceCard,
    'my-chart': MyChart,
    'my-line-chart': MyLine,
    'my-bubble-chart': MyBubble,
    'my-doughnut-chart': MyDoughnut,
    'my-pie-chart': MyPie
  },
  data () {
    return {
      lorem: `Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum`
    }
  },
  methods: {
    async doSomething () {
    }
  }
}
</script>
<style>
.footing {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 200px;
    width: 100%;
    overflow: hidden;
}
.grid-container {
  display: grid;
  height: 88vh;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 3fr 1fr;
  grid-template-areas: "." "." ".";
}
.grid-row1 {
  display: grid;
  height: 100%;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". .";
}
.grid-row1a {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr;
  grid-template-areas: "." ".";
}
.grid-row1a-cols {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". .";
}
.grid-row2-cols {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". .";
}
</style>
