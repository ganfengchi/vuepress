# vue3 pinia 手写持久化插件

首先分析需求 什么时候才要持久化 ,刷新当前页面的时候 当前页面的内容将要被改变时触发的事件 onBeforeUnload

persistPlugin.js

```js
const KEY_PREFIX = "PINIA:STATE:";

export default function (_context) {
  console.log(_context);
  const { store } = _context;
  //存  当前页面的内容将要被改变时 存到本地磁盘
  window.addEventListener("beforunload", () => {
    localstorage.setItem(KEY_PREFIX + store.$id, JSON.stringify(store.$state));
  });
  //取
  try {
    const state = JSON.parse(localstorage.getItem(KEY_PREFIX + store.$id));
    if (state) {
      store.$patch(state);
    }
  } catch (error) {
    console.log("存储错误");
  }
}
```

main.js

```js
import { createApp } from "vue";
import { createPinia } from "pinia";

import persistPlugin from "./store/persistPlugin.js";

const app = createApp(App);

const pinia = createPinia();

pinia.use(persistPlugin);

app.use(pinia).mount("#app");
```
