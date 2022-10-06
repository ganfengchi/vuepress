# sort 排序

[[toc]]

```js
Array.sort();
```

sort()方法可以传入一个函数作为参数，然后依据该函数的逻辑进行数组排序

sort 方法接收了 一个函数作为参数时，排序主要根据传入的函数返回值是否大于 0 进行排序

1）当 A - B < 0 时则 A 元素排在 B 元素前面<br/>
2）当 B - A > 0 时则 B 元素排在 A 元素前面<br/>
3）当 A - B = 0 时则元素未知不变<br/>

看例

```js
data.sort((a, b) => {
  if (a.id > b.id) {
    return 1;
  } else if (a.id < b.id) {
    return -1;
  }
  return 0;
});
```

例 2

```js
data.sort((a, b) => {
  return (a.surname + a.name + a.address).localCompare(
    b.usename + b.name + b.address
  );
});
```
