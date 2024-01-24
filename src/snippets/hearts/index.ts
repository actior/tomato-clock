import snippets from './snippets.html?raw'
import heartsIcon from './hearts.svg'

/** will replace anchorEle with the hearts icon */
export function setupHearts(anchorEle: HTMLElement) {
  const parser = document.createElement('div')
  parser.innerHTML = snippets.replace('{heartIcon}', heartsIcon)
  anchorEle.replaceWith(...parser.childNodes)
}
