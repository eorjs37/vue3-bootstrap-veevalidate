<template>
  <div class="table-responsive-md">
    <table class="table carrot-table">
      <!-- ##################### thead ##################### -->
      <thead class="thead-dark">
        <tr>
          <th v-if="isCheckBox" class="txt-center">
            <input type="checkbox" class="checkbox" v-model="allChecked" />
            <label for="cb1"></label>
          </th>
          <template v-for="(item, index) in tabledata.head" :key="'head' + index">
            <slot :name="'Head' + item.headkey">
              <th class="txt-center">
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
            <td v-if="isCheckBox" class="txt-center carrot-row">
              <input type="checkbox" class="checkbox" v-model="rowItem.isCheck" @click="rowItem.isCheck = !rowItem.isCheck" />
              <label for="cb1"></label>
            </td>
            <td v-for="(headitem, index) in tabledata.head" :key="'head' + index" @click="rowSelected(rowItem)" class="carrot-row">
              <slot :name="headitem.headkey" :row="rowItem">
                {{ rowItem[headitem.headkey] }}
              </slot>
            </td>
          </tr>
        </template>
        <tr v-if="compBodyData.length === 0">
          <td colspan="99" class="txt-center carrot-row">검색결과가 없습니다</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, toRefs } from '@vue/reactivity';
import { computed, onMounted, watch } from '@vue/runtime-core';
import _ from 'lodash';
/**
 * @description : 테이블 객체
 */
const talbeObj = (props, context) => {
  const allChecked = ref(false);
  const selectItem = [];
  const { tabledata: tableList } = toRefs(props);

  const rowSelected = item => {
    context.emit('rowselected', item);
  };

  const compBodyData = computed(() => {
    console.log('compBodyData');
    const copyData = _.cloneDeep(tableList.value.body);

    return copyData;
  });

  return {
    tableList,
    allChecked,
    rowSelected,
    compBodyData,
  };
};
export default {
  props: {
    isCheckBox: {
      type: Boolean,
      required: false,
      default: true,
    },
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
    const { tableList, allChecked, compBodyData, rowSelected } = talbeObj(props, context);

    onMounted(() => {});

    watch(
      () => allChecked.value,
      cur => {
        tableList.value.body.forEach(tableItem => {
          tableItem['isCheck'] = cur;
        });
      }
    );

    return {
      allChecked,
      rowSelected,
      compBodyData,
    };
  },
};
</script>

<style lang="scss" scoped>
.carrot-table {
  thead > tr {
    background-color: #f8f9fa;
    border-bottom: 2px solid #dee2e6;
  }

  thead > tr > th {
    border-bottom-width: 2px;
    border: 1px solid #dee2e6;
  }

  tbody > tr:hover {
    background-color: #dee2e6;
  }

  .carrot-row {
    border: 1px solid #dee2e6;
  }
}
</style>
