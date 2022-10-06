# 你不知道的 html 标签之 marquee

### 首先看下 MDN 文档是怎么解释的

::: tip
`<marquee>`
已弃用: 不再推荐使用该特性。虽然一些浏览器仍然支持它，但也许已从相关的 web 标准中移除，也许正准备移除或出于兼容性而保留。请尽量不要使用该特性，并更新现有的代码；参见本页面底部的兼容性表格以指导你作出决定。请注意，该特性随时可能无法正常工作。

HTML marquee 元素（`<marquee>`） 用来插入一段滚动的文字。你可以使用它的属性控制当文本到达容器边缘发生的事情。

警告： `<marquee>` 元素已经 过时，请不要再使用。尽管一些浏览器仍然支持它，但它不是必须的。此外，使用这个元素基本上是你可以对你的用户做最糟糕的事情之一，所以请不要这样做。
:::

### 属性

behavior
设置文本在 marquee 元素内如何滚动。可选值有 scroll，slide 和 alternate。如果未指定值，默认值为 scroll。

bgcolor
通过颜色名称或十六进制值设置背景颜色。

direction
设置 marquee 内文本滚动的方向。可选值有 left, right, up and down。如果未指定值，默认值为 left。

height
以像素或百分比值设置高度。

hspace
设置水平边距。

loop
设置 marquee 滚动的次数。如果未指定值，默认值为 −1，表示 marquee 将连续滚动。

scrollamount
设置每次滚动时移动的长度（以像素为单位）。默认值为 6。

scrolldelay
设置每次滚动时的时间间隔（以毫秒为单位）。默认值为 85。请注意， 除非指定 truespeed 值，否则将忽略任何小于 60 的值，并改为使用 60。

truespeed
默认情况下，会忽略小于 60 的 scrolldelay 值。如果存在 truespeed，那些值不会被忽略。

vspace
以像素或百分比值设置垂直边距。

width
以像素或百分比值设置宽度。

### 事件回调

onbounce
当 marquee 滚动到结尾时触发。它只能在 behavior 属性设置为 alternate 时触发。

onfinish
当 marquee 完成 loop 属性设置的值时触发。它只能在 loop 属性设置为大于 0 的某个数字时触发。

onstart
当 marquee 开始滚动时触发。

方法
start
开始滚动 marquee。

stop
停止滚动 marquee。
示例

```html
<marquee>This text will scroll from right to left</marquee>
<marquee direction="up">This text will scroll from bottom to top</marquee>

<marquee
  direction="down"
  width="250"
  height="200"
  behavior="alternate"
  style="border:solid"
>
  <marquee behavior="alternate"> This text will bounce </marquee>
</marquee>
```

该标签不是 HTML3.2 的一部分，并且只支持 MSIE3 以后内核，所以如果你使用非 IE 内核浏览器(如：Netscape)可能无法看到下面一些很有意思的效果
该标签是个容器标签
语法：

以下是一个最简单的例子：

代码如下:

```html
<marquee><font size="+3" color="red">Hello,World</font></marquee>
```

下面这两个事件经常用到：

```js
onMouseOut="this.start()" ：用来设置鼠标移出该区域时继续滚动
onMouseOver="this.stop()"：用来设置鼠标移入该区域时停止滚动
```

代码如下:

```html
<marquee onMouseOut="this.start()" onMouseOver="this.stop()"></marquee>

onMouseOut="this.start()" ：用来设置鼠标移出该区域时继续滚动

onMouseOver="this.stop()"：用来设置鼠标移入该区域时停止滚动</marquee>
```

这是一个完整的例子：

代码如下:

```js
<marquee
  id="affiche"
  align="left"
  behavior="scroll"
  bgcolor="#FF0000"
  direction="up"
  height="300"
  width="200"
  hspace="50"
  vspace="20"
  loop="-1"
  scrollamount="10"
  scrolldelay="100"
  onMouseOut="this.start()"
  onMouseOver="this.stop()"
>
  这是一个完整的例子
</marquee>
```

该标签支持的属性多达 11 个：

#### align

```js
设定`<marquee>`标签内容的对齐方式
absbottom：绝对底部对齐（与g、p等字母的最下端对齐）
absmiddle：绝对中央对齐
baseline：底线对齐
bottom：底部对齐（默认）
left：左对齐
middle：中间对齐
right：右对齐
texttop：顶线对齐
top：顶部对齐
```

代码如下:

```js
<marquee align="absbottom">align="absbottom"：绝对底部对齐（与g、p等字母的最下端对齐）。 </marquee>
<marquee align="absmiddle">align="absmiddle"： 绝对中央对齐。 </marquee>
<marquee align="baseline">align="baseline"： 底线对齐。 </marquee>
<marquee align="bottom">align="bottom"： 底部对齐（默认）。 </marquee>
<marquee align="left">align="left"： 左对齐。 </marquee>
<marquee align="middle">align="middle"： 中间对齐。 </marquee>
<marquee align="right">align="right"： 右对齐。 </marquee>
<marquee align="texttop">align="texttop"： 顶线对齐。 </marquee>
<marquee align="top">align="top"： 顶部对齐。 </marquee>

```

#### behavior

```js
设定滚动的方式：
alternate： 表示在两端之间来回滚动。
scroll： 表示由一端滚动到另一端，会重复。
slide：  表示由一端滚动到另一端，不会重复。
```

代码如下:

```js
<marquee behavior="alternate">alternate：表示在两端之间来回滚动。 </marquee>
<marquee behavior="scroll">scroll：表示由一端滚动到另一端，会重复。</marquee>
<marquee behavior="slide">slide：  表示由一端滚动到另一端，不会重复。</marquee>
```

#### bgcolor

设定活动字幕的背景颜色，背景颜色可用 RGB、16 进制值的格式或颜色名称来设定。

代码如下:

```js
<marquee bgcolor="#006699">设定活动字幕的背景颜色 bgcolor="#006699"</marquee>
<marquee bgcolor="RGB(10%,50%,100%,)">设定活动字幕的背景颜色 bgcolor="rgb(10%,50%,100%,)"</marquee>
<marquee bgcolor="red">设定活动字幕的背景颜色bgcolor="red"</marquee>

```

#### direction

设定活动字幕的滚动方向

代码如下:

```js
<marquee direction="down">设定活动字幕的滚动方向direction="down"：向下</marquee>
<marquee direction="left">设定活动字幕的滚动方向direction="left"：向左</marquee>
<marquee direction="right">设定活动字幕的滚动方向direction="right"：向右</marquee>
<marquee direction="up">设定活动字幕的滚动方向direction="up"：向上</marquee>
```

#### height

设定活动字幕的高度

代码如下:

```js
<marquee height="500" direction="down" bgcolor="#CCCCCC">
  设定活动字幕的高度height="500"
</marquee>
```

#### width

设定活动字幕的宽度

代码如下:

```js
<marquee width="500" bgcolor="#CCCCCC">
  设定活动字幕的宽度width="500"
</marquee>
```

#### hspace

设定活动字幕里所在的位置距离父容器水平边框的距离
This controls the horizontal（水平）space around thedisplay box.

代码如下:

```js
<table width="500" border="1" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td>
      <marquee hspace="100" bgcolor="#CCCCCC">
        hspace="100"
      </marquee>
    </td>
  </tr>
</table>
```

#### vspace

设定活动字幕里所在的位置距离父容器垂直边框的距离
This controls the vertical（垂直） space around the displaybox.

代码如下:

```js
<marquee vspace="100" bgcolor="#CCCCCC">
  hspace="100"
</marquee>
```

#### loop

设定滚动的次数，当 loop=-1 表示一直滚动下去，默认为-1

代码如下:

```js
<marquee loop="-1"bgcolor="#CCCCCC">我会不停地走。</marquee>
<p> </p>
<marquee loop="2" bgcolor="#CCCCCC">我只走两次哦</marquee>
```

#### scrollamount

设定活动字幕的滚动速度，单位 pixels

代码如下:

```js
<marquee scrollamount="10">scrollamount="10" </marquee>
<marquee scrollamount="20" >scrollamount="20"</marquee>
<marquee scrollamount="30" >scrollamount="30"</marquee>
```

#### scrolldelay

设定活动字幕滚动两次之间的延迟时间，单位 millisecond（毫秒）
值大了会有一步一停顿的效果

代码如下:

```js
<marquee scrolldelay="10">scrolldelay="10" </marquee>
<marquee scrolldelay="100" >scrolldelay="100"</marquee>
<marquee scrolldelay="1000">scrolldelay="1000"</marquee>
```

```js
align:    对齐方式 LEFT，CENTER，RIGHT，TOP，BOTTOM (不用多说了)
behavior:    用于设定滚动的方式，主要由三种方式：
behavior="scroll":    表示由一端滚动到另一端；
behavior="slide":    表示由一端快速滑动到另一端，且不再重复；
behavior="alternate" :    默认值——表示在两端之间来回滚动。
direction:    left(默认值) 左; right 右;up 上;down 下;
bgcolor:    背景颜色
height:    高度
weight:    宽度
Hspace/vspace:    分别用于设定滚动字幕的左右边框和上下边框的宽度。作用大概和css中的margin差不多
scrollamount:    用于设定每个连续滚动文本后面的间隔，该间隔用像素表示，

以上是官方说法,其实就是滚动的速度，值不能太大,要不从视觉角度来说,是没反应的.值越大速度越快，反之越慢。

scrolldelay:    延迟时间
loop:    这个属性大家也很熟悉，循环次数；loop=-1的时候一直重复循环（默认值）

Marquee标记用于在可用浏览区域中滚动文本。

属性：　
　ALIGN：用于按设定的值对齐滚动的文本。ALIGN可以设定的值有：LEFT，CENTER，RIGHT，TOP，BOTTOM。此属性不是必须使用的。　
　例：　
　　[MARQUEE　ALIGN="TOP"]这段滚动文字设定为上对齐 [/MARQUEE]　
　　　
　　　
　 BEHAVIOR：可以在页面上一旦出现文本时让浏览器按照设定的方法来处理文本。

      如果设定的方法是SLIDE，那么文本就移动到文档上，并停留在 页边距上。

      如果设定为AlterNATE，则文本从一边移动到另一边。

     如果设定为SCROLL，文本将在页面上反复滚动。本属性不是必须使用的。可以设定 的值有：SILIDE，AlterNATE，SCROLL。　
　　例：　
　　　[MARQUEE　BEHAVIOR="AlterNATE"]文字从一边移动到另一边 [/MARQUEE]　
　　　
　　　
　　BGCOLOR：用于设定字幕的背景颜色。背景颜色可用RGB、16进制值的格式或颜色名称来设定。　
　 　例：　
　 　 [MARQUEE　BGCOLOR="RED"]用颜色名称设定滚动文字背景颜色为红色 [/MARQUEE]　
　　　[MARQUEE　BGCOLOR="#FF0000"]用16进制值设定滚动文字背景颜色为红色 [/MARQUEE]　
　　　[MARQUEE　BGCOLOR=RGB(100%＇0%＇0%)] 用RGB设定滚动文字背景颜色为红色 [/MARQUEE] 　
　　　　　　
　　DIRECTION：用于设定文本滚动的方向，可以设定的值有：LEFT，RIGHT。此属性不是必须使用的。　
　　　例：　
　　　　 [MARQUEE　DIRECTION="LEFT"]文字向左边滚动 [/MARQUEE]　
　　　　 [MARQUEE　DIRECTION="RIGHT"]文字向右边滚动 [/MARQUEE]　
　　　
    HEIGHT：用于设定滚动字幕的高度，高度可用像素或可视页面的百分比来表示。此属性不是必须使用的。　
　　　　例：　
　　　　[MARQUEE　HEIGHT="10%"]滚动字幕的高度是可视页面的10%[ /MARQUEE]　
　　　　[MARQUEE　HEIGHT="12"]滚动字幕的高度是12像素 [/MARQUEE]　
　　　　　　
　　　　WIDTH：用于设定字幕的宽度，宽度可用像素或可视页面的百分比来表示。此属性不是必须使用的。　
　　　　例：　
　　　　[MARQUEE　WIDTH="90%"]滚动字幕的宽度是可视页面的90% [/MARQUEE]　
　　　　[MARQUEE　WIDTH="200"]滚动字幕的宽度是200像素 [/MARQUEE　]
　　　　　　
　　　　HSPACE：用于设定滚动字幕左右的空白空间，空白空间用像素表示。此属性不是必须使用的。　
　　　　例：　
　　　　[MARQUEE　HSPACE="15"]滚动字幕左右空白空间为15个像素 [/MARQUEE]　
　　　　　
　　　　VSPACE：用于设定滚动字幕上下的空白空间，空白空间用像素表示。此属性不是必须使用的。　
　　　　例：　
　　　　[MARQUEE　VSPACE="2"]滚动字幕上下的空白空间为2个像素 [/MARQUEE]　
　　　　　
　　　　LOOP：用于设定滚动字幕的滚动次数。当LOOP的值为"INFINITE"或是"-1"时，则文字会无限制地滚动。此属性不是必须使用的。　
　　　　例：　
　　　　[MARQUEE　LOOP="-1"]文字滚动无数次 [/MARQUEE]　
　　　　[MARQUEE　LOOP="5"]文字滚动5次 [/MARQUEE]　
　　　
　　　　SCROLLAMOUNT：用于设定每个连续滚动文本后面的间隔，该间隔用像素表示。此属性不是必须使用的。　
　　　　例：　
　　　　[MARQUEE　SCROLLAMOUNT="10"]此文本后面的间隔为10个像素 [/MARQUEE]　
　　　　　　
　　　　SCROLLDELAY：用于设定两次滚动操作之间的间隔时间，该时间以毫秒为单位。此属性不是必须使用的。　
　　　　例：　
　　　　[MARQUEE　SCROLLDELAY="5"]此文本两次滚动之间的间隔时间为5毫秒 [/MARQUEE]

      ONMOUSEOUT=this.start() ：用来设置鼠标移出该区域时继续滚动
      ONMOUSEOVER=this.stop()：用来设置鼠标移入该区域时停止滚动
```

#### Marquee 也可以做飘浮广告效果：

```js
＜marquee behavior="alternate"height="300" direction="up" scrollamount="3"scrolldelay="30" width="300" bgcolor="#3399FF"＞
＜marquee behavior="alternate"height="50" direction="left" scrollamount="3"scrolldelay="30" width="100%"＞
＜font style="font-size: 35px"＞Ouyang＜/font＞
＜/marquee＞
```

```js
<marquee> ... </marquee>
```

移动属性的设置 ,这种移动不仅仅局限于文字，也可以应用于图片，表格等等

鼠标属性

onMouseOut=this.start() ........鼠标移出状态滚动

onMouseOver=this.stop() .........鼠标经过时停止滚动

```js
方向
<direction=#> #=left, right ,up ,down <marquee direction=left>从右向左移！</marquee>

方式
<bihavior=#> #=scroll, slide, alternate <marquee behavior=scroll>一圈一圈绕着走！</marquee>
<marquee behavior=slide>只走一次就歇了！</marquee>
<marquee behavior=alternate>来回走</marquee>

循环
<loop=#> #=次数；若未指定则循环不止(infinite) <marqueeloop=3 width=50% behavior=scroll>只走 3 趟</marquee>


<marquee loop=3 width=50% behavior=slide>只走 3 趟</marquee>
<marquee loop=3 width=50% behavior=alternate>只走 3趟！</marquee>

速度
<scrollamount=#> <marquee scrollamount=20>啦啦啦，我走得好快哟！</marquee>

延时
<scrolldelay=#> <marquee scrolldelay=500 scrollamount=100>啦啦啦，我走一步，停一停！</marquee>

外观(Layout)设置

对齐方式(Align)
<align=#> #=top, middle, bottom <font size=6>
<marquee align=# width=400>啦啦啦，我会移动耶！</marquee>
</font>

底色
<bgcolor=#> #=rrggbb 16 进制数码，或者是下列预定义色彩：
Black, Olive, Teal, Red, Blue, Maroon, Navy, Gray, Lime,
Fuchsia, White, Green, Purple, Silver, Yellow, Aqua <marqueebgcolor=aaaaee>颜色！</marquee>

面积
<height=# width=#> <marquee height=40 width=50% bgcolor=aaeeaa>面积！</marquee>

空白
(Margins)<hspace=# vspace=#>
<marquee hspace=20 vspace=20 width=150 bgcolor=ffaaaa align=middle>面积！</marquee>
```

### marquee 属性

ACCESSKEY accessKey 设置或获取对象的快捷键。<br/>

ATOMICSELECTION 指定元素及其内容是否可以一不可见单位统一选择。<br/>

BEGIN begin 设置或获取时间线在该元素上播放前的延迟时间。<br/>

BEHAVIOR behavior 设置或获取文本如何在字幕中滚动。<br/>
BGCOLOR bgColor 不推荐。设置或获取对象后面的背景颜色。<br/>
canHaveChildren 获取表明对象是否可以包含子对象的值。<br/>
canHaveHTML 获取表明对象是否可以包含丰富的 HTML 标签的值。<br/>
CLASS className 设置或获取对象的类。<br/>
clientHeight 获取对象的高度，不计算任何边距、边框、滚动条或可能应用到该对象的补白。<br/>
clientLeft 获取 offsetLeft 属性和客户区域的实际左边之间的距离。<br/>
clientTop 获取 offsetTop 属性和客户区域的实际顶端之间的距离。<br/>
clientWidth 获取对象的宽度，不计算任何边距、边框、滚动条或可能应用到该对象的补白。<br/>
CONTENTEDITABLE contentEditable 设置或获取表明用户是否可编辑对象内容的字符串。<br/>
DATAFLD dataFld 设置或获取由 dataSrc 属性指定的绑定到指定对象的给定数据源的字段。<br/>
DATAFORMATAS dataFormatAs 设置或获取如何渲染提供给对象的数据。<br/>
DATASRC dataSrc 设置或获取用于数据绑定的数据源。<br/>
DIR dir 设置或获取对象的阅读顺序。<br/>
DIRECTION direction 设置或获取文本滚动的方向。<br/>
disabled 获取表明用户是否可与该对象交互的值。<br/>
DISABLED disabled 设置或获取控件的状态。<br/>
END end 设置或获取表明元素结束时间的值，或者元素设置为重复的简单持续终止时间。<br/>
firstChild 获取对象的 childNodes 集合的第一个子对象的引用。<br/>
hasMedia 获取一个表明元素是否为 HTML+TIME 媒体元素的 Boolean 值。<br/>
HEIGHT height 设置或获取对象的高度。<br/>
HIDEFOCUS hideFocus 设置或获取表明对象是否显式标明焦点的值。<br/>
HSPACE hspace 设置或获取对象的水平边距。<br/>
ID id 获取标识对象的字符串。<br/>
innerHTML 设置或获取位于对象起始和结束标签内的 HTML。<br/>
innerText 设置或获取位于对象起始和结束标签内的文本。<br/>
isContentEditable 获取表明用户是否可编辑对象内容的值。<br/>
isDisabled 获取表明用户是否可与该对象交互的值。<br/>
isMultiLine 获取表明对象的内容是包含一行还是多行的值。<br/>
isTextEdit 获取是否可使用该对象创建一个 TextRange 对象。<br/>
LANG lang 设置或获取要使用的语言。<br/>
LANGUAGE language 设置或获取当前脚本编写用的语言。<br/>
lastChild 获取该对象 childNodes 集合中最后一个子对象的引用。<br/>
LOOP loop 设置或获取字幕播放的次数。<br/>
nextSibling 获取对此对象的下一个兄弟对象的引用。<br/>
nodeName 获取特定结点类型的名称。<br/>
nodeType 获取所需结点的类型。<br/>
nodeValue 设置或获取结点的值。<br/>
offsetHeight 获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度。<br/>
offsetLeft 获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置。<br/>
offsetParent 获取定义对象 offsetTop 和 offsetLeft 属性的容器对象的引用。<br/>
offsetTop 获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置。<br/>
offsetWidth 获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的宽度。<br/>
onOffBehavior 获取表明指定的 Microsoft® DirectAnimation® 行为是否正在运行的对象。<br/>
outerHTML 设置或获取对象及其内容的 HTML 形式。<br/>
outerText 设置或获取对象的文本。<br/>
ownerDocument 设置或获取结点关联的 document 对象。<br/>
parentElement 获取对象层次中的父对象。<br/>
parentNode 获取文档层次中的父对象。<br/>
parentTextEdit 获取文档层次中可用于创建包含原始对象的 TextRange 的容器对象。<br/>
previousSibling 获取对此对象的上一个兄弟对象的引用。<br/>
readyState 获取对象的当前状态。<br/>
recordNumber 获取数据集中生成对象的原始记录。<br/>
scopeName 获取为该元素定义的命名空间。<br/>
SCROLLAMOUNT scrollAmount 设置或获取介于每个字幕绘制序列之间的文本滚动像素数。<br/>
SCROLLDELAY scrollDelay 设置或获取字幕滚动的速度。<br/>
scrollHeight 获取对象的滚动高度。<br/>
scrollLeft 设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离。<br/>
scrollTop 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离。<br/>
sourceIndex 获取对象在源序中的依次位置，即对象出现在 document 的 all 集合中的顺序。<br/>
STYLE 为该设置元素设置内嵌样式。<br/>
SYNCMASTER syncMaster 设置或获取时间容器是否必须在此元素上同步回放。<br/>
SYSTEMBITRATE 获取系统中大约可用带宽的 bps。<br/>
SYSTEMCAPTION 表明是否要显示文本来代替演示的的音频部分。<br/>
SYSTEMLANGUAGE 表明是否在用户计算机上的选项设置中选中了给定语言。<br/>
SYSTEMOVERDUBORSUBTITLE 指定针对那些正在观看演示但对被播放的音频所使用的语言并不熟悉的用户来说是否要渲染配音或字幕。<br/>
TABINDEX tabIndex 设置或获取定义对象的 Tab 顺序的索引。<br/>
tagName 获取对象的标签名称。<br/>
tagUrn 设置或获取在命名空间声明中指定的统一资源名称(URN)。<br/>
TIMECONTAINER timeContainer 设置或获取与元素关联的时间线类型。<br/>
TITLE title 设置或获取对象的咨询信息(工具提示)。<br/>
TRUESPEED trueSpeed 设置或获取字幕的位置是否使用 scrollDelay 和 scrollAmount 属性计算，已过的实际时间来自于时钟计时。<br/>
uniqueID 获取为对象自动生成的唯一标识符。<br/>
UNSELECTABLE 指定该元素不可被选中。<br/>
VSPACE vspace 设置或获取对象的垂直边距。<br/>
WIDTH width 设置或获取对象的宽度。<br/>
