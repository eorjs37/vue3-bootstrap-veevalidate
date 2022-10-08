<template>
  <div class="container mt-3 search-container">
    <h3 class="title"><font-awesome-icon icon="fa-solid fa-circle-info" /> 설명</h3>
    <div class="information">
      <div>
        <p>
          - 설명을 넣는 부분입니다. <br />
          - 설명을 넣어주세요
        </p>
      </div>
    </div>

    <h3 class="title"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /> 검색</h3>
    <div class="search-box">
      <b-row>
        <b-col cols="6">
          <b-row>
            <b-col cols="2" class="label">이름 </b-col>
            <b-col cols="10"> <b-form-input class="search-input" placeholder="Enter your name" v-model="search.name"></b-form-input></b-col>
          </b-row>
        </b-col>

        <b-col cols="6">
          <b-row>
            <b-col cols="2" class="label">국가</b-col>
            <b-col cols="10">
              <b-form-select class="search-selectbox" :options="compCountryCode" v-model="search.country"></b-form-select>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1" class="label">상태</b-col>
        <b-col cols="11" class="label">
          <b-form-checkbox inline v-for="option in checkboxOptions" :key="option.value" :value="option.value" v-model="search.classStatus">
            {{ option.text }}
          </b-form-checkbox>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1" class="label">재직상태</b-col>
        <b-col cols="11" class="label">
          <b-form-radio inline v-for="option in radioOptions" :key="option.value" :value="option.value" v-model="search.userStatus">
            {{ option.text }}
          </b-form-radio>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="1" class="label">기간</b-col>
        <b-col cols="11" class="label">
          <b-row>
            <b-col cols="6">
              <Datepicker v-model="search.stDate" :enableTimePicker="false" :format="format" />
            </b-col>
            <b-col cols="6">
              <Datepicker v-model="search.endDate" :enableTimePicker="false" :format="format" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>

    <div class="txt-right mt-3">
      <b-button variant="info" class="search-button" @click="onMovePageing(1)">검색</b-button>
      <b-button variant="success" class="search-button ml-10px" @click="retunrData()">데이터리턴</b-button>
    </div>

    <div class="mt-3">
      <Table ref="table1" :tabledata="tableData" :loading="onLoading" :tableId="'carrot-sample1'" @rowselected="onSelectItem"></Table>
    </div>

    <div class="right mt-3" v-show="!onLoading">
      <Paging :totaldata="samplePagingTotal" :pagingdata="5" :pagingrange="5" :setPage="sampleSetPage" @onPagingEvent="onMovePageing"></Paging>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/reactivity';
import { computed, onMounted } from '@vue/runtime-core';
import sampleTableData from '@/assets/mock/table.json';
import { useStore } from 'vuex';
import _ from 'lodash';
import { notify } from '@kyvg/vue3-notification';
const tableObject = () => {
  const onLoading = ref(false);
  const samplePagingTotal = ref(0);
  const sampleSetPage = ref(1);
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
    body: [],
  });

  const onSelectItem = item => {
    alert(JSON.stringify(item));
  };
  const onMovePageing = pagenumber => {
    mockApi(pagenumber);
  };

  const mockApi = number => {
    onLoading.value = true;
    setTimeout(() => {
      const { list, totalData } = sampleTableData;

      tableData.body = list[number - 1];
      samplePagingTotal.value = totalData;
      sampleSetPage.value = number;
      onLoading.value = false;
    }, 1000);
  };
  return {
    tableData,
    onLoading,
    samplePagingTotal,
    sampleSetPage,
    onSelectItem,
    onMovePageing,
  };
};

const searchObject = () => {
  const search = reactive({
    name: '',
    country: '',
    classStatus: [],
    userStatus: '',
    stDate: new Date(),
    endDate: new Date(),
  });

  const format = date => {
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  };

  return {
    search,
    format,
  };
};

export default {
  setup() {
    const store = useStore();
    const options = reactive([
      { value: '', text: '-선택-' },
      { value: 'kor', text: '대한민국' },
      { value: 'amr', text: '미국' },
    ]);

    const checkboxOptions = reactive([
      { text: '수업완료', value: '수업완료' },
      { text: '수업대기', value: '수업대기' },
    ]);

    const radioOptions = reactive([
      { text: '재직중', value: '재직중' },
      { text: '퇴사', value: '퇴사' },
    ]);

    const selected = ref('');
    const table1 = ref(null);

    const { tableData, onLoading, onSelectItem, samplePagingTotal, onMovePageing, sampleSetPage } = tableObject();
    const { search, format } = searchObject();
    const compCountryCode = computed(() => {
      return store.getters['commonCode/getCountryCode'];
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

    onMounted(() => {
      onMovePageing(1);
      console.log(table1.value);
    });

    return {
      options,
      checkboxOptions,
      radioOptions,
      selected,
      table1,
      tableData,
      onLoading,
      onSelectItem,
      onMovePageing,
      samplePagingTotal,
      sampleSetPage,
      search,
      format,
      compCountryCode,
      retunrData,
    };
  },
};
</script>

<style lang="scss">
#carrot-sample1 {
  #id {
    text-align: center;
  }
  #Company {
    text-align: center;
  }
}
</style>
