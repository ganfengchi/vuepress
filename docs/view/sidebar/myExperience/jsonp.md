# JSONP

### JSONP 概述

JSONP (JSON with Padding) 是 JSON 的一种“使用模式”，可用于解决主流浏览器的跨域数据访问的问题。

### JSONP 原理

事先定义一个用于获取跨域响应数据的回调函数，并通过没有同源策略限制的 script 标签发起一个请求（将回调函数的名称放到这个请求的 query 参数里），然后服务端返回这个回调函数的执行，并将需要响应的数据放到回调函数的参数里，前端的 script 标签请求到这个执行的回调函数后会立马执行，于是就拿到了执行的响应数据。

### 优点

它不像 XMLHttpRequest 对象实现的 Ajax 请求那样受到同源策略的限制
它的兼容性更好，在更加古老的浏览器中都可以运行，不需要 XMLHttpRequest 或 ActiveX 的支持
并且在请求完毕后可以通过调用 callback 的方式回传结果

### 缺点

它只支持 GET 请求而不支持 POST 等其它类型的 HTTP 请求
它只支持跨域 HTTP 请求这种情况，不能解决不同域的两个页面之间如何进行 JavaScript 调用的问

### 如何使用 jsonp

```javascript
// 服务端返回这个回调函数的执行，并将需要响应的数据放到回调函数的参数里
function callback(response) {
  console.log(response);
}

function request(url) {
  const script = document.createElement("script");
  script.src = url;

  //加载完清除掉
  script.onload = function () {
    script.remove();
  };
  document.body.appendChild(srcipt);
}

document.getElementById("btn").onclick = function () {
  request("http://xxxxxxxxxxxx");
};
```
