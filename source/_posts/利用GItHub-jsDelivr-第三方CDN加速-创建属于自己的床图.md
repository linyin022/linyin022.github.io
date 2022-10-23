---
title: '利用GitHub+jsDelivr[第三方CDN加速]创建属于自己的床图'
categories: Github
tags:
  - Git
  - GitHub
  - jsDelivr
abbrlink: 3245331531
date: 2022-04-22 13:54:43
---



> 本文章转载自[烟雨星空]的文章并且二次简化修改
原文章：https://www.cnblogs.com/starry-skys/p/13905766.html

**1. 创建一个GitHub仓库[任意名字]**
**2. 在仓库中上传你的图片**
**3. 使用jsDelivr加速访问GitHub的床图**

![Snipaste_2022-10-19_22-18-48.png](https://image.linyin022.top/i/2022/10/19/6350075921e45.png)
创建好床图之后如果想要原生查看床图就进入任意图片，后查看url，
例如
![Snipaste_2022-10-19_22-19-32.png](https://image.linyin022.top/i/2022/10/19/6350077d4816d.png)
这是我当前的床图中的一个logo，他的url地址为：

> https://github.com/linyin022/image/blob/main/logo.png

如果想要使用原生床图就将url路径中的blob修改成raw。或者是在原本的url路径末尾加上?raw=true。以下是两种原生查看床图的方法实例

[https://github.com/linyin022/image/raw/main/logo.png](https://github.com/linyin022/image/raw/main/logo.png)
[https://github.com/linyin022/image/blob/main/logo.png?raw=true](https://github.com/linyin022/image/blob/main/logo.png?raw=true)

如果使用GitHub的原生床图访问速度非常慢。我们就得利用cdn来加速实现快速访问。

**使用jsDelivr实现CDN加速**

jsDelivr是一个开源免费的CDN床图加速项目

使用的方法为以下：
jsDelivr的路径为

> https://cdn.jsdelivr.net/gh/<你的github用户名>/<你的图床仓库名>@<仓库版本号>/图片的路径

这是我GitHub的logo床图的url路径
![Snipaste_2022-10-19_22-23-04.png](https://image.linyin022.top/i/2022/10/19/6350085b064c4.png)


将这些url路径修改进jsDelivr中，路径就是为：

> https://cdn.jsdelivr.net/gh/linyin022/image@main/logo.png

👆可以点击查看并且cdn加速之后的链接是否有比GitHub原生查看图片有更快的访问速度

总结：

- 使用CDN加速可以实现某些图片、文件、资源等等使用国内网络时访问速度过慢或者无法打开时，使用CDN加速可以帮助我们有效更快的访问。



> 以下介绍什么是CDN及CDN加速原理[全部转载自网络搜索]

CDN的全称是(Content Delivery Network)，即内容分发网络。其目的是通过在现有的Internet中增加一层新的CACHE(缓存)层，将网站的内容发布到最接近用户的网络”边缘“的节点，使用户可以就近取得所需的内容，提高用户访问网站的响应速度。从技术上全面解决由于网络带宽小、用户访问量大、网点分布不均等原因，提高用户访问网站的响应速度。
简单的说，CDN的工作原理就是将您源站的资源缓存到位于全球各地的CDN节点上，用户请求资源时，就近返回节点上缓存的资源，而不需要每个用户的请求都回您的源站获取，避免网络拥塞、缓解源站压力，保证用户访问资源的速度和体验

![Snipaste_2022-10-19_22-24-16.png](https://image.linyin022.top/i/2022/10/19/6350089d3dc43.png)



