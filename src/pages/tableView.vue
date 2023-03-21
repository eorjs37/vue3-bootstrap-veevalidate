<template>
  <h1>table view</h1>
  <Table :tabledata="tableData" :isCheckBox="false" @rowselected="onSelectRow">
    <!--##### Head #####-->
    <template #Headid> 커스텀ID </template>
    <!--##### Body #####-->
    <template #Bodyid="{ row }"> {{ row.id }}번 </template>
  </Table>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    const tableData = reactive({
      head: [
        {
          headkey: 'id',
          colname: 'ID',
        },
        {
          headkey: 'Company',
          colname: '회사명',
        },
        {
          headkey: 'Contury',
          colname: '국가',
        },
        {
          headkey: 'Name',
          colname: '이름',
        },
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
          Company: 'Alfreds Futterkiste',
          Name: 'Maria Anders',
          Contury: 'Germany',
        },
      ],
    });

    const onSelectRow = item => {
      //emit을 통해서 선택된 row return
      console.log(item);
    };
    return {
      tableData,
      onSelectRow,
    };
  },
};
</script>

<style></style>
