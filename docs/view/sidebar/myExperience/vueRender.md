# vue2 render 函数

### VUE render 函数使用和详解

前言
在平时编程时，大部分是通过 template 来创建 html。但是在一些特殊的情况下，使用 template 方式时，就无法很好的满足需求，在这个时候就需要 通过 JavaScript 的编程能力来进行操作。此时，就到了 render 函数展示拳脚去时候了。

render 的作用

在官网的这里示例中，使用组件，将相同的内容通过 solt 放进 h1-h6 的标签中，在使用传统方式时，代码不仅冗长，而且在每一个级别的标题中重复书写了 <slot></slot>，在要插入锚点元素时还要再次重复。而使用 render 函数后，代码就精简了很多。

```js
Vue.component("anchored-heading", {
  render: function (createElement) {
    return createElement(
      "h" + this.level, // 标签名称
      this.$slots.default // 子节点数组
    );
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
});
```

render 函数的作用是，当场景中用 template 实现起来代码冗长繁琐而且有大量重复，这个时候使用就可以极大的简化代码。

render 函数讲解
在使用 render 函数中，会使用到一个参数 createElement，而这个 createElement 参数，本质上，也是一个函数，是 vue 中构建虚拟 dom 所使用的工具。下面就围绕着这个 createElement 来看一下。

在 createelement 方法，有三个参数：

```js
return createEement(, {}, [])
```

- 第一个参数（必要参数）：主要是用于提供 dom 中的 html 内容，类型可以是字符串、对象或函数。
- 第二个参数（对象类型，可选）：用于设置这个 dom 中的一些样式、属性、传的组件的参数、绑定事件之类的。
- 第三个参数（类型是数组，数组元素类型是 VNode,可选）：主要用于设置分发的内容，如新增的其他组件。
- 注意：组件树中的所有 vnode 必须是唯一的

通过传入 createElement 参数，创建虚拟节点，然后再将节点返回给 render 返回出去。

总的来说，render 函数的本质就是创建一个虚拟节点。

render 和 template 的区别
相同之处：

render 函数 跟 template 一样都是创建 html 模板

不同之处：

Template 适合逻辑简单，render 适合复杂逻辑。
使用者 template 理解起来相对容易，但灵活性不足；自定义 render 函数灵活性高，但对使用者要求较高。
render 的性能较高，template 性能较低。
使用 render 函数渲染没有编译过程，相当于使用者直接将代码给程序。所以，使用它对使用者要求高，且易出现错误
Render 函数的优先级要比 template 的级别要高，但是要注意的是 Mustache(双花括号)语法就不能再次使用
注意：template 和 render 不能一起使用，否则无效

render 举例
如一次封装一套通用按钮组件，按钮有四个样式(success、error、warning、default)。

template 方式是如下：

```js
 <div class="btn btn-success" v-if="type === 'success'">{{ text }}</div>
 <div class="btn btn-danger" v-else-if="type === 'danger'">{{ text }}</div>
 <div class="btn btn-warning" v-else-if="type === 'warning'">{{ text }}</div>
```

这样写在按钮少的时候没有问题，但是一旦按钮数量变多，这样写就会显得特别冗长，在这个时候，就需要 render 函数。

根据情况生成按钮 DOM

在使用 render 函数前，需要先把 template 标签去掉，只保留逻辑层。

通过传入的 type 动态填入 class，通过 inderText 将内容添加入 DOM 中。

```js
render(h) {
  return h('div', {
   class: {
    btn: true,
    'btn-success': this.type === 'success',
    'btn-danger': this.type === 'danger',
    'btn-warning': this.type === 'warning'
   },
   domProps: {
    innerText: this.text
   },
   on: {
    click: this.handleClick
   }
  });
 },
```

列 2 子组件中子组件 2 选 1 渲染

```js
import A from './components/A.vue'
import B from './components/B.vue'
export default {
   name:'transfer-station'
   compinents:{ A,B },
   // 组件新样式 new 旧样式 old
   props:{
    customStyle:{
        type:String,
        default:'old'
    }
   },
   render(h) {
    const componentMap = {old:A,new:B }
    return h(componentMap[this.customStyle],{props:this.$attrs})
   }
}

```
