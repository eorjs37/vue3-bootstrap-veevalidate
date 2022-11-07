<template>
  <div v-if="visible" class="modal">
    <div class="modal_body">
      <h3 class="txt-right">
        <span class="cursor" @click="clickCloseModal()">X</span>
      </h3>
      <h1 class="txt-center">center</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['closeModal'],
  setup(_, cotext) {
    const clickCloseModal = () => {
      cotext.emit('closeModal');
    };

    return {
      clickCloseModal,
    };
  },
};
</script>

<style lang="scss" scoped></style>
