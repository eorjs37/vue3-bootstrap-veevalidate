<template>
  <div class="container mt-3">
    <Form ref="checkboxForm">
      <b-row>
        <Field
          v-model="selected"
          type="checkbox"
          id="checkbox-group-1"
          name="checkbox-validation"
          label="체크박스"
          rules="required"
          v-slot="{ field, errors }">
          <b-col lg="6" sm="12">
            <b-form-checkbox-group
              v-model="selected"
              id="checkbox-group-1"
              name="checkbox-validation"
              v-bind="field"
              :options="options"
              :state="state">
              <span class="txt-error" v-if="errors[0]">{{ errors[0] }}</span>
            </b-form-checkbox-group>
          </b-col>
        </Field>
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
      { value: '선택1', text: '선택1' },
      { value: '선택2', text: '선택2' },
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
