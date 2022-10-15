<template>
  <div class="img-thumbnail">
    <img class="img" :src="imgSrc" alt="logo" />
  </div>
  <div class="img-btn-group">
    <button type="button" class="btn btn-success" @click="clickImage()">추가</button><button type="button" class="btn btn-danger">삭제</button>
  </div>
  <input type="file" hidden id="imgfile" ref="imgfile" />
</template>

<script>
import { ref, toRefs } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';

/* img object */
const imgObj = (props, context) => {
  const imgSrc = ref(require('@/assets/images/user.png'));
  const imgfile = ref(null);

  const clickImage = () => {
    imgfile.value.click();
  };

  const imgChangeEvent = event => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      //이미지 로드
      reader.onload = e => {
        imgSrc.value = e.target.result;
        context.emit('onReturnData', event.target.files[0]);
      };

      //reader가 이미지 읽도록 하기
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const imgAddEventListener = () => {
    imgfile.value.addEventListener('change', imgChangeEvent);
  };

  return {
    imgSrc,
    imgfile,
    clickImage,
    imgChangeEvent,
    imgAddEventListener,
  };
};

export default {
  props: {
    imageSrc: {
      type: String,
      required: false,
    },
  },
  emits: ['onReturnData'],
  setup(props, context) {
    const { imgSrc, imgfile, clickImage, imgAddEventListener } = imgObj(props, context);

    onMounted(() => {
      //이벤트 등록
      imgAddEventListener();

      //이미지 세팅
      const { imageSrc } = toRefs(props);
      imgSrc.value = imageSrc.value ? imageSrc.value : require('@/assets/images/user.png');
    });

    return {
      imgSrc,
      imgfile,
      clickImage,
    };
  },
};
</script>

<style lang="scss" scoped>
.img-thumbnail {
  display: inline-block;
  width: 200px;
  height: 200px;
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;

  .img {
    width: 100%;
    height: 100%;
  }
}

.img-btn-group {
  padding-top: 5px;
  button {
    width: 50%;
  }
}
</style>
