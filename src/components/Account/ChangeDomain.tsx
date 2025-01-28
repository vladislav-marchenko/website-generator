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
import { useToast } from '@/hooks/use-toast'
import { updateWebsite } from '@/services/api'
import { useWallet } from '@solana/wallet-adapter-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC, FormEvent, useState } from 'react'

export const ChangeDomain: FC<{ name: string }> = ({ name }) => {
  const [websiteName, setWebsiteName] = useState(name)

  const { publicKey } = useWallet()
  const { toast } = useToast()

  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: updateWebsite,
    onSuccess: () => {
      toast({
        title: 'Your domain was successfully changed!',
        variant: 'successful'
      })
      queryClient.invalidateQueries({ queryKey: ['userWebsites'] })
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      })
    }
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    mutate({
      currentName: name,
      newName: websiteName,
      publicKey: publicKey?.toString() ?? ''
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Change domain</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change domain</DialogTitle>
          <DialogDescription>
            Enter a valid subdomain (1-63 characters) using letters, numbers,
            and hyphens. No spaces or special characters allowed.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <WebsiteNameInput value={websiteName} setValue={setWebsiteName} />
          <DialogFooter>
            <Button type='submit'>Change</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
