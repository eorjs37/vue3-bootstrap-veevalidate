<template>
  <div class="container mt-3">
    <Form @submit="form.onSubmit" ref="formArray" :initial-values="form.values">
      <b-row>
        <b-col lg="6" sm="12">
          <Field id="name" name="name" label="이름" rules="required" v-slot="{ field, errors }">
            <b-form-group id="name" label="이름" label-for="name">
              <b-form-input
                v-model="form.values.name"
                id="name"
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
          <Field v-model="form.values.email" id="email" name="email" label="이메일" rules="required|email" v-slot="{ field, errors }">
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
        <FieldArray name="career" key-path="id" v-model="form.values.career" v-slot="{ fields }" ref="carrerArray">
          <b-form-group id="carrer" label="커리어" label-for="carrer">
            <div class="txt-right">
              <b-button variant="outline-primary" @click="form.addCarrer()">추가</b-button>
            </div>

            <b-col lg="12" sm="12">
              <div v-for="(field, idx) in fields" :key="field.key" class="mt-10px">
                <Field :name="`carrer[${idx}].school`" label="학교명" v-slot="{ field, errors }" rules="required">
                  <b-form-input
                    v-model="form.values.career[idx].school"
                    :name="`carrer[${idx}].school`"
                    v-bind="field"
                    type="text"
                    placeholder="학교명을 입력하세요"
                    :state="errors[0] ? false : null">
                  </b-form-input>
                  <b-form-invalid-feedback v-if="errors[0]" id="input-live-feedback"> {{ errors[0] }} </b-form-invalid-feedback>
                </Field>
              </div>
            </b-col>
          </b-form-group>
        </FieldArray>
      </b-row>
    </Form>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue';
export default {
  setup() {
    const carrerArray = ref(null);
    const form = reactive({
      values: {
        name: '',
        email: '',
        career: [
          { id: 1, school: '대학교', major: '컴퓨터공학과' },
          { id: 2, school: '대학교2', major: '컴퓨터공학과' },
        ],
      },

      onSubmit: () => {},

      addCarrer: () => {
        const { push } = carrerArray.value;
        const max = Math.max(...form.values.career.map(value => value.id)) + 1;

        //field array 추가
        push({
          id: max + 1,
          school: '',
          major: '',
        });

        //원본 추가
        form.values.career.push({
          id: max + 1,
          school: '',
          major: '',
        });
      },
    });

    onMounted(() => {
      //console.log(carrerArray.value);
    });

    return {
      carrerArray,
      form,
    };
  },
};
</script>

<style>
.txt-right {
  text-align: right;
  margin-bottom: 10px;
}
.mt-10px {
  margin-top: 10px;
}
</style>
