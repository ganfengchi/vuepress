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
