## 总览
每次搭建小程序都需要搭建一遍环境？各种各样的公共封装？像vue-cli那样不香吗？
它来了！：）基于Typescript的小程序前端快速开发解决方案layout 你只需要写业务，其他的交给我！
不造重复轮子，一次clone即刻开箱！！
搭配vscode开箱即用，它不香吗😎？？（🐂🍺吹的有点大了，但我会努力的💪）

## 目录结构

本项目已经为你生成了一个完整的开发框架，提供了涵盖开发的各类功能和坑位，下面是整个项目的目录结构。

```bash
├── .vscode                    # 项目插件配置
├── node_modules               # 依赖安装目录
│   └── ...             
├── miniprogram                # 源代码
│   ├── api                    # 所有请求
│   ├── image                  # 图片静态资源
│   ├── components             # 全局组件
│   ├── config                 # 接口配置文件
│   ├── utils                  # 全局方法及封装
│   ├── pages                  # 所有页面
│       └── ....               # 页面文件夹
│           ├── xxx.js               # 页面js文件
│           ├── xxx.ts               # 页面ts文件
│           ├── xxx.wxss             # 页面样式
│           ├── xxx.wxml             # 页面html文件
│           ├── xxx.less             # 页面less样式文件 (插件：easy-less 自动编译成 .wxss)
│   ├── app.wxss               # 全局样式
│   ├── app.js                 # 入口文件 加载组件 初始化等
│   ├── app.ts                 # 入口文件 加载组件 初始化等
│   └── app.json               # 小程序框架主配置
├── typings                    # .d.ts 源文件
├── .gitgnore                  # git项目配置
├── README-zh.md               # 项目说明RD文件
├── project.config.js          # 项目配置文件
├── package.json               # package.json 依赖
└── tsconfig.json              # typescript 配置
```
