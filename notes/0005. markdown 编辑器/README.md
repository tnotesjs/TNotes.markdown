# [0005. markdown 编辑器](https://github.com/tnotesjs/TNotes.markdown/tree/main/notes/0005.%20markdown%20%E7%BC%96%E8%BE%91%E5%99%A8)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 🤔 常见的 markdown 编辑器有哪些？](#3--常见的-markdown-编辑器有哪些)
- [4. 🤔 如何选择适合自己的 markdown 编辑器？](#4--如何选择适合自己的-markdown-编辑器)
- [5. 🤔 在线编辑器和本地编辑器有何区别？](#5--在线编辑器和本地编辑器有何区别)
- [6. 🤔 VS Code 如何用于 markdown 编写？](#6--vs-code-如何用于-markdown-编写)
- [7. 🤔 markdown 编辑器的实时预览功能是如何实现的？](#7--markdown-编辑器的实时预览功能是如何实现的)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- todo

## 2. 🫧 评价

- todo

## 3. 🤔 常见的 markdown 编辑器有哪些？

- 本地桌面端：Typora（付费）、Obsidian（免费 / 付费插件）、VS Code（配合插件）、iA Writer、Zed
- 在线编辑器：StackEdit、Dillinger、HackMD、GitHub 在线编辑器
- 终端编辑器：Vim / Neovim（配合插件）、Emacs

## 4. 🤔 如何选择适合自己的 markdown 编辑器？

可以从以下几个维度考虑：

- 使用场景：是写博客、做笔记、还是撰写技术文档？
- 功能需求：是否需要实时预览、导出 PDF、双向链接、版本管理等功能？
- 费用：Typora 为付费软件，Obsidian 基础版免费，VS Code 完全免费
- 平台兼容：是否需要在 Windows、macOS、Linux、移动端之间同步使用？
- 扩展能力：VS Code 和 Obsidian 均有丰富的插件生态，可高度定制

## 5. 🤔 在线编辑器和本地编辑器有何区别？

在线编辑器运行在浏览器中，无需安装，随时随地可访问，适合临时编写或团队协作；但依赖网络，隐私保护可能较弱，离线不可用。本地编辑器安装在设备上，响应速度快，数据存储在本地，不依赖网络，隐私更有保障；但需要手动安装和配置，跨设备同步需借助云盘等工具。

## 6. 🤔 VS Code 如何用于 markdown 编写？

VS Code 内置了 markdown 基本支持，安装后即可使用：

- 使用 `Ctrl+Shift+V`（或 `Cmd+Shift+V`）打开实时预览面板
- 使用 `Ctrl+K V` 在侧边分屏模式下预览
- 安装 Markdown All in One 插件可获得快捷键、目录生成、格式化等增强功能
- 安装 Markdown Preview Enhanced 可支持数学公式、Mermaid 图表等高级特性

## 7. 🤔 markdown 编辑器的实时预览功能是如何实现的？

大多数 markdown 编辑器的实时预览通过以下流程实现：编辑器监听文本输入事件，当内容变化时，调用内置或第三方的 markdown 解析器（如 marked、markdown-it、commonmark 等）将 markdown 文本解析为 HTML，再将生成的 HTML 注入到预览区域的渲染引擎（通常是基于 WebView / Chromium 的嵌入式浏览器）中进行显示。为了提升性能，通常只会对变更的部分进行增量更新，而非全量重新渲染。
