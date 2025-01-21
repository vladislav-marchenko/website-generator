import { Text } from '@/components/TemplateItems/Text'
import { useCopy } from '@/hooks/useCopy'
import { UpdateField } from '@/types'
import { TemplateData } from '@/types/templates'
import { FC } from 'react'

interface ImpressiveCopyButtonProps {
  data: TemplateData
  updateField?: UpdateField
}

export const ImpressiveCopyButton: FC<ImpressiveCopyButtonProps> = ({
  data,
  updateField
}) => {
  const { isCopied, copy } = useCopy()

  return (
    <div
      onClick={copy}
      className='button flex items-center justify-between gap-4 rounded-2xl'
    >
      <Text
        data={data}
        updateField={updateField}
        fieldName='contractAddress'
        placeholder='Contract Address'
      />
      <button className='impressive-block rounded-xl bg-orange-500 px-4 py-2 font-dino text-xl font-bold uppercase'>
        {isCopied ? 'copied' : 'copy'}
      </button>
    </div>
  )
}
