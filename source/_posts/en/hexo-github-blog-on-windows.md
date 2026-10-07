---
title: Building a Personal Blog with Hexo + GitHub on Windows
date: 2024/1/23 20:36
updated: 2024/1/23 20:36
lang: en
i18n: Windows环境下使用Hexo+Github搭建个人博客
toc: true
tag:
    - Frontend
    - Personal Website
    - Hexo
    - HTML
    - JavaScript
categories: Building a Website
---

# Building a Personal Blog with Hexo + GitHub on Windows

![](https://i.postimg.cc/VLG02Sn2/Blog1.png)

## Preparing the Local Environment

### Git

Download from the official site: [Git Release](https://git-scm.com/)

After installation, run the following command in the Git terminal / cmd to check that it was installed correctly:

```
git --version
```

If a version number is printed, the installation succeeded.

### Node.js

Official site (English): [Download Node.js®](https://nodejs.org/en)

Official site (Chinese): [Node.Js 中文网](https://nodejs.cn/)

After installation, run the following commands in the Git terminal / cmd to check that it was installed correctly:

```
node -v
```

```
npm -v
```

If version numbers are printed, the installation succeeded.

### Hexo Working Directory and Deployment

Hexo is a ready-made blog framework built on Node.js. Starting from its template, you only need to modify parts of the existing code to deploy your own personal blog and publish posts.

Step 1. Choose a suitable location and create an empty folder named MyBlog.

Step 2. Right-click inside this folder and choose "Open Git Bash here" to open a Git terminal in this working directory.

Step 3. Run the following command to install Hexo:

```
npm install -g hexo-cli
```

Then run `hexo v` in the terminal to check that Hexo was installed in this directory and to see its version:

```
hexo v
```

Next, initialize the Hexo project framework in the working directory:

```
hexo init
```

Then generate the project:

```
hexo generate
```

Run `hexo s` / `hexo server` in the terminal to start a local server and check that the default Hexo blog works. Ctrl-click the link to open it in your default browser. With the local server running, the blog is usually available at http://localhost:4000/

## Preparing the GitHub Static Blog Server (GitHub Pages)

### Creating the GitHub Pages Repository

GitHub is a code hosting platform. It lets users create a repository that serves as their personal GitHub Pages site, with the servers provided by GitHub.

Create a new repository on GitHub and name it in the following format:

GitHubUsername.github.io

For example, my GitHub username is GarGarfie, so my GitHub Pages repository must be named: GarGarfie.github.io

### Initializing Local Git and Connecting to the GitHub Pages Repository

First, set your user name in the Git terminal / cmd with `git config --global user.name "username"`. When setting up Git locally, try to use the same user name and email as on GitHub.

Set your email with `git config --global user.email "email"`.

Check the settings with `git config --global user.name` and `git config --global user.email`:

```
git config --global user.name  "yourname"
```

```
git config --global user.email  "youremail"
```

```
git config --global user.name
```

```
git config --global user.email
```

Once local Git is set up, connect it to the GitHub Pages repository over SSH.

In the Git terminal / cmd, install Hexo's GitHub deployment plugin with the following command (otherwise deploying to GitHub will fail):

```
npm install hexo-deployer-git --save
```

After it is installed, generate a key in the Git terminal and copy it.

Generate the key with the command below. Replace youremail with the email you just configured in Git, then follow the prompts (if unsure, just press Enter at each prompt):

```
ssh-keygen -t rsa -C "youremail"
```

Once the key is generated, print it in Git Bash with the following command and copy it:

```
cat ~/.ssh/id_rsa.pub
```

Create an SSH key on GitHub and paste in the key content:

Open the [GitHub home page](https://github.com/), click your avatar → Settings → SSH and GPG keys → New SSH key → paste the content of id_rsa.pub (the key you just copied) → create it.

Then verify the SSH connection in Git Bash with the command below. If your user name appears, the connection works:

```
ssh -T git@github.com
```

## Configuring the Hexo Project

### Editing _config.yml

After the Hexo project is initialized, `_config.yml` in the MyBlog folder is the basic configuration file of the Hexo framework. It must be configured before deploying to the GitHub Pages repository. See the official [configuration docs](https://hexo.io/docs/configuration).

Pay special attention to the following settings:

```
# Settings to check in the Site block:
description: 		# Site description, mainly for SEO. Tells search engines what your site is about; it is a good idea to include your keywords.
language: zh		# Site language. Depending on the theme, Simplified Chinese may need values such as zh-Hans or zh-CN.
timezone: 'Asia/Hong_Kong'		# Site time zone. Hexo uses your computer's time zone by default. See the time zone list, e.g. America/New_York, Japan, UTC. Mainland China usually uses Asia/Shanghai.

# Settings to check in the URL block:
url: https://username.github.io/
# With GitHub Pages, url must be your GitHub Pages web address (not the repository address), otherwise you get a 404.

# The Deployment block:
# Edit and add to the Deployment block so that local Git can push the site to the GitHub Pages repository.
deploy:
  type: 'git'
  repository: 'repository URL'
  branch: main
```

### Adding a Custom Domain File

To map the default blog address to a domain you own, create a file named CNAME (with no file extension) in the MyBlog/source/ directory and write the domain name in it.

## Writing Posts and Deploying the Project

### The Hexo Publishing Workflow

Hexo posts are written in Markdown. If there are no posts in the \MyBlog\source\_posts\ directory, the blog will show a 404 page after deployment to GitHub Pages.

Common Hexo commands:

```
hexo clean		# Remove previously generated files; fixes some leftover problems
hexo new post  "filename"		# Create a post named "filename" as a .md file in /MyBlog/source/_posts/
hexo generate		# Generate the site locally; short form: hexo g
hexo deploy		# Deploy the site to GitHub; short form: hexo d
```

The usual Hexo workflow is:

Write a .md file → put it in \MyBlog\source\_posts\ → run hexo g to generate the site → run hexo d to deploy to GitHub

### Editing Markdown Files

If you are not familiar with Markdown, try a WYSIWYG editor. Two editors I recommend:

[Vditor](https://github.com/Vanessa219/vditor)

[Typora](https://typora.io/)

Once the GitHub repository page shows that deployment has finished, you can visit your personal blog at your site address (something like GarGarfie.github.io).

## Bonus

### Live2D Mascot

References (in Chinese):

[Adding a Live2D mascot animation to Hexo](https://www.jianshu.com/p/3a6342e16e57)

[Adding a Live2D mascot and model preview to Hexo](https://blog.csdn.net/wang_123_zy/article/details/87181892)

[Live2D-widget-models](https://gitcode.com/xiazeyu/live2d-widget-models/overview?utm_source=csdn_github_accelerator&isLogin=1)
