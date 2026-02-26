# [0014. markdown 高级技巧](https://github.com/tnotesjs/TNotes.markdown/tree/main/notes/0014.%20markdown%20%E9%AB%98%E7%BA%A7%E6%8A%80%E5%B7%A7)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 🤔 markdown 中如何转义特殊字符？](#3--markdown-中如何转义特殊字符)
- [4. 🤔 HTML 标签可以在 markdown 中使用吗？](#4--html-标签可以在-markdown-中使用吗)
- [5. 🤔 什么是扩展 markdown 语法（GFM 等）？](#5--什么是扩展-markdown-语法gfm-等)
- [6. 🤔 如何在 markdown 中添加注释？](#6--如何在-markdown-中添加注释)
- [7. 🤔 markdown 中有哪些提升写作效率的高级技巧？](#7--markdown-中有哪些提升写作效率的高级技巧)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- todo

## 2. 🫧 评价

- todo

## 3. 🤔 markdown 中如何转义特殊字符？

使用反斜杠 `\` 放在特殊字符前面：

```
\*这不是斜体\*
\# 这不是标题
\[这不是链接\]
```

可以被转义的特殊字符包括：``\ ` * _ { } [ ] ( ) # + - . !``

## 4. 🤔 HTML 标签可以在 markdown 中使用吗？

大多数 markdown 解析器允许在文档中直接嵌入 HTML 标签，渲染时会原样输出为 HTML。常见用途：

- `<br>` 强制换行
- `<sub>` / `<sup>` 下标 / 上标
- `<kbd>` 键盘输入样式，如 `<kbd>Ctrl</kbd>+<kbd>C</kbd>`
- `<details>` / `<summary>` 折叠内容
- `<img>` 带尺寸控制的图片

注意：出于安全原因，部分平台（如某些 wiki 系统）会过滤或禁用 HTML 标签。

## 5. 🤔 什么是扩展 markdown 语法（GFM 等）？

标准 markdown（CommonMark）只定义了基础语法，各平台在此基础上进行了扩展：

- GFM（GitHub Flavored Markdown）：由 GitHub 推广，增加了表格、任务列表、删除线、围栏代码块等
- Pandoc markdown：学术写作常用，支持脚注、定义列表、LaTeX 数学公式等
- MultiMarkdown：支持脚注、表格、元数据头等
- Obsidian markdown：支持双向链接 `[[.文章名]]`、callout 块等笔记特有功能

选择何种扩展取决于使用的工具和发布平台。

## 6. 🤔 如何在 markdown 中添加注释？

标准 markdown 没有原生注释语法，但有以下几种变通方法：

- 使用 HTML 注释（在支持 HTML 的环境下不会渲染）：`<!-- 这是注释，不会显示 -->`
- 部分工具支持引用式链接的“无用”定义作为注释：`[//]: # (这是注释)`
- 使用空链接：`[comment]: <> (这是注释)`

其中 HTML 注释方式兼容性最好，使用最为广泛。

## 7. 🤔 markdown 中有哪些提升写作效率的高级技巧？

- 利用编辑器的 snippet（代码片段）功能快速插入常用 markdown 结构
- 借助格式化工具（如 Prettier）统一 markdown 文件风格
- 使用 lint 工具（如 markdownlint）检查格式规范
- 配合 Git 进行版本管理，追踪文档变更历史
- 使用 Pandoc 实现 markdown 到多种格式（PDF、Word、HTML）的批量转换
- 在静态网站项目中，通过 frontmatter（YAML 头部）为文档附加元数据
