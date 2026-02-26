# [0004. 初始 markdown](https://github.com/tnotesjs/TNotes.markdown/tree/main/notes/0004.%20%E5%88%9D%E5%A7%8B%20markdown)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 🤔 什么是 markdown？](#3--什么是-markdown)
- [4. 🤔 markdown 是如何诞生和发展的？](#4--markdown-是如何诞生和发展的)
- [5. 🤔 markdown 有哪些核心设计理念？](#5--markdown-有哪些核心设计理念)
- [6. 🤔 markdown 的应用场景有哪些？](#6--markdown-的应用场景有哪些)
- [7. 🤔 markdown 与富文本编辑器相比有哪些优缺点？](#7--markdown-与富文本编辑器相比有哪些优缺点)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- todo

## 2. 🫧 评价

- todo

## 3. 🤔 什么是 markdown？

markdown 是一种轻量级标记语言，使用纯文本格式编写文档，通过简单的符号（如 `#`、`*`、`-` 等）来定义文本结构和样式，最终可被解析器转换为 HTML 或 PDF 等格式进行展示。它的核心思想是：就算不经过渲染，原始文本本身也应该清晰可读。

## 4. 🤔 markdown 是如何诞生和发展的？

markdown 由程序员 John Gruber 和互联网活动家 Aaron Swartz 于 2004 年共同设计并发布，最初的目标是让人们可以用易读易写的纯文本格式撰写文章，并能方便地转换为有效的 HTML。此后，随着 GitHub、Stack Overflow 等平台的广泛采用，markdown 的使用急剧增长，但也出现了大量互不兼容的方言版本。2014 年，CommonMark 规范应运而生，试图为 markdown 提供统一、无歧义的标准。GitHub 则在此基础上推出了 GFM（GitHub Flavored Markdown），增加了表格、任务列表等扩展语法。

## 5. 🤔 markdown 有哪些核心设计理念？

- 易读性优先：markdown 的源文件本身就应该具备可读性，即便不经渲染也能直观理解文档结构，而不是满眼的 HTML 标签。
- 简洁性：用最少的符号表达最多的格式，降低写作时的心理负担。
- 可移植性：纯文本文件跨平台、跨工具，不依赖特定软件，便于版本管理和长期存档。
- 可转换性：最初设计目标是轻松转为 HTML，但现代工具已支持转出为 PDF、Word、LaTeX 等多种格式。

## 6. 🤔 markdown 的应用场景有哪些？

- 技术文档和 README 文件（GitHub、GitLab 等代码托管平台）
- 博客文章和静态网站内容（Hugo、Jekyll、VitePress 等）
- 笔记管理（Obsidian、Notion、Typora 等）
- 论坛帖子和问答社区（Stack Overflow、Reddit 等）
- API 文档、Wiki 和知识库
- 电子书和学术写作（结合 Pandoc 等工具）

## 7. 🤔 markdown 与富文本编辑器相比有哪些优缺点？

优点：

- 纯文本存储，文件体积小，方便版本控制（git 友好）
- 语法简洁，学习成本低
- 跨平台兼容，不依赖特定软件
- 支持自动化处理和批量转换

缺点：

- 缺乏统一标准，不同平台对部分语法的解析可能不一致
- 复杂排版（如多列布局、精确图文混排）支持有限
- 无法直接所见即所得，依赖渲染工具查看最终效果
- 对非技术用户有一定学习门槛
