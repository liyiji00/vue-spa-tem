import dayjs from "dayjs"

export function formatDate(d: string | Date) {
  const date = dayjs(d)
  return date.format("YYYY/MM/DD")
}

/**
 * 仅在dev环境下log
 */
export function devLog(...arg: any[]) {
  if (import.meta.env.DEV) {
    console.log(...arg)
  }
}

/**
 * 写入粘贴板文字
 */
export function writeClipboardText(text: string) {
  if (navigator?.clipboard?.writeText) {
    return navigator.clipboard.writeText(text)
  } else {
    console.error(`'navigator.clipboard.writeText' not found`)
  }
}
