import { Classic } from './Classic'
import { z } from 'zod'

export const templates = {
  classic: {
    label: 'Classic',
    price: 0.05,
    categories: [
      {
        label: 'Menu',
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
    ],
    badge: 'new',
    element: Classic
  },
  simple: {
    label: 'Simple',
    categories: [
      {
        label: 'Custom',
        fields: [
          {
            type: 'text',
            name: 'custom',
            label: 'Custom',
            placeholder: 'Some custom field'
          },
          {
            type: 'text',
            name: 'projectName',
            label: 'Project name',
            placeholder: 'Some custom field'
          }
        ]
      }
    ],
    element: Classic
  }
}
