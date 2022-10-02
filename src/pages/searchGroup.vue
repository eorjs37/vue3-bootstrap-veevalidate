<template>
  <div class="container mt-3 search-container">
    <h1 class="title">검색조건</h1>
    <div class="search-box">
      <b-row>
        <b-col cols="6">
          <b-row>
            <b-col cols="2" class="label">이름 </b-col>
            <b-col cols="10"> <b-form-input class="search-input" placeholder="Enter your name"></b-form-input></b-col>
          </b-row>
        </b-col>

        <b-col cols="6">
          <b-row>
            <b-col cols="2" class="label">국가</b-col>
            <b-col cols="10">
              <b-form-select class="search-selectbox" :options="options"></b-form-select>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1" class="label">상태</b-col>
        <b-col cols="11" class="label">
          <b-form-checkbox inline v-for="option in checkboxOptions" :key="option.value" :value="option.value">
            {{ option.text }}
          </b-form-checkbox>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="1" class="label">재직상태</b-col>
        <b-col cols="11" class="label">
          <b-form-radio inline v-for="option in radioOptions" :key="option.value" :value="option.value" v-model="selected">
            {{ option.text }}
          </b-form-radio>
        </b-col>
      </b-row>
    </div>

    <div class="txt-right mt-3">
      <b-button variant="info" class="search-button">검색</b-button>
    </div>

    <div class="mt-3">
      <Table :tabledata="tableData" :loading="onLoading" :tableId="'carrot-sample1'"></Table>
    </div>

    <div class="right mt-3">
      <Paging :totaldata="30" :pagingdata="5" :pagingrange="5"></Paging>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import mock from '@/assets/mock/mock.json';
const sampleData = () => {
  const onLoading = ref(false);
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

  return {
    tableData,
    onLoading,
  };
};

export default {
  setup() {
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

    const { tableData, onLoading } = sampleData();

    onMounted(() => {
      onLoading.value = true;
      setTimeout(() => {
        console.log(mock);
        tableData.body = mock[0];
        onLoading.value = false;
      }, 2000);
    });

    return {
      options,
      checkboxOptions,
      radioOptions,
      selected,
      tableData,
      onLoading,
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
