# 面试真题

字节跳动
实现一个栈数据结构，接口中实现以下 4 个函数

1. in:数据据进栈
2. out: 数据出栈
3. top: 返回栈顶的数据
4. size: 返回栈数据的长度

```js
class Stack {
  constructor() {
    this.stackArr = [];
  }
  in(value) {
    // 数据进栈
    // todo: 你的代码
    return this.stackArr.push(value);
  }
  out() {
    // 数据出栈
    // todo: 你的代码
    if (this.size <= 0) return null;
    return this.stackArr.pop();
  }
  top() {
    // 返回栈顶的数据
    // todo: 你的代码
    if (this.size <= 0) return null;
    return this.stackArr[this.size() - 1];
  }
  size() {
    // 返回栈数据的长度
    // todo: 你的代码
    return this.stackArr.length;
  }
}

// 要求当执行下列代码时，能输出预期的结果
const stack = new Stack();
stack.in("x");
stack.in("y");
stack.in("z");

stack.top(); // 输出 'z'
stack.size(); // 输出 3

stack.out(); // 输出 'z'
stack.top(); // 输出 'y'
stack.size(); // 输出 2
```

字节跳动
数组平铺，实现一个函数，将数组中的数组打平成一维数组

```javascript
/**
  eg：input: [[5, 7, 4], 3, [89, [8, 9]]]
      ouput: [5, 7, 4, 3, 89, 8, 9] 
**/

// 不可以使用 Array.prototype.flat() 来实现
const oldArr = [
  1,
  [2, [3], [4, 5, 6], [7, 8, 9], 10, 11],
  12,
  13,
  14,
  [15, 16, 17],
];

const newArr = [];
function flat(arr) {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flat(item);
    } else {
      newArr.push(item);
    }
  });
}
flat(oldArr, newArr);
console.log(newArr);
```

字节跳动
请写出下面代码运行时输出的信息，并解释原因

```js
function A() {
  let person = {
    name: "张三",
    age: 10,
    getName: function () {
      console.log(this.name);
    },
    getAge: () => {
      console.log(this.age);
    },
  };
  return person;
}
function B() {
  this.name = "李四";
  this.age = 20;
}

// 以下每一行代码执行，会输出什么内容
A().getName(); //张三
A().getAge(); //undefined
B(); //执行B函数的this.age 指向window
A().getName(); //张三
A().getAge(); //20
```

字节面试题

```js
// 发布订阅模式
class EventEmitter {
  constructor() {
    // 事件对象，存放订阅的名字和事件
    this.events = {};
  }
  // 订阅事件的方法
  on(eventName, callback) {
    if (!this.events[eventName]) {
      // 注意时数据，一个名字可以订阅多个事件函数
      this.events[eventName] = [callback];
    } else {
      // 存在则push到指定数组的尾部保存
      this.events[eventName].push(callback);
    }
  }
  // 触发事件的方法
  emit(eventName) {
    // 遍历执行所有订阅的事件
    this.events[eventName] && this.events[eventName].forEach((cb) => cb());
  }
  // 移除订阅事件
  removeListener(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        (cb) => cb != callback
      );
    }
  }
  // 只执行一次订阅的事件，然后移除
  once(eventName, callback) {
    // 绑定的时fn, 执行的时候会触发fn函数
    let fn = () => {
      callback(); // fn函数中调用原有的callback
      this.removeListener(eventName, fn); // 删除fn, 再次执行的时候之后执行一次
    };
    this.on(eventName, fn);
  }
}
```

```js
//字节真题
//树的每一个节点包含了 id 和 label 字段，实现一个函数，输入关键字 searchKey，用于树节点 label 的匹配，查找 searchKey 对应树节点的 id，如果查找不到则返回 null
// 树结构 nodes = [node, node, node , ...]
// 节点  node = { id, label, children: [node, node] }
// 如果是叶子节点， children = undefined

function searchTree(nodes, searchKey) {
  for (let _i = 0; _i < nodes.length; _i++) {
    if (nodes[_i].label === searchKey) {
      return nodes[_i].id;
    } else {
      if (nodes[_i].children && nodes[_i].children.length > 0) {
        let res = searchTree(nodes[_i].children, searchKey);
        if (res) {
          return res;
        }
      }
    }
  }
  return null;
}
```

```js
//(a==1&&a==2&&a==3)

let _a = 1;
Object.defineProperty(window, "a", {
  get: function () {
    return _a++;
  },
});
if (a == 1 && a == 2 && a == 3) {
  console.log("hello world");
}

let a = new Proxy(
  { i: 1 },
  {
    get: function (target) {
      return () => target.i++;
    },
  }
);
if (a == 1 && a == 2 && a == 3) {
  console.log("hello world");
}
```
