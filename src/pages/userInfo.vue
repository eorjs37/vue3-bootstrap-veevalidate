<template>
  <div class="container mt-3">
    <h3 class="title"><font-awesome-icon icon="fa-solid fa-circle-info" /> 설명</h3>
    <div class="information">
      <div>
        <p>- 사용자 정보 보여주는 화면이며 - 진행중</p>
      </div>
    </div>

    <b-row>
      <b-col cols="2">
        <img class="user-profile" :src="imgSrc" alt="profileImage" />
      </b-col>
      <b-col cols="10">
        <table class="info">
          <tbody>
            <tr>
              <td class="w-20per txt-center label">Company명</td>
              <td class="w-75per">원익IPS</td>
            </tr>
            <tr>
              <td class="txt-center label">ID (e-Mail)</td>
              <td>Seoul</td>
            </tr>
            <tr>
              <td class="txt-center label">학습자명</td>
              <td>Seoul</td>
            </tr>
            <tr>
              <td class="txt-center label">연락처</td>
              <td>01099784424</td>
            </tr>
            <tr>
              <td class="txt-center label">SMS/Mail 수신여부</td>
              <td>SMS수신</td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>

    <h4 class="title mt-5">결제등록 History</h4>
    <div class="search-container">
      <div class="search-box">
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
        <b-button variant="info" class="search-button">검색</b-button>
        <b-button variant="primary" class="search-button ml-10px">결제등록하기</b-button>
      </div>

      <div class="mt-3 card">
        <Table ref="table1" :tabledata="tableData" :loading="onLoading" :tableId="'carrot-sample1'"></Table>
        <div class="mt-3" v-show="!onLoading">
          <Paging :totaldata="samplePagingTotal" :pagingdata="5" :pagingrange="5" :setPage="sampleSetPage" @onPagingEvent="onMovePageing"></Paging>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/reactivity';
import sampleTableData from '@/assets/mock/table.json';
import { onMounted } from '@vue/runtime-core';
/* img object */
const imgObj = () => {
  const imgSrc = ref(require('@/assets/images/user.png'));
  return {
    imgSrc,
  };
};

const searchGroup = () => {
  const onLoading = ref(false);
  const samplePagingTotal = ref(0);
  const sampleSetPage = ref(1);
  const search = reactive({
    stDate: new Date(),
    endDate: new Date(),
  });
  const format = date => {
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  };

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

  const onMovePageing = pagenumber => {
    mockApi(pagenumber);
  };

  return {
    search,
    format,
    tableData,
    onLoading,
    samplePagingTotal,
    sampleSetPage,
    onMovePageing,
  };
};
export default {
  setup() {
    const { imgSrc } = imgObj();
    const { search, format, tableData, onLoading, onMovePageing, samplePagingTotal } = searchGroup();

    onMounted(() => {
      onMovePageing(1);
    });
    return {
      imgSrc,
      search,
      format,
      tableData,
      onMovePageing,
      samplePagingTotal,
      onLoading,
    };
  },
};
</script>

<style scoped lang="scss"></style>
