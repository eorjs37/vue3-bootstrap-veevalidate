<template>
  <div class="table-responsive-md">
    <table class="table carrot-table" :id="tableId">
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
        <template v-if="compBodyData.length > 0 && !loading">
          <tr v-for="(rowItem, index) in compBodyData" :key="'rowItem' + index">
            <td v-if="isCheckBox" class="txt-center carrot-row">
              <input type="checkbox" class="checkbox" v-model="rowItem.isCheck" @click="addSelectData(rowItem)" />
              <label for="cb1"></label>
            </td>
            <td
              v-for="(headitem, index) in tabledata.head"
              :key="'body' + index"
              @click="rowSelected(rowItem)"
              class="carrot-row"
              :id="headitem.headkey">
              <slot :name="headitem.headkey" :row="rowItem">
                {{ rowItem[headitem.headkey] }}
              </slot>
            </td>
          </tr>
        </template>
        <template v-else-if="loading">
          <tr>
            <td colspan="99" class="txt-center">
              <font-awesome-icon icon="fa-solid fa-spinner" spin />
            </td>
          </tr>
        </template>
        <tr v-else-if="compBodyData.length === 0">
          <td colspan="99" class="txt-center carrot-row">검색결과가 없습니다</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from '@vue/reactivity';
import { computed, onMounted, watch } from '@vue/runtime-core';
import _ from 'lodash';
/**
 * @description : 테이블 객체
 */
const talbeObj = (props, context) => {
  const allChecked = ref(false);
  const selectItem = reactive([]);
  const { tabledata: tableList } = toRefs(props);

  const rowSelected = item => {
    context.emit('rowselected', item);
  };

  const returnSelectItem = () => {
    return selectItem;
  };

  const addSelectData = bodyItem => {
    bodyItem.isCheck = !bodyItem.isCheck;
    if (bodyItem['isCheck']) {
      selectItem.push(bodyItem);
    } else {
      const idx = selectItem.findIndex(find => find['id'] === bodyItem['id']);
      if (idx > -1) {
        selectItem.splice(idx, 1);
      }
    }
  };

  const compBodyData = computed(() => {
    allChecked.value = false;
    selectItem.length = 0;
    const copyData = _.cloneDeep(tableList.value.body);

    copyData.forEach(bodyItem => {
      bodyItem['isCheck'] = false;
    });

    return copyData;
  });

  return {
    tableList,
    allChecked,
    selectItem,
    returnSelectItem,
    rowSelected,
    addSelectData,
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
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    tableId: {
      type: String,
      required: false,
      default: '',
    },
  },
  emits: ['rowselected'],
  setup(props, context) {
    const { tableList, allChecked, compBodyData, rowSelected, returnSelectItem, addSelectData, selectItem } = talbeObj(props, context);

    onMounted(() => {});

    watch(
      () => allChecked.value,
      cur => {
        compBodyData.value.forEach(bodyItem => {
          bodyItem['isCheck'] = cur;
          if (bodyItem['isCheck']) {
            selectItem.push(bodyItem);
          } else {
            const idx = selectItem.findIndex(find => find['id'] === bodyItem['id']);
            if (idx > -1) {
              selectItem.splice(idx, 1);
            }
          }
        });
      }
    );

    return {
      allChecked,
      rowSelected,
      returnSelectItem,
      addSelectData,
      selectItem,
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
