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
                  v-model="selectValue"
                  :options="options"
                  placeholder="Pick some"
                  label="name"
                  track-by="name"
                  :loading="isLoading"
                  @search-change="mockApi">
                  <template #clear>
                    <span class="vue-select-delete" v-if="selectValue" @mousedown.prevent.stop="valueClear">삭제</span>
                  </template>
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
import { onMounted } from '@vue/runtime-core';
import mock2 from '@/assets/mock/mock2.json';
export default {
  setup() {
    const selectValue = ref(null);
    const isLoading = ref(false);
    let options = reactive([]);

    const valueClear = () => {
      selectValue.value = null;
    };

    const mockApi = query => {
      isLoading.value = true;
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mock2);
        }, 2000);
      }).then(result => {
        options.length = 0;
        isLoading.value = false;
        result.forEach(item => {
          options.push(item);
        });
      });
    };

    onMounted(() => {});

    return {
      selectValue,
      isLoading,
      options,
      valueClear,
      mockApi,
    };
  },
};
</script>

<style></style>
