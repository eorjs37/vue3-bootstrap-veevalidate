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

    <Form ref="addForm" class="form">
        <b-row>
            <b-col cols="2">
                <Image></Image>
            </b-col>
            <b-col cols="10">
                <h1>입력</h1>
            </b-col>
        </b-row>
    </Form>
  </div>
</template>

<script>
export default {
  setup(){
    
  }
}
</script>

<style>

</style>