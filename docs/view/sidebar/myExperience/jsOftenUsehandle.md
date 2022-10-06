# 常用的 js 工具函数方法

[[toc]]

告别搜索引擎的帮助，提高你的开发效率

### 1.邮箱

```js
export const isEmail = (e) => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    e
  );
};
```

### 2.手机号码

```js
export const isMobile = (e) => {
  return /^1[0-9]{10}$/.test(e);
};
```

### 3.电话号码

```js
export const isPhone = (e) => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(e);
};
```

### 4.是否 url 地址

```js
export const isURL = (e) => {
  return /^http[s]?:\/\/.*/.test(e);
};
```

### 5.是否字符串

```js
export const isString = (e) => {
  return Object.prototype.toString.call(e).slice(8, -1) === "String";
};
```

### 6.是否数字

```js
export const isNumber = (e) => {
  return Object.prototype.toString.call(e).slice(8, -1) === "Number";
};
```

### 7.是否 boolean

```js
export const isBoolean = (e) => {
  return Object.prototype.toString.call(e).slice(8, -1) === "Boolean";
};
```

### 8.是否函数

```js
export const isFunction = (e) => {
  return Object.prototype.toString.call(e).slice(8, -1) === "Function";
};
```

### 9.是否为 null

```js
export const isNull = (e) => {
  return Object.prototype.toString.call(e).slice(8, -1) === "Null";
};
```

### 10.是否 undefined

```js
export const isUndefined = (e) => {
  return Object.prototype.toString.call(e).slice(8, -1) === "Undefined";
};
```

### 11.是否对象

```js
export const isObject = (e) => {
  return Object.prototype.toString.call(e).slice(8, -1) === "Object";
};
```

### 12.是否数组

```js
export const isArray = (e) => {
  return Object.prototype.toString.call(e).slice(8, -1) === "Array";
};
```

### 13.是否时间

```js
export const isDate = (e) => {
  return Object.prototype.toString.call(e).slice(8, -1) === "Date";
};
```

### 14.是否正则

```js
export const isRegExp = (e) => {
  return Object.prototype.toString.call(e).slice(8, -1) === "RegExp";
};
```

### 15.是否错误对象

```js
export const isError = (e) => {
  return Object.prototype.toString.call(e).slice(8, -1) === "Error";
};
```

### 16.是否 Symbol 函数

```js
export const isSymbol = (e) => {
  return Object.prototype.toString.call(e).slice(8, -1) === "Symbol";
};
```

### 17.是否 Promise 对象

```js
export const isPromise = (e) => {
  return Object.prototype.toString.call(e).slice(8, -1) === "Promise";
};
```

### 18.是否 Set 对象

```js
export const isSet = (e) => {
  return Object.prototype.toString.call(e).slice(8, -1) === "Set";
};
export const us = navigator.userAgent.toLowerCase();
```

### 19.是否是微信浏览器

```js
export const isWeiXin = () => {
  return ua.match(/microMessenger/i) == "micromessenger";
};
```

### 20.是否是移动端

```js
export const isDeviceMobile = () => {
  return /android|webos|iphone|ipod|balckberry/i.test(ua);
};
```

### 21.是否是 QQ 浏览器

```js
export const isQQBrowser = () => {
  return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i);
};
```

### 22.是否是爬虫

```js
export const isSpider = () => {
  return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sougou orion spider/.test(
    ua
  );
};
```

### 23.是否 ios

```js
export const isIos = () => {
  var u = navigator.userAgent;
  if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
    //安卓手机
    return false;
  } else if (u.indexOf("iPhone") > -1) {
    //苹果手机
    return true;
  } else if (u.indexOf("iPad") > -1) {
    //iPad
    return false;
  } else if (u.indexOf("windows Phone") > -1) {
    //winphone 手机
    return false;
  } else {
    return false;
  }
};
```

### 24.是否 PC 端

```js
export const isPC = () => {
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    "Android",
    "iPhone",
    "SymbuanOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ];
  var flag = true;
  for (var i = 0; i < Agents.length; i++) {
    if (userAgentInfo.indexOf(Agents[i]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};
```

### 25.去除 html 标签

```js
export const removehtmltag = (str) => {
  return str.replace(/<[^>]+>/g, "");
};
```

### 26.获取 url 参数

```js
export const getQueryString = (name) => {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  const search = window.location.search.split("?")[1] || "";
  const r = search.match(reg) || [];
  return r[2];
};
```

### 27.动态引入 js

```js
export const injectScript = (src) => {
  const s = document.createElement("script");
  s.type = "text/JavaScript";
  s.async = true;
  s.src = src;
  const t = document.getElentsByTagName("script")[0];
  t.parentNode.insertBefore(s, t);
};
```

### 28.根据 url 地址下载

```js
export const download = (url) => {
  var isChrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
  var isSafari = navigator.userAgent.toLowerCase().indexOf("safari") > -1;
  if (isChrome || isSafari) {
    var link = document.createElement("a");
    link.href = url;
    if (link.download !== undefined) {
      var fileName = url.substring(url.lastIndexOf("/") + 1, url.length);
      link.download = fileName;
    }
    if (document.createEvent) {
      var e = document.createEvent("MouseEvents");
      e.initEvent("click", true, true);
      link.dispatchEvent(e);
      return true;
    }
  }
  if (url.indexOf("?") === -1) {
    url += "?download";
  }
  window.open(url, "_self");
  return true;
};
```

### 29.el 是否包含某个 class

```js
export const hasClass = (el, className) => {
  let reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
  return reg.test(el.className);
};
```

### 30.el 添加某个 class

```js
export const addClass = (el, className) => {
  if (hasClass(el, className)) {
    return;
  }
  let newClass = el.className.split(" ");
  newClass.push(className);
  el.className = newClass.join(" ");
};
```

### 31.el 去除某个 class

```js
export cosnt removeClass = (el,className)=>{
if(!hasClass(el,className)){
return
}
let reg = new RegExp('(^|\\s)'+className+'(\\s|$)','g')
el.className = el.className.replace(reg,'')
}
```

### 32.获取滚动的坐标

```js
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
});
```

### 33.滚动到顶部

```js
export cosnt scrollToTop = ()=>{
const c = document.documentElement.scrollTop || document.body.scrollTop;
if(c>0){
window.requestAnimationFrame(scrollToTop);
window.scrollTo(0,c-c/8);
}
}
```

### 34.el 是否在视口范围

```js
export const elementIsVisibleInViewport = (el,partiallyVisib = false)=>{
cosnt {top,left,right,bottom} = el.getBoundingClienRect();
const {innerHeight,innerWidth} = window;
return partiallyVisible
? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) && ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth)) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}
```

### 35.洗牌算法随机

```js
export const shuffle = (arr) => {
var result = [],
random;
while (arr.length > 0) {
random = Math.floor(Math.random() \* arr.length); result.push(arr[random])
arr.splice(random, 1)
}
return result;
}
```

### 36.拦截粘贴板

```js
export const copyTextToClipboard = (value) => {
  var textArea = document.createElement("textarea");
  textArea.style.background = "transparent";
  textArea.value = value;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    var successful = document.execCommand("copy");
  } catch (err) {
    console.log("Oops, unable to copy");
  }
  document.body.removeChild(textArea);
};
```

### 37.判断类型集合

```js
export const checkStr = (str, type) => {
switch (type) {
case 'phone':
//手机号码
return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
case 'tel':
//座机
return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
case 'card':
//SFZ
return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
case 'pwd':
//密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
return /^[a-zA-Z]\w{5,17}$/.test(str)
case 'postal':
//邮政编码
return /[1-9]\d{5}(?!\d)/.test(str);
case 'QQ':
//QQ 号
return /^[1-9][0-9]{4,9}$/.test(str);
case 'email':
//邮箱
return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
case 'money':
//金额(小数点 2 位)
return /^\d*(?:\.\d{0,2})?$/.test(str);
case 'URL':
//网址
return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
case 'IP':
//IP
return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
case 'date':
//日期时间
return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str) case 'number':
//数字
return /^[0-9]$/.test(str);
case 'english':
//英文
return /^[a-zA-Z]+$/.test(str);
case 'chinese':
//中文
return /^[\\u4E00-\\u9FA5]+$/.test(str);
case 'lower':
//小写
return /^[a-z]+$/.test(str);
case 'upper':
//大写
return /^[A-Z]+$/.test(str);
case 'HTML':
//HTML 标记
return /<("[^"]_"|'[^']_'|[^'">])\*>/.test(str);
default:
return true;
}
}
```

### 38.严格的SFZ校验

```js
export const isCardID =(sId)=>{
if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
console.log('你输入的SFZ长度或格式错误')
return false
}
//SFZ城市
var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
if (!aCity[parseInt(sId.substr(0, 2))]) {
console.log('你的SFZ地区非法')
return false
}
// 出生日期验证
var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"), d = new Date(sBirthday)
if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
console.log('SFZ上的出生日期非法')
return false
}
// SFZ号码校验
var sum = 0, weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
codes = "10X98765432"
for (var i = 0; i < sId.length - 1; i++) {
sum += sId[i] \* weights[i];
}
var last = codes[sum % 11];
//计算出来的最后一位SFZ号码
if (sId[sId.length - 1] != last) {
console.log('你输入的SFZ号非法')
return false
}
return true
}
```

### 39.随机数范围

```js
export const random = (min, max) => {
if (arguments.length === 2) {
return Math.floor(min + Math.random() \* ((max + 1) - min))
} else {
return null;
}
}
```

### 40.将阿拉伯数字翻译成中文的大写数字

```js
export const numberToChinese = (num) => {
  var AA = new Array(
    "零",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十"
  );
  var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
  var a = ("" + num).replace(/(^0\*)/g, "").split("."),
    k = 0,
    re = "";
  for (var i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re;
        break;
      case 4:
        if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$").test(a[0]))
          re = BB[4] + re;
        break;
      case 8:
        re = BB[5] + re;
        BB[7] = BB[5];
        k = 0;
        break;
    }
    if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
      re = AA[0] + re;
    if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re;
    k++;
  }
  if (a.length > 1) {
    re += BB[6];
    for (var i = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)];
  }
  if (re == "一十") re = "十";
  if (re.match(/^一/) && re.length == 3) re = re.replace("一", "");
  return re;
};
```

### 41.将数字转换为大写金额

```js
export const changeToChinese = (Num) => {
//判断如果传递进来的不是字符的话转换为字符
if (typeof Num == "number") {
Num = new String(Num);
};
Num = Num.replace(/,/g, "")
//替换 tomoney()中的“,”
Num = Num.replace(/ /g, "")
//替换 tomoney()中的空格
Num = Num.replace(/￥/g, "")
//替换掉可能出现的￥字符
if (isNaN(Num)) {
//验证输入的字符是否为数字
//alert("请检查小写金额是否正确");
return "";
};
//字符处理完毕后开始转换，采用前后两部分分别转换
var part = String(Num).split(".");
var newchar = "";
//小数点前进行转化
for (var i = part[0].length - 1; i >= 0; i--) {
if (part[0].length > 10) {
return "";
//若数量超过拾亿单位，提示
}
var tmpnewchar = ""
var perchar = part[0].charAt(i);
switch (perchar) {
case "0":
tmpnewchar = "零" + tmpnewchar;
break;
case "1":
tmpnewchar = "壹" + tmpnewchar;
break;
case "2":
tmpnewchar = "贰" + tmpnewchar;
break;
case "3":
tmpnewchar = "叁" + tmpnewchar;
break;
case "4": tmpnewchar = "肆" + tmpnewchar;
break;
case "5": tmpnewchar = "伍" + tmpnewchar;
break;
case "6": tmpnewchar = "陆" + tmpnewchar;
break;
case "7": tmpnewchar = "柒" + tmpnewchar;
break;
case "8": tmpnewchar = "捌" + tmpnewchar;
break;
case "9": tmpnewchar = "玖" + tmpnewchar;
break;
}
switch (part[0].length - i - 1) {
case 0:
tmpnewchar = tmpnewchar + "元";
break;
case 1:
if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
break;
case 2:
if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
break;
case 3:
if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
break;
case 4:
tmpnewchar = tmpnewchar + "万";
break;
case 5:
if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
break;
case 6:
if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
break;
case 7:
if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
break;
case 8:
tmpnewchar = tmpnewchar + "亿";
break;
case 9:
tmpnewchar = tmpnewchar + "拾";
break;
}
var newchar = tmpnewchar + newchar;
}
//小数点之后进行转化
if (Num.indexOf(".") != -1) {
if (part[1].length > 2) {
// alert("小数点之后只能保留两位,系统将自动截断"
);
part[1] = part[1].substr(0, 2) }
for (i = 0; i < part[1].length; i++) {
tmpnewchar = "" perchar = part[1].charAt(i)
switch (perchar) {
case "0":
tmpnewchar = "零" + tmpnewchar;
break;
case "1":
tmpnewchar = "壹" + tmpnewchar;
break;
case "2":
tmpnewchar = "贰" + tmpnewchar;
break;
case "3":
tmpnewchar = "叁" + tmpnewchar;
break;
case "4":
tmpnewchar = "肆" + tmpnewchar;
break;
case "5":
tmpnewchar = "伍" + tmpnewchar;
break;
case "6":
tmpnewchar = "陆" + tmpnewchar;
break;
case "7": tmpnewchar = "柒" + tmpnewchar;
break;
case "8":
tmpnewchar = "捌" + tmpnewchar;
break;
case "9":
tmpnewchar = "玖" + tmpnewchar;
break;
}
if (i == 0) tmpnewchar = tmpnewchar + "角";
if (i == 1) tmpnewchar = tmpnewchar + "分";
newchar = newchar + tmpnewchar; } }
//替换所有无用汉字
while (newchar.search("零零") != -1)
newchar = newchar.replace("零零", "零");
newchar = newchar.replace("零亿", "亿");
newchar = newchar.replace("亿万", "亿");
newchar = newchar.replace("零万", "万");
newchar = newchar.replace("零元", "元");
newchar = newchar.replace("零角", "");
newchar = newchar.replace("零分", "");
if (newchar.charAt(newchar.length - 1) == "元") {
newchar = newchar + "整"
}
return newchar;
}
```

### 42.判断一个元素是否在数组中

```js
export const contains = (arr, val) => {
  return arr.indexOf(val) != -1 ? true : false;
};
```

### 43.数组排序，{type} 1：从小到大 2：从大到小 3：随机

```js
export const sort = (arr, type = 1) => {
  return arr.sort((a, b) => {
    switch (type) {
      case 1:
        return a - b;
      case 2:
        return b - a;
      case 3:
        return Math.random() - 0.5;
      default:
        return arr;
    }
  });
};
```

### 44.去重

```js
export const unique = (arr) => {
  if (Array.hasOwnProperty("from")) {
    return Array.from(new Set(arr));
  } else {
    var n = {},
      r = [];
    for (var i = 0; i < arr.length; i++) {
      if (!n[arr[i]]) {
        n[arr[i]] = true;
        r.push(arr[i]);
      }
    }
    return r;
  }
};
```

### 45.求两个集合的并集

```js
export const union = (a, b) => {
  var newArr = a.concat(b);
  return this.unique(newArr);
};
```

### 46.求两个集合的交集

```js
export const intersect = (a, b) => {
var \_this = this;
a = this.unique(a);
return this.map(a, function (o) {
return \_this.contains(b, o) ? o : null; });
}
```

### 47.删除其中一个元素

```js
export const remove = (arr, ele) => {
  var index = arr.indexOf(ele);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};
```

### 48.将类数组转换为数组

```js
export const formArray = (ary) => {
  var arr = [];
  if (Array.isArray(ary)) {
    arr = ary;
  } else {
    arr = Array.prototype.slice.call(ary);
  }
  return arr;
};
```

### 49.最大值

```js
export const max = (arr) => {
  return Math.max.apply(null, arr);
};
```

### 50.最小值

```js
export const min = (arr) => {
  return Math.min.apply(null, arr);
};
```

### 51.求和

```js
export const sum = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre + cur;
  });
};
```

### 52.平均值

```js
export const average = (arr) => {
  return this.sum(arr) / arr.length;
};
```

### 53.去除空格,type: 1-所有空格 2-前后空格 3-前空格 4-后空格

```js
export const trim = (str, type) => {
  type = type || 1;
  switch (type) {
    case 1:
      return str.replace(/\s+/g, "");
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
  }
};
```

### 54.字符转换，type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写

```js
export const changeCase = (str, type) => {
  type = type || 4;
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function (word) {
        return (
          word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
        );
      });
    case 2:
      return str.replace(/\b\w+\b/g, function (word) {
        return (
          word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
        );
      });
    case 3:
      return str
        .split("")
        .map(function (word) {
          if (/[a-z]/.test(word)) {
            return word.toUpperCase();
          } else {
            return word.toLowerCase();
          }
        })
        .join("");
    case 4:
      return str.toUpperCase();
    case 5:
      return str.toLowerCase();
    default:
      return str;
  }
};
```

### 55.检测密码强度

```js
export const checkPwd = (str) => {
  var Lv = 0;
  if (str.length < 6) {
    return Lv;
  }
  if (/[0-9]/.test(str)) {
    Lv++;
  }
  if (/[a-z]/.test(str)) {
    Lv++;
  }
  if (/[A-Z]/.test(str)) {
    Lv++;
  }
  if (/[\.|-|_]/.test(str)) {
    Lv++;
  }
  return Lv;
};
```

### 56.函数节流器

```js
export const debouncer = (fn, time, interval = 200) => {
  if (time - (window.debounceTimestamp || 0) > interval) {
    fn && fn();
    window.debounceTimestamp = time;
  }
};
```

### 57.在字符串中插入新字符串

```js
export const insertStr = (soure, index, newStr) => {
  var str = soure.slice(0, index) + newStr + soure.slice(index);
  return str;
};
```

### 58.判断两个对象是否键值相同

```js
export const isObjectEqual = (a, b) => {
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);
  if (aProps.length !== bProps.length) {
    return false;
  }
  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];
    if (a[propName] !== b[propName]) {
      return false;
    }
  }
  return true;
};
```

### 59.16 进制颜色转 RGBRGBA 字符串

```js
export const colorToRGB = (val, opa) => {
var pattern = /^(#?)[a-fA-F0-9]{6}$/;
//16 进制颜色值校验规则
var isOpa = typeof opa == 'number';
//判断是否有设置不透明度
if (!pattern.test(val)) {
//如果值不符合规则返回空字符
return '';
}
var v = val.replace(/#/, '');
//如果有#号先去除#号
var rgbArr = [];
var rgbStr = '';
for (var i = 0; i < 3; i++) {
var item = v.substring(i _ 2, i _ 2 + 2);
var num = parseInt(item, 16);
rgbArr.push(num);
}
rgbStr = rgbArr.join();
rgbStr = 'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')';
return rgbStr;
}
```

### 60.追加 url 参数

```js
export const appendQuery = (url, key, value) => {
  var options = key;
  if (typeof options == "string") {
    options = {};
    options[key] = value;
  }
  options = $.param(options);
  if (url.includes("?")) {
    url += "&" + options;
  } else {
    url += "?" + options;
  }
  return url;
};
```

### 正则校验 check 工具函数

这里的正则表达式主要参考了 any-rule。

### 验证不能包含字母

```js
/**
 * @param { string } value
 */
export const isNoWord = (value) => /^[^A-Za-z]*$/g.test(value);
```

### 验证中文和数字

```js
/**
 * @param { string } value
 */
export const isCHNAndEN = (value) =>
  /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(
    value
  );
```

### 验证邮政编码(中国)

```js
/**
 * @param { string } value
 */
export const isPostcode = (value) =>
  /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(
    value
  );
```

### 验证微信号，6 至 20 位，以字母开头，字母，数字，减号，下划线

```js
/**
 * @param { string } value
 */
export const isWeChatNum = (value) =>
  /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value);
```

### 验证 16 进制颜色

```js
/**
 * @param { string } value
 */
export const isColor16 = (value) =>
  /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value);
```

### 验证火车车次

```js
/**
 * @param { string } value
 */
export const isTrainNum = (value) => /^[GCDZTSPKXLY1-9]\d{1,4}$/g.test(value);
```

### 验证手机机身码(IMEI)

```
/**
 *  @param { string } value
 */
export const isIMEI = value => /^\d{15,17}$/g.test(value);
```

### 验证必须带端口号的网址(或 ip)

```js
/**
 * @param { string } value
 */
export const isHttpAndPort = (value) =>
  /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/g.test(value);
```

### 验证网址(支持端口和"?+参数"和"#+参数)

```js
/**
 *  @param { string } value
 */
export const isRightWebsite = (value) =>
  /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g.test(
    value
  );
```

### 验证统一社会信用代码

```js
/**
 *  @param { string } value
 */
export const isCreditCode = (value) =>
  /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(value);
```

### 验证迅雷链接

```js
/**
 *  @param { string } value
 */
export const isThunderLink = (value) =>
  /^thunderx?:\/\/[a-zA-Z\d]+=$/g.test(value);
```

### 验证 ed2k 链接(宽松匹配)

```js
/**
 *  @param { string } value
 */
export const ised2k = (value) => /^ed2k:\/\/\|file\|.+\|\/$/g.test(value);
```

### 验证磁力链接(宽松匹配)

```js
/**
 *  @param { string } value
 */
export const isMagnet = (value) =>
  /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/g.test(value);
```

### 验证子网掩码

```js
/**
 *  @param { string } value
 */
export const isSubnetMask = (value) =>
  /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/g.test(
    value
  );
```

### 验证 linux"文件夹"路径

```js
/**
 *  @param { string } value
 */
export const isLinuxFolderPath = (value) => /^(\/[^/]+)+\/?$/g.test(value);
```

### 验证 linux"文件"路径

```js
/**
 *  @param { string } value
 */
export const isLinuxFilePath = (value) => /^(\/[^/]+)+$/g.test(value);
```

### 验证 window"文件夹"路径

```js
/**
 *  @param { string } value
 */
export const isWindowsFolderPath = (value) =>
  /^[a-zA-Z]:\\(?:\w+\\?)*$/g.test(value);
```

### 验证 window 下"文件"路径

```js
/**
 *  @param { string } value
 */
export const isWindowsFilePath = (value) =>
  /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/g.test(value);
```

### 验证股票代码(A 股)

```js
/**
 *  @param { string } value
 */
export const isAShare = (value) =>
  /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/g.test(
    value
  );
```

### 验证版本号格式必须为 X.Y.Z

```js
/**
 *  @param { string } value
 */
export const isVersion = (value) => /^\d+(?:\.\d+){2}$/g.test(value);
```

### 验证视频链接地址（视频格式可按需增删）

```js
/**
 *  @param { string } value
 */
export const isVideoUrl = (value) =>
  /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i.test(
    value
  );
```

### 验证图片链接地址（图片格式可按需增删）

```js
/**
 *  @param { string } value
 */
export const isImageUrl = (value) =>
  /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(
    value
  );
```

### 验证银行卡号（10 到 30 位, 覆盖对公/私账户, 参考微信支付）

```
/**
 * @param { string } value
 */
export const isAccountNumber = value => /^[1-9]\d{9,29}$/g.test(value);
```

### 验证中文姓名

```js
/**
 * @param { string } value
 */
export const isChineseName = (value) =>
  /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value);
```

### 验证英文姓名

```js
/**
 * @param { string } value
 */
export const isEnglishName = (value) =>
  /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(value);
```

### 验证车牌号(新能源)

```js
/**
 * @param { string } value
 */
export const isLicensePlateNumberNER = (value) =>
  /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/g.test(
    value
  );
```

### 验证车牌号(非新能源)

```js
/**
 * @param { string } value
 */
export const isLicensePlateNumberNNER = (value) =>
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g.test(
    value
  );
```

### 验证车牌号(新能源+非新能源)

```js
/**
 * @param { string } value
 */
export const isLicensePlateNumber = (value) =>
  /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(
    value
  );
```

### 验证手机号中国(严谨), 根据工信部 2019 年最新公布的手机号段

```js
/**
 * @param { string } value
 */
export const isMPStrict = (value) =>
  /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(
    value
  );
```

### 验证手机号中国(宽松), 只要是 13,14,15,16,17,18,19 开头即可

```js
/**
 * @param { string } value
 */
export const isMPRelaxed = (value) =>
  /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(value);
```

### 验证 email(邮箱)

```js
/**
 * @param { string } value
 */
export const isEmail = (value) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(
    value
  );
```

### 验证座机电话(国内),如: 0341-86091234

```js
/**
 * @param { string } value
 */
export const isLandlineTelephone = (value) =>
  /\d{3}-\d{8}|\d{4}-\d{7}/g.test(value);
```

### 验证SFZ号(1 代,15 位数字)

```js
/**
 * @param { string } value
 */
export const isIDCardOld = (value) =>
  /^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$/g.test(value);
```

### 验证SFZ号(2 代,18 位数字),最后一位是校验位,可能为数字或字符 X

```js
/**
 * @param { string } value
 */
export const isIDCardNew = (value) =>
  /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/g.test(value);
```

### 验证SFZ号, 支持 1/2 代(15 位/18 位数字)

```js
/**
 * @param { string } value
 */
export const isIDCard = (value) =>
  /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(
    value
  );
```

### 验证护照（包含香港、澳门）

```js
/**
 * @param { string } value
 */
export const isPassport = (value) =>
  /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g.test(
    value
  );
```

### 验证帐号是否合法(字母开头，允许 5-16 字节，允许字母数字下划线组合

```js
/**
 * @param { string } value
 */
export const isWebAccount = (value) => /^[a-zA-Z]\w{4,15}$/g.test(value);
```

### 验证中文/汉字

```js
/**
 * @param { string } value
 */
export const isChineseCharacter = (value) =>
  /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(
    value
  );
```

### 验证小数

```js
/**
 * @param { string } value
 */
export const isDecimal = (value) => /^\d+\.\d+$/g.test(value);
```

### 验证数字

```js
/**
 * @param { string } value
 */
export const isNumber = (value) => /^\d{1,}$/g.test(value);
```

### 验证 qq 号格式

```js
/**
 * @param { string } value
 */
export const isQQNum = (value) => /^[1-9][0-9]{4,10}$/g.test(value);
```

### 验证数字和字母组成

```js
/**
 * @param { string } value
 */
export const isNumAndStr = (value) => /^[A-Za-z0-9]+$/g.test(value);
```

### 验证英文字母

```js
/**
 * @param { string } value
 */
export const isEnglish = (value) => /^[a-zA-Z]+$/g.test(value);
```

### 验证大写英文字母

```js
/**
 * @param { string } value
 */
export const isCapital = (value) => /^[A-Z]+$/g.test(value);
```

### 验证小写英文字母

```js
/**
 * @param { string } value
 */
export const isLowercase = (value) => /^[a-z]+$/g.test(value);
```

### 浏览器操作相关 browser 工具函数

### 返回当前 url

```js
export const currentURL = () => window.location.href;
```

### 获取 url 参数（第一种）

```js
/**
 * @param {*} name
 * @param {*} origin
 */

export function getUrlParam(name, origin = null) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = null;
  if (origin == null) {
    r = window.location.search.substr(1).match(reg);
  } else {
    r = origin.substr(1).match(reg);
  }
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}
```

### 获取 url 参数（第二种）

```js
/**
 * @param {*} name
 * @param {*} origin
 */
export function getUrlParams(name, origin = null) {
  let url = location.href;
  let temp1 = url.split("?");
  let pram = temp1[1];
  let keyValue = pram.split("&");
  let obj = {};
  for (let i = 0; i < keyValue.length; i++) {
    let item = keyValue[i].split("=");
    let key = item[0];
    let value = item[1];
    obj[key] = value;
  }
  return obj[name];
}
```

### 修改 url 中的参数

```js
/**
 * @param { string } paramName
 * @param { string } replaceWith
 */
export function replaceParamVal(paramName, replaceWith) {
  var oUrl = location.href.toString();
  var re = eval("/(" + paramName + "=)([^&]*)/gi");
  location.href = oUrl.replace(re, paramName + "=" + replaceWith);
  return location.href;
}
```

### 删除 url 中指定的参数

```js
/**
 * @param { string } name
 */
export function funcUrlDel(name) {
  var loca = location;
  var baseUrl = loca.origin + loca.pathname + "?";
  var query = loca.search.substr(1);
  if (query.indexOf(name) > -1) {
    var obj = {};
    var arr = query.split("&");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split("=");
      obj[arr[i][0]] = arr[i][1];
    }
    delete obj[name];
    var url =
      baseUrl +
      JSON.stringify(obj)
        .replace(/[\"\{\}]/g, "")
        .replace(/\:/g, "=")
        .replace(/\,/g, "&");
    return url;
  }
}
```

### 获取窗口可视范围的高度

```js
export function getClientHeight() {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight =
      document.body.clientHeight < document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  } else {
    clientHeight =
      document.body.clientHeight > document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  }
  return clientHeight;
}
```

### 获取窗口可视范围宽度

```js
export function getPageViewWidth() {
  let d = document,
    a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
  return a.clientWidth;
}
```

### 获取窗口宽度

```js
export function getPageWidth() {
  let g = document,
    a = g.body,
    f = g.documentElement,
    d = g.compatMode == "BackCompat" ? a : g.documentElement;
  return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}
```

### 获取窗口尺寸

```js
export function getViewportOffset() {
  if (window.innerWidth) {
    return {
      w: window.innerWidth,
      h: window.innerHeight,
    };
  } else {
    // ie8及其以下
    if (document.compatMode === "BackCompat") {
      // 怪异模式
      return {
        w: document.body.clientWidth,
        h: document.body.clientHeight,
      };
    } else {
      // 标准模式
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
      };
    }
  }
}
```

### 获取滚动条距顶部高度

```js
export function getPageScrollTop() {
  let a = document;
  return a.documentElement.scrollTop || a.body.scrollTop;
}
```

### 获取滚动条距左边的高度

```js
export function getPageScrollLeft() {
  let a = document;
  return a.documentElement.scrollLeft || a.body.scrollLeft;
}
```

### 开启全屏

```js
/**
 * @param {*} element
 */
export function launchFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
}
```

### 关闭全屏

```js
export function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
```

### 返回当前滚动条位置

```js
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
});
```

### 滚动到指定元素区域

```js
export const smoothScroll = (element) => {
  document.querySelector(element).scrollIntoView({
    behavior: "smooth",
  });
};
```

### 平滑滚动到页面顶部

```js
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
```

### http 跳转 https

```js
export const httpsRedirect = () => {
  if (location.protocol !== "https:")
    location.replace("https://" + location.href.split("//")[1]);
};
```

### 检查页面底部是否可见

```js
export const bottomVisible = () => {
  return (
    document.documentElement.clientHeight + window.scrollY >=
    (document.documentElement.scrollHeight ||
      document.documentElement.clientHeight)
  );
};
```

### 打开一个窗口

```js
/**
 * @param { string } url
 * @param { string } windowName
 * @param { number } width
 * @param { number } height
 */
export function openWindow(url, windowName, width, height) {
  var x = parseInt(screen.width / 2.0) - width / 2.0;
  var y = parseInt(screen.height / 2.0) - height / 2.0;
  var isMSIE = navigator.appName == "Microsoft Internet Explorer";
  if (isMSIE) {
    var p = "resizable=1,location=no,scrollbars=no,width=";
    p = p + width;
    p = p + ",height=";
    p = p + height;
    p = p + ",left=";
    p = p + x;
    p = p + ",top=";
    p = p + y;
    window.open(url, windowName, p);
  } else {
    var win = window.open(
      url,
      "ZyiisPopup",
      "top=" +
        y +
        ",left=" +
        x +
        ",scrollbars=" +
        scrollbars +
        ",dialog=yes,modal=yes,width=" +
        width +
        ",height=" +
        height +
        ",resizable=no"
    );
    eval("try { win.resizeTo(width, height); } catch(e) { }");
    win.focus();
  }
}
```

### 自适应页面（rem）

```js
/**
 * @param { number } width
 */
export function AutoResponse(width = 750) {
  const target = document.documentElement;
  target.clientWidth >= 600
    ? (target.style.fontSize = "80px")
    : (target.style.fontSize = (target.clientWidth / width) * 100 + "px");
}
```

### 日期工具 date 工具函数

可以参考我的另一篇文章《前端的各种日期操作》，或者直接到我的 GitHub 查看
浏览器存储相关 storage 工具函数
主要为浏览器存储方面的工具函数，大部分搬运自大神火狼 1

### localStorage 存贮

```js
/**
 * 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略
 * @param { String } key  属性
 * @param { string } value 值
 */
export const localStorageSet = (key, value) => {
  if (typeof value === "object") value = JSON.stringify(value);
  localStorage.setItem(key, value);
};
```

### localStorage 获取

```js
/**
 * @param {String} key  属性
 */
export const localStorageGet = (key) => {
  return localStorage.getItem(key);
};
```

### localStorage 移除

```js
/**
 * @param {String} key  属性
 */
export const localStorageRemove = (key) => {
  localStorage.removeItem(key);
};
```

### localStorage 存贮某一段时间失效

```js
/**
 * @param {String} key  属性
 * @param {*} value 存贮值
 * @param { number } expire 过期时间,毫秒数
 */
export const localStorageSetExpire = (key, value, expire) => {
  if (typeof value === "object") value = JSON.stringify(value);
  localStorage.setItem(key, value);
  setTimeout(() => {
    localStorage.removeItem(key);
  }, expire);
};
```

### sessionStorage 存贮

```js
/**
 * @param {String} key  属性
 * @param {*} value 值
 */
export const sessionStorageSet = (key, value) => {
  if (typeof value === "object") value = JSON.stringify(value);
  sessionStorage.setItem(key, value);
};
```

### sessionStorage 获取

```js
/**
 * @param {String} key  属性
 */
export const sessionStorageGet = (key) => {
  return sessionStorage.getItem(key);
};
```

### sessionStorage 删除

```js
/**
 * @param {String} key  属性
 */
export const sessionStorageRemove = (key) => {
  sessionStorage.removeItem(key);
};
```

### sessionStorage 存贮某一段时间失效

```js
/**
 * @param {String} key  属性
 * @param {*} value 存贮值
 * @param {String} expire 过期时间,毫秒数
 */
export const sessionStorageSetExpire = (key, value, expire) => {
  if (typeof value === "object") value = JSON.stringify(value);
  sessionStorage.setItem(key, value);
  setTimeout(() => {
    sessionStorage.removeItem(key);
  }, expire);
};
```

### cookie 存贮

```js
/**
 * @param {String} key  属性
 * @param {*} value  值
 * @param { String } expire  过期时间,单位天
 */
export const cookieSet = (key, value, expire) => {
  const d = new Date();
  d.setDate(d.getDate() + expire);
  document.cookie = `${key}=${value};expires=${d.toUTCString()}`;
};
```

### cookie 获取

```js
/**
 * @param {String} key  属性
 */
export const cookieGet = (key) => {
  const cookieStr = unescape(document.cookie);
  const arr = cookieStr.split("; ");
  let cookieValue = "";
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].split("=");
    if (temp[0] === key) {
      cookieValue = temp[1];
      break;
    }
  }
  return cookieValue;
};
```

### cookie 删除

```js
/**
 * @param {String} key  属性
 */
export const cookieRemove = (key) => {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`;
};
```

### 更多的工具函数

这里包含了平时可能常用的工具函数，包含数字，字符串，数组和对象等等操作。

### 金钱格式化，三位加逗号

```js
/**
 *  @param { number } num
 */
export const formatMoney = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
### 截取字符串并加身略号
export function subText(str, length) {
    if (str.length === 0) {
        return '';
    }
    if (str.length > length) {
        return str.substr(0, length) + "...";
    } else {
        return str;
    }
}
```

### 获取文件 base64 编码

```js
/**
 * @param file
 * @param format  指定文件格式
 * @param size  指定文件大小(字节)
 * @param formatMsg 格式错误提示
 * @param sizeMsg   大小超出限制提示
 * @returns {Promise<any>}
 */
export function fileToBase64String(
  file,
  format = ["jpg", "jpeg", "png", "gif"],
  size = 20 * 1024 * 1024,
  formatMsg = "文件格式不正确",
  sizeMsg = "文件大小超出限制"
) {
  return new Promise((resolve, reject) => {
    // 格式过滤
    let suffix = file.type.split("/")[1].toLowerCase();
    let inFormat = false;
    for (let i = 0; i < format.length; i++) {
      if (suffix === format[i]) {
        inFormat = true;
        break;
      }
    }
    if (!inFormat) {
      reject(formatMsg);
    }
    // 大小过滤
    if (file.size > size) {
      reject(sizeMsg);
    }
    // 转base64字符串
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      let res = fileReader.result;
      resolve({ base64String: res, suffix: suffix });
      reject("异常文件，请重新选择");
    };
  });
}
```

### B 转换到 KB,MB,GB 并保留两位小数

```js
/**
 * @param { number } fileSize
 */
export function formatFileSize(fileSize) {
  let temp;
  if (fileSize < 1024) {
    return fileSize + "B";
  } else if (fileSize < 1024 * 1024) {
    temp = fileSize / 1024;
    temp = temp.toFixed(2);
    return temp + "KB";
  } else if (fileSize < 1024 * 1024 * 1024) {
    temp = fileSize / (1024 * 1024);
    temp = temp.toFixed(2);
    return temp + "MB";
  } else {
    temp = fileSize / (1024 * 1024 * 1024);
    temp = temp.toFixed(2);
    return temp + "GB";
  }
}
```

### base64 转 file

```js
/**
 *  @param { base64 } base64
 *  @param { string } filename 转换后的文件名
 */
export const base64ToFile = (base64, filename) => {
  let arr = base64.split(",");
  let mime = arr[0].match(/:(.*?);/)[1];
  let suffix = mime.split("/")[1]; // 图片后缀
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], `${filename}.${suffix}`, { type: mime });
};
```

### base64 转 blob

```js
/**
 *  @param { base64 } base64
 */
export const base64ToBlob = (base64) => {
  let arr = base64.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};
```

### blob 转 file

```js
/**
 *  @param { blob } blob
 *  @param { string } fileName
 */
export const blobToFile = (blob, fileName) => {
  blob.lastModifiedDate = new Date();
  blob.name = fileName;
  return blob;
};
```

### file 转 base64

```js
/**
 * @param { * } file 图片文件
 */
export const fileToBase64 = (file) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (e) {
    return e.target.result;
  };
};
```

### 递归生成树形结构

```js
export function getTreeData(
  data,
  pid,
  pidName = "parentId",
  idName = "id",
  childrenName = "children",
  key
) {
  let arr = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i][pidName] == pid) {
      data[i].key = data[i][idName];
      data[i][childrenName] = getTreeData(
        data,
        data[i][idName],
        pidName,
        idName,
        childrenName
      );
      arr.push(data[i]);
    }
  }

  return arr;
}
```

### 遍历树节点

```js
export function foreachTree(data, childrenName = "children", callback) {
  for (let i = 0; i < data.length; i++) {
    callback(data[i]);
    if (data[i][childrenName] && data[i][childrenName].length > 0) {
      foreachTree(data[i][childrenName], childrenName, callback);
    }
  }
}
```

### 追溯父节点

```js
export function traceParentNode(
  pid,
  data,
  rootPid,
  pidName = "parentId",
  idName = "id",
  childrenName = "children"
) {
  let arr = [];
  foreachTree(data, childrenName, (node) => {
    if (node[idName] == pid) {
      arr.push(node);
      if (node[pidName] != rootPid) {
        arr = arr.concat(
          traceParentNode(node[pidName], data, rootPid, pidName, idName)
        );
      }
    }
  });
  return arr;
}
```

### 寻找所有子节点

```js
export function traceChildNode(
  id,
  data,
  pidName = "parentId",
  idName = "id",
  childrenName = "children"
) {
  let arr = [];
  foreachTree(data, childrenName, (node) => {
    if (node[pidName] == id) {
      arr.push(node);
      arr = arr.concat(
        traceChildNode(node[idName], data, pidName, idName, childrenName)
      );
    }
  });
  return arr;
}
```

### 根据 pid 生成树形结构

```js
/**
 *  @param { object } items 后台获取的数据
 *  @param { * } id 数据中的id
 *  @param { * } link 生成树形结构的依据
 */
export const createTree = (items, id = null, link = "pid") => {
  items
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: createTree(items, item.id) }));
};
```

### 查询数组中是否存在某个元素并返回元素第一次出现的下标

```js
/**
 * @param {*} item
 * @param { array } data
 */
export function inArray(item, data) {
  for (let i = 0; i < data.length; i++) {
    if (item === data[i]) {
      return i;
    }
  }
  return -1;
}
```

### Windows 根据详细版本号判断当前系统名称

```js
/**
 * @param { string } osVersion
 */
export function OutOsName(osVersion) {
  if (!osVersion) {
    return;
  }
  let str = osVersion.substr(0, 3);
  if (str === "5.0") {
    return "Win 2000";
  } else if (str === "5.1") {
    return "Win XP";
  } else if (str === "5.2") {
    return "Win XP64";
  } else if (str === "6.0") {
    return "Win Vista";
  } else if (str === "6.1") {
    return "Win 7";
  } else if (str === "6.2") {
    return "Win 8";
  } else if (str === "6.3") {
    return "Win 8.1";
  } else if (str === "10.") {
    return "Win 10";
  } else {
    return "Win";
  }
}
```

### 判断手机是 Andoird 还是 IOS

```js
/**
 *  0: ios
 *  1: android
 *  2: 其它
 */
export function getOSType() {
  let u = navigator.userAgent,
    app = navigator.appVersion;
  let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1;
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isIOS) {
    return 0;
  }
  if (isAndroid) {
    return 1;
  }
  return 2;
}
```

### 函数防抖

```js
/**
 * @param { function } func
 * @param { number } wait 延迟执行毫秒数
 * @param { boolean } immediate  true 表立即执行，false 表非立即执行
 */
export function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
}
```

### 函数节流

```js
/**
 * @param { function } func 函数
 * @param { number } wait 延迟执行毫秒数
 * @param { number } type 1 表时间戳版，2 表定时器版
 */
export function throttle(func, wait, type) {
  let previous, timeout;
  if (type === 1) {
    previous = 0;
  } else if (type === 2) {
    timeout = null;
  }
  return function () {
    let context = this;
    let args = arguments;
    if (type === 1) {
      let now = Date.now();

      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(context, args);
        }, wait);
      }
    }
  };
}
```

### 判断数据类型

```js
/**
 * @param {*} target
 */
export function type(target) {
  let ret = typeof target;
  let template = {
    "[object Array]": "array",
    "[object Object]": "object",
    "[object Number]": "number - object",
    "[object Boolean]": "boolean - object",
    "[object String]": "string-object",
  };

  if (target === null) {
    return "null";
  } else if (ret == "object") {
    let str = Object.prototype.toString.call(target);
    return template[str];
  } else {
    return ret;
  }
}
```

### 生成指定范围随机数

```js
/**
 * @param { number } min
 * @param { number } max
 */
export const RandomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
```

### 数组乱序

```js
/**
 * @param {array} arr
 */
export function arrScrambling(arr) {
  let array = arr;
  let index = array.length;
  while (index) {
    index -= 1;
    let randomIndex = Math.floor(Math.random() * index);
    let middleware = array[index];
    array[index] = array[randomIndex];
    array[randomIndex] = middleware;
  }
  return array;
}
```

### 数组交集

```js
/**
 * @param { array} arr1
 * @param { array } arr2
 */
export const similarity = (arr1, arr2) => arr1.filter((v) => arr2.includes(v));
```

### 数组中某元素出现的次数

```js
/**
 * @param { array } arr
 * @param {*} value
 */

export function countOccurrences(arr, value) {
  return arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0);
}
```

### 加法函数（精度丢失问题）

```js
/**
 * @param { number } arg1
 * @param { number } arg2
 */
export function add(arg1, arg2) {
  let r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
}
```

### 减法函数（精度丢失问题）

```js
/**
 * @param { number } arg1
 * @param { number } arg2
 */
export function sub(arg1, arg2) {
  let r1, r2, m, n;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
}
```

### 除法函数（精度丢失问题）

```js
/**
 * @param { number } num1
 * @param { number } num2
 */
export function division(num1, num2) {
  let t1, t2, r1, r2;
  try {
    t1 = num1.toString().split(".")[1].length;
  } catch (e) {
    t1 = 0;
  }
  try {
    t2 = num2.toString().split(".")[1].length;
  } catch (e) {
    t2 = 0;
  }
  r1 = Number(num1.toString().replace(".", ""));
  r2 = Number(num2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}
```

### 乘法函数（精度丢失问题）

```js
/**
 * @param { number } num1
 * @param { number } num2
 */
export function mcl(num1, num2) {
  let m = 0,
    s1 = num1.toString(),
    s2 = num2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {}
  try {
    m += s2.split(".")[1].length;
  } catch (e) {}
  return (
    (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
    Math.pow(10, m)
  );
}
```

### 递归优化（尾递归）

```js
/**
 * @param { function } f
 */
export function tco(f) {
  let value;
  let active = false;
  let accumulated = [];

  return function accumulator() {
    accumulated.push(arguments);
    if (!active) {
      active = true;
      while (accumulated.length) {
        value = f.apply(this, accumulated.shift());
      }
      active = false;
      return value;
    }
  };
}
```

### 生成随机整数

```js
export function randomNumInteger(min, max) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * min + 1, 10);
    case 2:
      return parseInt(Math.random() * (max - min + 1) + min, 10);
    default:
      return 0;
  }
}
```

### 去除空格

```js
/**
 * @param { string } str 待处理字符串
 * @param  { number } type 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1
 */
export function trim(str, type = 1) {
  if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
  switch (type) {
    case 1:
      return str.replace(/\s/g, "");
    case 2:
      return str.replace(/(^\s)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s)/g, "");
    case 4:
      return str.replace(/(\s$)/g, "");
    default:
      return str;
  }
}
```

### 大小写转换

```js
/**
 * @param { string } str 待转换的字符串
 * @param { number } type 1-全大写 2-全小写 3-首字母大写 其他-不转换
 */

export function turnCase(str, type) {
  switch (type) {
    case 1:
      return str.toUpperCase();
    case 2:
      return str.toLowerCase();
    case 3:
      return str[0].toUpperCase() + str.substr(1).toLowerCase();
    default:
      return str;
  }
}
```

### 随机 16 进制颜色 hexColor

```js
/**
 * 方法一
 */
export function hexColor() {
  let str = "#";
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  for (let i = 0; i < 6; i++) {
    let index = Number.parseInt((Math.random() * 16).toString());
    str += arr[index];
  }
  return str;
}
```

### 随机 16 进制颜色 randomHexColorCode

```js
/**
 * 方法二
 */
export const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};
```

### 转义 html(防 XSS 攻击)

```js
export const escapeHTML = (str) => {
  str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      }[tag] || tag)
  );
};
```

### 检测移动/PC 设备

```js
export const detectDeviceType = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";
};
```

### 隐藏所有指定标签

```js
/**
 * 例: hide(document.querySelectorAll('img'))
 */
export const hideTag = (...el) =>
  [...el].forEach((e) => (e.style.display = "none"));
```

### 返回指定元素的生效样式

```js
/**
 * @param { element} el  元素节点
 * @param { string } ruleName  指定元素的名称
 */
export const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];
```

### 检查是否包含子元素

```js
/**
 * @param { element } parent
 * @param { element } child
 * 例：elementContains(document.querySelector('head'), document.querySelector('title')); // true
 */
export const elementContains = (parent, child) =>
  parent !== child && parent.contains(child);
```

### 数字超过规定大小加上加号“+”，如数字超过 99 显示 99+

```js
/**
 * @param { number } val 输入的数字
 * @param { number } maxNum 数字规定界限
 */
export const outOfNum = (val, maxNum) => {
  val = val ? val - 0 : 0;
  if (val > maxNum) {
    return `${maxNum}+`;
  } else {
    return val;
  }
};
```

### 输入一个值，返回其数据类型

```js
function type(para) {
  return Object.prototype.toString.call(para);
}
```

### 数组去重

```js
function unique1(arr) {
  return [...new Set(arr)];
}

function unique2(arr) {
  var obj = {};
  return arr.filter((ele) => {
    if (!obj[ele]) {
      obj[ele] = true;
      return true;
    }
  });
}

function unique3(arr) {
  var result = [];
  arr.forEach((ele) => {
    if (result.indexOf(ele) == -1) {
      result.push(ele);
    }
  });
  return result;
}
```

### 字符串去重

```js
String.prototype.unique = function () {
  var obj = {},
    str = "",
    len = this.length;
  for (var i = 0; i < len; i++) {
    if (!obj[this[i]]) {
      str += this[i];
      obj[this[i]] = true;
    }
  }
  return str;
};
```

### 去除连续的字符串

```js
function uniq(str) {
  return str.replace(/(\w)\1+/g, "$1");
}
```

### 深拷贝 浅拷贝

```js
//深克隆（深克隆不考虑函数）
function deepClone(obj, result) {
  var result = result || {};
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (typeof obj[prop] == "object" && obj[prop] !== null) {
        // 引用值(obj/array)且不为null
        if (Object.prototype.toString.call(obj[prop]) == "[object Object]") {
          // 对象
          result[prop] = {};
        } else {
          // 数组
          result[prop] = [];
        }
        deepClone(obj[prop], result[prop]);
      } else {
        // 原始值或func
        result[prop] = obj[prop];
      }
    }
  }
  return result;
}
```

```js
// 深浅克隆是针对引用值
function deepClone(target) {
  if (typeof target !== "object") {
    return target;
  }
  var result;
  if (Object.prototype.toString.call(target) == "[object Array]") {
    // 数组
    result = [];
  } else {
    // 对象
    result = {};
  }
  for (var prop in target) {
    if (target.hasOwnProperty(prop)) {
      result[prop] = deepClone(target[prop]);
    }
  }
  return result;
}
// 无法复制函数
var o1 = jsON.parse(jsON.stringify(obj1));
```

### reverse 底层原理和扩展

```js
// 改变原数组
Array.prototype.myReverse = function () {
  var len = this.length;
  for (var i = 0; i < len; i++) {
    var temp = this[i];
    this[i] = this[len - 1 - i];
    this[len - 1 - i] = temp;
  }
  return this;
};
```

### 圣杯模式的继承

```js
function inherit(Target, Origin) {
  function F() {}
  F.prototype = Origin.prototype;
  Target.prototype = new F();
  Target.prototype.constructor = Target;
  // 最终的原型指向
  Target.prop.uber = Origin.prototype;
}
```

### 找出字符串中第一次只出现一次的字母

```js
String.prototype.firstAppear = function () {
  var obj = {},
    len = this.length;
  for (var i = 0; i < len; i++) {
    if (obj[this[i]]) {
      obj[this[i]]++;
    } else {
      obj[this[i]] = 1;
    }
  }
  for (var prop in obj) {
    if (obj[prop] == 1) {
      return prop;
    }
  }
};
```

### 找元素的第 n 级父元素

```js
function parents(ele, n) {
  while (ele && n) {
    ele = ele.parentElement ? ele.parentElement : ele.parentNode;
    n--;
  }
  return ele;
}
```

### 返回元素的第 n 个兄弟节点

```js
function retSibling(e, n) {
  while (e && n) {
    if (n > 0) {
      if (e.nextElementSibling) {
        e = e.nextElementSibling;
      } else {
        for (e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling);
      }
      n--;
    } else {
      if (e.previousElementSibling) {
        e = e.previousElementSibling;
      } else {
        for (
          e = e.previousElementSibling;
          e && e.nodeType !== 1;
          e = e.previousElementSibling
        );
      }
      n++;
    }
  }
  return e;
}
```

### 封装 mychildren，解决浏览器的兼容问题

```js
function myChildren(e) {
  var children = e.childNodes,
    arr = [],
    len = children.length;
  for (var i = 0; i < len; i++) {
    if (children[i].nodeType === 1) {
      arr.push(children[i]);
    }
  }
  return arr;
}
```

### 判断元素有没有子元素

```js
function hasChildren(e) {
  var children = e.childNodes,
    len = children.length;
  for (var i = 0; i < len; i++) {
    if (children[i].nodeType === 1) {
      return true;
    }
  }
  return false;
}
```

### 我一个元素插入到另一个元素的后面

```js
Element.prototype.insertAfter = function (target, elen) {
  var nextElen = elen.nextElenmentSibling;
  if (nextElen == null) {
    this.appendChild(target);
  } else {
    this.insertBefore(target, nextElen);
  }
};
```

### 返回当前的时间（年月日时分秒）

```js
function getDateTime() {
  var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours() + 1,
    minute = date.getMinutes(),
    second = date.getSeconds();
  month = checkTime(month);
  day = checkTime(day);
  hour = checkTime(hour);
  minute = checkTime(minute);
  second = checkTime(second);
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  return (
    "" +
    year +
    "年" +
    month +
    "月" +
    day +
    "日" +
    hour +
    "时" +
    minute +
    "分" +
    second +
    "秒"
  );
}
```

### 获得滚动条的滚动距离

```js
function getScrollOffset() {
  if (window.pageXOffset) {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset,
    };
  } else {
    return {
      x: document.body.scrollLeft + document.documentElement.scrollLeft,
      y: document.body.scrollTop + document.documentElement.scrollTop,
    };
  }
}
```

### 获得视口的尺寸

```js
function getViewportOffset() {
  if (window.innerWidth) {
    return {
      w: window.innerWidth,
      h: window.innerHeight,
    };
  } else {
    // ie8及其以下
    if (document.compatMode === "BackCompat") {
      // 怪异模式
      return {
        w: document.body.clientWidth,
        h: document.body.clientHeight,
      };
    } else {
      // 标准模式
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
      };
    }
  }
}
```

### 获取任一元素的任意属性

```js
function getStyle(elem, prop) {
  return window.getComputedStyle
    ? window.getComputedStyle(elem, null)[prop]
    : elem.currentStyle[prop];
}
```

### 绑定事件的兼容代码

```js
function addEvent(elem, type, handle) {
  if (elem.addEventListener) {
    //非ie和非ie9
    elem.addEventListener(type, handle, false);
  } else if (elem.attachEvent) {
    //ie6到ie8
    elem.attachEvent("on" + type, function () {
      handle.call(elem);
    });
  } else {
    elem["on" + type] = handle;
  }
}
```

### 解绑事件

```js
function removeEvent(elem, type, handle) {
  if (elem.removeEventListener) {
    //非ie和非ie9
    elem.removeEventListener(type, handle, false);
  } else if (elem.detachEvent) {
    //ie6到ie8
    elem.detachEvent("on" + type, handle);
  } else {
    elem["on" + type] = null;
  }
}
```

### 取消冒泡的兼容代码

```js
function stopBubble(e) {
  if (e && e.stopPropagation) {
    e.stopPropagation();
  } else {
    window.event.cancelBubble = true;
  }
}
```

### 检验字符串是否是回文

```js
function isPalina(str) {
  if (Object.prototype.toString.call(str) !== "[object String]") {
    return false;
  }
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] != str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
```

### 检验字符串是否是回文

```js
function isPalindrome(str) {
  str = str.replace(/\W/g, "").toLowerCase();
  console.log(str);
  return str == str.split("").reverse().join("");
}
```

### 兼容 getElementsByClassName 方法

```js
Element.prototype.getElementsByClassName =
  Document.prototype.getElementsByClassName = function (_className) {
    var allDomArray = document.getElementsByTagName("*");
    var lastDomArray = [];
    function trimSpace(strClass) {
      var reg = /\s+/g;
      return strClass.replace(reg, " ").trim();
    }
    for (var i = 0; i < allDomArray.length; i++) {
      var classArray = trimSpace(allDomArray[i].className).split(" ");
      for (var j = 0; j < classArray.length; j++) {
        if (classArray[j] == _className) {
          lastDomArray.push(allDomArray[i]);
          break;
        }
      }
    }
    return lastDomArray;
  };
```

### 运动函数

```js
function animate(obj, json, callback) {
  clearInterval(obj.timer);
  var speed, current;
  obj.timer = setInterval(function () {
    var lock = true;
    for (var prop in json) {
      if (prop == "opacity") {
        current = parseFloat(window.getComputedStyle(obj, null)[prop]) * 100;
      } else {
        current = parseInt(window.getComputedStyle(obj, null)[prop]);
      }
      speed = (json[prop] - current) / 7;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

      if (prop == "opacity") {
        obj.style[prop] = (current + speed) / 100;
      } else {
        obj.style[prop] = current + speed + "px";
      }
      if (current != json[prop]) {
        lock = false;
      }
    }
    if (lock) {
      clearInterval(obj.timer);
      typeof callback == "function" ? callback() : "";
    }
  }, 30);
}
```

### 弹性运动

```js
function ElasticMovement(obj, target) {
  clearInterval(obj.timer);
  var iSpeed = 40,
    a,
    u = 0.8;
  obj.timer = setInterval(function () {
    a = (target - obj.offsetLeft) / 8;
    iSpeed = iSpeed + a;
    iSpeed = iSpeed * u;
    if (Math.abs(iSpeed) <= 1 && Math.abs(a) <= 1) {
      console.log("over");
      clearInterval(obj.timer);
      obj.style.left = target + "px";
    } else {
      obj.style.left = obj.offsetLeft + iSpeed + "px";
    }
  }, 30);
}
```

### 封装自己的 forEach 方法

```js
Array.prototype.myForEach = function (func, obj) {
  var len = this.length;
  var _this = arguments[1] ? arguments[1] : window;
  // var _this=arguments[1]||window;
  for (var i = 0; i < len; i++) {
    func.call(_this, this[i], i, this);
  }
};
```

### 封装自己的 filter 方法

```js
Array.prototype.myFilter = function (func, obj) {
  var len = this.length;
  var arr = [];
  var _this = arguments[1] || window;
  for (var i = 0; i < len; i++) {
    func.call(_this, this[i], i, this) && arr.push(this[i]);
  }
  return arr;
};
```

### 数组 map 方法

```js
Array.prototype.myMap = function (func) {
  var arr = [];
  var len = this.length;
  var _this = arguments[1] || window;
  for (var i = 0; i < len; i++) {
    arr.push(func.call(_this, this[i], i, this));
  }
  return arr;
};
```

### 数组 every 方法

```js
Array.prototype.myEvery = function (func) {
  var flag = true;
  var len = this.length;
  var _this = arguments[1] || window;
  for (var i = 0; i < len; i++) {
    if (func.apply(_this, [this[i], i, this]) == false) {
      flag = false;
      break;
    }
  }
  return flag;
};
```

### 数组 reduce 方法

```js
Array.prototype.myReduce = function (func, initialValue) {
  var len = this.length,
    nextValue,
    i;
  if (!initialValue) {
    // 没有传第二个参数
    nextValue = this[0];
    i = 1;
  } else {
    // 传了第二个参数
    nextValue = initialValue;
    i = 0;
  }
  for (; i < len; i++) {
    nextValue = func(nextValue, this[i], i, this);
  }
  return nextValue;
};
```

### 获取 url 中的参数（1）

```js
function getWindonHref() {
  var sHref = window.location.href;
  var args = sHref.split("?");
  if (args[0] === sHref) {
    return "";
  }
  var hrefarr = args[1].split("#")[0].split("&");
  var obj = {};
  for (var i = 0; i < hrefarr.length; i++) {
    hrefarr[i] = hrefarr[i].split("=");
    obj[hrefarr[i][0]] = hrefarr[i][1];
  }
  return obj;
}
```

### 数组排序

```js
// 快排 [left] + min + [right]
function quickArr(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var left = [],
    right = [];
  var pIndex = Math.floor(arr.length / 2);
  var p = arr.splice(pIndex, 1)[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= p) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // 递归
  return quickArr(left).concat([p], quickArr(right));
}
// 冒泡
function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```

### 遍历 Dom 树

```js
// 给定页面上的DOM元素,将访问元素本身及其所有后代(不仅仅是它的直接子元素)
// 对于每个访问的元素，函数讲元素传递给提供的回调函数
function traverse(element, callback) {
  callback(element);
  var list = element.children;
  for (var i = 0; i < list.length; i++) {
    traverse(list[i], callback);
  }
}
```

### 原生 js 封装 ajax

```js
function ajax(method, url, callback, data, flag) {
  var xhr;
  flag = flag || true;
  method = method.toUpperCase();
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHttp");
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(2);
      callback(xhr.responseText);
    }
  };

  if (method == "GET") {
    var date = new Date(),
      timer = date.getTime();
    xhr.open("GET", url + "?" + data + "&timer" + timer, flag);
    xhr.send();
  } else if (method == "POST") {
    xhr.open("POST", url, flag);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
  }
}
```

### 异步加载 script

```js
function loadScript(url, callback) {
  var oscript = document.createElement("script");
  if (oscript.readyState) {
    // ie8及以下版本
    oscript.onreadystatechange = function () {
      if (
        oscript.readyState === "complete" ||
        oscript.readyState === "loaded"
      ) {
        callback();
      }
    };
  } else {
    oscript.onload = function () {
      callback();
    };
  }
  oscript.src = url;
  document.body.appendChild(oscript);
}
```

### cookie 管理

```js
var cookie = {
  set: function (name, value, time) {
    document.cookie = name + "=" + value + "; max-age=" + time;
    return this;
  },
  remove: function (name) {
    return this.setCookie(name, "", -1);
  },
  get: function (name, callback) {
    var allCookieArr = document.cookie.split("; ");
    for (var i = 0; i < allCookieArr.length; i++) {
      var itemCookieArr = allCookieArr[i].split("=");
      if (itemCookieArr[0] === name) {
        return itemCookieArr[1];
      }
    }
    return undefined;
  },
};
```

### 实现 bind()方法

```js
Function.prototype.myBind = function (target) {
  var target = target || window;
  var _args1 = [].slice.call(arguments, 1);
  var self = this;
  var temp = function () {};
  var F = function () {
    var _args2 = [].slice.call(arguments, 0);
    var parasArr = _args1.concat(_args2);
    return self.apply(this instanceof temp ? this : target, parasArr);
  };
  temp.prototype = self.prototype;
  F.prototype = new temp();
  return F;
};
```

### 实现 call()方法

```js
Function.prototype.myCall = function () {
  var ctx = arguments[0] || window;
  ctx.fn = this;
  var args = [];
  for (var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  var result = ctx.fn(...args);
  delete ctx.fn;
  return result;
};
```

### 实现 apply()方法

```js
Function.prototype.myApply = function () {
  var ctx = arguments[0] || window;
  ctx.fn = this;
  if (!arguments[1]) {
    var result = ctx.fn();
    delete ctx.fn;
    return result;
  }
  var result = ctx.fn(...arguments[1]);
  delete ctx.fn;
  return result;
};
```

### 防抖

```js
function debounce(handle, delay) {
  var timer = null;
  return function () {
    var _self = this,
      _args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      handle.apply(_self, _args);
    }, delay);
  };
}
```

### 节流

```js
function throttle(handler, wait) {
  var lastTime = 0;
  return function (e) {
    var nowTime = new Date().getTime();
    if (nowTime - lastTime > wait) {
      handler.apply(this, arguments);
      lastTime = nowTime;
    }
  };
}
```

### requestAnimFrame 兼容性方法

```js
window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();
```

### cancelAnimFrame 兼容性方法

```js
window.cancelAnimFrame = (function () {
  return (
    window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    function (id) {
      window.clearTimeout(id);
    }
  );
})();
```

### jsonp 底层方法

```js
function jsonp(url, callback) {
  var oscript = document.createElement("script");
  if (oscript.readyState) {
    // ie8及以下版本
    oscript.onreadystatechange = function () {
      if (
        oscript.readyState === "complete" ||
        oscript.readyState === "loaded"
      ) {
        callback();
      }
    };
  } else {
    oscript.onload = function () {
      callback();
    };
  }
  oscript.src = url;
  document.body.appendChild(oscript);
}
```

### 获取 url 上的参数（2）

```js
function getUrlParam(sUrl, sKey) {
  var result = {};
  sUrl.replace(/(\w+)=(\w+)(?=[&|#])/g, function (ele, key, val) {
    if (!result[key]) {
      result[key] = val;
    } else {
      var temp = result[key];
      result[key] = [].concat(temp, val);
    }
  });
  if (!sKey) {
    return result;
  } else {
    return result[sKey] || "";
  }
}
```

### 格式化时间

```js
function formatDate(t, str) {
  var obj = {
    yyyy: t.getFullYear(),
    yy: ("" + t.getFullYear()).slice(-2),
    M: t.getMonth() + 1,
    MM: ("0" + (t.getMonth() + 1)).slice(-2),
    d: t.getDate(),
    dd: ("0" + t.getDate()).slice(-2),
    H: t.getHours(),
    HH: ("0" + t.getHours()).slice(-2),
    h: t.getHours() % 12,
    hh: ("0" + (t.getHours() % 12)).slice(-2),
    m: t.getMinutes(),
    mm: ("0" + t.getMinutes()).slice(-2),
    s: t.getSeconds(),
    ss: ("0" + t.getSeconds()).slice(-2),
    w: ["日", "一", "二", "三", "四", "五", "六"][t.getDay()],
  };
  return str.replace(/([a-z]+)/gi, function ($1) {
    return obj[$1];
  });
}
```

### 验证邮箱的正则表达式

```js
function isAvailableEmail(sEmail) {
  var reg = /^([\w+.])+@\w+([.]\w+)+$/;
  return reg.test(sEmail);
}
```

### 函数柯里化

```js
//是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术

function curryIt(fn) {
  var length = fn.length,
    args = [];
  var result = function (arg) {
    args.push(arg);
    length--;
    if (length <= 0) {
      return fn.apply(this, args);
    } else {
      return result;
    }
  };
  return result;
}
```

### 大数相加

```js
function sumBigNumber(a, b) {
  var res = "", //结果
    temp = 0; //按位加的结果及进位
  a = a.split("");
  b = b.split("");
  while (a.length || b.length || temp) {
    //~~按位非 1.类型转换，转换成数字 2.~~undefined==0
    temp += ~~a.pop() + ~~b.pop();
    res = (temp % 10) + res;
    temp = temp > 9;
  }
  return res.replace(/^0+/, "");
}
```

### 单例模式

```js
function getSingle(func) {
  var result;
  return function () {
    if (!result) {
      result = new func(arguments);
    }
    return result;
  };
}
```

### 加载 js || css || style

```js
const loadRes = function (name, type, fn) {
  // 加载js || css || style
  let ref;
  if (type === "js") {
    // 外部js
    ref = document.createElement("script");
    ref.setAttribute("type", "text/JavaScript");
    ref.setAttribute("src", name);
  } else if (type === "css") {
    // 外部css
    ref = document.createElement("link");
    ref.setAttribute("rel", "stylesheet");
    ref.setAttribute("type", "text/css");
    ref.setAttribute("href", name);
  } else if (type === "style") {
    // style
    ref = document.createElement("style");
    ref.innerhtml = name;
  }
  if (typeof ref !== "undefined") {
    document.getElementsByTagName("head")[0].appendChild(ref);
    ref.onload = function () {
      // 加载完成执行
      typeof fn === "function" && fn();
    };
  }
};
```

### 获取 url 参数（3）

```js
const getUrlParam = function (name) {
  // 获取url参数
  let reg = new RegExp("(^|&?)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.href.substr(1).match(reg);
  if (r != null) {
    return decodeURI(r[2]);
  }
  return undefined;
};
```

### 本地存储

```js
const store = {
  // 本地存储
  set: function (name, value, day) {
    // 设置
    let d = new Date();
    let time = 0;
    day = typeof day === "undefined" || !day ? 1 : day; // 时间,默认存储1天
    time = d.setHours(d.getHours() + 24 * day); // 毫秒
    localStorage.setItem(
      name,
      JSON.stringify({
        data: value,
        time: time,
      })
    );
  },
  get: function (name) {
    // 获取
    let data = localStorage.getItem(name);
    if (!data) {
      return null;
    }
    let obj = JSON.parse(data);
    if (new Date().getTime() > obj.time) {
      // 过期
      localStorage.removeItem(name);
      return null;
    } else {
      return obj.data;
    }
  },
  clear: function (name) {
    // 清空
    if (name) {
      // 删除键为name的缓存
      localStorage.removeItem(name);
    } else {
      // 清空全部
      localStorage.clear();
    }
  },
};
```

### cookie 操作【set，get，del】

```js
const cookie = {
  // cookie操作【set，get，del】
  set: function (name, value, day) {
    let oDate = new Date();
    oDate.setDate(oDate.getDate() + (day || 30));
    document.cookie = name + "=" + value + ";expires=" + oDate + "; path=/;";
  },
  get: function (name) {
    let str = document.cookie;
    let arr = str.split("; ");
    for (let i = 0; i < arr.length; i++) {
      let newArr = arr[i].split("=");
      if (newArr[0] === name) {
        return newArr[1];
      }
    }
  },
  del: function (name) {
    this.set(name, "", -1);
  },
};
```

### Js 获取元素样式【支持内联】

```js
const getRealStyle = function (obj, styleName) {
  // Js获取元素样式【支持内联】
  var realStyle = null;
  if (obj.currentStyle) {
    realStyle = obj.currentStyle[styleName];
  } else if (window.getComputedStyle) {
    realStyle = window.getComputedStyle(obj, null)[styleName];
  }
  return realStyle;
};
```

### 时间格式化

```js
const formatDate = function (fmt, date) {
  // 时间格式化 【'yyyy-MM-dd hh:mm:ss',时间】
  if (typeof date !== "object") {
    date = !date ? new Date() : new Date(date);
  }
  var o = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};
```

### 原生 ajax 操作（2）

```js
const ajax = function (conf) {
  // ajax操作
  let url = conf.url,
    data = conf.data,
    senData = [], // 封装后的数据
    async = conf.async !== undefined ? conf.async : true, // ture为异步请求
    type = conf.type || "get", // 默认请求方式get
    dataType = conf.dataType || "json",
    contenType = conf.contenType || "application/x-www-form-urlencoded",
    success = conf.success,
    error = conf.error,
    isForm = conf.isForm || false, // 是否formdata
    header = conf.header || {}, // 头部信息
    xhr = ""; // 创建ajax引擎对象
  if (data == null) {
    senData = "";
  } else if (typeof data === "object" && !isForm) {
    // 如果data是对象，转换为字符串
    for (var k in data) {
      senData.push(encodeURIComponent(k) + "=" + encodeURIComponent(data[k]));
    }
    senData = senData.join("&");
  } else {
    senData = data;
  }
  try {
    xhr = new ActiveXObject("microsoft.xmlhttp"); // IE内核系列浏览器
  } catch (e1) {
    try {
      xhr = new XMLHttpRequest(); // 非IE内核浏览器
    } catch (e2) {
      if (error != null) {
        error("不支持ajax请求");
      }
    }
  }
  xhr.open(type, type !== "get" ? url : url + "?" + senData, async);
  if (type !== "get" && !isForm) {
    xhr.setRequestHeader("content-type", contenType);
  }
  for (var h in header) {
    xhr.setRequestHeader(h, header[h]);
  }
  xhr.send(type !== "get" ? senData : null);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        if (dataType === "json" && success != null) {
          let res = "";
          try {
            res = eval("(" + xhr.responseText + ")");
          } catch (e) {
            console.log(e);
          }
          success(res); // 将json字符串转换为js对象
        }
      } else {
        if (error != null) {
          error("通讯失败!" + xhr.status);
        }
      }
    }
  };
};
```

### fetch 请求的封装

```js
const fetch = function (url, setting) {
  // fetch请求的封装
  let opts = {
    // 设置参数的初始值
    method: (setting.method || "GET").toUpperCase(), // 请求方式
    headers: setting.headers || {}, // 请求头设置
    credentials: setting.credentials || true, // 设置cookie是否一起发送
    body: setting.body || {},
    mode: setting.mode || "no-cors", // 可以设置 cors, no-cors, same-origin
    redirect: setting.redirect || "follow", // follow, error, manual
    cache: setting.cache || "default", // 设置 cache 模式 (default, reload, no-cache)
  };
  let dataType = setting.dataType || "json"; // 解析方式
  let data = setting.data || ""; // 参数
  let paramsFormat = function (obj) {
    // 参数格式
    var str = "";
    for (var i in obj) {
      str += `${i}=${obj[i]}&`;
    }
    return str.split("").slice(0, -1).join("");
  };

  if (opts.method === "GET") {
    url = url + (data ? `?${paramsFormat(data)}` : "");
  } else {
    setting.body = data || {};
  }
  return new Promise((resolve, reject) => {
    fetch(url, opts)
      .then(async (res) => {
        let data =
          dataType === "text"
            ? await res.text()
            : dataType === "blob"
            ? await res.blob()
            : await res.json();
        resolve(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
```

### 设备判断：android、ios、web

```js
const isDevice = function () {
  // 判断是android还是ios还是web
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/iPhone\sOS/i) === "iphone os" || ua.match(/iPad/i) === "ipad") {
    // ios
    return "iOS";
  }
  if (ua.match(/Android/i) === "android") {
    return "Android";
  }
  return "Web";
};
```

### 判断是否为微信

```js
const isWx = function () {
  // 判断是否为微信
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) === "micromessenger") {
    return true;
  }
  return false;
};
```

### 文本复制功能

```js
const copyTxt = function (text, fn) {
  // 复制功能
  if (typeof document.execCommand !== "function") {
    console.log("复制失败，请长按复制");
    return;
  }
  var dom = document.createElement("textarea");
  dom.value = text;
  dom.setAttribute("style", "display: block;width: 1px;height: 1px;");
  document.body.appendChild(dom);
  dom.select();
  var result = document.execCommand("copy");
  document.body.removeChild(dom);
  if (result) {
    console.log("复制成功");
    typeof fn === "function" && fn();
    return;
  }
  if (typeof document.createRange !== "function") {
    console.log("复制失败，请长按复制");
    return;
  }
  var range = document.createRange();
  var div = document.createElement("div");
  div.innerhtml = text;
  div.setAttribute("style", "height: 1px;fontSize: 1px;overflow: hidden;");
  document.body.appendChild(div);
  range.selectNode(div);
  var selection = window.getSelection();
  console.log(selection);
  if (selection.rangeCount > 0) {
    selection.removeAllRanges();
  }
  selection.addRange(range);
  document.execCommand("copy");
  typeof fn === "function" && fn();
  console.log("复制成功");
};
```

### 判断是否是一个数组

```js
const isArray = function (arr) {
  // 判断是否是一个数组
  return Object.prototype.toString.call(arr) === "[object Array]";
};
```

### 判断两个数组是否相等

```js
const arrayEqual = function (arr1, arr2) {
  //判断两个数组是否相等
  if (arr1 === arr2) return true;
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
```

### 时间与时间戳转换

```js
const stamp = {
  // 时间，时间戳转换
  getTime: function (time) {
    // 时间转10位时间戳
    let date = time ? new Date(time) : new Date();
    return Math.round(date.getTime() / 1000);
  },
  timeToStr: function (time, fmt) {
    // 10位时间戳转时间
    return new Date(time * 1000).pattern(fmt || "yyyy-MM-dd");
  },
};
```

### 常用正则验证

```js
const checkStr = function(str, type) { // 常用正则验证，注意type大小写
  switch (type) {
    case 'phone': // 手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str)
    case 'tel': // 座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
    case 'card': // SFZ
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str)
    case 'pwd': // 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str)
    case 'postal': // 邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str)
    case 'QQ': // QQ号
      return /^[1-9][0-9]{4,9}$/.test(str)
    case 'email': // 邮箱
      return /^[\w-]+(.[\w-]+)*@[\w-]+(.[\w-]+)+$/.test(str)
    case 'money': // 金额(小数点2位)
      return /^\d*(?:.\d{0,2})?$/.test(str)
    case 'URL': // 网址
      return /(http|ftp|https)://[\w-_]+(.[\w-_]+)+([\w-.,@?^=%&:/~+#]*[\w-@?^=%&/~+#])?/.test(str)
    case 'IP': // IP
      return /((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))/.test(str)
    case 'date': // 日期时间
      return /^(\d{4})-(\d{2})-(\d{2}) (\d{2})(?::\d{2}|:(\d{2}):(\d{2}))$/.test(str) ||
        /^(\d{4})-(\d{2})-(\d{2})$/.test(str)
    case 'number': // 数字
      return /^[0-9]$/.test(str)
    case 'english': // 英文
      return /^[a-zA-Z]+$/.test(str)
    case 'chinese': // 中文
      return /^[\u4E00-\u9FA5]+$/.test(str)
    case 'lower': // 小写
      return /^[a-z]+$/.test(str)
    case 'upper': // 大写
      return /^[A-Z]+$/.test(str)
    case 'HTML': // HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str)
    default:
      return true
  }
}
```

### 是否为 PC 端

```js
const isPC = function () {
  // 是否为PC端
  let userAgentInfo = navigator.userAgent;
  let Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ];
  let flag = true;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};
```

### 去除字符串空格

```js
const trim = function (str, type) {
  // 去除空格， type:  1-所有空格  2-前后空格  3-前空格 4-后空格
  type = type || 1;
  switch (type) {
    case 1:
      return str.replace(/\s+/g, "");
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
  }
};
```

### 字符串大小写转换

```js
const changeCase = function (str, type) {
  // 字符串大小写转换 type:  1:首字母大写  2：首页母小写  3：大小写转换  4：全部大写  5：全部小写
  type = type || 4;
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function (word) {
        return (
          word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
        );
      });
    case 2:
      return str.replace(/\b\w+\b/g, function (word) {
        return (
          word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
        );
      });
    case 3:
      return str
        .split("")
        .map(function (word) {
          if (/[a-z]/.test(word)) {
            return word.toUpperCase();
          } else {
            return word.toLowerCase();
          }
        })
        .join("");
    case 4:
      return str.toUpperCase();
    case 5:
      return str.toLowerCase();
    default:
      return str;
  }
};
```

### 过滤 html 代码

```js
const filterTag = function (str) {
  // 过滤html代码(把<>转换)
  str = str.replace(/&/gi, "&");
  str = str.replace(/</gi, "<");
  str = str.replace(/>/gi, ">");
  str = str.replace(" ", " ");
  return str;
};
```

### 生成随机数范围

```js
const random = function (min, max) {
  // 生成随机数范围
  if (arguments.length === 2) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  } else {
    return null;
  }
};
```

### 阿拉伯数字转中文大写数字

```js
const numberToChinese = function (num) {
  // 将阿拉伯数字翻译成中文的大写数字
  let AA = new Array(
    "零",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十"
  );
  let BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
  let a = ("" + num).replace(/(^0*)/g, "").split(".");
  let k = 0;
  let re = "";
  for (let i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re;
        break;
      case 4:
        if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$").test(a[0])) {
          re = BB[4] + re;
        }
        break;
      case 8:
        re = BB[5] + re;
        BB[7] = BB[5];
        k = 0;
        break;
    }
    if (k % 4 === 2 && a[0].charAt(i + 2) !== 0 && a[0].charAt(i + 1) === 0) {
      re = AA[0] + re;
    }
    if (a[0].charAt(i) !== 0) {
      re = AA[a[0].charAt(i)] + BB[k % 4] + re;
    }
    k++;
  }
  if (a.length > 1) {
    // 加上小数部分(如果有小数部分)
    re += BB[6];
    for (let i = 0; i < a[1].length; i++) {
      re += AA[a[1].charAt(i)];
    }
  }
  if (re === "一十") {
    re = "十";
  }
  if (re.match(/^一/) && re.length === 3) {
    re = re.replace("一", "");
  }
  return re;
};
```

### 原生 dom 操作

```js
const dom = {
  $: function (selector) {
    let type = selector.substring(0, 1);
    if (type === "#") {
      if (document.querySelecotor) return document.querySelector(selector);
      return document.getElementById(selector.substring(1));
    } else if (type === ".") {
      if (document.querySelecotorAll)
        return document.querySelectorAll(selector);
      return document.getElementsByClassName(selector.substring(1));
    } else {
      return document[
        "querySelectorAll" ? "querySelectorAll" : "getElementsByTagName"
      ](selector);
    }
  },
  hasClass: function (ele, name) {
    /* 检测类名 */
    return ele.className.match(new RegExp("(s|^)" + name + "(s|$)"));
  },
  addClass: function (ele, name) {
    /* 添加类名 */
    if (!this.hasClass(ele, name)) ele.className += " " + name;
  },
  removeClass: function (ele, name) {
    /* 删除类名 */
    if (this.hasClass(ele, name)) {
      let reg = new RegExp("(s|^)" + name + "(s|$)");
      ele.className = ele.className.replace(reg, "");
    }
  },
  replaceClass: function (ele, newName, oldName) {
    /* 替换类名 */
    this.removeClass(ele, oldName);
    this.addClass(ele, newName);
  },
  siblings: function (ele) {
    /* 获取兄弟节点 */
    console.log(ele.parentNode);
    let chid = ele.parentNode.children,
      eleMatch = [];
    for (let i = 0, len = chid.length; i < len; i++) {
      if (chid[i] !== ele) {
        eleMatch.push(chid[i]);
      }
    }
    return eleMatch;
  },
  getByStyle: function (obj, name) {
    /* 获取行间样式属性 */
    if (obj.currentStyle) {
      return obj.currentStyle[name];
    } else {
      return getComputedStyle(obj, false)[name];
    }
  },
  domToStirng: function (htmlDOM) {
    /* DOM转字符串 */
    var div = document.createElement("div");
    div.appendChild(htmlDOM);
    return div.innerHTML;
  },
  stringToDom: function (htmlString) {
    /* 字符串转DOM */
    var div = document.createElement("div");
    div.innerHTML = htmlString;
    return div.children[0];
  },
};
```

### 判断图片加载完成

```js
const imgLoadAll = function (arr, callback) {
  // 图片加载
  let arrImg = [];
  for (let i = 0; i < arr.length; i++) {
    let img = new Image();
    img.src = arr[i];
    img.onload = function () {
      arrImg.push(this);
      if (arrImg.length == arr.length) {
        callback && callback();
      }
    };
  }
};
```

### 音频加载完成操作

```js
const loadAudio = function (src, callback) {
  // 音频加载
  var audio = new Audio(src);
  audio.onloadedmetadata = callback;
  audio.src = src;
};
```

### 光标所在位置插入字符

```js
const insertAtCursor = function (dom, val) {
  // 光标所在位置插入字符
  if (document.selection) {
    dom.focus();
    let sel = document.selection.createRange();
    sel.text = val;
    sel.select();
  } else if (dom.selectionStart || dom.selectionStart == "0") {
    let startPos = dom.selectionStart;
    let endPos = dom.selectionEnd;
    let restoreTop = dom.scrollTop;
    dom.value =
      dom.value.substring(0, startPos) +
      val +
      dom.value.substring(endPos, dom.value.length);
    if (restoreTop > 0) {
      dom.scrollTop = restoreTop;
    }
    dom.focus();
    dom.selectionStart = startPos + val.length;
    dom.selectionEnd = startPos + val.length;
  } else {
    dom.value += val;
    dom.focus();
  }
};
```

### 图片地址转 base64

```js
const getBase64 = function (img) {
  //传入图片路径，返回base64，使用getBase64(url).then(function(base64){},function(err){});
  let getBase64Image = function (img, width, height) {
    //width、height调用时传入具体像素值，控制大小,不传则默认图像大小
    let canvas = document.createElement("canvas");
    canvas.width = width ? width : img.width;
    canvas.height = height ? height : img.height;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    let dataURL = canvas.toDataURL();
    return dataURL;
  };
  let image = new Image();
  image.crossOrigin = "";
  image.src = img;
  let deferred = $.Deferred();
  if (img) {
    image.onload = function () {
      deferred.resolve(getBase64Image(image));
    };
    return deferred.promise();
  }
};
```

### base64 图片下载功能

```js
const downloadFile = function (base64, fileName) {
  //base64图片下载功能
  let base64ToBlob = function (code) {
    let parts = code.split(";base64,");
    let contentType = parts[0].split(":")[1];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;
    let uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], {
      type: contentType,
    });
  };
  let aLink = document.createElement("a");
  let blob = base64ToBlob(base64); //new Blob([content]);
  let evt = document.createEvent("HTMLEvents");
  evt.initEvent("click", true, true); //initEvent不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
  aLink.download = fileName;
  aLink.href = URL.createObjectURL(blob);
  aLink.click();
};
```

### 浏览器是否支持 webP 格式图片

```js
const isSupportWebP = function () {
  //判断浏览器是否支持webP格式图片
  return (
    !![].map &&
    document
      .createElement("canvas")
      .toDataURL("image/webp")
      .indexOf("data:image/webp") == 0
  );
};
```

### url 参数转对象

```js
const parseQueryString = function (url) {
  //url参数转对象
  url = !url ? window.location.href : url;
  if (url.indexOf("?") === -1) {
    return {};
  }
  let search =
    url[0] === "?" ? url.substr(1) : url.substring(url.lastIndexOf("?") + 1);
  if (search === "") {
    return {};
  }
  search = search.split("&");
  let query = {};
  for (let i = 0; i < search.length; i++) {
    let pair = search[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
};
```

### 对象序列化【对象转 url 参数】

```js
const stringfyQueryString = function (obj) {
  //对象序列化【对象转url参数】
  if (!obj) return "";
  let pairs = [];
  for (let key in obj) {
    let value = obj[key];
    if (value instanceof Array) {
      for (let i = 0; i < value.length; ++i) {
        pairs.push(
          encodeURIComponent(key + "[" + i + "]") +
            "=" +
            encodeURIComponent(value[i])
        );
      }
      continue;
    }
    pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
  }
  return pairs.join("&");
};
```

### H5 软键盘缩回、弹起回调

```js
const h5Resize = function (downCb, upCb) {
  //当软件键盘弹起会改变当前 window.innerHeight，监听这个值变化 [downCb 当软键盘弹起后，缩回的回调,upCb 当软键盘弹起的回调]
  var clientHeight = window.innerHeight;
  downCb = typeof downCb === "function" ? downCb : function () {};
  upCb = typeof upCb === "function" ? upCb : function () {};
  window.addEventListener("resize", () => {
    var height = window.innerHeight;
    if (height === clientHeight) {
      downCb();
    }
    if (height < clientHeight) {
      upCb();
    }
  });
};
```

### 函数防抖

```js
const debounce = function (func, wait, immediate) {
  //函数防抖[func 函数,wait 延迟执行毫秒数,immediate true 表立即执行,false 表非立即执行,立即执行是触发事件后函数会立即执行，然后n秒内不触发事件才能继续执行函数的效果]
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
  };
};
```

### 函数节流

```js
const throttle = function(func, wait ,type) { //函数节流 [func 函数 wait 延迟执行毫秒数 type 1 表时间戳版，2 表定时器版]
    if(type===1){
        let previous = 0;
    }else if(type===2){
        let timeout;
    }
    return function() {
        let context = this;
        let args = arguments;
        if(type===1){
            let now = Date.now();
            if (now - previous > wait) {
                func.apply(context, args);
                previous = now;
            }
        }else if(type===2){
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    func.apply(context, args)
                }, wait)
            }
        }
    }
```
