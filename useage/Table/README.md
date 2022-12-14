# Table Component

## props

| name       | type    | required | default           |
| ---------- | ------- | -------- | ----------------- |
| isCheckBox | Boolean | false    | true              |
| tabledata  | Object  | false    | {head:[],body:[]} |
| loading    | Boolean | false    | false             |
| tableId    | String  | false    | ' '               |

## emits

### @rowselected

> 테이블 데이터를 선택할때마다 발생하는 이벤트

### 사용법

```html javascript
<template>
  <div class="container mt-3">
    <table :tabledata="tableData" @rowselected="onSelectItem"></table>
  </div>
</template>
<script>
  import { ref, reactive } from '@vue/reactivity';
  export default {
    setup(props, context) {
      const tableData = reactive({
        head: [
          {
            headkey: 'id',
            colname: 'ID',
          },
          {
            headkey: 'Company',
            colname: '회사명',
          },
          {
            headkey: 'Contury',
            colname: '국가',
          },
          {
            headkey: 'Name',
            colname: '이름',
          },
        ],
        body: [],
      });

      const onSelectItem = item => {
        alert(JSON.stringify(item));
      };

      return {
        tableData,
        onSelectItem,
      };
    },
  };
</script>
```

## head,body 커스텀

> table data의 head,body의 내용을 custom 하고 싶을때 사용하는 방법이다.

### head 커스텀

> 만약 head데이터 또는 head css를 custom 하고 싶다면 #Head+head.headkey 의 조합으로 template에 선언한다.  
> 아래 코드 처럼 사용하면 된다.

```html
<table :tabledata="tableData" @rowselected="onSelectItem">
  <!-- ##### Head ##### -->
  <!-- 규칙은 #Head+head.key -->
  <!-- #HeadCompany="{ headitem }" -->
  <template #HeadCompany="{ headitem }">
    <!-- 여기서부터는 custom 하기 위해 만든곳이다. -->
    <div class="txt-right">{{ headitem.colname }}</div>
  </template>
</table>
```

```html javascript
<template>
  <div class="container mt-3">
    <table :tabledata="tableData" @rowselected="onSelectItem">
      <!-- ##### Head ##### -->
      <template #HeadCompany="{ headitem }">
        <!-- 규칙은 -->
        <div class="txt-right">{{ headitem.colname }}</div>
      </template>
    </table>
  </div>
</template>
<script>
  import { ref, reactive } from '@vue/reactivity';
  export default {
    setup(props, context) {
      const tableData = reactive({
        head: [
          {
            headkey: 'id',
            colname: 'ID',
          },
          {
            headkey: 'Company',
            colname: '회사명',
          },
          {
            headkey: 'Contury',
            colname: '국가',
          },
          {
            headkey: 'Name',
            colname: '이름',
          },
        ],
        body: [],
      });

      const onSelectItem = item => {
        alert(JSON.stringify(item));
      };

      return {
        tableData,
        onSelectItem,
      };
    },
  };
</script>
```
