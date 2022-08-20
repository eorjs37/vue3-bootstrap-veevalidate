<template>
  <b-row class="h-100">
    <b-col lg="2" class="sidebar">
      <a class="active" href="none">Home</a>
      <a href="none">News</a>
      <a href="none">Contact</a>
      <a href="none">About</a>
    </b-col>
    <b-col lg="10">
      <router-view />
    </b-col>
  </b-row>
</template>

<style lang="scss">
@import '@/assets/styles/_variables.scss';

.sidebar {
  background-color: #f1f1f1;
  height: 100%;
  padding-right: 0;

  a {
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
  }

  a.active {
    background-color: #04aa6d;
    color: white;
  }
}
</style>
