<template>
  <div class="container mt-3">
    <Table :tabledata="tableData" @rowselected="selectItem"></Table>

    <div class="txt-center">
      <Paging :totaldata="10" :pagingdata="5" :pagingrange="5"></Paging>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import mockTable from '@/assets/mock/mock.json';
import { onMounted } from '@vue/runtime-core';
export default {
  setup() {
    const tableData = reactive({
      head: [
        { headkey: 'Company', colname: '회사명' },
        { headkey: 'Name', colname: '이름' },
        { headkey: 'Contury', colname: '국가' },
      ],
      body: [],
    });

    const selectItem = item => {
      console.log('선택된 아이템 : ', item);
    };

    const mockApi = index => {
      tableData.body = mockTable[index - 1];
    };

    onMounted(() => {
      mockApi(1);
    });

    return {
      tableData,
      selectItem,
    };
  },
};
</script>

<style></style>
