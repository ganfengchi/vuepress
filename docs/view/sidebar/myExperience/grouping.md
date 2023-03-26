# 分组算法

### 利用对象的 key 不能重复进行分组

```js
let list = [
  {
    type: "目标1",
    name: "111",
  },
  {
    type: "目标1",
    name: "112",
  },
  {
    type: "目标2",
    name: "211",
  },
  {
    type: "目标2",
    name: "212",
  },
  {
    type: "目标2",
    name: "213",
  },
];

function gourping(list) {
  const cache = {};
  const targetlist = [];
  list.forEach((item) => {
    // 对象不能有相同的key
    cache[item.type] = cache[item.type] || [];
    cache[item.type].push(item);
  });
  for (let i in cache) {
    targetlist.push({
      type: i,
      children: cache[i],
    });
  }
  return targetlist;
}

console.log(gourping(list));
//结果
[
  ({
    type: "目标1",
    children: [
      {
        type: "目标1",
        name: "111",
      },
      {
        type: "目标1",
        name: "112",
      },
    ],
  },
  {
    type: "目标2",
    children: [
      {
        type: "目标2",
        name: "211",
      },
      {
        type: "目标2",
        name: "212",
      },
      {
        type: "目标2",
        name: "213",
      },
    ],
  }),
];
```

```js
var arr = [
  { id: "1001", name: "值1", value: "111" },
  { id: "1001", name: "值1", value: "11111" },
  { id: "1002", name: "值2", value: "25462" },
  { id: "1002", name: "值2", value: "23131" },
  { id: "1002", name: "值2", value: "2315432" },
  { id: "1003", name: "值3", value: "333333" },
];

var map = {},
  dest = [];
for (var i = 0; i < arr.length; i++) {
  var ai = arr[i];
  if (!map[ai.id]) {
    dest.push({
      id: ai.id,
      name: ai.name,
      data: [ai],
    });
    map[ai.id] = ai;
  } else {
    for (var j = 0; j < dest.length; j++) {
      var dj = dest[j];
      if (dj.id == ai.id) {
        dj.data.push(ai);
        break;
      }
    }
  }
}
console.log(dest);
//结果
[
  {
    id: "1001",
    name: "值1",
    data: [
      {
        id: "1001",
        name: "值1",
        value: "111",
      },
      {
        id: "1001",
        name: "值1",
        value: "11111",
      },
    ],
  },
  {
    id: "1002",
    name: "值2",
    data: [
      {
        id: "1002",
        name: "值2",
        value: "25462",
      },
      {
        id: "1002",
        name: "值2",
        value: "23131",
      },
      {
        id: "1002",
        name: "值2",
        value: "2315432",
      },
    ],
  },
  {
    id: "1003",
    name: "值3",
    data: [
      {
        id: "1003",
        name: "值3",
        value: "333333",
      },
    ],
  },
];
```
