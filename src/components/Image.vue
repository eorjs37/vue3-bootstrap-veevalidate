<template>
  <div class="img-thumbnail">
    <img class="img" :src="imgSrc" alt="logo">
  </div>
  <div class="img-btn-group">
    <button type="button" class="btn btn-success" @click="clickImage()">추가</button><button type="button" class="btn btn-danger">삭제</button>
  </div>
  <input type="file" hidden id="imgfile" ref="imgfile">
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';

/* img object */
const imgObj = ()=>{
  const imgSrc = ref(require("@/assets/images/user.png"));
  const imgfile = ref(null);

  const clickImage = ()=>{
    imgfile.value.click();
  }

  const imgChangeEvent = (e)=>{
    console.log(e);
  }

  const imgAddEventListener = () =>{
    imgfile.value.addEventListener('change',imgChangeEvent);
  }

  return{
    imgSrc,
    imgfile,
    clickImage,
    imgChangeEvent,
    imgAddEventListener
  }
}

export default {
  setup(){
    const { imgSrc,imgfile,clickImage,imgAddEventListener }  = imgObj();

    onMounted(()=>{
      //이벤트 등록
      imgAddEventListener();
    })

    return{
      imgSrc,
      imgfile,
      clickImage
    }
  }
}
</script>

<style lang="scss" scoped>
.img-thumbnail{
  display: inline-block;
  width: 200px;
  height: 200px;
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;

  .img{
    width: 100%;
    height: 100%;
  }
}

.img-btn-group{
  padding-top: 5px;
  button{
    width: 50%;
  }
}
</style>