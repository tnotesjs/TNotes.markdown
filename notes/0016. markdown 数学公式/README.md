# [0016. markdown 数学公式](https://github.com/tnotesjs/TNotes.markdown/tree/main/notes/0016.%20markdown%20%E6%95%B0%E5%AD%A6%E5%85%AC%E5%BC%8F)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 🤔 markdown 如何支持数学公式渲染？](#3--markdown-如何支持数学公式渲染)
- [4. 🤔 行内公式与独立公式（块级公式）有何区别？](#4--行内公式与独立公式块级公式有何区别)
- [5. 🤔 如何使用 LaTeX 语法编写常见数学公式？](#5--如何使用-latex-语法编写常见数学公式)
- [6. 🤔 常见的数学公式渲染引擎（KaTeX、MathJax）有哪些区别？](#6--常见的数学公式渲染引擎katexmathjax有哪些区别)
- [7. 🤔 数学公式在不同平台上的兼容性如何？](#7--数学公式在不同平台上的兼容性如何)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- todo

## 2. 🫧 评价

- todo

## 3. 🤔 markdown 如何支持数学公式渲染？

标准 markdown 本身不支持数学公式，需要依赖渲染引擎的支持。常见方式是在 markdown 渲染工具中集成 KaTeX 或 MathJax 这两种 JavaScript 数学排版库。文档中用特定的定界符标记公式区域，渲染引擎识别后调用对应库将 LaTeX 语法转换为可视化的数学公式。大多数现代 markdown 工具、静态站点生成器（如 VitePress、Hexo）均可通过配置或插件开启数学公式支持。

## 4. 🤔 行内公式与独立公式（块级公式）有何区别？

行内公式嵌入在段落文字中，使用单个美元符号 `$` 包裹，与上下文在同一行显示，如 `$E = mc^2$`。独立公式（块级公式）单独占据一行或多行，使用两个美元符号 `$$` 包裹，居中展示，适合复杂的多行公式：

```
$$
\int_{-\infty}^{+\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

## 5. 🤔 如何使用 LaTeX 语法编写常见数学公式？

- 分数：`\frac{分子}{分母}`，如 `$\frac{1}{2}$`
- 上标 / 下标：`x^{2}`、`x_{i}`，如 `$x^{2} + y_{i}$`
- 求和 / 积分：`\sum_{i=1}^{n}`、`\int_{a}^{b}`
- 根号：`\sqrt{x}`、`\sqrt[n]{x}`
- 希腊字母：`\alpha`、`\beta`、`\pi`、`\Sigma` 等
- 矩阵：使用 `matrix`、`pmatrix`、`bmatrix` 等环境

## 6. 🤔 常见的数学公式渲染引擎（KaTeX、MathJax）有哪些区别？

KaTeX 由 Khan Academy 开发，渲染速度极快（同步渲染），支持服务端渲染，支持的 LaTeX 命令数量相对较少，但覆盖了绅大多数日常用法，是当前更推荐的选择。MathJax 功能更完整，支持几乎所有 LaTeX 命令，还支持 AsciiMath 和 MathML 输入，但渲染速度相对较慢（异步渲染），适合有复杂公式需求的学术场景。

## 7. 🤔 数学公式在不同平台上的兼容性如何？

不同平台对数学公式的支持差异较大：GitHub 自 2022 年起原生支持 `$` 和 `$$` 语法；GitHub Pages、GitLab 原生不支持，需要通过主题或脚本引入 KaTeX / MathJax；VitePress、MkDocs、Hexo 等静态网站生成器可通过插件开启支持；Typora、Obsidian 等本地编辑器大多内置了数学公式支持；纯文本导出的 markdown 文件在不支持的阅读器中公式会以原始 LaTeX 代码显示。
