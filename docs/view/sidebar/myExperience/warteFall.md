# 瀑布流布局的实现 



![atl wartefall_01](../../../../docs/.vuepress/public/images/wartefall_01.png)
```vue
<template>
  <div id="container" class="container">
    <img
      v-for="(item, index) in list"
      :key="item.topicid + index"
      :src="item.imgsrc"
      alt=""
    />
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { onMounted, ref, watch, nextTick } from "vue";

const list = ref<any>([]);

const getListData = () => {
  axios
    .get("https://c.m.163.com/nc/auto/list/6YOR5bee/0-100.html")
    .then((res) => {
      console.log(res.data.list, "xxxxxxxxxxxxxxxxxx");
      list.value = res.data.list;
    });
};
getListData();

function cal() {
  const divContainer: any = document.getElementById("container");
  const imgWidth = 220;
  //容器的宽度
  var containerWidth: any = divContainer?.clientWidth;
  console.log(containerWidth, "containerWidth");

  //计算列的数量
  var columns = Math.floor(containerWidth / imgWidth);
  console.log(columns, "columns");

  //计算间隙
  var spaceNumber = columns + 1;
  //计算剩余空间
  var leftSpace = containerWidth - columns * imgWidth;
  // 每个间隙的空间

  var space = leftSpace / spaceNumber;
  return {
    space,
    columns,
  };
}

//设置每张图片的位置
function setPoisions() {
  const divContainer: any = document.getElementById("container");
  const imgWidth = 220;
  var info = cal(); //得到列数和间隙的空间
  var nextTops = new Array(info.columns); // 该数组的长度为列数，每一项表示该列的下一个图片的纵坐标

  nextTops.fill(0); //将数组的每一项填充为0
   //加定时器是为了    
  setTimeout(() => {
    for (var i = 0; i < divContainer?.children.length; i++) {
    var img = divContainer.children[i];
    console.log(img,'img')
    //找到nextTops中最小的值作为当前图片的纵坐标
    var minTop = Math.min.apply(null, nextTops);
    console.log(minTop,'minTop')
    img.style.top = minTop + "px";
    //重新设置数组这一项的下一个top值
    var index = nextTops.indexOf(minTop); //得到得使用第几列top值
    nextTops[index] += img.height + info.space;
    //横坐标
    var left = (index + 1) * info.space + index * imgWidth;
    img.style.left = left + "px";
  }
  console.log(nextTops);
  var max = Math.max.apply(null, nextTops); //求最大值
  divContainer.style.height = max + "px"; //设置容器的高度
  }, 1000);
 
}

onMounted(() => {
  nextTick(() => {
    setPoisions();
  });
});
watch(
  () => list.value,
  (newV) => {
    console.log(newV, "newV");
  }
);
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  border: 2px solid;
  position: relative;
  img {
    position: absolute;
    width: 220px;
    transition: 0.3s;
  }
}
</style>

```

简单的实现瀑布流  还可以监听onresize方法 方法缩小时触发设置每张图片大小的位置 ， 别忘了加上防抖额 