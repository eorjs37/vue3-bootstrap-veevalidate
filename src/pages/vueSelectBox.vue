<template>
  <div class="container mt-3">
    <h3 class="title"><font-awesome-icon icon="fa-solid fa-circle-info" /> 설명</h3>
    <div class="information">
      <div>
        <p>- vue-select-box</p>
      </div>
    </div>

    <h3 class="title"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /> 검색</h3>
    <div class="search-container">
      <div class="search-box">
        <b-row>
          <b-col cols="6">
            <b-row>
              <b-col cols="2" class="label">이름 </b-col>
              <b-col cols="10">
                <multiselect v-model="value" :options="options"></multiselect>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
export default {
  setup() {
    const value = ref(null);
    const options = reactive(['list', 'of', 'options']);

    return {
      value,
      options,
    };
  },
};
</script>

<style></style>
