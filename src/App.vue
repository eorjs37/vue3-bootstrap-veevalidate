<template>
  <router-view />
  <notifications position="bottom center" />
</template>

<script>
import { onMounted } from '@vue/runtime-core';
export default {
  setup() {
    onMounted(() => {
      console.log(process.env);
    });
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
html,
body,
#app {
  margin: 0;
  height: 100%;
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
