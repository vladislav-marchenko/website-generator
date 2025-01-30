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
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { SystemProgram, Transaction } from '@solana/web3.js'
import { useMutation } from '@tanstack/react-query'
import { FormEvent, useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const CreateButton = () => {
  const [searchParams] = useSearchParams()
  const [name, setName] = useState(searchParams.get('name') ?? '')
  const template = searchParams.get('template') ?? ''

  const { publicKey, sendTransaction } = useWallet()
  const { connection } = useConnection()

  const { data } = useContext(TemplateContext) as TemplateFormValues
  const { toast } = useToast()

  const { mutate } = useMutation({
    mutationFn: createWebsite,
    onSuccess: () => {
      const { protocol, host } = window.location
      // window.location.href = `${protocol}//${name}.${host}`

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

  // https://github.com/anza-xyz/wallet-adapter/blob/master/APP.md
  const send = async (amount: number) => {
    if (!publicKey) return

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: publicKey,
        lamports: amount * 1000000000 // Convert SOL to lamports
      })
    )

    const {
      context: { slot: minContextSlot },
      value: { blockhash, lastValidBlockHeight }
    } = await connection.getLatestBlockhashAndContext()

    const signature = await sendTransaction(transaction, connection, {
      minContextSlot
    })

    await connection.confirmTransaction({
      blockhash,
      lastValidBlockHeight,
      signature
    })

    return signature
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const signature = await send(0.45)
    mutate({
      name,
      templateName: template,
      templateData: data,
      publicKey: publicKey?.toString() ?? '',
      signature
    })
  }

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
            Enter a valid subdomain (1-63 characters) using letters, numbers,
            and hyphens. No spaces or special characters allowed.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <WebsiteNameInput value={name} setValue={setName} />
          <DialogFooter>
            <Button type='submit'>Confirm and Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
