import { ClassicButton } from './Button'
import { Text } from '@/components/TemplateItems/Text'
import { CircleCheckBig, Copy } from 'lucide-react'
import { MouseEvent, useState } from 'react'

export const ClassicCopyButton = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copy = (e: MouseEvent<HTMLElement>) => {
    const text = (e.target as HTMLElement).innerText
    navigator.clipboard.writeText(text)

    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 1000)
  }

  return (
    <ClassicButton
      onClick={copy}
      className='flex items-center gap-4 hover:scale-[0.97] hover:opacity-80'
    >
      <Text fieldName='contractAddress' placeholder='Contract address' />
      {isCopied && (
        <CircleCheckBig size={28} className='pointer-events-none text-black' />
      )}
      {!isCopied && (
        <Copy size={28} className='pointer-events-none text-black' />
      )}
    </ClassicButton>
  )
}
