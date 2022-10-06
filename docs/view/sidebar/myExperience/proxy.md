# Proxy

[[toc]]

### 为什么需要 Proxy

回想一下在 ES6 之前，是如何监听对象的操作呢？

通过 Object.defineProperty() 来实现的。

### 回顾 Object.defineProperty

Object.defineProperty() 是干什么？ 该方法用来精确控制对象的属性的。也被称为属性描述符。

属性描述符分为两种：

- 1. 数据属性描述符（writable，value）
- 2. 存取属性描述符（get，set）

```js
 // 数据属性描述符
 const obj = {};
 Object.defineProperty(obj, "name", {
   writable: true,
   configurable: true,
   enumerable: true,
   value: "copyer",
 });
 ​
 // 存取属性描述符
 const obj = { _name: "copyer" };
 Object.defineProperty(obj, "name", {
   configurable: true,
   enumerable: true,
   get: function () {
     console.log("进入getter操作");
     return this._name;
   },
   set: function (newValue) {
     console.log("进入setter操作");
     this._name = newValue;
   },
 });
```

::: danger
从上面的代码就可以看出，get/set 与 writable/value 是不能共存的。
:::

### Object.defineProperty 监听

监听对象的操作：获取和设置

```js
 const obj = {
   name: "copyer",
   age: 18,
 };
 ​
 Object.keys(obj).forEach((key) => {
   let value = obj[key];
   Object.defineProperty(obj, key, {
     configurable: true,
     enumerable: true,
     get: function () {
       console.log("监听操作：getter");
       return value;
     },
     set: function (newValue) {
       console.log("监听操作：setter");
       // obj[key] = value;
       // 这一步，犯错了，不停的触发setter操作，还是多练习，才知道自己的不足啊
       value = newValue;
     },
   });
 });
 ​
 obj.name = "kobe";
 console.log(obj.name)
```
::: tip 结论
结论
使用 Object.defineProperty 的方法可以实现监听，进行逻辑操作（在getter和setter中进行），那么这种方式有什么不好吗？

1. 改变了 Object.defineProperty的初衷，其初衷仅仅只是对象属性的描述符进行设置，现在在里面进行逻辑操作。
2. 改变了属性的描述符。从默认的数据属性描述符转变成了存取属性描述符了，改变了属性的本意。
3. 拦截的对象操作有限，只能对获取和设置进行拦截，其他操作（删除等）就无能为力了。<br/>
那么，Proxy就诞生了，出现的目的就是为了解决上面的一些列问题。
:::

### Proxy的基本使用
在 ES6 中新增了一个Proxy类，从名字就可以看出，帮助我们创建一个代理的。<br/>
简单的来说，监听对一个对象的操作，可以先创建一个代理对象（Proxy对象）。<br/>
之后对该对象的操作，都是通过对代理对象操作来完成的，代理对象可以监听了对原来对象进行了哪些的操作，进行捕捉。<br/>
语法解析
```js
new Proxy(target, handler)

// target: 目标对象
// handler： 捕捉器（进行拦截操作）
```
```js
 const obj = {
   name: "copyer",
   age: 12,
 };
 ​
 const objProxy = new Proxy(obj, {});
 // objProxy 就是代理对象
 console.log(objProxy); //
```
其实用法还是很简单的。痛苦的地方就在于它有太多的捕捉器，高达13种。
## Proxy的13种捕捉器

### 1、get 捕捉器（常用）
```js
获取值的捕捉器
 const obj = {
    name: "copyer",
    age: 12,
 };
 ​
 const objProxy = new Proxy(obj, {
     /**
      * @param {*} target :目标对象
      * @param {*} key : 键值
      * @param {*} receiver ：代理对象（后面会专门讲解）
      */
     get: function (target, key, receiver) {
       console.log("get捕捉器");
       return target[key];
     },
 });
 ​
 console.log(objProxy.name); // copyer
```

### 2、set 捕捉器（常用）
```js
设置值的捕捉器
 const obj = {
   name: "copyer",
   age: 12,
 };
 ​
 const objProxy = new Proxy(obj, {
   /**
    * @param {*} target : 目标对象
    * @param {*} key ：键值
    * @param {*} newValue ：新增
    * @param {*} receiver ：代理对象
    */
   set: function (target, key, newValue, receiver) {
     console.log("set捕捉器");
     target[key] = newValue;
   },
 });
 ​
 objProxy.age = 23;
 console.log(obj.age); // 23
```

### 3、has 捕捉器（常用）
```js
in操作符的捕捉
 const obj = {
   name: "copyer",
   age: 12,
 };
 ​
 const objProxy = new Proxy(obj, {
   has: function (target, key) {
     console.log("has捕捉器");
     return Object.keys(target).includes(key);
   },
 });
 console.log("name" in objProxy);
```

### 4、deleteProperty 捕捉器（常用）
```js
删除对象属性的拦截
 const obj = {
   name: "copyer",
   age: 12,
 };
 ​
 const objProxy = new Proxy(obj, {
   deleteProperty: function (target, key) {
     console.log("deleteProperty捕捉器");
     return delete target[key];
   },
 });
 ​
 console.log(delete objProxy.name); // true
```

### 5、getPrototypeOf 捕捉器
```js
Object.getPrototypeOf()的方法捕捉器。

Object.getPrototypeOf()作用：得到对象的原型。

 const objProxy = new Proxy(obj, {
   getPrototypeOf: function (target) {
     console.log("getPrototypeOf捕捉器");
     return Object.getPrototypeOf(target);
   },
 });
 Object.getPrototypeOf(objProxy)
```

### 6、setPrototypeOf 捕捉器
```js
Object.setPrototypeOf()的方法捕捉器。
Object.setPrototypeOf()的作用：设置对象的原型指向另外一个对象

 const objProxy = new Proxy(obj, {
  /**
    * @param {*} target : 目标对象
    * @param {*} newObj : 原型对象
    */
   setPrototypeOf: function (target, newObj) {
     console.log('setPrototypeOf捕捉器')
     return Object.setPrototypeOf(target, newObj);
   },
 });
 Object.getPrototypeOf(objProxy)
```

### 7、isExtensible 捕捉器
```js
Object.isExtensible 方法的捕捉器
Object.isExtensible(): 判断对象是否可以扩展。

 const objProxy = new Proxy(obj, {
   isExtensible: function (target) {
     console.log("isExtensible捕获器");
     return Object.isExtensible(target);
   },
 });
 const res = Object.isExtensible(objProxy)  
 console.log(res)  // true
 ​
 // 如果被冻结了
 Object.freeze(objProxy)
 const res = Object.isExtensible(objProxy)
 console.log(res)  // false
```

### 8、preventExtensions 捕捉器
```js
Object.preventExtensions 方法的捕捉器。
禁止扩展，在新增上跟冻结是一样的效果。
 const objProxy = new Proxy(obj, {
   preventExtensions: function (target) {
     console.log("preventExtensions捕捉器");
     return Object.preventExtensions(target);
   },
 });
 Object.preventExtensions(objProxy);
 ​
 objProxy.add = "123";
 console.log(objProxy); // { name: 'copyer', age: 12 } 没有被修改
```

### 9、getOwnPropertyDescriptor 捕捉器
```js
Object.getOwnPropertyDescriptor 方法的捕捉器。

Object.getOwnPropertyDescriptor(): 获取属性描述符信息。

 const objProxy = new Proxy(obj, {
   getOwnPropertyDescriptor: function (target) {
     console.log("preventExtensions捕捉器");
     return Object.getOwnPropertyDescriptor(target);
   },
 });
 Object.getOwnPropertyDescriptor(objProxy);
```

### 10、defineProperty 捕捉器
```js
Object.defineProperty方法的捕捉器。
 const objProxy = new Proxy(obj, {
   /**
    * @param {*} target : 目标对象
    * @param {*} key ：键值
    * @param {*} obj ：属性描述对象
    */
   defineProperty: function (target, key, obj) {
     console.log("defineProperty捕捉器");
     return Object.defineProperty(target, key, obj);
   },
 });
 Object.defineProperty(objProxy, 'name', {
   writable: true,
   configurable: true,
   enumerable: true,
   value: "fdafdsa",
 });
 ​
 console.log(objProxy); // { name: 'fdafdsa', age: 12 }
```
### 11、ownKeys 捕捉器
```js
Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器。

Object.getOwnPropertyNames： 获取对象的属性名（普通的字符串）
Object.getOwnPropertySymbols： 获取对象的属性名（symbol作为key值）

 const objProxy = new Proxy(obj, {
    ownKeys: function (target) {
     console.log("ownKeys捕捉器");
     return Object.getOwnPropertyNames(target);
   },
 });
 const res = Object.getOwnPropertyNames(objProxy);
 console.log(res) // [ 'name', 'age' ]

12、apply 捕捉器（特殊）

针对函数

函数调用操作的捕捉器。(普通方式的调用，并不只是针对apply调用)
 function foo() {
   console.log("foo");
 }
 ​
 const fooProxy = new Proxy(foo, {
   /**
    * @param {*} target 目标函数
    * @param {*} thisArg this
    * @param {*} paramsArr 传递的参数数组
    */
   apply: function (target, thisArg, paramsArr) {
     console.log('apply捕捉器')
     target.apply(thisArg, paramsArr);
   },
 });
 ​
 fooProxy()
```

### 13、construct 捕捉器（特殊）
```js
针对函数

new 操作符的捕捉器。
 function foo() {
   console.log("foo");
 }
 ​
 const fooProxy = new Proxy(foo, {
   /**
    * @param {*} target 目标函数 
    * @param {*} paramsArr 传递参数
    * @returns 
    */
   construct: function (target, paramsArr) {
     console.log('construct捕捉器')
     return new target(...paramsArr)
   }
 });
 ​
 new fooProxy()
```
### 13种拦截器，其实理解很简单，就是量比较的大。
但是常用的只有四种，所以只需要记住 get、 set、 has、 deleteProperty即可，其他的翻阅资料就行。<br/>
### Reflect 
Reflect 是 ES6 新增的一个API，它是一个对象，字面的意思是反射。<br/>
MDN 对 Reflect 的解释：Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。<br/>
知道两点即可：<br/>

Reflect是一个对象。<br/>
Reflect提供了拦截 JavaScript的操作方法。<br/>

Reflect的作用<br/>
Reflect 提供了很多操作 JavaScript 对象的方法，与 Object 操作对象有些类似。<br/>
比如：<br/>

Reflect.getPrototypeOf() 与 Object.getPrototypeOf() 类似<br/>
Reflect.defineProperty() 与 Object.defineProperty() 类似<br/>
...

到了这里，是不是有疑问？<br/>
既然有了 Object 提供了这些方法，为什么还需要 Reflect 的呢？<br/>

早期的ECMA规范中没有考虑到这么多，不知道如何设计对对象的操作更加的规范，所以将操作对象的API放在了Object上。<br/>
Object是一个构造函数，将这些API放到函数本身就不是很合理（虽然函数也是对象）。
还包含了一些 in ，delete操作符，使JavaScript看起来有点的奇怪。

基于上面的问题，Reflect 就是为了解决上面的一些列问题，是API设计看起来更加的规范。<br/>
MDN：对比Reflect与Object<br/>
看了MDN的对比之后，不能发现，有些方法 Object 含有，Reflect 没有；有些方法 Reflect 含有，但是 Object 没有。<br/>
所以说，Reflect 并不能完全替代 Object，只是在某一些方面是可以转变的。<br/>
### Proxy 和 Reflect 的配合使用<br/>
在上面的Proxy实例中存在一定的问题，截取一段吧(get捕获器为例)：<br/>
```js
 const obj = {
   name: "copyer",
   age: 12,
 };
 ​
 const objProxy = new Proxy(obj, {
   get: function (target, key, receiver) {
     console.log("get捕捉器");
     return target[key];
   },
 });
 ​
 console.log(objProxy.name); // copyer
```
虽然创建了一个代理对象，在使用的过程中，也是对代理对象的操作。但是在捕捉的时候，还是操作了 target 对象，也就是所谓的目标对象，只是在原来的形式上多增加了一步。<br/>
那么 Reflect 就完美解决了这个问题。<br/>
Proxy有 13 种捕捉器，Reflect 就提供了 13 种操作对象的方法（全程一一对应）。<br/>
针对对象的11种捕捉器：
```js
 const obj = {
   name: "copyer",
   age: 12,
 };
 ​
 const objProxy = new Proxy(obj, {
   get: function (target, key, receiver) {
     console.log("get捕获器");
     return Reflect.get(target, key);
   },
   set: function (target, key, newValue, receiver) {
     console.log("set捕获器");
     return Reflect.set(target, key, newValue);
   },
   has: function (target, key) {
     console.log("has捕获器");
     return Reflect.has(target, key);
   },
   deleteProperty: function (target, key) {
     console.log("deleteProperty捕获器");
     return Reflect.deleteProperty(target, key);
   },
   getPrototypeOf: function (target) {
     console.log("getPrototypeOf捕获器");
     return Reflect.getPrototypeOf(target);
   },
   setPrototypeOf: function (target, newObj) {
     return Reflect.setPrototypeOf(target, newObj);
   },
   isExtensible: function (target) {
     console.log("isExtensible捕获器");
     return Reflect.isExtensible(target);
   },
   preventExtensions: function (target) {
     console.log("preventExtensions捕捉器");
     return Reflect.preventExtensions(target);
   },
   getOwnPropertyDescriptor: function (target) {
     console.log("getOwnPropertyDescriptor捕捉器");
     return Reflect.getOwnPropertyDescriptor(target);
   },
   defineProperty: function (target, key, obj) {
     console.log("defineProperty捕捉器");
     return Reflect.defineProperty(target, key, obj);
   },
   ownKeys: function (target, key) {
     console.log("ownKeys捕捉器");
     return Reflect.ownKeys(target, key);
   },
 });
```
针对函数的2种捕捉器：
```js
 function foo() {
   console.log("foo");
 }
 ​
 const fooProxy = new Proxy(foo, {
   apply: function (target, thisArg, paramsArr) {
     console.log("apply捕捉器");
     Reflect.apply(thisArg, paramsArr);
   },
   construct: function (target, paramsArr) {
     console.log("construct捕捉器");
     return new Reflect.construct(paramsArr);
   },
 });
```
是不是非常的nice，还非常的简洁。<br/>
至于 Reflect 对象上面的方法的参数，就自己去 MDN 去详细的了解吧，这里就不在做分析了。<br/>
### MDN：Reflect<br/>
理解Reflect.construct()<br/>
这个函数调用，简单的来说，可以看成是一个 new 调用函数的操作。<br/>
具体语法：<br/>
```js
 Reflect.construct(target, argumentsList[, newTarget])
 // 相当于 new Target(...argumentsList)

用法一：创建实例对象
 function Student(name, age) {
   this.name = name;
   this.age = age;
 }
 ​
 const stu1 = new Student("copyer", 18);
 const stu2 = Reflect.construct(Student, ["james", 35]);
 ​
 console.log(stu1); // Student { name: 'copyer', age: 18 }
 console.log(stu2); // Student { name: 'james', age: 35 }
```
用法二：借用函数体，创建其他的实例对象
```js
 function Student(name, age) {
   this.name = name;
   this.age = age;
 }
 ​
 function Teacher() {}
 ​
 const stu2 = Reflect.construct(Student, ["james", 35], Teacher);
 ​
 console.log(stu2); // Teacher { name: 'james', age: 35 }
```
借用 Student 构造函数的函数体，创建 Teacher 的实例对象。（骚操作，class中super实现原理）

理解 receiver 参数

在上面 Proxy 的 set/get 捕捉器中，都接收一个参数 receiver。那么它有什么作用呢？
```js
 const obj = {
   name: "copyer",
 };
 ​
 const objProxy = new Proxy(obj, {
   // receiver 形参
   get: function (target, key, receiver) {},
   // receiver 形参
   set: function (target, key, newValue, receiver) {},
 });
```
先从一个现象说起（可以自己动手试一下）：
```js
 const obj = {
   _name: "copyer",
   get name() {
     return this._name;
   },
   set name(newValue) {
     this._name = newValue;
   },
 };
 ​
 const objProxy = new Proxy(obj, {
   get: function (target, key) {
     console.log('get捕捉器')
     return Reflect.get(target, key);
   },
   set: function (target, key, newValue) {
     console.log('set捕捉器')
     Reflect.set(target, key, newValue);
   },
 });
 ​
 console.log(objProxy.name) // 只会打印一次 get捕捉器
 objProxy.name = '12' // 只会打印一次 set捕捉器
```

在定义对象的时候，使用了 get set 的方式，但是定义对象的本质是没变的，也就是说给 obj 定义了两个属性_name 和name。<br/>
想要的效果呢？就是无论是获取 name 还是 _name, 都应该被捕捉到（设置也是一样的）。<br/>
因为 get 和 set 的方式，当在获取还是在修改的时候，都是同时触发的。<br/>
简单来说，对 name 获取的时候，同时也在获取 _name；在设置name的时候，同时也在设置_name。<br/>
所以在捕捉对对象进行操作的时候，应该是打印两次 get捕捉器 或则 set捕捉器。而上面只打印了一次。<br/>
就说明，对 _name 进行获取和设置的时候，没有被捕捉到。具体的原因是 this 是指向的是 obj。this._name 等操作就没有经过代理对象，所以是捕捉不到的。<br/>
所以需要修改this的值？怎么做呢？<br/>
Proxy 的 get 和 set 提供了 receiver 参数，并且 Reflect.get 和 Reflect.set 也接受这个参数。<br/>
该参数就是去改变 this 的指向的，指向代理对象。<br/>
```js
 const obj = {
   _name: "copyer",
   get name() {
     return this._name;
   },
   set name(newValue) {
     this._name = newValue;
   },
 };
 ​
 const objProxy = new Proxy(obj, {
   get: function (target, key, receiver) {
     console.log('get捕捉器')
     console.log(receiver === objProxy) // true 验证 receiver 就是代理对象
     return Reflect.get(target, key, receiver);
   },
   set: function (target, key, newValue, receiver) {
     console.log('set捕捉器')
     Reflect.set(target, key, newValue, receiver);
   },
 });
```
这样就正确了，可以捕捉到两次。
