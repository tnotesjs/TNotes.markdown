# [0007. markdown 文本格式](https://github.com/tnotesjs/TNotes.markdown/tree/main/notes/0007.%20markdown%20%E6%96%87%E6%9C%AC%E6%A0%BC%E5%BC%8F)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 🤔 如何在 markdown 中加粗文字？](#3--如何在-markdown-中加粗文字)
- [4. 🤔 如何在 markdown 中设置斜体？](#4--如何在-markdown-中设置斜体)
- [5. 🤔 如何同时使用粗体和斜体？](#5--如何同时使用粗体和斜体)
- [6. 🤔 markdown 中如何添加删除线？](#6--markdown-中如何添加删除线)
- [7. 🤔 markdown 中如何表示下标和上标？](#7--markdown-中如何表示下标和上标)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- 加粗语法
- 斜体语法
- 删除线语法
- 上、下标语法

## 2. 🫧 评价

笔记中介绍到的这些语法都非常简单，快速搂一眼基本就差不多了。

## 3. 🤔 如何在 markdown 中加粗文字？

使用两个星号 `**` 或两个下划线 `__` 包裹文字：

```
这不是加粗文字
**这是加粗文字**
__这也是加粗文字__
```

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-02-21-54-08.png)

## 4. 🤔 如何在 markdown 中设置斜体？

使用单个星号 `*` 或单个下划线 `_` 包裹文字：

```
这不是泄题文字
*这是斜体文字*
_这也是斜体文字_
```

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-02-21-54-55.png)

## 5. 🤔 如何同时使用粗体和斜体？

使用三个星号 `***` 或三个下划线 `___` 包裹文字（也可以混合使用：`**_粗体包裹斜体_**`）：

```
这是非加粗、非斜体文字
***这是粗体+斜体文字***
___这也是粗体+斜体文字___
```

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-02-21-55-49.png)

## 6. 🤔 markdown 中如何添加删除线？

使用两个波浪号 `~~` 包裹文字（GFM 扩展语法）：

```
这段文字没有删除线
~~这段文字有删除线~~
```

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-02-21-56-57.png)

## 7. 🤔 markdown 中如何表示下标和上标？

标准 markdown 不直接支持下标和上标，需借助 HTML 标签或扩展语法：

- 上标：使用 HTML `<sup>` 标签，如 `X<sup>2</sup>` 显示为 X²
- 下标：使用 HTML `<sub>` 标签，如 `H<sub>2</sub>O` 显示为 H₂O
- 部分扩展（如 Pandoc、MultiMarkdown）支持 `^上标^` 和 `~下标~` 语法

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-02-21-58-27.png)
