---
layout: 序·hexo
title: Hexo搭建及部署
date: 2022-04-25 08:24:48
categories: Hexo
tags:
- Chic主题
- Git
- GitHub
---



# Hexo 搭建及部署(更新中)



### 一、简介

#### 1、 Hexo特点

Hexo 是一个简单、快速、强大的静态博客框架,出自台湾大学生 tommy351 之手。我也看过使用 Jekyll、Octopress 搭建个人博客的过程，确实要繁琐许多。相比之下 Hexo 更轻便更快捷，下面是其官网强调的四大特点：

- 极速生成静态页面
- 一键部署博客
- 丰富的插件支持
- 支持 Markdown



### 二.下载安装环境

#### 1、下载安装Node.js && npm

1. [Node.js 官网](https://nodejs.org/) || [Node.js 中文网 (nodejs.cn)](http://nodejs.cn/)

   - 安装完Node.js后可以用命令行查询是否有安装成功
   - 使用 node -v 可以查询到当前安装的node版本
   
   - npm会在nodejs下载安装完之后自动安装，可在命令行自行查询
   
   ```
   
   # 检查安装是否成功
   $ git -v
   $ node -v
   $ npm -v
   
   # 更换下载源（提高下载速度）
   $ npm config set registry https://registry.npm.taobao.org
   ```



### 二、下载使用Hexo
#### 1、安装Hexo

```

# 1、安装 hexo
$ npm install -g hexo-cli

# 2、新建工作目录，存放hexo的配置文件、主题、博客（自己写的）等
$ mkdir blog/
$ cd blog/

# 3、初始化hexo环境(必须进入一个空目录进行初始化！)
$ hexo init

##########  至此，hexo安装完成！ #########

```


#### 2、使用Hexo

```

# 1、新建博客文件，生成的文件存放在 blog/source/_post/文件名.md
$ hexo nwe '文件名'

# 2、自定义“文件名.md”内容
使用本地markdown工具进行编辑

# 3、文件渲染
$ hexo g

# 4、本地环境测试（hexo提供的测试服务器，将本地编写的博客文件渲染并展示）
$ hexo s  #（浏览器输入：localhost:4000即可查看）

```



#### 3、创建个人GitHub.io仓库

   登录到GitHub,如果没有GitHub帐号，使用你的邮箱注册GitHub帐号，点击GitHub中的New repository创建新仓库，仓库名应该为：**用户名**.[http://github.io](https://link.zhihu.com/?target=http%3A//github.io) 这个**用户名**使用你的GitHub帐号名称代替，这是固定写法，比如我的仓库名为：

![](https://cdn.jsdelivr.net/gh/linyin022/image@main/Hexo_img/githubio.png)



####  4、安装Git



什么是Git ?简单来说Git是开源的分布式版本控制系统，用于敏捷高效地处理项目。我们网站在本地搭建好了，需要使用Git同步到GitHub上。如果想要了解Git的细节，参看[廖雪峰](https://link.zhihu.com/?target=http%3A//weibo.com/liaoxuefeng)老师的Git教程：[Git教程](https://link.zhihu.com/?target=http%3A//www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000) 从Git官网下载：[Git - Downloading Package](https://link.zhihu.com/?target=https%3A//git-scm.com/download/win) 现在的机子基本都是64位的，选择64位的安装包，下载后安装，在命令行里输入git测试是否安装成功，若安装失败，参看其他详细的Git安装教程。安装成功后，将你的Git与GitHub帐号绑定，鼠标右击打开Git Bash

![](https://cdn.jsdelivr.net/gh/linyin022/image@main/Hexo_img/git_bash.jpg)

或者在菜单里搜索Git Bash，设置user.name和user.email配置信息：

```bash
git config --global user.name "你的GitHub用户名"
git config --global user.email "你的GitHub注册邮箱"
```

生成ssh密钥文件：

```bash
ssh-keygen -t rsa -C "你的GitHub注册邮箱"
```

然后直接三个回车即可，默认不需要设置密码
然后找到生成的.ssh的文件夹中的id_rsa.pub密钥，将内容全部复制

![](https://cdn.jsdelivr.net/gh/linyin022/image@main/Hexo_img/id_rsa.jpg)

打开[GitHub_Settings_keys](https://link.zhihu.com/?target=https%3A//github.com/settings/keys) 页面，新建new SSH Key

![](https://cdn.jsdelivr.net/gh/linyin022/image@main/Hexo_img/githubkey.jpg)

Title为标题，任意填即可，将刚刚复制的id_rsa.pub内容粘贴进去，最后点击Add SSH key。
在Git Bash中检测GitHub公钥设置是否成功，输入 ssh git@github.com 

![](https://cdn.jsdelivr.net/gh/linyin022/image@main/Hexo_img/ssh_key.jpg)

如上则说明成功。这里之所以设置GitHub密钥原因是，通过非对称加密的公钥与私钥来完成加密，公钥放置在GitHub上，私钥放置在自己的电脑里。GitHub要求每次推送代码都是合法用户，所以每次推送都需要输入账号密码验证推送用户是否是合法用户，为了省去每次输入密码的步骤，采用了ssh，当你推送的时候，git就会匹配你的私钥跟GitHub上面的公钥是否是配对的，若是匹配就认为你是合法用户，则允许推送。这样可以保证每次的推送都是正确合法的。

#### 5、Hexo部署

```

# 1、安装 hexo-githubPage 插件
npm install --save hexo-deployer-git

# 2、新建仓库，名称必须为：{github用户名}.github.io

# 3、复制该仓库的路径

# 4、编辑 blog/_config.yml文件

url: url路径
permalink: :year/:month/:day/:title/
permalink_defaults:
pretty_urls:
  trailing_index: true
  trailing_html: true 

deploy:
  type: 'git'
  repo: '仓库地址'
  branch: '分支名'

# 5、部署到github page
$ hexo d

```

#### 6、Hexo个性化

```

# 1、从github克隆第三方主题，保存到：blog/theme/主题名
$ git clone https://github.com/litten/hexo-theme-yilia.git themes/yilia

# 2、配置 blog/_config.yml文件
theme: 主题名字

# 3、保存提出
$ hexo clean  # 清空缓存 
$ hexo g 		# 重新渲染 
$ hexo s 		# 测试用
$ hexo d 		# 部署到github page


```







