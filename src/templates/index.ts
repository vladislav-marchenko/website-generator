import { Classic } from './Classic'
import { defaultValues } from '@/consts'
import { Templates } from '@/types'
import { MdEdit, MdOutlineTextFields } from 'react-icons/md'

export const templates: Templates = {
  classic: {
    label: 'Classic',
    price: 0.05,
    categories: [
      {
        name: 'Edit',
        icon: MdEdit,
        subCategories: [
          {
            label: 'Text',
            fields: [
              {
                type: 'text',
                name: 'projectName',
                label: 'Project name',
                placeholder: 'Name'
              },
              {
                type: 'text',
                name: 'twitter',
                label: 'Twitter',
                placeholder: '#'
              },
              {
                type: 'text',
                name: 'telegram',
                label: 'Telegram',
                placeholder: '#'
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
                placeholder: 'https://via.placeholder.com/150'
              }
            ]
          }
        ]
      },
      {
        name: 'Text',
        icon: MdOutlineTextFields,
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
                type: 'text',
                name: 'twitter',
                label: 'Twitter',
                placeholder: '#'
              },
              {
                type: 'text',
                name: 'telegram',
                label: 'Telegram',
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
      twitter: defaultValues.text,
      telegram: defaultValues.text,
      logo: {
        ...defaultValues.image,
        items: [
          'https://static.vecteezy.com/system/resources/thumbnails/049/547/613/small_2x/stunning-high-resolution-nature-and-landscape-backgrounds-breathtaking-scenery-in-hd-photo.jpg',
          'https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg',
          'https://media1.giphy.com/media/3o6vXTpomeZEyxufGU/giphy.gif?cid=6c09b952jwjp5rlwdwzfrv2q5kq5k1u2bkykbc9jq1ahpuv8&ep=v1_gifs_search&rid=giphy.gif&ct=g'
        ] // First element of slide show is regular image src
      },
      background: defaultValues.image
    }
  }
} as const
