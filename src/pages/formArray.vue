<template>
  <div class="container mt-3">
    <div class="class-manage-list p-3" v-if="loading">
      <Form v-slot="{ values }" @submit.prevent="onSubmit(values)" ref="formArrary" class="form" :initial-values="initalValues">
        <div class="mt-4 mb-4">
          <table class="info">
            <tbody>
              <tr>
                <td class="w-20per txt-center label p-2">메뉴명 <span class="required">*</span></td>
                <td class="w-75per p-3">
                  <Field v-model="values.companyname" id="companyname" name="companyname" label="회사명" rules="required" v-slot="{ field, errors }">
                    <b-form-input
                      v-model="values.companyname"
                      id="name"
                      v-bind="field"
                      type="text"
                      placeholder="회사명을 입력하세요"
                      :state="errors[0] ? false : null">
                    </b-form-input>

                    <b-form-invalid-feedback v-if="errors[0]" id="input-live-feedback"> {{ errors[0] }} </b-form-invalid-feedback>
                  </Field>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
                        <div class="d-inline-block w-50per">
                          <Field id="sitename" :name="`links[${idx}].sitename`" label="과정명" rules="required" v-slot="{ field, errors }">
                            <b-form-input id="name" v-bind="field" type="text" placeholder="과정명을 입력하세요" :state="errors[0] ? false : null">
                            </b-form-input>

                            <b-form-invalid-feedback v-if="errors[0]" id="input-live-feedback"> {{ errors[0] }} </b-form-invalid-feedback>
                          </Field>
                        </div>
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
                      <td class="p-3">
                        <b-form-radio-group v-model="entry.value.standard" id="standard" :options="options3"> </b-form-radio-group>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="text-right mt-3">
            <b-button type="submit" variant="primary" @click="onSubmit(values)">Submit</b-button>
          </div>
        </FieldArray>
      </Form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
export default {
  setup() {
    const initalValues = {
      companyname: '',
      links: [
        {
          idx: 1,
          text: 1,
          sitename: '',
          standard: 'Y',
        },
        {
          idx: 1,
          text: 1,
          sitename: '',
          standard: 'N',
        },
        {
          idx: 1,
          text: 1,
          sitename: '',
          standard: 'N',
        },
      ],
    };
    const loading = ref(false);

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

    const options3 = reactive([
      { value: 'Y', text: '사용' },
      { value: 'N', text: '사용안함' },
    ]);

    const onSubmit = values => {
      console.log(values);
    };

    onMounted(() => {
      loading.value = false;
      setTimeout(() => {
        initalValues.companyname = '당근영어';
        loading.value = true;
      }, 5000);
    });

    return {
      initalValues,
      loading,
      options1,
      options2,
      options3,
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
