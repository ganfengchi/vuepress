# vue 组件封装  


```php
//children
<script>
  export default {
    methos: {
      refresh() {},
      handleSubmit(){},
      changeActive(){}
    },
  };
</script>

//parent

<div>
  <div ref="mainComponent" :is="XXXXXX" />
</div>
<script>
  export default {
    methos: {
      refresh() {
        this.$nextTaick(() => {
          let func = this.$refs.mainComponent.refresh;
          if (typeof func === "function") {
            func();
          }
        });
      },

      handleSubmit() {
        let func = this.$refs.mainComponent.refresh;
        if (typeof func === "function") {
          func().then(() => {});
        }
      },

      //Next Prev
      changeActive(diff, loadingName) {
        this[loading] = true;//按钮loading
        let funcName = diff === 1 ? "beforeNext" : "beforePrve";
        let funcObj = this.$refs.mainComponent[funcName];
        if (typeof funcObj === "function") {
          func().then(() => {
            //调用某些方法
          }).catch((error)=>{
            this[loading] = false;
            //err 操作
          })
        }
      },
    },
  };
</script>
```
