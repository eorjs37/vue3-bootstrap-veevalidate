<template>
  <QuillEditor class="editor"></QuillEditor>
</template>

<script>
import { quillEditor } from 'vue3-quill';

export default {
  components: {
    QuillEditor: quillEditor,
  },
};
</script>

<style lang="scss" scoped>
.editor {
  background-color: #fff;
}
</style>
