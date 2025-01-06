import { China, Russia, Spain, USA } from './components/Icons'
import { FaRocket, FaPalette, FaBoltLightning } from 'react-icons/fa6'

export const PROJECT_NAME = 'AURORA'

export const featuresCards = [
  {
    title: 'Professional Templates',
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
  {
    label: 'EN',
    icon: USA
  },
  {
    label: 'CN',
    icon: China
  },
  {
    label: 'RU',
    icon: Russia
  },
  {
    label: 'SP',
    icon: Spain
  }
]

export const FAQs = [
  {
    question: `What is ${PROJECT_NAME}?`,
    answer: `${PROJECT_NAME} is a meme token website generator that helps you create professional websites in minutes. Simply choose a template, customize it with your token details, and get your website files instantly.`
  },
  {
    question: `How does ${PROJECT_NAME} work?`,
    answer:
      "Choose from our templates, input your token details and content, and we'll generate your website. You'll get a zip file with all the necessary files ready to host."
  },
  {
    question: 'Do we host your website?',
    answer: 'Yes.'
  },
  {
    question: "What's included in the templates?",
    answer:
      'Our templates include everything a memecoin needs: Token info display, buy buttons, tokenomics section, roadmap, team profiles, FAQ, and social links. All templates are mobile-friendly and optimized for performance.'
  },
  {
    question: 'How much does it cost?',
    answer:
      'We have two pricing options: Standard generation at 0.05 SOL per website, or Premium at 0.25 SOL which gives you access to all premium features and templates. Choose the plan that best fits your needs.'
  }
]
