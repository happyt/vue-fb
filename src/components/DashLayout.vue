<template>
<v-container fluid>
    <div  class="grid-container">
        <div class="grid-row1">
            <div class="grid-row1a">
                <div class="red white--text">TOP MESSAGES</div>
                <div class="grid-row1a-cols">
                    <div class="white"><my-doughnut-chart /></div>
                    <div class="white"><pie-chart :data="chartData"></pie-chart></div>
                    <div class="white"><my-bubble-chart /></div>
                </div>
                
            </div>
            <div class="blue"><place-card /></div>
        </div>
        <div class="grid-row2-cols">
            <div class="white">
              <column-chart :data="bardata"></column-chart>
            </div>
            <div class="yellow">yellow</div>
        </div>
        <div class="green">
          xxxx
        </div>
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
import MyBar from './Charts/MyBar'
import MyLine from './Charts/MyLine'
import MyBubble from './Charts/MyBubble'
import MyDoughnut from './Charts/MyDoughnut'
import MyPie from './Charts/MyPie'

export default {
  components: {
    'place-card': PlaceCard,
    'my-bar-chart': MyBar,
    'my-line-chart': MyLine,
    'my-bubble-chart': MyBubble,
    'my-doughnut-chart': MyDoughnut,
    'my-pie-chart': MyPie
  },
  data () {
    return {
      lorem: `Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum`,
      chartData: [['Jan', 44], ['Feb', 27], ['Mar', 60], ['Apr', 55], ['May', 37], ['Jun', 40], ['Jul', 69], ['Aug', 33], ['Sept', 76], ['Oct', 90], ['Nov', 34], ['Dec', 22]],
      bardata: [
      ['a', 12], ['b', 23], ['c', 34], ['d', 34], ['e', 45], ['f', 12], ['g', 23], ['h', 13],
      ['i', 12], ['j', 23], ['k', 34], ['l', 34], ['m', 45], ['n', 12], ['o', 23], ['p', 13],
      ['q', 12], ['r', 23], ['s', 34], ['t', 34], ['u', 45], ['v', 12], ['w', 23], ['x', 13],
      ['y', 12], ['z', 23], ['1', 34], ['2', 34], ['3', 45], ['4', 12], ['5', 23], ['6', 13]
      ]
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
