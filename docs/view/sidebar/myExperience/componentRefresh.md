# vue 组件刷新

当我们封装自定义的组件 例如 tabs 当切换 tabs 时 content 容器里面的组件

因为有 keep-alive 缓存组件不销毁 ，切换 tabs 时数据发生变化，但是 content 里面的子组件内容并没有更新

这时候就要去想方法每次点 tab 销毁组件再加载
子组件

```html
<temlate> 我是子组件 </temlate>
```

```js
<temlate>
    <tabs  @click='selectTab'>
    <content v-if='!isRefresh'>
</temlate>
<script>
    export default {
        data(){
            return {
                isRefresh:false
            }
        },
        method:{
            selectTab(){
                // 某些操作
                this.refresh()
            }
            refresh(){
                this.isRefresh = true
                this.$nextTick(()=>{
                    this.isRefresh = false
                })
            }
        }
    }
<script>
```
