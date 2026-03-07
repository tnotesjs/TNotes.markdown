# [0004. 初始 markdown](https://github.com/tnotesjs/TNotes.markdown/tree/main/notes/0004.%20%E5%88%9D%E5%A7%8B%20markdown)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 🤔 什么是 markdown？](#3--什么是-markdown)
- [4. 🤔 markdown 是如何诞生和发展的？](#4--markdown-是如何诞生和发展的)
- [5. 🤔 markdown 有哪些核心设计理念？](#5--markdown-有哪些核心设计理念)
- [6. 🤔 markdown 的应用场景有哪些？](#6--markdown-的应用场景有哪些)
- [7. 🤔 markdown 与富文本编辑器相比有哪些优缺点？](#7--markdown-与富文本编辑器相比有哪些优缺点)
- [8. 🤔 markdown 和 HTML 之间的关系是？](#8--markdown-和-html-之间的关系是)
- [9. 🔗 引用](#9--引用)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- markdown 简介

## 2. 🫧 评价

看一乐即可，没啥特别重要的内容，可以当做一个小科普来看看，了解一下 markdown 的历史和设计理念，顺便看看它的应用场景和优缺点。

顺带提一嘴，在查看两位作者生平的时候，发现其中一位 Aaron Swartz 在 2013 年已经离世了，享年 26 岁，死因上吊自杀（在看 wiki 文档的时候无意间看到，就特此记录下！）。另一位作者 John Gruber 目前 26.03 是 52-53 岁，2004 年创建 markdown 的时候，那时大概 30 岁左右。

## 3. 🤔 什么是 markdown？

markdown 是一种轻量级标记语言，使用纯文本格式编写文档，通过简单的符号（如 `#`、`*`、`-` 等）来定义文本结构和样式，最终可被解析器转换为 HTML 或 PDF 等格式进行展示。

它的核心思想是：就算不经过渲染，原始文本本身也应该清晰可读。

## 4. 🤔 markdown 是如何诞生和发展的？

markdown 由程序员 John Gruber 和互联网活动家 Aaron Swartz 于 2004 年共同设计并发布，最初的目标是让人们可以用易读易写的纯文本格式撰写文章，并能方便地转换为有效的 HTML。

此后，随着 GitHub、Stack Overflow 等平台的广泛采用，markdown 的使用急剧增长，但也出现了大量互不兼容的方言版本。

2014 年，CommonMark 规范应运而生，试图为 markdown 提供统一、无歧义的标准。

GitHub 则在此基础上推出了 GFM（GitHub Flavored Markdown），增加了表格、任务列表等扩展语法。

## 5. 🤔 markdown 有哪些核心设计理念？

- 易读性优先：markdown 的源文件本身就应该具备可读性，即便不经渲染也能直观理解文档结构，而不是满眼的 HTML 标签。
- 简洁性：用最少的符号表达最多的格式，降低写作时的心理负担。
- 可移植性：纯文本文件跨平台、跨工具，不依赖特定软件，便于版本管理和长期存档。
- 可转换性：最初设计目标是轻松转为 HTML，但现代工具已支持转出为 PDF、Word、LaTeX 等多种格式。
  - 第一个 markdown-to-html 转换器就是作者 John Gruber 用 Perl 编写的。

## 6. 🤔 markdown 的应用场景有哪些？

- 技术文档和 README 文件（GitHub、GitLab 等代码托管平台）
- 博客文章和静态网站内容（Hugo、Jekyll、VitePress 等）
- 笔记管理（Obsidian、Notion、Typora 等）
- 论坛帖子和问答社区（Stack Overflow、Reddit 等）
- API 文档、Wiki 和知识库
- 电子书和学术写作（结合 Pandoc 等工具）
- AI 回复内容
  - 如目前 26.03 市面上大部分的大语言模型回复的内容都是 markdown 格式的文本数据，你一键复制的内容就是 markdown 格式的文本数据
- ……

## 7. 🤔 markdown 与富文本编辑器相比有哪些优缺点？

优点：

- 纯文本存储，文件体积小，方便版本控制（git 友好）
- 语法简洁，学习成本低
- 跨平台兼容，不依赖特定软件
- 支持自动化处理和批量转换
- ……

缺点：

- 缺乏统一标准，不同平台对部分语法的解析可能不一致
- 复杂排版（如多列布局、精确图文混排）支持有限
- 无法直接所见即所得，依赖渲染工具查看最终效果
- 对非技术用户有一定学习门槛
- ……

## 8. 🤔 markdown 和 HTML 之间的关系是？

Markdown 并不是 HTML 的替代品，而是 HTML 的简化版本。实际上，Markdown 的最终目标就是转换为 HTML。两者的关系可以这样理解：

```
Markdown 源码 → 解析器 → HTML 输出 → 浏览器渲染
```

例如，当你写下：

```
# 这是一个标题
```

它会被转换为：

```
<h1>这是一个标题</h1>
```

重要的是，在 Markdown 中你可以直接使用 HTML 标签，这为复杂格式提供了灵活性。当 Markdown 的基础语法无法满足需求时，可以嵌入 HTML 代码来实现特定效果。

## 9. 🔗 引用

- [wiki - John Gruber][1]
- [wiki - markdown][2]
- [wiki - Perl][5]
- [CommonMark][3]
- [GitHub Flavored Markdown][4]

[1]: https://en.wikipedia.org/wiki/John_Gruber
[2]: https://zh.wikipedia.org/wiki/Markdown
[3]: https://commonmark.org/
[4]: https://github.github.com/gfm/
[5]: https://en.wikipedia.org/wiki/Perl
