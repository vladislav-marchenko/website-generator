import { Button } from '../Button'
import { Description } from '../Description'
import { Card } from './Card'
import { templates } from '@/templates'
import { Template, TemplateName } from '@/types/templates'
import { Check } from 'lucide-react'
import { FC } from 'react'
import { useSearchParams } from 'react-router-dom'

export const TemplateCard: FC<{ currentIndex: number }> = ({
  currentIndex
}) => {
  const templateName = Object.keys(templates)[currentIndex] as TemplateName
  const { label, shortDescription, features } = templates[
    templateName
  ] as Template

  const [searchParams] = useSearchParams()
  const queryString = `name=${searchParams.get('name')}&template=${templateName}`

  return (
    <Card>
      <div className='group h-48 overflow-hidden rounded-md'>
        <img
          className='object-cover object-top group-hover:animate-scroll'
          src='https://www.buidl.co.in/_next/image?url=%2Ftemplates%2Fmodern.png&w=1920&q=75'
        />
      </div>
      <h4>{label}</h4>
      <Description>{shortDescription}</Description>
      <ul className='flex flex-col gap-1 pb-4'>
        {features.map((feature) => (
          <li key={feature} className='flex items-center gap-2'>
            <Check size={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button to={`/create?${queryString}`}>Select</Button>
    </Card>
  )
}
