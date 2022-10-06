# RegExp
[[toc]]

### 正则对象常用的方法

* 一 test方法：检测某个字符串是否匹配，有的话返回true，没有的话返回false。接受一个字符串作为参数。

* 二exec方法：接受的是字符串，返回的结果是数组。这个数组是一个对象，该方法中的正则对象如果不是全局匹配，即没有g修饰符，则每次调用只会从字符串开头处匹配第一个结果，且每次调用结果都是一样的。只有指定为全局匹配，才能够按照从左往右依次去匹配，每次调用匹配一个结果。

* 三 compile方法。改方法主要是对正则进行编译，适合于一个正则被多次调用的情况。改方法不太常用

### JS中的String类型的对象也拥有一些和正则相关的方法

* 一：search方法：查找匹配的子串第一次出现的位置，存在就返回索引值，不存在返回-1。

* 二：split方法：字符串拆分成数组。字符串拆分规则不统一的情况下才需要使用

* 三：replace方法：将字符串中的某些子串替换为需要的内容。第一个参数为正则或者是子串，第二个参数为被替换的新的字符串。

* 四：match方法：接受一个正则作为参数，用来匹配一个字符串，它的输出结果在不是全局匹配的情况下和exec方法的结果一致即一个数组并带有额外的属性，如果采用全局匹配，则不返回任何和其被匹配字符串相关的信息，只返回匹配的结果
 
----------------------------------------------- 

正则表达式元字符和普通字符:
根据正则表达式语法规则，正则表达式的匹配模式是由一系列的字符构成的。
### 一.普通字符:

大多数的字符仅能够描述它们本身，这些字符称作普通字符，例如所有的字母和数字。<br/>
也就是说普通字符只能够匹配字符串中与它们相同的字符。<br/>
### 二.元字符:
由于普通字符只能匹配与自身相同的字符，那么正则表达式的灵活性和强大的匹配功能就不能够完全展现，于是正则表达式中还规定了一系列的特殊字符，这些特殊字符不是按照字符的直接量进行匹配的，而是具有特殊的语义，

例如下面如下字符:
```r
^ $ . * + ? = ! : | \ / ( ) [ ] { }
```
::: tip
虽然说上面的字符具有特殊含义，但是某些字符只有在某些上下文环境中才具有特殊的含义。<br/>
如果要匹配这些具有特殊含义的字符直接量，需要在这些字符前面加反斜杠(\)进行转义，例如我想匹配一个$直接量,需要写成\$，否则就是匹配一个结尾位置。正是由于这些特殊字符的存在，才会是正则表达式具有强大的功能。<br/>
由于它们是构造各种匹配复杂文本的正则表达式的基本字符，所以被称作元字符。<br/>

元字符的用法会在后面的章节中得到介绍，这里只是介绍一下此概念。正则表达式语言由两种基本字符类型组成：原义（正常）文本字符和元字符。元字符使正则表达式具有处理能力。元字符既可以是放在 [] 中的任意单个字符（如 [a] 表示匹配单个小写字符 a ），也可以是字符序列（如 [a-d] 表示匹配 a 、 b 、 c 、 d 之间的任意一个字符，而 \w 表示任意英文字母和数字及下划线），下面是一些常见的元字符：<br/>

* . 匹配除 \n 以外的任何字符（注意元字符是小数点）。
* [abcde] 匹配 abcde 之中的任意一个字符
* [a-h] 匹配 a 到 h 之间的任意一个字符
* [^fgh] 不与 fgh 之中的任意一个字符匹配
* \w 匹配大小写英文字符及数字 0 到 9 之间的任意一个及下划线，相当于 [a-zA-Z0-9_]
* \W 不匹配大小写英文字符及数字 0 到 9 之间的任意一个，相当于 [^a-zA-Z0-9_]
* \s 匹配任何空白字符，相当于 [ \f\n\r\t\v]
* \S 匹配任何非空白字符，相当于 [^\s]
* \d 匹配任何 0 到 9 之间的单个数字，相当于 [0-9]
* \D 不匹配任何 0 到 9 之间的单个数字，相当于 [^0-9]
* [\u4e00-\u9fa5] 匹配任意单个汉字（这里用的是 Unicode 编码表示汉字的 )


正则表达式限定符

上面的元字符都是针对单个字符匹配的，要想同时匹配多个字符的话，还需要借助限定符。下面是一些常见的限定符 ( 下表中 n 和 m 都是表示整数，并且 0<n<m) ：  <br/>
*  *匹配 0 到多个元字符，相当于 {0,}
* ? 匹配 0 到 1 个元字符，相当于 {0,1}
* {n} 匹配 n 个元字符
* {n,} 匹配至少 n 个元字符
* {n,m} 匹配 n 到 m 个元字符
+ 匹配至少 1 个元字符，相当于 {1,}
* \b 匹配单词边界
* ^ 字符串必须以指定的字符开始
* $ 字符串必须以指定的字符结束

说明：
（ 1 ）由于在正则表达式中“ \ ”、“ ? ”、“ * ”、“ ^ ”、“ $ ”、“ + ”、“（”、“）”、“ | ”、“ { ”、“ [ ”等字符已经具有一定特殊意义，如果需要用它们的原始意义，则应该对它进行转义，例如希望在字符串中至少有一个“ \ ”，那么正则表达式应该这么写： \\+ 。<br/>
（ 2 ）可以将多个元字符或者原义文本字符用括号括起来形成一个分组，比如 ^(13)[4-9]\d{8}$ 表示任意以 13 开头的移动手机号码。<br/>
（ 3 ）另外对于中文字符的匹配是采用其对应的 Unicode 编码来匹配的，对于单个 Unicode 字符，如 \u4e00 表示汉字“一”， \u9fa5 表示汉字“龥”，在 Unicode 编码中这分别是所能表示的汉字的第一个和最后一个的 Unicode 编码，在 Unicode 编码中能表示 20901 个汉字。<br/>
（ 4 ）关于 \b 的用法，它代表单词的开始或者结尾，以字符串“ 123a 345b 456 789d ”作为示例字符串，如果正则表达式是“ \b\d{3}\b ”，则仅能匹配 456 。<br/>
（ 5 ）可以使用“ | ”来表示或的关系，例如 [z|j|q] 表示匹配 z 、 j 、 q 之中的任意一个字母。<br/>
:::

|     表达式          |      匹配      |
|:-------:            |   :------:    |
| /^\s*$/ | 匹配空行。 |
| /\d{2}-\d{5}/       |  验证由两位数字、一个连字符再加 5 位数字组成的 ID 号|
| /<\s*(\S+)(\s[^>]*)?>[\s\S]*<\s*\/\1\s*>/ | 	匹配 HTML 标记。         |


<br/>

|字符	     | 说明                                                                                                                |
|:---:       |----------------------------------------------------------------------------------------                             |
| \          | 将下一字符标记为特殊字符、文本、反向引用或八进制转义符。例如，“n”匹配字符“n”。“\n”匹配换行符。序列“\\”匹配“\”，“\(”匹配“(”。
|^	         | 匹配输入字符串开始的位置。如果设置了 RegExp 对象的 Multiline 属性，^ 还会与“\n”或“\r”之后的位置匹配。                       
|$	         | 匹配输入字符串结尾的位置。如果设置了 RegExp 对象的 Multiline 属性，$ 还会与“\n”或“\r”之前的位置匹配。                        
|*	         | 零次或多次匹配前面的字符或子表达式。例如，zo* 匹配“z”和“zoo”。* 等效于 {0,}。
|+           | 一次或多次匹配前面的字符或子表达式。例如，“zo+”与“zo”和“zoo”匹配，但与“z”不匹配。+ 等效于 {1,}。
|?           | 零次或一次匹配前面的字符或子表达式。例如，“do(es)?”匹配“do”或“does”中的“do”。? 等效于 {0,1}。
|{n}	     | n 是非负整数。正好匹配 n 次。例如，“o{2}”与“Bob”中的“o”不匹配，但与“food”中的两个“o”匹配。
|{n,}	     | n 是非负整数。至少匹配 n 次。例如，“o{2,}”不匹配“Bob”中的“o”，而匹配“foooood”中的所有 o。“o{1,}”等效于“o+”。“o{0,}”等效于“o*”。
|{n,m}	     | M 和 n 是非负整数，其中 n <= m。匹配至少 n 次，至多 m 次。例如，“o{1,3}”匹配“fooooood”中的头三个 o。'o{0,1}' 等效于 ‘o?'。注意：您不能将空格插入逗号和数字之间。
|?	         | 当此字符紧随任何其他限定符（*、+、?、{n}、{n,}、{n,m}）之后时，匹配模式是“非贪心的”。“非贪心的”模式匹配搜索到的、尽可能短的字符串，而默认的“贪心的”模式匹配搜索到的、尽可能长的字符串。例如，在字符串“oooo”中，“o+?”只匹配单个“o”，而“o+”匹配所有“o”。
|.     	     | 匹配除“\n”之外的任何单个字符。若要匹配包括“\n”在内的任意字符，请使用诸如“[\s\S]”之类的模式。
|(pattern)   | 匹配 pattern 并捕获该匹配的子表达式。可以使用 $0…$9 属性从结果“匹配”集合中检索捕获的匹配。若要匹配括号字符 ( )，请使用“\(”或者“\)”。
|(?:pattern) |	 匹配 pattern 但不捕获该匹配的子表达式，即它是一个非捕获匹配，不存储供以后使用的匹配。这对于用“or”字符 (|) 组合模式部件的情况很有用。例如，'industr(?:y|ies) 是比 ‘industry|||industries' 更经济的表达式。
|(?=pattern) | 执行正向预测先行搜索的子表达式，该表达式匹配处于匹配 pattern 的字符串的起始点的字符串。它是一个非捕获匹配，即不能捕获供以后使用的匹配。例如，'Windows (?=95|98|NT|2000)' 匹配“Windows 2000”中的“Windows”，但不匹配“Windows 3.1”中的“Windows”。预测先行不占用字符，即发生匹配后，下一匹配的搜索紧随上一匹配之后，而不是在组成预测先行的字符后。
|(?!pattern) | 执行反向预测先行搜索的子表达式，该表达式匹配不处于匹配 pattern 的字符串的起始点的搜索字符串。它是一个非捕获匹配，即不能捕获供以后使用的匹配。例如，'Windows (?!95|98|NT|2000)' 匹配“Windows 3.1”中的 “Windows”，但不匹配“Windows 2000”中的“Windows”。预测先行不占用字符，即发生匹配后，下一匹配的搜索紧随上一匹配之后，而不是在组成预测先行的字符后。
|x|y	     | 匹配 x 或 y。例如，'z|food' 匹配“z”或“food”。'(z|f)ood' 匹配“zood”或“food”。
|[xyz]	     | 字符集。匹配包含的任一字符。例如，“[abc]”匹配“plain”中的“a”。
|[^xyz]	     | 反向字符集。匹配未包含的任何字符。例如，“[^abc]”匹配“plain”中的“p”。
|[a-z]	     | 字符范围。匹配指定范围内的任何字符。例如，“[a-z]”匹配“a”到“z”范围内的任何小写字母。
|[^a-z]	     | 反向范围字符。匹配不在指定的范围内的任何字符。例如，“[^a-z]”匹配任何不在“a”到“z”范围内的任何字符。
|\b	         | 匹配一个字边界，即字与空格间的位置。例如，“er\b”匹配“never”中的“er”，但不匹配“verb”中的“er”。
|\B    	     | 非字边界匹配。“er\B”匹配“verb”中的“er”，但不匹配“never”中的“er”。
|\cx	     | 匹配 x 指示的控制字符。例如，\cM 匹配 Control-M 或回车符。x 的值必须在 A-Z 或 a-z 之间。如果不是这样，则假定 c 就是“c”字符本身。
|\d	         | 数字字符匹配。等效于 [0-9]。
|\D	         | 非数字字符匹配。等效于 [^0-9]。
|\f	         | 换页符匹配。等效于 \x0c 和 \cL。
|\n	         | 换行符匹配。等效于 \x0a 和 \cJ。
|\r	         | 匹配一个回车符。等效于 \x0d 和 \cM。
|\s	         | 匹配任何空白字符，包括空格、制表符、换页符等。与 [ \f\n\r\t\v] 等效。
|\S	         | 匹配任何非空白字符。与 [^ \f\n\r\t\v] 等效。
|\t	         | 制表符匹配。与 \x09 和 \cI 等效。
|\v	         | 垂直制表符匹配。与 \x0b 和 \cK 等效。
|\w	         | 匹配任何字类字符，包括下划线。与“[A-Za-z0-9_]”等效。
|\W	         | 与任何非单词字符匹配。与“[^A-Za-z0-9_]”等效。
|\xn	     | 匹配 n，此处的 n 是一个十六进制转义码。十六进制转义码必须正好是两位数长。例如，“\x41”匹配“A”。“\x041”与“\x04”&“1”等效。允许在正则表达式中使用 ASCII 代码。
|\num	     | 匹配 num，此处的 num 是一个正整数。到捕获匹配的反向引用。例如，“(.)\1”匹配两个连续的相同字符。
|\n	         | 标识一个八进制转义码或反向引用。如果 \n 前面至少有 n 个捕获子表达式，那么 n 是反向引用。否则，如果 n 是八进制数 (0-7)，那么 n 是八进制转义码。
|\nm	     | 标识一个八进制转义码或反向引用。如果 \nm 前面至少有 nm 个捕获子表达式，那么 nm 是反向引用。如果 \nm 前面至少有 n 个捕获，则 n 是反向引用，后面跟有字符m。如果两种前面的情况都不存在，则 \nm 匹配八进制值 nm，其中 n 和 m 是八进制数字 (0-7)。
|\nml	     | 当 n 是八进制数 (0-3)，m 和 l 是八进制数 (0-7) 时，匹配八进制转义码 nml。
|\un	     | 匹配 n，其中 n 是以四位十六进制数表示的 Unicode 字符。例如，\u00A9 匹配版权符号 (©)。

### 校验数字的表达式
```js
 1 数字：^[0-9]*$
 2 n位的数字：^\d{n}$
 3 至少n位的数字：^\d{n,}$
 4 m-n位的数字：^\d{m,n}$
 5 零和非零开头的数字：^(0|[1-9][0-9]*)$
 6 非零开头的最多带两位小数的数字：^([1-9][0-9]*)+(.[0-9]{1,2})?$
 7 带1-2位小数的正数或负数：^(\-)?\d+(\.\d{1,2})?$
 8 正数、负数、和小数：^(\-|\+)?\d+(\.\d+)?$
 9 有两位小数的正实数：^[0-9]+(.[0-9]{2})?$
10 有1~3位小数的正实数：^[0-9]+(.[0-9]{1,3})?$
11 非零的正整数：^[1-9]\d*$ 或 ^([1-9][0-9]*){1,3}$ 或 ^\+?[1-9][0-9]*$
12 非零的负整数：^\-[1-9][]0-9*$ 或 ^-[1-9]\d*$
13 非负整数：^\d+$ 或 ^[1-9]\d*|0$
14 非正整数：^-[1-9]\d*|0$ 或 ^((-\d+)|(0+))$
15 非负浮点数：^\d+(\.\d+)?$ 或 ^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$
16 非正浮点数：^((-\d+(\.\d+)?)|(0+(\.0+)?))$ 或 ^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$
17 正浮点数：^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$ 或 ^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$
18 负浮点数：^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$ 或 ^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$
19 浮点数：^(-?\d+)(\.\d+)?$ 或 ^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$
```
### 校验字符的表达式
```js
 1 汉字：^[\u4e00-\u9fa5]{0,}$
 2 英文和数字：^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$
 3 长度为3-20的所有字符：^.{3,20}$
 4 由26个英文字母组成的字符串：^[A-Za-z]+$
 5 由26个大写英文字母组成的字符串：^[A-Z]+$
 6 由26个小写英文字母组成的字符串：^[a-z]+$
 7 由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$
 8 由数字、26个英文字母或者下划线组成的字符串：^\w+$ 或 ^\w{3,20}$
 9 中文、英文、数字包括下划线：^[\u4E00-\u9FA5A-Za-z0-9_]+$
10 中文、英文、数字但不包括下划线等符号：^[\u4E00-\u9FA5A-Za-z0-9]+$ 或 ^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$
11 可以输入含有^%&',;=?$\"等字符：[^%&',;=?$\x22]+
12 禁止输入含有~的字符：[^~\x22]+
```
### 特殊需求表达式
```js
 1 Email地址：^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
 2 域名：[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?
 3 InternetURL：[a-zA-z]+://[^\s]* 或 ^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$
 4 手机号码：^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$
 5 电话号码("XXX-XXXXXXX"、"XXXX-XXXXXXXX"、"XXX-XXXXXXX"、"XXX-XXXXXXXX"、"XXXXXXX"和"XXXXXXXX")：^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$
 6 国内电话号码(0511-4405222、021-87888822)：\d{3}-\d{8}|\d{4}-\d{7}
 7 18位身份证号码(数字、字母x结尾)：^((\d{18})|([0-9x]{18})|([0-9X]{18}))$
 8 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：^[a-zA-Z][a-zA-Z0-9_]{4,15}$
 9 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：^[a-zA-Z]\w{5,17}$
10 强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)：^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$  
11 日期格式：^\d{4}-\d{1,2}-\d{1,2}
12 一年的12个月(01～09和1～12)：^(0?[1-9]|1[0-2])$
13 一个月的31天(01～09和1～31)：^((0?[1-9])|((1|2)[0-9])|30|31)$ 
14 钱的输入格式：
15    1.有四种钱的表示形式我们可以接受:"10000.00" 和 "10,000.00", 和没有 "分" 的 "10000" 和 "10,000"：^[1-9][0-9]*$ 
16    2.这表示任意一个不以0开头的数字,但是,这也意味着一个字符"0"不通过,所以我们采用下面的形式：^(0|[1-9][0-9]*)$ 
17    3.一个0或者一个不以0开头的数字.我们还可以允许开头有一个负号：^(0|-?[1-9][0-9]*)$ 
18    4.这表示一个0或者一个可能为负的开头不为0的数字.让用户以0开头好了.把负号的也去掉,因为钱总不能是负的吧.下面我们要加的是说明可能的小数部分：^[0-9]+(.[0-9]+)?$ 
19    5.必须说明的是,小数点后面至少应该有1位数,所以"10."是不通过的,但是 "10" 和 "10.2" 是通过的：^[0-9]+(.[0-9]{2})?$ 
20    6.这样我们规定小数点后面必须有两位,如果你认为太苛刻了,可以这样：^[0-9]+(.[0-9]{1,2})?$ 
21    7.这样就允许用户只写一位小数.下面我们该考虑数字中的逗号了,我们可以这样：^[0-9]{1,3}(,[0-9]{3})*(.[0-9]{1,2})?$ 
22    8.1到3个数字,后面跟着任意个 逗号+3个数字,逗号成为可选,而不是必须：^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$ 
23    备注：这就是最终结果了,别忘了"+"可以用"*"替代如果你觉得空字符串也可以接受的话(奇怪,为什么?)最后,别忘了在用函数时去掉去掉那个反斜杠,一般的错误都在这里
24 xml文件：^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|M][l|L]$
25 中文字符的正则表达式：[\u4e00-\u9fa5]
26 双字节字符：[^\x00-\xff]    (包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计1))
27 空白行的正则表达式：\n\s*\r    (可以用来删除空白行)
28 HTML标记的正则表达式：<(\S*?)[^>]*>.*?</\1>|<.*? />    (网上流传的版本太糟糕，上面这个也仅仅能部分，对于复杂的嵌套标记依旧无能为力)
29 首尾空白字符的正则表达式：^\s*|\s*$或(^\s*)|(\s*$)    (可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式)
30 腾讯QQ号：[1-9][0-9]{4,}    (腾讯QQ号从10000开始)
31 中国邮政编码：[1-9]\d{5}(?!\d)    (中国邮政编码为6位数字)
32 IP地址：\d+\.\d+\.\d+\.\d+    (提取IP地址时有用)
33 IP地址：((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))
```
### 有了这25个正则表达式，代码效率提高80%

#### 1、手机号码的校验
```js
const phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
const phoneStr1 = '18886233487'
console.log(phoneReg.test(phoneStr1)) // true

const phoneStr2 = '17283017203897'
console.log(phoneReg.test(phoneStr2)) // false
```

#### 2、身份证的校验
```js
const sfzReg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
const sfzStr1 = '415106199801012130'
console.log(sfzReg.test(sfzStr1)) // true

const sfzStr2 = '718381298381212183'
console.log(sfzReg.test(sfzStr2)) // false
```

#### 3、邮箱的校验
```js
const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
const emailStrWY = '956666@163.com' // 163邮箱
const emailStrQQ = '956666@qq.com' // qq邮箱
console.log(emailReg.test(emailStrWY)) // true
console.log(emailReg.test(emailStrQQ)) // true

const noEmail = '72873213.com'
console.log(emailReg.test(noEmail)) // false
```

#### 4、URL的校验
```js
const urlReg = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/

const urlStr1 = 'https://haha.sunshine.com/xxx/xxx'
console.log(urlReg.test(urlStr1)) // true

const urlStr2 = 'sss://haha.sunshine.com/xxx/xxx'
console.log(urlReg.test(urlStr2)) // false
```

#### 5、IPv4的校验
```js
const ipv4Reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
const ipv4Str1 = '122.12.56.65'
console.log(ipv4Reg.test(ipv4Str1)) // true

const ipv4Str2 = '122.12.56.655'
console.log(ipv4Reg.test(ipv4Str2)) // false
```

#### 6、16进制颜色的校验
```js
const color16Reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
const color16Str1 = '#fff'
console.log(color16Reg.test(color16Str1)) // true

const color16Str2 = '#1234567'
console.log(color16Reg.test(color16Str2)) // false
```

#### 7、日期 YYYY-MM-DD
```js
const dateReg = /^\d{4}(\-)\d{1,2}\1\d{1,2}$/
const dateStr1 = '2021-10-10'
console.log(dateReg.test(dateStr1)) // true

const dateStr2 = '2021-01-01 1'
console.log(dateReg.test(dateStr2)) // false
```
#### 8、日期 YYYY-MM-DD hh:mm:ss
```js
const dateReg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/
const dateStr1 = '2021-10-10 16:16:16'
console.log(dateReg.test(dateStr1)) // true

const dateStr2 = '2021-10-10 16:'
console.log(dateReg.test(dateStr2)) // false
```

#### 9、整数的校验
```js
const intReg = /^[-+]?\d*$/
const intNum1 = 12345
console.log(intReg.test(intNum1)) // true

const intNum2 = 12345.1
console.log(intReg.test(intNum2)) // false
```
#### 10、小数的校验
```js
const floatReg = /^[-\+]?\d+(\.\d+)?$/

const floatNum = 1234.5
console.log(floatReg.test(floatNum)) // true
```
#### 11、保留n位小数
```js
function checkFloat(n) {
  return new RegExp(`^([1-9]+[\d]*(.[0-9]{1,${n}})?)$`)
}
// 保留2位小数
const floatReg = checkFloat(2)
const floatNum1 = 1234.5
console.log(floatReg.test(floatNum1)) // true

const floatNum2 = 1234.55
console.log(floatReg.test(floatNum2)) // true

const floatNum3 = 1234.555
console.log(floatReg.test(floatNum3)) // false
```

#### 12、邮政编号的校验
```js
const postalNoReg = /^\d{6}$/
const postalNoStr1 = '522000'
console.log(postalNoReg.test(postalNoStr1)) // true

const postalNoStr2 = '5220000'
console.log(postalNoReg.test(postalNoStr2)) // false
```
#### 13、QQ号的校验
```js
// 说明：5-11位数字
const qqReg = /^[1-9][0-9]{4,10}$/
const qqStr1 = '1915801633'
console.log(qqReg.test(qqStr1)) // true

const qqStr2 = '191580163333'
console.log(qqReg.test(qqStr2)) // false
```

#### 14、微信号的校验
```js
// 说明：6至20位，以字母开头，字母，数字，减号，下划线
const wxReg = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/
const wxStr1 = 'linsanxin885577'
console.log(wxReg.test(wxStr1)) // true

const wxStr2 = '厉害了我的vx'
console.log(wxReg.test(wxStr2)) // false
```
#### 15、车牌号的校验
```js
const carNoReg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
const carNoStr1 = '粤A12345'
console.log(carNoReg.test(carNoStr1)) // true

const carNoStr2 = '广东A12345'
console.log(carNoReg.test(carNoStr2)) // false
```
#### 16、只含字母的字符串
```js
const letterReg = /^[a-zA-Z]+$/
const letterStr1 = 'sunshineLin'
console.log(letterReg.test(letterStr1)) // true

const letterStr2 = 'sunshine_Lin'
console.log(letterReg.test(letterStr2)) // false
```

#### 17、包含中文的字符串
```js
const cnReg = /[\u4E00-\u9FA5]/
const cnStr1 = '我是sunshine_Lin，林三心'
console.log(cnReg.test(cnStr1)) // true

const cnStr2 = 'sunshine_Lin'
console.log(cnReg.test(cnStr2)) // false
```

#### 18、密码强度的校验
```js
说明：密码中必须包含字母、数字、特称字符，至少8个字符，最多30个字符
const passwordReg = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}/
const password1 = 'sunshine_Lin12345..'
console.log(passwordReg.test(password1)) // true

const password2 = 'sunshineLin12345'
console.log(passwordReg.test(password2)) // false
```

#### 19、字符串长度n的校验
```js
function checkStrLength(n) {
  return new RegExp(`^.{${n}}$`)
}
// 校验长度为3的字符串
const lengthReg = checkStrLength(3)

const str1 = 'hhh'
console.log(lengthReg.test(str1)) // true

const str2 = 'hhhhh'
console.log(lengthReg.test(str2)) // false
```
#### 20、文件拓展名的校验
```js
function checkFileName (arr) {
  arr = arr.map(name => `.${name}`).join('|')
  return new RegExp(`(${arr})$`)
}
const filenameReg = checkFileName(['jpg', 'png', 'txt'])

const filename1 = 'sunshine.jpg'
console.log(filenameReg.test(filename1)) // true
const filename2 = 'sunshine.png'
console.log(filenameReg.test(filename2)) // true
const filename3 = 'sunshine.txt'
console.log(filenameReg.test(filename3)) // true
const filename4 = 'sunshine.md'
console.log(filenameReg.test(filename4)) // false
```

#### 21、匹配img和src
```js
const imgReg = /<img.*?src=[\"|\']?(.*?)[\"|\']?\s.*?>/ig

const htmlStr = '<div></div><img src="sunshine.png" /><img src="sunshine111.png" />'
console.log(imgReg.exec(htmlStr))
// [
//   '<img src="sunshine.png" />',
//   'sunshine.png',
//   index: 11,
//   input: '<div></div><img src="sunshine.png" /><img src="sunshine111.png" />',
//   groups: undefined
// ]
console.log(imgReg.exec(htmlStr))
// [
//   '<img src="sunshine111.png" />',
//   'sunshine111.png',
//   index: 37,
//   input: '<div></div><img src="sunshine.png" /><img src="sunshine111.png" />',
//   groups: undefined
// ] 
```

#### 22、匹配html中的注释
```js
const noteReg = /<!--(.*?)-->/g

const htmlStr = '<!--一个div标签--> <div></div> <!--一个div标签--> <div></div>'

console.log(noteReg.exec(htmlStr))
// [
//   '<!--一个div标签-->',
//   '一个div标签',
//   index: 0,
//   input: '<!--一个div标签--> <div></div> <!--一个div标签--> <div></div>',
//   groups: undefined
// ]
console.log(noteReg.exec(htmlStr))
// [
//   '<!--一个div标签-->',
//   '一个div标签',
//   index: 27,
//   input: '<!--一个div标签--> <div></div> <!--一个div标签--> <div></div>',
//   groups: undefined
// ]
```

#### 23、匹配html中的style
```js
const styleReg = /style="[^=>]*"([(\s+\w+=)|>])/g

const htmlStr = '<div style="background:#000;"><span style="color:#fff"></span></div>'

console.log(styleReg.exec(htmlStr))
// [
//   'style="background:#000;">',
//   '>',
//   index: 5,
//   input: '<div style="background:#000;"><span style="color:#fff"></span></div>',
//   groups: undefined
// ]
console.log(styleReg.exec(htmlStr))
// [
//   'style="color:#fff">',
//   '>',
//   index: 36,
//   input: '<div style="background:#000;"><span style="color:#fff"></span></div>',
//   groups: undefined
// ]
```
#### 24、匹配html中的颜色
```js
const colorReg = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g

const htmlStr = '<div style="background:#000;"><span style="color:#fff"></span></div>'
console.log(colorReg.exec(htmlStr))
// [
//   '#000',
//   '000',
//   index: 23,
//   input: '<div style="background:#000;"><span style="color:#fff"></span></div>',
//   groups: undefined
// ]
console.log(colorReg.exec(htmlStr))
// [
//   '#fff',
//   'fff',
//   index: 49,
//   input: '<div style="background:#000;"><span style="color:#fff"></span></div>',
//   groups: undefined
// ]
```
#### 25、匹配htmlTag（html标签）
```js
const endReg = /<("[^"]*"|'[^']*'|[^'">])*>/g

const htmlStr = '<div style="background:#000;"><span style="color:#fff"></span></div><h1></h1>'

console.log(endReg.exec(htmlStr))
console.log(endReg.exec(htmlStr))
console.log(endReg.exec(htmlStr))
console.log(endReg.exec(htmlStr))
console.log(endReg.exec(htmlStr))
console.log(endReg.exec(htmlStr))
```