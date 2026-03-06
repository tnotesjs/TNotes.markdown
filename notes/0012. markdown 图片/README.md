# [0012. markdown 图片](https://github.com/tnotesjs/TNotes.markdown/tree/main/notes/0012.%20markdown%20%E5%9B%BE%E7%89%87)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 🤔 如何在 markdown 中插入图片？](#3--如何在-markdown-中插入图片)
- [4. 🤔 图片的替代文本（alt text）有什么作用？](#4--图片的替代文本alt-text有什么作用)
- [5. 🤔 如何给图片添加标题（title）？](#5--如何给图片添加标题title)
- [6. 🤔 如何使用引用方式插入图片？](#6--如何使用引用方式插入图片)
- [7. 🤔 是否推荐使用图片的引用语法来插入图片呢？](#7--是否推荐使用图片的引用语法来插入图片呢)
- [8. 🤔 如何控制 markdown 图片的显示尺寸？](#8--如何控制-markdown-图片的显示尺寸)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- markdown 插入图片的基本语法
- markdown 图片替代文本的语法和图片替代文本的作用
- markdown 图片标题提示语法
- markdown 引用式图片的语法
- markdown 中的图片尺寸控制

## 2. 🫧 评价

markdown 中插入图片的语法和插入链接的语法非常像，实际在类似 VSCode 这样的编辑器中书写内容时，插入图片一般都会借助插件来实现。

## 3. 🤔 如何在 markdown 中插入图片？

语法与链接类似，在前面加上感叹号 `!`：

```
![替代文本](图片URL)
![logo](./images/logo.png)
```

比如输入：`![TNotes logo](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/assets/footprints.png)`

最终渲染结果如下：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-06-23-29-18.png)

## 4. 🤔 图片的替代文本（alt text）有什么作用？

当图片无法显示时（网络错误、路径不对等），替代文本会在图片位置显示，让用户了解该图片的内容。同时，替代文本也是屏幕阅读器为视障用户朗读图片内容的依据，对无障碍访问（Accessibility）至关重要。此外，替代文本还有助于搜索引擎索引图片内容以提升 SEO。

如果你输入的是一个无效的图片地址，那么会使用替代文本来显示，比如输入：`![这部分内容是会显示的文案](无效的图片地址)`

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-06-23-31-50.png)

## 5. 🤔 如何给图片添加标题（title）？

与链接相同，在 URL 后添加引号包裹的文字：

```
![替代文本](图片URL "图片标题")
```

鼠标悬停在图片上时，title 会以提示框的形式显示。该标题同时对应 HTML 中 `<img>` 元素的 `title` 属性。

比如输入：`![TNotes logo](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/assets/footprints.png "这是 TNotes 的 logo")`

当鼠标悬停到图片上时，会显示标题提示：

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-06-23-34-20.png)

## 6. 🤔 如何使用引用方式插入图片？

与引用式链接类似，将图片定义和使用分开：

```
![logo][logo-ref]

[logo-ref]: ./images/logo.png "Logo 图片"
```

写法示例：

```
![TNotes logo][1]

[1]: https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/assets/footprints.png "这是 TNotes 的 logo"
```

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-06-23-38-36.png)

## 7. 🤔 是否推荐使用图片的引用语法来插入图片呢？

在 TNotes 中，链接通常会集中在“🔗 引用”部分统一汇总，并使用引用式的写法来表示。但是，图片通常都是直接写链接，而不会使用引用式的写法来表示。

核心原因：

- 图片通常都是独占一张，一般不会在某一段文本中间插入一个图片，这样就不会影响到文本内容的可读性。
- 其次，同一张图在一篇笔记中很可能只会出现一次，并不会像链接那样被多次引用。

如果上述两点都不符合你的书写场景，比如你经常需要在文档中多次使用同一张图片，那么推荐使用引用式写法，这样图片会更清晰，更易管理。

## 8. 🤔 如何控制 markdown 图片的显示尺寸？

标准 markdown 语法不支持设置图片尺寸，需要借助其他方式：

- 使用 HTML `<img>` 标签，通过 `width` 和 `height` 属性控制：`<img src="./logo.png" width="200" alt="logo">`
  - 优点：灵活，兼容性好
  - 缺点：不够简洁，破坏 markdown 的纯文本特性，需要掌握一丢丢 HTML 的基础语法
- 部分扩展语法（如 Obsidian）支持 `![alt|宽度](url)` 的写法
  - 优点：简洁，直接在 markdown 中设置尺寸
  - 缺点：兼容性差，不同平台支持的扩展语法可能不同（如果你的文档也是基于 vitepress 来构建的话，可考虑自行封装解析器来提供支持）
- 使用 CSS 样式对图片进行统一控制（适合有构建流程的文档网站）
  - 比如 vitepress 构建的文档站点，你可以在 style 元素中插入类似这样的样式：`img { width: 50%; }`，这会使得所有图片都缩小 50%，若你的显示器分辨率较高，文档中的所有图片在预览时的尺寸是你截图时尺寸的两倍，倒是可以直接这么暴力处理。
