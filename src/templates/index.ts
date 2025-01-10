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
                placeholder: 'Name',
                data: {
                  value: '',
                  fontFamily: 'Inter',
                  fontSize: { value: 40, unit: 'px' },
                  color: '#ffffff',
                  align: 'center',
                  styles: []
                }
              },
              {
                type: 'text',
                name: 'twitter',
                label: 'Twitter',
                placeholder: '#',
                data: {
                  value: '',
                  fontFamily: 'Inter',
                  fontSize: { value: 40, unit: 'px' },
                  color: '#ffffff',
                  align: 'center',
                  styles: []
                }
              },
              {
                type: 'text',
                name: 'telegram',
                label: 'Telegram',
                placeholder: '#',
                data: {
                  value: '',
                  fontFamily: 'Inter',
                  fontSize: { value: 40, unit: 'px' },
                  color: '#ffffff',
                  align: 'center',
                  styles: []
                }
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
                placeholder: 'https://via.placeholder.com/150',
                data: {
                  value: '',
                  fontFamily: 'Inter',
                  fontSize: { value: 40, unit: 'px' },
                  color: '#ffffff',
                  align: 'center',
                  styles: []
                }
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
                placeholder: 'Name',
                data: {
                  value: '',
                  fontFamily: 'Inter',
                  fontSize: { value: 40, unit: 'px' },
                  color: '#ffffff',
                  align: 'center',
                  styles: []
                }
              },
              {
                type: 'text',
                name: 'twitter',
                label: 'Twitter',
                placeholder: '#',
                data: {
                  value: '',
                  fontFamily: 'Inter',
                  fontSize: { value: 40, unit: 'px' },
                  color: '#ffffff',
                  align: 'center',
                  styles: []
                }
              },
              {
                type: 'text',
                name: 'telegram',
                label: 'Telegram',
                placeholder: '#',
                data: {
                  value: '',
                  fontFamily: 'Inter',
                  fontSize: { value: 40, unit: 'px' },
                  color: '#ffffff',
                  align: 'center',
                  styles: []
                }
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
                placeholder: 'https://via.placeholder.com/150',
                data: {
                  value: '',
                  fontFamily: 'Inter',
                  fontSize: { value: 40, unit: 'px' },
                  color: '#ffffff',
                  align: 'center',
                  styles: []
                }
              },
              {
                type: 'text',
                name: 'background',
                label: 'Background',
                placeholder: 'https://via.placeholder.com/150',
                data: {
                  value: '',
                  fontFamily: 'Inter',
                  fontSize: { value: 40, unit: 'px' },
                  color: '#ffffff',
                  align: 'center',
                  styles: []
                }
              }
            ]
          }
        ]
      }
    ],
    badge: 'new',
    element: Classic
  }
} as const
