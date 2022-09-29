<template>
  <div class="page">
    <nav aria-label="Page navigation example">
      <ul class="pagination" :class="alignment">
        <li class="page-item cursor" @click="prevPaging"><a class="page-link">Previous</a></li>

        <li
          v-for="item in page_range"
          :key="'paging' + item"
          class="page-item cursor"
          :class="page_number === item ? 'active' : ''"
          @click="
            page_number = item;
            movePaging();
          ">
          <a class="page-link">{{ item }}</a>
        </li>
        <li class="page-item cursor" @click="nextPaging"><a class="page-link">Next</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { onMounted, watch } from '@vue/runtime-core';
import { notify } from '@kyvg/vue3-notification';

/* 페이징 처리 */
const pageObj = (props, context) => {
  const page_number = ref(1);
  const totalpaging = ref(5);
  const page_range = ref([]);

  const prevPaging = () => {
    if (page_number.value === 1) {
      notify({
        type: 'warn',
        title: '경고',
        text: '첫번째 페이지 입니다.',
      });
      return false;
    }
    page_number.value--;

    if (page_number.value % props.pagingrange === 0) {
      page_range.value = prevPaging();
    }

    movePaging();
  };

  const nextPaging = () => {
    console.log('nextPaging');
    if (totalpaging.value <= page_number.value) {
      notify({
        type: 'warn',
        title: '경고',
        text: '마지막페이지 입니다.',
      });
      return false;
    }
    page_number.value++;

    if (page_number.value % props.pagingrange === 1) {
      page_range.value = nextPaging();
    }

    movePaging();
  };

  const movePaging = () => {
    context.emit('onPaging', page_number);
  };

  const nextRange = () => {
    const newRange = Array.from(new Array(props.pagingrange), (_, i) => page_number.value + i);
    return newRange.filter(item => item <= totalpaging.value);
  };

  const prevRange = () => {
    const newRange = Array.from(new Array(props.pagingrange), (_, i) => page_number.value - i);
    return newRange.sort((a, b) => a - b);
  };

  return {
    page_number,
    totalpaging,
    page_range,
    prevPaging,
    nextPaging,
    nextRange,
    prevRange,
    movePaging,
  };
};

export default {
  name: 'Paging',
  props: {
    //전체 데이터
    totaldata: {
      type: Number,
      required: true,
      default: 1,
    },
    //보여주고 싶은 데이터 개수
    pagingdata: {
      type: Number,
      required: true,
      default: 50,
    },
    //보여주고 싶은 페이징 단위
    pagingrange: {
      type: Number,
      required: true,
      default: 5,
    },
    //페이징 정렬(중앙,왼쪽,오른쪽)
    alignment: {
      type: String,
      required: false,
      default: 'center',
    },
  },
  emits: ['onPaging'],

  setup(props, context) {
    const { page_number, totalpaging, page_range, prevPaging, nextPaging, nextRange, prevRange, movePaging } = pageObj(props, context);

    watch(
      () => props.totaldata,
      cur => {
        totalpaging.value = Math.ceil(cur / 5);
        if (totalpaging.value === 0) {
          page_range.value = [1];
          return false;
        }
        page_range.value = nextRange();
      }
    );

    onMounted(() => {
      console.log('Paging onMounted');
      totalpaging.value = Math.ceil(props.totaldata / props.pagingdata);
      page_range.value = nextRange();
    });

    return {
      page_number,
      totalpaging,
      page_range,
      prevPaging,
      nextPaging,
      movePaging,
    };
  },
};
</script>

<style lang="scss" scoped>
.page {
  .cursor {
    cursor: pointer;
  }

  .center {
    justify-content: center;
  }

  .left {
    justify-content: left;
  }

  .right {
    justify-content: right;
  }
}
</style>
