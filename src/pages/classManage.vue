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
            <div class="d-inline-block class-manage-tab-menu mb-2 p-2">
              전화/화상 외국어과정
              <!-- <b-form-input class="search-input" placeholder="메뉴명을입력하세요"></b-form-input> -->
            </div>
            <div class="d-inline-block class-manage-tab-menu mb-2 p-2">사내어학과정</div>
            <div class="d-inline-block class-manage-tab-menu mb-2 p-2">마이크로러닝과정</div>
            <div class="d-inline-block class-manage-tab-menu p-2">AI튜터과정</div>
          </div>
        </b-col>
        <!-- sidebar contents -->
        <b-col cols="10">
          <div class="class-manage-contents p-3 overflow-auto">
            <div class="d-flex flex-column">
              <h5>전화/화상 외국어과정 - CTM</h5>
              <div class="class-manage-card p-3">
                <div class="d-flex justify-content-between">
                  <div class="class-title mt-2">
                    <input type="checkbox" class="cursor" />
                    <h5 class="d-inline-block ms-3">과정명</h5>
                  </div>
                  <div class="notice-button">
                    <b-button variant="primary">과정 notice</b-button>
                    <b-button variant="primary" class="ms-2">완료 notice</b-button>
                  </div>
                </div>

                <div class="mt-4">
                  <table class="info">
                    <tbody>
                      <tr>
                        <td class="w-20per txt-center label p-2">Company명</td>
                        <td class="w-75per">원익IPS</td>
                      </tr>
                      <tr>
                        <td class="txt-center label p-2">ID (e-Mail)</td>
                        <td>Seoul</td>
                      </tr>
                      <tr>
                        <td class="txt-center label p-2">학습자명</td>
                        <td>Seoul</td>
                      </tr>
                      <tr>
                        <td class="txt-center label p-2">연락처</td>
                        <td>01099784424</td>
                      </tr>
                      <tr>
                        <td class="txt-center label p-2">SMS/Mail 수신여부</td>
                        <td>SMS수신</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column mt-4">
              <h5>전화/화상 외국어과정 - CTM</h5>
              <div class="class-manage-card p-3">
                <div class="d-flex justify-content-between">
                  <div class="class-title mt-2">
                    <input type="checkbox" class="cursor" />
                    <h5 class="d-inline-block ms-3">과정명</h5>
                  </div>
                  <div class="notice-button">
                    <b-button variant="primary">과정 notice</b-button>
                    <b-button variant="primary" class="ms-2">완료 notice</b-button>
                  </div>
                </div>

                <div class="mt-4">
                  <table class="info">
                    <tbody>
                      <tr>
                        <td class="w-20per txt-center label p-2">Company명</td>
                        <td class="w-75per">원익IPS</td>
                      </tr>
                      <tr>
                        <td class="txt-center label p-2">ID (e-Mail)</td>
                        <td>Seoul</td>
                      </tr>
                      <tr>
                        <td class="txt-center label p-2">학습자명</td>
                        <td>Seoul</td>
                      </tr>
                      <tr>
                        <td class="txt-center label p-2">연락처</td>
                        <td>01099784424</td>
                      </tr>
                      <tr>
                        <td class="txt-center label p-2">SMS/Mail 수신여부</td>
                        <td>SMS수신</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
