# vue3-bootstrap-veevalidate

> vue3 + bootstrap + vee-validate 조합

## vue checkbox

> vue에서 checkbox 사용시 아래 처럼 사용된다

```javascript html vue
<template>
  <div class="container mt-3">
    <Form ref="checkboxForm">
      <b-row>
        <b-form-group>
          <Field
            v-model="selected"
            type="checkbox"
            id="checkbox-group-1"
            name="checkbox-validation"
            label="체크박스"
            rules="required"
            :value="'orange'"
            v-slot="{ field }">
            <b-form-checkbox value="orange" inline v-bind="field">Orange</b-form-checkbox>
          </Field>
          <Field
            v-model="selected"
            type="checkbox"
            id="checkbox-group-2"
            name="checkbox-validation"
            label="체크박스"
            rules="required"
            :value="'apple'"
            v-slot="{ field }">
            <b-form-checkbox value="apple" inline v-bind="field">apple</b-form-checkbox>
          </Field>

          <Field
            v-model="selected"
            type="checkbox"
            id="checkbox-group-3"
            name="checkbox-validation"
            label="체크박스"
            rules="required"
            :value="'Pineapple'"
            v-slot="{ field }">
            <b-form-checkbox value="Pineapple" inline v-bind="field">Pineapple</b-form-checkbox>
          </Field>
        </b-form-group>
        {{ selected }}
        <ErrorMessage name="checkbox-validation" />
      </b-row>

      <div class="text-right">
        <b-button type="submit" variant="info" @click="form.onSubmit()">Submit</b-button>
      </div>
    </Form>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
export default {
  setup() {
    const checkboxForm = ref(null);
    const selected = ref([]);
    const options = ref([
      { value: 'value1', text: '선택1' },
      { value: 'value2', text: '선택2' },
    ]);

    const form = reactive({
      onSubmit: async () => {
        const { validate } = checkboxForm.value;

        const { valid } = await validate();

        if (!valid) {
          alert('필수값을 확인해주세요.');
        }
      },
    });

    const state = ref(null);

    return {
      checkboxForm,
      selected,
      options,
      state,
      form,
    };
  },
};
</script>

<style>
.text-right {
  text-align: right;
}
.error {
  border: 1px solid red;
}

.txt-error {
  display: block;
  color: #dc3545;
}
</style>

```

> selected : 선택된 체크박스 이므로 배열형태로 가능하다.  
> 각 checkbox마다 v-model="selected"를 선언해준다. 그럼으로써 배열에 값이 존재할 경우 알아서 체크 표시를 해준다.
