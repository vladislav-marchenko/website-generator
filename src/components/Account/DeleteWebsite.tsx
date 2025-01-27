import { Button } from '../ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { useToast } from '@/hooks/use-toast'
import { deleteWebsite } from '@/services/api'
import { useWallet } from '@solana/wallet-adapter-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'

export const DeleteWebsite: FC<{ name: string }> = ({ name }) => {
  const { publicKey } = useWallet()
  const { toast } = useToast()

  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: deleteWebsite,
    onSuccess: () => {
      toast({
        title: 'Your website was successfully deleted!',
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

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='destructive'>Remove</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            website data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() =>
              mutate({ name, publicKey: publicKey?.toString() ?? '' })
            }
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
