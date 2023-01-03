<template>
  <div class="container mt-3">
    <h3 class="title"><font-awesome-icon icon="fa-solid fa-circle-info" /> 설명</h3>
    <div class="information">
      <div>
        <p>- 사용자 정보 보여주는 화면이며 - 진행중</p>
      </div>
    </div>

    <b-row>
      <b-col cols="2">
        <img class="user-profile" :src="imgSrc" alt="profileImage" />
      </b-col>
      <b-col cols="10">
        <table class="info">
          <tbody>
            <tr>
              <td class="w-20per txt-center label">Company명</td>
              <td class="w-75per">원익IPS</td>
            </tr>
            <tr>
              <td class="txt-center label">ID (e-Mail)</td>
              <td>Seoul</td>
            </tr>
            <tr>
              <td class="txt-center label">학습자명</td>
              <td>Seoul</td>
            </tr>
            <tr>
              <td class="txt-center label">학습자명</td>
              <td>Seoul</td>
            </tr>
            <tr>
              <td class="txt-center label">학습자명</td>
              <td>Seoul</td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
/* img object */
const imgObj = () => {
  const imgSrc = ref(require('@/assets/images/user.png'));
  return {
    imgSrc,
  };
};
export default {
  setup() {
    const { imgSrc } = imgObj();

    return {
      imgSrc,
    };
  },
};
</script>

<style scoped lang="scss"></style>
