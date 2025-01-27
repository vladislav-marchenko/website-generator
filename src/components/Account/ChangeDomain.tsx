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
import { FC, useState } from 'react'

export const ChangeDomain: FC<{ name: string }> = ({ name }) => {
  const [websiteName, setWebsiteName] = useState(name)

  const { publicKey } = useWallet()
  const { toast } = useToast()

  const { invalidateQueries } = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: updateWebsite,
    onSuccess: () => {
      toast({ title: 'Your domain was successfully changed!' })
      invalidateQueries({ queryKey: ['userWebsites'] })
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
        <Button>Change domain</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change domain</DialogTitle>
          <DialogDescription>
            Change your domain to any available one
          </DialogDescription>
        </DialogHeader>
        <WebsiteNameInput value={websiteName} setValue={setWebsiteName} />
        <DialogFooter>
          <Button
            onClick={() =>
              mutate({
                currentName: name,
                newName: websiteName,
                publicKey: publicKey?.toString() ?? ''
              })
            }
          >
            Change
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
