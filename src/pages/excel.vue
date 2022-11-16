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
      scrollX: false,
      scrollY: false,
      draggable: false,
      columns: [
        {
          header: 'rowNum',
          name: 'rowNum',
          align: 'center',
        },
        {
          header: 'Name',
          name: 'name',
          editor: 'text',
          align: 'center',
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
      data: [],
    });
  };

  const getGridInstance = () => {
    return excelGridInstance;
  };

  return {
    instancdGrid,
    getGridInstance,
  };
};

export default {
  components: {
    Excel,
  },
  setup() {
    const excelData = ref([]);
    const onParsingJson = array => {
      console.log(array);
    };
    const { instancdGrid } = gridObj();

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
