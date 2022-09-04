<template>
  <div class="table-responsive-md">
    <table class="table carrot-table">
      <!-- ##################### thead ##################### -->
      <thead>
        <tr>
          <template v-for="(item, index) in tabledata.head" :key="'head' + index">
            <slot :name="'Head' + item.headkey">
              <th>
                {{ item.colname }}
              </th>
            </slot>
          </template>
        </tr>
      </thead>
      <!--##################### tbody #####################-->
      <tbody>
        <template v-for="(rowItem, index) in compBodyData" :key="'rowItem' + index">
          <tr>
            <td v-for="(headitem, index) in tabledata.head" :key="'head' + index" @click="rowSelected(rowItem)">
              <slot :name="headitem.headkey" :row="rowItem">
                {{ rowItem[headitem.headkey] }}
              </slot>
            </td>
          </tr>
        </template>
        <tr v-if="compBodyData.length === 0">
          <td colspan="99" class="txt-center">검색결과가 없습니다</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import _ from 'lodash';
/**
 * @description : 테이블 객체
 */
const talbeObj = (props, context) => {
  const bodyData = ref(props.tabledata.body);

  const rowSelected = item => {
    context.emit('rowselected', item);
  };

  const compBodyData = computed(() => {
    const copyData = _.cloneDeep(bodyData.value);
    return copyData;
  });

  return {
    bodyData,
    rowSelected,
    compBodyData,
  };
};
export default {
  props: {
    tabledata: {
      type: Object,
      required: false,
      default() {
        return {
          head: [],
          body: [],
        };
      },
    },
  },
  emits: ['rowselected'],
  setup(props, context) {
    const { bodyData, compBodyData, rowSelected } = talbeObj(props, context);

    return {
      bodyData,
      rowSelected,
      compBodyData,
    };
  },
};
</script>

<style lang="scss" scoped>
.carrot-table {
  thead > tr {
    background-color: #eee;
  }

  tbody > tr:hover {
    background-color: #eee;
  }
}
</style>
