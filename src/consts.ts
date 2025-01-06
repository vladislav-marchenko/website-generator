import { Discord, Medium, Telegram, Twitter } from './components/Icons'
import i18n from './i18n.ts'
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
import { FaRocket, FaPalette, FaBoltLightning } from 'react-icons/fa6'

export const PROJECT_NAME = 'AURORA'

export const featuresCards = [
  {
    title: i18n.t('features.cards.title'),
    description:
      'Choose from our collection of modern, responsive designs crafted specifically for memecoins. Each template is optimized for conversion and engagement.',
    icon: FaRocket
  },
  {
    title: 'Easy Customization',
    description:
      'Personalize your website with our intuitive editor. Change colors, content, and layout with just a few clicks - no coding required.',

    icon: FaPalette
  },
  {
    title: 'Instant Preview',
    description:
      'Preview your website changes in real-time as you make them. Perfect your design before sharing it with your community.',
    icon: FaBoltLightning
  }
]

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
