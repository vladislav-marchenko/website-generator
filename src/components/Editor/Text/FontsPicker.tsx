import { Loading } from '@/components/Loading'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { loadFont } from '@/lib/utils'
import { getFonts } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { Check, ChevronsUpDownIcon } from 'lucide-react'
import { FC, useState } from 'react'

interface FontsPickerProps {
  onChange?: (value: string) => void
}

export const FontsPicker: FC<FontsPickerProps> = ({ onChange }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['fonts'],
    queryFn: getFonts
  })

  const [open, setOpen] = useState(false)
  const [currentFontFamily, setCurrentFontFamily] = useState('')

  const selectFont = (value: string) => {
    setCurrentFontFamily(value)
    setOpen(false)
    onChange && onChange(value)

    loadFont(value)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between'
        >
          {currentFontFamily || 'Select font'}
          <ChevronsUpDownIcon className='opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder='Search font...' className='h-9' />
          <CommandList>
            {isLoading && (
              <Loading className='flex h-full items-center justify-center py-4' />
            )}
            {isError && (
              <div className='py-4 text-center text-sm'>
                Error loading fonts
              </div>
            )}
            {!(isLoading || isError) && (
              <CommandEmpty>No font found.</CommandEmpty>
            )}
            <CommandGroup>
              {!isLoading &&
                data?.items?.map(({ family }) => (
                  <CommandItem
                    key={family}
                    value={family}
                    onSelect={selectFont}
                  >
                    {family}
                    {family === currentFontFamily && (
                      <Check className='ml-auto' />
                    )}
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
