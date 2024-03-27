# useState 

###  hooks 为什么不能发在if else语句中使用

hook 原理  
```js
//因为hook在react中是存放在每一个组件的 fiber上的  ，fiber是用数组链表维护的 
fiber.memoizedState(hook0) -> next(hook1) -> next(hook2) -> next(hook3)(workProgressHook)

hokk ={
    memoizedState:null,// state
    next:null, //下一个hook
}

export type Hook ={
    memoizedState:any,
    baseState:any,
    baseQueue:Update<any，any>|null,
    query:any, 
    next:any
}
```