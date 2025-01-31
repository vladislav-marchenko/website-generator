import { Editor } from './components/Editor/Editor'
import { EditorAnimations } from './components/Editor/EditorAnimations'
import { EditorRotate } from './components/Editor/EditorRotate'
import { EditorBorder } from './components/Editor/Image/EditorBorder'
import { EditorOpacity } from './components/Editor/Image/EditorOpacity'
import { EditorSize } from './components/Editor/Image/EditorSize'
import { EditorSlideshow } from './components/Editor/Image/EditorSlideshow'
import { EditorURL as EditorImageURL } from './components/Editor/Image/EditorURL'
import { EditorUpload } from './components/Editor/Image/EditorUpload'
import { EditorURL as EditorLinkURL } from './components/Editor/Link/EditorURL'
import { EditorAlign } from './components/Editor/Text/EditorAlign'
import { EditorBackground } from './components/Editor/Text/EditorBackground'
import { EditorColor } from './components/Editor/Text/EditorColor'
import { EditorContent } from './components/Editor/Text/EditorContent'
import { EditorFontSize } from './components/Editor/Text/EditorFontSize'
import { EditorFontsPicker } from './components/Editor/Text/EditorFontsPicker'
import { EditorStroke } from './components/Editor/Text/EditorStroke'
import { EditorStyles } from './components/Editor/Text/EditorStyles'
import { Discord, Link, Medium, Telegram, Twitter } from './components/Icons'
import { TemplatesSelector } from './components/TemplatesSelector'
import type { CategoriesFields, PricingCard } from './types'
import { Animation } from './types/templates'
import {
  IN,
  ID,
  BD,
  VN,
  UA,
  RU,
  PK,
  CN,
  KR,
  ES,
  DE,
  US,
  FR,
  NL,
  IT,
  GR,
  TR,
  JP,
  PT,
  SA
} from 'country-flag-icons/react/3x2'
import { Edit, GalleryVerticalEnd } from 'lucide-react'
import { FaRocket, FaPalette, FaBoltLightning } from 'react-icons/fa6'

export const PROJECT_NAME = 'AURORA'
export const BASE_URL = 'http://localhost:3000'
export const GOOGLE_API_BASE_URL =
  'https://www.googleapis.com/webfonts/v1/webfonts'

export const featuresCardIcons = {
  rocket: FaRocket,
  palette: FaPalette,
  lightning: FaBoltLightning
}

export const languages = [
  { icon: IN, label: 'हिं' }, // Индийский (Хинди)
  { icon: ID, label: 'Id' }, // Индонезийский язык
  { icon: BD, label: 'বাংলা' }, // Бангладеш (Бенгальский)
  { icon: VN, label: 'Vi' }, // Вьетнамский язык
  { icon: UA, label: 'Укр' }, // Украинский
  { icon: RU, label: 'Ру' }, // Русский
  { icon: PK, label: 'اردو' }, // Пакистанский (Урду)
  { icon: CN, label: '汉语' }, // Китай (Мандаринский)
  { icon: KR, label: '한국어' }, // Южная Корея (Корейский)
  { icon: ES, label: 'Es' }, // Испанский
  { icon: DE, label: 'De' }, // Немецкий
  { icon: US, label: 'En' }, // Английский
  { icon: FR, label: 'Fr' }, // Французский
  { icon: NL, label: 'Nl' }, // Нидерландский
  { icon: IT, label: 'It' }, // Итальянский
  { icon: GR, label: 'Ελ' }, // Греческий
  { icon: TR, label: 'Tr' }, // Турецкий
  { icon: JP, label: '日本語' }, // Японский
  { icon: PT, label: 'Pt' }, // Португальский
  { icon: SA, label: 'عربى' } // Арабский
]

export const footerNavLinks = [
  {
    value: 'dashboard',
    label: 'dashboard'
  },
  {
    value: 'templates',
    label: 'templates'
  },
  {
    value: 'pricing',
    label: 'pricing'
  },
  {
    value: 'start',
    label: 'How to Start'
  }
]

export const footerSocialLinks = [
  {
    icon: Twitter,
    href: 'https://x.com/AuroraBuildd'
  },
  {
    icon: Discord,
    href: 'https://discord.com/'
  },
  {
    icon: Telegram,
    href: 'https://t.me/'
  },
  {
    icon: Medium,
    href: 'https://medium.com/'
  }
]

export const pricingCards: PricingCard[] = [
  {
    label: 'Standard',
    price: 0.045,
    description:
      'For 0.045 Solana you can create a website using Classic and Simple template. These are simple templates, with a clear and pleasant user interface. They are easy to edit and modify.',
    features: ['Free domain', 'Editing after creation'],
    button: {
      label: 'Start create',
      href: '/create?template=classic'
    }
  },
  {
    label: 'Advanced',
    price: 0.05,
    description:
      'For 0.05 sol you can use the Impressive template. This template is full of different elements that you can edit to fit your memtoken. This template has blocks such as "How to buy", "FAQ", "Roadmap".',
    features: [
      'Free domain',
      'Editing after creation',
      'Roadmap',
      'FAQ',
      'How to buy'
    ],
    button: {
      label: 'Start Create',
      href: '/create?template=impressive'
    }
  },
  {
    label: 'Professional',
    price: 0.065,
    oldPrice: 0.1,
    description:
      'For 0.065 Sol you will get a fully professional template Rocket with animations, different blocks, buttons, full editing for your memecoin.',
    features: [
      'Free domain',
      'Editing after creation',
      'Tokenomics',
      'FAQ',
      'Animations'
    ],
    button: {
      label: 'Start Create',
      href: '/create?template=rocket'
    }
  }
]

export const animations: Animation[] = [
  {
    label: 'pulse',
    value: 'pulse'
  },
  {
    label: 'ping',
    value: 'ping'
  },
  {
    label: 'spin',
    value: 'spin'
  },
  {
    label: 'bounce',
    value: 'bounce'
  },
  {
    label: 'in',
    value: 'in'
  },
  {
    label: 'wiggle',
    value: 'wiggle'
  },
  {
    label: 'heart beat',
    value: 'heartBeat'
  },
  {
    label: 'horizontal flip',
    value: 'hflip'
  },
  {
    label: 'vertical flip',
    value: 'vflip'
  },
  {
    label: 'swing',
    value: 'swing'
  },
  {
    label: 'rubber band',
    value: 'rubberBand'
  },
  {
    label: 'flash',
    value: 'flash'
  },
  {
    label: 'head shake',
    value: 'headShake'
  },
  {
    label: 'wobble',
    value: 'wobble'
  },
  {
    label: 'jello',
    value: 'jello'
  }
]

export const fallbackFonts = [
  'Roboto',
  'Open Sans',
  'Montserrat',
  'Poppins',
  'Lato',
  'Oswald',
  'Noto Sans',
  'Raleway',
  'Nunito',
  'Rubik',
  'Ubuntu',
  'Inter',
  'Arimo',
  'Lora',
  'Libre Baskerville',
  'Merriweather',
  'Playfair Display',
  'Mulish',
  'Fira Sans',
  'Quicksand',
  'Barlow'
]

export const fontSizeUnits = ['px', 'rem', 'cm', '%']

export const categoriesFields: CategoriesFields = {
  editor: {
    label: 'Editor',
    icon: Edit,
    element: Editor
  },
  templates: {
    label: 'Templates',
    icon: GalleryVerticalEnd,
    element: TemplatesSelector,
    creatorOnly: true
  }
}

export const editorFields = {
  text: [
    {
      label: 'Content',
      element: EditorContent
    },
    {
      label: 'Font family',
      element: EditorFontsPicker
    },
    {
      label: 'Font size',
      element: EditorFontSize
    },
    {
      label: 'Color',
      element: EditorColor
    },
    {
      label: 'Background',
      element: EditorBackground
    },
    {
      label: 'Stroke',
      element: EditorStroke
    },
    {
      label: 'Align',
      element: EditorAlign
    },
    {
      label: 'Styles',
      element: EditorStyles
    },
    {
      label: 'Rotate',
      element: EditorRotate
    },
    {
      label: 'Animations',
      element: EditorAnimations
    }
  ],
  image: [
    {
      label: 'URL',
      element: EditorImageURL
    },
    {
      label: 'Upload',
      element: EditorUpload
    },
    {
      label: 'Slideshow',
      element: EditorSlideshow
    },
    {
      label: 'Size',
      element: EditorSize
    },
    {
      label: 'Rotation',
      element: EditorRotate
    },
    {
      label: 'Opacity',
      element: EditorOpacity
    },
    {
      label: 'Border',
      element: EditorBorder
    },
    {
      label: 'Animations',
      element: EditorAnimations
    }
  ],
  link: [
    {
      label: 'URL',
      element: EditorLinkURL
    },
    {
      label: 'Rotation',
      element: EditorRotate
    },
    {
      label: 'Animation',
      element: EditorAnimations
    }
  ]
}

export const socialLinkIcons = {
  telegram: Telegram,
  default: Link
}
