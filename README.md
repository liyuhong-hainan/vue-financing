# vue-financing

vue 实现的一款智能理财问答对话。

## 技术栈

1. Vue2：采用最新Vue2的语法

2. vue-router：管理单页面应用路由

3. stylus：css预处理语言

4. Webpack：自动化构建工具，主要配置vue-cli脚手架提供

5. ES6：采用ES6语法

6. CSS3：CSS3动画及样式

7. better-scroll: 滑动事件的插件

## 示例图

![](https://github.com/liyuhong-hainan/vue-financing/blob/master/src/assets/demo.gif)

## 演示二维码

![](https://github.com/liyuhong-hainan/vue-financing/blob/master/src/assets/qrcode.png)

## 安装运行（安装运行前请确定已安装node环境）

* 环境安装：npm install
* 启动服务：npm run dev
* 发布代码：npm run build
* 代码检查：npm run lint

## 项目构成

> build                // 构建服务和webpack配置

> config               // 项目不同环境的配置

> dist                  // 项目build目

> index.html          	 // 项目入口文件

> package.json      		 // 项目配置文件

> static       			     // 放置静态资源

> src                		 // 生产目录

>>> assets               // 图片资源

>>> common          	    // 公共的css js images资源

>>> pages          		// 各个视图

>>> App.vue         	// 主页面

>>> router.js     		// 路由配置器

>>>  main.js       	    // Webpack 预编译入口
