<template>
  <div class="sidebar">
    <a class="active">Home</a>
    <a>News</a>
    <a>Contact</a>
    <a>About</a>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
export default {
  setup() {
    onMounted(() => {
      console.log('Sidebar.vue onMounted');
    });
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
