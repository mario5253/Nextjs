import { convert } from 'html-to-text'

export function extractText(
  html: string,
  length = 80,
  more = '...'
) {
  const text = convert(html, {
    selectors: [
      { selector: 'img', format: 'skip' },
    ],
  })

  return text.length > length
    ? text.slice(0, length) + more
    : text
}
