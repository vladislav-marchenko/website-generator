import { FancyButton } from '../FancyButton'
import { WebsiteNameInput } from '../WebsiteNameInput'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { TemplateContext } from '@/contexts/TemplateContext'
import { useToast } from '@/hooks/use-toast'
import { createWebsite } from '@/services/api'
import { TemplateFormValues } from '@/types/forms'
import { useWallet } from '@solana/wallet-adapter-react'
import { useMutation } from '@tanstack/react-query'
import { useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const CreateButton = () => {
  const { publicKey } = useWallet()
  const { data } = useContext(TemplateContext) as TemplateFormValues
  const { toast } = useToast()

  const [searchParams] = useSearchParams()
  const [name, setName] = useState(searchParams.get('name') ?? '')
  const template = searchParams.get('template') ?? ''

  const { protocol, host } = window.location

  const { mutate } = useMutation({
    mutationFn: createWebsite,
    onSuccess: () => {
      // window.open(`${protocol}//${name}.${host}`, '_blank')?.focus()
      window.location.href = `${protocol}//${name}.${host}`
      toast({
        title: 'Your website was successfully created!',
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
    <Dialog>
      <DialogTrigger asChild>
        <FancyButton className='mb-4 w-full max-w-64 self-center'>
          Create Web
        </FancyButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter your domain</DialogTitle>
          <DialogDescription>
            Would you like to change your website name? This will be used as
            your subdomain, making it easier for visitors to remember.
          </DialogDescription>
        </DialogHeader>
        <WebsiteNameInput value={name} setValue={setName} />
        <DialogFooter>
          <Button
            onClick={() =>
              mutate({
                name,
                templateName: template,
                templateData: data,
                publicKey: publicKey?.toString() ?? ''
              })
            }
          >
            Confirm and Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
