<template>
  <div class="container mt-3">
    <h1>Excel Grid</h1>
    <Excel @parsingJson="onParsingJson"></Excel>
    <div id="grid" class="grid mt-35px"></div>
  </div>
</template>

<script>
import Grid from 'tui-grid';
import 'tui-grid/dist/tui-grid.css';
import Excel from '@/components/Excel.vue';
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
var excelGridInstance = null;
const gridObj = () => {
  /**
   * @description : Grid 생성
   */
  const instancdGrid = () => {
    excelGridInstance = new Grid({
      el: document.getElementById('grid'), // Container element
      scrollX: true,
      scrollY: true,
      draggable: false,
      columns: [
        {
          header: 'No',
          name: 'rowNum',
          align: 'center',
          width: 80,
        },
        {
          header: 'Name',
          name: 'name',
          editor: 'text',
          align: 'center',
          width: 150,
        },
        {
          header: 'Artist',
          name: 'artist',
          editor: 'text',
          align: 'center',
        },
        {
          header: 'Release',
          name: 'release',
          align: 'center',
        },
      ],
      bodyHeight: 500,
      columnOptions: {
        minWidth: 100,
        resizable: true,
      },
      data: [],
    });

    Grid.applyTheme('clean', {
      cell: {
        normal: {
          border: '#FF7F50',
        },
      },
    }); // Call API of static method
  };

  /**
   * @description : 컬럼 세팅
   * @param columns : 컬럼 배열
   */
  const setColumns = columns => {
    excelGridInstance.setColumns(columns);
  };

  /**
   * @description : 데이터 세팅
   * @param rowData : 데이터 배열
   */
  const setRowData = rowData => {
    excelGridInstance.resetData(rowData);
  };

  const getGridInstance = () => {
    return excelGridInstance;
  };

  return {
    instancdGrid,
    getGridInstance,
    setColumns,
    setRowData,
  };
};

export default {
  components: {
    Excel,
  },
  setup() {
    const excelData = ref([]);
    const onParsingJson = array => {
      if (array.length > 0) {
        const columns = Object.keys(array[0]);
        const arrayColumn = [];

        columns.forEach(columnItem => {
          arrayColumn.push({
            header: columnItem,
            name: columnItem,
            align: 'center',
            editor: 'text',
            minWidth: 150,
          });
        });

        setColumns(arrayColumn);

        //데이터 세팅
        setRowData(array);
      }
    };
    const { instancdGrid, setColumns, setRowData } = gridObj();

    onMounted(() => {
      instancdGrid();
    });

    return {
      excelData,
      onParsingJson,
    };
  },
};
</script>

<style lang="scss" scoped>
.grid {
  margin-top: 10px;
}

.border {
  border: 1px solid #000;
}
</style>
