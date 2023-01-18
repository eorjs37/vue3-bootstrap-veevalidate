<template>
  <div class="container mt-3">
    <h3 class="title mb-3">과정 관리</h3>

    <div class="class-manage-card p-3">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item" @click="activeAcc(1)">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              :class="{ collapsed: active === 1 ? false : true }"
              type="button"
              aria-expanded="true"
              aria-controls="collapseOne">
              과정1
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            :class="{ show: active === 1 ? true : false }"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes
              that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
              You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
              within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item" @click="activeAcc(2)">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button"
              :class="{ collapsed: active === 2 ? false : true }"
              type="button"
              aria-expanded="false"
              aria-controls="collapseTwo">
              과정2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            :class="{ show: active === 2 ? true : false }"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any
              HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item" @click="activeAcc(3)">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button"
              type="button"
              :class="{ collapsed: active === 3 ? false : true }"
              aria-expanded="false"
              aria-controls="collapseThree">
              과정3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            :class="{ show: active === 3 ? true : false }"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any
              HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  setup() {
    const active = ref(-1);

    const activeAcc = number => {
      active.value = number;
    };

    return {
      active,
      activeAcc,
    };
  },
};
</script>

<style></style>
