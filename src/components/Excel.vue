<template>
  <input class="form-control" type="file" id="formFile" @change="onChange" />
  <xlsx-read :file="file">
    <xlsx-json @parsed="onParsed"> </xlsx-json>
  </xlsx-read>
</template>

<script>
import { ref } from '@vue/reactivity';
import { XlsxRead, XlsxJson } from '../../node_modules/vue3-xlsx/dist/vue3-xlsx.cjs.prod';
export default {
  components: {
    XlsxRead,
    XlsxJson,
  },
  emits: ['parsingJson'],
  setup(_, context) {
    const file = ref(null);

    const onChange = event => {
      file.value = event.target.files ? event.target.files[0] : null;
    };

    const onParsed = array => {
      context.emit('parsingJson', array);
    };

    return {
      file,
      onChange,
      onParsed,
    };
  },
};
</script>

<style></style>
