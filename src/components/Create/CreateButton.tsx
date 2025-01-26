import { FancyButton } from '../FancyButton'
import { TemplateContext } from '@/contexts/TemplateContext'
import { createWebsite } from '@/services/api'
import { TemplateFormValues } from '@/types/forms'
import { useWallet } from '@solana/wallet-adapter-react'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { useSearchParams } from 'react-router-dom'

export const CreateButton = () => {
  const { publicKey } = useWallet()
  const { data } = useContext(TemplateContext) as TemplateFormValues

  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? ''
  const template = searchParams.get('template') ?? ''

  const { protocol, host } = window.location

  const { mutate } = useMutation({
    mutationFn: createWebsite,
    onSuccess: () => {
      window.location.href = `${protocol}//${name}.${host}`
    }
  })

  return (
    <FancyButton
      onClick={() => {
        mutate({
          name,
          templateName: template,
          templateData: data,
          publicKey: publicKey?.toString() ?? ''
        })
      }}
      className='mb-4 w-full max-w-64 self-center'
    >
      Create Web
    </FancyButton>
  )
}
