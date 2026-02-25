# [0003. Writing on GitHub](https://github.com/tnotesjs/TNotes.markdown/tree/main/notes/0003.%20Writing%20on%20GitHub)

<!-- region:toc -->

- [1. 🎯 本节内容](#1--本节内容)
- [2. 🫧 评价](#2--评价)
- [3. 🤔 如何搭建 github 的测试书写环境呢？](#3--如何搭建-github-的测试书写环境呢)
- [4. 🤔 为什么说 Github 对传统的 markdown 做了一些扩展？](#4--为什么说-github-对传统的-markdown-做了一些扩展)
- [5. 🤔 如何在 github 上使用表情符号（Using emojis）？](#5--如何在-github-上使用表情符号using-emojis)
- [6. 🤔 如何在 github 中书写警告信息（Alerts）？](#6--如何在-github-中书写警告信息alerts)
- [7. 🤔 在哪查阅 github 对 markdown 的书写都提供了哪些额外的支持呢？](#7--在哪查阅-github-对-markdown-的书写都提供了哪些额外的支持呢)
- [8. 🔗 引用](#8--引用)

<!-- endregion:toc -->

## 1. 🎯 本节内容

- github 上的 markdown 扩展功能

## 2. 🫧 评价

本节介绍了 GitHub 对 Markdown 的一部分扩展功能，比如：使用 Emoji 和 Alerts 来增强文档的表达效果。

## 3. 🤔 如何搭建 github 的测试书写环境呢？

最简单直接的方法：随便找一个项目，比如 [vscode github][4]：

1. 进入到 Issues 面板，点击 `New issue` 新建问题
2. 随便选择一个问题类型
3. 弹出的编辑器就是一个可以测试书写 github markdown 的环境了，可以在 Write 中输入 markdown
4. 可以在 Preview 中预览，就可以看到效果了

::: swiper

![1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-02-25-18-06-56.png)

![2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-02-25-18-07-38.png)

![3](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-02-25-18-07-49.png)

![4](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-02-25-18-07-55.png)

:::

推荐的做法：

1. 你可以新建一个和自己用户名同名的仓库，这个仓库会比较特殊，GitHub 会自动将这个仓库的 README.md 文件渲染到你的个人主页上，作为你的个人简介展示。
2. 你需要在这个仓库中创建一个 README.md 文件，然后随便写点儿内容，并 push 到 github 上，你编写的内容就会在你的主页上显示出来。此时你可以点击编辑按钮，即可进入在线编辑模式。
3. 在 Edit 模式下编写 markdown。
4. 在 Preview 模式下预览效果。

::: swiper

![1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-02-25-18-00-38.png)

![2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-02-25-18-00-46.png)

![3](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-02-25-18-02-31.png)

![4](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-02-25-18-02-40.png)

:::

## 4. 🤔 为什么说 Github 对传统的 markdown 做了一些扩展？

回答这个问题，需要先确定对比的对象：

- 对象1：github 中的 markdown
  - 这可以通过上述介绍到的如何在 github 中搭建 markdown 编写环境来体验。
- 对象2：传统的 markdown
  - 这里我们可以暂且将传统的 markdown 定义为 [markdown-it][2] 的渲染机制。
  - VSCode 自带的 markdown 预览功能也是基于 markdown-it 来实现的，可见这也算得上是一个比较主流的 markdown 渲染实现了。
  - 你可以直接在 VSCode 中新建一个 `xxx.md` 文件来快速体验。
  - ![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-02-25-17-43-16.png)

之所以说“Github 对传统的 markdown 做了一些扩展”，是因为有些 markdown 的写法 github 上特定支持的，而在 markdown-it 中并不支持（或者说 markdown-it 中需要通过插件来支持的，在 github 上是直接支持的）。

## 5. 🤔 如何在 github 上使用表情符号（Using emojis）？

你可以通过输入 `:EMOJICODE:` 来在你的文字中添加表情符号，格式为冒号后接表情名称。

```md
@octocat :+1: This PR looks great - it's ready to merge! :shipit:
```

输入 `:` 会弹出建议的表情符号列表。随着你输入，列表会进行筛选，因此一旦找到想要的表情，按 Tab 或 Enter 即可完成高亮的结果。

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-02-25-18-27-01.png)

有关可用表情符号和代码的完整列表，请参阅 [Emoji-Cheat-Sheet][5]。

对比：

1. github 中的渲染结果
2. VSCode 中的渲染结果

::: swiper

![1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-02-25-18-28-00.png)

![2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-02-25-18-31-36.png)

:::

## 6. 🤔 如何在 github 中书写警告信息（Alerts）？

```md
> [!NOTE]
>
> Useful information that users should know, even when skimming content.

---

> [!TIP]
>
> Helpful advice for doing things better or more easily.

---

> [!IMPORTANT]
>
> Key information users need to know to achieve their goal.

---

> [!WARNING]
>
> Urgent info that needs immediate user attention to avoid problems.

---

> [!CAUTION]
>
> Advises about risks or negative outcomes of certain actions.
```

对比：

1. github 中的渲染结果
2. VSCode 中的渲染结果

::: swiper

![1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-02-25-18-34-33.png)

![2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-02-25-18-35-33.png)

:::

## 7. 🤔 在哪查阅 github 对 markdown 的书写都提供了哪些额外的支持呢？

在上述的内容中，介绍了 github 中书写 markdown 的两个特性：`emoji` 和 `Alerts`，实际上 GitHub 中对 markdown 的书写都提供了很多额外的支持。

更多有关如何在 GitHub 上书写内容的语法特性，可以参考 [Writing on GitHub][1] 官方文档。

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs-2026@main/2026-02-25-15-14-35.png)

如果在 github 上查看其他人写的文档时，发现一些特殊的效果不知道如何使用 markdown 来编写，那么可以到这篇官方提供的文档中找找看相应的语法介绍。

## 8. 🔗 引用

- [Writing on GitHub][1]
- [markdown-it demo][2]
- [markdown-it github][3]
- [vscode github][4]
- [emoji-cheat-sheet][5]

[1]: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github
[2]: https://markdown-it.github.io/
[3]: https://github.com/markdown-it/markdown-it
[4]: https://github.com/microsoft/vscode
[5]: https://github.com/ikatyang/emoji-cheat-sheet/blob/github-actions-auto-update/README.md
