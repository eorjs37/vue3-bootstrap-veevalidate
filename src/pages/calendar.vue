<template>
  <div class="container mt-3">
    <div>
      <button class="calendar-button today-button" @click="funcSetToday">TODAY</button>
      <button class="calendar-button narrow-button ml-3" @click="funcPrevMonth">&lt;</button>
      <button class="calendar-button narrow-button" @click="funcNextMonth">&gt;</button>
      <span class="calendar-date"> {{ compYyyyMm }} </span>
    </div>
    <div id="calendar" class="calendar mt-3"></div>
  </div>
</template>

<script>
import Calendar from '@toast-ui/calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import { computed, onMounted, ref } from 'vue';
import { COLOR1, COLOR2 } from '@/utils/calendarColor';
export default {
  setup() {
    let calendar = ref(null);
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

      calendar.value = new Calendar(container, options);

      calendar.value.setTheme({
        common: {
          gridSelection: {
            backgroundColor: 'inherit',
            border: 'none',
          },
        },
      });

      calendar.value.createEvents([
        {
          id: '1',
          calendarId: '1',
          title: 'my event',
          dueDateClass: '',
          start: '2023-01-18T17:30:00+09:00',
          end: '2023-01-18T22:30:00+09:00',
          backgroundColor: COLOR2.BG,
          color: COLOR2.TEXT,
          borderColor: COLOR2.BG,
        },
        {
          id: '2',
          calendarId: '2',
          title: 'second event',
          dueDateClass: '',
          start: '2023-01-18T17:30:00+09:00',
          end: '2023-01-19T17:31:00+09:00',
          backgroundColor: COLOR1.BG,
          color: COLOR1.TEXT,
          borderColor: COLOR1.BG,
        },
      ]);
    });

    /**
     * @description :이전달 이동
     */
    const funcPrevMonth = () => {
      calendar.value.prev();
    };

    /**
     * @description :다음달 이동
     */
    const funcNextMonth = () => {
      calendar.value.next();
    };

    /**
     * @description :오늘날짜 세팅
     */
    const funcSetToday = () => {
      calendar.value.today();
    };

    const compYyyyMm = computed(() => {
      if (calendar.value) {
        const { d } = calendar.value.getDate();
      }
      return '2023.03';
    });

    return {
      calendar,
      funcNextMonth,
      funcPrevMonth,
      funcSetToday,
      compYyyyMm,
    };
  },
};
</script>

<style lang="scss" scoped>
.calendar {
  height: 600px;
}

.calendar-button {
  background-color: #fff;
  font-size: 14px;
  border: 2px solid #ddd;
  padding: 5px 12px;
  margin-right: 10px;
}

.today-button {
  border-radius: 25px;
}

.narrow-button {
  border-radius: 25px;
}

.calendar-date {
  font-size: 17px;
  line-height: 17px;
}
</style>
