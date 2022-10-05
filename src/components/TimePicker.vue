<template>
  <Datepicker v-model="propTime" timePicker placeholder="Select Time" v-bind="field">
    <template #dp-input="{ value }">
      <input
        class="dp__pointer dp__input_readonly dp__input dp__input_icon_pad dp__input_reg"
        type="text"
        :value="value"
        placeholder="Select Time"
        :class="error.length > 0 ? 'error' : ''" />

      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        class="dp__icon dp__input_icon dp__input_icons">
        <path
          d="M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"></path>
        <path
          d="M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"></path>
        <path
          d="M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"></path>
        <path
          d="M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"></path>
      </svg>
    </template>
  </Datepicker>
  <div :class="error.length > 0 ? 'time-picker-invaild' : 'time-picker-none'" id="time-picker-invaild">{{ error[0] }}</div>
</template>

<script>
export default {
  props: {
    /* 시간 */
    propTime: {
      type: [Object, String],
      required: false,
      default() {
        return {};
      },
    },
    /* 에러 */
    error: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
    field: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  border-color: #dc3545;
}

.time-picker-invaild {
  display: inline-block;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}

.time-picker-none {
  display: none;
}

.input-slot-image {
  height: 20px;
  width: auto;
  margin-left: 5px;
}
</style>
