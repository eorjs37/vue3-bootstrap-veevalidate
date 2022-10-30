<template>
  <div class="container mt-3">
    <h1>calendar 진행중</h1>
    <div id="calendar" class="calendar"></div>
  </div>
</template>

<script>
import Calendar from '@toast-ui/calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      const container = document.getElementById('calendar');
      const options = {
        defaultView: 'week',
        timezone: {
          zones: [
            {
              timezoneName: 'Asia/Seoul',
              displayLabel: 'Seoul',
            },
            {
              timezoneName: 'Europe/London',
              displayLabel: 'London',
            },
          ],
        },
        calendars: [
          {
            id: 'cal1',
            name: 'Personal',
            backgroundColor: '#03bd9e',
          },
          {
            id: 'cal2',
            name: 'Work',
            backgroundColor: '#00a9ff',
          },
        ],
      };

      const calendar = new Calendar(container, options);
    });
  },
};
</script>

<style lang="scss" scoped>
.calendar {
  height: 600px;
}
</style>
