<template>
  <div class="login">
    <Form @submit="loginModel.onSubmit" ref="loginForm">
      <div class="login-form">
        <h3>로그인</h3>
        <div class="mt-3">
          <Field v-model="loginModel.userId" id="userId" name="userId" label="아이디" rules="required|email" v-slot="{ field, errors }">
            <b-form-input placeholder="Enter your ID" v-bind="field" :state="errors[0] ? false : null"></b-form-input>
            <b-form-invalid-feedback v-if="errors[0]" id="input-live-feedback"> {{ errors[0] }} </b-form-invalid-feedback>
          </Field>
        </div>

        <div class="mt-3">
          <Field v-model="loginModel.password" id="password" name="password" label="Password" rules="required" v-slot="{ field, errors }">
            <b-form-input
              v-bind="field"
              placeholder="Enter your Password"
              type="password"
              :state="errors[0] ? false : null"
              @keyup.enter="loginModel.onSubmit()"></b-form-input>
            <b-form-invalid-feedback v-if="errors[0]" id="input-live-feedback"> {{ errors[0] }} </b-form-invalid-feedback>
          </Field>
        </div>

        <div class="mt-3 login-btn">
          <b-button pill variant="primary" @click="loginModel.onSubmit()">로그인</b-button>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import { login } from '@/api/mainapi/login';
import { onMounted, reactive, ref } from '@vue/runtime-core';
export default {
  layout: 'login',
  setup() {
    const loginForm = ref(null);
    const loginModel = reactive({
      userId: '',
      password: '',

      onSubmit: async () => {
        const { validate } = loginForm.value;

        const { valid } = await validate();

        if (!valid) {
          alert('필수값을 확인해주세요.');
        } else {
          login({
            UserId: loginModel.userId,
            PassWord: loginModel.password,
          })
            .then(res => {
              const { msg, success } = res.data;
              if (success === 'fail') {
                alert(msg);
              } else {
                alert('로그인성공');
              }
            })
            .catch(err => {
              if (err.response) {
                // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
                console.error('login  error : ', err.response.data);
                console.error('login  error : ', err.response.status);
                console.error('login  error : ', err.response.headers);
                alert('서버에 문제가 발생하였습니다.');
              } else if (err.request) {
                // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
                // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
                // node.js에서는 http.ClientRequest 인스턴스입니다.
                alert('서버가 응답하지 않습니다.');
                console.error('login  error : ', err.request);
              } else {
                console.error('login  error : ', err);
                alert(err.message);
              }
            });
        }
      },
    });

    onMounted(() => {});

    return {
      loginForm,
      loginModel,
    };
  },
};
</script>

<style lang="scss">
.login {
  height: 100%;
  display: flex;
  background-color: #f5f8fa;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .login-form {
    width: 600px;
    border: 1px solid #eee;
    background-color: #fff;
    border-radius: 4px;
    padding: 30px;
  }

  .login-btn {
    text-align: right;
  }
}
</style>
