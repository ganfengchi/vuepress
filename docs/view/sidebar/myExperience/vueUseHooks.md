# vueUse 常用的 hooks 未写完 更新中

[[toc]]

## state

### createGlobalState 将状态保存全局作用域中，以便跨 Vue 实例复用。

```js
// store.js
import { computed, ref } from "vue";
import { createGlobalState } from "@vueuse/core";

export const useGlobalState = createGlobalState(() => {
  // state
  const count = ref(0);

  // getters
  const doubleCount = computed(() => count.value * 2);

  // actions
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

// component.js
import { useGlobalState } from "./store";

export default defineComponent({
  setup() {
    const state = useGlobalState();
    return { state };
  },
});
```

### createInjectionState 创建可以注入到组件中的全局状态。

```js
// useCounterStore.ts
import { computed, ref } from "vue-demi";
import { createInjectionState } from "@vueuse/shared";

const [useProvideCounterStore, useCounterStore] = createInjectionState(
  (initialValue: number) => {
    // state
    const count = ref(initialValue);

    // getters
    const double = computed(() => count.value * 2);

    // actions
    function increment() {
      count.value++;
    }

    return { count, double, increment };
  }
);

export { useProvideCounterStore };
// If you want to hide `useCounterStore` and wrap it in default value logic or throw error logic, please don't export `useCounterStore`
export { useCounterStore };

export function useCounterStoreWithDefaultValue() {
  return (
    useCounterStore() ?? {
      count: ref(0),
      double: ref(0),
      increment: () => {},
    }
  );
}

export function useCounterStoreOrThrow() {
  const counterStore = useCounterStore();
  if (counterStore == null)
    throw new Error(
      "Please call `useProvideCounterStore` on the appropriate parent component"
    );
  return counterStore;
}
```

组件中的用法

```vue
<!-- RootComponent.vue -->
<script setup lang="ts">
import { useProvideCounterStore } from "./useCounterStore";

useProvideCounterStore(0);
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<!-- CountComponent.vue -->
<script setup lang="ts">
import { useCounterStore } from "./useCounterStore";

const { count, double } = useCounterStore()!;
</script>

<template>
  <ul>
    <li>count: {{ count }}</li>
    <li>double: {{ double }}</li>
  </ul>
</template>

<!-- ButtonComponent.vue -->
<script setup lang="ts">
import { useCounterStore } from "./useCounterStore";

// use non-null assertion operator to ignore the case that store is not provided.
const { increment } = useCounterStore()!;
</script>

<template>
  <button @click="increment">+</button>
</template>
```

### useAsyncState 响应式获取异步状态。不会阻塞 setup 函数，在 promise 完成后，将自动触发。

```js
import axios from "axios";
import { useAsyncState } from "@vueuse/core";

const { state, isReady, isLoading } = useAsyncState(
  axios.get("https://jsonplaceholder.typicode.com/todos/1").then((t) => t.data),
  { id: null }
);
```

### useDebouncedRefHistory useRefHistory 的简写，带有防抖过滤器。 当计数器的值开始改变时，该函数会在 1000ms 后对计数器保存快照。

```js
import { ref } from "vue";
import { useDebouncedRefHistory } from "@vueuse/core";

const counter = ref(0);
const { history, undo, redo } = useDebouncedRefHistory(counter, {
  deep: true,
  debounce: 1000,
});
```

### useLastChanged 记录最后一次更改的时间戳

```js
import { useLastChanged } from "@vueuse/core";

const a = ref(0);

const lastChanged = useLastChanged(a);

a.value = 1;

console.log(lastChanged.value);
```
