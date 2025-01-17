import { Classic } from './Classic/Classic'
import { Simple } from './Simple/Simple'
import type {
  DefaultValues,
  Template,
  TemplateData,
  TemplateName,
  Templates
} from '@/types'
import { cloneDeep, merge, set } from 'lodash'
import { EditIcon, TextIcon } from 'lucide-react'

export const templates = {
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
                  fontSizeValue: 7.5,
                  sizeUnit: 'rem',
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
              },
              {
                type: 'text',
                name: 'buyNowText',
                label: 'Buy Now',
                editor: true,
                defaultValues: {
                  value: 'Buy Now',
                  color: '#000',
                  align: 'center',
                  styles: ['bold']
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
                placeholder: 'URL',
                editor: true,
                defaultValues: {
                  width: 90,
                  height: 90,
                  sizeUnit: 'px'
                }
              },
              {
                type: 'image',
                name: 'background',
                label: 'Background',
                placeholder: 'URL',
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
                placeholder: 'URL',
                editor: true,
                defaultValues: {
                  width: 340,
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
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Instagram',
                name: 'instagram',
                placeholder: 'https://www.instagram.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Discord',
                name: 'discord',
                placeholder: 'https://discord.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Telegram',
                name: 'telegram',
                placeholder: 'https://t.me',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Twitter',
                name: 'twitter',
                placeholder: 'https://twitter.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Dexscreener',
                name: 'dexscreener',
                placeholder: 'https://dexscreener.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Pump.fun',
                name: 'pumpfun',
                placeholder: 'https://pump.fun',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Coin Gecko',
                name: 'coingecko',
                placeholder: 'https://www.coingecko.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Coin Market Cap',
                name: 'coinmarketcap',
                placeholder: 'https://coinmarketcap.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Birdeye',
                name: 'birdeye',
                placeholder: 'https://www.birdeye.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Dextools',
                name: 'dextools',
                placeholder: 'https://www.dextools.io',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Whitepaper',
                name: 'whitepaper',
                placeholder: 'https://example.com/whitepaper',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Author Telegram',
                name: 'authorTelegram',
                placeholder: 'https://t.me',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Author Twitter',
                name: 'authorTwitter',
                placeholder: 'https://twitter.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Author Discord',
                name: 'authorDiscord',
                placeholder: 'https://discord.com',
                defaultValues: { iconName: 'tiktok' }
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
          },
          {
            label: 'How to Buy',
            fields: [
              {
                type: 'text',
                name: 'firstStep',
                label: 'Step 1',
                defaultValues: {
                  value:
                    'Mobile Users: Download the Phantom app for free. Desktop Users: Download the Phantom chrome extension.',
                  color: '#000',
                  fontSizeValue: 20,
                  align: 'center'
                },
                editor: true
              },
              {
                type: 'text',
                name: 'secondStep',
                label: 'Step 2',
                defaultValues: {
                  value:
                    'Fund your wallet with Solana, you can buy Solana from an exchange or cross chain swap and send it to your wallet.',
                  color: '#000',
                  fontSizeValue: 20,
                  align: 'center'
                },
                editor: true
              },
              {
                type: 'text',
                name: 'thirdStep',
                label: 'Step 3',
                defaultValues: {
                  value:
                    'Go to Raydium or Jupiter and swap your Solana for $Ticker.',
                  color: '#000',
                  fontSizeValue: 20,
                  align: 'center'
                },
                editor: true
              }
            ]
          },
          {
            label: 'Buttons',
            fields: [
              {
                type: 'link',
                name: 'buyNowLink',
                label: 'Buy Now URL',
                placeholder: 'URL'
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
  },
  simple: {
    label: 'Simple',
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
                name: 'ticker',
                label: 'Ticker',
                editor: true,
                defaultValues: {
                  fontSizeValue: 6,
                  sizeUnit: 'rem',
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
              }
            ]
          },
          {
            label: 'Images',
            fields: [
              {
                type: 'image',
                name: 'background',
                label: 'Background',
                placeholder: 'URL',
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
                placeholder: 'URL',
                editor: true,
                defaultValues: {
                  width: 420,
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
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Instagram',
                name: 'instagram',
                placeholder: 'https://www.instagram.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Discord',
                name: 'discord',
                placeholder: 'https://discord.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Telegram',
                name: 'telegram',
                placeholder: 'https://t.me',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Twitter',
                name: 'twitter',
                placeholder: 'https://twitter.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Dexscreener',
                name: 'dexscreener',
                placeholder: 'https://dexscreener.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Pump.fun',
                name: 'pumpfun',
                placeholder: 'https://pump.fun',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Coin Gecko',
                name: 'coingecko',
                placeholder: 'https://www.coingecko.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Coin Market Cap',
                name: 'coinmarketcap',
                placeholder: 'https://coinmarketcap.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Birdeye',
                name: 'birdeye',
                placeholder: 'https://www.birdeye.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Dextools',
                name: 'dextools',
                placeholder: 'https://www.dextools.io',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Whitepaper',
                name: 'whitepaper',
                placeholder: 'https://example.com/whitepaper',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Author Telegram',
                name: 'authorTelegram',
                placeholder: 'https://t.me',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Author Twitter',
                name: 'authorTwitter',
                placeholder: 'https://twitter.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Author Discord',
                name: 'authorDiscord',
                placeholder: 'https://discord.com',
                defaultValues: { iconName: 'tiktok' }
              }
            ]
          }
        ]
      }
    ],
    element: Simple
  }
} as const satisfies Templates

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
    rotation: 0,
    animation: null,
    animationDuration: 1000
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
    slideshowInterval: 2000,
    animation: null,
    animationDuration: 1000
  },
  link: {
    url: '',
    iconName: 'default',
    size: 70,
    rotation: 0,
    animation: null,
    animationDuration: 1000
  },
  toggle: {
    value: true
  }
}

export const getTemplateFields = (templateName: TemplateName): TemplateData => {
  const result = { links: {} }
  const currentTemplate = templates[templateName] as Template

  currentTemplate.categories.forEach(({ subCategories }) => {
    subCategories.forEach(({ fields }) => {
      fields.forEach(({ defaultValues, ...fieldData }) => {
        const { type, name } = fieldData
        if (result.hasOwnProperty(name)) return

        const data = merge(
          fieldData,
          cloneDeep(defaultFieldValues[type]),
          defaultValues
        )

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

const getTemplatesData = () => {
  const result: { [key: string]: TemplateData } = {}

  const templateNames = Object.keys(templates) as TemplateName[]
  templateNames.forEach((name: TemplateName) => {
    result[name] = getTemplateFields(name)
  })

  return result
}

export const templatesData = getTemplatesData()
