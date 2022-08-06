<template>
  <div class="container mt-3">
    <Form @submit="form.onSubmit" ref="form1">
      <b-row>
        <b-col lg="6" sm="12">
          <b-form-group id="name" label="이름" label-for="name">
            <b-form-input id="name" v-model="form.name" type="text" placeholder="이름을 입력하세요." :state="false"></b-form-input>

            <b-form-invalid-feedback id="input-live-feedback"> Enter at least 3 letters </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col lg="6" sm="12">
          <b-form-group id="email" label="Email address:" label-for="email">
            <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter email" :state="false" required></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg="6" sm="12">
          <b-form-group id="password" label="비밀번호" label-for="password">
            <b-form-input id="password" v-model="form.password" type="password" placeholder="Enter password" required></b-form-input>
          </b-form-group>
        </b-col>

        <b-col lg="6" sm="12">
          <b-form-group id="passwordConfirm" label="비밀번호" label-for="passwordConfirm">
            <b-form-input id="passwordConfirm" v-model="form.password" type="password" placeholder="Enter passwordConfirm" required></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg="6" sm="12">
          <b-form-group id="gender" label="성별" label-for="gender" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              id="gender"
              v-model="form.gender"
              :aria-describedby="ariaDescribedby"
              :options="form.genderSelectOptions"
              name="gender">
            </b-form-radio-group>
          </b-form-group>
        </b-col>

        <b-col lg="6" sm="12">
          <b-form-group id="country" label="국가" label-for="country">
            <b-form-select v-model="form.country" :options="form.countryOptions"></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
    </Form>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    const form = reactive({
      name: '',
      mail: '',
      password: '',
      passwordConfirm: '',
      gender: '',
      country: '',

      genderSelectOptions: [
        { value: 'men', text: '남' },
        { value: 'woman', text: '여' },
      ],

      countryOptions: [
        { value: '', text: '전체' },
        { value: 2001, text: '미국' },
        { value: 2002, text: '한국' },
      ],

      onSubmit: () => {},
    });

    return {
      form,
    };
  },
};
</script>

<style></style>
