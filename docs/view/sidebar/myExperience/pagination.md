# 前端 分页

[[toc]]

首先我们来了解前端分页的几种方式
计算总页数的方法是： 总页数=(数据总行数+每页数据行数-1)/每页数据行数。

举例：

如果数据库中有 10 条数据，每页要显示的行数是 3.那么总页数是：(10+3-1）/3 = 4

前三页 3 条数据，第 4 页 1 条数据。

# First

```js
//总记录数
let total = 22;
//每页显示的记录数
let pageSize = 5;
//页数  向下取整
let pageSum = Math.floor((total + pageSize - 1) / pageSize);
```

### Second

```js
//总记录数
let total = 22;
//每页显示的记录数
let pageSize = 5;
//页数
let pageSum =
  total % pageSize === 0
    ? Math.floor(total / pageSize)
    : Math.floor(total / pageSize) + 1;
```

实现目标：

正常的用户翻页，用户已经添加的数据在翻页时进行操作(删除)保证数据流正常，再次点击选择商品时正常屏蔽用户已经选择的商品。

解决思路：

1. 新建数组存储源数据，与分页数据隔离。
2. 给源数组中的每个元素都打上一个标志,添加 sign 属性定位源数据中的数据存储位置。
3. 在用户操作分页数据时对源数组进行相应操作。

开工，上代码：

封装成一个工具函数供页面调用

```js
//  前端分页
function pageToData(sourceData,page = {pageNo: 1,pageSize: 10}) {
  //    给一个page对象的默认值
  let arr = []  //  返回的分页数据数组
  let num = []  //  临时存储分页数据的序号
  const { pageNo,pageSize } = page
  for(let i = (pageNo - 1) * pageSize; i < (pageNo * pageSize) ;i++) {
    num.push(i)
  }
  let del = 0;  //  指定下一次查询源数组数据开始的位置
  sourceData.some((val,index) => {  //  遍历源数组
    if(num.includes(index)){    //  数组的index是否存在于序号中
      let item = index + del    //  计算出真正需要取出的数据在数组中的哪个位置
      if(item < sourceData.length){     //  如果超出数组长度,自然就不用遍历接下来的数据了
        let src = sourceData[item]
          if(src.check) {   //  check是标记源数组中的数据是否为删除状态 也就是check = false就为假删除
            src.sign = item     //  给数据源加上标记
            arr.push(src)   //  push到要返回的分页数组中
          }else{
            //  如果这条数据是删除状态则进来这里 可以看findData函数
            let { rowData,count } = findData(item + 1,sourceData);
            JSON.stringify(rowData) === "{}" ? '' : arr.push(rowData)
          }
      }else{
        return true
      }
    }
  })
  return arr;
}
​
  function findData(idx,srcData){   //  idx作为标记，从源数据的哪一条开始找以idx为准,src 源数据数组
    let rowData = {}    //  返回的数组元素
    let count = 0   //  标记循环了几次
    for(let i = idx ; i < srcData.length ; i++) {
      if(srcData[i].check == true) {    //  同校验此条数据是否为正常数据
        rowData = srcData[i]
        rowData.sign = i
        count += 1
        break
      }else{
        count += 1
      }
    }
    return {rowData,count}
  }
​
//  单独获取数据的总数量
  function getTotal(src){
    let total = 0
    src.map(val => {
      if(val.check) {
        total += 1
      }
    })
    return total
  }
export {
  pageToData,
  getTotal
}
```
问题到这里已经解决了，删除某条数据只需要将源数据的check属性设置为false，然后重新调用方法获取新的分页数据，提交表单的时候将check为false的数据过滤后再提交，至此也就落幕了，但在我准备提交代码的时候，脑子里突然灵光一闪，object，引用类型，貌似...，于是我又将代码更改了一番。
```js
function pageToData(sourceData,page = {pageNo: 1,pageSize: 10}) {
  //    给一个page对象的默认值
  let arr = []  //  返回的分页数据数组
  const { pageNo,pageSize } = page
  for(let i = (pageNo - 1) * pageSize; i < (pageNo * pageSize) ;i++) {
    arr.push(souceData[i])
  } 
  return arr; 
}
```
想到引用类型，就想到了数组中每个元素存的都是这个对象的地址，而非某个具体的属性值，只要分页数组对应的元素进行了修改，源数组中相应的对象也会相对应的进行修改，因为两个元素指向的都是同一个内存地址，也就是存放具体对象的内存地址。而总条数直接使用源数组身上的length方法就可以获取到了，删除对象时先使用数组身上的indexof方法寻找到数据在源数组上存放的下标位置，再使用splice方法将元素删除即可，相对于原来的方法，简洁又方便，性能损耗还没原先的方法高
