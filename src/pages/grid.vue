<template>
  <div class="container mt-3">
    <h1>Grid</h1>
    <div id="grid" class="grid"></div>
  </div>
</template>

<script>
import Grid from 'tui-grid';
import 'tui-grid/dist/tui-grid.css';
import { onMounted } from 'vue';
export default {
  setup() {
    onMounted(() => {
      const instance = new Grid({
        el: document.getElementById('grid'), // Container element
        scrollX: false,
        scrollY: false,
        columns: [
          {
            header: 'Name',
            name: 'name',
          },
          {
            header: 'Artist',
            name: 'artist',
          },
          {
            header: 'Release',
            name: 'release',
          },
          {
            header: 'Genre',
            name: 'genre',
          },
        ],
        data: [],
      });

      instance.resetData([
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop',
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop',
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop',
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop',
        },
      ]); // Call API of instance's public method

      Grid.applyTheme('striped'); // Call API of static method
    });
  },
};
</script>

<style lang="scss" scoped>
.grid {
}
</style>
