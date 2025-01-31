import { Label } from './ui/label'
import { getWebsite } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { debounce } from 'lodash'
import { ChangeEvent, Dispatch, FC, SetStateAction, useCallback } from 'react'

interface WebsiteNameInputProps {
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

export const WebsiteNameInput: FC<WebsiteNameInputProps> = ({
  value,
  setValue
}) => {
  const { isSuccess: isNameTaken, refetch } = useQuery({
    queryKey: ['websiteName'],
    queryFn: () => {
      return getWebsite(value)
    },
    enabled: !!value,
    retry: false
  })

  const verifyName = useCallback(
    debounce(() => refetch(), 300),
    []
  )

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const subdomainPattern = /^[A-Za-z0-9-]{0,20}$/
    const isValid = subdomainPattern.test(e.target.value)

    if (!isValid) return

    setValue(e.target.value)
    verifyName()
  }

  return (
    <div className='relative'>
      <Label htmlFor='domain'>Domain</Label>
      <div className='pb-6'>
        <div className='flex items-center rounded-full border-2 border-neutral-300 bg-neutral-200 dark:border-neutral-500 dark:bg-neutral-600'>
          <input
            id='domain'
            value={value}
            onChange={onNameChange}
            className='flex-auto bg-transparent py-2 pl-4'
            placeholder='yoursite'
          />
          <span className='pr-4'>.{window.location.host}</span>
        </div>
      </div>
      {!!value.length && isNameTaken && (
        <span className='absolute bottom-0 text-red-500'>
          This name is already taken
        </span>
      )}
    </div>
  )
}
