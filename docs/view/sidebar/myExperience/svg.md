# svg
[[toc]]
### 什么是 SVG？

* SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
* SVG 用来定义用于网络的基于矢量的图形
* SVG 使用 XML 格式定义图形
* SVG 图像在放大或改变尺寸的情况下其图形质量不会有所损失
* SVG 是万维网联盟的标准
* SVG 与诸如 DOM 和 XSL 之类的 W3C 标准是一个整体
* SVG 是 W3C 推荐标准
* SVG 于 2003 年 1 月 14 日成为 W3C 推荐标准。

### SVG 的历史和优势

在 2003 年一月，SVG 1.1 被确立为 W3C 标准。

参与定义 SVG 的组织有：Sun 公司（已被 Oracle 公司收购）、Adobe、苹果公司、IBM 以及柯达。

### 与其他图像格式相比，使用 SVG 的优势在于：

* SVG 可被非常多的工具读取和修改（比如记事本）
* SVG 与 JPEG 和 GIF 图像比起来，尺寸更小，且可压缩性更强。
* SVG 是可伸缩的
* SVG 图像可在任何的分辨率下被高质量地打印
* SVG 可在图像质量不下降的情况下被放大
* SVG 图像中的文本是可选的，同时也是可搜索的（很适合制作地图）
* SVG 可以与 JavaScript 技术一起运行
* SVG 是开放的标准
* SVG 文件是纯粹的 XML
* SVG 的主要竞争者是 Flash。

与 Flash 相比，SVG 最大的优势是与其他标准（比如 XSL 和 DOM）相兼容。而 Flash 则是未开源的私有技术。

### 查看 SVG 文件

Internet Explorer9，火狐，谷歌 Chrome，Opera 和 Safari 都支持 SVG。

IE8 和早期版本都需要一个插件 - 如 Adobe SVG 浏览器，这是免费提供的。

### 创建 SVG 文件

由于 SVG 是 XML 文件，SVG 图像可以用任何文本编辑器创建，但它往往是与一个绘图程序一起使用，如 Inkscape，更方便地创建 SVG 图像。


### SVG 在 HTML 页面
SVG 文件可通过以下标签嵌入 HTML 文档：`<embed>、<object> 或者 <iframe>`。

SVG的代码可以直接嵌入到HTML页面中，或您可以直接链接到SVG文件。

使用 `<embed>` 标签
`<embed>`:

优势：所有主要浏览器都支持，并允许使用脚本
缺点：不推荐在HTML4和XHTML中使用（但在HTML5允许）
语法:
```html
<embed src="circle1.svg" type="image/svg+xml" />
```
结果：

使用 `<object>` 标签
`<object>`:

优势：所有主要浏览器都支持，并支持HTML4，XHTML和HTML5标准
缺点：不允许使用脚本。
语法:
```html
<object data="circle1.svg" type="image/svg+xml"></object>
```
结果：

使用 `<iframe>` 标签
`<iframe>`:


优势：所有主要浏览器都支持，并允许使用脚本
缺点：不推荐在HTML4和XHTML中使用（但在HTML5允许）
语法:
```html
<iframe src="circle1.svg"></iframe>
```
结果:

直接在HTML嵌入SVG代码
在Firefox、Internet Explorer9、谷歌Chrome和Safari中，你可以直接在HTML嵌入SVG代码。

实例
```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
   <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg> 
```

### SVG Shapes
SVG有一些预定义的形状元素，可被开发者使用和操作：

* 矩形 `<rect>`
* 圆形 `<circle>`
* 椭圆 `<ellipse>`
* 线 `<line>`
* 折线 `<polyline>`
* 多边形 `<polygon>`
* 路径 `<path>`

### SVG 矩形 - `<rect>`
实例 1
`<rect>` 标签可用来创建矩形，以及矩形的变种：

下面是SVG代码：

实例
```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect width="300" height="100"
  style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)"/>
</svg>
对于Opera用户： 查看SVG文件（右键单击SVG图形预览源）。
代码解析:
rect 元素的 width 和 height 属性可定义矩形的高度和宽度
style 属性用来定义 CSS 属性
CSS 的 fill 属性定义矩形的填充颜色（rgb 值、颜色名或者十六进制值）
CSS 的 stroke-width 属性定义矩形边框的宽度
CSS 的 stroke 属性定义矩形边框的颜色
```

### SVG `<circle>`
SVG 圆形 - `<circle>`
`<circle>` 标签可用来创建一个圆：

下面是SVG代码：

实例
```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <circle cx="100" cy="50" r="40" stroke="black"
  stroke-width="2" fill="red"/>
</svg>

对于Opera用户：查看SVG文件（右键单击SVG图形预览源）。
代码解析：
cx和cy属性定义圆点的x和y坐标。如果省略cx和cy，圆的中心会被设置为(0, 0)
r属性定义圆的半径
```

### SVG 椭圆 - `<ellipse>`
实例 1
`<ellipse>` 元素是用来创建一个椭圆：

椭圆与圆很相似。不同之处在于椭圆有不同的x和y半径，而圆的x和y半径是相同的：

下面是SVG代码：

实例
```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <ellipse cx="300" cy="80" rx="100" ry="50"
  style="fill:yellow;stroke:purple;stroke-width:2"/>
</svg>
代码解析：

CX属性定义的椭圆中心的x坐标
CY属性定义的椭圆中心的y坐标
RX属性定义的水平半径
RY属性定义的垂直半径
```
实例 2
下面的例子创建了三个累叠而上的椭圆：
下面是SVG代码：
实例
```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <ellipse cx="240" cy="100" rx="220" ry="30" style="fill:purple"/>
  <ellipse cx="220" cy="70" rx="190" ry="20" style="fill:lime"/>
  <ellipse cx="210" cy="45" rx="170" ry="15" style="fill:yellow"/>
</svg>

```
实例 3
```html
下面的例子组合了两个椭圆（一个黄的和一个白的）：
下面是SVG代码：
实例
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <ellipse cx="240" cy="50" rx="220" ry="30" style="fill:yellow"/>
  <ellipse cx="220" cy="50" rx="190" ry="20" style="fill:white"/>
</svg>
```


### SVG 直线 - `<line>`
`<line>` 元素是用来创建一个直线：

下面是SVG代码：

实例
```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="0" y1="0" x2="200" y2="200"
  style="stroke:rgb(255,0,0);stroke-width:2"/>
</svg>
x1 属性在 x 轴定义线条的开始
y1 属性在 y 轴定义线条的开始
x2 属性在 x 轴定义线条的结束
y2 属性在 y 轴定义线条的结束
```

###  SVG 多边形 - `<polygon>`
实例 1
`<polygon>` 标签用来创建含有不少于三个边的图形。
```html
多边形是由直线组成，其形状是"封闭"的（所有的线条 连接起来）。
Remarkpolygon来自希腊。 "Poly" 意味 "many" ， "gon" 意味 "angle".
下面是SVG代码：
实例
<svg  height="210" width="500">
  <polygon points="200,10 250,190 160,210"
  style="fill:lime;stroke:purple;stroke-width:1"/>
</svg>
代码解析：
points 属性定义多边形每个角的 x 和 y 坐标
```
实例 2
下面的示例创建一个四边的多边形：
下面是SVG代码：
实例
```html
<svg height="250" width="500">
  <polygon points="220,10 300,210 170,250 123,234" style="fill:lime;stroke:purple;stroke-width:1" />
</svg>
```
实例 3
```html
使用 <polygon> 元素创建一个星型:
下面是SVG代码：
<svg height="210" width="500">
  <polygon points="100,10 40,198 190,78 10,78 160,198"
  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;" />
</svg>
```
实例 4
```html
改变 fill-rule 属性为 "evenodd":
下面是SVG代码：
实例
<svg height="210" width="500">
  <polygon points="100,10 40,198 190,78 10,78 160,198"
  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
</svg>
```

### SVG 多段线 - `<polyline>`
实例 1
`<polyline>` 元素是用于创建任何只有直线的形状：
```html
下面是SVG代码：
实例
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <polyline points="20,20 40,25 60,40 80,120 120,140 200,180"
  style="fill:none;stroke:black;stroke-width:3" />
</svg>
```

实例 2
```html
只有直线的另一个例子：
下面是SVG代码：
实例
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <polyline points="0,40 40,40 40,80 80,80 80,120 120,120 120,160" style="fill:white;stroke:red;stroke-width:4" />
</svg>
```

###  SVG 路径 - `<path>`
```html
<path> 元素用于定义一个路径。
下面的命令可用于路径数据：

M = moveto
L = lineto
H = horizontal lineto
V = vertical lineto
C = curveto
S = smooth curveto
Q = quadratic Bézier curve
T = smooth quadratic Bézier curveto
A = elliptical Arc
Z = closepath
注意：以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位。

实例 1
上面的例子定义了一条路径，它开始于位置150 0，到达位置75 200，然后从那里开始到225 200，最后在150 0关闭路径。
下面是SVG代码：
实例
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <path d="M150 0 L75 200 L225 200 Z" />
</svg>
```
实例 2

```html
下面的例子创建了一个二次方贝塞尔曲线，A 和 C 分别是起点和终点，B 是控制点：
下面是SVG代码：
实例
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <path id="lineAB" d="M 100 350 l 150 -300" stroke="red"
  stroke-width="3" fill="none" />
  <path id="lineBC" d="M 250 50 l 150 300" stroke="red"
  stroke-width="3" fill="none" />
  <path d="M 175 200 l 150 0" stroke="green" stroke-width="3"
  fill="none" />
  <path d="M 100 350 q 150 -300 300 0" stroke="blue"
  stroke-width="5" fill="none" />
  <!-- Mark relevant points -->
  <g stroke="black" stroke-width="3" fill="black">
    <circle id="pointA" cx="100" cy="350" r="3" />
    <circle id="pointB" cx="250" cy="50" r="3" />
    <circle id="pointC" cx="400" cy="350" r="3" />
  </g>
  <!-- Label the points -->
  <g font-size="30" font="sans-serif" fill="black" stroke="none"
  text-anchor="middle">
    <text x="100" y="350" dx="-30">A</text>
    <text x="250" y="50" dy="-10">B</text>
    <text x="400" y="350" dx="30">C</text>
  </g>
</svg>
```

### SVG 文本 - `<text>`
```html
<text> 元素用于定义文本。

实例 1
写一个文本：
下面是SVG代码：

实例
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <text x="0" y="15" fill="red">I love SVG</text>
</svg>

实例 2
旋转的文字：
下面是SVG代码：
实例
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <text x="0" y="15" fill="red" transform="rotate(30 20,40)">I love SVG</text>
</svg>
实例 3
路径上的文字：

下面是SVG代码：
实例
<svg xmlns="http://www.w3.org/2000/svg" version="1.1"
xmlns:xlink="http://www.w3.org/1999/xlink">
   <defs>
    <path id="path1" d="M75,20 a1,1 0 0,0 100,0" />
  </defs>
  <text x="10" y="100" style="fill:red;">
    <textPath xlink:href="#path1">I love SVG I love SVG</textPath>
  </text>
</svg>



实例 4
元素可以安排任何分小组与<tspan> 元素的数量。每个<tspan> 元素可以包含不同的格式和位置。几行文本(与 <tspan> 元素):
下面是SVG代码：
实例
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <text x="10" y="20" style="fill:red;">Several lines:
    <tspan x="10" y="45">First line</tspan>
    <tspan x="10" y="70">Second line</tspan>
  </text>
</svg>
实例 5
作为链接文本（ <a> 元素）：
下面是SVG代码：
实例
<svg xmlns="http://www.w3.org/2000/svg" version="1.1"
xmlns:xlink="http://www.w3.org/1999/xlink">
  <a xlink:href="http://www.w3schools.com/svg/" target="_blank">
    <text x="0" y="15" fill="red">I love SVG</text>
  </a>
</svg>
```


### SVG 参考手册
```html
SVG 元素
元素	说明	属性
<a>	创建一个SVG元素周围链接	xlink:show
xlink:actuate
xlink:href
target
<altGlyph>	允许对象性文字进行控制，来呈现特殊的字符数据	x
y
dx
dy
rotate
glyphRef
format
xlink:href
<altGlyphDef>	定义一系列象性符号的替换	id
<altGlyphItem>	定义一系列候选的象性符号的替换	id
<animate>	随时间动态改变属性	attributeName="目标属性名称"
from="起始值"
to="结束值"
dur="持续时间"
repeatCount="动画时间将发生"
<animateColor>	定义随着时间的推移颜色转换	by="相对偏移值"
from="起始值"
to="结束值"
<animateMotion>	使元素沿着动作路径移动	calcMode="动画的插补模式。可以是'discrete', 'linear', 'paced', 'spline'"
path="运动路径"
keyPoints="沿运动路径的对象目前时间应移动多远"
rotate="应用旋转变换"
xlink:href="一个URI引用<path>元素，它定义运动路径"
<animateTransform>	动画上一个目标元素变换属性，从而使动画控制平移，缩放，旋转或倾斜	by="相对偏移值"
from="起始值"
to="结束值"
type="类型的转换其值是随时间变化。可以是 'translate', 'scale', 'rotate', 'skewX', 'skewY'"
<circle>	定义一个圆	cx="圆的x轴坐标"
cy="圆的y轴坐标"
r="圆的半径". 必需.

+ 显现属性：颜色，FillStroke，图形
<clipPath>	用于隐藏位于剪切路径以外的对象部分。定义绘制什么和什么不绘制的模具被称为剪切路径	clip-path="引用剪贴路径和引用剪贴路径交叉"
clipPathUnits="userSpaceOnUse'或'objectBoundingBox"。第二个值childern一个对象的边框，会使用掩码的一小部分单位（默认："userSpaceOnUse"）"
<color-profile>	指定颜色配置文件的说明（使用CSS样式文件时）	local="本地存储颜色配置文件唯一ID"
name=""
rendering-intent="auto|perceptual|relative-colorimetric|saturation|absolute-colorimetric"
xlink:href="ICC配置文件资源URI"
<cursor>	定义一个独立于平台的自定义光标	x="x轴左上角光标（默认为0）"
y="y轴的左上角光标（默认为0）"
xlink:href="使用光标图像URI
<defs>	引用的元素容器	 
<desc>	对 SVG 中的元素的纯文本描述 - 并不作为图形的一部分来显示。用户代理会将其显示为工具提示	 
<ellipse>	定义一个椭圆	cx="椭圆x轴坐标"
cy="椭圆y轴坐标"
rx="沿x轴椭圆形的半径"。必需。
ry="沿y轴长椭圆形的半径"。必需。

+ 显现属性：颜色，FillStroke，图形
<feBlend>	使用不同的混合模式把两个对象合成在一起	mode="图像混合模式：normal|multiply|screen|darken|lighten"
in="标识为给定的滤镜原始输入：SourceGraphic | SourceAlpha | BackgroundImage | BackgroundAlpha | FillPaint | StrokePaint | <filter-primitive-reference>"
in2="第二输入图像的混合操作"
feColorMatrix	SVG滤镜。适用矩阵转换	 
feComponentTransfer	SVG 滤镜。执行数据的 component-wise 重映射	 
feComposite	SVG 滤镜	 
feConvolveMatrix	SVG 滤镜	 
feDiffuseLighting	SVG 滤镜	 
feDisplacementMap	SVG 滤镜	 
feDistantLight	SVG滤镜。定义一个光源	 
feFlood	SVG滤镜	 
feFuncA	SVG 滤镜。feComponentTransfer 的子元素	 
feFuncB	SVG 滤镜。feComponentTransfer 的子元素	 
feFuncG	SVG 滤镜。feComponentTransfer 的子元素	 
feFuncR	SVG 滤镜。feComponentTransfer 的子元素	 
feGaussianBlur	SVG滤镜。执行高斯模糊图像	 
feImage	SVG滤镜。	 
feMerge	SVG滤镜。建立在彼此顶部图像层	 
feMergeNode	SVG 滤镜。feMerge的子元素	 
feMorphology	SVG 滤镜。 对源图形执行"fattening" 或者 "thinning"	 
feOffset	SVG滤镜。相对其当前位置移动图像	 
fePointLight	SVG滤镜	 
feSpecularLighting	SVG滤镜	 
feSpotLight	SVG滤镜	 
feTile	SVG滤镜	 
feTurbulence	SVG滤镜	 
filter	滤镜效果的容器	 
font	定义字体	 
font-face	描述一种字体的特点	 
font-face-format	 	 
font-face-name	 	 
font-face-src	 	 
font-face-uri	 	 
foreignObject	 	 
<g>	用于把相关元素进行组合的容器元素	id="该组的名称"
fill="该组填充颜色"
opacity="该组不透明度"

+ 显现属性:
All
glyph	为给定的象形符号定义图形	 
glyphRef	定义要使用的可能的象形符号	 
hkern	 	 
<image>	定义图像	x="图像的左上角的x轴坐标"
y="图像的左上角的y轴坐标"
width="图像的宽度". 必须.
height="图像的高度". 必须.
xlink:href="图像的路径". 必须.

+ 显现属性:
Color, Graphics, Images, Viewports
<line>	定义一条线	x1="直线起始点x坐标"
y1="直线起始点y坐标"
x2="直线终点x坐标"
y2="直线终点y坐标"

+ 显现属性:
Color, FillStroke, Graphics, Markers
<linearGradient>	定义线性渐变。通过使用矢量线性渐变填充对象，并可以定义为水平，垂直或角渐变。	id="id 属性可为渐变定义一个唯一的名称。引用必须"
gradientUnits="'userSpaceOnUse' or 'objectBoundingBox'.使用视图框或对象，以确定相对位置矢量点。 （默认为'objectBoundingBox）"
gradientTransform="适用于渐变的转变"
x1="渐变向量x启动点（默认0％）"
y1="渐变向量y启动点（默认0％）"
x2="渐变向量x的终点。 （默认100％）"
y2="渐变向量y的终点。 （默认0％）"
spreadMethod="'pad' or 'reflect' or 'repeat'"
xlink:href="reference to another gradient whose attribute values are used as defaults and stops included. Recursive"
<marker>	标记可以放在直线，折线，多边形和路径的顶点。这些元素可以使用marker属性的"marker-start"，"marker-mid"和"marker-end"，继承默认情况下或可设置为"none"或定义的标记的URI。您必须先定义标记，然后才可以通过其URI引用。任何一种形状，可以把标记放在里面。他们绘制元素时把它们附加到顶部	markerUnits="strokeWidth'或'userSpaceOnUse"。如果是strokeWidth"那么使用一个单位等于一个笔划宽度。否则，标记尺度不会使用同一视图单位作为引用元素（默认为'strokeWidth'）"
refx="标记顶点连接的位置（默认为0）"
refy="标记顶点连接的位置（默认为0）"
orient="'auto'始终显示标记的角度。 "auto"将计算某个角度使得X轴一个顶点的正切值（默认为0）
markerWidth="标记的宽度（默认3）"
markerHeight="标记的高度（默认3）"
viewBox="各点"看到"这个SVG绘图区域。由空格或逗号分隔的4个值。(min x, min y, width, height)"

+ presentation attributes:
All
<mask>	度屏蔽是一种不透明度值的组合和裁剪。像裁剪，您可以使用图形，文字或路径定义掩码的部分。一个掩码的默认状态是完全透明的，也就是裁剪平面的对面的。在掩码的图形设置掩码的不透明部分	maskUnits="'userSpaceOnUse' or 'objectBoundingBox'.设定裁剪面是否是相对完整的视窗或对象（默认：'objectBoundingBox'）"
maskContentUnits="第二个掩码相对对象的图形位置使用百分比'userSpaceOnUse'或'objectBoundingBox'（默认：'userSpaceOnUse'）"
x="裁剪面掩码（默认值：-10％）"
y="裁剪面掩码（默认值：-10％）"
width="裁剪面掩码（默认是：120％）"
height="裁剪面掩码（默认是：120％）"
metadata	指定元数据	 
missing-glyph	 	 
mpath	 	 
<path>	定义一个路径	d="定义路径指令"
pathLength="如果存在，路径将进行缩放，以便计算各点相当于此值的路径长度"
transform="转换列表"

+ 显现属性:
Color, FillStroke, Graphics, Markers
<pattern>	定义坐标，你想要的视图显示和视图的大小。然后添加到您的模式形状。该模式命中时重复视图框的边缘（可视范围）	id="用于引用这个模式的唯一ID。"必需的。
patternUnits="userSpaceOnUse'或'objectBoundingBox"。第二个值X，Y，width，height 一个会使用模式对象的边框的小部分，单位（％）。"
patternContentUnits="'userSpaceOnUse'或 'objectBoundingBox'"
patternTransform="允许整个表达式进行转换"
x="模式的偏移量，来自左上角（默认为0）"
y="模式的偏移量，来自左上角（默认为0）"
width="模式平铺的宽度（默认为100％）"
height="模式平铺的高度（默认为100％）"
viewBox="各点"看到"这个SVG绘图区域。由空格或逗号分隔的4个值。(min x, min y, width, height)"
xlink:href="另一种模式，其属性值是默认值以及任何子类可以继承。递归"
 
<polygon>	定义一个包含至少三边图形	points="多边形的点。点的总数必须是偶数"。必需的。
fill-rule="FillStroke演示属性的部分"

+ 显现属性:
Color, FillStroke, Graphics, Markers
<polyline>	定义只有直线组成的任意形状	points=折线上的"点"。必需的。

+ 显现属性:
Color, FillStroke, Graphics, Markers
<radialGradient>	定义放射性渐变。放射性渐变创建一个圆圈	gradientUnits="'userSpaceOnUse' or 'objectBoundingBox'. 使用视图框或对象以确定相对位置的矢量点。 （默认为'objectBoundingBox）"
gradientTransform="适用于渐变的变换"
cx="渐变的中心点（数字或％ - 50％是默认）"
cy="渐变的中心点。 （默认50％）"
r="渐变的半径。 （默认50％）"
fx="渐变的焦点。 （默认0％）"
fy="渐变的焦点。 （默认0％）"
spreadMethod="'pad' or 'reflect' or 'repeat'"
xlink:href="引用到另一个渐变，其属性值作为默认值。递归"
<rect>	定义一个矩形	x="矩形的左上角的x轴"
y="矩形的左上角的y轴"
rx="x轴的半径（round元素）"
ry="y轴的半径（round元素）"
width="矩形的宽度"。必需的。
height="矩形的高度"。必需的。

+ 显现属性:
Color, FillStroke, Graphics
script	脚本容器。（例如ECMAScript）	 
set	设置一个属性值指定时间	 
<stop>	渐变停止	offset="偏移停止（0到1/0％到100％）". 参考
stop-color="这个stop的颜色"
stop-opacity="这个Stop的不透明度 (0到1)"
style	可使样式表直接嵌入SVG内容内部	 
<svg>	创建一个SVG文档片段	x="左上角嵌入（默认为0）"
y="左上角嵌入（默认为0）"
width="SVG片段的宽度（默认为100％）"
height="SVG片段的高度（默认为100％）"
viewBox="点"seen"这个SVG绘图区域。由空格或逗号分隔的4个值。 (min x, min y, width, height)"
preserveAspectRatio="'none'或任何'xVALYVAL'的9种组合,VAL是"min"，"mid"或"max"。（默认情况下none）"
zoomAndPan="'magnify' or 'disable'.Magnify选项允许用户平移和缩放您的文件（默认Magnify ）"
xml="最外层<svg>元素都需要安装SVG和它的命名空间： xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve""

+ 显现属性:
All
switch	 	 
symbol	 	 
<text>	定义一个文本	x="列表的X -轴的位置。在文本中在第n个字符的位置在第n个x轴。如果后面存在额外的字符，耗尽他们最后一个字符之后放置的位置。 0是默认"
y="列表的Y轴位置。（参考x）0是默认"
dx="在字符的长度列表中移动相对最后绘制标志符号的绝对位置。（参考x）"
dy="在字符的长度列表中移动相对最后绘制标志符号的绝对位置。（参考x）"
rotate="一个旋转的列表。第n个旋转是第n个字符。附加字符没有给出最后的旋转值"
textLength="SVG查看器将尝试显示文本之间的间距/或字形调整的文本目标长度。（默认：正常文本的长度）"
lengthAdjust="告诉查看器，如果指定长度就尝试进行调整用以呈现文本。这两个值是'spacing'和'spacingAndGlyphs'"

+ 显现属性:
Color, FillStroke, Graphics, FontSpecification, TextContentElements
textPath	 	 
title	对 SVG 中的元素的纯文本描述 - 并不作为图形的一部分来显示。用户代理会将其显示为工具提示	 
<tref>	引用任何SVG文档中的<text>元素和重用	相同的<TEXT>元素
<tspan>	元素等同于<text>，但可以在内部嵌套文本标记以及内部本身	Identical to the <text> element
+ in addition:
xlink:href="引用一个<TEXT>元素"
<use>	使用URI引用一个<G>,<svg>或其他具有一个唯一的ID属性和重复的图形元素。复制的是原始的元素，因此文件中的原始存在只是一个参考。原始影响到所有副本的任何改变。	x="克隆元素的左上角的x轴"
y="克隆元素的左上角的y轴"
width="克隆元素的宽度"
height="克隆元素的高度"
xlink:href="URI引用克隆元素"

+ 显现属性:
All
view	 	 
vkern
```