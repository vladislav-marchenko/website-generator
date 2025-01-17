import { Button } from './Button'
import { Text } from '@/components/TemplateItems/Text'
import { cn } from '@/lib/utils'
import { TemplateData, UpdateField } from '@/types'
import { CircleCheckBig, Copy } from 'lucide-react'
import { FC, MouseEvent, useState } from 'react'

interface ContractAddressButtonProps {
  data: TemplateData
  updateField?: UpdateField
  className?: string
}

export const ContractAddressButton: FC<ContractAddressButtonProps> = ({
  data,
  updateField,
  className
}) => {
  const [isCopied, setIsCopied] = useState(false)

  const copy = (e: MouseEvent<HTMLElement>) => {
    const text = (e.target as HTMLElement).innerText
    navigator.clipboard.writeText(text)

    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 1000)
  }

  return (
    <Button
      onClick={copy}
      className={cn(
        'flex items-center justify-center gap-4 hover:scale-[0.97] hover:opacity-80',
        className
      )}
    >
      <Text
        data={data}
        updateField={updateField}
        fieldName='contractAddress'
        placeholder='Contract address'
      />
      {isCopied && (
        <CircleCheckBig size={28} className='pointer-events-none text-black' />
      )}
      {!isCopied && (
        <Copy size={28} className='pointer-events-none text-black' />
      )}
    </Button>
  )
}
