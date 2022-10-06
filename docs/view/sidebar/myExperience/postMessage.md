# postMessage

[[toc]]

### 什么是 postMessage

我们来看一下 Mdn 是怎么说的

### window.postMessage

::: tip
window.postMessage() 方法可以安全地实现跨源通信。通常，对于两个不同页面的脚本，只有当执行它们的页面位于具有相同的协议（通常为 https），端口号（443 为 https 的默认值），以及主机 (两个页面的模数 Document.domain 设置为相同的值) 时，这两个脚本才能相互通信。window.postMessage() 方法提供了一种受控机制来规避此限制，只要正确的使用，这种方法就很安全。<br/>
从广义上讲，一个窗口可以获得对另一个窗口的引用（比如 targetWindow = window.opener），然后在窗口上调用 targetWindow.postMessage() 方法分发一个 MessageEvent 消息。接收消息的窗口可以根据需要自由处理此事件 (en-US)。传递给 window.postMessage() 的参数（比如 message ）将通过消息事件对象暴露给接收消息的窗口。<br/>
:::
![alt postMessage.png](../../../../docs/.vuepress/public/images/postMessage.png)

我们可以看到除了 ie,基本上所有浏览器都兼容 postMessage

### postMessage 相关 API 介绍

#### 2.1、发送数据

```js
// 语法：
// quoteWindow.postmessage(data, origin, [transfer])
otherWindow.postMessage(message, targetOrigin, [transfer]);
```

#### 参数说明

##### otherWindow

从其他 window 中传递过来的对象。
其他窗口的一个引用，比如 iframe 的 contentWindow 属性、执行 window.open 返回的窗口对象、或者是命名过或数值索引的 window.frames。

##### message

将要发送到其他 window 的数据。它将会被结构化克隆算法序列化。这意味着你可以不受什么限制的将数据对象安全的传送给目标窗口而无需自己序列化。[1]

##### targetOrigin

调用 postMessage   时消息发送方窗口的  origin . 这个字符串由 协议、“://“、域名、“ : 端口号”拼接而成。例如 “https://example.org (隐含端口  443)”、“http://example.net (隐含端口  80)”、“http://example.com:8080”。请注意，这个origin不能保证是该窗口的当前或未来origin，因为postMessage被调用后可能被导航到不同的位置。

通过窗口的 origin 属性来指定哪些窗口能接收到消息事件，其值可以是字符串"_"（表示无限制）或者一个 URI。在发送消息的时候，如果目标窗口的协议、主机地址或端口这三者的任意一项不匹配 targetOrigin 提供的值，那么消息就不会被发送；只有三者完全匹配，消息才会被发送。这个机制用来控制消息可以发送到哪些窗口；例如，当用 postMessage 传送密码时，这个参数就显得尤为重要，必须保证它的值与这条包含密码的信息的预期接受者的 origin 属性完全一致，来防止密码被恶意的第三方截获。如果你明确的知道消息应该发送到哪个窗口，那么请始终提供一个有确切值的 targetOrigin，而不是 _。不提供确切的目标将导致数据泄露到任何对数据感兴趣的恶意站点。

###### transfer 可选

是一串和 message 同时传递的 Transferable 对象。这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权

#### 2.2、接收数据

语法

```js
window.addEventListener("message", (e) => {
  // ...
});
```

在需要接收消息的页面中监听一个**message**事件，当其他窗口发送数据后就会触发该事件，然后执行相应的事件函数。
在接收到的事件对象中有三个重要的属性：

1. origin；表示发送消息窗口的源，可以通过此属性判断源是否安全<br/>
2. data；表示发送消息窗口发送的数据<br/>
3. source；表示对发送消息窗口的引用，可以用此来向发送消息的窗口返回数据<br/>

### 具体使用

> 定义父窗口：

```html
<body>
  <h1>This is parent window</h1>
  <input type="text" class="inp" />
  <button class="send">发送信息到iframe</button>
  <div class="contents">
    <p>接收到的信息</p>
    <ul class="messages"></ul>
  </div>
  <iframe
    src="child.html"
    frameborder="3"
    class="child-iframe"
    height="600"
    width="800"
  ></iframe>
  <script>
    // 父页面监听message事件，接受iframe发送的消息
    window.addEventListener("message", (e) => {
      if (e.origin !== "http://127.0.0.1:5500") {
        // 验证对方的身份
        return;
      }
      const box = document.querySelector(".messages");
      box.innerHTML += `<li> 收到新的信息：${e.data}, 来自于${e.origin}</li>`;
    });
    // iframe的引用
    const win = document.querySelector(".child-iframe").contentWindow;
    document.querySelector(".send").addEventListener("click", () => {
      const msg = document.querySelector(".inp").value;
      win.postMessage(msg, "*"); // 这里使用*，也可以是iframe的URL地址
      document.querySelector(".inp").value = "";
    });
  </script>
</body>
```

> 定义子窗口

```html
<body>
  <h1>This is iframe child page</h1>
  <input type="text" class="inp" />
  <button class="send">发送信息到夫窗口</button>
  <div class="contents">
    <p>接收到的信息</p>
    <ul class="messages"></ul>
  </div>
  <script>
    let parentWin;
    // 监听父页面的消息
    window.addEventListener("message", (e) => {
      if (e.origin !== "http://127.0.0.1:5500") {
        // 验证对方的身份
        return;
      }
      // 发送详细窗口的window对象引用，调用对象postMessage方法实现父子页面的通信，当然也可以使用window.parent来通信
      parentWin = e.source;
      const box = document.querySelector(".messages");
      box.innerHTML += `<li>接收到新的信息：${e.data}, 来自于${e.origin}</li>`;
    });
    console.log(window.parent.location);

    document.querySelector(".send").addEventListener("click", () => {
      const msg = document.querySelector(".inp").value;
      window.parent.postMessage(msg, "*"); //
      document.querySelector(".inp").value = "";
    });
  </script>
</body>
```

### 修改 iframe 中 DOM 节点的样式

##### 4.1、获取到元素后修改

```js
window.onload = function () {
  let dom = document
    .getElementById("frame")
    .contentWindow.document.getElementById("selector");
  // 修改style
  dom.style.color = "red";
  // 修改class
  dom.classList.add("box");
};
```

##### 4.2、在 iframe 的 header 中添加 CSS 样式

如果一个元素是动态添加的就获取不到该 DOM 所以可以通过添加 CSS 样式的方法。

```js
let header = document
  .getElementById("frame")
  .contentWindow.document.getElementById("header");
const CSS_STR = `
    .box {
        color: red
    }
`;
const style = document.createElement("style");
style.innerText = CSS_STR;
header.appendChild(style);
```

#### 实列 2

```html
<h1>这是 T1</h1>
<button id="btn1">打开t2</button>
<button id="btn2">发送消息到t2</button>
<pre id="text"></pre>

<script>
  var t2;
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var text = document.getElementById("text");

  btn1.addEventListener("click", function () {
    t2 = window.open("/t2.html");
    window.focus();
    t2.addEventListener("DOMContentLoaded", function () {
      t2.console.log("t1 挂载在 t2 的 DOMContentLoaded");
      btn2.click();
    });
  });

  btn2.addEventListener("click", function () {
    console.log("btn2 点击");
    // t2 页面是否已关闭
    if (t2.closed) {
      return;
    }
    // postMessage 第三个参数设置为 '/' 表示当前域下传递消息
    t2.postMessage({ type: "popring", message: "t1 发送出去的消息" }, "/");
    t2.focus();
  });

  window.addEventListener("message", function (event) {
    // 过滤非当前域下的消息
    if (event.origin !== "http://127.0.0.1:5500" || !event.data) {
      return;
    }
    // 过滤其他非本应用传递过来的消息，例如 chrome 的插件就可能也会发送消息（表示 wappalyzer 就会）
    if (event.data?.type !== "popring") {
      return;
    }
    text.innerText += JSON.stringify(event.data) + "\n";
  });
</script>
```

```html
<h1>这是 T2</h1>
<button id="btn">发送消息到 t1</button>
<pre id="text"></pre>

<script>
  window.addEventListener("DOMContentLoaded", function () {
    console.log("t2 DOMContentLoaded");
  });

  var btn = document.querySelector("#btn");
  var text = document.getElementById("text");
  var t1;

  btn.addEventListener("click", function () {
    // t1 页面是否已关闭
    if (t1.closed) {
      return;
    }
    t1.postMessage({ type: "popring", message: "t2 发送出去的消息" }, "/");
    t1.focus();
  });

  window.addEventListener("message", function (event) {
    if (event.origin !== "http://127.0.0.1:5500" || !event.data) {
      return;
    }
    if (event.data?.type !== "popring") {
      return;
    }
    t1 = event.source;
    text.innerText += JSON.stringify(event.data) + "\n";
  });
</script>
```
可以在 codesandbox 体验下 [https://codesandbox.io/s/modest-shadow-ksdti?file=/index.html](https://codesandbox.io/s/modest-shadow-ksdti?file=/index.html)

建议新窗口打开体验。