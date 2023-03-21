<template>
  <h1>table view</h1>
  <div class="txt-right mt-3">
    <b-button variant="success" class="search-button ml-10px" @click="retunrData()">데이터리턴</b-button>
  </div>
  <Table ref="table1" :tabledata="tableData" @rowselected="onSelectRow">
    <!--##### Head #####-->
    <template #Headid> 커스텀ID </template>
    <!--##### Body #####-->
    <template #Bodyid="{ row }"> {{ row.id }}번 </template>
  </Table>
</template>

<script>
import { reactive, ref } from 'vue';
import { notify } from '@kyvg/vue3-notification';
export default {
  setup() {
    const table1 = ref(null);
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

    const retunrData = () => {
      const { returnSelectItem } = table1.value;

      const result = returnSelectItem();

      if (result.length === 0) {
        notify({
          type: 'warn',
          title: '경고',
          text: '데이터를 선택해 주세요.',
        });
        return false;
      } else {
        alert(JSON.stringify(result));
      }
    };

    const onSelectRow = item => {
      //emit을 통해서 선택된 row return
      console.log(item);
    };
    return {
      table1,
      tableData,
      retunrData,
      onSelectRow,
    };
  },
};
</script>

<style></style>
