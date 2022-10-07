# Angular01

## Angular

* Vue

  * Google的离职人员开发, 后来由开源社区进行维护

* Angular

  * Google开发并维护
  * 由于 angular 和 vue 都是 google程序员开发, 所以整体思路非常相似

* React

  * Facebook开发并维护

  

官方: https://angular.cn/

安装脚手架:  https://angular.cn/guide/setup-local

> 来自 linux 的习惯:  命令行前端用 $ 代表这是个命令

```
查看当前计算机的node版本:  最低10.9.0
$ node -v

下载地址: https://nodejs.org/zh-cn/
当前稳定版: 12.18

安装方式: 一直next 到最后即可.  新版本会自动替换旧版本
```

检查中国镜像

> npm自带的镜像是国外网站,  由于网络限制, 导致下载速度慢 甚至无法下载

```
$ npm config get registry

中国镜像地址: https://registry.npm.taobao.org/

设置中国镜像
$ npm config set registry https://registry.npm.taobao.org/
```

安装angular脚手架:  **安装过程有问题都回车即可**

```
$ npm install -g @angular/cli

-g: 代表是全局安装 global.  即在哪里执行都可以
```

检测angular版本号

> 你的电脑如果是中心的, 可能有安装过;  则再次安装会报错

```
$ ng v

* 如果出现 ng 非内部或外部命令: 恭喜你, 正常执行上方的安装命令即可!
* 最新版本是 10.0.7, 版本低的要升级
```

**报错:**

由于npm安装的内容在c盘上, 所以命令行进行升级操作时, 需要替换文件,  有时会因为权限不够, 导致不允许替换, 而报错:

```
errno: -4048  
file exists at xxxx
```

解决方案:  手动删除之前的ng文件即可

```
删除位置: C:/Users/xxx/AppData/Roaming/npm
* Users 在C盘中的文件夹名可能叫 用户
* xxx: 不同电脑不同, 可以通过 win+R 打开cmd,  看到默认的用户名
* AppData: 文件夹可能不可见, 需要打开 查看隐藏文件 才可以 --- 具体百度

删除:
* ng 相关的文件
* 到 node_modules 文件夹下, 删除 @angular 文件夹

重新执行安装命令即可!
```

![image-20200824101807737](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824101807737.png)



### 生成项目包

> 本质: 下载300M的 项目文件

```
ng new 包名

例如: ng new ngpro
生成过程中的询问选项, 都回车即可!

包会生成在 cmd 所在的文件夹下
```

![image-20200824102512270](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824102512270.png)

下载完毕:

![image-20200824103115738](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824103115738.png)

但是有的同学会报错:   `git 不是内部或外部命令, 也不是可运行的程序...`   

> 因为没有安装git软件, 但是并不重要!   不影响使用

安装了git的同学:

![image-20200824103541881](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824103541881.png)



**报错:** `Package install failed, see above.`    网络环境差, 无法下载完成



## HelloWorld

> 启动之后, 访问 localhost:4200  可能会拒绝访问
>
> 此时 大概率是 系统防火墙拦截了你的请求:   关闭防火墙即可!
>
> 控制面板->防火墙->关闭即可!

启动命令

```
必须在项目根目录下执行
$ ng serve --open

简写:
$ ng s -o

会自动在默认浏览器中打开   http://localhost:4200/
也可以手动在你喜欢的浏览器中打开
```

![image-20200824112903766](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824112903766.png)



**解析 ng s -o 命令做了什么**

* 启动了项目服务器,  服务器的端口号(名字)是 4200
* 在浏览器上访问: `localhost:4200`
  * localhost: 域名;   在网络上计算机的自称, 相当于是 `我`
  * 4200: 端口号; 计算机中程序的唯一名称
  * localhost:4200   代表访问 当前计算机 的 名字时 4200的程序
* 服务器有默认设定:  如果不指定访问哪个文件, 则默认访问  index.html

![image-20200824114210731](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824114210731.png)



**ts**:   angular使用的不是 `js` 语言, 而是 `ts`语言, 所以文件结尾都是 ts

* JavaScript:   想当年 是一个程序员为了应付 KPI , 用了7天时间模仿java 和 c 制作的
  * 由于是赶工的作品, 所有有先天缺陷:  没有面向对象 使用的是原型进行扩展...
* TypeScript:  微软公司在JavaScript 基础上进行了完善;   整体与js语法完全一致 并且添加了很多 令人**兴奋的新特性**



## 组件

* vue
  * 组件是  .vue 文件;   把 html  js  css 都写在这个vue文件中
* angular
  * 组件是由3个文件组成: .html, .css,  .js

![image-20200824143515175](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824143515175.png)

![image-20200824143048426](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824143048426.png)

myc01.ts

```typescript
// 区别于 原生html开发:
// 原生的HTML: 运行的是html文件, 然后通过 link 来引入css,  通过script 引入js

// angular:
// 与原生相同点--分成三个文件;
// 不同点: 主文件为 .ts 文件;  运行.ts文件, 此文件中加载了 html 和 css

// 组件生成完毕之后, 必须注册为全局组件 才能全局使用!!
// 全局配置文件: src/app/app.module.ts

// 快捷代码块: ng-component
import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 代表当前组件使用时的名字, 为了防止与系统标签重名, 习惯上添加 app- 前缀;  使用时  <app-myc01></app-myc01>
  selector: 'app-myc01',
  // 运行的是 ts 文件,  ts中引入 html 和 css
  templateUrl: './myc01.html',
  // css文件可以有多个, 所以是数组类型
  styleUrls: ['./myc01.css'],
})
// 面向对象的 类
// Myc01 如果有爆红, 不影响使用,  但是可以在设置中搜索 experimentalDecorators;  勾选即可
export class Myc01 implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
```



myc01.html

```html
<p>Hello, myc01</p>

```



根组件: app.component.html

```html
<h1>Hello World!</h1>

<!-- 使用myc01 -->
<!-- 运行: ng s -o -->
<app-myc01></app-myc01>

```





全局配置文件: app.module.ts

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 默认的引入: app.component.ts  即根组件
import { AppComponent } from './app.component';
// 引入myc01
// {}中的名字 就是在 myc01.ts 中自定义的 class 名
import { Myc01 } from './myc01/myc01';

@NgModule({
  // 注册为全局组件
  declarations: [AppComponent, Myc01],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```



练习: 自制 myc02 组件

* 创建目录结构

  ```
  src/app/myc02
  --myc02.html
  --myc02.css
  --myc02.ts
  ```

* 在html中书写:  `<h2>你好, myc02</h2>`

* 在ts中: 使用 `ng-component` 代码快速生成基础结构

  * 修改默认生成的模板中的各处位置

    ```
    selector 为 app-myc02      类名: Myc02
    html 和 css 的引入
    ```

* 到 `app.module.ts` 中注册 myc02 组件为全局组件

* 使用:  到 `app.component.html` 中使用 myc02 组件

---

作者提供的快捷命令

> 背景: 作者认为 组件制作的流程是固定的
>
> > 生成3个文件 并且 注册到全局
> >
> > 程序员的座右铭:  懒!!

```
$ ng generate component 组件名

generate: 生成
component: 组件

简写:
$ ng g c 组件名
```

实测

```
在项目根目录下执行 
$ ng g c myc03
```

![image-20200824152859043](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824152859043.png)



## html 与 ts 文件的合作

生成组件: myc04 并且 在根组件中加载使用

```
$ ng g c myc04
```

myc04.component.ts

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc04',
  templateUrl: './myc04.component.html',
  styleUrls: ['./myc04.component.css'],
})
export class Myc04Component implements OnInit {
  // 此处的属性, 相当于在 vue 的 data(){ return {}} 书写的
  // 可以直接在 html 中使用

  name = 'dongdong';
  age = 18;
  married = true; //结婚

  names = ['东东', '然然', '亮亮'];

  boss = {
    name: '文华',
    age: 33,
  };

  constructor() {}

  ngOnInit(): void {}
}

```

myc04.component.html

```vue
<p>myc04 works!</p>

<ul>
  <li>{{ name }}</li>
  <li>{{ age }}</li>
  <li>{{ married }}</li>
  <li>{{ names }}</li>
  <li>{{ boss }}</li>

  <li>{{ names[0] }}</li>
  <li>{{ boss.name }}</li>
</ul>

<!-- 数学运算符 -->
<ul>
  <li>{{ 5 + 2 }}</li>
  <li>{{ 5 - 2 }}</li>
  <li>{{ 5 * 2 }}</li>
  <li>{{ 5 / 2 }}</li>
  <li>{{ 5 % 2 }}</li>
</ul>

<!-- 比较运算符 -->
<ul>
  <li>{{ age > 19 }}</li>
  <li>{{ age >= 19 }}</li>
  <li>{{ age < 19 }}</li>
  <li>{{ age <= 19 }}</li>
  <li>{{ age == 19 }}</li>
  <li>{{ age !== 19 }}</li>
</ul>

<!-- 逻辑运算符 -->
<!-- 
  逻辑与: && 读并且
  逻辑或: || 读或者
  逻辑非: !  读不是

  条件:
  唐三喜欢小舞  小舞喜欢唐三
  在一起?  并且关系 必须都真
  单相思?  或者关系 有一个真就行
 -->
<ul>
  <li>{{ true && true }}</li>
  <li>{{ true && false }}</li>
  <li>{{ true || true }}</li>
  <li>{{ false || false }}</li>
  <li>{{ !false }}</li>
  <li>{{ !true }}</li>
</ul>

<!-- 三元/目运算符 -->
<ul>
  <li>{{ age > 18 ? "成年" : "未成年" }}</li>
</ul>

```



## 属性 和 事件

新建组件: `myc05` 并展示到根组件中

```
$ ng g c myc05
```

myc05.component.ts

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.css'],
})
export class Myc05Component implements OnInit {
  title = '斗罗大陆';

  img =
    'https://tse2-mm.cn.bing.net/th/id/OIP.k_j23KT_a1tpBE9KWQlnagHaLH?pid=Api&rs=1';

  // 函数写在类中: 称为 方法
  show() {
    alert('事件触发');
  }

  constructor() {}

  ngOnInit(): void {}
}

```



myc05.component.html

```vue
<p>myc05 works!</p>

<h3 title="斗罗大陆">唐三的作品</h3>

<!-- 
  vue中: 
  v-bind:属性名="变量"
  :属性名="变量"
 -->

<!-- 
  [属性名]="变量"
 -->
<h3 [title]="title">唐三的作品</h3>

<img [src]="img" alt="" height="100" />

<!-- 
  vue中: 
  v-on:事件名="函数名()"
  @事件名="函数名()"
 -->
<!-- 
  angular中:
  (事件名)="函数名()"
 -->
<button (click)="show()">点击</button>

```



**练习: 计数器**

组件:  `myc06`

* 一个属性代表按钮上的数字: `num=1;`
* 点击时, 把属性num的值 `+1`

![image-20200824163314214](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824163314214.png)

myc06.component.ts

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc06',
  templateUrl: './myc06.component.html',
  styleUrls: ['./myc06.component.css'],
})
export class Myc06Component implements OnInit {
  num = 1;

  addOne() {
    this.num++;
  }

  constructor() {}

  ngOnInit(): void {}
}

```



myc05.component.html

```vue
<p>myc06 works!</p>

<button (click)="addOne()">{{ num }}</button>

```



## 一些特殊的属性

组件: `myc07`

```
$ ng g c myc07
```

.ts

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc07',
  templateUrl: './myc07.component.html',
  styleUrls: ['./myc07.component.css'],
})
export class Myc07Component implements OnInit {
  html = '<h1>ng g c 组件名</h1>';

  enable = true;

  // 双向数据绑定
  word = '默认值';

  constructor() {}

  ngOnInit(): void {}
}
```



.html

```vue

<p>myc07 works!</p>

<!-- 
  vue 和 ng 中的{{}}
  相当于原生DOM 的 innerText 
  原样输出

  vue中解析html: v-html
  ng中 [innerHTML]
-->
<div>{{ html }}</div>
<div [innerHTML]="html"></div>

<!-- disabled 属性 -->
<!-- 可以通过 boolean 布尔值来切换是否生效 -->
<button [disabled]="!enable">不可用的按钮</button>
<!-- 点击事件的本质: 就是执行""里的代码 -->
<button (click)="enable = !enable">切换不可用状态</button>

<br />
<!-- 双向数据绑定 -->
<!-- 
  vue: v-model
  ng: [(ngModel)]
  快捷提示: ng-model

  angular默认不加载 Form 模块, 导致双向绑定写法不可用!
  手动加载即可:  全局配置文件 app.module.ts 中
 -->
<input type="text" [(ngModel)]="word" />
<p>{{ word }}</p>
<!-- 
  双向绑定:
  方向1: 属性显示在输入框上
  方向2: 输入框变化时, 属性也会随之变化-- p标签的值变了
 -->

```



![image-20200824170814788](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824170814788.png)



## 插件

### **必装:** angular插件

![image-20200824104839851](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824104839851.png)

![image-20200824104919137](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824104919137.png)

### 选装:

* 让导航栏的图片变好看

  ![image-20200824104751056](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824104751056.png)

* 通过tab 按钮移动光标

  ![image-20200824105053951](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824105053951.png)

* 代码格式化插件:  在代码中右键 选择 格式化文档

  ![image-20200824105423912](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824105423912.png)

  ![image-20200824105657245](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824105657245.png)

* 在最常用的代码提示上 加星提示

  ![image-20200824105739712](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824105739712.png)
  
* 路径自动提示

  ![image-20200824141513731](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824141513731.png)



VSCode自带快捷命令行工具, 快捷键: 

```
ctrl + `
```

![image-20200824112250613](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824112250613.png)



![image-20200824142043264](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824142043264.png)



## 作业

**最好生成全新的项目包执行**

练习1:  加减计数器

* 点击 加 和 减 按钮, 中间的数字+1 和 -1
* 当数字达到20的时候, 则加号按钮变为不可用状态
* 当数字达到1的时候, 则减号可以点, 但是会提示: **最小为1** 数字不会变化 

![image-20200824172709606](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824172709606.png)

练习2:  西西的爱好

![image-20200824173126948](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824173126948.png)

练习3:  商品信息

![image-20200824173637843](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824173637843.png)

练习4: 轮播图

* 需要一个数组属性, 存储多个网络图片的网址;  (图片地址自行到百度图片查找)
* 需要一个 `curp`属性来代表当前页数, 默认值可以为1
* html中, 图片的地址 需要通过 curp 从 数组中读取
* 点击上一页 和 下一页按钮, 变化 curp的值,  图片就会随之变化
* 注意循环的极限值问题:  当最后一页时, 点击下一页变为第一页.  当第一页时点击上一页变为第一页

![image-20200824173717579](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200824173717579.png)


# Angular02

生成今日使用的项目包:

```
$ ng new ngpro
```

启动项目

```
$ ng s -o
```



编程最怕:  **眼高手低**   一看就会 一写就废;


## 作业

![image-20200825100002411](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200825100002411.png)



work.ts

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent implements OnInit {
  // 昨天说过的插件 prettier 配合保存时自动格式化
  // 按 ctrl+s保存时, 就会自动补全分号
  num = 1;

  hobby = '';
  like = '';

  saveLike() {
    this.like = this.hobby;
    this.hobby = '';
  }

  doMinuse() {
    if (this.num == 1) {
      alert('数量不能少于1');
      // return 可以终止代码执行
      return;
    }

    this.num = this.num - 1;
  }

  // 作业3:
  price = 7999;
  count = 1;

  // 作业4:
  images = [
    'https://tse3-mm.cn.bing.net/th/id/OIP.jwyAo-TrKtQj6K2AVVzxiAHaEK?pid=Api&rs=1',
    'http://5b0988e595225.cdn.sohucs.com/images/20190126/e5ae4556b52042d3aa6355ef7d0efbdd.jpeg',
    'https://tse3-mm.cn.bing.net/th/id/OIP.jyqDbZiaJiVNCONjcbxhXgHaEK?pid=Api&rs=1',
    'https://tse3-mm.cn.bing.net/th/id/OIP.MASmSGUEiRwOc86zsRb1OwHaEK?pid=Api&rs=1',
  ];

  // current page : 当前页  缩写 curp
  curp = 1; //记录当前页, 从1开始

  constructor() {}

  ngOnInit(): void {}
}

/**
 * 观察下方代码格式, 说出max的类型
 *
 * 1. max  全小写 变量
 * 2. Max  大驼峰 类名
 * 3. MAX  全大写 常量
 * 4. max() 小写带()  函数
 * 5. this.max()  带this开头, 带():  成员方法 类中的
 * 6. this.max   带this 不带();  成员属性, 类中的
 * 7. new Max()  带new 大驼峰   类
 * 8. 'max'      带引号 字符串
 *
 */

```

work.html

```html
<p>work works!</p>

<!-- 作业1: 计数器 -->
<!-- ctrl+回车 -->
<button (click)="doMinuse()">-</button>
<b>{{ num }}</b>
<!-- 
  属性用 []   -- vue :
  事件用 ()   -- vue @
 -->
<button [disabled]="num == 20" (click)="num = num + 1">+</button>

<hr />

<!-- 作业2: -->
<p>西西晚上喜欢:{{ like }}</p>
<!-- 
  默认 angular 不加载form模块, 导致双向绑定不可用! 
  手动加载即可:  app.module.ts
-->
<input type="text" placeholder="西西的爱好" [(ngModel)]="hobby" />
<button (click)="saveLike()">确定</button>

<hr />
<!-- 作业3:  -->
<p>商品名: iPhone</p>
<div>
  <span>商品价格:</span>
  <input type="text" [(ngModel)]="price" />
</div>
<div>
  <span>商品数量:</span>
  <button (click)="count = count - 1" [disabled]="count == 1">-</button>
  <b>{{ count }}</b>
  <button (click)="count = count + 1">+</button>
</div>
<p>总价格: {{ price * count }}</p>

<!-- 作业4 -->

<hr />
<!-- curp起始值为1;   下标取值从0开始 -->
<img [src]="images[curp - 1]" alt="" width="200" height="100" />
<div>
  <!-- 当前页时1, 则变为最后一页 -->
  <button (click)="curp = curp == 1 ? images.length : curp - 1">上一页</button>
  <!-- 当curp为最后一页, 则变回1 -->
  <button (click)="curp = curp == images.length ? 1 : curp + 1">下一页</button>
</div>

```





插件:

* 修改双标签时, 会自动联动

  ![image-20200825140955360](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200825140955360.png)



## 今日内容

### 风格样式属性

创建组件: `myc01`

```
$ ng g c myc01
```

![image-20200825110632291](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200825110632291.png)

ts

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc01',
  templateUrl: './myc01.component.html',
  styleUrls: ['./myc01.component.css'],
})
export class Myc01Component implements OnInit {
  size = 17;
  // 半径
  radius = 0;

  constructor() {}

  ngOnInit(): void {}
}

```





html

```vue
<p>myc01 works!</p>

<div>
  <b style="font-size: 20px; color: pink;">Hello,七夕</b>
</div>

<div>
  <!-- ng-style: 值为对象类型 -->
  <!-- js的属性名不允许中划线出现: 所以css中 font-size 要改成小驼峰 或 字符串 -->
  <b [ngStyle]="{ color: 'red', fontSize: size + 'px' }">Hello, 七夕</b>
</div>

<!-- 需求: 点击按钮 让文字变大 -->
<button (click)="size = size + 2">变大</button>

<div
  [ngStyle]="{
    width: '100px',
    height: '100px',
    'background-color': 'blue',
    borderRadius: radius + 'px'
  }"
></div>
<button (click)="radius = radius + 2">变圆形</button>
<button (click)="radius = 0">重置</button>

<hr />
<!-- radius<=10   显示normal样式 -->
<!-- radius>10 并 小于20   显示success样式 -->
<!-- radius>=20   显示danger样式 -->
<hr />

<!-- 
  与vue中的设计完全相同:  vue中  :class={样式名: true/false}
 -->
<span
  style="display: inline-block; border-radius: 3px;"
  [ngClass]="{
    normal: radius <= 10,
    success: radius > 10 && radius < 20,
    danger: radius >= 20
  }"
  >Radius:{{ radius }}</span
>

```



css

```css
.danger {
  background-color: red;
  color: white;
  padding: 10px 30px;
}

.success {
  background-color: green;
  color: white;
  padding: 10px 30px;
}

.normal {
  background-color: lightblue;
  color: white;
  padding: 10px 30px;
}

```



### 条件渲染

if写法

生成组件: `myc02`

```
$ ng g c myc02
```

ts

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc02',
  templateUrl: './myc02.component.html',
  styleUrls: ['./myc02.component.css'],
})
export class Myc02Component implements OnInit {
  // 分数
  score = 60;

  constructor() {}

  ngOnInit(): void {}
}

```





html

```vue
<p>myc02 works!</p>

<!--
  条件渲染:
  vue中: v-if
  ng中: *ngIf
 -->
<button (click)="score = score - 10">减分</button>
<button (click)="score = score + 10">加分</button>
<h3>西西的面试分数: {{ score }}</h3>

<p *ngIf="score < 60">今天面试就到这里, 回去等消息吧</p>
<p *ngIf="score >= 60 && score <= 80">一会跟我们的人力资源同事聊一聊</p>
<p *ngIf="score > 80">请稍等, 我们老板来和你聊一聊</p>

<!-- if-else 写法 -->
<hr />
<ng-container *ngIf="score < 60; else xyz">
  <b>不及格</b>
</ng-container>
<!-- # 是 css中的id选择器写法;  而此处作者借鉴了这种id的快捷写法 -->
<!-- #elseTemplate 相当于 id='elseTemplate' -->
<ng-template #xyz>
  <b>及格</b>
</ng-template>

```



### 循环遍历

新建组件: `myc03`

```
$ ng g c myc03
```

ts

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc03',
  templateUrl: './myc03.component.html',
  styleUrls: ['./myc03.component.css'],
})
export class Myc03Component implements OnInit {
  names = ['东东', '亮亮', '然然', '西西', '楠楠', '贝贝'];

  emps = [
    { name: '东东', age: 18, phone: '18844559988', sex: 1 },
    { name: '然然', age: 19, phone: '18889559988', sex: 1 },
    { name: '西西', age: 20, phone: '18899559988', sex: 0 },
    { name: '贝贝', age: 21, phone: '18800559988', sex: 1 },
    { name: '楠楠', age: 22, phone: '18822559988', sex: 0 },
  ];

  constructor() {}

  ngOnInit(): void {}
}

```





html

```vue
<p>myc03 works!</p>

<!-- 
  循环展示:
  vue: v-for="(item,index) in arr" :key="index"
 -->

<ul>
  <!-- ng-for-li -->
  <!-- 不同于 小程序;vue  不需要写key -->
  <li *ngFor="let item of names">
    <span>{{ item }}</span>
  </li>
</ul>

<hr />

<ul>
  <!-- ng-for-index -->
  <!-- 带有序号的写法 -->
  <li *ngFor="let item of names; let i = index">
    <span>序号: {{ i }}</span>
    <span>. {{ item }}</span>
  </li>
</ul>

<hr />

<table border="1">
  <tr>
    <td>序号</td>
    <td>姓名</td>
    <td>年龄</td>
    <td>手机号</td>
    <td>性别</td>
  </tr>
  <tr *ngFor="let item of emps; let i = index">
    <td>{{ i + 1 }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.age }}</td>
    <td>{{ item.phone }}</td>
    <td>{{ item.sex }}</td>
  </tr>
</table>
```



### 自定义指令

可以自定义一个属性: 添加到任意的元素上之后, 此元素就会自动变化DOM属性

> 例如:  我们可以制作一个神奇的戒指, 带在谁手上 谁就是你的女朋友!
>
> 你还可以制作一个神奇的帽子, 带在谁头上..

制作组件: `myc04`

```
$ ng g c myc04
```



自定义指令命令

> 指令生成之后, 最好重启服务器;  有的时候不会自动加载新指令

```
$ ng generate directive 指令名

简写:
$ ng g d 指令名
```

例如: blue指令, 让双标签的元素变为蓝色

```
$ ng g d blue
```

![image-20200825141633467](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200825141633467.png)

myc04.component.html

``` vue
<p>myc04 works!</p>

<ul>
  <li appBlue>亮亮</li>
  <!-- blue是一个自定义属性, 在ng中称为指令 -->
  <!-- 需要自定义: ng g d blue -->
  <li>然然</li>
  <li>东东</li>
  <!-- 自定义 hide 指令, 可以隐藏某个元素 -->
  <!-- * ng g d hide -->
  <!-- * style 中有 display 的属性,  none 代表隐藏 -->
  <li appHide>华哥</li>
</ul>

<hr />
<!-- 输入框自动焦点 -->
<div>
  <input type="text" />
</div>
<div>
  <!-- input元素的 focus() 方法可以获取焦点状态 -->
  <!-- ng g d focus -->
  <input type="text" appFocus />
</div>
<div>
  <input type="text" />
</div>

```



blue.directive.ts

```typescript
import { Directive, ElementRef } from '@angular/core';

@Directive({
  // 生成的指令名 会自带 App前缀 防止与系统自带的冲突
  selector: '[appBlue]',
})
export class BlueDirective {
  // 指令所在的元素, 会自动作为参数传递到构造方法中
  constructor(e: ElementRef) {
    console.log(e);
    e.nativeElement.style.color = 'blue';
    e.nativeElement.style.fontSize = '30px';
  }

  // TS语言: 具备的最重要的特性 -- 静态类型分析
  // 变量:类型名;   我们的vscode会根据用户给的类型 来给出智能的代码提示!
  show(name: string) {
    // name.pus
  }
}

```



focus

```typescript
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocus]',
})
export class FocusDirective {
  constructor(e: ElementRef) {
    console.log(e);

    e.nativeElement.focus();
  }
}

```



hide

```typescript
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHide]',
})
export class HideDirective {
  constructor(e: ElementRef) {
    console.log(e);
    e.nativeElement.style.display = 'none';
  }
}

```



### 管道

管道就是vue中的过滤器: `filter`

管道: pipe

```
<tag>{{ 值 | 管道名 }}</tag>
```

不同于vue:  vue本身不提供任何过滤器, 都需要自定义!

angular官方提供了一些比较常用的管道

---

新建组件

```
$ ng g c myc05
```

```vue
<p>myc05 works!</p>

<!-- 提供提供的管道 -->
<p>变大写: {{ "hello xixi" | uppercase }}</p>
<p>变小写: {{ "WEB MEMEDA" | lowercase }}</p>
<p>首字母大写: {{ "nice to meet you" | titlecase }}</p>
<p>百分数: {{ 0.78555 | percent }}</p>
<!-- 2.2  最少整数位.保留的小数位 -->
<p>百分数: {{ 0.78555 | percent: "2.2" }}</p>
<p>百分数: {{ 0.085 | percent: "2.2" }}</p>
<p>千分位的钱: {{ 123456.789 | currency }}</p>
<p>千分位的钱: {{ 123456.789 | currency: "¥" }}</p>
<!-- 时间戳: 当前时间距离1970年1月1日的秒数 -->
<!-- 单位: 毫秒 -->
<p>日期: {{ 1598340423355 | date }}</p>
<!-- 
  year:  年 y
  month: 月 M
  day:   日 d
  hour:  时 h12小时  H24小时
  minute:分 m
  second:秒 s
 -->
<p>日期: {{ 1598340423355 | date: "yyyy-MM-dd HH:mm:ss" }}</p>
<p></p>
<p></p>
<p></p>

```



### 自定义管道 Pipe

生成组件:

```
$ ng g c myc06
```

生成管道的命令

```
$ ng generate pipe 管道名

简写:
$ ng g p 管道名
```

![image-20200825153921324](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200825153921324.png)



html

```vue
<p>myc06 works!</p>

<!-- 管道: 修改双标签的值 -->
<!-- ng g p pow -->
<p>{{ 5 | pow }}</p>
<p>{{ 9 | pow }}</p>

<!-- 练习 -->
<!-- 1 出现男  0出现女 -->
<!-- ng g p gender -->
<p>{{ 1 | gender }}</p>
<p>{{ 0 | gender }}</p>

<!-- 带参数的管道 -->
<!-- 生成管道: ng g p love -->
<!-- 生成之后 重启 服务器 -->
<p>{{ "然然" | love: "小乔" }}</p>
<!-- 然然 喜欢 小乔 -->
<p>{{ "然然" | love: "亮亮" }}</p>

<!-- 练习 -->
<!-- ng g p fear -->
<p>{{ "然然" | fear: "宝宝":"绿色" }}</p>
<!-- 
  固定2个参数: 出现 然然害怕xx和xx
 -->

<!-- 带默认值的管道: 生成 ng g p like   重启 -->
<p>{{ "西西" | like }}</p>
<!-- 出现: 西西最喜欢 然然 老师 -->
<p>{{ "西西" | like: "东东" }}</p>
<!-- 出现: 西西最喜欢 东东 老师 -->

```



pow.pipe.ts

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow',
})
export class PowPipe implements PipeTransform {
  // <p>{{ 9 | pow }}</p>
  // 管道的写法: {{value | 管道名}}
  // value就会作为参数1 传递到下方的方法中!
  transform(value: number) {
    // 返回值就是 管道处理的结果
    return Math.pow(value, 2);
  }
}
// 新的管道:  要重启服务器才能生效!

```



love.pipe.ts

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'love',
})
export class LovePipe implements PipeTransform {
  // {{ "然然" | love: "小乔" }}
  // {{ 值 | 管道名: 参数2: 参数3: 参数4...}}
  transform(value: string, lover: string) {
    return value + '喜欢' + lover;
  }
}

```



fear.pipe.ts

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fear',
})
export class FearPipe implements PipeTransform {
  // {{ "然然" | fear: "宝宝":"绿色" }}
  transform(value: string, name1: string, name2: string) {
    return value + '害怕' + name1 + '和' + name2;
  }
}

```



gender.pipe.ts

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  // {{0|gender}}
  transform(value: number) {
    // if (value == 0) return '女';
    // if (value == 1) return '男';

    // arr[index]:  利用下标来取巧
    return ['女', '男'][value];
  }
}

```





带有默认值的 like

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'like',
})
export class LikePipe implements PipeTransform {
  // {{ "西西" | like: "东东" }}
  // {{ "西西" | like }}
  transform(value: string, name = '然然') {
    return value + '最喜欢' + name + '老师';
  }
}

```



## TypeScript

官方: https://www.tslang.cn/

TypeScript是 JavaScript 的一个超集:  在JS的基础上进行了完善, 新增了很多新特性;

由微软公司进行开发并维护

```
浏览器默认只支持 HTML CSS JS
TS语言必须翻译成JS之后 才能在浏览器上执行:

类似于 ES6 语法在旧版本浏览器上无法识别, 运行时必须用 babel 来编译
```

安装 TS 的编译工具

```
npm i -g typescript
```

![image-20200825163816825](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200825163816825.png)

查看版本号

```
$ tsc -v
```

编译ts为js文件

```typescript
// 体验 静态类型 分析 和 编译操作

// 静态类型分析:  通过 变量:类型名 写法来告知 vscode 变量是什么类型的
// vscode就可以在 代码未运行的情况下 提前预判代码
function show(name: string) {
  // name.push();

  return name.toLowerCase();
}

console.log(show("HELLO"));

// 编译成JS之后运行
// 编译命令: tsc 文件名.ts

/**
 * 优点:
 * 写代码的时候 有充足的代码提示
 * 并且 可以预判出代码中的错误 给出提示
 * 对于程序员非常友好
 */

```

基础类型

```typescript
// 可以设置的类型

class Emp {
  // 变量:类型 = 值
  name: string = "东东";

  // 数字类型: 整数 浮点
  age: number;

  // 布尔类型
  married: boolean;

  // 任意类型
  abc: any;

  // 多种类型: |代表或
  xyz: number | string;

  // 数组: 下方两种写法是等价的: 代表是 数组类型, 其中的值都是字符串
  names: Array<string>;
  words: string[];

  show() {
    // this.name.
    // this.age.
    // this.married = 1;
    this.abc = 12;
    this.abc = true;

    this.xyz = 12;
    this.xyz = "123";

    this.names = ["mike", "lucy", true, 123];
    this.words = ["mike", "lucy", true, 123];
  }
}

```





自定义类型

```typescript
// 自定义数据类型

// 例如: 对象类型, 其中有name age sex 3个属性

// 新的关键词: interface 接口, 此处用于定义对象类型
// interface 和 function  class 都是关键词
interface User {
  name: string;
  age: number;
  sex: number;
}

// 变量 xixi 是 User 类型
let xixi: User = {
  name: "西西",
  age: 18,
  sex: 0,
};

// 男朋友类型: 类型名 BoyFriend
// 必备属性: house money car

// 类型声明
interface BoyFriend {
  house: string;
  money: number;
  car: string;
}

// 对象类型 Object
let san: BoyFriend = {
  house: "上海明珠塔前200平",
  money: 98888,
  car: "...",
};

```





访问控制词

```typescript
// 面向对象中的 访问控制词
/**
 * 在绝大多数的面向对象语言中都存在 控制词
 * public 公开的
 * protected 保护的
 * private 私有的
 */

//  三个角色: 本人 外人 儿子
class Demo {
  // 公开的
  public name = "唐三";
  // 保护的
  protected money = "唐三的钱";
  // 私有的
  private avi = "唐三年轻时珍藏的电影";
}

// extends 继承
class Son extends Demo {
  show() {
    this.name; //公开的, 子类可以访问
    this.money; //保护的, 子类可以
    // this.avi;
  }
}

let san = new Demo();
san.name;
// 类外读
// san.money;
// san.avi;
```



## 作业

作业1: 轮播图

* 需要一个数组, 保存多张图片的地址
* 一个curp属性来代表当前页
* 循环数组, 来生成小圆点, 通过判断当前页 让小圆点具备不同的样式
  * 当前页的小圆点会变色
* 小圆点可以点击, 实现图片的变化

![image-20200825174301391](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200825174301391.png)

作业2:  待办事项

* 点击确定按钮, 把输入框的内容添加到下方列表中, 并清空输入框内容
* 删除按钮可以点击, 删除对应项目
* 当所有项目删除后, 则显示 暂无待办事项
* 输入框没有值的时候, 确定按钮无法点击: disabled

![image-20200825174612716](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200825174612716.png)





作业3: 自定义指令

```
<p appMore>西西</p>

可以让西西的 字变大 40px, 颜色变为橘黄色, 背景色变为紫色
```



作业3: 自定义管道

```
<p>{1 | sexy}</p>  出现 男
<p>{1 | sexy:'en'}</p> 出现 Male
<p>{1 | sexy:'full'}</p> 出现 男性

<p>{0 | sexy}</p>  出现 女
<p>{0 | sexy:'en'}</p> 出现 FeMale
<p>{0 | sexy:'full'}</p> 出现 女性

<p>{2 | sexy}</p>  出现 保密
<p>{2 | sexy:'en'}</p> 出现 Security
<p>{2 | sexy:'full'}</p> 出现 秘密
```

# Angular03



## 作业

生成组件： `work`

```
$ ng g c work
```

![image-20200826101004300](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200826101004300.png)

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent implements OnInit {
  images = [
    'https://tse1-mm.cn.bing.net/th/id/OIP.h7qE6_3c6BRPX8oV_3gZCQHaHa?pid=Api&rs=1',
    'http://www.ghostw7.com/uploadslxy/allimg/160125/1T9131158-11.jpg',
    'https://tse1-mm.cn.bing.net/th/id/OIP.a13xv-Dkd4pE26B1PNFpyAHaGl?pid=Api&rs=1',
    'http://www.bbra.cn/Uploadfiles/imgs/2015/07/08/ziran2/Xbzs_005.jpg',
    'https://tse3-mm.cn.bing.net/th/id/OIP.SvFWgUzUbMiP8JL9x2GTFgHaFj?pid=Api&rs=1',
  ];

  curp = 1; //当前页

  // 代办事项
  items = ['吃饭', '睡觉', '打亮亮'];

  todo = '';

  constructor() {}

  ngOnInit(): void {}
}
```



```html
<p>work works!</p>

<div class="banner">
  <img [src]="images[curp - 1]" alt="" />
  <div class="page-btns">
    <button (click)="curp = curp == 1 ? images.length : curp - 1">
      上一页
    </button>
    <button (click)="curp = curp == images.length ? 1 : curp + 1">
      下一页
    </button>
  </div>
  <div class="pages">
    <!-- 循环的序号i 从0开始;  页数curp从1开始 -->
    <span
      *ngFor="let item of images; let i = index"
      [ngClass]="{ page: true, 'page-cur': i + 1 == curp }"
      (click)="curp = i + 1"
    >
    </span>
  </div>
</div>

<hr />
<!-- 作业2: 待办事项 -->
<div>
  <input type="text" placeholder="请输入代办事项" [(ngModel)]="todo" />
  <button (click)="items.push(todo); todo = ''" [disabled]="todo == ''">
    确定
  </button>
</div>
<div *ngIf="items.length != 0">
  <ul>
    <li *ngFor="let item of items; let i = index">
      <span>{{ i + 1 }}. </span>
      <span>{{ item }}</span>
      <!-- splice(i,n): 从序号i开始 删除n个元素 -->
      <button (click)="items.splice(i, 1)">删除</button>
    </li>
  </ul>
</div>
<div *ngIf="items.length == 0">
  <h3>暂无代办事项</h3>
</div>

<hr />
<!-- 作业3 -->

<!-- $ ng g d more -->
<!-- 生成新的指令, 加载新的模块, 新的管道: 都要重启服务器 -->
<p appMore>西西</p>

<!-- 可以让西西的 字变大 40px, 颜色变为橘黄色, 背景色变为紫色 -->

<!-- 管道练习 -->
<!-- $ ng g p sexy -->
<!-- 重启服务器 -->
<p>{{ 1 | sexy }}</p>
<p>{{ 1 | sexy: "en" }}</p>
<p>{{ 1 | sexy: "full" }}</p>

<p>{{ 0 | sexy }}</p>
<p>{{ 0 | sexy: "en" }}</p>
<p>{{ 0 | sexy: "full" }}</p>

<p>{{ 2 | sexy }}</p>
<p>{{ 2 | sexy: "en" }}</p>
<p>{{ 2 | sexy: "full" }}</p>

```

```css
/* 普通的页数指示 */
.page {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: blue;
  margin: 0 2px;
}

/* 高亮的页数指示 */
.page-cur {
  background-color: red !important;
}

.banner {
  width: 400px;
  height: 300px;
  /* 内容要覆盖在其他元素上, 采用定位方式 */
  /* 内容用 绝对定位 则父元素必须是定位模块 */
  position: relative;
}

.banner > img {
  width: 100%;
  height: 100%;
}

.pages {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  text-align: center;
}

.page-btns {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  margin-top: -20px;
  display: flex;
  justify-content: space-between;
}

```

more.directive.ts

```typescript
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMore]',
})
export class MoreDirective {
  constructor(e: ElementRef) {
    console.log(e);
    //  可以让西西的 字变大 40px, 颜色变为橘黄色, 背景色变为紫色
    e.nativeElement.style.fontSize = '40px';
    e.nativeElement.style.color = 'orange';
    e.nativeElement.style.backgroundColor = 'purple';
  }
}

```



sexy.pipe.ts

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexy',
})
export class SexyPipe implements PipeTransform {
  // <p>{{ 1 | sexy }}</p>
  // <p>{{ 1 | sexy: "en" }}</p>
  // <p>{{ 1 | sexy: "full" }}</p>

  // lang -> language 缩写  语言
  // zh: 代表中文
  transform(value: number, lang = 'zh') {
    if (lang == 'zh') {
      return ['女', '男', '保密'][value];
    }
    if (lang == 'en') {
      return ['Female', 'Male', 'Security'][value];
    }
    if (lang == 'full') {
      return ['女性', '男性', '秘密'][value];
    }
  }
}

```



## 服务

就是 vue 中的 Vuex;  负责状态管理;  可以在多个组件之间共享数据和方法

创建组件: `myc01` 和 `myc02`

```
$ ng g c myc01

$ ng g c myc02
```

新的命令: 生成服务

```
$ ng generate service 服务名

简称:
$ ng g s 服务名
```

例如:

```
$ ng g s movie
```

![image-20200826114338708](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200826114338708.png)

依赖注入机制:

```typescript
// 依赖注入机制

/**
 * 生活中的例子:
 * 1. 超市门口的娃娃机
 * 声明依赖:  必须投币才能使用
 * 注入: 用户使用时, 则必须投币才能使用
 *
 * 2. 超市门口 摇摇椅
 * 声明依赖:  1元/次
 * 注入: 玩的时候则必须投1元才能玩
 *
 *
 */

// 在程序的世界里也有依赖注入机制:
class Demo {
  // 构造方法: 实例化时触发,  new Demo()
  // 构造时, 声明要参数name, 则使用时就必须传递一个参数给name
  constructor(name: string) {}
}

new Demo('北北');

```



myc01.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
// 引入服务
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-myc01',
  templateUrl: './myc01.component.html',
  styleUrls: ['./myc01.component.css'],
})
export class Myc01Component implements OnInit {
  // 声明依赖: 代表当前组件要想实例化成功, 必须传递一个  MovieService 类型的值
  // 变量名可以随便起, 但是最好有含义:  这里写 suibian 只是代表 真的可以随便起
  // 正经点:  movieS  或者  ms 这种更好些

  suibian: MovieService; //声明类型给vscode看, 这样使用时才会有提示!

  // 组件是系统自动实例化, 我们只要理解系统会自动传递 MovieService类型的变量进来即可!
  constructor(suibian: MovieService) {
    // 此处suibian 局部变量, 不能全局使用;  必须保存成员属性才可以!
    this.suibian = suibian;
    // this.成员属性 = 局部变量
  }

  ngOnInit(): void {}
}

```



myc01.component.html

```vue
<p>myc01 works!</p>

<ul>
  <li *ngFor="let item of suibian.movies; let i = index">
    <span>{{ item }}</span>

    <button (click)="suibian.movies.splice(i, 1)">删除</button>
  </li>
</ul>

```



### 服务练习

* 生成myc03组件: `ng g c myc03`, 并且加载到 根组件html中

* 生成服务: `name`

  ```
  ng g s name
  ```

* 在名字服务中, 添加数组

  ```
  names = ['然然', '东东', '亮亮']
  ```

* 在 `myc03` 组件中使用依赖注入方式, 声明依赖, 引入名字服务

* 把名字 循环遍历 显示到页面上

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NameService {
  names = ['东东', '然然', '亮亮'];

  constructor() {}
}

```



**创建组件myc04**

> 语法糖写法

```
$ ng g c myc04
```

```typescript
import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-myc04',
  templateUrl: './myc04.component.html',
  styleUrls: ['./myc04.component.css'],
})
export class Myc04Component implements OnInit {
  // 语法糖, 固定格式:  权限词 变量名: 变量类型
  // 权限词: public protected private  对应 公开的 保护 私有
  // 根据实际场景来决定用哪个
  constructor(public nameS: NameService, public movieS: MovieService) {}

  ngOnInit(): void {}
}

```

```html
<p>myc04 works!</p>

<p *ngFor="let item of nameS.names">{{ item }}</p>

<hr />

<p *ngFor="let item of movieS.movies">{{ item }}</p>
```



## 系统服务

angular本身提供很多强大的服务,  比如 网络服务

> vue框架本身不具备网络服务模块, 所以使用了第三方的 axios 来完成

生成组件: myc05

**网络服务模块默认不加载, 必须手动修改 app.module.ts 进行挂载**

> 这与 form 模块相同

![image-20200826144347999](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200826144347999.png)



myc05.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.css'],
})
export class Myc05Component implements OnInit {
  // 声明但是未赋值: 则是 undefined
  // 赋值时机: 在网络请求完毕后 对其进行了赋值
  res: Res; //自定义类型: html中才会有代码提示

  // 声明依赖: 依赖网络服务
  constructor(public http: HttpClient) {}

  // vue在生命周期的钩子函数: mounted 中发送  挂载时
  // ng也有自己的一套生命周期: ngOnInit 就是当成是挂载时
  ngOnInit(): void {
    // 回顾axios的写法:  axios.get(url).then(res=>{返回值res...})

    let url = 'https://api.apiopen.top/getImages';
    // then换成了 subscribe: 订阅的含义;  代表订阅请求的结果
    this.http.get(url).subscribe((res: Res) => {
      console.log(res);
      // res在这里是局部变量, 要想显示到html中 则必须保存到 成员属性中!
      this.res = res;
    });
  }
}

// 自定义数据类型: 对象类型;  这样html中使用时有代码提示
interface Result {
  id: number;
  img: string;
  time: string;
}

interface Res {
  code: number;
  message: string;
  result: Array<Result>;
}

```



myc04.component.html

```html
<p>myc05 works!</p>

<!-- ERROR TypeError: Cannot read property 'result' of undefined -->
<!-- 错误 类型错误: 不能对 undefined 读取属性 'result' -->
<!-- 
  报错: 网络请求完毕之前 res 是undefined  此时如果使用了res 则必然报错
  解决: 判断res存在值 再使用即可
 -->

<div *ngIf="res">
  <!-- 后台有404报错是正常的, 因为免费接口, 图片很多不存在 -->
  <img
    *ngFor="let item of res.result"
    [src]="item.img"
    alt=""
    width="100"
    height="100"
  />
</div>

```



### 练习:  网易新闻制作

* 制作新的组件: `myc06`
* 接口:`https://api.apiopen.top/getWangYiNews`
  * get请求
  * 自定义数据类型
* 引入服务, 发送请求, 把数据进行显示



```typescript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-myc06',
  templateUrl: './myc06.component.html',
  styleUrls: ['./myc06.component.css'],
})
export class Myc06Component implements OnInit {
  res: Res; //1.成员属性才能在html中使用  2.声明类型html中才能有代码提示

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    let url = 'https://api.apiopen.top/getWangYiNews';
    this.http.get(url).subscribe((res: Res) => {
      console.log(res);

      this.res = res;
    });
  }
}

interface Result {
  image: string;
  passtime: string;
  path: string;
  title: string;
}

interface Res {
  code: number;
  message: string;
  // Array<Result>: 数组类型, 其中每个元素是 Result 类型
  result: Array<Result>;
}

```



```vue
<p>myc06 works!</p>

<!-- 网络请求完成前 res是undefined 不能使用:  判断存在 再使用 -->
<div *ngIf="res">
  <div *ngFor="let item of res.result" class="cell">
    <img [src]="item.image" alt="" />
    <div>
      <span>{{ item.title }}</span>
      <span>{{ item.passtime }}</span>
    </div>
  </div>
</div>

```



```css
.cell {
  width: 400px;
  padding: 4px;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: row;
  background-color: aliceblue;
}

.cell > img {
  width: 120px;
  height: 80px;
  border-radius: 2px;
}

.cell > div {
  display: flex;
  flex: 1;
  margin-left: 4px;
  flex-direction: column;
  justify-content: space-around;
}

```



## 组件的生命周期

 一些钩子函数, 能够在不同的生命周期节点 自动执行;  

我们可以在不同的周期函数中做一些对应的事情

生成组件

```
$ ng g c myc07
```

![image-20200826164515373](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200826164515373.png)

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc07',
  templateUrl: './myc07.component.html',
  styleUrls: ['./myc07.component.css'],
})
export class Myc07Component implements OnInit {
  items = ['东东', '亮亮', '然然', '齐德龙'];

  constructor() {
    // 受精
    console.log('constructor: 构造函数, 组件生成时触发');
  }

  ngOnInit(): void {
    // 发育
    console.log('ngOnInit: 组件中的内容开始初始化');
  }

  // ng-after
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: 页面上显示的数据初始化完毕时');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: 页面上显示的数据发生变化时');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: 页面上的UI初始化完毕时');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: 页面上的UI发生变化时');
  }

  // ng-destroy
  ngOnDestroy(): void {
    // 死亡
    console.log('ngOnDestroy: 组件销毁时');
  }
}

```



## 父子传参

在vue中

```
<Son name='唐三' />

接收
props: ['name']
```

创建myc08: `ng g c myc08`

```vue
<!-- 父子传参 -->
<!-- [属性名]="js代码" -->
<!-- [age]="18" 这里的18是number类型 -->
<app-myc08
  name="北北"
  [age]="18"
  [boss]="{ name: '文华', age: 33 }"
></app-myc08>
```



```typescript
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-myc08',
  templateUrl: './myc08.component.html',
  styleUrls: ['./myc08.component.css'],
})
export class Myc08Component implements OnInit {
  // 声明name属性 来接收外来的传参
  // @Input(): 固定标识, 代表 name属性是外部传入的
  @Input() name: string;
  @Input() age: number;

  @Input() boss: Boss;

  constructor() {}

  ngOnInit(): void {}
}

// 自定义类型
interface Boss {
  name: string;
  age: number;
}

```



```html
<p>myc08 works!</p>

<h4>传入的name是: {{ name }}</h4>
<h4>传入的age是: {{ age }}</h4>
<h4>boss: {{ boss.name }}, {{ boss.age }}</h4>

```



### 掌控子元素

新建组件:`myc09`

```
$ ng g c myc09
```

关键词: `@ViewChild(唯一标识)`

```typescript
import { Component, ViewChild } from '@angular/core';
import { Myc09Component } from './myc09/myc09.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngpro';

  show = false;

  // 找到#09 的元素 关联到 myc09 变量上
  // 变量名是随便写的, 最好有含义
  @ViewChild('09') myc09: Myc09Component;

  doSome() {
    console.log(this.myc09.name, this.myc09.age);
    this.myc09.age++;
  }
}

```

```html
<!-- 掌控子元素 -->
<!-- 给要掌控的子组件一个唯一的标识 -->
<!-- #相当于 id='09' -->
<app-myc09 #09></app-myc09>

<button (click)="doSome()">读取myc09的属性</button>
<button (click)="myc09.show()">调用myc09的方法</button>
```



```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc09',
  templateUrl: './myc09.component.html',
  styleUrls: ['./myc09.component.css'],
})
export class Myc09Component implements OnInit {
  name = '我是myc09';
  age = 1;

  show() {
    alert('我是myc09');
  }

  constructor() {}

  ngOnInit(): void {}
}

```

```html
<p>myc09 works!</p>

<p>年龄: {{ age }}</p>
```



## ionic

相当于是 vue 的 **mintUI**;   ionic就是一个组件库, 语法是基于 angular;

可以用来制作手机端软件

官方网站:

```
https://ionicframework.com/
```

脚手架的安装命令

```
npm install -g @ionic/cli

通过 ionic -v 可以看到当前安装的版本
```

![image-20200826174855682](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200826174855682.png)

![image-20200826174654914](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200826174654914.png)



### 生成项目包

项目包是生成在  命令行工具 执行的目录下

```
ionic start 项目名 项目类型

项目类型有3种:
blank : 空白项目
tabs : 带有 tabs 栏的项目
sidemenu: 带有侧边栏
```

此处执行

```
ionic start blankPro blank

所有询问 都回车!!!!
```

启动, 在项目根目录下执行

```
ionic s
```

浏览器F12 选手机模式 来查看

![image-20200826175635250](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200826175635250.png)



下载 **Typora** 可以导出任意版本的笔记





## 作业

这是本阶段最后要使用 vue 制作的网站

原网站地址: http://101.96.128.94:9999/mfresh/news.html

接口: http://101.96.128.94:9999/mfresh/data/news_select.php?pageNum=1

参数: pageNum 代表当前页数

![image-20200826175948740](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200826175948740.png)

# Angular04

## 作业

生成今日 Angular 项目包, 用来完成作业

```
$ ng new ngpro

$ ng s -o
```

```
生成组件, 项目根目录下执行
$ ng g c work
```

页面的内容都是网络请求获取的

> 在vue中 网络请求模块需要使用第三方的 axios
>
> 在angular中, 自带网络请求模块.  默认不加载, 需要手动加载模块.

```
主配置文件: app.module.ts
```



依赖注入机制

* 依赖

  ```
  面向对象的类的构造方法
  constructor(name:string){}
  
  规定: 实例化一个类时,  new 类(); 就会触发构造方法
  要求: 必须传递构造方法要求的参数
  ```

  

* 注入

  ```
  组件在实例化时, 则必须传入构造方法指定类型的参数
  
  这个操作是系统自动完成的!!!
  ```

  

```typescript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent implements OnInit {
  // 把一些固定的内容书写成属性, 便于后期维护
  url = 'http://101.96.128.94:9999/mfresh/data/news_select.php?pageNum=';

  // 声明成员属性
  // * 只有成员属性才能在 html 中使用
  // * :类型  html中使用属性时 才会有代码提示!
  res: Res;

  // 依赖注入机制
  // 我们需要做的就是声明依赖即可,  系统会自动帮你完成注入操作
  // 语法糖写法:  权限词 变量名: 变量类型
  constructor(public http: HttpClient) {}

  // 生命周期的钩子函数:  hook
  // 不同的框架的组件周期都相似:  生 -> 初始化数据->更新数据->初始化UI->更新UI -> 死

  // 理解为: 挂载时 vue 的 mounted 即可
  ngOnInit(): void {
    this.getData(1);
  }

  // 利用函数进行 请求的复用!
  getData(pno) {
    let url = this.url + pno;
    this.http.get(url).subscribe((res: Res) => {
      console.log(res);
      // 把局部变量res 保存到 成员属性中: 这样才能在 html 中使用!
      this.res = res;
    });
  }

  // 自制方法: 4 转 [1,2,3,4]
  range(num: number) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  }
}

// TS语言的特性: 自定义对象类型; 静态类型分析特征 -- vscode提供丰富的代码提示
interface Data {
  content: string;
  nid: string;
  pubTime: string;
  title: string;
}

interface Res {
  data: Array<Data>;
  pageCount: number;
  pageNum: number;
  pageSize: number;
  totalRecord: number;
}

```



```vue
<p>work works!</p>
<!-- 
  通过网络请求获取的数据都存在一种报错的情况:   数据没有下载之前 使用时是undefined 就会报错
 -->
<div *ngIf="res">
  <div class="news">
    <div *ngFor="let item of res.data">
      <span>{{ item.title }}</span>
      <!-- pipe 管道 -->
      <span>{{ item.pubTime | date: "yyyy-MM-dd" }}</span>
    </div>
  </div>
  <!-- 页数是难点 -->
  <div class="pages">
    <button (click)="getData(res.pageNum - 1)" [disabled]="res.pageNum <= 1">
      上一页
    </button>
    <!-- 
      vue中: <button v-for="(item,index) in 4"> 
      vue支持循环数字: item就是 1 2 3 4
     -->
    <!-- angular只能循环遍历数组 -->
    <!-- 当前页 的按钮不可用 -->
    <button
      *ngFor="let item of range(res.pageCount)"
      (click)="getData(item)"
      [disabled]="item == res.pageNum"
    >
      {{ item }}
    </button>

    <!-- 
      pageNum: 当前页数
      pageCount: 总页数
     -->
    <button
      (click)="getData(res.pageNum + 1)"
      [disabled]="res.pageNum >= res.pageCount"
    >
      下一页
    </button>
  </div>
</div>

```



```css
.news {
  width: 700px;
  margin: 0 auto;
}

.news > div {
  border-bottom: 1px dashed gray;
  display: flex;
  justify-content: space-between;
  padding: 4px;
}

.pages {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

```



## ionic

ionic相对于 angular 的关系就相当于是 : `mintUI` 和 `Vue`的关系

* 即 就是一套手机端样式的组件库

官方: https://ionicframework.com/

```
脚手架的安装:
npm install -g @ionic/cli

项目的生成命令
* 空白项目
$ ionic start 项目名 blank

* 带有tabs栏的项目
$ ionic start 项目名 tabs
```

启动命令: 在项目下执行

```
ionic s
```



插件

![image-20200828104309649](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200828104309649.png)



app.component.html

```vue
<!-- 
  ionic提供的所有组件都是 ion- 开头的
 -->

<!-- 插件所有提示都是 i- 开头 -->
<ion-app>
  <!-- i-header -->
  <ion-header>
    <ion-toolbar>
      <ion-title>Header</ion-title>
    </ion-toolbar>
  </ion-header>
  <!-- i-content -->
  <ion-content>
    <h1>Hello World!</h1>
  </ion-content>
</ion-app>

```



![image-20200828105145443](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200828105145443.png)

## 组件

### 按钮组件

https://ionicframework.com/docs/api/button

![image-20200828114413456](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200828114413456.png)

```vue
<!-- 按钮组件 -->
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>按钮组件</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <!-- i-button: 把常用的属性都提示出来, 然后我们根据需要来保留哪些 -->
    <!-- size: 按钮大小 -->
    <ion-button size="large"> size:large 大 </ion-button>
    <ion-button size="default"> size:default 默认 </ion-button>
    <ion-button size="small"> size:small 小 </ion-button>

    <br />
    <!-- 指定风格: 默认组件的风格会自动与设备有关, 可以通过mode来指定风格 -->
    <ion-button mode="ios"> ios风格 </ion-button>
    <ion-button mode="md"> android风格 </ion-button>

    <br />
    <!-- 颜色: 官方指定了几种颜色风格 -->
    <!-- 具体在: src/app/theme/variables.css -->
    <ion-button color="primary">primary</ion-button>
    <ion-button color="secondary">secondary</ion-button>
    <ion-button color="danger">danger</ion-button>
    <ion-button color="success">success</ion-button>
    <ion-button color="warning">warning</ion-button>
    <ion-button color="dark">dark</ion-button>
    <ion-button color="light">light</ion-button>
    <ion-button color="medium">medium</ion-button>
    <ion-button color="tertiary">tertiary</ion-button>

    <br />
    <!-- 扩展方式 -->
    <!-- expand: 变块元素 -->
    <ion-button expand="block">block 圆角</ion-button>
    <ion-button expand="full">full 尖角</ion-button>

    <br />
    <!-- 填充方式 -->
    <ion-button fill="clear">clear</ion-button>
    <ion-button fill="outline">outline</ion-button>
    <ion-button fill="solid">solid</ion-button>

    <br />
    <!-- 不可用 -->
    <ion-button disabled>不可用</ion-button>
  </ion-content>
</ion-app>

```



### 徽章组件

https://ionicframework.com/docs/api/badge

![image-20200828115421047](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200828115421047.png)



```vue
<!-- 
  徽章组件:https://ionicframework.com/docs/api/badge
 -->

<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Header</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-badge color="primary">primary</ion-badge>
    <ion-badge color="secondary">secondary</ion-badge>
    <ion-badge color="tertiary">tertiary</ion-badge>
    <ion-badge color="success">success</ion-badge>
    <ion-badge color="warning">warning</ion-badge>
    <ion-badge color="danger">danger</ion-badge>
    <ion-badge color="light">light</ion-badge>
    <ion-badge color="medium">medium</ion-badge>
    <ion-badge color="dark">dark</ion-badge>
  </ion-content>
</ion-app>
```



### 小图标

angular官方提供了一些常用的小图标, 可以直接在项目中使用

https://ionicons.com/

![image-20200828141139312](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200828141139312.png)

```vue
<!-- 
  小图标: https://ionicons.com/
 -->
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>小图标</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <!-- 飞机 -->
    <ion-icon name="airplane"></ion-icon>
    <!-- 通过原生css来调整图片大小和样式 -->
    <ion-icon name="airplane" style="font-size: 30px; color: orange"></ion-icon>

    <!-- 提供的logo -->
    <ion-icon
      name="logo-android"
      style="font-size: 60px; color: dodgerblue"
    ></ion-icon>
  </ion-content>
</ion-app>

```



## 卡片组件

https://ionicframework.com/docs/api/card

![image-20200828142121307](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200828142121307.png)

```vue
<!-- 卡片组件 -->
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>卡片组件</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <!-- i-card-full -->
    <ion-card>
      <img
        src="https://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b17eca8065380cd7677ce4d7a144ad34598281ae.jpg"
        alt=""
      />
      <ion-card-header>
        <ion-card-subtitle>第七班再次重聚...</ion-card-subtitle>
        <ion-card-title>火影忍者第七班</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        十多年前一只恐怖的尾兽“九尾妖狐”袭击了木叶隐村，当时的第四代火影拼尽全力，以自己的生命为代价将“九尾妖狐”封印在了刚出生的鸣人身.
      </ion-card-content>
    </ion-card>
  </ion-content>
</ion-app>
```



#### 美图浏览练习

```typescript
import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http: HttpClient
  ) {
    this.initializeApp();
  }

  initializeApp() {
    // 类似于 东东讲过的 jQuery:  $(document).ready(function(){})
    // 当页面加载完毕后, 开始执行
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // 发送请求:
      this.getData();
    });
  }

  res: Res;

  getData() {
    let url = "https://api.apiopen.top/getImages";

    this.http.get(url).subscribe((res: Res) => {
      console.log(res);
      this.res = res;
    });
  }
}

// 自定义类型
interface Result {
  id: number;
  img: string;
  time: string;
}

interface Res {
  code: number;
  message: string;
  // Array<Result> 和 Result[] 是等价的
  result: Result[];
}

```



```vue
<!-- 卡片组件 -->
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>卡片组件</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content *ngIf="res">
    <ion-button (click)="getData()" expand="block">刷新</ion-button>
    <!-- 卡片组件在保持宽度的同时, 会自适应高度 -->
    <ion-card *ngFor="let item of res.result">
      <img [src]="item.img" alt="" />
    </ion-card>
  </ion-content>
</ion-app>

```



### 栅格布局

![image-20200828152443491](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200828152443491.png)

https://ionicframework.com/docs/api/grid

栅格布局类似于表格, 于 bootstrap中的栅格布局完全一样:

* 把一行分成最多12列



```vue
<!-- 栅格布局 -->
<!-- grid: https://ionicframework.com/docs/api/grid -->
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>栅格布局</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <!-- grid>row>col  相当于 表格>行>列 -->
    <ion-grid>
      <ion-row>
        <!-- size: 列占据的份数, 共12份 -->
        <ion-col size="6">1</ion-col>
        <ion-col size="6">2</ion-col>
        <!-- 超出12份, 则换到下一行进行显示 -->
        <ion-col size="6">3</ion-col>
      </ion-row>

      <ion-row>
        <!-- 不写size属性, 则平分 -->
        <ion-col>1</ion-col>
        <ion-col>2</ion-col>
        <ion-col>3</ion-col>
        <ion-col>4</ion-col>
      </ion-row>

      <ion-row>
        <ion-col size="6">1</ion-col>
        <ion-col>2</ion-col>
        <ion-col>3</ion-col>
      </ion-row>

      <!-- 图片分两列存放 -->
      <ion-row>
        <ion-col size="6" *ngFor="let item of res.result">
          <ion-card>
            <img [src]="item.img" alt="" />
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</ion-app>

```





```css
ion-col {
  border: 1px solid purple;
  // padding: 0;
}

ion-card {
  padding: 0;
  margin: 0;
}

```



### 滚动展示组件

https://ionicframework.com/docs/api/slides

ionic提供的轮播图组件 本质上是第三方 swiper:

https://www.swiper.com.cn/api/index.html



```html
<!-- 滚动展示: 轮播图 -->
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>轮播图</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <!-- i-slides -->
    <!-- options: 用于书写个性化配置的属性 -->
    <!-- 属性参考: https://www.swiper.com.cn/api/ -->
    <!-- 
      autoplay: 自动滚动
      delay: 播放间隔
      disableOnInteraction: 用户操作之后, 是否关闭自动滚动

      loop: 循环滚动
     -->
    <ion-slides
      *ngIf="res"
      pager
      [options]="{
        autoplay: { delay: 1000, disableOnInteraction: false },
        loop: true
      }"
    >
      <ion-slide *ngFor="let item of res.result">
        <ion-card>
          <!-- ion-img: 自带懒加载效果; 查看的时候才会加载 -->
          <!-- <ion-img [src]="item.img"></ion-img> -->

          <!-- img 不带懒加载, 一次性都加载完毕; 体验好一些 -->
          <img [src]="item.img" alt="" />
        </ion-card>
      </ion-slide>
    </ion-slides>
  </ion-content>
</ion-app>

```



### 输入框组件

https://ionicframework.com/docs/api/input

![image-20200828161243874](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200828161243874.png)



```vue
<!-- 
  输入框: 
  https://ionicframework.com/docs/api/input
 -->

<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>输入框组件</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <!-- 收集输入框内容: 采用双向数据绑定 ng-model   -->
    <ion-input type="text" placeholder="请输入姓名"></ion-input>
    <ion-input type="password" placeholder="请输入密码"></ion-input>

    <!-- 搜索栏组件 -->
    <ion-searchbar placeholder="Filter Pizza"></ion-searchbar>
  </ion-content>
</ion-app>

```



### item组件

在实际项目中使用最多

https://ionicframework.com/docs/api/item

![image-20200828164855616](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200828164855616.png)

```vue
<!-- 
  item: 一条一条的
  https://ionicframework.com/docs/api/item
 -->
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>item</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-item>
      <ion-label>唐三-达内郑州科创中心</ion-label>
    </ion-item>

    <!-- button : 点击效果 -->
    <!-- detail : 右箭头, 详情 -->
    <ion-item button detail>
      <ion-label>有点击效果</ion-label>
    </ion-item>

    <!-- i-item-avatar -->
    <ion-item>
      <!-- ion-avatar: 头像组件: 自动把内容变圆形 -->
      <!-- 属性slot: 插槽;  每一条的左右分别有两个孔,  左侧start 右侧end -->
      <ion-avatar slot="end">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598613061381&di=1709b35c8296864ec5e09a174cb270f2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201410%2F09%2F20141009224754_AswrQ.jpeg"
        />
      </ion-avatar>
      <ion-label>唐三的女朋友</ion-label>
    </ion-item>

    <ion-item>
      <ion-avatar slot="start">
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3741733804,1966033566&fm=26&gp=0.jpg"
        />
      </ion-avatar>
      <ion-label>
        <h3>龙东强</h3>
        <p>亲爱的西西, 今晚我没空!</p>
      </ion-label>
      <ion-badge color="danger" slot="end">999+</ion-badge>
    </ion-item>

    <!-- 输入框通常配合item使用 -->
    <ion-item>
      <ion-label>用户名</ion-label>
      <ion-input></ion-input>
    </ion-item>
    <ion-item>
      <ion-label>邮箱</ion-label>
      <ion-input></ion-input>
    </ion-item>

    <!-- 浮动效果的输入框 i-form-input -->
    <ion-item>
      <ion-label position="floating">E-Mail</ion-label>
      <ion-input type="text"></ion-input>
    </ion-item>

    <!-- 分组效果: i-item-group -->
    <ion-item-group>
      <ion-item-divider>
        <ion-label>A</ion-label>
      </ion-item-divider>

      <ion-item>
        <ion-label>阿呆</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>阿兵</ion-label>
      </ion-item>

      <ion-item-divider>
        <ion-label>X</ion-label>
      </ion-item-divider>

      <ion-item>
        <ion-label>西西</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>西瓜</ion-label>
      </ion-item>
    </ion-item-group>

    <!-- 滑动效果: i-item-sliding -->
    <ion-list>
      <ion-item-sliding>
        <ion-item>
          <ion-label>唐三的快乐生活</ion-label>
        </ion-item>
        <ion-item-options side="start">
          <ion-item-option color="warning">收藏</ion-item-option>
          <ion-item-option color="primary">分享</ion-item-option>
        </ion-item-options>

        <ion-item-options side="end">
          <ion-item-option color="danger">删除</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </ion-list>
  </ion-content>
</ion-app>

```



### 网易新闻练习

接口地址: 

```
https://api.apiopen.top/getWangYiNews
```

![image-20200828175107449](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200828175107449.png)

```typescript
import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http: HttpClient
  ) {
    this.initializeApp();
  }

  initializeApp() {
    // 类似于 东东讲过的 jQuery:  $(document).ready(function(){})
    // 当页面加载完毕后, 开始执行
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // 发送请求:
      this.getData();
    });
  }

  res: Res;

  getData() {
    let url = "https://api.apiopen.top/getWangYiNews";

    this.http.get(url).subscribe((res: Res) => {
      console.log(res);
      this.res = res;
    });
  }
}

// 自定义类型
interface Result {
  image: string;
  passtime: string;
  path: string;
  title: string;
}

interface Res {
  code: number;
  message: string;
  result: Result[];
}

```





```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>网易新闻</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <!-- 两列, 多列布局都用 栅格 -->
    <ion-grid *ngIf="res">
      <ion-row>
        <ion-col size="6" *ngFor="let item of res.result">
          <ion-card class="cell">
            <img [src]="item.image" alt="" />
            <ion-card-header>
              <ion-card-title>{{ item.title }}</ion-card-title>
              <ion-card-subtitle>{{ item.passtime }}</ion-card-subtitle>
            </ion-card-header>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</ion-app>

```



```css
ion-col {
  // border: 1px solid purple;
  // padding: 0;
}

ion-card {
  padding: 0;
  margin: 0;
}

.cell img {
  width: 100%;
}

.cell > ion-card-header {
  padding: 4px;
}

.cell ion-card-title {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

```



## 作业

```
https://api.apiopen.top/getJoke?type=gif
```

此接口返回的是GIF图

制作成横向滚动展示: 

```
使用 ion-slides 实现
每一项是卡片组件
```



![image-20200828175605846](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200828175605846.png)

# Angular05

准备今日项目包

> 继续用昨天的也可以

```
$ ionic start blankPro blank

启动命令
$ ionic s
```



## 作业

![image-20200829093003928](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200829093003928.png)

```typescript
import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http: HttpClient
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.getData();
    });
  }

  res: Res;

  // 获取网络数据
  getData() {
    let url = "https://api.apiopen.top/getJoke?type=gif";

    this.http.get(url).subscribe((res: Res) => {
      console.log(res);
      this.res = res;
    });
  }
}

// 自定义返回值的类型
interface Result {
  comment: string;
  down: string;
  forward: string;
  header: string;
  images: string;
  name: string;
  passtime: string;
  sid: string;
  text: string;
  thumbnail: string;
  top_comments_content: string;
  top_comments_header: string;
  top_comments_name: string;
  top_comments_uid: string;
  top_comments_voiceuri: string;
  type: string;
  uid: string;
  up: string;
  video: string;
}

interface Res {
  code: number;
  message: string;
  result: Result[];
}

```



```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>段子列表</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-slides *ngIf="res">
      <ion-slide *ngFor="let item of res.result">
        <ion-card>
          <img [src]="item.images" alt="" />
          <ion-card-header>
            <ion-card-title>{{ item.text }}</ion-card-title>
            <ion-card-subtitle>{{ item.passtime }}</ion-card-subtitle>
          </ion-card-header>
        </ion-card>
      </ion-slide>
    </ion-slides>
  </ion-content>
</ion-app>

```



## 列表组件

带有**下拉刷新** 和 **上拉加载**更多



```typescript
import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http: HttpClient
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.getData();
    });
  }

  res: Res;
  page = 1; //代表当前页

  // 获取网络数据
  getData() {
    let url = "https://api.apiopen.top/getWangYiNews?page=1";

    this.http.get(url).subscribe((res: Res) => {
      console.log(res);
      this.res = res;
    });
  }

  // loadData是 加载更多组件触发的: 默认会接受事件本身作为参数
  loadData(event) {
    // alert("加载更多..");
    let url = "https://api.apiopen.top/getWangYiNews?page=" + (this.page + 1);

    this.http.get(url).subscribe((res: Res) => {
      // 新的数据 要合并到 旧的数据中
      // concat:  arr1.concat(arr2)  合并 arr2的内容到 arr1中
      res.result = this.res.result.concat(res.result);

      this.res = res;
      this.page++;
      //告知 加载更多组件:  此次加载更多操作已完成, 可以监听下一次了
      event.target.complete();
    });
  }

  doRefresh(event) {
    // this.getData();
    // return;

    let url = "https://api.apiopen.top/getWangYiNews?page=1";

    this.http.get(url).subscribe((res: Res) => {
      console.log(res);
      this.res = res;

      // 停止下拉刷新状态
      event.target.complete();
      this.page = 1;
    });
  }
}

interface Result {
  image: string;
  passtime: string;
  path: string;
  title: string;
}

interface Res {
  code: number;
  message: string;
  result: Result[];
}

```



```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>网易新闻</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content *ngIf="res">
    <!-- i-refresher -->
    <ion-refresher (ionRefresh)="doRefresh($event)" slot="fixed">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>

    <!-- 列表最好存放在 ion-list 组件里 -->
    <ion-list>
      <ion-item *ngFor="let item of res.result">
        <img [src]="item.image" alt="" />

        <div>
          <span>{{ item.title }}</span>
          <span>{{ item.passtime }}</span>
        </div>
      </ion-item>
    </ion-list>

    <!-- 加载更多 -->
    <!-- (ionInfinite) 事件:  当加载更多的UI显示时 触发 -->
    <ion-infinite-scroll (ionInfinite)="loadData($event)">
      <ion-infinite-scroll-content
        loadingSpinner="dots"
        loadingText="加载中..."
      >
      </ion-infinite-scroll-content>
    </ion-infinite-scroll>
  </ion-content>
</ion-app>

```



### 练习

美图秀秀

```
https://api.apiopen.top/getImages
```

* 带有下拉刷新 和 加载更多操作
  * 此接口是随机获取图片, 所以不需要页数;



```typescript
import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http: HttpClient
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.getData();
    });
  }

  // 属性特色: 跨方法使用
  url = "https://api.apiopen.top/getImages";
  res: Res;

  // 获取网络数据
  getData() {
    this.http.get(this.url).subscribe((res: Res) => {
      console.log(res);
      this.res = res;
    });
  }

  doRefresh(event) {
    this.http.get(this.url).subscribe((res: Res) => {
      console.log(res);
      this.res = res;

      // 结束下拉刷新动画
      event.target.complete();
    });
  }

  loadData(event) {
    this.http.get(this.url).subscribe((res: Res) => {
      console.log(res);
      res.result = this.res.result.concat(res.result);

      this.res = res;

      // 结束下拉刷新动画
      event.target.complete();
    });
  }
}

interface Result {
  id: number;
  img: string;
  time: string;
}

interface Res {
  code: number;
  message: string;
  result: Result[];
}

```



```vue
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>美图秀秀</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content *ngIf="res">
    <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>

    <ion-grid>
      <ion-row>
        <ion-col size="6" *ngFor="let item of res.result">
          <img [src]="item.img" alt="" style="border-radius: 4px" />
        </ion-col>
      </ion-row>
    </ion-grid>

    <ion-infinite-scroll (ionInfinite)="loadData($event)">
      <ion-infinite-scroll-content
        loadingSpinner="lines"
        loadingText="不要急..."
      >
      </ion-infinite-scroll-content>
    </ion-infinite-scroll>
  </ion-content>
</ion-app>

```



## 路由系统

创建新的页

```
之前的命令: ng g c 组件名

此处: ionic g page 页面名
```

例如: 

```
ionic g page detail
```

![image-20200829113031387](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200829113031387.png)



**带有路由操作: 则涉及的文件太多, 详细查看具体代码, 在压缩包中**



返回按钮的制作

detail.page.html

```html
<ion-header>
  <ion-toolbar>
    <!-- 返回按钮的添加 -->
    <!-- 
      路由本身有一个栈: 会保存导航期间各个组件;
      如果刷新当前页面, 就会导致栈的内容全消失, 记录不见了;  
      返回按钮 没有可以返回的记录, 所以就不显示!
     -->
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>

    <ion-title>编号: {{id}}</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-card>
    <img [src]="img" alt="" />
  </ion-card>
</ion-content>

```



跳转操作 home.page.html

```html
<ion-header>
  <ion-toolbar>
    <ion-title>美图秀秀</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content *ngIf="res">
  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <ion-grid>
    <ion-row>
      <!-- 在vue中: <router-link to="/detail>" -->
      <!-- 在ng中, routerLink是属性: routerLink="/路径" -->
      <!-- 在ng中的传参写法: [routerLink]="['/path', 参数对象]" -->
      <ion-col size="4" *ngFor="let item of res.result">
        <img
          [src]="item.img"
          alt=""
          style="border-radius: 4px"
          [routerLink]="['/detail', {img:item.img, id:item.id}]"
        />
        <br />
        <ion-button expand="block" (click)="goDetail(item)"
          >访问{{item.id}}</ion-button
        >
      </ion-col>
    </ion-row>
  </ion-grid>

  <ion-infinite-scroll (ionInfinite)="loadData($event)">
    <ion-infinite-scroll-content loadingSpinner="lines" loadingText="不要急...">
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>

```



detail.page.ts

```typescript
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"],
})
export class DetailPage implements OnInit {
  id: number;
  img: string;

  // 专门接受路由传参的 服务
  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route);
    this.id = this.route.snapshot.params.id;
    this.img = this.route.snapshot.params.img;
  }
}

```



home.page.ts

```typescript
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  // NavController: 专门负责路由操作的服务
  constructor(private http: HttpClient, public router: NavController) {}

  // 访问详情
  goDetail(item) {
    // 编程式访问!
    // 向前跳
    this.router.navigateForward(["/detail", item]);
    // item = {id:xxx, img:xxx}
  }

  // 挂载时的周期
  ngOnInit(): void {
    this.getData();
  }

  // 属性特色: 跨方法使用
  url = "https://api.apiopen.top/getImages";
  res: Res;

  // 获取网络数据
  getData() {
    this.http.get(this.url).subscribe((res: Res) => {
      console.log(res);
      this.res = res;
    });
  }

  doRefresh(event) {
    this.http.get(this.url).subscribe((res: Res) => {
      console.log(res);
      this.res = res;

      // 结束下拉刷新动画
      event.target.complete();
    });
  }

  loadData(event) {
    this.http.get(this.url).subscribe((res: Res) => {
      console.log(res);
      res.result = this.res.result.concat(res.result);

      this.res = res;

      // 结束下拉刷新动画
      event.target.complete();
    });
  }
}

interface Result {
  id: number;
  img: string;
  time: string;
}

interface Res {
  code: number;
  message: string;
  result: Result[];
}

```





### 生成带有 tabs 栏的包

```
ionic start tabsPro tabs
```

下节课使用 带有 tabs 的项目包:

如果自己生成失败的同学:  已上传 `Day05/tabs_src.rar`

只需要把之前 `blankPro`中的 src文件夹 **删除或改名**,  把上方压缩包的内容解压到目录下即可!

即 换个 src 包就可以了



修改 tabs 栏

tabs/tabs.page.html

```html
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab1">
      <ion-icon name="home"></ion-icon>
      <ion-label>首页</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab2">
      <ion-icon name="star"></ion-icon>
      <ion-label>西西</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab3">
      <ion-icon name="cart"></ion-icon>
      <ion-label>购物车</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>

```



生成tab4

```
$ ionic g page tab4
```

尝试阅读之前的代码, 仿造把tab4添加到页面上

提示: 要修改 `tabs/tabs-routing.module.ts` 路由文件

```typescript
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "tab1",
        loadChildren: () =>
          import("../tab1/tab1.module").then((m) => m.Tab1PageModule),
      },
      {
        path: "tab2",
        loadChildren: () =>
          import("../tab2/tab2.module").then((m) => m.Tab2PageModule),
      },
      {
        path: "tab3",
        loadChildren: () =>
          import("../tab3/tab3.module").then((m) => m.Tab3PageModule),
      },
      {
        path: "tab4",
        loadChildren: () =>
          import("../tab4/tab4.module").then((m) => m.Tab4PageModule),
      },
      {
        path: "",
        redirectTo: "/tabs/tab1",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/tab1",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

```



tabs.page.html

```html
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab1">
      <ion-icon name="home"></ion-icon>
      <ion-label>首页</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab2">
      <ion-icon name="star"></ion-icon>
      <ion-label>西西</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab3">
      <ion-icon name="cart"></ion-icon>
      <ion-label>购物车</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab4">
      <ion-icon name="person"></ion-icon>
      <ion-label>我</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>

```



## 弹出框

```typescript
import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab4",
  templateUrl: "./tab4.page.html",
  styleUrls: ["./tab4.page.scss"],
})
export class Tab4Page implements OnInit {
  constructor(public alertC: AlertController) {}

  ngOnInit() {}

  showAlert() {
    // 基本结构:  弹出框服务.创建(弹出框的配置).然后(弹出框弹出)
    this.alertC
      .create({
        header: "警告",
        // subHeader: "唐三...",
        message: "唐三今晚要和小舞一起打钻石了~",
        buttons: [
          {
            text: "取消",
            handler: () => {
              alert("取消按钮被点击");
            },
          },
          {
            text: "确定",
            handler: () => {
              alert("确定按钮被点击");
            },
          },
        ],
      })
      .then((res) => res.present());

    // 类似于 axios.get(url).then(res=>{})   res就是请求的结果
    // alertC.create().then(res=>{})  res就是创建的弹出框
    // present() : 是显示的意思
  }
}

```


# Angular06

项目: 学子商城App



## 登录页面

<img src="https://web1910-1301510526.cos.ap-beijing.myqcloud.com/5-login.jpg" alt="5-login" style="zoom:50%;" />

制作流程:

* 生成带有 tabs 栏的项目包

  ```
  ionic start xueziApp tabs
  ```

* 生成登录页

  ```
  项目根目录下
  ionic g page tab4
  ```

* 配置路由

  * 删除 `app-routing.module.ts` 中自动生成的 tab4 引用
  * 在 `tabs-routing.module.ts` 添加 tab4 的路由注入

* 设置标签栏

  * `tabs.page.html`
  * 图标网站地址: `https://ionicons.com/`

* 登录页面的UI结构

  * 卡片Card 存放 输入框,  输入框在 item 中
  * 按钮是拉伸状态: `expand`
  * grid布局, 6个不同的按钮; 按钮的图标是 从 图标网站中查找的



tab4.page.html

```html
<ion-header>
  <ion-toolbar>
    <ion-title>登录</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-card>
    <ion-item>
      <ion-label>用户名:</ion-label>
      <ion-input></ion-input>
    </ion-item>
    <ion-item>
      <ion-label>密&nbsp;&nbsp;&nbsp;码:</ion-label>
      <ion-input type="password"></ion-input>
    </ion-item>
  </ion-card>

  <ion-button expand="block">登录</ion-button>

  <h5>其他方式登录:</h5>

  <ion-button color="danger">
    <ion-icon name="logo-android"></ion-icon>
  </ion-button>

  <ion-button color="warning">
    <ion-icon name="logo-apple"></ion-icon>
  </ion-button>

  <ion-button color="secondary">
    <ion-icon name="logo-github"></ion-icon>
  </ion-button>

  <ion-button color="dark">
    <ion-icon name="logo-twitter"></ion-icon>
  </ion-button>

  <ion-button color="light">
    <ion-icon name="logo-nodejs"></ion-icon>
  </ion-button>

  <ion-button color="primary">
    <ion-icon name="logo-tux"></ion-icon>
  </ion-button>
</ion-content>

```

tab4.page.css

```css
// https://ionicframework.com/docs/api/content#css-custom-properties

// 官方对 ion-content标签提供了自定义属性
// sass 写法
ion-content {
  --padding-top: 20px;
  --padding-start: 20px;
  --padding-end: 20px;
}
```



## 首页

<img src="https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200829171713254.png" alt="image-20200829171713254" style="zoom:50%;" />

制作流程

* 工具栏
  * 使用插槽  `slot`  图在左边, 搜索框在右边
  * logo地址: `http://101.96.128.94:9999/img/header/logo.png`
* 请求地址:`http://101.96.128.94:9999/data/product/index.php`
* 滚动栏使用: `ion-slides`
  * 图片是相对路径, 需要自行拼接域名前缀: `http://101.96.128.94:9999/`
  * 实现自动滚动效果 和 循环滚动效果
  * 用户手动滑动之后,  自动滚动依然可用
  * 带有页数点
* 主体内容
  * grid:  栅格局部, 一行两列
  * 配合卡片进行制作:  自定义内边距外边距之类的.
  * 图片要定义宽高
  * 文字要一行
* 最下方有4个图片,  使用grid布局



```typescript
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  res: Res;

  baseURL = "http://101.96.128.94:9999/";

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    let url = "http://101.96.128.94:9999/data/product/index.php";

    this.http.get(url).subscribe((res: Res) => {
      console.log(res);
      this.res = res;
    });
  }
}

interface CarouselItem {
  cid: string;
  href: string;
  img: string;
  title: string;
}

interface Item {
  details: string;
  href: string;
  pic: string;
  pid: string;
  price: string;
  title: string;
}

interface Res {
  carouselItems: CarouselItem[];
  newArrivalItems: Item[];
  recommendedItems: Item[];
  topSaleItems: Item[];
}

```





```vue
<ion-header>
  <ion-toolbar>
    <img
      src="http://101.96.128.94:9999/img/header/logo.png"
      alt=""
      slot="start"
    />
    <ion-searchbar placeholder="搜索" slot="end"></ion-searchbar>
  </ion-toolbar>
</ion-header>

<ion-content *ngIf="res">
  <!-- disableOnInteraction: 人为操作之后 是否停止自动滚动 -->
  <ion-slides
    pager
    [options]="{loop:true, autoplay:{disableOnInteraction: false}}"
  >
    <ion-slide *ngFor="let item of res.carouselItems">
      <img [src]="baseURL+ item.img" alt="" />
    </ion-slide>
  </ion-slides>

  <ion-item>
    <img
      src="/assets/computer.png"
      alt=""
      style="width: 30px; height: 30px"
      slot="start"
    />
    <ion-label>首页推荐/1F</ion-label>
  </ion-item>
  <ion-grid fixed>
    <ion-row>
      <ion-col size="6" *ngFor="let item of res.recommendedItems">
        <ion-card>
          <img [src]="baseURL+item.pic" alt="" />
          <ion-card-header>
            <ion-card-title>{{item.title}}</ion-card-title>
            <ion-card-subtitle>{{item.details}}</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <ion-text style="color: red">¥{{item.price}}</ion-text>
            <br />
            <ion-button>查看详情</ion-button>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>

  <!-- 最新上架 -->
  <ion-item>
    <img
      src="/assets/computer.png"
      alt=""
      style="width: 30px; height: 30px"
      slot="start"
    />
    <ion-label>最新上架/2F</ion-label>
  </ion-item>
  <ion-grid fixed>
    <ion-row>
      <ion-col size="6" *ngFor="let item of res.newArrivalItems">
        <ion-card>
          <img [src]="baseURL+item.pic" alt="" />
          <ion-card-header>
            <ion-card-title>{{item.title}}</ion-card-title>
            <ion-card-subtitle>{{item.details}}</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <ion-text style="color: red">¥{{item.price}}</ion-text>
            <br />
            <ion-button>查看详情</ion-button>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>

  <!-- 热销单品 -->
  <ion-item>
    <img
      src="/assets/computer.png"
      alt=""
      style="width: 30px; height: 30px"
      slot="start"
    />
    <ion-label>热销单品/3F</ion-label>
  </ion-item>
  <ion-grid fixed>
    <ion-row>
      <ion-col size="6" *ngFor="let item of res.topSaleItems">
        <ion-card>
          <img [src]="baseURL+item.pic" alt="" />
          <ion-card-header>
            <ion-card-title>{{item.title}}</ion-card-title>
            <ion-card-subtitle>{{item.details}}</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <ion-text style="color: red">¥{{item.price}}</ion-text>
            <br />
            <ion-button>查看详情</ion-button>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>

  <ion-grid>
    <ion-row>
      <ion-col size="3" style="text-align: center">
        <ion-icon
          name="logo-android"
          color="medium"
          style="font-size: 60px"
        ></ion-icon>
      </ion-col>
      <ion-col size="3" style="text-align: center">
        <ion-icon
          name="logo-html5"
          color="medium"
          style="font-size: 60px"
        ></ion-icon>
      </ion-col>
      <ion-col size="3" style="text-align: center">
        <ion-icon
          name="logo-angular"
          color="medium"
          style="font-size: 60px"
        ></ion-icon>
      </ion-col>
      <ion-col size="3" style="text-align: center">
        <ion-icon
          name="logo-apple"
          color="medium"
          style="font-size: 60px"
        ></ion-icon>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>

```

```css
ion-card {
  padding: 0;
  margin: 0;
}

ion-card-header,
ion-card-content {
  padding: 2px;
  margin: 2px;
}

ion-card > img {
  width: 100%;
  height: 150px;
}

ion-card-title {
  font-size: 19px;
}

ion-card-title,
ion-card-subtitle {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

```



## 商品列表

<img src="https://web1910-1301510526.cos.ap-beijing.myqcloud.com/2-product-list.jpg" alt="2-product-list"  />



制作提示

* 效果图上的差异:  没有**返回**按钮,  每一条上没有**查看详情**按钮

* 请求地址: 

  ```
  http://101.96.128.94:9999/data/product/list.php?pno=2
  
  参数 pno 代表当前页;  返回值中的 pageCount 是总页数
  ```

* 需要制作 下拉刷新 和 上拉加载更多 功能

* 图片是相对路径, 需要自行拼接域名前缀: `http://101.96.128.94:9999/`

* 如果当前页是最后一页, 则加载更多操作失效 并显示 没有更多数据 UI --- 详见效果图



```html
<ion-header>
  <ion-toolbar>
    <ion-searchbar placeholder="搜索商品"></ion-searchbar>
  </ion-toolbar>
</ion-header>

<ion-content *ngIf="res">
  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <ion-card>
    <ion-item *ngFor="let item of res.data" detail button>
      <ion-thumbnail>
        <img [src]="baseURL + item.pic" />
      </ion-thumbnail>

      <ion-label>
        <h3>{{item.title}}</h3>
        <p style="color: red">¥{{item.price}}</p>
      </ion-label>
    </ion-item>
  </ion-card>

  <ion-infinite-scroll
    (ionInfinite)="loadData($event)"
    [disabled]="res.pno == res.pageCount"
  >
    <ion-infinite-scroll-content
      loadingSpinner="bubbles"
      loadingText="加载中..."
    >
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>

  <ion-button expand="block" disabled *ngIf="res.pno == res.pageCount">
    没有更多数据了
  </ion-button>
</ion-content>

```



```typescript
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  res: Res;

  // 考虑到: 下拉刷新 加载更多 首次  3个位置都要发请求, 所以地址复用!
  url = "http://101.96.128.94:9999/data/product/list.php?pno=";
  baseURL = "http://101.96.128.94:9999/";

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.url + 1).subscribe((res: Res) => {
      console.log(res);

      this.res = res;
    });
  }

  loadData(event) {
    let url = this.url + (this.res.pno + 1);
    this.http.get(url).subscribe((res: Res) => {
      console.log(res);
      res.data = this.res.data.concat(res.data);
      this.res = res;

      // 加载更多操作完毕, 可以监听下一次
      event.target.complete();
    });
  }

  doRefresh(event) {
    this.http.get(this.url + 1).subscribe((res: Res) => {
      console.log(res);
      this.res = res;

      //结束下拉刷新状态
      event.target.complete();
    });
  }
}

interface Data {
  is_onsale: string;
  lid: string;
  pic: string;
  price: string;
  sold_count: string;
  title: string;
}

interface Res {
  data: Data[];
  pageCount: number;
  pageSize: number;
  pno: number;
  recordCount: number;
}

```



## 详情页

![3-product-detail](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/3-product-detail.jpg)

制作流程:

* 与效果图不同:  **下方不用显示tabs 栏, 默认就不显示**

* 生成详情页: `ionic g page detail`

  * 会自动添加详情页到主路由中: `app-routing.module.ts`
* 使用`[routerLink]="['/路径', 参数]"`  方式进行跳转操作,  参数是对象类型

* 详情页中使用固定的服务来接收读取参数: **ActivatedRoute**
* 请求地址: `http://101.96.128.94:9999/data/product/details.php?lid=商品id`
* 返回值中的 details 是页面使用的数据
* **难点:** 页面最下方是返回值中的 html 代码,   此html中的图片是相对路径, 必须用正则替换方式, 添加域名前缀才可以: `http://101.96.128.94:9999/`



```typescript
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"],
})
export class DetailPage implements OnInit {
  res: Res;
  baseURL = "http://101.96.128.94:9999/";

  constructor(public route: ActivatedRoute, public http: HttpClient) {}

  ngOnInit() {
    let lid = this.route.snapshot.params.lid;
    let url = "http://101.96.128.94:9999/data/product/details.php?lid=" + lid;

    this.http.get(url).subscribe((res: Res) => {
      console.log(res);

      this.res = res;
    });
  }

  // 把html代码中的相对路径改为绝对路径
  transHTML(html: string) {
    // src="img"
    // 改为 :
    // src="http://101.96.128.94:9999/img"
    return html.replace(/src="img/g, 'src="http://101.96.128.94:9999/img');
    // g: 全局搜索,  从 html中搜出所有符合的字符串 替换成参数2
  }
}

interface Pic {
  laptop_id: string;
  lg: string;
  md: string;
  pid: string;
  sm: string;
}

interface Detail {
  category: string;
  cpu: string;
  details: string;
  disk: string;
  family_id: string;
  is_onsale: string;
  lid: string;
  lname: string;
  memory: string;
  os: string;
  picList: Pic[];
  price: string;
  promise: string;
  resolution: string;
  shelf_time: string;
  sold_count: string;
  spec: string;
  subtitle: string;
  title: string;
  video_card: string;
  video_memory: string;
}

interface Res {
  details: Detail;
  family: any;
}

```





```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
    <ion-title>商品详情</ion-title>
    <ion-button slot="end" fill="clear">
      <ion-icon name="cart"></ion-icon>
    </ion-button>
  </ion-toolbar>
</ion-header>

<ion-content *ngIf="res">
  <ion-item>
    <ion-label>产品型号: {{res.details.lname}}</ion-label>
  </ion-item>

  <ion-slides
    pager
    [options]="{loop:true, autoplay:{disableOnInteraction:false}}"
  >
    <ion-slide *ngFor="let item of res.details.picList">
      <img [src]="baseURL + item.lg" alt="" />
    </ion-slide>
  </ion-slides>

  <ion-card>
    <ion-card-header>
      <ion-card-title>{{res.details.title}}</ion-card-title>
      <ion-card-subtitle>{{res.details.subtitle}}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <ion-item>
        <ion-label color="danger">¥{{res.details.price}}</ion-label>
        <ion-button color="danger" slot="end">
          <ion-icon name="cart"></ion-icon>
          <ion-text>添加到购物车</ion-text>
        </ion-button>
      </ion-item>

      <ion-item>
        <ion-label>CPU: {{res.details.cpu}}</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>内存: {{res.details.memory}}</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>硬盘: {{res.details.disk}}</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>系统: {{res.details.os}}</ion-label>
      </ion-item>
      <ion-item>
        <ion-text>承诺: {{res.details.promise}}</ion-text>
      </ion-item>
      <ion-item>
        <ion-label>显卡: {{res.details.video_card}}</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>显存: {{res.details.video_memory}}</ion-label>
      </ion-item>
      <ion-item>
        <ion-label
          >上市时间: {{res.details.shelf_time|date:'yyyy-MM-dd'}}</ion-label
        >
      </ion-item>
      <ion-text [innerHTML]="transHTML(res.details.details)"></ion-text>
    </ion-card-content>
  </ion-card>
</ion-content>

<!-- 
details: "<div class="content_tpl"> <div class="formwork">   <div class="formwork_img"><br></div><div class="formwork_img">    <img alt="" class="" src="img/product/detail/57b15612N81dc489d.jpg">   </div>  </div>  <div class="formwork">   <div class="formwork_img">    <img alt="" class="" src="//img20.360buyimg.com/vc/jfs/t2683/60/4222930118/169462/233c7678/57b15616N1e285f09.jpg">   </div>  </div>  <div class="formwork">   <div class="formwork_text">    技术规格请前往 www.apple.com/cn/macbook-air/specs.html 查看完整内容。</div></div></div>" -->

```



## 登录

![image-20200831143134939](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200831143134939.png)

接口:

```
http://101.96.128.94:9999/data/user/login.php

参数: uname  和 upwd
```

请求方式: POST



```typescript
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab4",
  templateUrl: "./tab4.page.html",
  styleUrls: ["./tab4.page.scss"],
})
export class Tab4Page implements OnInit {
  // 利用双向数据绑定获取输入框的值
  uname = "";
  upwd = "";

  constructor(public http: HttpClient, public alertC: AlertController) {}

  ngOnInit() {}

  doLogin() {
    console.log(this.uname, this.upwd);

    let url = "http://101.96.128.94:9999/data/user/login.php";
    let body = `uname=${this.uname}&upwd=${this.upwd}`;
    // 配置: POST请求需要一些配置 和 服务器的要求必须一致才可以
    // 登录接口 服务器要求: 请求头的内容类型 必须是 application/x-www-form-urlencoded
    let options = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    };

    // 正确的用户名和密码: doudou  123456

    // POST方式 要求  地址 和 参数 必须分开发
    this.http.post(url, body, options).subscribe((res: any) => {
      console.log(res);

      let { code, msg } = res;

      if (code == 200) {
        this.alertC
          .create({ message: "恭喜! 登录成功", buttons: ["确定"] })
          .then((res) => res.present());
      } else {
        this.alertC
          .create({ message: "很遗憾! 请重新尝试", buttons: ["确定"] })
          .then((res) => res.present());
      }
    });
  }
}

```

```html
<ion-header>
  <ion-toolbar>
    <ion-title>登录</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-card>
    <ion-item>
      <ion-label>用户名:</ion-label>
      <ion-input [(ngModel)]="uname"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label>密&nbsp;&nbsp;&nbsp;码:</ion-label>
      <ion-input [(ngModel)]="upwd" type="password"></ion-input>
    </ion-item>
  </ion-card>

  <ion-button (click)="doLogin()" expand="block">登录</ion-button>

  <h5>其他方式登录:</h5>

  <ion-button color="danger">
    <ion-icon name="logo-android"></ion-icon>
  </ion-button>

  <ion-button color="warning">
    <ion-icon name="logo-apple"></ion-icon>
  </ion-button>

  <ion-button color="secondary">
    <ion-icon name="logo-github"></ion-icon>
  </ion-button>

  <ion-button color="dark">
    <ion-icon name="logo-twitter"></ion-icon>
  </ion-button>

  <ion-button color="light">
    <ion-icon name="logo-nodejs"></ion-icon>
  </ion-button>

  <ion-button color="primary">
    <ion-icon name="logo-tux"></ion-icon>
  </ion-button>
</ion-content>

```



## 购物车

<img src="https://web1910-1301510526.cos.ap-beijing.myqcloud.com/4-cart.jpg" alt="4-cart" style="zoom:50%;" />

接口地址

```
http://101.96.128.94:9999/mfresh/data/cart_detail_select.php?uid=459
```

把请求下来的数据展现在页面上即可



```typescript
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  res: Res;

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    let url =
      "http://101.96.128.94:9999/mfresh/data/cart_detail_select.php?uid=459";
    this.http.get(url).subscribe((res: Res) => {
      console.log(res);

      this.res = res;
    });
  }
}

interface Product {
  count: string;
  did: string;
  pic: string;
  pid: string;
  price: string;
  title1: string;
}

interface Res {
  products: Product[];
  uid: string;
}

```





```html
<ion-header>
  <ion-toolbar>
    <ion-title>我的购物车</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content *ngIf="res">
  <ion-card>
    <ion-item *ngFor="let item of res.products">
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-label>{{item.title1}}</ion-label>
          </ion-col>
          <ion-col size="3">
            <ion-text color="danger">¥{{item.price}}</ion-text>
          </ion-col>
          <ion-col size="1">
            <ion-icon name="remove-circle-outline" color="secondary"></ion-icon>
          </ion-col>
          <ion-col size="1">{{item.count}}</ion-col>
          <ion-col size="1">
            <ion-icon name="add-circle-outline" color="secondary"></ion-icon>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-item>
  </ion-card>

  <!-- lines="none" 代表下划线=无 -->
  <ion-item lines="none">
    <ion-button color="success" size="small" slot="end">去结算</ion-button>
  </ion-item>
</ion-content>

```



## 总结

本阶段学习的 Angular + ionic

时长: 6天

学习的过程:   **入门**->熟练->精通

目的: 让大家在日后的工作中, 一旦遇到 Angular + ionic 的需求, 可以更快的入手.

上线问题:  ionic制作的是手机端App, 手机端则涉及到打包问题:   

* 打包成apk 安装到Android手机上
* 打包成ios的安装包, 发布到苹果商店



打包方式共有两种:

* 简单
  * 只需要把代码上传到 ionic 的官方网站,  ionic就会自动帮助你打包完毕, 把安装包发送回来
  * 登录: `https://ionicframework.com/login?source=framework-home`
  * 按照官方要求: 上传代码包 并 选择创建服务即可:   **300元/月**
* 复杂
  * 需要下载接近 `2G` 的环境包, 各种配置安装 在自己电脑上搭建 编译环境(**大概率会失败**)
    * `https://www.cnblogs.com/unofficial/p/4837190.html`
  * 此流程 在 React 阶段会使用1天的时间 来搭建编译环境!!





提前下载编译环境需要的软件,  将会在 **周四** 使用

```
链接: https://pan.baidu.com/s/1fBHOXYLAHaeSDUw5dpVURg 提取码: iz4f
```



































