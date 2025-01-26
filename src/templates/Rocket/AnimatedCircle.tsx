import { Text } from '@/components/TemplateItems/Text'
import { useTemplateData } from '@/hooks/useTemplateData'
import { TextData } from '@/types/templates'
import { FC } from 'react'

export const AnimateCircle: FC<{ color: string }> = ({ color }) => {
  const { data } = useTemplateData()
  if (!data) return

  const projectName = data?.projectName as TextData
  const maxFontSize = projectName?.fontSizeValue
  const dynamicFontSize = 600 / projectName?.value.length
  const fontSize = dynamicFontSize > maxFontSize ? maxFontSize : dynamicFontSize

  return (
    <div className='relative'>
      <div
        className='flex aspect-square h-[400px] w-[400px] animate-spring items-center justify-center rounded-full bg-white p-12 text-center'
        style={{
          filter: `drop-shadow(0 0 20px color-mix(in srgb, ${color} 30%, transparent))`
        }}
      >
        <Text
          fieldName='projectName'
          className={{ text: 'uppercase' }}
          style={{ fontSize: `${fontSize}px` }}
        />
        <div className='absolute left-1/2 top-1/2 -z-10 flex h-[120%] w-[180%] -translate-x-1/2 -translate-y-1/2'>
          <div className='h-full w-full animate-[spin_10s_linear_infinite] rounded-[50%] border-2 border-neutral-600'>
            <div
              className='absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full'
              style={{ background: color }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
