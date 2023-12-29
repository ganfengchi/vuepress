# 封装虚拟列表  Virtuallist


列表容器 container
数据列表 list
列表项 item

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .container {
        width: 600px;
        height: 600px;
        margin: 100px auto;
        border: 1px solid red;
      }

      .fs-virtuallist-container {
        width: 100%;
        height: 100%;
        overflow-y: auto;
      }

      .fs-virtuallist-list {
        width: 100%;
      }

      .fs-virtuallist-item {
        width: 100%;
        height: 100px;
        box-sizing: border-box;
        border: 1px solid #000;
        text-align: center;
        font-size: 20px;
        line-height: 100px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="fs-virtuallist-container">
        <div class="fs-virtuallist-list">
          <!-- <div class="fs-virtuallist-item"></div> -->
        </div>
      </div>
    </div>
    <script>
      class FsVirtuallist {
        constructor(containerSelector, listSelector) {
          this.state = {
            dataSource: [], // 模拟数据源
            itemHeight: 100, // 固定 item 高度
            viewHeight: 0, // container 高度
            maxCount: 0, // 虚拟列表视图最大容纳量
          };

          this.scrollStyle = {}; // list 动态样式（高度，偏移）
          this.startIndex = 0; // 当前视图列表在数据源中的起始索引
          this.endIndex = 0; // 当前视图列表在数据源中的末尾索引
          this.renderList = []; // 渲染在视图上的列表项
          // 根据用户传入的选择器获取 DOM 并保存
          this.oContainer = document.querySelector(containerSelector);
          this.oList = document.querySelector(listSelector);
        }
        //  初始化
        init() {
          // 获取虚拟列表容器的高度
          this.state.viewHeight = this.oContainer.offsetHeight;
          // 获取虚拟列表最大的数量length     container 高度  / 元素高度 向上取整
          this.state.maxCount =
            Math.ceil(this.state.viewHeight / this.state.itemHeight) + 1;
          // 初始化滚动事件
          this.bindEvent();
          // 初始化数据
          this.addData();
          // 初始化页面渲染页面
          this.render();
        }
        //  绑定滚动事件
        bindEvent() {
          this.oContainer.addEventListener(
            "scroll",
            this.rafThrottle(this.handleScroll.bind(this))
          );
        }

        // 计算endIndex 下标
        computedEndIndex() {
          const end = this.startIndex + this.state.maxCount;
          this.endIndex = this.state.dataSource[end]
            ? end
            : this.state.dataSource.length;
          if (this.endIndex >= this.state.dataSource.length) {
            this.addData();
          }
        }
        //计算出渲染列表的 开始下标 结束下标
        computedRenderList() {
          this.renderList = this.state.dataSource.slice(
            this.startIndex,
            this.endIndex
          );
        }
        //计算滚动样式
        computedScrollStyle() {
          const { dataSource, itemHeight } = this.state;
          this.scrollStyle = {
            // 滚动条样式高度 = 总数据 * 元素项高度 向下取整
            height: `${
              dataSource.length * itemHeight - this.startIndex * itemHeight
            }px`,
            // 每滚动出一项我们立即设置列表样式将其压回初始状态，同时更新列表数据，压回操作可以用 translate 
            transform: `translate3d(0, ${this.startIndex * itemHeight}px, 0)`,
          };
        }
        //滚动
        handleScroll() {
          const { scrollTop } = this.oContainer;
          //列表容器的 scrollTop 滚动条距离顶部的高度 除以 元素项 item 的高度
          this.startIndex = Math.floor(scrollTop / this.state.itemHeight);
          if (this.startIndex !== this.lastStart) this.render();
          this.lastStart = this.startIndex;
        }
        //渲染
        render() {
          //  计算endIndex 下标
          this.computedEndIndex();
          // 计算出渲染列表的 开始下标 结束下标
          this.computedRenderList();
          // 计算滚动样式
          this.computedScrollStyle();
          // 动态生成 div 元素
          const template = this.renderList
            .map((i) => `<div class="fs-virtuallist-item">${i}</div>`)
            .join("");
          const { height, transform } = this.scrollStyle;
          // 把动态生成的元素赋值
          this.oList.innerHTML = template;
          this.oList.style.height = height;
          this.oList.style.transform = transform;
        }
        //添加数据
        addData() {
          for (let i = 0; i < 10; i++) {
            this.state.dataSource.push(this.state.dataSource.length + 1);
          }
          console.log(this.state.dataSource);
        }
        //防抖函数
        rafThrottle(fn) {
          let lock = false;
          return function (...args) {
            window.requestAnimationFrame(() => {
              if (lock) return;
              lock = true;
              fn.apply(this, args);
              lock = false;
            });
          };
        }
      }

      const vList = new FsVirtuallist(
        ".fs-virtuallist-container",
        ".fs-virtuallist-list"
      );
      vList.init();
    </script>
  </body>
</html>


```