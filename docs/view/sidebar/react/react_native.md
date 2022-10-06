
# React05

提前运行 RN 项目

* 编译环境可用的同学
  1. 先打开cmd, 执行 `adb devices`
  2. 打开模拟器: 再次执行`adb devices`
  3. 打开项目包, 根目录下执行: `npm run android` 
* 编译环境不可用的同学
  * 使用ip方式:  每日重启电脑 都有可能导致ip变化,  需要重新设置
    1. 打开cmd, 查看ip地址: `ipconfig`
    2. 确定ip地址, 浏览器输入: `ip:8081`
    3. 启动项目服务器, 在项目下运行:`npm start`
    4. 打开模拟器, 打开项目: 设置ip和端口



## HelloWorld

```jsx
// rnc
import React, {Component} from 'react';
// 这是组价库: 提供了一套手机端使用的 组件:  其名字 与小程序大致相同!
import {Text, View} from 'react-native';
// View: 一个块元素, 自带 弹性盒子, 内容竖向排列, 横向拉伸充满
// Text: 普通文本,相当于span

export default class App extends Component {
  render() {
    return (
      <View>
        {/* 所有大小都没有单位: 因为手机端只有一个单位 dp:物理像素; 所以单位省略了 */}
        <Text style={{fontSize: 30, color: 'red', marginTop: 40}}>
          Hello World!
        </Text>
      </View>
    );
  }
}
```



## 样式

![image-20200905095038404](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200905095038404.png)

```jsx
// rncs
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
/**
 * rn中没有 css选择器 的概念: 所以没有外部样式写法, 也没有className
 *
 * 提供了内部样式写法
 */

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={ss.danger}> textInComponent </Text>
        <Text style={ss.success}>成功</Text>
        {/* className="success cur" */}
        {/* 多个样式, 需要用数组来写 */}
        <Text style={[ss.success, ss.cur]}>成功</Text>
      </View>
    );
  }
}

// 默认的变量名: styles 比较长, 习惯改成ss
const ss = StyleSheet.create({
  // 此处是对象类型, 写起来与之前的外部选择器写法及其相似!
  danger: {
    color: 'red',
    fontSize: 30,
    // RN中的样式本质上是 手机端自带的UI写法, 只是名字尽量和CSS保持一致;
    // 很多CSS的样式在RN中是不存在的, 但同时 RN中也存在一些 CSS 没有的样式
    borderColor: 'rgb(11,89,200)',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  success: {
    color: 'green',
    fontSize: 30,
  },
  cur: {
    backgroundColor: 'gray',
  },
});

```



## 弹性盒子

手机端的内容布局 大量采用了弹性盒子进行适配

RN中的容器类型的组件, 默认都是弹性盒子

![image-20200905104012349](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200905104012349.png)

```jsx
// rncs
import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={ss.box}>
        <Text style={ss.one}> 1 </Text>
        <Text style={ss.two}> 2 </Text>
        <Text style={ss.three}> 3 </Text>
      </View>
    );
  }
}

const ss = StyleSheet.create({
  // View: 默认是弹性盒子模式, 内容竖向排列, 横向拉伸
  box: {
    height: 500,
    backgroundColor: 'pink',
    // css称为层叠样式: 一个元素的样子 是多个父级元素样式叠加出来的:  即样式的继承!
    // RN的样式称为 SS: 非层叠样式,  父元素的样式无法继承给子
    // 此处, 虽然box的字体大小40, 但是子元素都不受影响!
    fontSize: 40,

    // 排列方向:
    flexDirection: 'column', //默认值: 竖向
    flexDirection: 'column-reverse', //竖向反向
    flexDirection: 'row', //横向: 左->右
    flexDirection: 'row-reverse', //横向反向

    // 主轴: 排列方向称为主轴: justifyContent
    justifyContent: 'center', //居中
    justifyContent: 'space-between', //空白在中间
    justifyContent: 'space-around', //每个元素的两侧空白
    justifyContent: 'space-evenly', //均分空白
    justifyContent: 'flex-start', //布局方向的起始对齐
    justifyContent: 'flex-end', //结尾对齐

    // 交叉轴: alignItems    与主轴垂直方向
    alignItems: 'center', //居中
    alignItems: 'stretch', //拉伸: 子元素如果没有指定宽或高, 才有效
    alignItems: 'flex-start', //起始对齐
    alignItems: 'flex-end', //尾部对齐
  },
  one: {
    backgroundColor: 'red',
    // height: 100,
    fontSize: 40,
    // 在主轴方向上, 子元素占据的份数
    flex: 1,
    // 交叉轴的布局
    alignSelf: 'center',
  },
  two: {
    backgroundColor: 'rgb(0,255,0)',
    height: 100,
    fontSize: 40,
    flex: 2,
  },
  three: {
    backgroundColor: '#00F', //16进制颜色
    height: 100,
    fontSize: 40,
    flex: 3,
  },
});

```



## 相对像素: rpx

微信小程序提供的尺寸单位: rpx

当遇到手机端 屏幕大小适配的时候非常好用

![image-20200905104137612](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200905104137612.png)

我们的RN本身不具有 rpx 单位, 需要自制一个

![image-20200905105701338](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200905105701338.png)

```jsx
// rnc
import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';

// 自制相对像素: rpx
// 读取屏幕实际宽度
// Dimensions: 设备
// Dimensions.get('window'): 获取设备的窗口大小, 结果是对象类型 {width:xxx, height:xxx}
const {height, width} = Dimensions.get('window');

function rpx(px) {
  return (width / 750) * px; //宽度分750份, *份数 就是实际宽度
}
// rpx(350) 就相当于小程序的 350rpx

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={{backgroundColor: 'red', height: 200, width: rpx(375)}}>
          textInComponent
        </Text>
      </View>
    );
  }
}

```



## 常用组件

### 文本组件

https://reactnative.cn/docs/text

```jsx
// rnc
import React, {Component} from 'react';
import {Text, View} from 'react-native';

// 文本组件
export default class App extends Component {
  render() {
    return (
      <View>
        {/* HTML的事件: onClick */}
        {/* RN的点击事件: onPress */}
        <Text
          style={{fontSize: 30}}
          numberOfLines={2}
          onPress={() => alert('点击事件')}
          onLongPress={() => {
            alert('长按事件');
          }}>
          extInComponenttextInComponenttextInComponenttextInComponenttextextInComponenttextInComponenttInComponent
          textInComponent
        </Text>
      </View>
    );
  }
}

```



## 图片组件

https://reactnative.cn/docs/image



```jsx
// rnc
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
// 图片组件
// 分两种图片: 本地图片 和 网络图片
// 本地图片:
// 网络图片: 必须指定宽高

export default class App extends Component {
  girl =
    'https://tse2-mm.cn.bing.net/th/id/OIP.bvh8zIr8U_ZXfOTERrieswHaFk?w=244&h=183&c=7&o=5&pid=1.7';

  render() {
    return (
      <View>
        {/* html中: <img src="" /> */}
        {/* rn中: <Image source="" /> */}
        {/* 网络图片必须用对象类型加载: 固定属性名uri */}
        {/* 网络图片必须给大小 */}
        <Image source={{uri: this.girl}} style={{width: 200, height: 300}} />

        {/* 本地图片: 需要在左侧栏自己创建 assets 文件夹 */}
        {/* 特点: 必须用 require 引入; 本身具备大小 */}
        {/* blurRadius: 模糊效果 */}
        <Image source={require('./assets/OIP.jpg')} blurRadius={1} />
        {/* 有的服务器可能卡住, 则到服务器上按 r */}
      </View>
    );
  }
}

```



### 背景图

https://reactnative.cn/docs/imagebackground

![image-20200905115716879](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200905115716879.png)

```jsx
// rnc
// 背景图
import React, {Component} from 'react';
import {Text, View, ImageBackground, StatusBar} from 'react-native';

export default class App extends Component {
  render() {
    return (
      // 背景图 必须指定宽高
      <ImageBackground
        source={require('./assets/OIP.jpg')}
        style={{width: '100%', height: '100%'}}
        blurRadius={2}>
        {/* 状态栏, 电池条 */}
        {/* translucent: 穿透效果, 背景图会穿透全屏 */}
        <StatusBar backgroundColor="rgba(0,0,0,0)" translucent />

        <Text style={{fontSize: 40}}> Lisa </Text>
      </ImageBackground>
    );
  }
}

```



## 网络请求

* vue:  **axios**

* angular:  **服务方式 HttpClient**

* React: axios

  * ReactNative:  框架本身带有 **fetch** 方式

    ```
    https://reactnative.cn/docs/network
    ```

![image-20200905144647163](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200905144647163.png)

```jsx
// 网络请求
// rnc
import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';

// width: 屏幕宽度
const {width, height} = Dimensions.get('window');

function rpx(px) {
  return (width / 750) * px;
}

export default class App extends Component {
  state = {data: null};

  componentDidMount() {
    /**
     * vue:axios.get(url).then(res=>{}).catch(err=>{})
     *
     * ng: this.http.get(url).subscribe(res=>{})
     *
     * rn: fetch(url).then(res=>res.json()).then(res=>{})
     */
    let url = 'https://api.apiopen.top/getImages';
    fetch(url)
      .then((res) => {
        // 后台提供了开发者调试工具, 可以打开浏览器来查看打印的信息, 更加方便
        // 做法: 在后台cmd 中按 d
        // console.log(res.json());
        // res.json(): 可以得到返回值的 Promise
        return res.json();
      })
      .then((res) => {
        console.log(res);

        this.setState({data: res.result});
      });
  }

  render() {
    if (!this.state.data) return <View></View>;

    return (
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            backgroundColor: 'white',
          }}>
          <StatusBar />

          {this.state.data.map((item, index) => {
            return (
              <Image
                key={index}
                source={{uri: item.img}}
                style={{
                  width: rpx(340),
                  height: rpx(400),
                  marginTop: rpx(25),
                  borderRadius: rpx(6),
                }}
              />
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

```



### 滚动栏

```jsx
// 滚动视图

//rnc
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class App extends Component {
  state = {result: null};

  componentDidMount() {
    let url = 'https://api.apiopen.top/getImages';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        this.setState({result: res.result});
      });
  }

  render() {
    if (!this.state.result) return <View></View>;

    return (
      // horizontal: 横向滚动
      // pagingEnabled: 按页滚动
      <ScrollView pagingEnabled horizontal>
        {/* 默认保持保持之前的状态栏效果 */}
        <StatusBar />
        {this.state.result.map((item, index) => {
          return (
            <Image
              key={index}
              source={{uri: item.img}}
              // 25 是状态栏的高度
              style={{width: width, height: height - 25}}
            />
          );
        })}
      </ScrollView>
    );
  }
}

```



#### 网易新闻练习:

接口地址: `https://api.apiopen.top/getWangYiNews`

![image-20200905165326319](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200905165326319.png)

```jsx
// rnc
import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';

// 布局稍微复杂些, 就要考虑使用相对像素
const {width, height} = Dimensions.get('window');
function rpx(px) {
  return (width / 750) * px;
}

export default class App extends Component {
  /**
   * 步骤:
   * 1. 发请求
   * 2. 保存请求结果到 state
   * 3. 把数据转化成UI
   */
  state = {result: null};

  componentDidMount() {
    let url = 'https://api.apiopen.top/getWangYiNews';

    // 语法糖:  ()=>{return xxx}  简化:  ()=>xxx
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        this.setState({result: res.result});
      });
  }

  render() {
    if (!this.state.result) return <View></View>;

    return (
      <ScrollView>
        <StatusBar />
        {this.state.result.map((item, index) => {
          // 如果某个值 在多个位置复用: 修改时需要一起改, 用变量最合适
          // 变量 和 常量 选哪个?  选 const 常量--运行期间不修改
          const scale = 1.6;

          return (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                padding: rpx(10),
                borderBottomColor: 'gray',
                borderBottomWidth: rpx(2),
                backgroundColor: 'white',
              }}>
              <Image
                source={{uri: item.image}}
                style={{
                  width: rpx(140 * scale),
                  height: rpx(88 * scale),
                  borderRadius: rpx(7),
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginLeft: rpx(10),
                  justifyContent: 'space-around',
                }}>
                <Text style={{fontSize: rpx(33)}}>{item.title}</Text>
                <Text style={{fontSize: rpx(28), color: 'gray'}}>
                  {item.passtime}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

```



#### 网易新闻练习2

接口地址: `https://api.apiopen.top/getWangYiNews`

重新创建一个App.js

![image-20200905174949847](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200905174949847.png)

```jsx
// rnc
import React, { Component } from "react";
import { Text, View, ScrollView, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
function rpx(px) {
  return (width / 750) * px;
}

export default class App extends Component {
  state = { result: null };

  componentDidMount() {
    let url = "https://api.apiopen.top/getWangYiNews";

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // setState(): 做两件事 -- 更新数据 + 更新UI
        this.setState({ result: res.result });
      });
  }

  render() {
    if (!this.state.result) return <View></View>;

    return (
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {this.state.result.map((item, index) => {
            const scale = 2.5;

            return (
              <View
                key={index}
                style={{
                  width: rpx(140 * scale),
                  backgroundColor: "white",
                  marginTop: rpx(17),
                  borderRadius: rpx(8),
                  overflow: "hidden",
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: rpx(140 * scale), height: rpx(88 * scale) }}
                />
                <View
                  style={{
                    padding: rpx(10),
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <Text style={{ fontSize: rpx(27) }}>{item.title}</Text>
                  <Text style={{ fontSize: rpx(24), color: "gray" }}>
                    {item.passtime}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

```















### 开启Debug服务器



![image-20200905141704843](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200905141704843.png)

在弹出的浏览器上按 F12  可以在后台看到打印结果

但是 DEBUG 服务不稳定,  有的时候会造成项目无法运行!

![image-20200905141809726](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200905141809726.png)















**严重报错 导致app崩溃, 需要通过后来看报错**

![image-20200905093011101](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200905093011101.png)



### 作业

段子列表

接口: `https://api.apiopen.top/getJoke`

<img src="https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200905175540407.png" alt="image-20200905175540407" style="zoom: 67%;" />




# React06

RN项目的生成方式:

* 脚手架的安装

  ```
  npm i -g react-native
  ```

* 生成命令

  ```
  react-native init 项目名
  ```

* 编译操作

  RN创建的项目是真正的手机端原生App.  而不是那些混编项目, H5应用;

  所有只能运行到 手机上

  * 需要编译项目包 为 手机上可以安装的apk,  然后安装到 手机/模拟器

  * 编译环境要求: `java8, python2.7, node12.10, 安卓SDK`

  * 编译命令

    ```
    npm run android
    ```



## 组件

### 按钮组件

https://reactnative.cn/docs/button

```jsx
// rnc
import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class App extends Component {
  render() {
    return (
      // View默认是弹性盒子: 交叉轴方向 子元素拉伸
      <View style={{ alignItems: "center" }}>
        {/* title: 此属性用于设置按钮的标题 */}
        {/* 按钮组件没有 style 属性: 不能自定义样式! */}
        <Button title="我是按钮" onPress={() => alert("点击")} />
      </View>
    );
  }
}

```



### 自定义按钮

https://reactnative.cn/docs/touchableopacity

![image-20200907094704158](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200907094704158.png)

```jsx
// 自定义按钮
// rnc
import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

export default class App extends Component {
  jiu =
    "https://tse1-mm.cn.bing.net/th/id/OIP.Gmv2BqD5ZzYvNItv8cplZwHaFj?pid=Api&rs=1";

  render() {
    return (
      <View>
        {/* 自定义按钮 */}
        {/* TouchableOpacity: 本身就是个容器, 具有点击时 变化透明度的效果 */}
        {/* activeOpacity: 点击时的透明度 */}
        <TouchableOpacity
          style={{ alignItems: "center", width: 80 }}
          activeOpacity={0.7}
          onPress={() => alert("酒店介绍")}
        >
          <Image
            source={{ uri: this.jiu }}
            style={{ width: 80, height: 80, borderRadius: 40 }}
          />
          <Text>酒店介绍</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

```



### 开关和活动提示

https://reactnative.cn/docs/activityindicator

https://reactnative.cn/docs/switch

![image-20200907103244242](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200907103244242.png)

```jsx
// rnc
// 开关 和 活动提示
import React, { Component } from "react";
import { Text, View, Switch, ActivityIndicator } from "react-native";

export default class App extends Component {
  state = { isOpen: true };

  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        {/* 开关组件: 典型的受控组件, 受到代码控制 -- 双向数据绑定 */}
        <Switch value={this.state.isOpen} onValueChange={this._openChange} />
        {/* 简化写法 */}
        <Switch
          value={this.state.isOpen}
          // {isOpen: isOpen} -> { isOpen }
          onValueChange={(isOpen) => this.setState({ isOpen })}
          thumbColor="red"
        />
        {/* 默认无颜色, 需要自己定制颜色 */}
        {/* color: 颜色 */}
        {/* size: 大小, 可以写 small large  数值 */}
        <ActivityIndicator color="green" size="large" />
        {/* animating: 控制旋转与否 */}
        <ActivityIndicator
          color="purple"
          size={50}
          animating={this.state.isOpen}
        />
      </View>
    );
  }

  // onValueChange: 触发时, 就会传递 新的值作为参数
  _openChange = (val) => {
    console.log(val);
    this.setState({ isOpen: val });
  };
}

```



### 输入框组件

https://reactnative.cn/docs/textinput

![image-20200907105258953](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200907105258953.png)

```jsx
// rnc
// 输入框
import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";

export default class App extends Component {
  // 双向数据绑定
  state = { uname: "" };

  render() {
    return (
      <View>
        {/* 默认没有边框 */}
        <TextInput />
        <TextInput
          style={{ borderWidth: 1, color: "black", fontSize: 20 }}
          placeholder="请输入用户名"
          secureTextEntry={true}
          value={this.state.uname}
          onChangeText={(uname) => this.setState({ uname })}
        />
        <Text>{this.state.uname}</Text>
        <TextInput value={this.state.uname} onChangeText={this._unameChanged} />
      </View>
    );
  }

  // 参数是 变化后的文本: 变量名是uname , 则 {uname: uname} 可以简化 {uname}
  _unameChanged = (uname) => {
    console.log(uname);
    this.setState({ uname: uname });
  };
}

```



练习: 

![img](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/u=2214946,2658831589&fm=26&gp=0.jpg)

![image-20200907145038246](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200907145038246.png)



```jsx
// rncs
import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

// rpx
// 真机上, 不同的手机对应window的定义不相同:  window=屏幕高度 - 导航栏高度
// 屏幕高度: window -> screen
// screen: 不同手机上, 都永远是屏幕的整个高度
const { width, height } = Dimensions.get("screen");

function rpx(px) {
  return (width / 750) * px;
}

export default class App extends Component {
  bg =
    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1191352848,724810887&fm=26&gp=0.jpg";

  render() {
    return (
      <ImageBackground
        source={{ uri: this.bg }}
        style={{ width, height }}
        blurRadius={4}
      >
        <StatusBar backgroundColor="rgba(0,0,0,0)" translucent />
        <Text style={ss.logo}>TEDU</Text>
        <View style={ss.box}>
          <View style={ss.inputArea}>
            <Image
              source={require("./assets/user.png")}
              style={{ width: rpx(70), height: rpx(70) }}
            />
            <TextInput placeholder="用户名" style={ss.inputArea_input} />
          </View>

          <View
            style={[
              ss.inputArea,
              { marginTop: rpx(10), marginBottom: rpx(100) },
            ]}
          >
            <Image
              source={require("./assets/pwd.png")}
              style={{ width: rpx(70), height: rpx(70) }}
            />
            <TextInput
              placeholder="密码"
              style={ss.inputArea_input}
              secureTextEntry
            />
          </View>

          {/* 登录按钮 */}
          <TouchableOpacity style={ss.login} activeOpacity={0.7}>
            <Text style={{ fontSize: rpx(50), color: "white" }}>登录</Text>
          </TouchableOpacity>

          {/* 注册按钮: 白色背景, 蓝色文字, 蓝色边框 */}
          <TouchableOpacity style={ss.register} activeOpacity={0.7}>
            <Text style={{ color: "blue", fontSize: rpx(50) }}>注册</Text>
          </TouchableOpacity>
        </View>

        <View style={ss.footer}>
          <TouchableOpacity activeOpacity={0.7}>
            <Image
              source={require("./assets/qq.png")}
              style={{ width: rpx(100), height: rpx(100) }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={{ marginHorizontal: rpx(50) }}
          >
            <Image source={require("./assets/wx.png")} style={ss.wx} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <Image source={require("./assets/wb.png")} style={ss.wx} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const ss = StyleSheet.create({
  inputArea_input: {
    fontSize: rpx(35),
    borderBottomColor: "blue",
    borderBottomWidth: rpx(2),
    color: "black",
    flex: 1,
    marginLeft: rpx(30),
  },
  inputArea: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: rpx(5),
    padding: rpx(4),
    alignItems: "center",
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: rpx(100),
  },
  wx: {
    width: rpx(100),
    height: rpx(100),
    backgroundColor: "white",
    borderRadius: rpx(50),
  },
  register: {
    borderWidth: rpx(3),
    borderColor: "blue",
    alignItems: "center",
    borderRadius: rpx(60),
    paddingVertical: rpx(8),
    backgroundColor: "white",
    marginTop: rpx(10),
  },
  login: {
    backgroundColor: "blue",
    alignItems: "center",
    borderRadius: rpx(60),
    //vertical: 竖向, 代表上下
    paddingVertical: rpx(8),
  },
  logo: {
    color: "purple",
    fontSize: rpx(100),
    alignSelf: "center",
    marginTop: rpx(140),
  },
  box: {
    /* horizontal: 横向, 左右 */
    /* vertical: 竖向, 上下 */
    // borderWidth: 1,
    marginHorizontal: rpx(80),
    marginTop: rpx(80),
  },
});

```



练习: 

![img](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/timg)

![image-20200907173016632](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200907173016632.png)

```jsx
// rncs

import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

const { width, height } = Dimensions.get("screen");

function rpx(px) {
  return (width / 750) * px;
}

export default class App extends Component {
  state = { hidePwd: true };

  render() {
    return (
      <ImageBackground
        source={require("./assets/134.jpg")}
        style={{ width, height }}
        blurRadius={7}
      >
        <StatusBar backgroundColor="rgba(0,0,0,0)" translucent />
        <View style={ss.nav}>
          <TouchableOpacity>
            <Image
              source={require("./assets/back.png")}
              style={{ width: rpx(40), height: rpx(40), marginLeft: rpx(10) }}
            />
          </TouchableOpacity>
          <Text style={ss.nav_title}>注册</Text>
        </View>

        <Image source={require("./assets/hua.jpg")} style={ss.logo} />

        <View style={{ marginHorizontal: rpx(120), marginTop: rpx(100) }}>
          <View style={ss.inputArea}>
            <Text style={{ fontSize: rpx(35) }}>手机号</Text>
            <TextInput style={ss.inputArea_input}></TextInput>
          </View>

          <View style={ss.codeArea}>
            <View style={[ss.inputArea, { flex: 1 }]}>
              <Text style={{ fontSize: rpx(35) }}>验证码</Text>
              <TextInput style={ss.inputArea_input}></TextInput>
            </View>
            <TouchableOpacity>
              <Text style={ss.getCode}>获取验证码</Text>
            </TouchableOpacity>
          </View>

          <View style={ss.inputArea}>
            <Text style={{ fontSize: rpx(35) }}>
              密&nbsp;&nbsp;&nbsp;&nbsp;码
            </Text>
            <TextInput
              style={ss.inputArea_input}
              secureTextEntry={this.state.hidePwd}
            ></TextInput>
            <TouchableOpacity
              onPress={() => this.setState({ hidePwd: !this.state.hidePwd })}
              activeOpacity={0.7}
            >
              {/* 条件 ? require(xx) : require(xxx) */}
              {/* 错误写法: require(条件? 图片名: 图片名);  此写法 webpack 不检测, 不会加载图片
                  vue中也有这个特点
              */}
              <Image
                source={
                  this.state.hidePwd
                    ? require("./assets/hide.png")
                    : require("./assets/show.png")
                }
                style={{ width: rpx(40), height: rpx(40) }}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity activeOpacity={0.7} style={ss.register}>
            <Text style={{ fontSize: rpx(34), color: "white" }}>注册</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ fontSize: rpx(25) }}>已注册过:</Text>
            <TouchableOpacity>
              <Text style={{ color: "blue", fontSize: rpx(25) }}>登录</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={ss.footer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{ height: 1, backgroundColor: "white", flex: 1 }}
            ></View>
            <Text style={ss.footer_title}>第三方登录</Text>
            <View
              style={{ height: 1, backgroundColor: "white", flex: 1 }}
            ></View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: rpx(50),
            }}
          >
            <TouchableOpacity>
              <Image
                source={require("./assets/qq.png")}
                style={{ width: rpx(60), height: rpx(60) }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("./assets/qq.png")}
                style={{ width: rpx(60), height: rpx(60) }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("./assets/qq.png")}
                style={{ width: rpx(60), height: rpx(60) }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("./assets/qq.png")}
                style={{ width: rpx(60), height: rpx(60) }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("./assets/qq.png")}
                style={{ width: rpx(60), height: rpx(60) }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("./assets/qq.png")}
                style={{ width: rpx(60), height: rpx(60) }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const ss = StyleSheet.create({
  nav: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: rpx(30),
  },
  nav_title: {
    color: "white",
    fontSize: rpx(50),
    marginLeft: rpx(270),
  },
  logo: {
    width: rpx(140),
    height: rpx(140),
    borderRadius: rpx(70),
    alignSelf: "center",
    marginTop: rpx(100),
  },
  inputArea: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: rpx(2),
  },
  inputArea_input: {
    fontSize: rpx(35),
    flex: 1,
    color: "black",
    marginLeft: rpx(20),
  },
  getCode: {
    fontSize: rpx(35),
    marginLeft: rpx(10),
    color: "blue",
  },
  codeArea: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  register: {
    backgroundColor: "#F4A460",
    alignItems: "center",
    borderRadius: rpx(60),
    paddingVertical: rpx(10),
    marginTop: rpx(60),
    marginBottom: rpx(50),
  },
  footer: {
    // borderWidth: 1,
    // position: "absolute",
    // left: rpx(120),
    // right: rpx(120),
    // bottom: rpx(100),
    marginTop: "auto",
    marginBottom: rpx(100),
    marginHorizontal: rpx(120),
  },
  footer_title: {
    color: "white",
    fontSize: rpx(24),
    // margin-left:rpx(10), margin-right:rpx(10)
    marginHorizontal: rpx(10),
  },
});

```





## 作业

<img src="https://web1910-1301510526.cos.ap-beijing.myqcloud.com/0171f459380e0da8012193a353590c.jpg@1280w_1l_2o_100sh.jpg" alt="img" style="zoom: 33%;" />

# React07

生成项目包:

```
react-native init 包名
```



## 作业

![image-20200908094303334](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200908094303334.png)

```jsx
// rncs
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

//rpx
const {width, height} = Dimensions.get('screen');

function rpx(px) {
  return (width / 750) * px;
}

export default class App extends Component {
  render() {
    return (
      <ImageBackground
        source={require('./assets/bg.jpg')}
        style={{width, height}}
        blurRadius={3}>
        <StatusBar backgroundColor="rgba(0,0,0,0)" translucent />
        <TouchableOpacity>
          <Image source={require('./assets/back.png')} style={ss.backBtn} />
        </TouchableOpacity>

        <Text style={ss.logo}>全民K歌</Text>

        <TextInput placeholder="邮箱/用户名" style={ss.email} />
        <TextInput
          placeholder="密码"
          style={[ss.email, {marginTop: rpx(40)}]}
          secureTextEntry
        />
        <TouchableOpacity style={ss.loginBtn} activeOpacity={0.7}>
          <Text style={{fontSize: rpx(30)}}>登录</Text>
        </TouchableOpacity>

        <View style={ss.forgetPwd}>
          <TouchableOpacity>
            <Text style={{color: 'white', fontSize: rpx(25)}}>忘记密码?</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{color: 'white', fontSize: rpx(25)}}>手机注册</Text>
          </TouchableOpacity>
        </View>

        <View style={ss.footer}>
          <Text style={ss.footer_title}>第三方账号直接登录</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('./assets/qq.png')} style={ss.qq} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('./assets/wb.png')} style={ss.qq} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
              <Image source={require('./assets/wx.png')} style={ss.qq} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const ss = StyleSheet.create({
  backBtn: {
    width: rpx(50),
    height: rpx(50),
    marginLeft: rpx(30),
    marginTop: rpx(30),
  },
  logo: {
    alignSelf: 'center',
    fontSize: rpx(70),
    marginTop: rpx(100),
    color: 'white',
  },
  email: {
    backgroundColor: 'white',
    borderRadius: rpx(10),
    marginHorizontal: rpx(100),
    fontSize: rpx(35),
    color: 'black',
    marginTop: rpx(120),
    paddingHorizontal: rpx(20),
  },
  loginBtn: {
    marginHorizontal: rpx(100),
    backgroundColor: 'yellow',
    borderRadius: rpx(10),
    alignItems: 'center',
    paddingVertical: rpx(18),
    marginTop: rpx(40),
  },
  forgetPwd: {
    marginHorizontal: rpx(100),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: rpx(20),
    marginTop: rpx(60),
  },
  qq: {
    width: rpx(100),
    height: rpx(100),
    backgroundColor: 'white',
    borderRadius: rpx(50),
  },
  footer_title: {
    fontSize: rpx(30),
    color: 'white',
    alignSelf: 'center',
    marginBottom: rpx(50),
  },
  footer: {
    marginBottom: rpx(100),
    marginTop: 'auto',
    marginHorizontal: rpx(150),
  },
});

```



### 组件: FlatList

高性能的列表组件

![image-20200908104241062](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200908104241062.png)

```jsx
// rnc

import React, {Component} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';

export default class App extends Component {
  names = ['东东', '亮亮', '然然', '小新', '老吴', '强子', '西西'];

  // FlatList组件: 有种小助手的感觉
  // 我们只要告诉此组件 有哪些数据要显示, 每条数据什么样.  就会自动帮我们展示出来

  render() {
    /**
     * data: 用于告知 FlatList 有哪些数据需要他显示, 必须是数组类型!
     * renderItem: 数组中的每一条数据 的样子
     * keyExtractor: 每一项数据的唯一标识, 必须是字符串类型
     * ListHeaderComponent: 表头
     * ItemSeparatorComponent: 分割
     * ListFooterComponent: 表尾
     */
    return (
      <FlatList
        data={this.names}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        ListHeaderComponent={this._ListHeaderComponent}
        ItemSeparatorComponent={this._ItemSeparatorComponent}
        ListFooterComponent={this._ListFooterComponent}
      />
    );
  }

  _ListFooterComponent = () => {
    return (
      <View style={{alignItems: 'center', paddingVertical: 10}}>
        <ActivityIndicator color="green" size={40} />
        <Text style={{fontSize: 25}}>加载中,请稍后...</Text>
      </View>
    );
  };

  _ItemSeparatorComponent = () => {
    return <View style={{height: 1, backgroundColor: 'red'}}></View>;
  };

  _ListHeaderComponent = () => {
    return (
      <Text
        style={{
          fontSize: 30,
          backgroundColor: 'green',
          color: 'white',
          padding: 10,
        }}>
        WEB2004
      </Text>
    );
  };

  // 不同的方法, 有不同的参数: 只能靠自己背
  _keyExtractor = (item, index) => {
    // console.log(item, index);
    // 返回值要求: 字符串类型
    return index + ''; // 任意类型+字符串 => 字符串类型
  };

  // 数组中的每个元素都会触发此方法, 来询问应该长什么样子
  /**
   * 简化写法: 把解包过程 直接写到参数里
   * show(data) { let {index,item}=data }
   * show({index,item}) {}
   */
  _renderItem = ({index, item}) => {
    // data = {index:序号, item: 值}
    // console.log(data);
    // let {index, item} = data;
    return (
      <View style={{backgroundColor: 'pink', padding: 10}}>
        <Text style={{fontSize: 120}}>{item}</Text>
      </View>
    );
  };
}

```



### 网易新闻

![image-20200908105856404](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200908105856404.png)

```jsx
// rnc
import React, {Component} from 'react';
import {Text, View, FlatList, Image, ActivityIndicator} from 'react-native';

export default class App extends Component {
  state = {result: null, refreshing: false};

  url = 'https://api.apiopen.top/getWangYiNews?page=';
  page = 1; //当前页

  componentDidMount() {
    fetch(this.url + 1)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        this.setState({result: res.result});
      });
  }

  render() {
    if (!this.state.result) return <View></View>;
    /**
     * data: 需要显示的数据数组
     * renderItem: 每条数据的UI
     * keyExtractor: 每条的唯一标识
     * ItemSeparatorComponent: 栏目分割组件
     * onEndReached: 当列表接近底部时
     * onEndReachedThreshold: 触发触底操作的阈值; 默认是0.5 代表50%; 列表中剩余不可见的内容长度 是显示区域长度的 50% 时, 触发 onEndReached 方法
     * refreshing: 控制下拉刷新动画
     */
    return (
      <FlatList
        data={this.state.result}
        keyExtractor={(item, index) => index + ''}
        renderItem={this._renderItem}
        ItemSeparatorComponent={() => (
          <View style={{height: 2, backgroundColor: 'gray'}}></View>
        )}
        ListFooterComponent={this._ListFooterComponent}
        onEndReached={this._onEndReached}
        onEndReachedThreshold={0.1}
        onRefresh={this._onRefresh}
        refreshing={this.state.refreshing}
      />
    );
  }

  _onRefresh = () => {
    // alert('下拉刷新');
    //启动刷新动画
    this.setState({refreshing: true});

    fetch(this.url + 1)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // 结束下拉刷新动画
        this.setState({result: res.result, refreshing: false});
        this.page = 1;
      });
  };

  _onEndReached = () => {
    // alert('触底');
    let url = this.url + (this.page + 1);

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // 拼接第二页的数据 到之前的数据中
        res.result = this.state.result.concat(res.result);

        this.setState({result: res.result});

        this.page++;
      });
  };

  _ListFooterComponent = () => {
    return (
      <View style={{alignItems: 'center', paddingVertical: 10}}>
        <ActivityIndicator color="blue" size="large" />
        <Text style={{fontSize: 20}}>加载中...</Text>
      </View>
    );
  };

  // 解包写法: 直接写到参数中
  _renderItem = ({item}) => {
    return (
      <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
        <Image
          source={{uri: item.image}}
          style={{width: 144 * 1.2, height: 88 * 1.2, margin: 4}}
        />
        <View style={{flex: 1, justifyContent: 'space-around'}}>
          <Text style={{fontSize: 22}}>{item.title}</Text>
          <Text style={{fontSize: 18, color: 'gray'}}>{item.passtime}</Text>
        </View>
      </View>
    );
  };
}

```



### 美图秀秀

```
https://api.apiopen.top/getImages?count=10&page=7
```

![image-20200908144253530](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200908144253530.png)

```jsx

// rnc

import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  ActivityIndicator,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

function rpx(px) {
  return (width / 750) * px;
}

export default class App extends Component {
  url = 'https://api.apiopen.top/getImages?count=10&page=';
  page = 7; //当前页

  state = {result: null, refreshing: false};

  componentDidMount() {
    let url = this.url + this.page;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({result: res.result});
      });
  }

  render() {
    if (!this.state.result) return <View></View>;

    /**
     * data: 要显示的数据数组
     * renderItem: 每一条数据的UI
     * keyExtractor: 每一条UI的唯一标识
     * numColumns: 列数
     * onEndReachedThreshold: 剩余内容 高度是 显示区域 10% 的时候触发
     */
    return (
      <FlatList
        data={this.state.result}
        keyExtractor={(item) => item.id + ''}
        renderItem={this._renderItem}
        numColumns={2}
        onEndReachedThreshold={0.1}
        onEndReached={this._onEndReached}
        ListFooterComponent={this._ListFooterComponent}
        onRefresh={this._onRefresh}
        refreshing={this.state.refreshing}
      />
    );
  }

  _onRefresh = () => {
    this.setState({refreshing: true});

    let url = this.url + 7;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({result: res.result, refreshing: false});
        this.page = 7;
      });
  };

  _ListFooterComponent = () => {
    return (
      <View style={{alignItems: 'center', paddingVertical: rpx(15)}}>
        <ActivityIndicator color="orange" size="large" />
        <Text style={{fontSize: rpx(30)}}>请稍后...</Text>
      </View>
    );
  };

  _onEndReached = () => {
    let url = this.url + (this.page + 1);

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // 拼接
        res.result = this.state.result.concat(res.result);

        this.setState({result: res.result});
        this.page++;
      });
  };

  _renderItem = ({item}) => {
    return (
      <View
        style={{
          borderWidth: rpx(5),
          height: rpx(500),
          width: rpx(372),
          borderColor: 'white',
        }}>
        <Image
          source={{uri: item.img}}
          style={{width: '100%', height: '100%', borderRadius: rpx(10)}}
        />
      </View>
    );
  };
}

```



### FlatList的横向滚动

轮播图

```jsx
// rnc
import React, {Component} from 'react';
import {Text, View, Dimensions, FlatList, Image} from 'react-native';

const {width, height} = Dimensions.get('screen');
function rpx(px) {
  return (width / 750) * px;
}

export default class App extends Component {
  state = {result: null};

  curP = 0; //默认是序号0的页面

  // React提供一种固定写法: 可以把 组件 绑定到一个变量上:
  // 在ng中: <组件 #唯一标识 />     @ViewChild(唯一标识)  变量名;
  // React的方式:  制作一个变量, 交给组件: 组件就会把自己绑定到变量上
  flat = React.createRef();

  // createRef(): 相当于做了一个 项圈;狗绳;
  // 把 项圈 交给组件, 组件就会把自己带上项圈.

  componentDidMount() {
    let url = 'https://api.apiopen.top/getImages?count=10&page=7';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        this.setState({result: res.result});

        // 请求完毕后: 使用定时器让 FlatList 自动滚动

        // JS语言: 当使用this.xxx 时, 如果xxx没有定义过, 会自动声明; 不需要提前声明
        this.timer = setInterval(() => {
          // 让 FlatList 滚动
          console.log(this.flat);

          // current: 当前, 代表当前绑定的组件
          // FlatList: 具有一个方法 scrollToIndex, 滚动到指定序号
          let index = this.curP + 1;
          // 超出最大值, 则变为0
          if (index >= this.state.result.length) index = 0;

          this.flat.current.scrollToIndex({index});
        }, 2500);
        // debug模式不稳定,  会导致滚动过快;  关闭即可正常速度
      });
  }

  // 组件将要销毁时
  componentWillUnmount() {
    //关闭定时器
    clearInterval(this.timer);
  }

  render() {
    if (!this.state.result) return <View></View>;

    // pagingEnabled: 按页滚动
    // horizontal横向
    // ref: 专门用来关联变量的属性
    return (
      <FlatList
        ref={this.flat}
        data={this.state.result}
        keyExtractor={(item) => item.id + ''}
        renderItem={this._renderItem}
        pagingEnabled
        horizontal
        onScroll={this._onScroll}
      />
    );
  }

  // 事件: onScroll 滚动时触发
  _onScroll = (event) => {
    // event.persist(); //要看打印的值, 则必须写这行代码
    // console.log(event);

    let x = event.nativeEvent.contentOffset.x; //x轴偏移量
    let w = event.nativeEvent.layoutMeasurement.width; //图片宽度

    // 当前页 = 四舍五入取整(偏移量 / 每个宽度)
    this.curP = Math.round(x / w);

    console.log('当前页数序号:', this.curP);
  };

  _renderItem = ({item}) => {
    return (
      // 25是 电池条的高度， 固定25
      <Image source={{uri: item.img}} style={{width, height: height - 25}} />
    );
  };
}

```



## 路由系统

ReactNative本身具备路由系统, 但是比较简单;  大家习惯上使用第三方的路由模块

官网: `https://reactnavigation.org/`

> 需要安装额外的模块,  安装模块之后必须使用  `npm run android` 来编译才可以使用
>
> 所以: 无法自己编译的同学,  就直接使用 百度网盘 上提供的包和其apk 配对使用即可!



正常安装流程, 在项目下执行:

```
npm install @react-navigation/native
```

![image-20200908161249418](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200908161249418.png)

然后:

```
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

![image-20200908161413771](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200908161413771.png)



然后: `https://reactnavigation.org/docs/hello-react-navigation`

```
npm install @react-navigation/stack
```

![image-20200908161647313](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200908161647313.png)



把 App.js 替换成如下代码

```jsx
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```



替换App.js 之后:

* 正常编译的同学, 直接: `npm run android `即可
* 使用百度网盘:  安装网盘上的apk , 然后设置ip地址;  修改项目包中的**App.js**



![image-20200908162929489](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200908162929489.png)

ip方式同学, 直接使用下方的包:  带有 路由和网页模块

![image-20200908164018105](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200908164018105.png)



---

MainScreen.js

```jsx
// rnc
import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class MainScreen extends Component {
  // props
  // <Son name="东东" />  本质:  new Son({name: '东东'})
  // constructor(props) { this.props = props }

  render() {
    // 存放在路由组件中的 组件: 都会自动接收2个 路由参数: navigation 和 route
    // navigation: 相当于vue 的 router; 做路由操作
    // route : 相当于 vue 的route;  保存路由传参
    console.log('props:', this.props);

    return (
      <View>
        <Text style={{fontSize: 40}}> 主菜单 </Text>
        {/* push(xx);  跳转到 name="xx" 的组件 */}
        <Button
          title="跳转到Hello"
          onPress={() => this.props.navigation.push('Hello')}
        />

        {/* push(页面名, 参数对象) */}
        <Button
          title="跳转到新闻"
          onPress={() =>
            this.props.navigation.push('News', {
              title: '强子又要出去吃饭啦!',
              id: 100,
            })
          }
        />
      </View>
    );
  }
}

```



HelloScreen.js

```jsx
// rnc
import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class HelloScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 50}}> Hello World! </Text>
      </View>
    );
  }
}

```



App.js

```jsx
// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// 引入 HelloScreen 组件
import HelloScreen from './screens/HelloScreen';
import MainScreen from './screens/MainScreen';
import NewsScreen from './screens/NewsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* 同小程序: 第一个书写的组件是首页 */}
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Hello" component={HelloScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

```



练习:

* 制作一个 `NewsScreen.js` ,  页面上显示  `新闻` 两个字即可
* 到App.js 中 添加  新闻组件 到路由中
* 在主菜单页面, 添加新的按钮:  `跳转到新闻`  点击后可以跳转到新闻页



News.js

```jsx

//rnc
import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class NewsScreen extends Component {
  componentDidMount() {
    // 路由中的组件都会自动带有 route 参数:  保存了路由传参
    console.log(this.props.route);
    // 与vue的 this.$route 是一样的

    // 标题栏的题目 默认与 在App.js中的 name 一致: 但是可以自定义

    //setOptions: 用于设置个性化配置
    this.props.navigation.setOptions({title: '新闻详情'});
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 25}}>
          今日要闻: {this.props.route.params.title}
        </Text>
      </View>
    );
  }
}

```



## 网页组件

负责显示 远程网页 或 本地HTML代码

这是一款第三方组件, 需要安装并重新编译:

> 编译环境有问题 和 网速 和 电脑配置低 的同学 都可以使用百度网盘上的那个包

`https://github.com/react-native-community/react-native-webview`

安装命令:

```
npm i react-native-webview react-native-autoheight-webview
```

![image-20200908181150290](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200908181150290.png)



安装之后, 需要重新编译, 把这个模块打包到 apk 中

```
npm run android
```

```jsx
// rnc
import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

// 引入 webview 组件
import {WebView} from 'react-native-webview';
import MyWebView from 'react-native-autoheight-webview';
import {ScrollView} from 'react-native-gesture-handler';

export default class App extends Component {
  //本地html
  data = '<h1 style="font-size:150px">我是Lisa</h1>';

  render() {
    // 使用时, 与图片组件很相似
    // return <WebView source={{uri: 'http://www.bilibili.com'}} />;
    // return <WebView source={{html: this.data}} />;

    // 明天会详细说明差异
    return (
      <ScrollView>
        <Text>111111111111111</Text>
        {/* WebView如果不是根组件, 则没有高度 */}
        <WebView source={{uri: 'http://www.baidu.com'}} />
        {/* MyWebView: 如果不是根组件, 则高度与内容一致 */}
        {/* <MyWebView source={{uri: 'http://www.baidu.com'}} /> */}
        <Text>111111111111111</Text>
      </ScrollView>
    );
  }
}

```
# React08

商城项目:  此项目将会使用到  **路由** 和 **网页**

每阶段收尾:  都会以一个项目的形式 来测验学习成果,   过程以个人实现为主.



## 基础项目搭建

* 编译环境OK

  * 生成项目包: `react-native init xueziApp`

  * 安装路由模块 和 网页模块

    * 路由模块官网: `https://reactnavigation.org/docs/getting-started`

    ```
    $ npm install @react-navigation/native
    
    $ npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
    
    $ npm install @react-navigation/stack
    ```

  * 网页模块: 

      * `https://github.com/react-native-community/react-native-webview`
      * `https://github.com/iou90/react-native-autoheight-webview`

      ```
      $ npm i react-native-autoheight-webview react-native-webview
      ```

  * 编译:  先`adb devices` 检测模拟器

      > 项目需要替换  gradle 的下载地址为本地地址

      ```
      $ npm run android
      ```

      

* 编译环境不可用

  * 直接使用百度网盘上提供的  **带有 路由 和 网页 的包和apk 即可** , 用ip方式运行



把项目改造成 路由模式,  修改 App.js

```jsx
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

## App.js

```jsx
// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import ProductsScreen from './screens/ProductsScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

```



## 登录页面制作

创建文件夹` screens`

在文件夹下创建文件 :  `LoginScreen.js`

把 登录组件 注册到 App.js 中作为首页使用

图片资源在  项目资源的 assets 中

![1_LoginScreen](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/1_LoginScreen.jpg)

请求地址: http://101.96.128.94:9999/data/user/login.php

请求方式: POST

目前还没讲过POST请求,  **等讲 或 提前参考文档**

> 官方参考: https://reactnative.cn/docs/network

请求参数: 

> 账号: doudou	  密码:123456

| 参数名 | 参数含义 | 是否必填 |
| ------ | -------- | -------- |
| uname  | 用户名   | 是       |
| upwd   | 用户密码 | 是       |

![image-20200909104934943](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200909104934943.png)

```jsx
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Button,
  Image,
  Alert,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// 路由提供了一套 自身的组件,  这些组件具有一些额外的手势操作 会导致一些bug
// import { TextInput } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');

function rpx(px) {
  return (width / 750) * px;
}

export default class LoginScreen extends Component {
  // 收集输入框的内容: 双向绑定
  state = {uname: '', upwd: ''};

  componentDidMount() {
    this.props.navigation.setOptions({title: '管理员登录'});
  }

  doLogin = () => {
    console.log(this.state.uname, this.state.upwd);

    let {uname, upwd} = this.state;

    let url = 'http://101.96.128.94:9999/data/user/login.php';
    // POST请求: https://reactnative.cn/docs/network
    // 与GET的差异: fetch带有参数2
    // fetch(地址, 配置项).then().then()

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `uname=${uname}&upwd=${upwd}`,
    };

    // 正确的账号密码: doudou 123456
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        let {code, msg} = res;
        if (code == 200) {
          //登录成功: 跳转到 主页面:   MainScreen.js 自己制作 并添加路由
          this.props.navigation.push('Main');
        } else {
          //登录失败: 弹出提示 登录失败
          //提示组件的官方文档 https://reactnative.cn/docs/alert
          //尝试读官方文档, 实现弹出框的显示:
          Alert.alert('提示', '很遗憾, 登录失败, 请重新尝试');
        }
      });
  };

  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={{marginHorizontal: rpx(120), marginTop: rpx(120)}}>
          <Text style={ss.logo}>学子商城后台</Text>
          <TextInput
            style={ss.input}
            placeholder="请输入管理员用户名"
            value={this.state.uname}
            onChangeText={(uname) => this.setState({uname})}
          />
          <TextInput
            style={[ss.input, {marginTop: rpx(30)}]}
            placeholder="请输入管理员密码"
            secureTextEntry
            value={this.state.upwd}
            onChangeText={(upwd) => this.setState({upwd})}
          />
          <TouchableOpacity
            style={ss.loginBtn}
            activeOpacity={0.7}
            onPress={this.doLogin}>
            <Text style={{color: 'white', fontSize: rpx(33)}}>登录</Text>
          </TouchableOpacity>

          <View style={ss.footer}>
            <Image source={require('../assets/logo.png')} />
            <Text style={{fontSize: rpx(35), color: '#2196f3'}}>
              后台管理系统
            </Text>
          </View>

          <Text style={ss.copy}>&copy;2017版权所有, CODEBOY.COM</Text>
        </View>
      </View>
    );
  }
}

const ss = StyleSheet.create({
  input: {
    borderBottomWidth: rpx(2),
    fontSize: rpx(35),
    color: 'black',
  },
  logo: {
    fontSize: rpx(60),
    alignSelf: 'center',
    marginBottom: rpx(80),
    color: 'red',
  },
  loginBtn: {
    backgroundColor: '#2196f3',
    alignItems: 'center',
    paddingVertical: rpx(12),
    borderRadius: rpx(10),
    marginTop: rpx(40),
  },
  copy: {
    marginTop: rpx(120),
    fontSize: rpx(21),
    color: '#2196f3',
    alignSelf: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: rpx(80),
  },
});

```



## 主页面

登录成功后, 跳转到主页面.    主页面的内容为假数据,  无网络操作, 需要自己实现

* 导航栏右上角按钮:  可以查看 路由的官方文档 看是否能自己实现

<img src="https://web1910-1301510526.cos.ap-beijing.myqcloud.com/2_MainScreen.jpg" alt="2_MainScreen" style="zoom: 67%;" />

```jsx
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

function rpx(px) {
  return (width / 750) * px;
}

export default class MainScreen extends Component {
  // state: 放运行期间会变化的数据 且 数据变化 UI要响应
  data = [
    {
      title: '上架商品总数',
      num: '24,380',
      desc: '+128%较上月',
      numColor: 'red',
    },
    {
      title: '注册用户总数',
      num: '1,965',
      desc: '-50%较上月',
      numColor: 'orange',
    },
    {
      title: '上架商品总数',
      num: '24,380',
      desc: '+128%较上月',
      numColor: 'blue',
    },
    {
      title: '当日PC端PV量',
      num: '14,281',
      desc: '-50%较昨日',
      numColor: 'green',
    },
    {
      title: '移动端PV量',
      num: '29,315',
      desc: '-34%较昨日',
      numColor: 'purple',
    },
    {title: 'App总下载量', num: '7,422', desc: '+18%较上周', numColor: 'pink'},
    // 本地图片 必须明确写 require  否则 webpack 工具不自动编译
    {title: '商品管理', icon: require('../assets/menu_product.jpg')},
    {title: '用户管理', icon: require('../assets/menu_user.jpg')},
    {title: '订单管理', icon: require('../assets/menu_order.jpg')},
    {title: '首页管理', icon: require('../assets/menu_heart.jpg')},
  ];

  componentDidMount() {
    this.props.navigation.setOptions({
      title: '主菜单',
      headerRight: () => (
        <TouchableOpacity style={{marginRight: rpx(20)}} activeOpacity={0.7}>
          <Image
            source={require('../assets/user.png')}
            style={{width: rpx(60), height: rpx(60), borderRadius: rpx(30)}}
          />
        </TouchableOpacity>
      ),
    });
  }

  render() {
    return (
      <FlatList
        data={this.data}
        keyExtractor={(item, index) => index + ''}
        renderItem={this._renderItem}
        numColumns={2}
        style={{backgroundColor: 'white'}}
      />
    );
  }

  showDetail(index) {
    // index: 6商品管理 7用户管理 8订单管理 9首页管理
    if (index === 6) {
      //跳转到 产品列表
      alert('产品列表');
    }
  }

  _renderItem = ({item, index}) => {
    // 如果 序号>5 则是另一种UI
    if (index > 5) {
      return (
        <View
          style={{
            width: '50%',
            alignItems: 'center',
            paddingVertical: rpx(30),
          }}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            activeOpacity={0.7}
            onPress={() => this.showDetail(index)}>
            <Image source={item.icon} />
            <Text style={{fontSize: rpx(30)}}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View
        style={{
          width: '50%',
          alignItems: 'center',
          paddingVertical: rpx(20),
          borderBottomWidth: rpx(2),
          // borderRightWidth: rpx(10),
          borderRightWidth: index % 2 == 0 ? rpx(2) : 0,
        }}>
        <Text style={{fontSize: rpx(30)}}>{item.title}</Text>
        <Text style={{fontSize: rpx(35), color: item.numColor}}>
          {item.num}
        </Text>
        <Text style={{fontSize: rpx(25)}}>{item.desc}</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({});

```



## 商品列表

* `ProductsScreen.js`   注册到App.js 中并 通过 主菜单的  **商品管理** 进行跳转

* 请求地址:` http://101.96.128.94:9999/data/product/list.php?pno=1`

  请求方式: GET请求

  参数: pno 是页数

  - 图片是相对路径, 需要手动加前缀: `http://101.96.128.94:9999`

  带有下拉刷新 和 上拉加载更多操作:  返回值中的 pageCount 是总页数,  如果当前页是最后一页时, 则页面底部显示  **没有更多数据**.      否则 显示  **加载中, 请稍后...**

![image-20200909154101213](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/image-20200909154101213.png)



```jsx
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

function rpx(px) {
  return (width / 750) * px;
}

export default class ProductsScreen extends Component {
  url = 'http://101.96.128.94:9999/data/product/list.php?pno=';

  state = {res: null, refreshing: false};

  componentDidMount() {
    this.props.navigation.setOptions({title: '产品列表'});

    fetch(this.url + 1)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        this.setState({res});
      });
  }

  render() {
    if (!this.state.res) return <View></View>;

    return (
      <FlatList
        data={this.state.res.data}
        keyExtractor={(item) => item.lid}
        renderItem={this._renderItem}
        ItemSeparatorComponent={() => (
          <View style={{height: rpx(2), backgroundColor: 'gray'}}></View>
        )}
        ListFooterComponent={this._ListFooterComponent}
        onEndReachedThreshold={0.1}
        onEndReached={this._onEndReached}
        onRefresh={this._onRefresh}
        refreshing={this.state.refreshing}
      />
    );
  }

  _onRefresh = () => {
    this.setState({refreshing: true});

    fetch(this.url + 1)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        this.setState({res, refreshing: false});
      });
  };

  _onEndReached = () => {
    // 如果已经是最后一页了, 则加载更多操作 什么都不做
    if (this.state.res.pno >= this.state.res.pageCount) return;

    let url = this.url + (this.state.res.pno + 1);

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // 拼接
        res.data = this.state.res.data.concat(res.data);

        this.setState({res});
      });
  };

  _ListFooterComponent = () => {
    // 如果是最后一页则:
    if (this.state.res.pno >= this.state.res.pageCount) {
      return (
        <View style={{alignItems: 'center', paddingVertical: rpx(10)}}>
          <Text style={{fontSize: rpx(40)}}>我是有底线的</Text>
        </View>
      );
    }

    return (
      <View style={{alignItems: 'center', paddingVertical: rpx(10)}}>
        <ActivityIndicator color="green" size="large" />
        <Text style={{fontSize: rpx(30)}}>加载中, 请稍后...</Text>
      </View>
    );
  };

  showDetail(index) {
    //index: 点击栏目的序号
    // alert(index);
    let {lid} = this.state.res.data[index];
    // alert(lid);

    this.props.navigation.push('Detail', {lid});
  }

  _renderItem = ({item, index}) => {
    let uri = 'http://101.96.128.94:9999/' + item.pic;

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => this.showDetail(index)}
        style={{backgroundColor: 'white', flexDirection: 'row'}}>
        <Image source={{uri}} style={{width: rpx(200), height: rpx(200)}} />
        <View
          style={{flex: 1, height: rpx(200), justifyContent: 'space-around'}}>
          <Text style={{fontSize: rpx(30)}}>{item.title}</Text>
          <Text style={{color: 'red', fontSize: rpx(30)}}>¥{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({});

```



## 详情页

* 产品列表中: 点击某条数据, 要传递此数据的 lid 到详情页

* 详情页: `DetailScreen.js`,  注册到 App.js 中

  请求地址: `http://101.96.128.94:9999/data/product/details.php?lid=1`

  请求方式: GET请求

  请求参数: lid 是商品的唯一标识

  * 使用的数据是返回值中的 details
  * 滚动栏需要自动滚动

  - 图片地址需要拼接前缀:  `http://101.96.128.94:9999/`
  - 详情页 下方的内容是HTML, 来自于返回值的 details.details;  其中的图片是相对路径, 必须用正则替换方式 补充前缀路径;  **此操作在 angular 中做过一次**
    - 需要用 autoheight 那个组件才能显示出 带有高度的html

  

![5_ProductDetailScreen_2](https://web1910-1301510526.cos.ap-beijing.myqcloud.com/5_ProductDetailScreen_2.jpg)

```jsx
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';

// 引入第三方模块
import AutoHeightWebView from 'react-native-autoheight-webview';

const {width, height} = Dimensions.get('screen');

function rpx(px) {
  return (width / 750) * px;
}

export default class DetailScreen extends Component {
  state = {details: null};

  curP = 0;
  // 变量关联 FlatList
  banner = React.createRef();

  componentDidMount() {
    this.props.navigation.setOptions({title: '产品详情'});
    // route: 存放路由传参
    let {lid} = this.props.route.params;

    let url = 'http://101.96.128.94:9999/data/product/details.php?lid=' + lid;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        this.setState({details: res.details});

        // 定时滚动: debug模式会让滚动加快; 关闭即可
        this.timer = setInterval(() => {
          let index = this.curP + 1;

          if (index >= res.details.picList.length) index = 0;

          this.banner.current.scrollToIndex({index});
        }, 2500);
      });
  }

  // 销毁时: 释放
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    if (!this.state.details) return <View></View>;

    let {details} = this.state;
    // let details = this.state.details;

    return (
      <ScrollView
        style={{
          backgroundColor: 'white',
          padding: rpx(25),
        }}>
        <Text
          style={{
            fontSize: rpx(30),
            borderBottomWidth: rpx(2),
            paddingBottom: rpx(8),
          }}>
          产品型号: {details.lname}
        </Text>

        <FlatList
          ref={this.banner}
          data={details.picList}
          keyExtractor={(item) => item.pid}
          renderItem={this._renderItem}
          horizontal
          pagingEnabled
          onScroll={this._onScroll}
        />

        <Text style={{fontSize: rpx(30)}}>{details.title}</Text>
        <Text
          style={{fontSize: rpx(23), color: 'gray', marginVertical: rpx(5)}}>
          {details.subtitle}
        </Text>
        <Text
          style={{
            color: 'red',
            fontSize: rpx(35),
            borderBottomWidth: rpx(2),
            paddingBottom: rpx(10),
          }}>
          ¥{details.price}
        </Text>
        {/*
        网页组件:  WebView: 用来做根组件   autoheight-webview: 做子组件
        */}
        <AutoHeightWebView
          source={{html: this.transHtml(details.details)}}
          style={{marginBottom: rpx(35)}}
        />
      </ScrollView>
    );
  }

  // 把文本中 所有符合条件的字符串 都改
  transHtml(html) {
    //原始: src="img/product/detail/59003d49Nd9aa8623.jpg"
    //改成: src="http://101.96.128.94:9999/img/product/detail/59003d49Nd9aa8623.jpg"
    return html.replace(
      /src="img/g,
      'width="100%" src="http://101.96.128.94:9999/img',
    );
    // 正则替换: 详见东哥阶段
  }

  _onScroll = (event) => {
    // event.persist();
    // console.log(event);

    let x = event.nativeEvent.contentOffset.x;
    let width = rpx(750 - 25 * 2);

    this.curP = Math.round(x / width);
    // console.log(this.curP);
  };

  _renderItem = ({item}) => {
    let uri = 'http://101.96.128.94:9999/' + item.lg;

    // 750 - 20 * 2: 表达式 -- 表达一定含义的式子;  可以告知阅读者值是怎么来的
    // 710: 数值
    let width = rpx(750 - 25 * 2);

    return <Image source={{uri}} style={{width, height: width}} />;
  };
}

const styles = StyleSheet.create({});

/**
 * "<div class="content_tpl"><div class="formwork"><div class="formwork_img"><img class="" src="img/product/detail/59003d3fNd4e6c74e.jpg"></div></div><div class="formwork"><div class="formwork_img"><img class="" src="img/product/detail/59003d49Nd9aa8623.jpg"></div></div><div class="formwork"><div class="formwork_img"><img class="" src="img/product/detail/59003d53N79717f17.jpg"></div></div><div class="formwork"><div class="formwork_img"><img class="" src="img/product/detail/59003db4N5441df2e.jpg"></div></div><div class="formwork"><div class="formwork_img"><img class="" src="img/product/detail/59003afdN7d9208b8.jpg"></div></div></div>"
 */
```



## 接下来的安排

Python  5天时间

* 1-2:  python基础语法
* 3: 数据库模块 和 服务器模块
* 4-5: 制作网站接口  并与  vue项目结合 进行全栈编程



vue项目: 2-3天时间

* 使用vue制作一个网站, 上传到新浪云进行上线, 使用git工具进行项目管理





Python3.8.4 下载地址:

`http://onlinedown.rbread04.cn/huajunsafe/python.rar`



























