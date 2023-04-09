# Map、Set、WeakMap、WeakSet   强引用与弱引用

* Obejct 和 Map 的区别;
* Object 中 key 的顺序;
* Map 和 Set 的基本使用;
* WeakMap 和 WeakSet 使用场景;
[[toc]]

### Map
在 ECMAScript 6 以前,在 JavaScript 中实现 "键/值"式存储可以使用 Object来方便高效地完成,也就是使用对象属性作为键,再使用属性来引用值。因此 ECMAScript 6 新增了 Map 集合类型。

Map 对象保存键值对,并且能够记住键的原始插入顺序,任何值(对象或者基本类型)都可以作为一个键或一个值。Map 的大多数特性都可以通过 Object 类型实现,但二者之间还是存在一些细微的差异。具体实践中使用哪一个,还是值得细细甄别。



使用 new 关键字和 Map 构造函数可以创建一个空映射:
```js
const map = new Map();
```

如果想在创建的同时初始化实例,可以给 Map 构造函数传入一个可迭代对象,需要包含 "键/值" 对数组。可迭代对象中途的每个 "键值" 对都会按照迭代顺序插入到新映射实例中:
```js
const map = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"],
]);
console.log(map.size); // 3
```
通过 size 属性可以获取 Map 对象的键值对的个数,这在 Object 的键值对需要手动计算。

#### has 和 get
和 Object 类似,Map 对象也可以获取对象是否有这个键以及获取这个键的值,在 Map 中提供了 `has(...) 方法和 get(...)`实例方法。其中 has(...) 方法的返回值是一个布尔值,用来表明 Map 对象中是否存在指定的键 key 关联的值,而 get(...) 返回与指定的键 key 关联的值,若不存在关联的值,则返回 undefined,代码如下所示:
```js
const map = new Map([
  [1, "val1"],
  [2, "val2"],
  [3, "val3"],
]);

console.log(map.has("moment")); // false
console.log(map.has("1")); // false
console.log(map.has(1)); // true
console.log(map.get(1)); // val1
console.log(map.get(7)); // undefined
```


#### set

在初始化之后,可以使用 set(...) 方法添加 键/值 对,该方法两个参数,一个是 key 作为要添加到 Map 对象的元素的键,该值可以是任何数据类型,一个是 value 作为要添加到 Map 对象的元素的值,该值可以是任何数据类型,代码示例如下:
```js
const map = new Map([["1", "moment"]]);

map.set("1", "你小子");
map.set(-0, "111");

console.log(map); // Map(2) { '1' => '你小子', 0 => '111' }
```
值得注意的是,Map 中的键是唯一的,当初始化时或者 set(...) 方法添加的键,它会首先通过 forEach(...) 方法进行遍历,通过当前的键 key 去查找值 value,如果存在,就重新赋值,如果不存在就添加一个键值对,如果传进来的键是 -0 则会把键设置为 +0 再赋值。

#### delete
delete(...) 方法用于移除 Map 对象中指定的元素。依然是通过遍历整个记录,查找 delete(...) 方法传进来的参数,如果不为空,则将当前的键和值设为空,并且返回 true,如果不存在这个 key,则返回 false,示例代码如下:
```js
const map = new Map([
  ["1", "moment"],
  ["2", "你小子"],
]);

console.log(map); // Map(2) { '1' => 'moment', '2' => '你小子' }
console.log(map.delete("1")); // true
console.log(map.delete(777)); // false
console.log(map); // Map(1) { '2' => '你小子' }
```

#### clear
clear(...) 方法会移除 Map 对象中的所有元素,该方法首先通过遍历整个 Map 实例,并且将所有的键和值设为空,最后返回的值是 undefined,示例代码如下:
```js
const map = new Map([
  ["1", "moment"],
  ["2", "你小子"],
]);

console.log(map.clear()); // undefined
```
#### 顺序与迭代
与 Object 类型相比的一个主要差异是,Map 实例会维护键值对的插入顺序,因此可以根据插入顺序执行迭代操作。 映射实例可以提供一个迭代器(Iterator)能以插入顺序生成 [key, value] 形式的数组。可以 通过 entries(...) 方法或者 Symbol.iterator 属性,它引用 entries() 取得这个迭代器:

```js
const m = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"],
]);
console.log(m.entries === m[Symbol.iterator]); // true
for (const [key, value] of m.entries()) console.log(key, value);
for (const [key, value] of m[Symbol.iterator]()) console.log(key, value);
// key1 val1
// key2 val2
// key3 val3
```

因为 entries() 是默认迭代器,所以可以直接对映射实例使用扩展操作,把映射转换为数组:
```js
const m = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"],
]);

console.log(Array.from(m));
console.log([...m]);
// [
//   ["key1", "val1"],
//   ["key2", "val2"],
//   ["key3", "val3"],
// ];

```

#### forEach
如果不使用迭代器,而是使用回调方式,则可以调用 forEach(...) 方法并传入回调,依次迭代每个 键/值 对。传入的回调接收可选的第二个参数,这个参数用于重写回调内部 this 的值:
```js
const m = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"],
]);

m.forEach((value, key, map) => {
  console.log(key, value, map);
});
// key1 val1 Map(3) { 'key1' => 'val1', 'key2' => 'val2', 'key3' => 'val3' }
// key2 val2 Map(3) { 'key1' => 'val1', 'key2' => 'val2', 'key3' => 'val3' }
// key3 val3 Map(3) { 'key1' => 'val1', 'key2' => 'val2', 'key3' => 'val3' }
```

在上面代码中,key 代表每个迭代的键,value 代表每个迭代的值,而 map 代表当前正在迭代的 Map 实例。
#### keys
keys(...) 返回一个引用的迭代器对象。它包含按照顺序插入 Map 实例对象中每个元素的 key 值。具体代码实例如下:
```js
const m = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"],
]);

console.log(m.keys()); // [Map Iterator] { 'key1', 'key2', 'key3' }
```
#### values
values(...) 方法返回一个新的迭代器对象。它包含按顺序插入 Map 实例对象中每个元素的 value 值,具体代码如下:
```js
const m = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"],
]);

console.log(m.values()); // [Map Iterator] { 'val1', 'val2', 'val3' }
```

### Map 和 Object 的区别
了解 Map 和 Object 的区别对我们开发者很重要,这不仅是面试中经常被问到的话题,而且对于在乎内存和性能的开发者来说,Object 和 Map 之间确实存在着显著的差别。


#### 继承
Map 对象继承自 Obeject 对象,你可以通过原型继承去调用 Object 身上的原型方法,例如:
```js
const m = new Map([["key3", "val3"]]);
console.log(m.toString()); // [object Map]
```
在上面的代码,map 是 Map 对象的实例对象,而 Map 对象继承自 Obeject,而创建的普通对象是 Obejct 的实例对象,我们只需查找一次便可以查找到顶层对象 Object,具体代码如下所示:
```js
const m = new Map([["key3", "val3"]]);
const obj = {};
console.log(m.__proto__.__proto__.constructor === obj.__proto__.constructor);
// true
```

#### 创建实例
创建 Map 实例只有一种方式,就是使用其内置的构造函数以及 new 语法,而创建对象则有多种方法,具体代码示例如下:
```js
const m = new Map([["key", "value"]]);

const object = {...};
const object = new Object();
const object = Object.create(null);
```
而通过使用 Object.create(null) 来创建的对象,它可以生成一个不继承 Object.prototyoe 的实例对象。

#### 迭代
通过 Map 创建出来的实例对象能通过 for...of 方法进行遍历,而普通对象则不能,但是能通过 for...in 方法去枚举所有的 key,要想查看当前对象是否可以被 for...of 遍历,我们通过查看该对象本身是否有定义了 Symbol.Iterator 方法,,如果存在则可以变遍历:
```js
const map = new Map();
const object = {};

console.log(map[Symbol.iterator]); // [Function: entries]
console.log(object[Symbol.iterator]); // undefined
```
通过上面的代码可以看出,普通的对象并没有定义 Symbol.Iterator 方法,输出为 undefined。详情可以看这篇文章 跳转链接。
普通对象可以眼使用Object.keys(obj)只能获取所有 key 并进行遍历:
```js
const object = {
  a: 1,
  1: 2,
  foo: "moment",
};

console.log(Object.keys(object)); // [ '1', 'a', 'foo' ]
```
该方法返回一个由 key 组成的数组,可以通过该数组进行遍历。

#### key的有序和无序
在 Map 中,key 的顺序是按插入时间进行排序的:
```js
const m = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"],
  [1, "val4"],
]);

console.log(...m.keys()); // key1 key2 key3 1
```
但是在普通对象中就不同了,在最开始学习 JavaScript 的时候,我们一直被灌输 Object 中的 key 是无序的,不可靠的,而与之相对的是 Map 实例会维护 键/值对 的插入顺序。
在一些现代的浏览器当中,key 的输出顺序是可以预测的:


如果当前的 key 是整数或者 0,就按照自然数的大小进行排序;


如果当前的 key 是字符类型的,则按照加入的时间顺序进行排序;


如果当前的 key 是 Symbol 类型的,则按照加入的时间顺序进行排序;


如果是以上类型的相互结合,结果是先按照自然数升序进行排序,然后按照非数字的 string 的加入时间排序,然后按照 Symbol 的时间顺序进行排序,也就是说他们会先按照上述的分类进行拆分,先按照自然数、非自然数、Symbol 的顺序进行排序,然后根据上述三种类型下内部的顺序进行排序。

具体代码演示如下所示:
```js
const object1 = {
  1: 111,
  3: 3333,
  2: 222,
};

const object2 = {
  a: 111,
  c: 3333,
  b: 222,
};

const object3 = {
  [Symbol("1")]: "first",
  [Symbol("3")]: "second",
  [Symbol("2")]: "last",
};

const result = {
  [Symbol("你小子")]: "moment",
  1: 1111,
  aaa: "牛逼",
};

console.log(Reflect.ownKeys(object1)); // [ '1', '2', '3' ]
console.log(Reflect.ownKeys(object2)); // [ 'a', 'c', 'b' ]
console.log(Reflect.ownKeys(object3)); // [ Symbol(1), Symbol(3), Symbol(2) ]
console.log(Reflect.ownKeys(result)); // [ '1', 'aaa', Symbol(你小子) ]
```

#### 选择 Object 还是 Map
至于如何选择,我们可以从四个方面进行考虑,分别是 内存占用、插入性能、查找速度、删除性能,详情请看以下:


内存占用: Object 和 Map 的工程级实现在不同浏览器间存在明显差异,但存储单个 键/值对 所占用的内存数量 都会随键的数量线性增加。批量添加或删除 键/值对 则取决于各浏览器对该类型内存分配的工程实现。不同浏览器的情况不同,但给定固定大小的内存,Map 大约可以比 Object 多存储 50%的 键/值对。


插入性能: 向 Object 和 Map 中插入新 键/值对 的消耗大致相当,不过插入 Map 在所有浏览器中一般会稍微快一点儿。对这两个类型来说,插入速度并不会随着 键/值对 数量而线性增加。如果代码涉及大量插入操 作,那么显然 Map 的性能更佳。这也是我们在刷leetcode算法的时候多是使用 Map 的原因之一了。


查找速度: 与插入不同,从大型 Object 和 Map 中查找 键/值对 的性能差异极小,但如果只包含少量 键/值对, 则 Object 有时候速度更快。在把 Object 当成数组使用的情况下（比如使用连续整数作为属性），浏 览器引擎可以进行优化,在内存中使用更高效的布局。这对 Map 来说是不可能的。对这两个类型而言,查找速度不会随着 键/值对 数量增加而线性增加。如果代码涉及大量查找操作,那么某些情况下可能选择 Object 更好一些。


删除性能: 使用 delete 删除 Object 属性的性能一直以来饱受诟病,目前在很多浏览器中仍然如此。为此,出现了一些伪删除对象属性的操作,包括把属性值设置为 undefined 或 null。但很多时候,这都是一种讨厌的或不适宜的折中。而对大多数浏览器引擎来说,Map 的 delete(...) 操作都比插入和查找更快。如果代码涉及大量删除操作,那么毫无疑问应该选择 Map。



以上四点摘抄自 JavaScript高级程序设计第四版...

#### Object和Map的应用场景
即使 Map 相对于 Object 有很多优点,但是依然存在某些使用 Object 会更好的场景,毕竟 Object 是 JavaScript 中最基础的概念。

如果你知道所有的 key,它们都为字符串或整数或是 Symbol 类型,你需要一个简单的结构去存储这些数据,Object 是一个非常好的选择。构建一个 Object 并通过知道的特定 key 获取元素的性能要优于 Map;
如果需要在对象中保持自己独有的逻辑和属性,只能使用 Object,Object 能维护自己的 this:
```js
const info = {
  nickname: "xun",
  age: "18",
  address: "广州",
  detail: function () {
    return `${this.nickname} 现在居住在广州,已经${this.age}岁了`;
  },
};

console.log(info.detail()); // xun 现在居住在广州,已经18岁了
```

JSON直接支持 Object,但尚未支持 Map。因此,在某些我们必须使用 JSON 的情况下,应将Object视为首选:
```js
const m = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"],
  [1, "val4"],
]);

const info = {
  nickname: "xun",
  age: "18",
  address: "广州",
};

console.log(JSON.stringify(m)); // {}

console.log(JSON.stringify(info));
// {"nickname":"xun","age":"18","address":"广州"}
```
### Set
ECMAScript 6 新增的 Set 是一种新集合类型,为这门语言带来集合数据结构。Set 在很多方面都像是加强的 Map,这是因为它们的大多数 API 和行为都是共有的。
#### Set的基本使用
因为 Set 的 API 和 Map 的一致,这里就不详细讲了,值得注意的是 Set 对象没有 get(...) 方法,使用代码如下:
```js
const s = new Set(["val1", "val2", "val3"]);
s.add(111);
s.delete("val1");

console.log(s.has("val1")); // true
console.log(s.values()); // [Set Iterator] { 'val2', 'val3', 111 }
console.log(s.keys()); // [Set Iterator] { 'val2', 'val3', 111 }

s.forEach((key, value) => {
  console.log(key, value);
});
// val2 val2
// val3 val3
// 111 111
```
#### Set使用场景
在日常开发中,我们可以通过使用 Set 进行数组去重:
```js
const result = [1, 2, 3, 4, 5, 5, 6, 7, 7, 7, 8];

console.log([...new Set(result)]); // [1, 2, 3, 4, 5, 6, 7, 8];
```
### WeakMap
es6 新增的 WeakMap 对象是一种新的集合类型,它一组 键/值对 的集合,其中的键是弱引用的。其键必须是对象,而值可以是任意的。WeakMap 是 Map 的兄弟类型,其 API 也是 Map 的子集。WeakMap 中的 weak(弱),描述的是 JavaScript 垃圾回收程序对待 弱映射 中键的方式。
基本使用
WeakMap 是一个构造函数,所以在实例化的时候必须使用 new 关键字,否则会报 TypeError 的错误:
```js
const m = WeakMap(); // TypeError: Constructor WeakMap requires 'new' at WeakMap
```
如果想在实例化的时候填充弱映射,则构造函数可以接收一个可迭代对象,其中需要包含 键/值对 数组:
```js
const obj1 = { nickname: 77 };
const obj2 = { nickname: "moment" };

const map = new WeakMap([
  [obj1, 77],
  [obj2, "moment"],
]);

console.log(map.get(obj1)); // 77
console.log(map.get(obj2)); // moment
```
但是如果键使用的是原始值则会报错:
```js
const m = new WeakMap();
m.set("1", "1111");
const m = new WeakMap();
m.set("1", "1111");
// TypeError: Invalid value used as weak map key at WeakMap.set
```
WeakMap 有以下的方法可供使用,和 Map 对应的 API 的功能一致:

#### 弱键
WeakMap 中 weak 表示弱映射的键是 "弱弱地拿着" 的。意思就是,这些键不属于正式的引用,不会阻止垃圾回收。但要注意的是,弱映射中值的引用可不是"弱弱地拿着" 的。只要键存在,键/值对 就会存在于映射中,并被当作对值的引用,因此就不会被当作垃圾回收。
来看下面的例子:
```js
const map = new WeakMap();

map.set({}, "777");
```
set(...) 方法初始化了一个新对象并将它用作一个字符串的键。因为没有指向这个对象的其他引用,所以当这行代码执行完成后,这个对象键就会被当作垃圾回收。然后,这个 键/值对 就从弱映射中消失了,使其成为一个空映射。在这个例子中,因为值也没有被引用,所以这对 键/值 被破坏以后,值本身也会成为垃圾回收的目标。也就是说,WeakMap 对某个对象的引用,不会影响其垃圾回收,如果引用的键被垃圾回收清除掉了,其对应的 键/值对 也会被清除掉。
```js
const wm = new WeakMap();
const container = {
  key: {},
};
wm.set(container.key, "val");

function removeReference() {
  container.key = null;
}
```
在上面的例子中,container 对象维护着一个对弱映射键的引用,因此这个对象键不会成为垃圾回收的目 标。不过,如果调用了 removeReference(),就会摧毁键对象的最后一个引用,垃圾回收程序就可以把这个键/值对 清理掉。
WeakMap 的结构是特殊且有效的,其用于映射的 key 只有在其没有被回收时才是有效的,正由于这样的弱引用,WeakMap 的 key 是不可枚举的(没有方法能给出所有的 key)。如果 key 是可枚举的话,其列表将会受垃圾回收机制的影响,从而得到不确定的结果,因为某个键名是否存在不可预测,跟垃圾回收机制是否运行相关,这一秒可以取得键名,下一秒垃圾回收机制突然运行了,这个键名就没了🤣🤣🤣
WeakMap示例
因为 WeakMap 示例不会妨碍垃圾回收,所以非常适合保存关联元数据,来看下面这个例子:
```js
const button = document.querySelector("button");

const result = [button, "你小子"];

result=null
```
当我们不需要的时候需要手动设置 null 对其进行接触引用,这样释放引用的写法很不方便,造成没必要的代码.一旦忘了写,就会造成内存泄漏。
WeakMap 的诞生就很好的解决了这个问题,一旦不再需要,WeakMap 里面的键名对象和所对应的 键/值对会自动消失,不用手动删除引用,具体代码实例如下:
```js
const map = new WeakMap();

const button = document.querySelector("button");

map.set(button, "又是你小子");
console.log(map.get(button)); // 又是你小子
```
在这个时候 WeakMap 里面对 button 的引用就是弱引用,不会被计入垃圾回收机制,但当节点从 DOM 树中被删除后,垃圾回收程序就可以立即释放其内存,WeakMap 中的键也就不存在了。

再举一个例子🌰🌰🌰当我们需要在不修改原有对象的情况下存储某些属性等,但是又不想管理这些数据是,可以使用 WeakMap:
```js
const cache = new WeakMap();

function storage(obj) {
  if (cache.has(obj)) return cache.get(obj);
  else {
    const length = Object.keys(obj).length;
    cache.set(obj, length);

    return length;
  }
}
```
### WeakSet
WeakSet 对象也是和前面的 WeakMap 一样,不会影响垃圾回收,并且也是只能是对象的集合,不能像 Set 那样可以是任何类型的任意值,它也具有 Set 部分 Api:

因为这些 API 和前面讲到的基本没什么区别,这里就不再进行讲解。
我们来考虑一下这样一个场景,我们需要一个数组来保存着被禁止掉的 DOM 元素:
```js
const disabledElements = new Set();
const loginButton = document.querySelector("button");
// 通过加入对应集合，给这个节点打上“禁用”标签
disabledElements.add(loginButton);
```
通过上面的例子查询元素在不在 disabledElements 中,就可以知道它是不是被禁用了,但是假如
元素从 DOM 树中被删除了,它的引用却仍然保存在 Set 中,它的键依然引用着,因此垃圾回收程序也不能回收它,这就很容易造成内存泄漏。

使用 WeakSet 对象就很好的解决了这个问题:
```js
const disabledElements = new WeakSet();  
const loginButton = document.querySelector('#login');  
// 通过加入对应集合，给这个节点打上“禁用”标签 
disabledElements.add(loginButton);
```
这样只要 WeakSet 中任何元素从 DOM 树中被删除,垃圾回收程序就可以忽略其存在,而立即释放其内存。
参考文献

书籍 JavaScript高级程序设计;
MDN

结尾
::: tip
如果你对垃圾回收不是很理解,可以通过这篇文章进行学习,跳转链接;
如果想要技术交流的可以私信添加我微信进行相互学习;
最后一个文章有说错的地方欢迎批评指出,如果觉得不错也希望能点个赞;
春天会如约而至,但在那之前,一定要做好破土而出的准备;
:::
