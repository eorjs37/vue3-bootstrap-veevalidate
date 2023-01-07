<template>
  <div class="sidebar">
    <ul class="menu">
      <li class="menu-nm" :class="{ active: curPath === 'searchGroup' }">상위1 메뉴</li>
      <li>
        <ul class="sub-menu">
          <li class="menu-nm" :class="{ active: curPath === 'searchGroup' }" @click="move('searchGroup')">SearchGroup</li>
        </ul>
      </li>

      <li
        class="menu-nm"
        :class="{
          active:
            curPath === 'form' ||
            curPath === 'form2' ||
            curPath === 'form3' ||
            curPath === 'calendar' ||
            curPath === 'userInfo' ||
            curPath === 'sideTab',
        }">
        상위2 메뉴
      </li>
      <li>
        <ul class="sub-menu">
          <li class="menu-nm" :class="{ active: curPath === 'form' }" @click="move('form')">Form1</li>
          <li class="menu-nm" :class="{ active: curPath === 'form2' }" @click="move('form2')">Form2</li>
          <li class="menu-nm" :class="{ active: curPath === 'form3' }" @click="move('form3')">Form3</li>
          <li class="menu-nm" :class="{ active: curPath === 'calendar' }" @click="move('calendar')">Calendar</li>
          <li class="menu-nm" :class="{ active: curPath === 'userInfo' }" @click="move('userInfo')">UserInfo</li>
          <li class="menu-nm" :class="{ active: curPath === 'classManage' }" @click="move('classManage')">ClassManage</li>
        </ul>
      </li>

      <li class="menu-nm" :class="{ active: curPath === 'grid' || curPath === 'excel' }">상위3 메뉴</li>
      <li>
        <ul class="sub-menu">
          <li class="menu-nm" :class="{ active: curPath === 'grid' }" @click="move('grid')">Grid</li>
          <li class="menu-nm" :class="{ active: curPath === 'excel' }" @click="move('excel')">Excel</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref, watch } from '@vue/runtime-core';
import { useRouter, useRoute } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const curPath = ref(null);

    const move = page => {
      router.push({ name: page });
    };

    onMounted(() => {
      const { name } = route;
      curPath.value = name;
    });

    watch(route, cur => {
      const { name } = cur;
      curPath.value = name;
    });

    return {
      move,
      route,
      curPath,
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: #1e1e2d;
  height: 100%;
  padding-right: 0;
  color: #9d9da6;

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

  .menu,
  .sub-menu {
    list-style: none;
    padding: 16px;
    margin-bottom: 0;

    .menu-nm {
      cursor: pointer;
    }

    .menu-nm.active {
      color: #04aa6d;
    }

    .menu-nm:hover {
      color: #04aa6d;
    }
  }

  .sub-menu {
    padding-left: 20px;
    padding-top: 10px;
    padding-right: 0;
    padding-bottom: 10px;

    li {
      padding-bottom: 10px;
      cursor: pointer;
    }
  }
}
</style>
