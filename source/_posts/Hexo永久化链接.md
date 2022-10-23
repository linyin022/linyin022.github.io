---
title: Hexo永久化链接
abbrlink: 816768764
date: 2022-10-19 16:39:45
category:
- Hexo
tags:
- Chic主题
- 笔记
---

![Snipaste_2022-10-19_17-46-00.png](http://image.linyin022.top/i/2022/10/19/634fc7a9c6f0c.png)

设置文章永久链接的主要目的就是因为路径中出现中文情况的话，会导致变成一串很长的16进制。影响美观性。



### 1.安装

要用到 [abbrlink](https://github.com/rozbo/hexo-abbrlink) 插件来使文章永久化，以下是npm安装包，安装在hexo文件中

```
npm install hexo-abbrlink --save
```

> 可能会出现依赖，依据提示安装即可。

### 2.配置

修改博客根目录配置文件 `_config.yml` 的 `permalink`：

```yaml
# permalink: :year/:month/:day/:title/
permalink: p/:abbrlink.html  # p 是自定义的前缀
abbrlink:
    alg: crc32   #算法： crc16(default) and crc32
    rep: dec     #进制： dec(default) and hex
```

不同算法和进制生成不同的格式：

```bash
crc16 & hex
https://xxx.com/posts/66c8.html
crc16 & dec
https://xxx.com/posts/65535.html

crc32 & hex
https://xxx.com/posts/8ddf18fb.html
crc32 & dec
https://xxx.com/posts/1690090958.html
```

#### 

先清理下本地的文件 `hexo clean`，然后重新生成 `hexo g`，启动博客 `hexo s`。该插件会在每篇文章的开头增加内容：

```makefile
abbrlink: 1690090958
```



可以执行代码

> hexo claen && hexo g && hexo s
