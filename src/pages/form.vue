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
    <Form @submit="form.onSubmit" ref="addForm" class="form">
      <b-row>
        <b-col lg="6" sm="12">
          <Field id="name" name="name" label="이름" rules="required" v-slot="{ field, errors }">
            <div class="mb-1">
              <label for="name"><span class="required">*</span> 이름</label>
            </div>
            <b-form-group id="name" label-for="name">
              <b-form-input
                id="name"
                v-model="form.name"
                v-bind="field"
                type="text"
                placeholder="이름을 입력하세요."
                :state="errors[0] ? false : null">
              </b-form-input>

              <b-form-invalid-feedback v-if="errors[0]" id="input-live-feedback"> {{ errors[0] }} </b-form-invalid-feedback>
            </b-form-group>
          </Field>
        </b-col>
        <b-col lg="6" sm="12">
          <Field id="email" name="email" label="이메일" rules="required|email" v-slot="{ field, errors }">
            <div class="mb-1">
              <label for="name"><span class="required">*</span> Email address</label>
            </div>
            <b-form-group id="email" label-for="email">
              <b-form-input
                id="email"
                v-model="form.email"
                v-bind="field"
                type="email"
                placeholder="Enter email"
                :state="errors[0] ? false : null"
                required></b-form-input>

              <b-form-invalid-feedback v-if="errors[0]" id="input-live-feedback"> {{ errors[0] }} </b-form-invalid-feedback>
            </b-form-group>
          </Field>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg="6" sm="12">
          <Field id="password" name="password" label="비밀번호" rules="required" v-slot="{ field, errors }">
            <div class="mb-1">
              <label for="name"><span class="required">*</span> 비밀번호</label>
            </div>
            <b-form-group id="password" label-for="password">
              <b-form-input
                id="password"
                type="password"
                v-model="form.password"
                placeholder="Enter password"
                :state="errors[0] ? false : null"
                v-bind="field"></b-form-input>
              <b-form-invalid-feedback v-if="errors[0]" id="input-live-feedback"> {{ errors[0] }} </b-form-invalid-feedback>
            </b-form-group>
          </Field>
        </b-col>

        <b-col lg="6" sm="12">
          <Field id="passwordConfirm" name="passwordConfirm" label="비밀번호" rules="required|confirmed:@password" v-slot="{ field, errors }">
            <div class="mb-1">
              <label for="name"><span class="required">*</span> 비밀번호</label>
            </div>
            <b-form-group id="passwordConfirm" label-for="passwordConfirm">
              <b-form-input
                id="passwordConfirm"
                type="password"
                placeholder="Enter passwordConfirm"
                v-model="form.passwordConfirm"
                v-bind="field"
                :state="errors[0] ? false : null"></b-form-input>
              <b-form-invalid-feedback v-if="errors[0]" id="input-live-feedback"> {{ errors[0] }} </b-form-invalid-feedback>
            </b-form-group>
          </Field>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg="6" sm="12">
          <Field id="country" name="country" label="국가" rules="required" v-slot="{ field, errors }">
            <div class="mb-1">
              <label for="name"> 국가</label>
            </div>
            <b-form-group id="country" label-for="country">
              <b-form-select v-model="form.country" v-bind="field" :options="form.countryOptions" :state="errors[0] ? false : null"></b-form-select>
              <b-form-invalid-feedback v-if="errors[0]" id="input-live-feedback"> {{ errors[0] }} </b-form-invalid-feedback>
            </b-form-group>
          </Field>
        </b-col>

        <b-col lg="6" sm="12">
          <Field id="gender" name="gender" label="성별" rules="required" v-slot="{ field, errors }">
            <div class="mb-1">
              <label for="성별"> 성별</label>
            </div>
            <b-form-group id="gender" label="" label-for="gender">
              <b-form-radio-group
                id="gender"
                v-model="form.gender"
                :state="errors[0] ? false : null"
                v-bind="field"
                :options="form.genderSelectOptions"
                name="gender">
              </b-form-radio-group>
              <b-form-invalid-feedback :state="errors[0] ? false : null" id="input-live-feedback"> {{ errors[0] }} </b-form-invalid-feedback>
            </b-form-group>
          </Field>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12">
          <div class="mb-1">
            <label for="성별"> 시간</label>
          </div>
          <b-form-group id="time" label-for="time">
            <b-row>
              <b-col cols="6">
                <Field v-model="form.stTime" id="stTime" name="stTime" label="시작시간" rules="required" v-slot="{ field, errors }">
                  <TimePicker :propTime="form.stTime" :error="errors" :field="field"></TimePicker>
                </Field>
              </b-col>
              <b-col cols="6">
                <Field v-model="form.endTime" id="endTime" name="endTime" label="종료시간" rules="required" v-slot="{ field, errors }">
                  <TimePicker :propTime="form.endTime" :error="errors" :field="field"></TimePicker>
                </Field>
              </b-col>
            </b-row>
          </b-form-group>
        </b-col>
      </b-row>

      <div class="text-right">
        <b-button type="submit" variant="primary" @click="form.onSubmit()">Submit</b-button>
      </div>
    </Form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const addForm = ref(null);
    const form = reactive({
      name: '최대건',
      mail: '',
      password: '',
      passwordConfirm: '',
      gender: '',
      country: '',
      stTime: '',
      endTime: '',

      genderSelectOptions: [
        { value: 'men', text: '남' },
        { value: 'woman', text: '여' },
      ],

      countryOptions: [
        { value: '', text: '전체' },
        { value: 2001, text: '미국' },
        { value: 2002, text: '한국' },
      ],

      onSubmit: async () => {
        const { validate } = addForm.value;

        const { valid } = await validate();
        if (!valid) {
          alert('필수값을 확인해주세요.');
        }
      },
    });

    return {
      addForm,
      form,
    };
  },
};
</script>

<style>
.text-right {
  text-align: right;
}
</style>
