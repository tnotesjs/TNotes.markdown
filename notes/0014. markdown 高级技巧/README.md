# [0014. markdown 高级技巧](https://github.com/tnotesjs/TNotes.markdown/tree/main/notes/0014.%20markdown%20%E9%AB%98%E7%BA%A7%E6%8A%80%E5%B7%A7)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 🤔 markdown 中如何转义特殊字符？](#3--markdown-中如何转义特殊字符)
  - [3.1. 规范做法：使用反斜杠 `\`](#31-规范做法使用反斜杠-)
  - [3.2. 个人建议：使用 `` ` ``](#32-个人建议使用---)
- [4. 🤔 HTML 标签可以在 markdown 中使用吗？](#4--html-标签可以在-markdown-中使用吗)
- [5. 🤔 什么是扩展 markdown 语法（GFM 等）？](#5--什么是扩展-markdown-语法gfm-等)
- [6. 🤔 如何在 markdown 中添加注释？](#6--如何在-markdown-中添加注释)
- [7. 🤔 markdown 中有哪些提升写作效率的高级技巧？](#7--markdown-中有哪些提升写作效率的高级技巧)
- [8. 🔗 引用](#8--引用)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- markdown 转义特殊字符
- markdown 中的 HTML 标签
- 扩展 markdown 语法（如需自定义新的语法，得具备一定编程基础）
- markdown 中的注释

## 2. 🫧 评价

这篇笔记感觉没啥干货，在传统写作中很少会用到这些内容，更多是偏向技术侧，如果有自定义 markdown 扩展语法的需求，可自行去熟悉下相关的前端技术栈。

## 3. 🤔 markdown 中如何转义特殊字符？

### 3.1. 规范做法：使用反斜杠 `\`

使用反斜杠 `\` 放在特殊字符前面：

```
\*这不是斜体\*
\# 这不是标题
\[这不是链接\]
```

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-07-10-13-47.png)

可以被转义的特殊字符包括：``\ ` * _ { } [ ] ( ) # + - . !``

### 3.2. 个人建议：使用 `` ` ``

除了使用 `\` 之外，我们也可以直接通过代码 `` ` `` 来包裹特殊字符，比如：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-07-10-19-08.png)

如果在书写 markdown 时遇到了一些特殊字符，个人习惯是优先考虑行内代码或者代码块来解决特殊字符的渲染问题。

## 4. 🤔 HTML 标签可以在 markdown 中使用吗？

大多数 markdown 解析器允许在文档中直接嵌入 HTML 标签，渲染时会原样输出为 HTML。常见用途：

- `<br>` 强制换行
- `<sub>` / `<sup>` 下标 / 上标
- `<kbd>` 键盘输入样式，如 `<kbd>Ctrl</kbd>+<kbd>C</kbd>`
- `<details>` / `<summary>` 折叠内容
- `<img>` 带尺寸控制的图片

示例：

```html
<p>这是一个段落。</p>

<p>这是一个<br />换行的例子。</p>

<p>这是一个<sub>下标</sub>和<sup>上标</sup>的例子。</p>

<p>这是<kbd>Ctrl</kbd>+<kbd>C</kbd>的例子。</p>

<details>
  <summary>点击展开</summary>
  这是折叠内容。
</details>

<p>下面是一个图片的例子。</p>

<img
  src="https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/assets/footprints.png"
  width="100"
/>
```

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-07-10-28-38.png)

你会发现上述示例中，折叠效果并没有起到作用，这具体取决于 markdown 解析器的逻辑。如果你将上述 `details` 结构写到 vitepress 构建的站点中，是可以被正常解析的，比如下面这样：

<details>
  <summary>点击展开</summary>
  这是折叠内容。
</details>

::: swiper

![折叠状态](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-07-10-30-45.png)

![展开状态](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-07-10-30-52.png)

:::

注意：出于安全原因，部分平台（如某些 wiki 系统）会过滤或禁用 HTML 标签。当你在使用 HTML 标签之前，可以先测试一下你部署的平台是否支持解析这些 HTML 标签。

## 5. 🤔 什么是扩展 markdown 语法（GFM 等）？

标准 markdown（CommonMark）只定义了基础语法，各平台在此基础上进行了扩展：

- GFM（GitHub Flavored Markdown）：由 GitHub 推广，增加了表格、任务列表、删除线、围栏代码块等
- Pandoc markdown：学术写作常用，支持脚注、定义列表、LaTeX 数学公式等
- MultiMarkdown：支持脚注、表格、元数据头等
- Obsidian markdown：支持双向链接 `[[.文章名]]`、callout 块等笔记特有功能

选择何种扩展取决于使用的工具和发布平台。

在 TNotes 中，就利用 vitepress 对 markdown 语法做了一系列的扩展，比如目前（26.03）版本中基于 [SwiperJS][1] 实现的图片轮播功能。

```
::: swiper

![折叠状态](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-07-10-30-45.png)

![展开状态](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-07-10-30-52.png)

:::
```

最终渲染结果如下：

::: swiper

![折叠状态](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-07-10-30-45.png)

![展开状态](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-07-10-30-52.png)

:::

## 6. 🤔 如何在 markdown 中添加注释？

标准 markdown 没有原生注释语法，但有以下几种变通方法：

- 使用 HTML 注释（在支持 HTML 的环境下不会渲染）：`<!-- 这是注释，不会显示 -->`
- 部分工具支持引用式链接的“无用”定义作为注释：`[//]: # (这是注释)`
- 使用空链接：`[comment]: <> (这是注释)`

其中 HTML 注释方式兼容性最好，使用最为广泛。

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-03-07-10-34-35.png)

在 TNotes 中，使用的是 HTML 注释风格。

## 7. 🤔 markdown 中有哪些提升写作效率的高级技巧？

- 利用编辑器的 snippet（代码片段）功能快速插入常用 markdown 结构
- 借助格式化工具（如 Prettier）统一 markdown 文件风格
- 使用 lint 工具（如 markdownlint）检查格式规范
- 配合 Git 进行版本管理，追踪文档变更历史
- 使用 Pandoc 实现 markdown 到多种格式（PDF、Word、HTML）的批量转换
- 在静态网站项目中，通过 frontmatter（YAML 头部）为文档附加元数据

上述提到的这些技巧中，很多都依赖具体的编辑器插件。如果你使用的编辑器也是 VSCode 的话，那还是有不少 markdown 相关插件来辅助我们编写 markdown 文档的。

## 8. 🔗 引用

- [SwiperJS 官网][1]

[1]: https://swiperjs.com/
