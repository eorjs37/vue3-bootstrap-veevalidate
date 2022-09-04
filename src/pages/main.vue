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
export default {
  setup() {
    const tableData = reactive({
      head: [
        { headkey: 'Company', colname: '회사명' },
        { headkey: 'Name', colname: '이름' },
        { headkey: 'Contury', colname: '국가' },
      ],
      body: [
        {
          id: 1,
          Company: 'Alfreds Futterkiste',
          Name: 'Maria Anders',
          Contury: 'Germany',
        },
        {
          id: 2,
          Company: 'Centro comercial Moctezuma',
          Name: 'Francisco Chang',
          Contury: 'Mexico',
        },
      ],
    });

    const selectItem = item => {
      console.log('선택된 아이템 : ', item);
    };

    return {
      tableData,
      selectItem,
    };
  },
};
</script>

<style></style>
