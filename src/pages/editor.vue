<template>
  <h1>chart</h1>
  <div id="chart"></div>
</template>

<script>
import { LineChart } from '@toast-ui/chart';
import { onMounted } from 'vue';
export default {
  components: {},
  setup() {
    onMounted(() => {
      const el = document.getElementById('chart');
      const data = {
        categories: ['표1', '표2', '표3'],
        series: [
          { name: '1인', data: [1, 2, 3] },
          { name: '2인', data: [4, 5, 6] },
          { name: '3인', data: [7, 8, 9] },
        ],
      };
      const options = {
        chart: { width: 700, height: 400 },
      };
      new LineChart({ el, data, options });
    });

    return {};
  },
};
</script>

<style></style>
