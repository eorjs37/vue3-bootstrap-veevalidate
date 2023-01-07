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

    <div class="mt-3">
      <h3 class="title mb-3">과정 관리</h3>
      <b-row>
        <!-- sidebar -->
        <b-col cols="2">
          <div class="d-flex flex-column">
            <div class="d-inline-block class-manage-tab-menu mb-2 p-2">전화/화상외국어과정</div>
            <div class="d-inline-block class-manage-tab-menu mb-2 p-2">사내어학과정</div>
            <div class="d-inline-block class-manage-tab-menu mb-2 p-2">마이크로러닝과정</div>
            <div class="d-inline-block class-manage-tab-menu p-2">AI튜터과정</div>
          </div>
        </b-col>
        <!-- sidebar contents -->
        <b-col cols="10">
          <div class="class-manage-contents p-3">
            <div class="d-flex"></div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
