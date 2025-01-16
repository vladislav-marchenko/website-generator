import { Classic } from './Classic/Classic'
import { Telegram } from '@/components/Icons'
import type {
  DefaultValues,
  TemplateData,
  TemplateNames,
  Templates
} from '@/types'
import { cloneDeep, merge, set } from 'lodash'
import { EditIcon, TextIcon } from 'lucide-react'

export const templates: Templates = {
  classic: {
    label: 'Classic',
    price: 0.05,
    categories: [
      {
        name: 'Edit',
        icon: EditIcon,
        subCategories: [
          {
            label: 'Text',
            fields: [
              {
                type: 'text',
                name: 'logoText',
                label: 'Project name',
                editor: true,
                defaultValues: { fontSizeValue: 40 }
              },
              {
                type: 'text',
                name: 'ticker',
                label: 'Ticker',
                editor: true,
                defaultValues: {
                  fontSizeValue: 96,
                  styles: ['bold'],
                  align: 'center',
                  animation: 'heartBeat'
                }
              },
              {
                type: 'text',
                name: 'contractAddress',
                label: 'Contract Address',
                editor: true,
                defaultValues: {
                  color: '#000'
                }
              },
              {
                type: 'text',
                name: 'description',
                label: 'Description',
                editor: true,
                defaultValues: {
                  color: '#000'
                }
              }
            ]
          },
          {
            label: 'Images',
            fields: [
              {
                type: 'image',
                name: 'logoImage',
                label: 'Logo',
                editor: true,
                defaultValues: {
                  width: 70,
                  height: 70,
                  sizeUnit: 'px'
                }
              },
              {
                type: 'image',
                name: 'background',
                label: 'Background',
                editor: true,
                defaultValues: {
                  src: 'https://media.assettype.com/outlookindia/2024-04/819e7205-4a83-4447-9b76-cd38384e10f8/2.png?w=801&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0',
                  width: 100,
                  height: 100,
                  sizeUnit: '%'
                }
              },
              {
                type: 'image',
                name: 'preview',
                label: 'Image Preview',
                editor: true,
                defaultValues: {
                  width: 300,
                  sizeUnit: 'px'
                }
              }
            ]
          },
          {
            label: 'Links',
            fields: [
              {
                type: 'link',
                label: 'Tiktok',
                name: 'tiktok',
                placeholder: 'https://www.tiktok.com',
                editor: true
              },
              {
                type: 'link',
                label: 'Instagram',
                name: 'instagram',
                placeholder: 'https://www.instagram.com'
              },
              {
                type: 'link',
                label: 'Discord',
                name: 'discord',
                placeholder: 'https://discord.com'
              },
              {
                type: 'link',
                label: 'Telegram',
                name: 'telegram',
                placeholder: 'https://t.me',
                defaultValues: {
                  icon: Telegram,
                  size: 64
                }
              },
              {
                type: 'link',
                label: 'Twitter',
                name: 'twitter',
                placeholder: 'https://twitter.com'
              },
              {
                type: 'link',
                label: 'Dexscreener',
                name: 'dexscreener',
                placeholder: 'https://dexscreener.com'
              },
              {
                type: 'link',
                label: 'Pump.fun',
                name: 'pumpfun',
                placeholder: 'https://pump.fun'
              },
              {
                type: 'link',
                label: 'Coin Gecko',
                name: 'coingecko',
                placeholder: 'https://www.coingecko.com'
              },
              {
                type: 'link',
                label: 'Coin Market Cap',
                name: 'coinmarketcap',
                placeholder: 'https://coinmarketcap.com'
              },
              {
                type: 'link',
                label: 'Birdeye',
                name: 'birdeye',
                placeholder: 'https://www.birdeye.com'
              },
              {
                type: 'link',
                label: 'Dextools',
                name: 'dextools',
                placeholder: 'https://www.dextools.io'
              },
              {
                type: 'link',
                label: 'Whitepaper',
                name: 'whitepaper',
                placeholder: 'https://example.com/whitepaper'
              },
              {
                type: 'link',
                label: 'Author Telegram',
                name: 'authorTelegram',
                placeholder: 'https://t.me'
              },
              {
                type: 'link',
                label: 'Author Twitter',
                name: 'authorTwitter',
                placeholder: 'https://twitter.com'
              },
              {
                type: 'link',
                label: 'Author Discord',
                name: 'authorDiscord',
                placeholder: 'https://discord.com'
              }
            ]
          },
          {
            label: 'Enable/Disable elements',
            fields: [
              {
                type: 'toggle',
                name: 'showHowToBuy',
                label: 'How to Buy'
              }
            ]
          }
        ]
      },
      {
        name: 'Text',
        icon: TextIcon,
        subCategories: [
          {
            label: 'Something',
            fields: [
              {
                type: 'text',
                name: 'something',
                label: 'Project name',
                placeholder: 'Name'
              },
              {
                type: 'link',
                name: 'twitter',
                label: 'Twitter',
                placeholder: '#'
              }
            ]
          },
          {
            label: 'Something else',
            fields: [
              {
                type: 'image',
                name: 'something',
                label: 'Logo',
                placeholder: 'https://via.placeholder.com/150'
              },
              {
                type: 'image',
                name: 'background',
                label: 'Background',
                placeholder: 'https://via.placeholder.com/150'
              }
            ]
          }
        ]
      }
    ],
    element: Classic
  }
} as const

export const defaultFieldValues: DefaultValues = {
  text: {
    value: '',
    fontFamily: 'Inter',
    fontSizeValue: 24,
    sizeUnit: 'px',
    color: '#ffffff',
    styles: [],
    strokeColor: '#ff0000',
    strokeWidth: 0,
    backgroundColor: 'transparent',
    rotation: 0
  },
  image: {
    src: '',
    slideshowItems: [],
    width: 300,
    height: 'auto',
    sizeUnit: 'px',
    rotation: 0,
    opacity: 100,
    borderColor: '#ff0000',
    borderWidth: 0,
    slideshowInterval: 2000
  },
  link: {
    url: '',
    icon: Telegram,
    size: 64,
    rotation: 0
  },
  toggle: {
    value: true
  }
}

export const getTemplateFields = (
  selectedTemplate: TemplateNames
): TemplateData => {
  const result = { links: {} }

  templates[selectedTemplate].categories.forEach(({ subCategories }) => {
    subCategories.forEach(({ fields }) => {
      fields.forEach(({ type, name, defaultValues }) => {
        if (result.hasOwnProperty(name)) return

        const data = merge(cloneDeep(defaultFieldValues[type]), defaultValues)

        if (type === 'link') {
          set(result, `links.${name}`, data)
        } else {
          set(result, name, data)
        }
      })
    })
  })

  return result as TemplateData
}

export const templatesData = {
  classic: getTemplateFields('classic')
} as const
