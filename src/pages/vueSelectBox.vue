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
                <multiselect
                  v-model="value"
                  :options="options"
                  :preserve-search="true"
                  placeholder="Pick some"
                  label="name"
                  track-by="name"
                  :preselect-first="true">
                  <template #clear>
                    <span class="vue-select-delete">삭제</span>
                  </template>
                  <!-- <template #clear>
                    <div class="multiselect__clear" v-if="selectedCountries.length"></div>
                  </template> -->
                </multiselect>
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
    const options = reactive([
      { name: 'Vue.js', language: 'JavaScript' },
      { name: 'Adonis', language: 'JavaScript' },
      { name: 'Rails', language: 'Ruby' },
      { name: 'Sinatra', language: 'Ruby' },
      { name: 'Laravel', language: 'PHP' },
      { name: 'Phoenix', language: 'Elixir' },
    ]);

    return {
      value,
      options,
    };
  },
};
</script>

<style></style>
