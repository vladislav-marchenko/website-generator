import { Classic } from './Classic'
import { DefaultValues, Templates } from '@/types'
import { EditIcon, TextIcon, XIcon } from 'lucide-react'

const defaultValues: DefaultValues = {
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
  }
}

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
                editor: true
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
                editor: true
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
                placeholder: 'https://www.tiktok.com'
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
                name: 'projectName',
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
                type: 'text',
                name: 'logo',
                label: 'Logo',
                placeholder: 'https://via.placeholder.com/150'
              },
              {
                type: 'text',
                name: 'background',
                label: 'Background',
                placeholder: 'https://via.placeholder.com/150'
              }
            ]
          }
        ]
      }
    ],
    element: Classic,
    data: {
      projectName: {
        ...defaultValues.text,
        animation: 'in'
      },
      tiktok: {
        url: '',
        icon: XIcon
      },
      instagram: {
        url: '',
        icon: XIcon
      },
      discord: {
        url: '',
        icon: XIcon
      },
      telegram: {
        url: '',
        icon: XIcon
      },
      twitter: {
        url: '',
        icon: XIcon
      },
      dexscreener: {
        url: '',
        icon: XIcon
      },
      pumpfun: {
        url: '',
        icon: XIcon
      },
      coingecko: {
        url: '',
        icon: XIcon
      },
      coinmarketcap: {
        url: '',
        icon: XIcon
      },
      birdeye: {
        url: '',
        icon: XIcon
      },
      dextools: {
        url: '',
        icon: XIcon
      },
      whitepaper: {
        url: '',
        icon: XIcon
      },
      logo: {
        ...defaultValues.image,
        src: 'https://static.vecteezy.com/system/resources/thumbnails/049/547/613/small_2x/stunning-high-resolution-nature-and-landscape-backgrounds-breathtaking-scenery-in-hd-photo.jpg',
        slideshowItems: [
          'https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg',
          'https://media1.giphy.com/media/3o6vXTpomeZEyxufGU/giphy.gif?cid=6c09b952jwjp5rlwdwzfrv2q5kq5k1u2bkykbc9jq1ahpuv8&ep=v1_gifs_search&rid=giphy.gif&ct=g'
        ]
      },
      background: defaultValues.image
    }
  }
} as const
