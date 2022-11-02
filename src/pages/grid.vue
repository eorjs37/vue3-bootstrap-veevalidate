<template>
  <div class="container mt-3">
    <h1>Grid</h1>
    <div class="text-right">
      <b-button type="button" variant="primary">데이터 추가</b-button>
    </div>
    <div id="grid" class="grid"></div>
  </div>
</template>

<script>
import Grid from 'tui-grid';
import 'tui-grid/dist/tui-grid.css';
import { onMounted } from 'vue';

var gridInstance = null;
const gridObj = () => {
  /**
   * @description : Grid 생성
   */
  const instancdGrid = () => {
    gridInstance = new Grid({
      el: document.getElementById('grid'), // Container element
      scrollX: false,
      scrollY: false,
      columns: [
        {
          header: 'rowNum',
          name: 'rowNum',
        },
        {
          header: 'Name',
          name: 'name',
          editor: 'text',
        },
        {
          header: 'Artist',
          name: 'artist',
          editor: 'text',
        },
        {
          header: 'Release',
          name: 'release',
        },
        {
          header: 'Genre',
          name: 'genre',
        },
      ],
      draggable: true,
      data: [],
    });

    gridInstance.resetData([
      {
        rowNum: 1,
        name: 'Beautiful Lies',
        artist: 'Birdy',
        release: '2016.03.26',
        genre: 'Pop',
        order: 1,
      },
      {
        rowNum: 2,
        name: 'Beautiful Lies',
        artist: 'Birdy',
        release: '2016.03.26',
        genre: 'Pop',
        order: 2,
      },
      {
        rowNum: 3,
        name: 'Beautiful Lies',
        artist: 'Birdy',
        release: '2016.03.26',
        genre: 'Pop',
        order: 3,
      },
      {
        rowNum: 4,
        name: 'Beautiful Lies',
        artist: 'Birdy',
        release: '2016.03.26',
        genre: 'Pop',
        order: 4,
      },
    ]); // Call API of instance's public method

    Grid.applyTheme('clean', {
      cell: {
        normal: {
          border: '#FF7F50',
        },
      },
    }); // Call API of static method

    gridInstance.getData().forEach((_, gridIndex) => {
      gridInstance.addCellClassName(gridIndex, 'rowNum', 'border');
      gridInstance.addCellClassName(gridIndex, 'name', 'border');
      gridInstance.addCellClassName(gridIndex, 'artist', 'border');
      gridInstance.addCellClassName(gridIndex, 'release', 'border');
      gridInstance.addCellClassName(gridIndex, 'genre', 'border');
    });

    //드래그 이벤트 감시
    dragEvent();
  };

  /**
   * @description : 데이터 추가
   */
  const addData = () => {
    gridInstance.appendRows([
      {
        name: 'Beautiful Lies',
        artist: 'Birdy',
        release: '2016.03.26',
        genre: 'Pop',
      },
      {
        name: 'Beautiful Lies',
        artist: 'Birdy',
        release: '2016.03.26',
        genre: 'Pop',
      },
      {
        name: 'Beautiful Lies',
        artist: 'Birdy',
        release: '2016.03.26',
        genre: 'Pop',
      },
    ]);
  };

  /**
   * @description : 드래그 이벤트
   */
  const dragEvent = () => {
    gridInstance.on('drop', () => {
      //순서 재세팅
      const array = gridInstance.getData();

      array.forEach((arr, index) => {
        arr.order = index + 1;
      });
    });
  };

  return {
    gridInstance,
    instancdGrid,
    addData,
  };
};

export default {
  setup() {
    const { gridInstance, instancdGrid, addData } = gridObj();
    onMounted(() => {
      instancdGrid();
    });

    return {
      gridInstance,
      addData,
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
