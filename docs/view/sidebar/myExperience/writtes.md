# 手写系列

[[toc]]

### 手写 new

```js
function myNew() {
  // 1.用new Object() 的方式新建了一个对象 obj
  const obj = new Object();
  // 2.取出第一个参数，就是我们要传入的构造函数。此外因为 shift 会修改原数组，所以 arguments 会被去除第一个参数
  const constructor = [].shift.call(arguments);
  // 3.将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性
  obj.__proto__ = constructor.prototype;
  // 4.使用 apply执行构造函数，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
  const res = constructor.apply(obj, arguments);
  // 5.因为构造函数可能有返回值, 且返回值只有引用类型才能生效 返回
  return typeof res === "object" ? res : obj;
}
```

### 手写 call

```js
Function.prototype.myCall = function (context) {
  // this 参数可以传 null，当为 null 的时候，视为指向 window
  context = context || window;
  // 将函数设为对象的属性
  context.fn = this;
  // 获取函数的参数
  // call 是 ES3 的方法，用 eval 方法拼成一个函数
  var args = [];
  for (var i = 1; i < arguments.length; i++) {
    args.push("arguments[" + i + "]");
  }
  // 执行函数 context.fn()
  // 这里 args 会自动调用 Array.toString() 这个方法。
  var result = eval("context.fn(" + args + ")");
  // 删除该函数
  delete context.fn;
  // 返回值
  return result;
};
```

### 手写 apply

```js
Function.prototype.myApply = function (context, arr) {
  // this 参数可以传 null，当为 null 的时候，视为指向 window
  context = context || window;
  // 将函数设为对象的属性
  context.fn = this;
  // 获取函数的参数
  arr = arr.length ? arr : [];
  var args = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    args.push("arr[" + i + "]");
  }
  // 执行函数 context.fn()
  // 这里 args 会自动调用 Array.toString() 这个方法。
  var result = eval("context.fn(" + args + ")");
  // 删除该函数
  delete context.fn;
  // 返回值
  return result;
};
```

### 手写 bind

```js
Function.prototype.myBind = function (context) {
  // 绑定的必须是函数
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - 尝试被绑定的对象是不可调用的");
  }
  // 获取执行函数
  var self = this;
  // 获取myBind函数从第二个参数到最后一个参数
  var args = Array.prototype.slice.call(arguments, 1);
  // 空函数 用来中转
  var fNOP = function () {};

  // bind返回的函数也可以传入参数，因此要将两次的参数合并起来
  // bind返回的函数可以作为构造函数，此时bind绑定的this会失效，但传入的参数依然生效
  var fBound = function () {
    // 这个时候的arguments是指bind返回的函数传入的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    // this instanceof fNOP 如果为true 则此时是将bind返回的函数当做构造函数使用，即 new fBound(), 将绑定函数的 this 指向该实例
    // this instanceof fNOP 如果为false, 则作为普通函数时，this 指向 window，将绑定函数的 this 指向 context
    // args.concat(bindArgs) 将参数拼接
    return self.apply(
      this instanceof fNOP ? this : context,
      args.concat(bindArgs)
    );
  };
  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
  // 这里不直接使用 fBound.prototype = this.prototype 原因是修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype
  // 这个时候，我们可以通过一个空函数来进行中转
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  // 返回
  return fBound;
};
```

### 手写 Promise

```js
class Promise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    let resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };
    let reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };
    let promise2 = new Promise((resolve, reject) => {
      if (this.state === "fulfilled") {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.state === "rejected") {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.state === "pending") {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      }
    });
    return promise2;
  }
  catch(fn) {
    return this.then(null, fn);
  }
}
function resolvePromise(promise2, x, resolve, reject) {
  if (x === promise2) {
    return reject(new TypeError("Chaining cycle detected for promise"));
  }
  let called;
  if (x != null && (typeof x === "object" || typeof x === "function")) {
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (err) => {
            if (called) return;
            called = true;
            reject(err);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}
//resolve方法
Promise.resolve = function (val) {
  return new Promise((resolve, reject) => {
    resolve(val);
  });
};
//reject方法
Promise.reject = function (val) {
  return new Promise((resolve, reject) => {
    reject(val);
  });
};
//race方法
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject);
    }
  });
};
//all方法(获取所有的promise，都执行then，把结果放到数组，一起返回)
Promise.all = function (promises) {
  let arr = [];
  let i = 0;
  function processData(index, data) {
    arr[index] = data;
    i++;
    if (i == promises.length) {
      resolve(arr);
    }
  }
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then((data) => {
        processData(i, data);
      }, reject);
    }
  });
};
```

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
    if (baseUrls.length === 0) {   //如果urls的长度为0 return
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
        request();//每次完成一个请求调用一次接口
      }
    }
    const times = Math.min(maxNum, baseUrls.length);//第一次调用的最大并发数量
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
