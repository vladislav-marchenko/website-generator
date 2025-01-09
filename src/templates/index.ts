import { Classic } from './Classic'
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
                type: 'url',
                name: 'twitter',
                label: 'Twitter',
                placeholder: '#'
              },
              {
                type: 'url',
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
                name: 'background',
                label: 'Background',
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
                type: 'url',
                name: 'twitter',
                label: 'Twitter',
                placeholder: '#'
              },
              {
                type: 'url',
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
                type: 'image',
                name: 'logo',
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
    badge: 'new',
    element: Classic,
    dataFields: {
      projectName: '',
      twitter: '',
      telegram: '',
      logo: '',
      background: ''
    }
  }
} as const
