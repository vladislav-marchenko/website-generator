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
                type: 'text',
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
      logo: defaultValues.text,
      background: defaultValues.text
    }
  }
} as const
