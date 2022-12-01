# 面试真题
字节跳动
实现一个栈数据结构，接口中实现以下 4 个函数
1. 据进栈
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
const oldArr = [  1,  [    2, [3],
    [4, 5, 6],
    [7, 8, 9],
    10,
    11,
  ],
  12,
  13,
  14,
  [15, 16, 17],
];

const newArr = []
function flat(arr) {
    arr.forEach(item=>{
       if(Array.isArray(item)){
           flat(item)
       }else{
           newArr.push(item)
       }
    })
}
flat(oldArr,newArr)
console.log(newArr);
```
字节跳动
请写出下面代码运行时输出的信息，并解释原因
```js
function A(){
    let person = {
        name: "张三",
        age: 10,
        getName: function() {
            console.log(this.name);
        },
        getAge: () => {
            console.log(this.age);  
        }
    }
    return person;
}
function B(){
    this.name = "李四";
    this.age = 20;
}

// 以下每一行代码执行，会输出什么内容
A().getName()//张三
A().getAge()//undefined
B() //执行B函数的this.age 指向window
A().getName()//张三
A().getAge()//20
```