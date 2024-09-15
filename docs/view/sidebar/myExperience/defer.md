### useDefer 利用浏览器空闲时间渲染dom元素   优化大数据渲染卡顿问题

```js
import { ref, onUnmounted } from 'vue'
export function useDefer(maxCount = 100) {
  const frameCount = ref(1)
  let rafId = null
  function updateFrameCount() {
    rafId = requestAnimationFrame(() => {
      frameCount.value++
      if (frameCount.value >= maxCount) {
        return
      }
      updateFrameCount()
    })
  }
  updateFrameCount()
  onUnmounted(() => {
    cancelAnimationFrame(rafId)
  })
  return function (n) {
    return frameCount.value >= n
  }
}
```


```vue
<template>
  <div class="container">
    <div v-for="n in 100">
      <Item v-if="defer(n)"></Item>
    </div>
  </div>
</template>
 
<script setup>
import { ref } from 'vue'
import Item from '@/components/Item/index.vue'
import { useDefer } from '@/hooks/useDefer'
 
const defer = useDefer()
</script>
 
<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
}
</style>
```