# 算法
[[toc]]

### ArrayList 去重
```js
// 原数据是这样的
const arraylist = [
  {
    goodsId: "1",
    quota: 12,
    skuId: "1",
  },
  {
    goodsId: "2",
    quota: 12,
    skuId: "2",
  },
  {
    goodsId: "1",
    quota: 12,
    skuId: "1",
  },
];
```

```js
function unique(arr=[]){
    const newArr=[]
    arr.forEach((item)=>{
        if(typeof item!='object'&&item!=null){
             const empty=newArr.filter(item2=>{
            return JSON.stringify(item)===JSON.stringify(item2)
         })
         if(empty.length===0){
            newArr.push(item)
         }
        }
    }
    return newArr
}
unique(arraylist);
```

方法 2

```js
function filterArrays(arr = []) {
  let newArr = [];
  arr.forEach((item) => {
    const str = JSON.stringify(item);
    const strArr = JSON.stringify(newArr);
    if (!strArr.includes(str)) {
      newArr.push(item);
    }
  });
}
```

```js
function array_unique(arr) {
  let len = arr.length;
  if (!len) {
    return [];
  }
  let tmp = [];
  for (let i = 0; i < len; i++) {
    if (
      tmp.findIndex((v) => {
        return JSON.stringify(v) === JSON.stringify(arr[i]);
      }) === -1
    ) {
      tmp.push(arr[i]);
    }
  }
  return tmp;
}
let arr = [
  1,
  2,
  3,
  4,
  "1",
  2,
  undefined,
  undefined,
  "undefined",
  NaN,
  NaN,
  {},
  {},
  { a: 1 },
  { a: 1 },
];
let newArr = array_unique(arr);
console.log(newArr);
```

### 使用 Promise 实现每隔 1 秒输出 1,2,3

这道题比较简单的一种做法是可以用 Promise 配合着 reduce 不停的在 promise 后面叠加.then，请看下面的代码：

```js
const arr = [1, 2, 3];
arr.reduce((p, x) => {
  return p.then(() => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(console.log(x)), 1000);
    });
  });
}, Promise.resolve());
```

### 使用 Promise 实现红绿灯交替重复亮

红灯 3 秒亮一次，黄灯 2 秒亮一次，绿灯 1 秒亮一次；如何让三个灯不断交替重复亮灯？（用 Promise 实现）三个亮灯函数已经存在：

```js
function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}
////////////////////////////////////////////////
const light = function (timer, cb) {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb();
      resolve();
    }, timer);
  });
};
const step = function () {
  Promise.resolve()
    .then(() => {
      return light(3000, red);
    })
    .then(() => {
      return light(2000, green);
    })
    .then(() => {
      return light(1000, yellow);
    })
    .then(() => {
      return step();
    });
};

step();
```

### ArrayListToTree

```javascript
const tree = [
  { id: 1001, pid: 0, name: "AA" },
  { id: 1002, pid: 1001, name: "BB" },
  { id: 1003, pid: 1001, name: "CC" },
  { id: 1004, pid: 1003, name: "DD" },
  { id: 1005, pid: 1003, name: "EE" },
  { id: 1006, pid: 1002, name: "FF" },
  { id: 1007, pid: 1002, name: "GG" },
  { id: 1008, pid: 1004, name: "HH" },
  { id: 1009, pid: 1005, name: "II" },
];

function ListToTree(arr) {
  let data = arr.filter((p) => {
    p.children = arr.filter((c) => {
      return p.id == c.pid;
    });
    return !item.pid;
  });
  return data;
}
```

### 考察 Promise

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 stop");
}

async function async2() {
  console.log("async2");
}
console.log("script start"); //1
setTimeout(function () {
  console.log("setTimeout");
}, 0);
async1();

new Promise((resolve) => {
  console.log("promise1");
  resolve();
  console.log("promise2");
}).then(function () {
  console.log("promise3");
});
console.log("script end");
//script start
//async1 start
//async2
//promise1
//promise2
//script end
//async1 stop
//promise3
//setTimeout
```

题 2

```javascript
console.log("script start");
async function async1() {
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2 start");
  return Promise.resolve().then(() => {
    console.log("async2 end");
  });
}
async1();

setTimeout(function () {
  console.log("setTimeout");
}, 0);

new Promise((resolve) => {
  console.log("Promise");
  resolve();
})
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  })
  .then(function () {
    console.log("promise3");
  })
  .then(function () {
    console.log("promise4");
  });
console.log("script end");
//script start
//async2 start
//Promise
//script end
//async2 end
//promise1
//promise2
//promise3
//async1 end
//setTimeout
```

#2 个数组对象合并相同的 key

```javascript
function mergeArrayObjects(array1, array2, key) {
  const mergedArray = array1.reduce((result, obj) => {
    const existingObj = result.find((item) => item[key] === obj[key]);
    if (existingObj) {
      Object.assign(existingObj, obj); // 合并对象属性
    } else {
      result.push(obj); // 如果不存在，则将当前对象添加到结果数组中
    }
    return result;
  }, array2.slice());

  return mergedArray;
}

function mergeArrays(array1, array2, key) {
  return array1.map((item) => {
    const same = array2.filter((item2) => item[key] === item2[key]);
    return same[0] ? Object.assgin(item, same[0]) : item;
  });
}

// 示例数据
const array1 = [
  { id: 1, name: "Apple", price: 2 },
  { id: 2, name: "Banana", price: 3 },
  { id: 3, name: "Orange", price: 4 },
];

const array2 = [
  { id: 2, name: "Banana", quantity: 5 },
  { id: 3, name: "Orange", quantity: 3 },
  { id: 4, name: "Grape", quantity: 6 },
];

// 合并相同 id 值的数组对象
const mergedArray = mergeArrayObjects(array1, array2, "id");

console.log(mergedArray);

[
  { id: 1, name: "Apple", price: 2 },
  { id: 2, name: "Banana", price: 3, quantity: 5 },
  { id: 3, name: "Orange", price: 4, quantity: 3 },
  { id: 4, name: "Grape", quantity: 6 },
];
// 在上述示例中，mergeArrayObjects 函数接受三个参数：array1、array2 和 key。它使用 reduce 方法遍历 array1 中的每个对象，通过比较 key 属性值查找是否存在相同的对象。如果存在，则使用 Object.assign 方法合并对象的属性；如果不存在，则将当前对象添加到结果数组中。最后返回合并后的结果数组 mergedArray。请注意我们使用 .slice() 方法来创建 array2 的副本，以免对原始数组进行修改。
// 您可以根据具体的需求修改函数，以适应不同的属性和数据结构。
```

#### 数组转树

```javascript
function arrayToTree(
  array,
  idKey = "id",
  parentKey = "parentId",
  childrenKey = "children"
) {
  const treeMap = {};
  const result = [];

  // 构建节点映射表
  array.forEach((node) => {
    node[childrenKey] = [];
    treeMap[node[idKey]] = node;
  });

  // 构建树结构
  array.forEach((node) => {
    const parentValue = node[parentKey];
    if (parentValue !== null && treeMap[parentValue]) {
      treeMap[parentValue][childrenKey].push(node);
    } else {
      result.push(node);
    }
  });

  return result;
}

// 示例数组
const array = [
  { id: 1, name: "Root", parentId: null },
  { id: 2, name: "Child 1", parentId: 1 },
  { id: 3, name: "Child 2", parentId: 1 },
  { id: 4, name: "Grandchild 1", parentId: 2 },
  { id: 5, name: "Grandchild 2", parentId: 2 },
  { id: 6, name: "Grandchild 3", parentId: 3 },
];

// 转换数组为树结构
const tree = arrayToTree(array);

console.log(tree);
// 输出结果如下：
[
  {
    id: 1,
    name: "Root",
    parentId: null,
    children: [
      {
        id: 2,
        name: "Child 1",
        parentId: 1,
        children: [
          { id: 4, name: "Grandchild 1", parentId: 2, children: [] },
          { id: 5, name: "Grandchild 2", parentId: 2, children: [] },
        ],
      },
      {
        id: 3,
        name: "Child 2",
        parentId: 1,
        children: [{ id: 6, name: "Grandchild 3", parentId: 3, children: [] }],
      },
    ],
  },
];
```

### 树转数组

```javascript
function treeToArray(tree, childrenKey = "children") {
  const result = [];

  function flatten(node) {
    const flattenedNode = { ...node };
    if (flattenedNode[childrenKey]) {
      delete flattenedNode[childrenKey];
    }
    result.push(flattenedNode);

    if (node[childrenKey] && Array.isArray(node[childrenKey])) {
      node[childrenKey].forEach((child) => {
        flatten(child);
      });
    }
  }

  flatten(tree);

  return result;
}

// 示例树结构
const tree = {
  id: 1,
  name: "Root",
  children: [
    {
      id: 2,
      name: "Child 1",
      children: [
        {
          id: 4,
          name: "Grandchild 1",
        },
        {
          id: 5,
          name: "Grandchild 2",
        },
      ],
    },
    {
      id: 3,
      name: "Child 2",
      children: [
        {
          id: 6,
          name: "Grandchild 3",
        },
      ],
    },
  ],
};

// 转换树结构为数组
const array = treeToArray(tree);

console.log(array);

[
  { id: 1, name: "Root" },
  { id: 2, name: "Child 1" },
  { id: 4, name: "Grandchild 1" },
  { id: 5, name: "Grandchild 2" },
  { id: 3, name: "Child 2" },
  { id: 6, name: "Grandchild 3" },
];
```

### 控制请求并发数量

```javascript
const urls = [];
for (let i = 0; i <= 100; i++) {
  urls.push(`https:jsonplaceholder.typicode.com/todos/${i}`);
}

function concurRequest(baseUrls, maxNum) {
  //返回Promise
  return new Promise((resolve, reject) => {
    if (baseUrls.length === 0) {
      //如果urls的长度为0 return
      resolve([]);
      return;
    }
    //最后return的结果
    const results = [];

    let index = 0; //下一个请求的下标
    let count = 0; //当前请求的完成数量
    //发送请求函数
    async function request() {
      if (index === baseUrls.length) {
        return;
      }
      const i = index;
      const url = baseUrls[index];
      index++;
      try {
        const res = await fetch(url);
        results[i] = res;
      } catch (err) {
        results[i] = err;
      } finally {
        count++;
        if (count === baseUrls.length) {
          console.log("over");
          resolve(results);
        }
        request(); //每次完成一个请求调用一次接口
      }
    }
    const times = Math.min(maxNum, baseUrls.length); //第一次调用的最大并发数量
    for (let i = 0; i < times; i++) {
      request();
    }
    console.log(results);
  });
}

concurRequest(urls, 20).then((res) => {
  console.log(res);
});
```

# 按键映射

```javascript
/**
 *
 * @parmas { string } digits 数组按键 例如 '23'
 * @return {string[]} 按键的排列组合
 */

function keyboardMap(digits) {
  var map = [, , "abc", "def", "ghi", "jkl", "mmo", "pqrs", "tuv", "wzyz"];
  var result = [];
  for (var i = 0; i < digits.length; i++) {
    result = _compose(result, map[digits[i]]);
  }

  function _compose(arr1, arr2) {
    var r = [];
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;
    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        r.push(arr1[i] + arr2[j]);
      }
    }
    return r;
  }
  return result;
}
console.log(keyboardMap("23"));
```

### 验证回文串

```javascript
/**
 * 回文串 一个字符串忽略大小写和非字符数字 ,正在读反着读都是一样的
 * eg ：  A man  ,a plan , a canal :  Pan ama
 *
 */

var isPanlindrome = function (s) {
  const isValid = (c) => (c >= "a" && c <= "z") || (c >= "0" && c <= "9");
  let i = 0,
    j = s.length - 1;
  while (j >= i) {
    const left = s[i].toLowerCase(), //忽略大小写
      right = s[j].toLowerCase();
    if (!isValid(left)) {
      //不是有效的字符向右移
      i++;
    } else if (!isValid(right)) {
      //不是有效的字符向左移
      j--;
    } else if (left === right) {
      //相等都想中间移动
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true; //循环完了返回 true
};
```
### 最长回文串
```javascript
var longestPalindrome = function(s) {
     if( s.length < 2){
         return s   
     }else{
          let start = 0;
          let maxlength =1;
          function getHuiString(left,right){
              while(left>=0 && right < s.length && s[left] === s[right]){
                  if(right - left + 1 > maxlength){
                      maxlength = right - left + 1
                      start = left
                  }
                  left--;
                  right++;
              }  
          }
          for(var i=0;i<s.length;i++){
              getHuiString(i-1 , i+1)
              getHuiString(i,i+1)
          }
          return s.substring(start ,start+maxlength)
     }
};
```

### 统计相同字符串出险的次数
```javascript
function statisticsStringCount() {
    var str = 'aasccsdjsaasssdddaassdasdamxjkemdl'
    const reslut: reslut = {}
    for (var i = 0; i < str.length; i++) {
        if (reslut[str[i]]) {
            reslut[str[i]]++
        } else {
            reslut[str[i]] = 1
        }
    }
    return reslut
}
//更简单的方法
var str = 'aasccsdjsaasssdddaassdasdamxjkemdl'
const result = str.split('').reduce((acc, pre) =>(a[b]++ || (a[b] = 1),acc), {})
console.log(result)
```