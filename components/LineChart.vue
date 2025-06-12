<script setup lang="ts">
import { Chart, registerables } from 'chart.js'
import { LineChart } from 'vue-chart-3'
import { computed } from 'vue'

Chart.register(...registerables)

const props = defineProps({
  datasets: {
    type: Array as () => number[],
    required: true
  },
  increase: {
    type: Boolean,
    required: true
  }
})

const chartData = computed(() => ({
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
  datasets: [{
    label: 'Performance',
    data: props.datasets,
    borderColor: props.increase ? '#28C165' : '#F4574D',
    backgroundColor: props.increase ? 'rgba(40, 193, 101, 0.1)' : 'rgba(244, 87, 77, 0.1)',
    tension: 0.4,
    fill: true
  }]
}))

const chartOptions = computed(() => ({
  responsive: true,
  plugins: { legend: { display: false } },
  scales: { x: { display: false }, y: { display: false } },
  elements: { point: { radius: 0 } }
}))
</script>

<template>
  <LineChart :chart-data="chartData" :options="chartOptions" class="w-28 h-12 -mx-2" />
</template>
