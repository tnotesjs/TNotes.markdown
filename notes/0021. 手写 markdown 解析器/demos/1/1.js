import { readFileSync, writeFileSync } from 'fs'

/**
 * 极简版 Markdown 解析器
 * 支持：标题、粗体、斜体、代码、链接、图片、列表、引用、水平线、代码块、段落
 */
function parseMarkdown(md) {
  const lines = md.split('\n')
  const html = []
  let i = 0
  let listStack = []

  while (i < lines.length) {
    const line = lines[i]

    // 空行：关闭当前所有列表
    if (line.trim() === '') {
      while (listStack.length) html.push(`</${listStack.pop().tag}>`)
      i++
      continue
    }

    // 围栏代码块 ```
    if (line.trim().startsWith('```')) {
      const lang = line.trim().slice(3).trim()
      const codeLines = []
      i++
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      i++ // 跳过结束的 ```
      const escaped = codeLines
        .join('\n')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
      const langAttr = lang ? ` class="language-${lang}"` : ''
      html.push(`<pre><code${langAttr}>${escaped}</code></pre>`)
      continue
    }

    // 标题 (#)
    if (line.startsWith('#')) {
      while (listStack.length) html.push(`</${listStack.pop().tag}>`)
      const level = line.match(/^#+/)[0].length
      const content = line.slice(level).trim()
      html.push(`<h${level}>${inlineParse(content)}</h${level}>`)
      i++
      continue
    }

    // 引用块 (> )
    if (line.startsWith('> ')) {
      while (listStack.length) html.push(`</${listStack.pop().tag}>`)
      const blockquoteLines = []
      while (i < lines.length && lines[i].startsWith('> ')) {
        blockquoteLines.push(lines[i].slice(2).trim())
        i++
      }
      html.push(
        `<blockquote>${inlineParse(blockquoteLines.join(' '))}</blockquote>`,
      )
      continue
    }

    // 水平线 (--- 或 ***)
    if (/^(-{3,}|\*{3,})$/.test(line.trim())) {
      while (listStack.length) html.push(`</${listStack.pop().tag}>`)
      html.push('<hr />')
      i++
      continue
    }

    // 列表（无序 / 有序，支持缩进嵌套）
    // listStack 中每项为 { tag: 'ul'|'ol', indent: number }
    const listMatch = line.match(/^(\s*)([-*+]|\d+\.)\s+(.+)/)
    if (listMatch) {
      const indent = listMatch[1].length
      const type = /^\d+\./.test(listMatch[2]) ? 'ol' : 'ul'
      const content = listMatch[3]

      // 关闭比当前缩进更深的嵌套列表
      while (
        listStack.length &&
        listStack[listStack.length - 1].indent > indent
      ) {
        html.push(`</${listStack.pop().tag}>`)
      }

      // 缩进加深时，开启新的子列表
      if (
        !listStack.length ||
        listStack[listStack.length - 1].indent < indent
      ) {
        html.push(`<${type}>`)
        listStack.push({ tag: type, indent })
      }

      html.push(`<li>${inlineParse(content)}</li>`)

      // 下一行不再是列表项时，关闭所有列表
      if (!lines[i + 1]?.match(/^\s*([-*+]|\d+\.)\s/)) {
        while (listStack.length) html.push(`</${listStack.pop().tag}>`)
      }

      i++
      continue
    }

    // 普通段落
    const paragraph = []
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].match(/^(#{1,6}\s|> |```|\s*([-*+]|\d+\.)\s|-{3,}|\*{3,})/)
    ) {
      paragraph.push(lines[i].trim())
      i++
    }
    if (paragraph.length) {
      html.push(`<p>${inlineParse(paragraph.join(' '))}</p>`)
    } else {
      i++
    }
  }

  while (listStack.length) html.push(`</${listStack.pop().tag}>`)
  return html.filter(Boolean).join('\n')
}

/** 行内元素解析：行内代码、图片、链接、粗体、斜体 */
function inlineParse(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>')
    .replace(/(\*|_)(.*?)\1/g, '<em>$2</em>')
}

// 读取 1.md，解析后写入 1.html
const md = readFileSync(new URL('./1.md', import.meta.url), 'utf-8')
const body = parseMarkdown(md)
const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>Markdown 解析结果</title>
  <style>
    body { font-family: sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; line-height: 1.6; }
    pre { background: #f5f5f5; padding: 12px; border-radius: 4px; overflow-x: auto; }
    code { background: #f5f5f5; padding: 2px 4px; border-radius: 3px; }
    pre code { background: none; padding: 0; }
    blockquote { border-left: 4px solid #ddd; margin: 0; padding-left: 16px; color: #666; }
    img { max-width: 100%; }
    hr { border: none; border-top: 1px solid #ddd; }
  </style>
</head>
<body>
${body}
</body>
</html>`
writeFileSync(new URL('./1.html', import.meta.url), html, 'utf-8')
console.log('✔ 1.html generated')
