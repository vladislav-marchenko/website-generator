import { MouseEvent, useState } from 'react'

export const useCopy = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copy = (e: MouseEvent<HTMLElement>) => {
    const text = (e.target as HTMLElement).innerText
    navigator.clipboard.writeText(text)

    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 1000)
  }

  return { isCopied, copy }
}
