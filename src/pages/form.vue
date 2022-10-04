<template>
  <div class="container mt-3">
    <Form @submit="form.onSubmit" ref="addForm" class="form">
      <b-row>
        <b-col lg="6" sm="12">
          <Field id="name" name="name" label="이름" rules="required" v-slot="{ field, errors }">
            <b-form-group id="name" label="이름" label-for="name">
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
            <b-form-group id="email" label="Email address" label-for="email">
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
            <b-form-group id="password" label="비밀번호" label-for="password">
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
            <b-form-group id="passwordConfirm" label="비밀번호" label-for="passwordConfirm">
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
            <b-form-group id="country" label="국가" label-for="country">
              <b-form-select v-model="form.country" v-bind="field" :options="form.countryOptions" :state="errors[0] ? false : null"></b-form-select>
              <b-form-invalid-feedback v-if="errors[0]" id="input-live-feedback"> {{ errors[0] }} </b-form-invalid-feedback>
            </b-form-group>
          </Field>
        </b-col>

        <b-col lg="6" sm="12">
          <Field id="gender" name="gender" label="성별" rules="required" v-slot="{ field, errors }">
            <b-form-group id="gender" label="성별" label-for="gender">
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
          <b-form-group id="time" label="시간" label-for="time">
            <b-row>
              <b-col cols="6">
                <Field v-model="form.stTime" id="stTime" name="stTime" label="시작시간" rules="required" v-slot="{ field, errors }">
                  <TimePicker :propTime="field" :error="errors"></TimePicker>
                </Field>
              </b-col>
              <b-col cols="6">
                <TimePicker :propTime="form.endTime" :error="[]"></TimePicker>
              </b-col>
            </b-row>
          </b-form-group>
        </b-col>
      </b-row>

      <div class="text-right">
        <b-button type="submit" variant="info" @click="form.onSubmit()">Submit</b-button>
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
