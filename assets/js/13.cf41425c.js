(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{275:function(t,s,a){"use strict";a.r(s);var r=a(13),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://angular.cn/start",target:"_blank"}},[s("img",{attrs:{src:"https://img.shields.io/badge/angular-13.0.4-dd0031",alt:"alt"}})]),t._v(" "),s("a",{attrs:{href:"https://ng.ant.design/docs/introduce/zh",target:"_blank"}},[s("img",{attrs:{src:"https://img.shields.io/badge/NG--ZORRO-13.0.1-blue",alt:"alt"}})]),t._v(" "),s("a",{attrs:{href:"https://www.typescriptlang.org/zh/",target:"_blank"}},[s("img",{attrs:{src:"https://img.shields.io/badge/typeScript-4.4.4-blue",alt:"alt"}})]),t._v(" "),s("a",{attrs:{href:"https://cn.rx.js.org/",target:"_blank"}},[s("img",{attrs:{src:"https://img.shields.io/badge/RxJs-7.4.0-EC0C8E",alt:"alt"}})])]),t._v(" "),s("p",[t._v("ng-zorro-admin 是一个后台前端解决方案，它基于 "),s("a",{attrs:{href:"https://angular.cn/start",target:"_blank",rel:"noopener noreferrer"}},[t._v("angular"),s("OutboundLink")],1),t._v(" 和 "),s("a",{attrs:{href:"https://ng.ant.design/docs/introduce/zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ant Design of Angular"),s("OutboundLink")],1),t._v(" 实现。它使用了最新的前端技术栈，内置了 动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("建议")]),t._v(" "),s("p",[t._v("项目的定位是后台集成方案，因为项目集成了很多你可能用不到的功能，会造成不少的代码冗余。如果你的项目不需要某部分功能，可以按需导入模块或组件。")])]),t._v(" "),s("h2",{attrs:{id:"功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[t._v("#")]),t._v(" 功能")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("- 登录 / 注销\n\n- 权限验证\n  - 菜单权限\n  - 按钮权限\n  - 权限配置\n\n- 全局功能\n  - 快捷导航 (历史页签)\n  - Screenfull\n  - 自适应收缩侧边栏\n\n- 编辑器\n  - 富文本\n\n- 错误页面\n  - 404 TODO\n\n- 組件\n  - 头像上传\n  - 返回顶部\n  - 拖拽Dialog TODO\n  - CountTo TODO\n  - 滚动加载\n  - 相册\n  - 可视化JSON\n\n- 综合实例\n- 错误日志\n- Dashboard TODO\n- 引导页 TODO\n- ECharts 图表\n- Clipboard(剪贴复制) TODO\n\n\n")])])]),s("h2",{attrs:{id:"前序准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前序准备"}},[t._v("#")]),t._v(" 前序准备")]),t._v(" "),s("p",[t._v("你需要在本地安装 "),s("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank"}},[t._v("node")]),t._v(" 和 "),s("a",{attrs:{href:"https://git-scm.com/",target:"_blank"}},[t._v("git")]),t._v(" 。本项目技术栈基于 "),s("a",{attrs:{href:"https://es6.ruanyifeng.com/",target:"_blank"}},[t._v("ES2015+")]),t._v("、"),s("a",{attrs:{href:"https://www.tslang.cn/docs/handbook/basic-types.html",target:"_blank"}},[t._v("typeScript")]),t._v("、"),s("a",{attrs:{href:"https://angular.cn/start",target:"_blank"}},[t._v("angular-cli")]),t._v("、"),s("a",{attrs:{href:"https://cn.rx.js.org/",target:"_blank"}},[t._v("rxjs")]),t._v(" 和 "),s("a",{attrs:{href:"https://ng.ant.design/docs/introduce/zh",target:"_blank"}},[t._v("ngzorro")]),t._v("，提前了解和学习这些知识会对使用本项目有很大的帮助。")]),t._v(" "),s("p",[t._v("同时计划配套系列文章，如何从零构建一个完整的管理后台项目，及相关功能的代码解释，后续会陆续完善教程系列。")]),t._v(" "),s("h2",{attrs:{id:"目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- .browserslistrc                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 跨浏览器兼容")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- .editorconfig                     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 跨编辑器规范")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- angular.json                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Angular 项目配置文件")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- package.json                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# package.json")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- proxy.conf.json                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# proxy配置文件")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- tsconfig.json                     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# typescript 配置文件")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- src\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- index.html                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单页应用的宿主HTML")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- main.ts                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 入口ts文件")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- polyfills.ts                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 腻子脚本")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- styles.less                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 样式引导入口")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- @components                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自定义全局组件")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- components.module.ts      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自定义组件模块")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- @directive                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 公用指令")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- @layout                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通用布局")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- widgets                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 布局专属的小组件")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- @service                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务文件夹")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- auth.guard.ts             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路由守卫")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- auth.service.ts           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 登陆服务")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- crypto.service.ts         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# AES加密算法")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- default.interceptor.ts    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认HTTP拦截器")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- @shared                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# NG-ZORRO组件库")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- @utils                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# js工具库    ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- app\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- main\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- main-routing.module.ts "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 业务路由注册口")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- main.module.ts         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 业务路由模块")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- pages                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 业务目录")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- passport                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 登陆模块")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- assets                        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地静态资源")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- environments                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 环境变量配置")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- environment.prod.ts\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- environment.ts\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-- styles\n")])])]),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆项目")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/****.git\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入项目目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ng-zorro-admin\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以通过如下操作解决 npm 下载速度慢的问题")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --registry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npm.taobao.org\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地开发 启动项目")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" start\n")])])]),s("p",[t._v("启动完成后会自动打开浏览器访问 "),s("a",{attrs:{href:"http://localhost:7300",target:"_blank"}},[t._v("http://localhost:7300")]),t._v("， 你看到下面的页面就代表操作成功了。")]),t._v(" "),s("p",[t._v("接下来你可以修改代码进行业务开发了，本项目内建了典型业务模板、常用业务组件、HMR预览、状态管理TODO、国际化TODO、等等各种实用的功能来辅助开发。")]),t._v(" "),s("h2",{attrs:{id:"browsers-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#browsers-support"}},[t._v("#")]),t._v(" Browsers Support")]),t._v(" "),s("p",[t._v("Angular 支持大多数常用浏览器，包括下列"),s("a",{attrs:{href:"https://v13.angular.io/guide/browser-support",target:"_blank",rel:"noopener noreferrer"}},[t._v("版本"),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("浏览器")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("支持的版本")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Chrome")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("最新")])]),t._v(" "),s("tr",[s("td",[t._v("Firefox")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("最新版以及扩展支持版本 (ESR)")])]),t._v(" "),s("tr",[s("td",[t._v("Edge")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("最近的两个主版本")])]),t._v(" "),s("tr",[s("td",[t._v("Safari")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("最近的两个主版本")])])])]),t._v(" "),s("p",[t._v("使用 ng new 创建项目时，会自动为你安装一些强制性腻子脚本（比如 zone.js），并且它对应的 import 语句已在 src/polyfills.ts 配置文件中启用。所以腻子脚本已经帮我们兼容绝大部分浏览器了。")]),t._v(" "),s("h2",{attrs:{id:"angular-生态圈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#angular-生态圈"}},[t._v("#")]),t._v(" angular 生态圈")])])}),[],!1,null,null,null);s.default=n.exports}}]);