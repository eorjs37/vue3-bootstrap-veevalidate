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

    <b-card no-body>
      <b-tabs pills card vertical>
        <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
        <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
        <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
