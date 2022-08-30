<template>
  <div class="sidebar">
    <a :class="{ active: route.name === 'form' }" @click="move('form')">Form</a>
    <a :class="{ active: route.name === 'fileForm' }" @click="move('fileForm')">FileForm</a>
    <a :class="{ active: route.name === 'checkbox' }" @click="move('checkbox')">checkBox</a>
    <a :class="{ active: route.name === 'formArray' }" @click="move('formArray')">formArray</a>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import { useRouter, useRoute } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    const move = page => {
      router.push({ name: page });
    };

    onMounted(() => {});

    return {
      move,
      route,
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: #f1f1f1;
  height: 100%;
  padding-right: 0;

  a {
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
    cursor: pointer;
  }

  a.active {
    background-color: #04aa6d;
    color: white;
  }
}
</style>
