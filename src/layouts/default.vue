<template>
  <b-row class="h-100">
    <b-col lg="2" class="pr-0">
      <Sidebar></Sidebar>
    </b-col>
    <b-col lg="10" class="pl-0">
      <router-view />
    </b-col>
  </b-row>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
export default {
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_styles.scss';
</style>
