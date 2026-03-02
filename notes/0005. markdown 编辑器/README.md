# [0005. markdown 编辑器](https://github.com/tnotesjs/TNotes.markdown/tree/main/notes/0005.%20markdown%20%E7%BC%96%E8%BE%91%E5%99%A8)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 🤔 常见的 markdown 编辑器有哪些？](#3--常见的-markdown-编辑器有哪些)
  - [3.1. 本地桌面端](#31-本地桌面端)
  - [3.2. 在线编辑器](#32-在线编辑器)
  - [3.3. 终端编辑器](#33-终端编辑器)
- [4. 🤔 如何选择适合自己的 markdown 编辑器？](#4--如何选择适合自己的-markdown-编辑器)
- [5. 🤔 在线编辑器和本地编辑器有何区别？](#5--在线编辑器和本地编辑器有何区别)
- [6. 🤔 VS Code 如何用于 markdown 编写？](#6--vs-code-如何用于-markdown-编写)
- [7. 🤔 markdown 编辑器的实时预览功能是如何实现的？](#7--markdown-编辑器的实时预览功能是如何实现的)
- [8. 🔗 引用](#8--引用)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- markdown 编辑器简介

## 2. 🫧 评价

TNotes 中的一系列笔记就是一个个 markdown 文件，使用的方案：VS Code + 插件 + 手写脚本、服务来管理笔记。

## 3. 🤔 常见的 markdown 编辑器有哪些？

市面上的 markdown 编辑器非常多，感兴趣的话可以自行搜索关键字到对应的官网去了解详情。

以下是相对比较常见的一些 markdown 编辑器：

### 3.1. 本地桌面端

- Typora（付费）
- Obsidian（免费 / 付费插件）
- VS Code（开源免费、配合插件）
- Zed（一款类似 VSCode 的使用 Rust 实现的开源编辑器）
- MarkText（开源免费）
- Zettlr（开源免费）
- ……

### 3.2. 在线编辑器

- StackEdit
- Dillinger
- GitHub 在线编辑器（github.dev）
- ……

### 3.3. 终端编辑器

- Vim / Neovim（配合插件）
- Emacs
- ……

## 4. 🤔 如何选择适合自己的 markdown 编辑器？

没啥特别好的建议，如果真要说的话，那就是：“先明确自己的需求，再根据你的具体需求去找对应的工具，如果找不到对应的工具，再尝试去理解这个工具的实现原理，看是否可以自己写一个。” —— 就个人实践来看，这做法在是屡试不爽。

markdown 文档的语法解析和渲染逻辑并不难，你可以通过简短的 100 行左右的脚本即可实现一个基础版本的 markdown 解析器。

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

## 8. 🔗 引用

- [typora - 官网][1]
- [obsidian - 官网][2]
- [vscode - 官网][3]
- [vscode - github 仓库][10]
- [stackedit - 官网][4]
- [stackedit - github 仓库][5]
- [Dillinger - 官网][6]
- [dillinger - github 仓库][7]
- [zed - 官网][9]
- [zed - github 仓库][8]
- [Emacs Book - github 仓库][11]
- [Emacs - github 仓库][12]
- [vim - github 仓库][13]
- [neovim - github 仓库][14]
- [Zettlr - github 仓库][15]

[1]: https://typora.io/
[2]: https://obsidian.md/
[3]: https://code.visualstudio.com/
[4]: https://stackedit.io/
[5]: https://github.com/benweet/stackedit
[6]: https://dillinger.io/
[7]: https://github.com/joemccann/dillinger
[8]: https://github.com/zed-industries/zed
[9]: https://zed.dev/
[10]: https://github.com/microsoft/vscode
[11]: https://github.com/Pavinberg/emacs-book/
[12]: https://github.com/emacs-mirror/emacs
[13]: https://github.com/vim/vim
[14]: https://github.com/neovim/neovim
[15]: https://github.com/Zettlr/Zettlr
