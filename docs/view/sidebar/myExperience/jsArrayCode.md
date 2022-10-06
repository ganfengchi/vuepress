# JavaScript Array 奇技淫巧

数组常用方法

![alt 01](../../../../docs/.vuepress/public/images/Array_01.png)
![alt 02](../../../../docs/.vuepress/public/images/Array_02.png)
[[toc]]

### 1.1 求和

方法一：Array.prototype.forEach()

```js
var total = 0;
[1, 2, 3].forEach(function (num) {
  total += num;
});
```

方法二：Array.prototype.reduce()

```js
var total = [1, 2, 3].reduce(function (sum, current) {
  return sum + current;
}, 0);
```

### 1.2 排序

方法一：sort()
// 默认是升序

```js
[1, 2, 3, 4].sort((a, b) => a - b); // [1, 2, 3, 4]
// 降序
[1, 2, 3, 4].sort((a, b) => b - a); // [4, 3, 2, 1]
```

方法二：排序算法
![alt 03](../../../../docs/.vuepress/public/images/Array_03.png)

### 1.3 取最大值

方法一：Math.max()

```js
Math.max(); // -Infinity，即 -∞

Math.max(Infinity, -Infinity); // Infinity，即 ∞

Math.max(...[1, 2, 3, 4]); // 4

Math.max
  .apply(this, [1, 2, 3, 4]) // 4

  [(1, 2, 3, 4)].reduce((prev, cur, curIndex, arr) => {
    return Math.max(prev, cur);
  }, 0); // 4
```

### 1.4 判断是否包含某值

方法一：Array.includes()

```js
[7, 8, 9].includes(4); // false
```

方法二：Array.indexOf()

```js
[7, 8, 9]
  .indexOf(4) // -1 如果存在返回索引
  [(7, 8, 9)].indexOf(9); // 2
```

方法三：Array.find()
如果数组中无值返回 undefined

```js
[7, 8, 9]
  .find((item) => item === 4) // undefined
  [(7, 8, 9)].find((item) => item === 9); // 9
```

方法四：Array.findIndex()
如果数组中无值返回-1

```js
[7, 8, 9]
  .findIndex((item) => item === 4) // -1
  [(7, 8, 9)].findIndex((item) => item === 9); // 2
```

### 1.5 某一项设置值

方法一：Array.splice()

```js
arr = ["aaa", "bbbb", "cccc", "dddd"];
arr.splice(3, 0, 3);
arr; // ['aaa', 'bbbb', 'cccc', 3, 'dddd']
```

1.6 每一项设置值
方法一：Array.fill()

```js
[7, 8, 9, 10, 11, 12]
  .fill() // [undefined, undefined, undefined, undefined, undefined, undefined]
  [(7, 8, 9, 10, 11, 12)].fill(7) // [7, 7, 7, 7, 7, 7]
  [(7, 8, 9, 10, 11, 12)].fill(3, 2, 4); // [7, 8, 3, 3, 11, 12]
```

方法二：Array.map()

```js
[7, 8, 9]
  .map((item, idx) => item % 2) // [1, 0, 1]
  [(7, 8, 9)].map((item, idx) => idx); // [0, 1, 2]
```

1.7 每一项是否满足
方法一：Array.every()

```js
[1, 2, 3].every((item) => {
  return item > 2;
}); //false
```

1.8 有一项满足
方法一：Array.some()

```js
[1, 2, 3].some((item) => {
  return item > 2;
}); //true
```

贰。番外篇

### 2.1 重写 Array .prototype. at()

```js
// 兼容老浏览器的 MDN polyfill
// 注释：Polyfill 是一块代码（通常是 Web 上的 JavaScript），用来为旧浏览器提供它没有原生支持的较新的功能。
if (Array.prototype.at) {
  Array.prototype.at = function (idx) {
    return this[this.length + idx];
  };
}
arr = ["aaa", "bbbb", "cccc", "dddd"];
arr.at(-1); // 'dddd'
arr.at(-3); // 'bbbb'
```

### 2.2 清空数组

方法一：Array.length
最快

```js
arr = ["aaa", "bbbb", "cccc", "dddd"];
arr1 = arr;
arr; // ['aaa', 'bbbb', 'cccc', 'dddd']
arr1; // ['aaa', 'bbbb', 'cccc', 'dddd']

arr.length = 0; // 0

arr; // []
// 被引用的数组，也会被清空
arr1; // []
```

方法二：Array.splice()

```js
arr = ["aaa", "bbbb", "cccc", "dddd"];
arr1 = arr;

arr.splice(0); // ['aaa', 'bbbb', 'cccc', 'dddd']

arr; // []
// 同上，被引用的也会被清空
arr1; // []
```

方法三：直接赋予新数组[]
最慢，且占用内存

```js
arr = ["aaa", "bbbb", "cccc", "dddd"];
arr1 = arr;

arr = []; // []

arr; // []
// 被引用的数组，不会被清空
arr1; // ['aaa', 'bbbb', 'cccc', 'dddd']
```

### 2.3 扁平化

```js
const arr = [1, [2, [3, [4, 5]]], 6];
// => [1, 2, 3, 4, 5, 6]
```

方法一：Array.prototype.flat()

```js
const res1 = arr.flat(Infinity);
```

方法二：new RegExp()

```js
// 缺点：都会变成字符串
const res2 = JSON.stringify(arr).replace(/\[|\]/g, "").split(",");
// 改良版
const res3 = JSON.parse("[" + JSON.stringify(arr).replace(/\[|\]/g, "") + "]");
```

方法三：Array.prototype.reduce()

```js
const flatten = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
};
const res4 = flatten(arr);
```

方法四：函数递归

```js
const res5 = [];
const fn = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      fn(arr[i]);
    } else {
      res5.push(arr[i]);
    }
  }
};
fn(arr);
```

方法五：while() + some()

```js
function flatten(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
```

### 2.4 合并

方法一：Array.push()

```js
const arr = ["aaa", "bbbb", "cccc", "dddd"];
arr.push(1, 2, 3, [4, 5, 6]); // 8
arr; // ['aaa', 'bbbb', 'cccc', 'dddd', 1, 2, 3, Array(3)]
```

方法二：Array.concat()

```js
arr.concat([1, 2, 3], [4, 5, 6]); // ['aaa', 'bbbb', 'cccc', 'dddd', 1, 2, 3, 4, 5, 6]
arr; // ['aaa', 'bbbb', 'cccc', 'dddd']
```

方法二：扩展运算符

```js
[...[1, 2, 3, 4], ...[4, 5]]; //[1,2,3,4,5,6]
```

### 2.5 去重

```js
const arr = [1, 1, "1", 17, true, true, false, false, "true", "a", {}, {}];
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]
```

方法一：new Set()

```js
const arr1 = Array.from(new Set(arr));
// 或
const arr1 = [...new Set(arr)];

// 是 Set 类型，不是 Array 类型
Object.prototype.toString.call(new Set(arr)); // '[object Set]'
```

方法二：filter() + indexOf()

```js
const arr2 = (arr) => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
};
```

方法三：new Map()

```js
const arr3 = (arr) => {
  const map = new Map();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true);
      res.push(arr[i]);
    }
  }
  return res;
};
```

方法四：includes()

```js
const arr4 = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) res.push(arr[i]);
  }
  return res;
};
```

### 2.6 交集

方法一：new Set()

```js
const one = [0, 2, 4, 6, 8, 8];
const two = [1, 2, 3, 4, 5, 6];
const duplicated = [...new Set(one)].filter((v) => two.includes(v)); // [2, 4, 6]
```

### 2.7 删除虚值

方法一：Array.prototype.filter()

```js
const arr = [0, "blue", "", NaN, 9, true, undefined, "while", false];
const real = arr.filter(Boolean); // ['blue', 9, true, 'while']
```

### 2.8 重组（变量交换）

方法一：解构赋值

```js
arr = ['aaa', 'bbbb', 'cccc', 'dddd', 'eee', 'fff']
[arr[1], arr[2]] = [arr[2], arr[1]] // ['cccc', 'bbbb']
arr // ['aaa', 'cccc', 'bbbb', 'dddd']

// 如果想获取单个值
[a, , , e, f] = arr
a // 'aaa'
e // 'dddd'
f // 'eee'
```

方法二：Array.splice()

```js
arr = ["aaa", "bbbb", "cccc", "dddd", "eee", "fff", "ggg", "hhh", "iii"];
arr.splice(1, 3, ...arr.splice(4, 4, arr[1], arr[2], arr[3])); // ['bbbb', 'cccc', 'dddd']
arr; // ['aaa', 'eee', 'fff', 'ggg', 'hhh', 'bbbb', 'cccc', 'dddd', 'iii']
```

方法三：引入中转变量

```js
temp = arr[1];
arr[1] = arr[2];
arr[2] = temp;
```

### 2.9 类数组 --> 数组

// 类数组（包含 length 属性，比如 arguments、DOM 操作方法返回的结果等）

```js
const asArr = { 0: "aaa", 1: "bbb", 二: "ccc", 4: "eee", length: 6 };
```

方法一：Array.prototype.from()

```js
Array.from(asArr);
// => ['aaa', 'bbb', undefined, undefined, 'eee', undefined]
// undefined 可枚举
```

方法二：Array.prototype.slice.call()

```js
Array.prototype.slice.call(asArr)
// => ['aaa', 'bbb', empty × 2, 'eee', empty]
// empty 不可枚举
PS：其他产生 empty 的情况
// 也会产生 empty 空位，不会改变 length 属性
delete arr[2]
// 直接删掉元素，且改变 length 属性
arr.splice(2, 1)
```

方法三：扩展运算符

```js
[...document.querySelectorAll("div")];
```

### 2.10 数组 --> 对象

方法一：扩展运算符

```js
arr = ['aaa', 'bbbb', 'cccc', 'dddd']
// ['aaa', 'bbbb', 'cccc', 'dddd']
{ ...arr }
// {0: 'aaa', 1: 'bbbb', 2: 'cccc', 3: 'dddd'}
```

方法二：while()

```js
i = 0;
s = {};
arr = ["aaa", "bbbb", "cccc", "dddd"];

while (arr[i]) {
  s[i] = arr[i++];
}

s; // {0: 'aaa', 1: 'bbbb', 2: 'cccc', 3: 'dddd'}
```

方法三：Object.fromEntries()

```js
Object.keys({ name: "张三", age: 14 }); // ['name','age']
Object.values({ name: "张三", age: 14 }); // ['张三',14]
Object.entries({ name: "张三", age: 14 }); // [[name,'张三'],[age,14]]
Object.fromEntries([name, "张三"], [age, 14]); // ES10的api,Chrome不支持, firebox输出{name:'张三',age:14}
```

### 2.11 浅拷贝

方法一：Array.slice()

```js
arr = ["aaa", "bbbb", "cccc", "dddd"];
arr1 = arr.slice(0);
arr[1] = 2333; // 2333
arr; // ['aaa', 2333, 'cccc', 'dddd']
arr1; // ['aaa', 'bbbb', 'cccc', 'dddd']
```

方法二：展开操作符

```js
arr = ["aaa", "bbbb", "cccc", "dddd"];
arr1 = [...arr];
arr[1] = 2333; // 2333
arr; // ['aaa', 2333, 'cccc', 'dddd']
arr1; // ['aaa', 'bbbb', 'cccc', 'dddd']
```

方法三：Array.concat()

```js
arr = ["aaa", "bbbb", "cccc", "dddd"];
arr1 = [].concat(array);
arr[1] = 2333; // 2333
arr; // ['aaa', 2333, 'cccc', 'dddd']
arr1; // ['aaa', 'bbbb', 'cccc', 'dddd']
```

方法四：直接赋值

```js
arr = ["aaa", "bbbb", "cccc", "dddd"];
arr1 = arr;
arr[1] = 2333; // 2333
arr; // ['aaa', 2333, 'cccc', 'dddd']
arr1; // ['aaa', 2333, 'cccc', 'dddd']
```

### 2.12 Array.from 达到 .map 的效果

```js
arr = [
  { name: "张三", age: 18 },
  { name: "李四", age: 18 },
  { name: "王麻子", age: 18 },
  { name: "小六", age: 18 },
];
nameMap = arr.map((v) => v.name); // ['张三', '李四', '王麻子', '小六']
nameMap = Array.from(arr, ({ name }) => name); // ['张三', '李四', '王麻子', '小六']
```

### 2.13 获取最后 n 个元素

方法一：Array.splice()

```js
arr = ["aaa", "bbbb", "cccc", "dddd"];

arr.slice().splice(-1); // ['dddd']
arr.slice().splice(-3); // 'bbbb', 'cccc', 'dddd'
```

### 2.233 二维数组绘制图形

方法一：Emmm
// Emmmm

弎。循环的性能与小优化
优化一：优化 for 循环

当循环复杂度为 O(n) 时，减少每次迭代的工作量是最有效的方法。
当复杂度大于 O(n) 时，建议着重减少迭代次数。

a. 减少每次取 length 的次数
这样避免了每次执行循环都要先去找 array.length

```js
for (let i = 0; i < array.length; i++) {
  console.log(i); // 0 1 2
}
```

```js
// 优化后
for (let i = 0, len = array.length; i < len; i++) {
  console.log(i); // 0 1 2
  // do sth...
}
```

b. 倒序循环

```js
for (let i = array.length; i > 0; i--) {
  console.log(i); // 3 2 1
}

// 优化后
for (let i = array.length - 1; i >= 0; i--) {
  console.log(i); // 2 1 0
}

// 优化后
for (let i = array.length; i--; ) {
  console.log(i); // 2 1 0
  // do sth...
}
```

优化二：不要使用 for-in 来遍历数组
在 JavaScript 提供的循环类型中，只有 for-in 循环比其他几种明显要慢。
由于每次迭代操作会同时搜索实例或原型属性，for-in 循环的每次迭代都会产生更多开销，所以比其他循环类型要慢。
因此，除非你明确需要迭代一个属性数量未知的对象，否则应避免使用 for-in 循环。
优化三：慎用基于函数的迭代
例如：forEach
基于函数的迭代提供了一个更为便利的迭代方法，但它仍然比基于循环的迭代要慢一些。对每个数组调用外部方法所带来的开销是速度慢的主要原因。在所有情况下，基于循环的迭代比基于函数的迭代快 8 倍，因此在运行速度要求严格时，基于函数的迭代不是更好的选择。
优化四：尽量使用 switch-case 条件语句
除非在非真既假的判断中，其余条件判断时多用 switch-case 语句，少用 if/else-if/else 语句。原因如下：

支持关联操作，即不写 break 语句
本质是汇编时生成的跳转表来指示 case 的地址，所以每一个 case 的执行时间基本是相同的，执行效率不会受先后顺序的影响
代码更清晰，可读性和可维护性要高很多

优化五：查找表
当有大量离散数据的时候，使用查找表比使用 if-else 和 switch-case 快得多。

```js
// 将返回值集合存入数组
const results = [result0, result1, result2, result3, result4];
// 返回结果
return results[value];
```

肆。课外题
箭头函数的输出

```js
var func1 = (x) => x;
func1(2); // 2
var func2 = (x) => {
  x;
};
func2(2); // undefined
var func3 = (x) => ({ x });
func3(); // {x: undefined}
func3(2); // {x: 2}
```
