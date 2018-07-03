
<script>
import { Bubble } from 'vue-chartjs'

export default {
  extends: Bubble,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Random hits',
          backgroundColor: '#f800f9',
          borderColor: '#ffffff',
          pointStyle: 'circle',
          data: [
            { x: 21, y: 31, r: 53 },
            { x: 11, y: 12, r: 35 },
            { x: 34, y: 4, r: 60 },
            { x: 40, y: 24, r: 76 },
            { x: 34, y: 4, r: 56 },
            { x: 15, y: 17, r: 13 }
          ]
        }, {
          label: 'Huge hits',
          backgroundColor: '#f85544',
          borderColor: '#ffffff',
          pointStyle: 'circle',
          data: [
            { x: 31, y: 34, r: 43 },
            { x: 41, y: 22, r: 33 },
            { x: 24, y: 44, r: 20 },
            { x: 10, y: 28, r: 56 },
            { x: 4, y: 14, r: 18 },
            { x: 23, y: 27, r: 13 }
          ]
        }
      ]
    })
  },
  data () {
    return {

    }
  }
}
</script>
