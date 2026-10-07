---
title: Windows环境下使用Hexo+Github搭建个人博客
date: 2024/1/23 20:36
toc: true
tag:
    - 前端
    - 个人网站
    - Hexo
    - HTML
    - JavaScript
categories: 个人网站搭建
---

# Windows环境下使用Hexo+Github搭建个人博客

![](https://i.postimg.cc/VLG02Sn2/Blog1.png)

## 本地环境准备

### Git

官网安装：[Git Release](https://git-scm.com/)

安装完成后使用 git终端 / cmd 测试以下命令验证安装是否成功:

```
git --version
```

出现对应版本号即代表安装成功

### Node.Js

英文官网安装：[Download Node.js®](https://nodejs.org/en)

中文官网安装：[Node.Js 中文网](https://nodejs.cn/)

安装完成后使用 git终端 / cmd 测试以下命令验证安装是否成功:

```
node -v
```

```
npm -v
```

出现对应版本号即代表安装成功

### Hexo工作目录及部署

Hexo是基于Node.Js的已经完成的博客代码框架，基于这个模板可以在原有代码修改部分内容就可以部署属于自己的个人博客并发布文章

第1步. 首先在一个自己选好的合适的文件目录位置创建一个空文件夹并命名为MyBlog

第2步. 在这个文件夹内右键并Open Git Bash here，在这个工作目录开启Git终端

第3步. 使用以下命令并运行以安装Hexo

```
npm install -g hexo-cli
```

继续在终端内使用hexo v命令来检查Hexo是否在此目录内安装成功并检查版本号

```
hexo v
```

接下来须在工作目录内初始化Hexo项目框架

```
hexo init
```

继续使用命令生成项目

```
hexo generate
```

在终端内使用hexo s/hexo server命令启动本地服务器，进入并检查Hexo默认博客是否正常运行，按Ctrl键点击链接即可用默认浏览器访问，开启本地服务器后通常默认的本地博客地址为http://localhost:4000/

## Github静态博客服务器准备(Github Pages)

### Github Pages个人仓库创建

GitHub作为代码托管平台，允许用户使用GitHub仓库来创建一个仓库作为个人GitHub Pages，并且由GitHub提供服务器支持

使用Github创建一个仓库，且仓库按照以下格式命名：

Github用户名.github.io

例如我的Github用户名为GarGarfie，则我的Github Pages的仓库创建时需要命名为：GarGarfie.github.io

### 本地Git初始化并连接至Github Pages仓库

首先在 Git终端 / cmd 中使用git config --global [user.name](http://user.name/)  "用户名"初始化用户名，注意在本地初始化Git时尽量使用户名和邮箱与Github保持一致

使用命令git config --global user.email  "邮箱"初始化邮箱

通过使用git config --global user.name和git config --global user.email命令来检查设置成功与否

```
git config --global user.name  "yourname"
```

```
git config --global user.email  "youremail"
```

```
用户名：git config --global user.name 
```

```
git config --global user.email
```

在本地Git初始化完成后，接下来使用ssh连接将本地Git连接到Github Pages仓库

在 Git终端 / cmd 使用以下命令下载Hexo的Github部署插件（否则Git Fork至Github时一定会报错）

```
npm install hexo-deployer-git --save
```

下载完成后在Git终端中使用命令生成密钥并获取密钥

使用以下生成密钥，注意将youremail改为刚刚初始化Git时的邮箱，运行命令后按照提示生成密钥（如果不明白可以无脑回车）

```
ssh-keygen -t rsa -C "youremail"
```

生成密钥成功后需要获取密钥，在Git Bash中使用下列命令运行获取密钥并复制密钥

```
cat ~/.ssh/id_rsa.pub
```

在Github中创建ssh密钥并嵌入密钥内容

打开[Github主页](https://github.com/)，点击头像→点击Settings→SSH and GPG keys→新建一个SSH→将id_rsa.pub内容(刚刚的密钥)粘贴至SSH密钥中→完成创建

随后在Git Bash中使用下述命令验证ssh连接，出现用户名代表访问成功

```
ssh -T git@github.com
```

## Hexo项目配置

###  _config.yml文件的修改

Hexo项目初始化后，MyBlog文件夹中的_config.yml是Hexo项目框架最基础的信息配置文件，在Git至Github Pages仓库之前必须要对此文件进行配置和修改，可以参考官方的[配置描述Doc](https://hexo.io/zh-cn/docs/configuration)

需要特别注意的是以下几个配置：

```
# Site 块中需要注意的配置：
description: 		#网站的描述，主要用于SEO，告诉搜索引擎一个关于您站点的简单描述，通常建议在其中包含您网站的关键词。
language: zh		#网站使用的语言。对于简体中文用户来说，使用不同的主题可能需要设置成不同的值，常见的有 zh-Hans和 zh-CN。
timezone: 'Asia/Hong_Kong'		#网站时区。Hexo 默认使用您电脑的时区。请参考 时区列表 进行设置，如 America/New_York, Japan, 和 UTC 。一般的，对于中国大陆地区可以使用 Asia/Shanghai。

# URL 块中需要注意的配置：
url: https://用户.github.io/
#如果使用Github Pages，那么url这里一定要填写自己Github Pages的网页地址(注意并非仓库地址)，否则会404

# Deployment 块中需要注意的问题：
# 我们需要在Deployment块中修改并增添内容来让本地Git顺利上传仓库到Github Pages仓库
deploy:
  type: 'git'
  repository: '仓库地址'
  branch: main
```

### 域名映射文件的增添

如果想要达到将默认的博客地址映射到自己拥有的域名的效果的话，需要在Myblog/source/目录下新建一个命名为CNAME且无任何格式后缀的文件，文件内容编辑为想要映射到的域名

## 文章的书写生成与项目上传同步

### Hexo上传文章的工作流

Hexo框架的文章是使用markdown代码书写的，如果\MyBlog\source\_posts\目录下没有任何文章，那么将项目部署至Github Pages仓库后访问个人博客页面会显示404

常用的Hexo命令如下：

```
hexo clean		#清除之前生成的项目，可以清除之前项目的一些问题
hexo new post  "文件名"		#上传一个名为"文件名"的md文档的帖子，位于/MyBlog/source/_post/目录
hexo generate		#在本地生成项目，同样可使用hexo g
hexo deploy		#把项目部署至GitHub，同样可使用hexo d
```

Hexo的常见工作流程为

编写md文档→放置md文档至\MyBlog\source\_posts\目录下→使用hexo g命令生成更新项目→使用hexo d命令部署至Github

### Markdown文档的编辑

对于md文档的编辑，如果不熟悉markdown代码的同学可以尝试支持所见即所得功能的编辑器，我有两个推荐的编辑器：

[Vditor](https://github.com/Vanessa219/vditor)

[Typora](https://github.com/shuhongfan/TyporaCrack)

在Github仓库页面显示部署完成后，便可以使用自己的网站链接(格式类似于GarGarfie.github.io)访问自己的个人博客网站了

## 附加题

### Live2D看板娘

参考链接：

[Hexo添加live2D看板动画](https://www.jianshu.com/p/3a6342e16e57)

[Hexo添加Live2D看板娘+模型预览](https://blog.csdn.net/wang_123_zy/article/details/87181892)

[Live2D-widget-models](https://gitcode.com/xiazeyu/live2d-widget-models/overview?utm_source=csdn_github_accelerator&isLogin=1)