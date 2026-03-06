# [0011. markdown 链接](https://github.com/tnotesjs/TNotes.markdown/tree/main/notes/0011.%20markdown%20%E9%93%BE%E6%8E%A5)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 🤔 如何在 markdown 中创建行内链接？](#3--如何在-markdown-中创建行内链接)
- [4. 🤔 如何创建引用式链接？](#4--如何创建引用式链接)
- [5. 🤔 如何给链接添加 title 属性？](#5--如何给链接添加-title-属性)
- [6. 🤔 如何快捷地创建自动链接？](#6--如何快捷地创建自动链接)
- [7. 🤔 如何创建指向文档内锚点的链接？](#7--如何创建指向文档内锚点的链接)
- [8. 🤔 TNotes 笔记中的锚点链接是如何理的？](#8--tnotes-笔记中的锚点链接是如何理的)
- [9. 🔗 引用](#9--引用)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- markdown 链接基本衣服啊
- markdown 引用式链接语法
- markdown 锚点链接

## 2. 🫧 评价

非常推荐使用引用链接的写法来创建链接，TNotes 中的笔记中插入的“🔗 引用”部分，都是采用这样的方式来定义的。

示例：

```
笔记「0002. 学习资料」中的引用部分的写法：

- [markdown - 菜鸟教程][1]
- [LaTeX - 菜鸟教程][2]
- [LaTeX 入门 - OI Wiki][3]

[1]: https://www.runoob.com/markdown/md-tutorial.html
[2]: https://www.runoob.com/latex/latex-tutorial.html
[3]: https://oi-wiki.org/tools/latex/
```

## 3. 🤔 如何在 markdown 中创建行内链接？

使用 `[链接文本](URL)` 格式：

```
[TNotes.markdown github](https://github.com/tnotesjs/TNotes.markdown)
```

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-06-23-12-08.png)

## 4. 🤔 如何创建引用式链接？

将链接定义与使用分离，适合在正文中多次使用同一链接：

```
这是 [TNotes.markdown github 仓库][TNotes.markdown] 的链接。

[TNotes.markdown]: https://github.com/tnotesjs/TNotes.markdown
```

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-06-23-13-44.png)

链接定义通常放在文档末尾，使正文部分更加简洁。

## 5. 🤔 如何给链接添加 title 属性？

在 URL 后面添加用引号包裹的标题文字：

```
[GitHub](https://github.com "代码托管平台")
```

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-06-23-16-02.png)

鼠标悬停在链接上时，title 内容会以提示框（tooltip）的形式显示。

## 6. 🤔 如何快捷地创建自动链接？

用尖括号 `<>` 包裹 URL 或邮箱地址：

```
<https://github.com>
<user@example.com>
```

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-06-23-17-10.png)

GFM（GitHub Flavored Markdown）还支持直接书写 URL 自动转为链接，无需尖括号。

## 7. 🤔 如何创建指向文档内锚点的链接？

markdown 中每个标题会自动生成一个锚点 ID（通常是标题文字的小写形式，空格转为连字符），可以通过 `#` 引用：

```
[跳转到安装章节](#安装)
[跳转到 API 说明](#api-说明)
```

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-06-23-22-58.png)

锚点链接通常用作文档内跳转，常用于实现目录导航。

注意：不同渲染平台对锚点 ID 的生成规则略有差异，使用前建议先确认实际生成的 ID。

## 8. 🤔 TNotes 笔记中的锚点链接是如何理的？

TNotes 笔记中的锚点链接是基于 `github-slugger` 来创建的，原因：

- github page（vitepress 构建的站点）兼容
- github 兼容

目前 TNotes 笔记的预览主要就只有上述这两种方式，两种方式测试下来都能准确实现标题的跳转。

## 9. 🔗 引用

- [NPM github-slugger][1]

[1]: https://www.npmjs.com/package/github-slugger
