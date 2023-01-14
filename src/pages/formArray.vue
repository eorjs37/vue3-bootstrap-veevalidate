<template>
  <div class="container mt-3">
    <div class="class-manage-list p-3">
      <Form @submit="onSubmit" ref="formArrary" class="form" :initial-values="initalValues">
        <FieldArray name="links" v-slot="{ fields }">
          <div class="d-flex flex-column mt-3" v-for="(entry, idx) in fields" :key="entry.key">
            <h5>전화/화상 외국어과정 - CTM - {{ idx + 1 }}</h5>
            <div class="class-manage-card p-3">
              <div class="d-flex justify-content-between">
                <div class="class-title mt-2">
                  <input type="checkbox" class="cursor" />
                  <h5 class="d-inline-block ms-3">과정명</h5>
                </div>
              </div>

              <div class="mt-4">
                <table class="info">
                  <tbody>
                    <tr>
                      <td class="w-20per txt-center label p-2">과정명 <span class="required">*</span></td>
                      <td class="w-75per p-3">
                        <input class="form-control w-50per" type="text" placeholder="※ 사이트에 표시될 과정명을 입력해주세요" />
                      </td>
                    </tr>
                    <tr>
                      <td class="txt-center label p-2">연결관리자 <span class="required">*</span></td>
                      <td class="w-75per p-3">
                        <b-form-select class="search-selectbox d-inline-block w-20per" :options="options1"></b-form-select>
                        <input class="form-control d-inline-block w-30per ms-2" type="text" placeholder="CTM 고객사 코드를 입력해주세요" />
                        <b-button variant="primary" class="ms-2 connect-btn">코드확인</b-button>
                        <b-button variant="primary" class="ms-2 connect-btn">가이드</b-button>
                      </td>
                    </tr>
                    <tr>
                      <td class="txt-center label p-2">로드맵 <span class="required">*</span></td>
                      <td class="p-3">
                        <b-form-select class="search-selectbox d-inline-block w-30per" :options="options2"></b-form-select>
                      </td>
                    </tr>
                    <tr>
                      <td class="txt-center label p-2">수료기준 <span class="required">*</span></td>
                      <td>01099784424</td>
                    </tr>
                    <tr>
                      <td class="txt-center label p-2">SMS/Mail 수신여부</td>
                      <td>SMS수신</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </FieldArray>
      </Form>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
export default {
  setup() {
    const initalValues = {
      links: [
        {
          idx: 1,
          text: 1,
        },
        {
          idx: 1,
          text: 1,
        },
        {
          idx: 1,
          text: 1,
        },
      ],
    };

    const options1 = reactive([
      { value: '', text: '-선택-' },
      { value: '1', text: 'CTM' },
      { value: '2', text: 'ITM' },
    ]);

    const options2 = reactive([
      { value: '', text: '-선택-' },
      { value: '1', text: '전화영어 로드맵' },
      { value: '2', text: 'ITM' },
    ]);

    const onSubmit = values => {
      console.log(values);
    };

    return {
      initalValues,
      options1,
      options2,
      onSubmit,
    };
  },
};
</script>

<style lang="scss" scoped>
.connect-btn {
  margin-top: -6px;
}
</style>
