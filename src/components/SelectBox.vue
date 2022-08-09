<template>
  <div class="select">
    <div class="selected">
      <div class="selected-value">{{ currentValue }}</div>
      <div class="arrow"></div>
    </div>
    <ul>
      <li v-for="(option, index) in options" :key="'selectbox' + index">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue';
export default {
  props: {
    current: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
    optionlist: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
  },
  setup() {
    const selectBoxElements = ref(null);
    const currentValue = ref('none');
    const options = reactive([]);

    /* function */
    const toggleSelectBox = selectbox => {
      selectbox.classList.toggle('active');
    };

    const selectOption = optionElement => {
      currentValue.value = optionElement.textContent;
    };

    const selectBoxClick = () => {
      selectBoxElements.value.forEach(selectBoxElement => {
        selectBoxElement.addEventListener('click', e => {
          const targetElement = e.target;
          const isOptionElement = targetElement.classList.contains('option');

          if (isOptionElement) {
            selectOption(targetElement);
          }

          toggleSelectBox(selectBoxElement);
        });
      });
    };

    /* lifecycle */
    onMounted(() => {
      selectBoxElements.value = document.querySelectorAll('.select');

      selectBoxClick();
    });

    return {
      currentValue,
      options,
      selectBoxElements,
      toggleSelectBox,
      selectOption,
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

.select {
  display: inline-block;
  width: 120px;
  border: 1px solid #999;
}

.select .selected {
  display: flex;
  justify-content: space-between;
  padding: 8px 5px;
}

.select .selected .selected-value {
  max-width: 90px;
}

.select .selected .arrow {
  width: 24px;
  background: url('~@/assets/images/down-chevron.png') no-repeat 70% 50%;
  background-size: 50% 50%;
}

.select > ul {
  display: none;
  list-style: none;
  padding-left: 0;
  width: 120px;
  border: 1px solid #999;
  position: absolute;
  background: #fff;
  border-top: none;
  margin: 1px 0 0 -1px;
  cursor: pointer;
}

.select.active ul {
  display: initial;
}

.select > ul > li {
  padding: 8px 5px;
}

.select ul li,
.select,
.selected,
.selected-value {
  white-space: nowrap; /* 줄바꿈 안함 */
  overflow: hidden;
  text-overflow: ellipsis; /* 말줄임 적용 */
}

.select ul li:hover {
  background: rgba(168, 156, 235, 0.35);
}
</style>
