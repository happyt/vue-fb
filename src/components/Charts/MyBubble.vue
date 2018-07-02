
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
            { x: 21, y: 31, r: 13 },
            { x: 11, y: 12, r: 15 },
            { x: 34, y: 4, r: 6 },
            { x: 5, y: 17, r: 3 }
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
