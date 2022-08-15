<template>
  <div class="container mt-3">
    <Form @submit="fileForm.onsubmit" ref="addFileForm">
      <b-row>
        <b-col lg="6" sm="12">
          <Field v-model="fileForm.name" id="name" name="name" label="이름" rules="required" v-slot="{ field, errors }">
            <b-form-group id="name" label="이름" label-for="name">
              <b-form-input id="name" v-bind="field" type="text" placeholder="이름을 입력하세요." :state="errors[0] ? false : null"> </b-form-input>

              <b-form-invalid-feedback v-if="errors[0]" id="input-live-feedback"> {{ errors[0] }} </b-form-invalid-feedback>
            </b-form-group>
          </Field>
        </b-col>
        <b-col lg="6" sm="12">
          <Field v-model="fileForm.email" id="email" name="email" label="이메일" rules="required|email" v-slot="{ field, errors }">
            <b-form-group id="email" label="Email address" label-for="email">
              <b-form-input
                id="email"
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
        <b-col lg="12" sm="12">
          <Field v-model="fileForm.file" id="file" name="file" label="첨부파일" rules="filecheck" v-slot="{ field, errors }">
            <b-form-group id="file" label="첨부파일" label-for="file">
              <input class="form-control" type="file" id="formFile" @change="fileForm.changeFile" :class="{ error: errors[0] }" />
              <input type="hidden" v-bind="field" />

              <span class="txt-error" v-if="errors[0]">{{ errors[0] }}</span>
            </b-form-group>
          </Field>
        </b-col>
      </b-row>

      <div class="text-right">
        <b-button type="submit" variant="info" @click="fileForm.onsubmit()">Submit</b-button>
      </div>
    </Form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const addFileForm = ref(null);
    const fileForm = reactive({
      name: '',
      email: '',
      file: null,

      onsubmit: async () => {
        const { validate } = addFileForm.value;

        const { valid } = await validate();
        if (!valid) {
          alert('필수값을 확인해주세요.');
        }
      },

      changeFile: () => {
        const formFile = document.getElementById('formFile');

        fileForm.file = formFile.files[0];
      },
    });

    return {
      addFileForm,
      fileForm,
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
