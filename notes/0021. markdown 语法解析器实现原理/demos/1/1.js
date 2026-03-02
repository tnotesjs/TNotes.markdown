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

    // 空行：闭合当前列表
    if (line.trim() === '') {
      while (listStack.length) html.push(`</${listStack.pop()}>`)
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
      const level = line.match(/^#+/)[0].length
      const content = line.slice(level).trim()
      html.push(`<h${level}>${inlineParse(content)}</h${level}>`)
      i++
      continue
    }

    // 引用块 (> )
    if (line.startsWith('> ')) {
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
      html.push('<hr />')
      i++
      continue
    }

    // 无序列表 (- 或 * 或 + 开头)
    if (line.match(/^[\*\-\+]\s/)) {
      const indent = line.search(/\S/)
      const itemContent = line.replace(/^[\*\-\+]\s/, '').trim()
      while (listStack.length && listStack.length > indent / 2)
        html.push(`</${listStack.pop()}>`)
      if (!listStack.length || listStack[listStack.length - 1] !== 'ul') {
        html.push('<ul>')
        listStack.push('ul')
      }
      html.push(`<li>${inlineParse(itemContent)}</li>`)
      if (i + 1 >= lines.length || !lines[i + 1].match(/^[\s]*[\*\-\+]\s/)) {
        while (listStack.length) html.push(`</${listStack.pop()}>`)
      }
      i++
      continue
    }

    // 有序列表 (数字. 开头)
    if (line.match(/^\d+\.\s/)) {
      const indent = line.search(/\S/)
      const itemContent = line.replace(/^\d+\.\s/, '').trim()
      while (listStack.length && listStack.length > indent / 2)
        html.push(`</${listStack.pop()}>`)
      if (!listStack.length || listStack[listStack.length - 1] !== 'ol') {
        html.push('<ol>')
        listStack.push('ol')
      }
      html.push(`<li>${inlineParse(itemContent)}</li>`)
      if (i + 1 >= lines.length || !lines[i + 1].match(/^\d+\.\s/)) {
        while (listStack.length) html.push(`</${listStack.pop()}>`)
      }
      i++
      continue
    }

    // 普通段落
    const paragraph = []
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].match(
        /^(#{1,6}\s|>\s|```|\s*[\*\-\+]\s|\s*\d+\.\s|-{3,}|\*{3,})/,
      )
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

  while (listStack.length) html.push(`</${listStack.pop()}>`)
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
const dir = import.meta.dirname
const md = readFileSync(new URL('./1.md', import.meta.url), 'utf-8')
const html = parseMarkdown(md)
writeFileSync(new URL('./1.html', import.meta.url), html, 'utf-8')
console.log('✔ 1.html generated')
