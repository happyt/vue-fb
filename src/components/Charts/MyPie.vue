<script>
import {Pie} from 'vue-chartjs'

export default {
  extends: Pie,
  mounted () {
    this.renderChart({
      type: 'pie',
      data: {
        datasets: [{
          data: [10, 20, 30]
        }],

    // These labels appear in the legend and in the tooltips
        labels: [
          'Red',
          'Yellow',
          'Blue'
        ]
      }
    })
  }
}
</script>
