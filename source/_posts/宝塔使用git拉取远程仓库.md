---
title: 宝塔使用git拉取远程仓库
tags:
  - Git
  - 宝塔
  - 笔记
category:
  - - 宝塔
    - Git
abbrlink: 3488226267
date: 2022-10-19 15:01:50
---

宝塔一般自带git。请自行终端查询是否存在

```shell
git version
```

若不存在的话，请自行安装

```shell
# 安装命令
yum install git
```

正常`git clone`下来的代码文件在jetbrains家的软件中能够正常拉取，推送的情况下。将代码文件中的`.git文件夹`直接上传到网站页面中去

然后服务器上的git要配置绑定好你的git账号密码

在git bash中执行命令

```shell
# 永久保存账号密码
git config --global credential.helper store
# 然后输入账号密码
git config --global user.name "用户名"
git config --global user.email "邮箱"
git config --global user.password "密码"
```

输入完成之后可以查看绑定的账号密码

```shell
git config --list
```

完成之后可以到指定目录下使用git push 如果能正常拉取的话。即完成。

在宝塔的shell脚本中添加一个任务

脚本内容为：

```shell
# demo路径是测试文档。修改成你自己的拉取路径即可
cd /www/wwwroot/demo &&
git pull &&
chown -R www app &&
chmod -R 0755 app
```

```shell
# 添加 reset --hard 的原因请百度自查
cd /www/wwwroot/demo &&
git reset --hard &&
git pull &&
chown -R www app &&
chmod -R 0755 app
```

