import { Classic } from './Classic'
import type {
  DefaultValues,
  TemplateData,
  TemplateNames,
  Templates
} from '@/types'
import { EditIcon, TextIcon, XIcon } from 'lucide-react'

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
                name: 'projectName',
                label: 'Project name',
                placeholder: 'Name',
                editor: true,
                defaultValues: { fontSizeValue: 40, align: 'center' }
              }
            ]
          },
          {
            label: 'Images',
            fields: [
              {
                type: 'image',
                name: 'logo',
                label: 'Logo',
                placeholder: 'https://via.placeholder.com/150',
                editor: true,
                defaultValues: {
                  url: 'https://via.placeholder.com/150',
                  slideshowItems: [
                    'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
                    'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png'
                  ]
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
                placeholder: 'https://t.me'
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
    fontSizeUnit: 'px',
    color: '#ffffff',
    styles: [],
    strokeColor: '#ff0000',
    strokeWidth: 0,
    backgroundColor: 'transparent',
    rotation: 0
  },
  image: {
    src: '',
    slideshowItems: [], // First element of slide show is regular image src
    width: 300,
    height: 'auto',
    rotation: 0,
    opacity: 100,
    borderColor: '#ff0000',
    borderWidth: 0,
    slideshowInterval: 2000
  },
  link: {
    url: '',
    icon: XIcon,
    rotation: 0
  }
}

export const getTemplateFields = (
  selectedTemplate: TemplateNames
): TemplateData => {
  const result = {}

  templates[selectedTemplate].categories.forEach(({ subCategories }) => {
    subCategories.forEach(({ fields }) => {
      fields.forEach(({ type, name, defaultValues }) => {
        Object.assign(result, {
          [name]: {
            ...defaultFieldValues[type],
            ...defaultValues
          }
        })
      })
    })
  })

  return result as TemplateData
}

export const templatesData = {
  classic: getTemplateFields('classic')
} as const
