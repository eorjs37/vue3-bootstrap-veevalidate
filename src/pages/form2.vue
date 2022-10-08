<template>
  <div class="container mt-3">
    <Form ref="arrayForm" class="form" :initial-values="classForm">
      <b-row>
        <b-col cols="6">
          <Field id="classCode" name="classCode" label="수업코드" rules="required|numeric" v-slot="{ field, errors }">
            <b-form-group id="classCode" label="수업코드" label-for="classCode">
              <b-form-input
                id="name"
                v-model="classForm.classCode"
                v-bind="field"
                placeholder="수업코드를 입력하세요."
                :state="errors[0] ? false : null">
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
            <FieldArray name="classTimeList" key-path="id" v-slot="{ fields }">
              <b-row v-for="(arrayField, fieldIdx) in fields" :key="arrayField.key" class="pt-10px pb-10px">
                <b-col cols="6">
                  <Field
                    v-model="arrayField.value.stTime"
                    :name="`classTimeList[${fieldIdx}].stTime`"
                    label="시작시간"
                    rules="required"
                    v-slot="{ field, errors }">
                    <TimePicker :propTime="arrayField.value.stTime" :error="errors" :field="field"></TimePicker>
                  </Field>
                </b-col>
                <b-col cols="6">
                  <Field
                    v-model="arrayField.value.endTime"
                    :name="`classTimeList[${fieldIdx}].endTime`"
                    label="종료시간"
                    rules="required"
                    v-slot="{ field, errors }">
                    <TimePicker :propTime="arrayField.value.endTime" :error="errors" :field="field"></TimePicker>
                  </Field>
                </b-col>
              </b-row>
            </FieldArray>
          </b-form-group>
        </b-col>
      </b-row>

      <div class="text-right">
        <b-button type="button" variant="primary" @click="onSubmit">Submit</b-button>
      </div>
    </Form>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
const form2Object = () => {
  const arrayForm = ref(null);
  const classForm = reactive({
    classCode: '',
    className: '',
    classTimeList: [
      { stTime: '', endTime: '' },
      { stTime: '', endTime: '' },
      { stTime: '', endTime: '' },
    ],
  });

  const onSubmit = async () => {
    const { validate } = arrayForm.value;

    const { valid } = await validate();
    if (!valid) {
      alert('필수값을 확인해주세요.');
    }
  };

  return {
    arrayForm,
    classForm,
    onSubmit,
  };
};
export default {
  setup() {
    const { classForm, onSubmit, arrayForm } = form2Object();

    onMounted(() => {});

    return {
      arrayForm,
      classForm,
      onSubmit,
    };
  },
};
</script>

<style></style>
