<script>
import {Doughnut} from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted () {
    this.renderChart({
      type: 'doughnut',
      datasets: [{
        label: 'Population',
        backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
        data: [2478, 5267, 734, 784, 433],
        options: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              fontColor: 'red',
              scale: 2
            }
          }
        }
      }],
      labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America']
    })
  }
}
</script>
