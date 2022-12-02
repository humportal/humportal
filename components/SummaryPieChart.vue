<template>
  <div>
    <b-form-group
      class="text-md-right"
      label="Display as"
      label-size="sm"
      >
      <b-radio-group
        size="sm"
        buttons
        button-variant="outline-secondary"
        v-model="display"
        :options="['%', 'Number']">
      </b-radio-group>
    </b-form-group>
    <PieChart
      :data="chartData"
      :options="chartOptions"
      class="pie-chart"></PieChart>
  </div>
</template>

<style scoped>
.pie-chart {
  height: 300px;
}
</style>
<script>

import PieChart from './charts/pie-chart'
export default {
  props: ['labels', 'data'],
  components: {
    PieChart
  },
  data() {
    return {
      display: "%",
      total: 0.0,
      colours: [
        "#1f77b4",
        "#ff7f0e",
        "#2ca02c",
        "#d62728",
        "#9467bd",
        "#8c564b",
        "#e377c2",
        "#7f7f7f",
        "#bcbd22",
        "#17becf"
      ]
    }
  },
  computed: {
    chartOptions() {
      const legend = {
        display: true
      }
      return {
        maintainAspectRatio: false,
        legend: {
          display: true
        },
        scales: null,
        layout: {
          padding: 20
        },
        plugins: {
          datalabels: {
            backgroundColor: function(context) {
              return context.dataset.backgroundColor;
            },
            display: true,
            borderColor: 'white',
            borderRadius: 10,
            borderWidth: 2,
            color: 'white',
            textShadowColor : '#000000',
            textShadowBlur: 2,
            font: {
              weight: 'bold'
            },
            formatter: (value, context) => {
              if (this.display == '%') {
                return `${value}%`
              }
              return value
            }
          }
        }
      }
    },
    chartData() {
      if (this.display == '%') {
        this.total = this.data.reduce((summary, item) => {
          summary += item
          return summary
        }, 0.0)
      }
      return {
        datasets: [
          {
            fill: true,
            data: this.data.map(item => {
              if (this.display == '%') {
                return Math.round(item/this.total*100.0)
              } else {
                return item
              }
            }),
            fill: true,
            backgroundColor: this.colours
          }
        ],
        labels: this.labels
      }
    }
  }
}
</script>
