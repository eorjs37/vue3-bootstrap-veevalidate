<template>
  <div class="login">
    <div class="login-form">
      <h1>로그인</h1>
      <div>
        <b-form-input placeholder="Enter your ID"></b-form-input>
      </div>

      <div class="mt-3">
        <b-form-input placeholder="Enter your Password" type="password"></b-form-input>
      </div>

      <div class="mt-3 login-btn">
        <b-button pill variant="primary">로그인</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/login';
import { onMounted } from '@vue/runtime-core';
export default {
  layout: 'login',
  setup() {
    onMounted(() => {
      login({
        UserId: 'chleorjs37@gmail.com',
        PassWord: 'chleorjs12@',
      });
    });
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
