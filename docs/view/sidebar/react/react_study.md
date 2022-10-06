# React01

目前主流的三大框架, 如果按照就业的火热程度:

* Vue
  * 21704
* React
  * Facebook 公司开发并维护:  更加贴近原生的JS写法  而不是 vue/angular 的语法
  * 12391
* Angular
  * 由于与vue都是 谷歌公司产出的: 整体设计思路非常相似,  在会 vue 的前提下, 学习angular非常简单.
  * 5630

官方网站: https://react.docschina.org/



## HelloWorld

官方的代码脚本地址:

> 有些中心会有网络限制, 无法访问官方

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
```

中国的镜像地址:

```html
<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
```

如果以上都不行, 则下载到本地使用

```
/18_React/react_src.rar
下载后, 解压缩到 html 所在的同级目录下即可
```



原生写法:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <!-- 
      任务: 使用js 在id=app 的标签中添加一个子元素:  
      <p id='xixi' class="danger">我是脏兮兮</p>
    -->
    <script>
      // coding...
      // 1. 创建p元素, 设置 id='xixi' class="danger" 内容
      let p = document.createElement("p");
      p.id = "xixi";
      p.className = "danger";
      p.innerText = "我是脏兮兮";

      // 2. 查找到 id='app' 的元素
      let app = document.getElementById("app");

      // 3. 为app元素 添加子元素: p
      app.appendChild(p);
    </script>
  </body>
</html>

```

React写法

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- 来自于 Facebook 的工程师最初决定使用函数封装的方式 来实现简化操作 -->
    <!-- 类似于 jQuery, 需要先引入官方脚本 -->
    <!-- 引入顺序有严格限制: 必须先 react 然后 react-dom -->
    <script src="./react_src/react.production.min.js"></script>
    <script src="./react_src/react-dom.production.min.js"></script>

    <div id="app"></div>

    <script>
      // Facebook工程师封装了一个方法 到 react 中
      // 1.创建 <p id='xixi' class="danger">我是脏兮兮</p>
      let p = React.createElement(
        "p",
        { id: "xixi", className: "danger" },
        "我是脏兮兮"
      );
      // 2.添加 p 到 id='app' 的元素中
      ReactDOM.render(p, app);

      /**
       * 官方提供了两个js文件, 分别提供了:
       * React: 负责创建元素
       * ReactDOM: 负责渲染元素
       */
    </script>
  </body>
</html>

```



## JSX

在原生语法的架构中, 利用函数的封装特征 无法达到 满意的简化程度;

Facebook工程师就开发了全新的语法, 来替代原生的DOM函数写法!

```
JSX语法无法被浏览器识别; 必须使用 babel 工具进行编译之后才可以识别使用!
```

babel官方: `https://www.babeljs.cn/`



```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>

    <!-- 引入react:  注意顺序!! -->
    <script src="./react_src/react.production.min.js"></script>
    <script src="./react_src/react-dom.production.min.js"></script>
    <!-- 引入babel:  -->
    <script src="./react_src/babel.min.js"></script>

    <!-- 必须声明 脚本的类型 需要用babel编译, babel才会编译 -->
    <script type="text/babel">
      // 全新的jsx语法
      // 1.创建 <p id='xixi' class="danger">我是脏兮兮</p>
      //
      // 从此处的 className可以得出结论:  看起来是html 但本质是 DOM 的另一种写法!
      let p = (
        <p id="xixi" className="danger">
          我是脏兮兮
        </p>
      );

      // JSX: 在JS中写 XML(html是xml的一种)

      ReactDOM.render(p, app);
    </script>
  </body>
</html>
```



## 组件

组件: 组成页面的零件

* 特点: 复用性

React提供两种方式来制作组件

* 函数方式:  适合简单组件
* 类方式: 适合复杂组件



```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>
  <body>
    <!-- 为什么 vue 和 angular 是 {{}}??? -->
    <!-- 原因: html中存在{}的写法, 如果用{}会冲突 -->

    <!-- 引入react: 注意顺序 -->
    <script src="./react_src/react.production.min.js"></script>
    <script src="./react_src/react-dom.production.min.js"></script>
    <!-- 引入babel -->
    <script src="./react_src/babel.min.js"></script>

    <div id="app"></div>

    <script type="text/babel">
      //coding...
      // 使用函数的复用特征: 制作简单组件
      // 组件名严格要求: 大驼峰命名法 -- 与vue一致!
      function InputArea(props) {
        // xml 要求: 标签必须闭合
        return (
          <div>
            <span>{props.name}:</span>
            <input type="text" />
          </div>
        );
      }

      // 制作输入框区域: 与vue相同, 只能有一个父!
      // ReactDOM.render(InputArea(), app);

      // Facebook工程师认为 函数写法 和JSX 不匹配
      // <InputArea /> 运行时会编译成 InputArea()
      // ReactDOM.render(<InputArea />, app);

      // 传参
      // ReactDOM.render(InputArea({ name: "邮箱" }), app);

      // JSX写法:  格式变化成HTML的样子, 看着更舒服
      // ReactDOM.render(<InputArea name="邮箱" />, app);

      // 复用
      let form = (
        <div>
          <InputArea name="用户名" />
          <InputArea name="邮箱" />
          <InputArea name="密码" />
          <InputArea name="手机号" />
        </div>
      );

      ReactDOM.render(form, app);
    </script>
  </body>
</html>
```





## 脚手架

React开发有两种方式:

* 脚本方式: 
  * 适合简单的测试, 本身没有代码提示 并且 搭建复杂;
* 脚手架方式
  * 实际开发中使用

安装脚手架

```
$ npm i -g create-react-app
```


使用脚手架创建项目包

```
到你希望创建项目包的目录下打开cmd
$ create-react-app 项目名

例如:  create-react-app  reactpro
```


启动, 在项目根目录下

```
$ npm start
```


# React02

脚手架的启动流程:

* 启动命令: `npm start`

  * 启动一个唯一标识是 `3000` 的服务器;  称为端口号

* 浏览器访问: `localhost:3000`

  * 域名: localhost    在网络中代表当前计算机;  认为是 `我` 字
  * 此处访问 当前计算机上 端口号是3000的程序

* 服务器的设定:如果不指定访问哪个文件, 则默认访问 index.html

* index.html

  * 此文件中存在: `<div id="root"></div>` 标签

* 隐藏操作:  webpack全自动化打包工具, 默认会把 index.js 的文件打包引入到 index.html 中

  > 对于不会的知识点:  哔哩哔哩 搜webpack

* index.js中: 

  ```
  加载了 App.js 的内容到  id='root' 的标签中
  document.getElementById('root')
  ```





## 组件

组件分两种写法:

* 函数方式

  ```
  函数名必须 大驼峰
  
  function ComponentName(){
  	return jsx语法;
  }
  
  使用时: 
  <ComponentName />
  ```

  

* 类方式: 适合复杂组件的制作

  * 点击事件
  * 生命周期
  * 状态值

```jsx
// HelloWorld

// 脚本方式: 引入脚本来完成制作
// 脚手架方式: 脚本已经被制作成模块, 引入模块即可!
import React from "react";

// 类方式制作组件, 组件将会包含更强大的功能
// extends: 继承;  子类 继承父类之后, 就会具备父类中所有的功能
class HelloName extends React.Component {
  // 父类中自带构造方法, 就是下方的形式: 会把 new 类({name:'xxx'}) 的参数自动保存到
  // this.props 中

  // constructor(props) {
  //   this.props = props;
  // }

  // 渲染: 把内容显示到页面上
  render() {
    // 此处的 this.props 是父类声明的, 子类中看不到 但是能直接用
    return <h2>Hello {this.props.name}</h2>;
  }
}

// 制作一个组件并反馈
export default function App() {
  // 与vue相同, 返回值要唯一的父元素
  return (
    <div>
      <h1>Hello World!</h1>
      {/* JSX中的注释必须放在{}中写, 快捷键 ctrl+/ */}
      {/* 本质上: JSX中, 书写JS代码 必须放在{}里 */}
      {new HelloName({ name: "丽萨" }).render()}
      {/* 上方的固定用法, 可以简化成JSX语法 */}
      <HelloName name="丽萨" />
      <HelloName name="娜娜" />
    </div>
  );
}

```



## 事件

```jsx
// rcc
import React, { Component } from "react";

export default class App extends Component {
  show() {
    alert("哈哈");
  }

  show1() {
    alert("show1");
  }

  render() {
    return (
      <div>
        <h2>Hello 事件!</h2>
        {/* 在JSX中: {} 中的内容被识别为 JS代码 */}
        <button onClick={this.show}>点击</button>
        {/* 与vue和angular的逻辑不同:
        vue/angular:  @click="show()"  点击后执行
        react: onClick={this.show}    {}中的代码在加载时都会执行
        */}
        {/* <button onClick={this.show1()}>点击2</button> */}
      </div>
    );
  }
}

```



## 状态值

在微信小程序中存在相同的概念:  因为 小程序就是借鉴的 React

```jsx
import React, { Component } from "react";

export default class App extends Component {
  // 小程序中: data 和 setData() 配合
  // React中: state 和 setState() 配合
  state = { num: 1 };

  add = () => {
    // vue/angular: 自动监听属性变化, 同步刷新UI 页面
    // react/小程序: 必须通过 setState()/setData() 方法更新数据才会刷新UI 页面
    // this.state.num++;

    // setState(更新的数据, 更新完毕后的回调)
    this.setState({ num: this.state.num + 1 }, () => {
      console.log("UI更新完毕后:", this.state.num);
    });
    // 异步: setState()方法做两件事: 1.更新数据 2.更新UI
    // 执行顺序: 更新UI成功后->把数据变更为新的
    // 更新UI需要硬件的配合: CPU->显卡渲染->页面显示 会比较耗时:
    // 为了防止程序卡顿, 所以采用了多线程策略!
    // 即 打印操作在主线程执行, 速度快;   UI的渲染慢, 所以后修改
    console.log(this.state.num);
  };

  add1 = () => {
    // a = 5;
    // console.log(a++)
    // console.log(++a)
    // 阅读顺序有关: 从左向右读代码;  先读a 就先用a,  先读++ 就先++
    this.setState({ num: this.state.num++ });
    // 假设 num = 1
    // 先 {num:1}  然后 ++变为 num=2;
    // 渲染的异步性: 在分线程中 延迟渲染num:1  所以值又变回1了
    console.log(this.state.num);
  };

  render() {
    return (
      <div>
        <h3>状态值</h3>

        <button onClick={this.add}>计数: {this.state.num}</button>
        <br />
        <button onClick={this.add1}>计数: {this.state.num}</button>
      </div>
    );
  }
}
```



## this的指向问题

```jsx
import React, { Component } from "react";

export default class App extends Component {
  state = { num: 1 };

  /**
   * 函数 与 箭头函数的差异
   * ES6前: 函数  function show(){ this }    xxx.show()
   *  墙头草: 谁调用我, 我的主人就是谁;  体内的this指向调用者!
   *  强行执行函数中的this指向?   bind call apply
   *
   * ES6后: 箭头函数 show = ()=>{ this }  xxx.show()
   *  忠贞烈女:  体内的this 永远是声明时所在的环境
   */
  add() {
    this.setState({ num: this.state.num + 1 });
  }

  // 箭头函数 自带this保持: 所以不需要额外操作
  add1 = () => {
    this.setState({ num: this.state.num + 1 });
  };

  render() {
    return (
      <div>
        <h3>this的指向问题</h3>
        {/* 比方: 唐三 今晚去打 旭旭的 丽萨;   请问谁要打丽萨?  是唐三 */}
        {/* 此处: 点击时 执行 当前对象的add方法; 问题:事件谁触发?  是window; window触发的函数, 其this 是undefined */}
        {/* 此处{}中的this 是 当前render()的this */}
        {/* new 类().render();  即render() 的this 是当前组件对象 */}
        <button onClick={this.add.bind(this)}>点击{this.state.num}</button>
        {/* 箭头函数, 则不需要写bind; 本身自带this保持 */}
        <button onClick={this.add1}>点击{this.state.num}</button>
        {/* 利用箭头函数 配合 普通函数 */}
        <button onClick={() => this.add()}>点击{this.state.num}</button>
        {/* 本质: 把箭头函数写到JSX里, 其中的this自带保持, 调用了 add() */}
        {/* 点击时: 执行的是匿名箭头函数, 箭头函数中调用了 add() */}
        <button
          onClick={() => {
            this.add();
          }}
        >
          点击{this.state.num}
        </button>
      </div>
    );
  }
}

```



## 动态的风格样式



```jsx
import React, { Component } from "react";

/**
 * 关于外部css文件的引入方式
 * html引入: <link rel="stylesheet" href="">
 * css引入: @import 'css地址'
 * js引入: import 'css地址'
 *
 * ./App.css  系统会认为是地址 而非 模块名:  ./是路径符号
 */
import "./App.css";

export default class App extends Component {
  state = { size: 17 };

  bigger() {
    this.setState({ size: this.state.size + 1 });
  }

  render() {
    return (
      <div>
        <h3>动态变更的style</h3>
        {/* DOM的style 是对象类型 */}
        {/* 对象类型的属性名: 不能有 -, 所以font-size 要写成小驼峰 */}
        <p style={{ color: "red", fontSize: this.state.size + "px" }}>
          Hello World
        </p>
        <button onClick={this.bigger.bind(this)}>
          变大: {this.state.size}
        </button>

        {/* 外部css文件的引入 */}
        <span className="normal">真·Lisa</span>
        <span className="success">真·Lisa</span>
        {/* JSX本质上是 DOM操作的 另一种写法;  并不是HTML */}
        {/* className是 DOM的属性;  而class不是, 所以后台会报错! */}
        <span class="danger">真·Lisa</span>
      </div>
    );
  }
}

```



```css
.success {
  color: green;
  border: 1px green solid;
  display: inline-block;
  padding: 20px;
}

.normal {
  color: gray;
  border: 1px gray solid;
  display: inline-block;
  padding: 20px;
}

.danger {
  color: red;
  border: 1px red solid;
  display: inline-block;
  padding: 20px;
}

```



## 数组的使用

```jsx
import React, { Component } from "react";

export default class App extends Component {
  names = ["东东", "亮亮", "然然", "老吴", "小新"];

  /**
   * vue: v-for="(item,index) in items" :key="index"
   * angular: *ngFor="let item of items; let i = index"
   * 小程序: wx:for="{{items}}" wx:key="index"
   * react: 使用原生的js循环
   */

  //方法: 把数组中的每个元素放到 JSX 语法中
  showNames() {
    let arr = [];

    this.names.forEach((item, index) => {
      // <li>{item}</li>:  是JSX语法;   arr.push() 把JSX添加到空数组里
      arr.push(<li key={index}>{item}</li>);
      // 循环生成的UI, 必须带有key 唯一标识
    });

    return arr;
  }

  showBtns() {
    let arr = [];

    this.names.forEach((item, index) => {
      arr.push(<button key={index}>{item}</button>);
    });

    return arr;
  }

  // 使用map方法
  showP() {
    // map: 自动把数组里的每个元素 遍历, 改造之后的值 形成新的数组
    let arr = this.names.map((item, index) => {
      return <p key={index}>{item}</p>;
    });

    return arr;
  }

  render() {
    return (
      <div>
        {/* 数组的使用 */}
        {/* 默认: 会把数组中的每个元素读取 并 依次显示 */}
        {this.names}
        {/* 上午的 点击事件; 点击后触发, 所以不能写() */}
        {/* 此处: 页面显示时就触发, 必须写() */}
        <ul>{this.showNames()}</ul>
        {/* 上午: 事件是点击按钮后window触发, 所以必须bind() 来保持this指向 */}
        {/* 此处: 运行时就触发, render()触发, this不需要额外设置 */}
        {this.showBtns()}
        {this.showP()}
        {/* 如果循环代码比较简单, 则直接写在JSX中 */}
        {this.names.map((item, index) => (
          <b key={index}>{item}</b>
        ))}
        {/* 
        箭头函数的语法糖:  (item,index) => { return  xxx; }
        当箭头函数体只有一行时, 则{ return }可以省略:  (item,index) => xxx
        如果只有一个参数:  item => xxx
        */}
      </div>
    );
  }
}

```



### 练习: 表格

```jsx
import React, { Component } from "react";

export default class App extends Component {
  emps = [
    { name: "东东", age: 30, phone: "18877334444" },
    { name: "然然", age: 20, phone: "18866334444" },
    { name: "亮亮", age: 32, phone: "18874454444" },
    { name: "丽萨", age: 18, phone: "18888004444" },
  ];

  render() {
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <td>序号</td>
              <td>姓名</td>
              <td>年龄</td>
              <td>手机号</td>
            </tr>
          </thead>
          <tbody>
            {this.emps.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

```



## 条件渲染

```jsx
import React, { Component } from "react";

export default class App extends Component {
  /**
   * vue: v-if
   * ng: *ngIf
   * wx: wx:if
   * react: 使用原生方式进行判断
   */

  state = { score: 60 };

  showRes() {
    if (this.state.score < 60) {
      return <b>回去等通知</b>;
    } else if (this.state.score >= 60 && this.state.score < 80) {
      return <b style={{ color: "orange" }}>请稍等, 让人力同事来和你聊聊</b>;
    } else {
      return <b style={{ color: "green" }}>请稍等, 让我们老板和你聊聊</b>;
    }
  }

  render() {
    return (
      <div>
        <h3>条件渲染</h3>
        <p>Lisa的面试分数: {this.state.score}</p>
        <button onClick={() => this.setState({ score: this.state.score - 10 })}>
          减分
        </button>
        <button onClick={() => this.setState({ score: this.state.score + 10 })}>
          加分
        </button>
        <h3>面试结果: {this.showRes()}</h3>
      </div>
    );
  }
}

```



## 双向数据绑定

```jsx
import React, { Component } from "react";

// 双向数据绑定
export default class App extends Component {
  /**
   * vue: v-model=""
   * ng: [(ngModel)]
   * react: 双向绑定 必须写两份代码
   */
  state = { uname: "dongdong" };

  render() {
    return (
      <div>
        <div>
          {/* 单向绑定: 数据->UI  导致value的值锁定了;  
          后台会报错: 问 是真的锁死了 还是忘记写双向绑定了 */}
          {/* readOnly: 只读. 就是为了锁死值 */}
          用户名: <input type="text" value={this.state.uname} readOnly />
          <br />
          用户名:
          <input
            type="text"
            value={this.state.uname}
            onChange={this.unameChanged}
          />
          <p>{this.state.uname}</p>
          密码: <input type="password" />
        </div>
      </div>
    );
  }

  // 事件触发的函数: 事件本身会作为参数传入
  unameChanged = (event) => {
    // event是一个临时事件, 要想看其中的值, 必须调用 event.persist()
    // 不影响读取, 只影响后台打印的查看
    event.persist();
    console.log(event);

    // 阅读输入框中的值
    let uname = event.target.value;
    // 更新到state
    // this.setState({ uname: uname });
    this.setState({ uname }); //语法糖
  };
}

```



## 生命周期



```jsx
import React, { Component } from "react";

// 子组件
class Son extends Component {
  state = { now: new Date().toLocaleTimeString(), num: 1 };

  // 生命周期:  生 -> 更新数据 -> 更新UI -> 死
  componentDidMount() {
    console.log("componentDidMount: 组件挂载时 -- 生");

    // 面向对象中的 属性 可以跨方法使用
    // 在 ts 语言中: 属性必须声明才能用
    // 在 js 语言中: 直接写 this.属性名,  属性不存在会自动创建
    this.timer = setInterval(() => {
      // this.setState({ now: new Date().toLocaleTimeString() });
      this.setState({ num: this.state.num + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: 组件将要卸载 -- 将死");

    // 组件即将卸载时: 进行一些销毁操作, 防止内存泄漏;  例如定时器
    clearInterval(this.timer);
  }

  // 数据的更新
  componentDidUpdate(props, state) {
    /**
     * react中共有两个关键词:
     * props: 接收外部传入的值  <Son name="开心"/>  this.props = {name:'开心'}
     * state: 状态值, 负责组件中变化的数据
     */
    // console.log(props, state);
  }

  // 面试题经常问: 如何提高react 的渲染效率
  // 答: 根据实际工作的场景, 可以制定策略, 防止重复的渲染, 避免不必要的渲染操作
  shouldComponentUpdate(props, state) {
    console.log(props, state);
    // 只有 num 为偶数的时候 才重新绘制页面
    // return true;
    if (state.num % 2 === 0) {
      // 返回true 就代表重绘页面
      return true;
    } else {
      // 返回false 则表示不重绘页面
      return false;
    }
  }

  // ren
  render() {
    return (
      <div>
        <h3>我是Son组件</h3>
        <p>当前时间: {this.state.now}</p>
        <p>num: {this.state.num}</p>
      </div>
    );
  }
}

export default class App extends Component {
  state = { show: false, count: 1 };

  showSon() {
    if (this.state.show) {
      return <Son count={this.state.count} />;
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ show: !this.state.show })}>
          切换显示状态
        </button>
        {this.showSon()}
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          数量增加{this.state.count}
        </button>
      </div>
    );
  }
}

```





## 插件

ES7 React/Redux/GraphQL/React-Native snippets

修改文件的类型:  让VSCode把 JS 文件按照 React的JSX 来理解!

最终显示:  代表vscode把 js文件当做 React 的 js 来解读



## 练习

练习1: 事件 与 状态值




练习2:   计数器

* 双向绑定:  单价可以改变,  总价会随着变化
* 按钮减:  当数量达到1时, 则变为不可用状态:    提示: `disabled`属性的 true 和 false
* 当价格<5000时,  商品名颜色为  黑色;    5000~8000时为 橘黄色;   8000以上时 红色;




练习3:  代办事项

* 输入框中没有值时, 确定按钮不可用
* 点击确认按钮把值显示到下方列表中, 并清空输入框
* 点击删除按钮 可以删除对应栏目
* 当所有事项都删除后, 则显示  **暂无待办事项**  字样





# React03

提前准备今日项目包:  生成 or 复制

```
$ create-react-app reactpro
```

## 复习

### 脚手架的使用

* 安装脚手架

  ```
  $ npm i -g create-react-app
  ```

* 生成项目包

  ```
  $ create-react-app 项目包名
  ```

* 运行

  ```
  $ npm start
  ```



### 项目启动的流程

* 启动项目服务器命令: `npm start`

  * 启动了一个服务器软件, 此软件有唯一标识:  **端口号**;  例如react端口号是3000

* 通过浏览器访问当前计算机上3000的程序: `localhost:3000`

* 服务器默认设定: 如果未指定访问的文件名, 则默认提供 `index.html`

* `index.html`: 中存在一个标签

  ```html
  <div id="root"></div>
  ```

* `index.js`:  项目包自带 `webpack` 打包工具, 会自动把 `index.js` 打包引入到 `index.html`

  ```jsx
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
  ```

  把 `App.js` 渲染到  `id='root'` 的标签中


目前学到的应用的**默认**端口号:

* 3000:  react
* 8100:  ionic
* 80:  web
* 4200:  angular
* 8080: vue , 偶尔和java 的tomcat服务器 8080 冲突.
* 5050:  node.js 的 express
* 3306:  mysql

### 组件

组件: 组成页面的零部件;  特点:可以复用;

组件有两种方式制作:

* 函数:  适合简单组件

  ```jsx
  function ComponentName(props){
      return jsx;
  }
  // 要求: 大驼峰命名法
  
  <ComponentName name="东东" />
  //jsx写法的本质:
  ComponentName({name:"东东"})
  ```
  
* 类: 适合复杂组件--事件/生命周期/状态值

  ```jsx
  // ./ 前缀非常重要, 带有此路径前缀 才会识别为 css 文件的引入
  import './xxx.css'
  
  // 错误写法:  vscode认为是引入一个叫  xxx.css 的模块
  import 'xxx.css'
  
  // 强大的类方式, 要求必须继承父类
  class ComponentName extends React.Component{
    	// 特殊属性: 
      // 微信小程序:  data 和 setData();  必须通过setData() 来更新数据才会刷新UI
      // React: state 和 setState(); 必须通过 setState() 更新数据 才会刷新UI
      state = {};
      
      //父类的构造
      constructor(props){
          this.props = props;
      }
  
  	//生命周期: 生 -> 数据更新 -> UI更新 -> 死
  	componentDidMount(){ 生 }
  
  	componentWillUnmount(){ 将死 }
  
  	componentDidUpdate() { props 和 state 有更新时 }
      	
  	shouldComponentUpdate(){
          // 面试常考: 如何提高渲染效率
          // 此函数的返回值将会决定是否要刷新重绘页面:  true刷新 false不刷新
    }
  
  	show(){
          console.log(123)
      }
  	
  	//普通函数; 事件触发; 其中用了this;    -- 必须关注this的指向
  	show1(){
          console.log(this.state.num)
      }
  
  	show2 = ()=>{
          console.log(this.state.num)
      }
      
    	// 循环: 采用原生循环
      names = ['mike', 'lucy', 'lily', 'lisa']
  
      showNames(){
          //  判断通常配合 state;  因为state的变化 才会导致UI变更
          if (this.state.score >= 60){
              return <h3>西西面试通过了</h3>
          }else{
              return <h3>西西还需要更努力呦~</h3>
          }
      }
      
    	// 固定方法: 组件使用时默认调用此方法  
  	render(){
          return <div>
          	<button onClick={this.show}>点击</button>
          	<button onClick={this.show1.bind(this)}>点击</button>
          	<button onClick={()=> this.show1()}>点击</button>
          	<button onClick={this.show2}>点击</button>
              {/* {}中是JS的代码范围, 可以写js代码 */}
              {this.showNames()}
              {this.showRes()}
              {/* 内联样式: style={对象类型} */}
              <p style={ {color:'red', fontSize:'18px'} } ></p>
              {/* 外部样式 */}  
              <p className="success danger"></p>
              
              {/* 双向数据绑定
              1. 数据 传递到 UI:  因为会变化, 数据应该存储在 state 中
              2. UI 传递到 数据: 事件 onChange()  输入框变化时
              */}
              <input value={this.state.name} onChange={this._inputChanged} />
              <p>{this.state.name}</p>
          </div>;
      }
  	
  	// 事件触发的 函数, 默认都会接收事件本身做为参数
  	_inputChanged = (event)=>{
          // 如果希望通过打印来查看, 则必须调用 event.persist();
          event.persist(); //调用与否 对于下方的 读值无影响, 只影响log打印的结果
          console.log(event)
          
          let name = event.target.value;
          this.setState({name: name})
      }
  }
  
  
  <ComponentName name="东东" />
  //本质
  new ComponentName({name:"东东"}).render()
  ```



### 作业1

![image-20200902104803598](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200902104803598.png)

```jsx
// rcc
import React, { Component } from "react";

export default class App extends Component {
  // 数据变 UI变:  状态值
  state = { price: 7999, num: 5, nameColor: "orange" };

  // 数据变化时: 触发的周期: 此处的值是变化之前的
  componentDidUpdate(props, state) {
    // this.state 读取当前值
    // state 是之前的值
    console.log("update: ", state, this.state);
  }

  // 变化后的值
  shouldComponentUpdate(props, state) {
    console.log("should: ", state);

    // 返回true 代表允许重新渲染页面
    return true;
  }

  // 条件渲染
  // setState({price: xxx}): 自动检测项目中哪里用到了 price 刷新对应的UI
  nameColor = () => {
    if (this.state.price < 5000) return "black";
    if (this.state.price >= 5000 && this.state.price <= 8000) return "orange";
    if (this.state.price > 8000) return "red";
  };

  render() {
    return (
      <div>
        <h3>作业1</h3>
        <div>
          商品名: <span style={{ color: this.state.nameColor }}>iPhone</span>
          商品名: <span style={{ color: this.nameColor() }}>iPhone</span>
        </div>
        <div>
          单价:
          <input
            type="text"
            value={this.state.price}
            onChange={this._onChange}
          />
          {/* 偷懒: 为了避免起方法名, 往往选择把简单的方法直接写JSX中 */}
          <input
            type="text"
            value={this.state.price}
            onChange={(event) => this.setState({ price: event.target.value })}
          />
        </div>
        <div>
          <span>数量:</span>
          <button
            onClick={() => this.setState({ num: this.state.num - 1 })}
            disabled={this.state.num < 2}
          >
            -
          </button>
          <b>{this.state.num}</b>
          <button onClick={() => this.setState({ num: this.state.num + 1 })}>
            +
          </button>
        </div>
        <div>总价格: {this.state.price * this.state.num}</div>
      </div>
    );
  }

  // 实际工作: 方法名,变量名 等 都会有些规矩:  例如 带有_开头的 是用来做事件绑定的!
  _onChange = (event) => {
    // setState(): 是异步刷新的价格; 所以:
    this.setState({ price: event.target.value });
    // 此处读取 this.state.price  依然是之前的值

    // 判断当前价格: 来更新颜色
    if (event.target.value < 5000) this.setState({ nameColor: "black" });

    if (event.target.value > 8000) this.setState({ nameColor: "red" });

    if (event.target.value >= 5000 && event.target.value <= 8000) {
      this.setState({ nameColor: "orange" });
    }
  };
}

```



## 作业2




```jsx
// rcc
import React, { Component } from "react";

export default class App extends Component {
  // 会变化的数据放 state
  state = { items: ["吃饭", "睡觉", "打豆豆"], item: "" };

  // 函数有两种: 箭头函数(不用关注this绑定问题) 和 非箭头函数(考虑this绑定问题)
  showItems = () => {
    // 函数的返回值: 调用之后的结果
    return this.state.items.map((item, index) => {
      // 循环生成的, 必须带有key属性
      return (
        <li key={index}>
          <span>{item}</span>
          {/* 点击时执行 ()=>{}   箭头函数里执行this.del(index)  */}
          <button onClick={() => this.del(index)}>删除</button>
          <button onClick={() => this.del1(index)}>删除</button>
          {/* bind(this, 参数...): 详细要参考东哥的讲解 */}
          {/* ES6 和 bind 是两个时代 */}
          <button onClick={this.del1.bind(this, index)}>删除</button>
        </li>
      );
    });
  };

  del1(index) {
    this.state.items.splice(index, 1);
    this.setState({});
  }

  del = (index) => {
    // splice(n, m); 删除序号n开始 的 m个数据
    this.state.items.splice(index, 1);
    // 刷新ui
    this.setState({});
  };

  render() {
    return (
      <div>
        <h3>作业2</h3>
        <div>
          <input
            type="text"
            placeholder="请输入代办事项"
            value={this.state.item}
            onChange={(event) => this.setState({ item: event.target.value })}
            // onChange={this._inputChange}
          />
          {/* react严格模式, 写== 后台会黄色警告 */}
          {/* trim(): 去掉字符串两侧空格, 防止全空格的情况 */}
          <button
            onClick={this._addItem}
            disabled={this.state.item.trim() === ""}
          >
            确定
          </button>
          {/* <ul>{this.showItems()}</ul> */}
          {this.show()}
        </div>
      </div>
    );
  }

  // 条件渲染:
  show() {
    if (this.state.items.length == 0) {
      return <h2 style={{ color: "gray" }}>暂无代办事项</h2>;
    } else {
      return <ul>{this.showItems()}</ul>;
    }
  }

  // 带有_开头: 约定的格式, 代表此方法是绑定到事件上的!
  _addItem = () => {
    this.state.items.push(this.state.item);
    // setState(): 做两件事: 更新数据+更新UI

    // 必须有个参数: 即使是空的对象
    this.setState({}); //利用更新UI的特征, 让页面刷新: 因为在上方修改了数据

    // 更新输入框的值为空:  此行代码可以代替上一行; 为了讲解 所以保留上一行
    this.setState({ item: "" });
  };

  // 与上方的注释对应  onChange={this._inputChange}
  _inputChange = (event) => {
    this.setState({ item: event.target.value });
  };
}

```



##  网络请求

目前已经学过的网络请求发送方式:

* ajax
* jQuery
* axios
* angular:  自带网络请求服务

React本身不具备网络请求模块:  与vue相同, 需要使用第三方的 `axios` 来协助完成

```
$ npm i axios

带 -g 就是全局的;  不带就是项目下
```



```jsx
//rcc
import React, { Component } from "react";

// axios
import Axios from "axios";

export default class App extends Component {
  state = { data: null };

  // 组件挂载时
  componentDidMount() {
    let url = "https://api.apiopen.top/getImages";

    Axios.get(url).then((res) => {
      console.log(res);
      // 网络请求数据保存到state中:  页面要自动刷新 就必须用state 状态值
      this.setState({ data: res.data });
    });
  }

  render() {
    // 网络请求下的数据 刚开始没有不能用: 为了防止在不存在使用而导致报错
    if (this.state.data) {
      return (
        <div>
          {this.state.data.result.map((item, index) => {
            return (
              <img
                key={index}
                src={item.img}
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
            );
          })}
        </div>
      );
    }

    return <div></div>;
  }
}

```



### 练习:  新闻列表

接口: `https://api.apiopen.top/getWangYiNews`

* 需要用外部css文件进行布局:  `News.css`


```css
.box {
  margin: 0 auto;
  border: 1px solid lightblue;
  width: 550px;
}

.box-cell {
  display: flex;
  padding: 4px;
  border-bottom: 1px solid gray;
}

.box-cell > img {
  border-radius: 2px;
}

.box-cell > div {
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
  justify-content: space-between;
  margin-left: 4px;
}

.box-cell:hover {
  background-color: aliceblue;
  cursor: pointer;
}

```



```jsx
import React, { Component } from "react";

import Axios from "axios";

import "./News.css";

export default class App extends Component {
  // 状态值: 页面运行期间 数据会变化 导致UI变化的情况; 数据就要存状态值
  state = { data: null };

  componentDidMount() {
    let url = "https://api.apiopen.top/getWangYiNews";
    Axios.get(url).then((res) => {
      console.log(res);

      //
      this.setState({ data: res.data });
    });
  }

  showItems() {
    return this.state.data.result.map((item, index) => {
      return (
        <div key={index} className="box-cell">
          <img src={item.image} alt="" />
          <div>
            <span className="box-cell-title">{item.title}</span>
            <span className="box-cell-time">{item.passtime}</span>
          </div>
        </div>
      );
    });
  }

  render() {
    if (this.state.data) {
      // 利用了 return 执行后, 下方代码不执行的 特色:  可以不写else
      return <div className="box">{this.showItems()}</div>;
    }
    // 当网络请求未完毕前, 返回空的;
    return <div></div>;
  }
}

```





练习2: 

接口:` http://101.96.128.94:9999/mfresh/data/news_select.php?pageNum=1`

参数pageNum 为页数: 

日期需要自制函数进行   时间戳  到  年月日的转化:   **较难**

> React没有  管道 和 过滤器的概念

![image-20200902150314365](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200902150314365.png)

```css
.box {
  width: 700px;
  margin: 0 auto;
  margin-top: 70px;
}

.box-cell {
  display: flex;
  justify-content: space-between;
  padding: 4px;
  border-bottom: 1px dashed gray;
}

.pages {
  text-align: center;
}

.page,
.page-disable {
  display: inline-block;
  padding: 3px 6px;
  border: 1px solid gray;
  color: gray;
  margin: 10px 2px;
  border-radius: 3px;
  /* 用户可选择: 否 */
  user-select: none;
  cursor: pointer;
}

.page:hover {
  border-color: orange;
  background-color: orange;
  color: white;
}

/* 选中时 */
.page-cur {
  border-color: orange !important;
  background-color: orange;
  color: white !important;
}

.page-disable {
  color: lightgray !important;
  border-color: lightgray !important;
}

```

```jsx
// rcc

import React, { Component } from "react";

import Axios from "axios";

import "./App.css";

export default class App extends Component {
  state = { data: null };

  componentDidMount() {
    this.getData(1);
  }

  // 网络数据获取
  getData(pno) {
    let url =
      "http://101.96.128.94:9999/mfresh/data/news_select.php?pageNum=" + pno;

    Axios.get(url).then((res) => {
      console.log(res);

      this.setState({ data: res.data });
    });
  }

  showItems() {
    return this.state.data.data.map((item, index) => {
      // 修改 item.pubTime 为 年-月-日 格式
      let date = new Date(parseInt(item.pubTime));
      let year = date.getFullYear();
      let month = date.getMonth() + 1; //默认是0~11
      let day = date.getDate();
      let time = `${year}-${month}-${day}`;

      return (
        <div key={index} className="box-cell">
          <span>{item.title}</span>
          <span>{time}</span>
        </div>
      );
    });
  }

  showPages() {
    // let obj = {name: '丽萨', age :18}
    // 普通取值: let name = obj.name;  let age = obj.age;
    // 解包写法: let {name, age} = obj;    语法糖写法, 与上方等价
    let { pageCount, pageNum } = this.state.data;

    return (
      <div className="pages">
        {this.showPrev()}
        {this.range(pageCount).map((item, index) => {
          return (
            <span
              key={index}
              onClick={() => this.getData(item)}
              className={pageNum === item ? "page-cur page" : "page"}
            >
              {item}
            </span>
          );
        })}
        {this.showNext()}
      </div>
    );
  }

  showPrev() {
    let pageNum = this.state.data.pageNum;

    if (pageNum > 1) {
      return (
        <span onClick={() => this.getData(pageNum - 1)} className="page">
          上一页
        </span>
      );
    } else {
      return <span className="page-disable">上一页</span>;
    }
  }

  // 条件渲染: 显示不同的下一页按钮
  showNext() {
    // 当前页, 总页数
    let { pageNum, pageCount } = this.state.data;
    if (pageNum < pageCount) {
      /* ES6之前的非箭头函数: 需要bind 来延迟触发绑定参数 */
      return (
        <span onClick={this.getData.bind(this, pageNum + 1)} className="page">
          下一页
        </span>
      );
    } else {
      return <span className="page-disable">下一页</span>;
    }
  }

  // 循环遍历数组比较常见:  把 4 -> [1, 2, 3, 4]
  // 使用: range(4);  -> [1,2,3,4]
  range(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  }

  render() {
    // 利用return下方代码不执行: data是null的时候, 返回空div;
    if (!this.state.data) return <div></div>;

    return (
      <div className="box">
        <div>{this.showItems()}</div>
        {/* render是主渲染方法: 如果把大量代码堆砌在此处会导致阅读困难 */}
        {this.showPages()}
      </div>
    );
  }
}
```





## 作业

音乐排行榜: 

```
https://api.apiopen.top/musicRankings
```

左侧目录 可以点击:  点击之后 右侧内容会随着变化

左侧的选中栏目的背景色 会变化




实际的效果类似于: 


# React04

作业

```css
.box-left-cell {
  display: flex;
  width: 300px;
  padding: 3px;
  border: 1px solid lightblue;
  border-radius: 3px;
  margin-left: 10px;
  margin-bottom: 2px;
  cursor: pointer;
  user-select: none;
}

.box-left-cell > img {
  border-radius: 3px;
  width: 100px;
  height: 100px;
  margin-right: 3px;
}

.box-left-cell > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.box-left-cell span:first-child {
  font-weight: bold;
}

.box-left-cell span:last-child {
  font-size: 0.8rem;
  color: gray;
}

/* 当前选中项的样式 */
.box-left-cell-cur {
  background-color: lightblue;
}

.box {
  display: flex;
}

```

```jsx
// rcc
import React, { Component } from "react";

// 项目需要安装axios: npm i axios
import Axios from "axios";

// 外部css的引入  必须有 ./
import "./App.css";

export default class App extends Component {
  // 数据项变化导致页面变化, 则必须放state  状态值
  // cur: 左侧默认选中 序号0 的
  state = { data: null, cur: 0 };

  // 组件挂载时
  componentDidMount() {
    let url = "https://api.apiopen.top/musicRankings";

    Axios.get(url).then((res) => {
      console.log(res);
      // 状态值必须用 setState(): 才会发生UI的刷新
      this.setState({ data: res.data });
    });
  }

  showLeft() {
    return this.state.data.result.map((item, index) => {
      return (
        <div
          key={index}
          className={
            this.state.cur === index
              ? "box-left-cell box-left-cell-cur"
              : "box-left-cell"
          }
          onClick={() => this.setState({ cur: index })}
        >
          <img src={item.pic_s192} alt="" />
          <div>
            <span>{item.name}</span>
            <span>{item.comment}</span>
          </div>
        </div>
      );
    });
  }

  showRight() {
    // 通过当前选中的序号 读取当前右侧显示的数据
    let res = this.state.data.result[this.state.cur];

    return (
      <div>
        <h2>{res.name}</h2>
        <table>
          <thead>
            <tr>
              <td>序号</td>
              <td>专辑图片</td>
              <td>专辑名称</td>
              <td>歌手</td>
            </tr>
          </thead>
          <tbody>
            {res.content.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={item.pic_small} alt="" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    // 容错: 请求数据不存在时, 反空
    if (!this.state.data) return <div></div>;

    return (
      <div className="box">
        <div className="box-left">{this.showLeft()}</div>
        <div className="box-right">{this.showRight()}</div>
      </div>
    );
  }
}

```

































































