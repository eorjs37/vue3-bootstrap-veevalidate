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
    <Form ref="arrayForm" class="form" :initial-values="classForm" v-slot="{ values }">
      <b-row>
        <b-col cols="6">
          <Field id="classCode" name="classCode" label="수업코드" rules="required|numeric" v-slot="{ field, errors, validate }">
            <b-form-group id="classCode" label="수업코드" label-for="classCode">
              <b-form-input
                id="name"
                v-bind="field"
                placeholder="수업코드를 입력하세요."
                :state="errors[0] ? false : null"
                @input="inputHandleChange(field, validate)">
              </b-form-input>
              <b-form-invalid-feedback v-if="errors[0]" id="input-live-feedback"> {{ errors[0] }} </b-form-invalid-feedback>
            </b-form-group>
          </Field>
        </b-col>

        <b-col cols="6">
          <Field id="className" name="className" label="수업명" rules="required" v-slot="{ field, errors }">
            <b-form-group id="className" label="수업명" label-for="className">
              <b-form-input
                id="name"
                v-model="classForm.className"
                v-bind="field"
                placeholder="수업명을 입력하세요."
                :state="errors[0] ? false : null">
              </b-form-input>
              <b-form-invalid-feedback v-if="errors[0]" id="input-live-feedback"> {{ errors[0] }} </b-form-invalid-feedback>
            </b-form-group>
          </Field>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12">
          <b-form-group id="classTimeList" label="수업시간" label-for="classTimeList">
            <FieldArray name="classTimeList" key-path="id" v-slot="{ fields, push }">
              <b-row v-for="(arrayField, fieldIdx) in fields" :key="arrayField.key" class="pt-10px pb-10px">
                <b-col cols="3">
                  <Field
                    v-model="arrayField.value.day"
                    :name="`classTimeList[${fieldIdx}].day`"
                    label="요일"
                    rules="required"
                    v-slot="{ field, errors }">
                    <div>
                      <b-form-checkbox-group v-model="arrayField.value.day" :options="dayList" v-bind="field" :state="errors[0] ? false : null">
                      </b-form-checkbox-group>
                    </div>

                    <b-form-invalid-feedback :state="false" v-if="errors[0]"> {{ errors[0] }}</b-form-invalid-feedback>
                  </Field>
                </b-col>
                <b-col cols="4">
                  <Field
                    v-model="arrayField.value.stTime"
                    :name="`classTimeList[${fieldIdx}].stTime`"
                    label="시작시간"
                    rules="required"
                    v-slot="{ field, errors }">
                    <TimePicker :propTime="arrayField.value.stTime" :error="errors" :field="field"></TimePicker>
                  </Field>
                </b-col>
                <b-col cols="4">
                  <Field
                    v-model="arrayField.value.endTime"
                    :name="`classTimeList[${fieldIdx}].endTime`"
                    label="종료시간"
                    rules="required"
                    v-slot="{ field, errors }">
                    <TimePicker :propTime="arrayField.value.endTime" :error="errors" :field="field"></TimePicker>
                  </Field>
                </b-col>

                <b-col cols="1" class="txt-right">
                  <b-button variant="primary" @click="classArray(push)">Add</b-button>
                </b-col>
              </b-row>
            </FieldArray>
          </b-form-group>
        </b-col>
      </b-row>

      <div class="text-right">
        <b-button type="button" variant="primary" @click="onSubmit(values)">Submit</b-button>
      </div>
    </Form>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
const form2Object = () => {
  const arrayForm = ref(null);
  const dayList = reactive([
    { value: 1, text: '월' },
    { value: 2, text: '화' },
    { value: 3, text: '수' },
    { value: 4, text: '목' },
    { value: 5, text: '금' },
  ]);
  const classForm = reactive({
    classCode: '',
    className: '',
    classTimeList: [
      { day: [], stTime: '', endTime: '' },
      { day: [], stTime: '', endTime: '' },
      { day: [], stTime: '', endTime: '' },
    ],
  });

  const onSubmit = async values => {
    const { validate } = arrayForm.value;

    const { valid } = await validate();
    if (!valid) {
      alert('필수값을 확인해주세요.');
    }
  };

  const inputHandleChange = async (_, validate) => {
    const { valid } = await validate();

    if (!valid) {
      alert('값을 확인해주세요');
    }
  };

  const classArray = func => {
    func({
      day: [],
      stTime: '',
      endTime: '',
    });
  };

  return {
    arrayForm,
    dayList,
    classForm,
    onSubmit,
    inputHandleChange,
    classArray,
  };
};
export default {
  setup() {
    const { classForm, onSubmit, arrayForm, dayList, inputHandleChange, classArray } = form2Object();

    onMounted(() => {});

    return {
      arrayForm,
      dayList,
      classForm,
      onSubmit,
      inputHandleChange,
      classArray,
    };
  },
};
</script>

<style></style>
