### 动态渲染表头

当表头是后端返回的根据不同的参数返回不同的表头时

```html
<template v-for="(item,index) in data" :key="index">
  <a-table
    v-if="item.type==='LIST'"
    :columns="format(item.key)"
    :data-source="item.value"
  >
  </a-table>
  <a-row v-if="itme.type ==='MAP'">
    <a-col :span="6" v-for="(childrenItem) in item.key" :key="childrenItem.seq">
      <span>{{ childrenItem.paraName }}:</span
      ><span>{{ item.value[childrenItem.paraKey] }}</span></a-col
    >
  </a-row>
</template>
<script setup>
  const columns = ref([]);
  const getData = () => {
    axios
      .post("/getData", params)
      .then((res) => {
      //动态渲染  未知和map多少个当type 为LIST渲染表格    为MAP渲染 key value 对应的 key value 数据
      //表头不固定个数与字段
      //其中  LIST 和MAP  里面的key value 所有数据都都不固定有多少个
      // res.data 数据结构
      res.data = [
        {
          title: "数据库",
          type: "MAP",
          key: [
            {
              paraKey: "DATA_01",
              paraName: "数据_01",
              seq: 1,
            },
            {
              paraKey: "DATA_02",
              paraName: "数据02",
              seq: 2,
            },
          ],
          value: {
            DATA_01: "sadkasjdaskdjaskdjkasd",
            DATA_02: "SADASDADSASDASDASDASDASD",
          },
        },
        {
          title: "小额贷款-个人记录",
          type: "LIST",
          key: [
            {
              paraKey: "DATE_TIME",
              paraName: "时间",
              seq: 1,
            },
            {
              paraKey: "AMOUNT",
              paraName: "金额",
              seq: 2,
            },
          ],
          value: [
            {
              DATE_TIME: "20211101",
              AMOUNT: "575757858558",
            },
            {
              DATE_TIME: "20220811",
              AMOUNT: "1232324343434",
            },
          ],
        },
        {
          title: "人员列表",
          type: "LIST",
          key: [
            {
              paraKey: "NAME",
              paraName: "姓名",
              seq: 1,
            },
            {
              paraKey: "AGE",
              paraName: "年龄",
              seq: 2,
            },
            {
              paraKey: "HOBBIES",
              paraName: "爱好",
              seq: 3,
            },
          ],
          value: [
            {
              NAME: "20211101",
              AGE: "123",
              HOBBIES: "篮球",
            },
            {
              NAME: "1323123123",
              AGE: "23",
              HOBBIES: "足球",
            },
            {
              NAME: "20211101",
              AGE: "56",
              HOBBIES: "跑步",
            },
          ],
        },
      ];
        data = res.data;
      })
      .catch((err) => {})
      .finally();
  };
  //骚操作之方法绑定到变量上
  const format = (data) => {
    let columns = [];
    let list = data
    list.forEach(item=>{
      {
        title:item.paraName,
        dataIndex：item.paraKey,
        key:item.paraKey
      }
    })
  };
</script>
```
