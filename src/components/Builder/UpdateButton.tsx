import { FancyButton } from '../FancyButton'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useToast } from '@/hooks/use-toast'
import { updateWebsite } from '@/services/api'
import { TemplateFormValues } from '@/types/forms'
import { useWallet } from '@solana/wallet-adapter-react'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { useSearchParams } from 'react-router-dom'

export const UpdateButton = () => {
  const { publicKey } = useWallet()
  const { data } = useContext(TemplateContext) as TemplateFormValues
  const { toast } = useToast()

  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? ''
  const { protocol, host } = window.location

  const { mutate } = useMutation({
    mutationFn: updateWebsite,
    onSuccess: () => {
      // window.open(`${protocol}//${name}.${host}`, '_blank')?.focus()
      window.location.href = `${protocol}//${name}.${host}`
      toast({
        title: 'Your website was successfully updated!',
        variant: 'successful'
      })
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      })
    }
  })

  return (
    <FancyButton
      onClick={() => {
        mutate({
          currentName: name,
          data,
          publicKey: publicKey?.toString() ?? ''
        })
      }}
      className='mb-4 w-full max-w-64 self-center'
    >
      Save changes
    </FancyButton>
  )
}
