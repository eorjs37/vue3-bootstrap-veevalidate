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
        defaultView: 'month',
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
        gridSelection: {
          enableDbClick: false,
          enableClick: false,
        },
      };

      const calendar = new Calendar(container, options);

      calendar.setTheme({
        common: {
          gridSelection: {
            backgroundColor: 'inherit',
          },
        },
      });

      calendar.createEvents([
        {
          id: '1',
          calendarId: '1',
          title: 'my event',
          category: 'time',
          dueDateClass: '',
          start: '2023-01-18T22:30:00+09:00',
          end: '2023-01-19T02:30:00+09:00',
        },
        {
          id: '2',
          calendarId: '1',
          title: 'second event',
          category: 'time',
          dueDateClass: '',
          start: '2023-01-18T17:30:00+09:00',
          end: '2023-01-19T17:31:00+09:00',
        },
      ]);
    });
  },
};
</script>

<style lang="scss" scoped>
.calendar {
  height: 600px;
}
</style>
