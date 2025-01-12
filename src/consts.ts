import { EditorBorder } from './components/Editor/Image/EditorBorder'
import { EditorOpacity } from './components/Editor/Image/EditorOpacity'
import { EditorSize } from './components/Editor/Image/EditorSize'
import { EditorSlideshow } from './components/Editor/Image/EditorSlideshow'
import { EditorURL as EditorImageURL } from './components/Editor/Image/EditorURL'
import { EditorUpload } from './components/Editor/Image/EditorUpload'
import { EditorURL as EditorLinkURL } from './components/Editor/Link/EditorURL'
import { EditorAlign } from './components/Editor/Text/EditorAlign'
import { EditorAnimations } from './components/Editor/Text/EditorAnimations'
import { EditorBackground } from './components/Editor/Text/EditorBackground'
import { EditorColor } from './components/Editor/Text/EditorColor'
import { EditorContent } from './components/Editor/Text/EditorContent'
import { EditorFontSize } from './components/Editor/Text/EditorFontSize'
import { EditorFontsPicker } from './components/Editor/Text/EditorFontsPicker'
import { EditorRotate } from './components/Editor/Text/EditorRotate'
import { EditorStroke } from './components/Editor/Text/EditorStroke'
import { EditorStyles } from './components/Editor/Text/EditorStyles'
import { Discord, Medium, Telegram, Twitter } from './components/Icons'
import type { Animation } from './types'
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
import { XIcon } from 'lucide-react'
import { FaRocket, FaPalette, FaBoltLightning } from 'react-icons/fa6'

export const PROJECT_NAME = 'AURORA'
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
  'dashboard',
  'templates',
  'pricing',
  'docs',
  'about',
  'blog'
]

export const footerSocialLinks = [
  {
    icon: Twitter,
    href: 'https://twitter.com/'
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

export const pricingCards = [
  {
    title: 'Standard',
    price: 0.045,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at orci sollicitudin, sagittis turpis eget, euismod massa. Aliquam sit amet dictum quam. Curabitur scelerisque lobortis tortor eu gravida. Proin blandit lacus lorem, a imperdiet elit accumsan eu. Sed euismod tempor tortor, vel facilisis metus viverra in.',
    button: {
      label: 'Buy now',
      href: '/create'
    }
  },
  {
    title: 'Premium',
    price: 0.25,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at orci sollicitudin, sagittis turpis eget, euismod massa. Aliquam sit amet dictum quam. Curabitur scelerisque lobortis tortor eu gravida. Proin blandit lacus lorem, a imperdiet elit accumsan eu. Sed euismod tempor tortor, vel facilisis metus viverra in.',
    button: {
      label: 'Subscribe',
      href: '/subscribe'
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
