# [0021. 手写 markdown 解析器](https://github.com/tnotesjs/TNotes.markdown/tree/main/notes/0021.%20%E6%89%8B%E5%86%99%20markdown%20%E8%A7%A3%E6%9E%90%E5%99%A8)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 💻 demos.1 - 实现极简版 markdown 解析器](#3--demos1---实现极简版-markdown-解析器)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- markdown 解析器实现原理简介
- 手写 markdown 解析器

## 2. 🫧 评价

通过一个简单的示例来快速了解 markdown 解析器的实现原理。

## 3. 💻 demos.1 - 实现极简版 markdown 解析器

::: code-group

<<< ./demos/1/1.md [1.md（输入）]

<<< ./demos/1/1.js [1.js（解析器）]

<<< ./demos/1/1.html [1.html（输出）]

:::

用浏览器打开输出产物 `1.html` 页面，可以看到解析后的效果：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-07-14-05-19.png)

通过 `1.js` 的实现源码来看，核心解析器函数 parseMarkdown 的代码差不多也就 100 行左右，就能实现一个极简版的 markdown 解析器。
