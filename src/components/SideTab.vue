<template>
  <b-row>
    <b-col cols="2">
      <div class="d-flex flex-column menu-tab menu-tab-menu px-3">
        <slot name="MenuList" class="menu-tab-menu"> </slot>
      </div>
    </b-col>
    <b-col cols="10">
      <slot name="MenuContents"> </slot>
    </b-col>
  </b-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.menu-tab {
  background-color: $tab-menu;
}

.menu-tab-menu {
  color: $tab-text-color;
}
</style>
