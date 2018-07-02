<template>
<v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex d-flex>
            <v-card color="white" dark tile flat>
              <v-card-text><my-line-chart/></v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-card color="brown" dark tile flat>
              <v-card-text>{{ lorem }}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm7>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card color="indigo lighten-2" dark tile flat>
              <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row>
              <v-flex v-for="n in 3" :key="n" >
                <v-card color="amber lighten-2" tile flat >
                  <v-card-text><my-bubble-chart/></v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm2 child-flex>
        <v-card color="cyan lighten-2" tile flat>
          <v-card-text><my-chart/></v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm3>
        <v-card color="red lighten-2" dark tile flat>
          <v-card-text><place-card/></v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
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

export default {
  components: {
    'place-card': PlaceCard,
    'my-chart': MyChart,
    'my-line-chart': MyLine,
    'my-bubble-chart': MyBubble
  },
  data () {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
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
</style>
