<template>
  <div class="container mt-3">
    <h1>Grid</h1>
    <div class="text-right">
      <b-button type="button" variant="primary" @click="addData">데이터 추가</b-button>
    </div>
    <div id="grid" class="grid"></div>
  </div>
  <ModalVue :visible="modalShow" @closeModal="onCloseModal"></ModalVue>
</template>

<script>
import Grid from 'tui-grid';
import 'tui-grid/dist/tui-grid.css';
import { onMounted, ref } from 'vue';
import ModalVue from '@/components/Modal.vue';
import { INSERT, NORMAL, UPDATED } from '@/utils/rowType';
var gridInstance = null;

class CustomStateRenderer {
  constructor(props) {
    const el = document.createElement('img');

    this.el = el;

    const { rowKey } = props;
    const rowType = gridInstance.getValue(rowKey, 'rowType');
    if (rowType === INSERT) {
      el.classList.add('state-img');
      el.classList.add('insert-img');
    }
  }

  getElement() {
    return this.el;
  }

  setModify(path) {
    this.el.src = path;
  }

  render(props) {
    this.el.value = String(props.value);
  }
}

class CustomButtonRenderer {
  constructor(props) {
    const el = document.createElement('button');
    const { rowKey } = props;
    const { func } = props.columnInfo.renderer.options;

    el.setAttribute('hidden', true);
    el.textContent = '저장';
    el.classList.add('cell-btn');

    el.addEventListener('click', _ => {
      const rowType = gridInstance.getValue(rowKey, 'rowType');

      if (rowType === INSERT) {
        alert('저장 되었습니다.');
        func(rowKey, NORMAL);
      } else if (rowType === UPDATED) {
        alert('저장 되었습니다.');
        func(rowKey, NORMAL);
      } else {
        alert('저장할 내용이 없습니다.');
      }
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
          width: 40,
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
              modalShows: modalShow,
              func: setRowType,
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
        rowType: NORMAL,
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
        rowType: NORMAL,
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
        rowType: NORMAL,
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
        rowType: NORMAL,
      },
    ]); // Call API of instance's public method

    Grid.applyTheme('clean', {
      cell: {
        normal: {
          border: '#FF7F50',
        },
      },
    }); // Call API of static method

    setBorderCss();

    //드래그 이벤트 감시
    dragEvent();

    //grid after change
    gridAfterChange();
  };

  /**
   * @description : 데이터 추가
   */
  const addData = () => {
    const rowData = gridInstance.getData();
    const maxRowNum = rowData.length > 0 ? Math.max(...rowData.map(gridItem => gridItem.rowNum)) + 1 : 0;
    gridInstance.appendRows([
      {
        isModify: false,
        rowNum: maxRowNum,
        name: 'Beautiful Lies',
        artist: 'Birdy',
        release: '2016.03.26',
        genre: 'Pop',
        order: maxRowNum,
        modify: true,
        rowType: INSERT,
      },
    ]);

    setBorderCss();
  };

  /**
   * @description : setBorderCss
   */
  const setBorderCss = () => {
    gridInstance.getData().forEach((_, gridIndex) => {
      gridInstance.addCellClassName(gridIndex, 'isModify', 'border');
      gridInstance.addCellClassName(gridIndex, 'rowNum', 'border');
      gridInstance.addCellClassName(gridIndex, 'name', 'border');
      gridInstance.addCellClassName(gridIndex, 'artist', 'border');
      gridInstance.addCellClassName(gridIndex, 'release', 'border');
      gridInstance.addCellClassName(gridIndex, 'genre', 'border');
      gridInstance.addCellClassName(gridIndex, 'modify', 'border');
    });
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
      const { changes } = evt;
      if (changes.length > 0) {
        const { columnName, prevValue, rowKey, value } = changes[0];

        if (prevValue !== value) {
          if (columnName !== 'isModify' && columnName !== 'rowType') {
            // setModify(rowKey, true);
            setRowType(rowKey, UPDATED);
          }
        }
      }
    });
  };

  const setModify = (rowKey, value = false) => {};

  const setRowType = (rowKey, type = NORMAL) => {
    gridInstance.setValue(rowKey, 'rowType', type);
    const el = gridInstance.getElement(rowKey, 'isModify');
    const ele = gridInstance.getElement(rowKey, 'modify');

    const child = el.childNodes;
    const childeren = ele.childNodes;

    if (type === NORMAL) {
      child[0].classList.remove('state-img');
      child[0].classList.remove('modify-img');
      child[0].classList.remove('insert-img');
      childeren[0].setAttribute('hidden', true);
      //버튼 제거
    } else if (type === INSERT) {
      child[0].classList.add('state-img');
      child[0].classList.add('insert-img');

      //버튼 추가
    } else if (type === UPDATED) {
      child[0].classList.add('state-img');
      child[0].classList.add('modify-img');
      childeren[0].removeAttribute('hidden');
      //버튼 추가
    }
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

    modalShow,
    onCloseModal,
    setRowType,
  };
};

export default {
  components: {
    ModalVue,
  },
  setup() {
    const { gridInstance, instancdGrid, addData, modalShow, onCloseModal } = gridObj();

    onMounted(() => {
      const gridEle = document.querySelector('#grid');

      if (gridEle) {
        const count = gridEle.childElementCount;
        if (count > 1) {
          alert('2개 이상');
          document.querySelector('#grid').childNodes[0].remove();
        }
      }
      instancdGrid();
    });

    return {
      gridInstance,
      addData,
      modalShow,
      onCloseModal,
      INSERT,
      NORMAL,
      UPDATED,
    };
  },
};
</script>

<style lang="scss">
.state-img {
  width: 16px;
  height: 16px;
  background-size: 16px 16px !important;
  border: none !important;
}

.modify-img {
  background: url('~@/assets/images/grid/edit.png');
}

.insert-img {
  background: url('~@/assets/images/grid/plus.png');
}
</style>

<style lang="scss" scoped>
.grid {
  margin-top: 10px;
}

.border {
  border: 1px solid #000;
}
</style>
