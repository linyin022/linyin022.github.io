---
title: Chic主题配置+修改样式
abbrlink: 2077132032
date: 2022-10-19 23:54:03
tags: 
- Chic主题
category: 
- Hexo
---

## 样式修改

![Snipaste_2022-10-19_23-57-30.png](http://image.linyin022.top/i/2022/10/20/63501f3d213c0.png)

### 底部copyright

修改 `post_copyright` 样式

路径：`themes/Chic/source/css/_page/_post/post_copyright.styl`

![Snipaste_2022-10-20_00-08-36.png](http://image.linyin022.top/i/2022/10/20/6350211e15022.png)

在Chic目录下的_config.yml文件中的post_copyright_enable中只打开

- post_copyright_author_enable
- post_copyright_permalink_enable
- post_copyright_license_enable

其余的都选择false

### category页面修改

![Snipaste_2022-10-20_00-47-28.png](http://image.linyin022.top/i/2022/10/20/63502a2adc05c.png)

修改路径 `themes/Chic/layout/category.ejs`

![Snipaste_2022-10-20_00-50-27.png](http://image.linyin022.top/i/2022/10/20/63502ae099ef4.png)

然后在 `themes/Chic/source/css/_page/category.syl` 文件下

![Snipaste_2022-10-20_00-52-06.png](http://image.linyin022.top/i/2022/10/20/63502b89604c5.png)

### 永久化链接

文章跳转：[传送门](./816768764.html)

### 主题字体

修改`themes\Chic\source\css\font.styl`文件
注释`$font-family`前面的内容，将需要启用的字体放在最前面即可

```
$font-family = Arial, Microsoft Yahei, 'Microsoft Jhenghei',Lantinghei SC, 'lanting', PingFang SC, Seguo UI
```

### 自定义首页链接图标

- 首先在[阿里iconfont官网](https://www.iconfont.cn/)找到想要的图标加入购物车后选择下载代码
- 解压后将文件夹放在`themes\hexo-theme-Chic\source\fonts`下
- 在`themes\hexo-theme-Chic\source\css\style.styl`中引入

```
// icon
@import "../fonts/iconfont/iconfont.css" #再添加一行即可
@import "../fonts/font_custom/iconfont.css"
```

接下来直接在主题_config.yml中添加内容即可

> 注：如不知道图标名称，可在下载的文件夹中的`iconfont.css`找到名称
