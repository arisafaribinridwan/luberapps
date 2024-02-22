<template>
  <div>
    <canvas id="myChart" class="!h-36 !w-full"></canvas>
  </div>
</template>

<script setup>
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';

let dataLabel = ['Jan/24', 'Feb/24', 'Mar/24', 'Apr/24', 'May/24', 'Jun/24']
let datasetData = [20, 25, 19, 18, 23, 28]
let date = new Date()

let year = date.toLocaleString('default', { year: '2-digit' })
let month = date.toLocaleString('default', { month: 'short' })



console.log(`${month}/${year}`)
onMounted(() => {
  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dataLabel,
      datasets: [{
        label: 'Pemasukan',
        data: datasetData,
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: '#07F',
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }

      },
      scales: {
        x: {
          display: true,
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          display: false,

        }
      }
    }
  });
})
</script>

<style lang="scss" scoped></style>