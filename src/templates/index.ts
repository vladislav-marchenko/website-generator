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
    badge: 'new',
    element: Classic,
    data: {
      projectName: {
        value: '',
        fontFamily: 'Inter',
        fontSize: { value: 40, unit: 'px' },
        color: '#ffffff',
        align: 'center',
        styles: [],
        strokeColor: '#ff0000',
        strokeWidth: 0,
        backgroundColor: 'transparent',
        rotation: 0
      },
      twitter: {
        value: '',
        fontFamily: 'Inter',
        fontSize: { value: 40, unit: 'px' },
        color: '#ffffff',
        align: 'center',
        styles: [],
        strokeColor: '#ff0000',
        strokeWidth: 0,
        backgroundColor: 'transparent',
        rotation: 0,
        animations: {
          slideIn: 'bottom'
        }
      },
      telegram: {
        value: '',
        fontFamily: 'Inter',
        fontSize: { value: 40, unit: 'px' },
        color: '#ffffff',
        align: 'center',
        styles: [],
        strokeColor: '#ff0000',
        strokeWidth: 0,
        backgroundColor: 'transparent',
        rotation: 0
      },
      logo: {
        value: '',
        fontFamily: 'Inter',
        fontSize: { value: 40, unit: 'px' },
        color: '#ffffff',
        align: 'center',
        styles: [],
        strokeColor: '#ff0000',
        strokeWidth: 0,
        backgroundColor: 'transparent',
        rotation: 0
      },
      background: {
        value: '',
        fontFamily: 'Inter',
        fontSize: { value: 40, unit: 'px' },
        color: '#ffffff',
        align: 'center',
        styles: [],
        strokeColor: '#ff0000',
        strokeWidth: 0,
        backgroundColor: 'transparent',
        rotation: 0
      }
    }
  }
} as const
