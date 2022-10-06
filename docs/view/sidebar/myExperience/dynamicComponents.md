#### vue2 动态组件注册与使用

```ts
const list =[
    {url:'/invInfo.vue',name:'InvoiceInfo'},
    {url:'/taxInfo.vue',name:'dsTaxInfo'},
]

const dynamicComponents = ()=>{
    let components = this.$options.components
    this.list .forEach(async (item,index,arr) => {
     const  module = await import(`.${item.url}`)
     components[item.name] = module.default
     if(index == arr.length-1){
         this.refresh()
     }
}

refresh(){
    this.isRefresh = true
    this.$nextTick(()=>{
        this.isRefresh = false
    })
}
```

```html
<component :is="item.xxxxxx" />
```
