# [0011. markdown 链接](https://github.com/tnotesjs/TNotes.markdown/tree/main/notes/0011.%20markdown%20%E9%93%BE%E6%8E%A5)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 🤔 如何在 markdown 中创建行内链接？](#3--如何在-markdown-中创建行内链接)
- [4. 🤔 如何创建引用式链接？](#4--如何创建引用式链接)
- [5. 🤔 如何给链接添加 title 属性？](#5--如何给链接添加-title-属性)
- [6. 🤔 如何快捷地创建自动链接？](#6--如何快捷地创建自动链接)
- [7. 🤔 如何创建指向文档内锚点的链接？](#7--如何创建指向文档内锚点的链接)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- todo

## 2. 🫧 评价

- todo

## 3. 🤔 如何在 markdown 中创建行内链接？

使用 `[链接文本](URL)` 格式：

```
[访问 GitHub](https://github.com)
```

## 4. 🤔 如何创建引用式链接？

将链接定义与使用分离，适合在正文中多次使用同一链接：

```
这是 [GitHub][github-link] 的链接。

[github-link]: https://github.com
```

链接定义通常放在文档末尾，使正文部分更加简洁。

## 5. 🤔 如何给链接添加 title 属性？

在 URL 后面添加用引号包裹的标题文字：

```
[GitHub](https://github.com "代码托管平台")
```

鼠标悬停在链接上时，title 内容会以提示框（tooltip）的形式显示。

## 6. 🤔 如何快捷地创建自动链接？

用尖括号 `<>` 包裹 URL 或邮筱地址：

```
<https://github.com>
<user@example.com>
```

GFM（GitHub Flavored Markdown）还支持直接书写 URL 自动转为链接，无需尖括号。

## 7. 🤔 如何创建指向文档内锚点的链接？

markdown 中每个标题会自动生成一个锚点 ID（通常是标题文字的小写形式，空格转为连字符），可以通过 `#` 引用：

```
[跳转到安装章节](#安装)
[跳转到 API 说明](#api-说明)
```

不同渲染平台对锚点 ID 的生成规则略有差异，使用前建议先确认实际生成的 ID。
