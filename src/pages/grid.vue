<template>
  <div class="container mt-3">
    <h1>Grid</h1>
    <div class="text-right">
      <b-button type="button" variant="primary">데이터 추가</b-button>
    </div>
    <h1>{{ test }}</h1>
    <div id="grid" class="grid"></div>
  </div>
  <ModalVue :visible="modalShow" @closeModal="onCloseModal"></ModalVue>
</template>

<script>
import Grid from 'tui-grid';
import 'tui-grid/dist/tui-grid.css';
import { onMounted, ref } from 'vue';
import ModalVue from '@/components/Modal.vue';
var gridInstance = null;

class CustomStateRenderer {
  constructor(props) {
    const el = document.createElement('img');

    el.classList.add('modify');
    el.src = require('../assets/images/grid/edit.png');
    this.el = el;
  }

  getElement() {
    return this.el;
  }

  render(props) {
    this.el.value = String(props.value);
  }
}

class CustomButtonRenderer {
  constructor(props) {
    const el = document.createElement('button');

    const { modalShows } = props.columnInfo.renderer.options;

    el.textContent = '수정';
    el.classList.add('cell-btn');

    el.addEventListener('click', ev => {
      alert('click');
      modalShows.value = !modalShows.value;
    });

    this.el = el;
  }

  getElement() {
    return this.el;
  }

  render(props) {
    this.el.value = String(props.value);
  }
}

const gridObj = () => {
  const test = ref(1);
  const modalShow = ref(false);
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
          header: '상태',
          name: 'isModify',
          align: 'center',
          renderer: {
            type: CustomStateRenderer,
          },
        },
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
        {
          header: 'Genre',
          name: 'genre',
          align: 'center',
        },
        {
          header: '저장',
          name: 'modify',
          align: 'center',
          renderer: {
            type: CustomButtonRenderer,
            options: {
              min: 0,
              max: 30,
              test: test,
              modalShows: modalShow,
            },
          },
        },
      ],
      draggable: true,
      data: [],
    });

    gridInstance.resetData([
      {
        isModify: false,
        rowNum: 1,
        name: 'Beautiful Lies',
        artist: 'Birdy',
        release: '2016.03.26',
        genre: 'Pop',
        order: 1,
        modify: true,
      },
      {
        isModify: false,
        rowNum: 2,
        name: 'Beautiful Lies',
        artist: 'Birdy',
        release: '2016.03.26',
        genre: 'Pop',
        order: 2,
        modify: true,
      },
      {
        isModify: false,
        rowNum: 3,
        name: 'Beautiful Lies',
        artist: 'Birdy',
        release: '2016.03.26',
        genre: 'Pop',
        order: 3,
        modify: true,
      },
      {
        isModify: false,
        rowNum: 4,
        name: 'Beautiful Lies',
        artist: 'Birdy',
        release: '2016.03.26',
        genre: 'Pop',
        order: 4,
        modify: true,
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
      gridInstance.addCellClassName(gridIndex, 'isModify', 'border');
      gridInstance.addCellClassName(gridIndex, 'rowNum', 'border');
      gridInstance.addCellClassName(gridIndex, 'name', 'border');
      gridInstance.addCellClassName(gridIndex, 'artist', 'border');
      gridInstance.addCellClassName(gridIndex, 'release', 'border');
      gridInstance.addCellClassName(gridIndex, 'genre', 'border');
      gridInstance.addCellClassName(gridIndex, 'modify', 'border');
    });

    //드래그 이벤트 감시
    dragEvent();

    //grid after change
    gridAfterChange();
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

  /**
   * @description : grid afterChange
   */
  const gridAfterChange = () => {
    gridInstance.on('afterChange', evt => {
      console.log(evt);
      console.log('afterChange');
      const { changes } = evt;
      if (changes.length > 0) {
        console.log(changes[0]['rowKey']);
        gridInstance.setValue(changes[0]['rowKey'], 'isModify', true);
      }
    });
  };

  /**
   * @description : onCloseModal
   */
  const onCloseModal = () => {
    modalShow.value = false;
  };

  return {
    gridInstance,
    instancdGrid,
    addData,
    test,
    modalShow,
    onCloseModal,
  };
};

export default {
  components: {
    ModalVue,
  },
  setup() {
    const { gridInstance, instancdGrid, addData, test, modalShow, onCloseModal } = gridObj();

    onMounted(() => {
      instancdGrid();
    });

    return {
      gridInstance,
      addData,
      test,
      modalShow,
      onCloseModal,
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
