---
title: Markdown-语法
tags:
  - 笔记
  - Markdown语法
categories: Markdown
abbrlink: 423099740
date: 2022-05-11 22:42:01
---



### 一、注释

#### 1、代码法

```xml
<div style='display: none'>
哈哈我是注释，不会在浏览器中显示。
</div>
```

#### 2、html注释

快捷键  [ctrl + / ]   || [comment + /]

```xml
<!--哈哈我是注释，不会在浏览器中显示。-->

<!--
哈哈我是多段注释，
不会在浏览器中显示。
    -->
```

#### 3、hack方法

hack方法就是利用markdown的解析原理来实现注释的。
一般有的markdown解析器不支持上面的注释方法，这个时候就可以用hack方法。
hack方法比上面2种方法稳定得多，但是语义化太差。

```csharp
[//]: # (哈哈我是最强注释，不会在浏览器中显示。)
[^_^]: # (哈哈我是最萌注释，不会在浏览器中显示。)
[//]: <> (哈哈我是注释，不会在浏览器中显示。)
[comment]: <> (哈哈我是注释，不会在浏览器中显示。
```

### 二、标题

Markdown 标题有两种格式。

#### 1、使用 = 和 - 标记

一级标题和二级标题

= 和 - 标记语法格式如下：

```none
我是一级标题
=================

我是二级标题
-----------------
```

#### 2、使用 # 标记

使用 **#** 号可表示 1-6 级标题，一级标题对应一个 **#** 号，二级标题对应两个 **#** 号，以此类推。

```none
[ctrl + 1]# 一级标题
[ctrl + 2]## 二级标题
[ctrl + 3]### 三级标题
[ctrl + 4]#### 四级标题
[ctrl + 5]##### 五级标题
[ctrl + 6]###### 六级标题
```

### 三、缩进、换行、空行、对齐方式

- **首行缩进**

不同特殊占位符所占空白是不一样大的。



```bash
【1】 &emsp;或&#8195; //全角
【2】 &ensp;或&#8194; //半角
【3】 &nbsp;或&#160;  //半角之半角
```

- **换行**

由于markdown编辑器的不同,可能在一行字后面，直接换行回车，也能实现换行，但是在Visual Studio Code上，想要**换行必须得在一行字后面空两个格子才行**。

- **空行**

在编辑的时候有多少个空行(只要这一行只有回车或者space没有其他的字符就算空行)，在**渲染之后，只隔着一行**。

- **对齐方式**

代码：

```xml
<center>行中心对齐</center>
<p align="left">行左对齐</p>
<p align="right">行右对齐</p>
```

显示效果：

<center>行中心对齐</center>

<p align="left">行左对齐</p>

<p align="right">行右对齐</p>

### 四、字体

Markdown 可以使用以下几种字体：

```none
*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___Copy
```

**显示效果**：

*斜体文本*
*斜体文本*
**粗体文本**
**粗体文本**
***粗斜体文本***
***粗斜体文本***

### 五、分割线

你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：

```none
**** * ******- - -----------
```

显示效果都一样

### 六、删除线

如果段落上的文字要添加删除线，只需要在文字的两端加上两个波浪线 **~~** 即可，实例如下：

```none
我是正常的~~我是删除线~~
```

~~我是删除线~~

### 七、下划线

下划线可以通过 HTML 的 标签来实现：

```none
<u>我是下划线</u>
```

显示效果如下所示：

<u>我是下划线</u>

### 八、脚注

脚注是对文本的补充说明，Markdown 脚注的格式如下:

```none
[^我是脚注]
```

以下实例演示了脚注的用法：

```none
创建脚注格式类似这样 [^RUNOOB]。[^RUNOOB]: 菜鸟教程 -- 学的不仅是技术，更是梦想！！！
```

演示效果如下：

创建脚注格式类似这样 [[1\]](https://www.cnblogs.com/miki-peng/articles/12502985.html#fn1)。

### 九、列表

Markdown 支持有序列表和无序列表。

#### 1、无序列表

无序列表使用星号(*)、加号(+)或是减号(-)作为列表标记：

```none
* 第一项* 第二项* 第三项------ 分割线 ------+ 第一项+ 第二项+ 第三项------ 分割线 ------- 第一项- 第二项- 第三项
```

显示结果如下：

- 第一项
- 第二项
- 第三项
  —— 分割线 ——
- 第一项
- 第二项
- 第三项
  —— 分割线 ——
- 第一项
- 第二项
- 第三项

#### 2、有序列表

使用数字并加上 **.** 号来表示，如：

```none
1. 第一项2. 第二项3. 第三项
```

显示结果如下：

1. 第一项
2. 第二项
3. 第三项

#### 3、列表嵌套

列表嵌套只需在子列表中的选项添加四个空格即可：

```none
1. 第一项：    - 第一项嵌套的第一个元素    - 第一项嵌套的第二个元素2. 第二项：    - 第二项嵌套的第一个元素    - 第二项嵌套的第二个元素
```

显示结果如下：

1. 第一项：
   - 第一项嵌套的第一个元素
   - 第一项嵌套的第二个元素
2. 第二项：
   - 第二项嵌套的第一个元素
   - 第二项嵌套的第二个元素

### 十、区块

#### 1、区块引用

Markdown 区块引用是在段落开头使用 **>** 符号 ，然后后面紧跟一个**空格**符号：

```none
> 区块引用> 菜鸟教程> 学的不仅是技术更是梦想
```

效果如下：

> 区块引用
> 菜鸟教程
> 学的不仅是技术更是梦想

#### 2、区块中使用列表

区块中使用列表实例如下：

```none
> 区块中使用列表> 1. 第一项> 2. 第二项> + 第一项> + 第二项> + 第三项
```

显示结果如下：

> 区块中使用列表
>
> 1. 第一项
> 2. 第二项
>
> - 第一项
> - 第二项
> - 第三项

#### 3、列表中使用区块

如果要在列表项目内放进区块，那么就需要在 **>** 前添加四个空格的缩进。

区块中使用列表实例如下：

```none
* 第一项    > 菜鸟教程    > 学的不仅是技术更是梦想* 第二项
```

显示结果如下：

- 第一项

  > 菜鸟教程
  > 学的不仅是技术更是梦想

- 第二项

#### 4、多级引用

语法说明：

引用需要在被引用的文本前加上>符号和空格，允许多层嵌套，也允许你偷懒只在整个段落的第一行最前面加上 > 。

代码：

```ruby
>>> 请问 Markdwon 怎么用？ - 小白>> 自己看教程！ - 愤青> 教程在哪？ - 小白
```

显示效果：

> > > 请问 Markdwon 怎么用？ - 小白

> > 自己看教程！ - 愤青

> 教程在哪？ - 小白

### 十一、代码

#### 1、单行代码

如果是单行代码或段落上的一个函数或片段的代码可以用反引号把它包起来（**`**），例如：

```none
`printf()` 函数
```

显示结果如下：

`printf()` 函数

#### 2、代码区块

代码区块使用三个反引号对**```** 包裹一段代码，并指定一种语言（也可以不指定）：

```python
class CaseData:    """这是一个存放测试用例数据的类"""    pass
```

显示结果如下：

class CaseData:
“””这是一个存放测试用例数据的类”””
pass

### 十二、链接

#### 1、使用方法：

```none
[链接名称](链接地址)或者<链接地址>Copy
```

例如：

这是一个链接 [我是链接](https://codeanime.cn/)

直接使用链接地址：

```none
<https://codeanime.cn>Copy
```

显示结果如下：

[https://codeanime.cn](https://codeanime.cn/)

#### 2、高级链接

```none
链接也可以用变量来代替，文档末尾附带变量地址：这个链接用 1 作为网址变量 [Google][1]这个链接用 runoob 作为网址变量 [Runoob][runoob]然后在文档的结尾为变量赋值（网址）  [1]: http://www.google.com/  [runoob]: http://www.runoob.com/
```

显示结果如下：

链接也可以用变量来代替，文档末尾附带变量地址：

这个链接用 1 作为网址变量 [Google](http://www.google.com/)

这个链接用 runoob 作为网址变量 [Runoob](http://www.runoob.com/)

然后在文档的结尾为变量赋值（网址）

### 十三、图片

Markdown 图片语法格式如下

```none
![alt 属性文本](图片地址)![alt 属性文本](图片地址 "可选标题")
```

- 开头一个感叹号 !
- 接着一个方括号，里面放上图片的替代文字
- 接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上选择性的 ‘title’ 属性的文字。

使用实例：

```none
![RUNOOB 图标](https://www.cnblogs.com/images/logo_small.gif)![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png "RUNOOB")
```

当然，你也可以像网址那样对图片网址使用变量:

```none
这个链接用 1 作为网址变量 [RUNOOB][1].然后在文档的结尾位变量赋值（网址）[1]: http://static.runoob.com/images/runoob-logo.png
```

显示结果如下：

这个链接用 1 作为网址变量 [RUNOOB][1].然后在文档的结尾位变量赋值（网址）[1]: http://static.runoob.com/images/runoob-logo.png

然后在文档的结尾位变量赋值（网址）

Markdown 还没有办法指定图片的高度与宽度，如果你需要的话，你可以使用普通的标签。
`<img src="http://static.runoob.com/images/runoob-logo.png" width="50%">`

```none
<img src="http://static.runoob.com/images/runoob-logo.png" width="50%">
```

### 十四、表格

Markdown 制作表格使用 **|** 来分隔不同的单元格，使用 **-** 来分隔表头和其他行。

语法格式如下：

```none
|  表头   | 表头  ||  ----  | ----  || 单元格  | 单元格 || 单元格  | 单元格 |
```

以上代码显示结果如下：

| 表头   | 表头   |
| :----- | :----- |
| 单元格 | 单元格 |
| 单元格 | 单元格 |

对齐方式

**我们可以设置表格的对齐方式：**

- **-:** 设置内容和标题栏居右对齐。
- **:-** 设置内容和标题栏居左对齐。
- **:-:** 设置内容和标题栏居中对齐。

实例如下：

```none
| 左对齐 | 右对齐 | 居中对齐 || :-----| ----: | :----: || 单元格 | 单元格 | 单元格 || 单元格 | 单元格 | 单元格 |
```

以上代码显示结果如下：

| 左对齐 | 右对齐 | 居中对齐 |
| :----- | -----: | :------: |
| 单元格 | 单元格 |  单元格  |
| 单元格 | 单元格 |  单元格  |

### 十五、高级技巧

#### 1、支持HTML元素

不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。

目前支持的 HTML 元素有：` `等 ，如：

```none
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑
```

输出结果为：

使用 Ctrl+Alt+Del 重启电脑

#### 2、转义

Markdown 使用了很多特殊符号来表示特定的意义，如果需要显示特定的符号则需要使用转义字符，Markdown 使用反斜杠转义特殊字符：

```none
**文本加粗** \*\* 正常显示星号 \*\*
```

输出结果为：

**文本加粗**

** 正常显示星号 **

Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号：

```none
\   反斜线`   反引号*   星号_   下划线{}  花括号[]  方括号()  小括号#   井字号+   加号-   减号.   英文句点!   感叹号
```

#### 3、流程图

~~~go
```graph LRA-->B``````sequenceDiagramA->>B: How are you?B->>A: Great!```Copy
~~~

显示效果：

```php
graph LRA-->B
sequenceDiagramA->>B: How are you?B->>A: Great!
```

#### 4、LaTex公式

代码：

```bash
质能守恒方程可以用一个很简洁的方程式 `$E = m c^2 $`来表达。
```

显示效果：

质能守恒方程可以用一个很简洁的方程式 `$E = m c^2 $`来表达。

- **表示整行公式**
  大部分的浏览器支持的

```ruby
$$ 公式 $$
```

有道云笔记 使用格式，

~~~go
```mathE = mc^2```
~~~

块级公式：

~~~go
```mathx = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} ``````math[\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} =1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}}{1+\frac{e^{-8\pi}} {1+\ldots} } } }]```
~~~

显示效果：

```math
x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} Copy
[\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} =1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}}{1+\frac{e^{-8\pi}} {1+\ldots} } } }]
```

访问 [MathJax](https://links.jianshu.com/go?to=https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference) 参考更多使用方法。

#### 5、特殊字符

| 特殊字符 |     描述      | 字符的代码 |
| :------: | :-----------: | :--------: |
|          |    空格符     |     ``     |
|    <     |    小于号     |    `<`     |
|    >     |    大于号     |    `>`     |
|    &     |     和号      |    `&`     |
|    ￥    |    人民币     |    `¥`     |
|    ©     |     版权      |    `©`     |
|    ®     |   注册商标    |    `®`     |
|    °C    |    摄氏度     |    `°C`    |
|    ±     |    正负号     |    `±`     |
|    ×     |     乘号      |    `×`     |
|    ÷     |     除号      |    `÷`     |
|    ²     | 平方（上标²） |    `²`     |
|    ³     | 立方（上标³） |    `³`     |

### 十六、文字颜色、大小、字体

#### 1、颜色

在markdown中采用如下方式能够控制文字的颜色：

```none
<font color="#dd0000">文字颜色预览</font>
```

#### 2、字体大小

```none
size为1：<font size="1">size为1</font>size为2：<font size="2">size为2</font>size为3：<font size="3">size为3</font>size为4：<font size="4">size为4</font>size为6：<font size="6">size为6</font>
```

效果如下：

size为1：<font size="1">size为1</font>

size为2：<font size="2">size为2</font>

size为3：<font size="3">size为3</font>

size为4：<font size="4">size为4</font>

size为6：<font size="6">size为6</font>

#### 3、字体

```none
<font face="黑体">我是黑体字</font> <font face="宋体">我是宋体字</font> <font face="楷体">我是楷体字</font> <font face="微软雅黑">我是微软雅黑字</font> <font face="fantasy">我是fantasy字</font><font face="Helvetica">我是Helvetica字</font>
```

效果如下：

<font face="黑体">我是黑体字</font>

 <font face="宋体">我是宋体字</font> 

<font face="楷体">我是楷体字</font> 

<font face="微软雅黑">我是微软雅黑字</font>

 <font face="fantasy">我是fantasy字</font>

<font face="Helvetica">我是Helvetica字</font> 

#### 4、背景色

语法如下：

```none
<table><tr><td bgcolor=#F4A460>背景色的设置是按照十六进制颜色值：#F4A460</td></tr></table><table><tr><td bgcolor=#FF6347>背景色的设置是按照十六进制颜色值：#FF6347</td></tr></table>  <table><tr><td bgcolor=#D8BFD8>背景色的设置是按照十六进制颜色值：#D8BFD8</td></tr></table>  <table><tr><td bgcolor=#008080>背景色的设置是按照十六进制颜色值：#008080</td></tr></table>  <table><tr><td bgcolor=#FFD700>背景色的设置是按照十六进制颜色值：#FFD700</td></tr></table>
```

效果如下：

<table><tr><td bgcolor=#F4A460>背景色的设置是按照十六进制颜色值：#F4A460</td></tr></table><table><tr><td bgcolor=#FF6347>背景色的设置是按照十六进制颜色值：#FF6347</td></tr></table>  <table><tr><td bgcolor=#D8BFD8>背景色的设置是按照十六进制颜色值：#D8BFD8</td></tr></table>  <table><tr><td bgcolor=#008080>背景色的设置是按照十六进制颜色值：#008080</td></tr></table>  <table><tr><td bgcolor=#FFD700>背景色的设置是按照十六进制颜色值：#FFD700</td></tr></table>



参考:

- [markdown语法大全](https://www.cnblogs.com/miki-peng/articles/12502985.html) [作者]
- [Markdown语法笔记](https://yorg.top/Markdown.html)[咳咳怪]
- [Markdown语法大全](https://codeanime.cc/Markdown语法大全（笔记）.html)[codeanime]
- [Markdown语法大全(超级版)](https://www.jianshu.com/p/ebe52d2d468f)[择势量投]



