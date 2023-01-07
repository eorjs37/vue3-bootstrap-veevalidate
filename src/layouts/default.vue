<template>
  <b-row class="h-100">
    <b-col cols="2" class="pr-0">
      <Sidebar></Sidebar>
    </b-col>
    <b-col cols="10" class="pl-0 body">
      <router-view v-slot="{ Component }">
        <keep-alive include="searchGroup">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </b-col>
  </b-row>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import { nextTick, onMounted } from '@vue/runtime-core';
export default {
  components: {
    Sidebar,
  },
  setup() {
    onMounted(() => {
      console.log('default.vue onMounted');

      nextTick(() => {
        console.log('default.vue nextTick');
      });
    });
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_styles.scss';
@import '@/assets/styles/_booststrap_custom.scss';

.body {
  background-color: #f5f8fa;
}
</style>
