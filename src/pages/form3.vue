<template>
  <div class="container mt-3">
    <h3 class="title"><font-awesome-icon icon="fa-solid fa-circle-info" /> 설명</h3>
    <div class="information">
      <div>
        <p>
          - 설명을 넣는 부분입니다. <br />
          - 설명을 넣어주세요
        </p>
      </div>
    </div>

    <Form ref="profileForm" class="form" @submit.prevent="onSubmit()">
      <b-row>
        <b-col cols="2">
          <Field v-model="formobj.profile" id="image" name="image" label="프로필" rules="required" v-slot="{ errors }">
            <Image :imageSrc="imgUrl" :errors="errors" @onReturnData="getReturnData"></Image>
          </Field>
        </b-col>
        <b-col cols="10">
          <b-row>
            <b-col cols="6">
              <Field id="name" name="name" label="이름" rules="required" v-slot="{ field, errors }">
                <b-form-group id="name" label="이름" label-for="name" label-cols-sm="2" content-cols-sm="10">
                  <b-form-input
                    id="name"
                    v-model="formobj.name"
                    v-bind="field"
                    type="text"
                    placeholder="이름을 입력하세요."
                    :state="errors[0] ? false : null">
                  </b-form-input>
                  <b-form-invalid-feedback v-if="errors[0]" id="input-live-feedback"> {{ errors[0] }} </b-form-invalid-feedback>
                </b-form-group>
              </Field>
            </b-col>
            <b-col cols="6">
              <Field id="country" name="country" label="국가" rules="required" v-slot="{ field, errors }">
                <b-form-group id="country" label="국가" label-for="country" label-cols-sm="2" content-cols-sm="10">
                  <b-form-select v-model="formobj.county" v-bind="field" :options="countrySelect" :state="errors[0] ? false : null"></b-form-select>
                  <b-form-invalid-feedback v-if="errors[0]" id="input-live-feedback"> {{ errors[0] }} </b-form-invalid-feedback>
                </b-form-group>
              </Field>
            </b-col>
          </b-row>

          <b-row>
            <b-col cols="6">
              <Field id="language" name="language" label="사용언어" rules="required" v-slot="{ field, errors }">
                <b-form-group id="language" label="사용언어" label-for="language" label-cols-sm="2" content-cols-sm="10">
                  <b-form-checkbox-group
                    v-model="formobj.language"
                    id="language"
                    :options="langulagelist"
                    class="pbt-auto"
                    v-bind="field"
                    :state="errors[0] ? false : null">
                  </b-form-checkbox-group>
                  <b-form-invalid-feedback :state="false" v-if="errors[0]"> {{ errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </Field>
            </b-col>
          </b-row>
        </b-col>

        <div class="text-right">
          <b-button type="button" variant="success" @click="onSubmit()">Submit</b-button>
        </div>
      </b-row>
    </Form>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';

const form3 = () => {
  const profileForm = ref(null);
  const formobj = reactive({
    profile: null,
    name: '',
    county: '',
    language: [],
  });

  const imgUrl = ref(null);
  const selected = ref([]);

  const getReturnData = image => {
    formobj.profile = image;
  };

  const onSubmit = async () => {
    const { validate } = profileForm.value;

    const { valid } = await validate();

    if (!valid) {
      alert('필수값을 확인해주세요.');
      return false;
    }
  };

  return {
    profileForm,
    formobj,
    imgUrl,
    selected,
    getReturnData,
    onSubmit,
  };
};

export default {
  setup() {
    const { profileForm, formobj, imgUrl, selected, getReturnData, onSubmit } = form3();
    const countrySelect = reactive([
      { value: '', text: '- 선택 -' },
      { value: 'ko', text: '한국' },
      { value: 'am', text: '미국' },
    ]);

    const langulagelist = reactive([
      { value: 'en', text: '영어' },
      { value: 'ko', text: '한국어' },
      { value: 'jp', text: '일본어' },
    ]);

    return {
      profileForm,
      formobj,
      imgUrl,
      selected,
      countrySelect,
      langulagelist,
      getReturnData,
      onSubmit,
    };
  },
};
</script>

<style lang="scss"></style>
