# 自定义ref   customRef 来做防抖针对input


封装一个 debounceRef 函数
```javascript
import { customRef } from 'vue'

export function debounceRef(value: string | number, delay = 1000) {
    let timer:undefined;
    return customRef((track, trigger) => {
        return {
            get() {
                //依赖收集
                track()
                return value
            },
            set(val) {
                //派发更新 trigger
                clearTimeout(timer)
                timer = setTimeout(() => {
                    value = val
                    trigger()
                }, delay)

            }
        }

    })
}
```

```vue
<template>
     自定义ref
    <div>
        <input type="text " v-model="text" class="input">
        <p>{{ text }}</p>
    </div>
</template>
<script setup lang="ts">
import { debounceRef  } from '@/common/common' 
const text = debounceRef('',1000)
console.log(text.value)

</script>


<style lang="scss" scoped>
.input {
    width: 200px;
    height: auto;
    border: 1px solid #000;
}
</style>
```