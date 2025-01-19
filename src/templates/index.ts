import { Classic } from './Classic/Classic'
import { Impressive } from './Impressive/Impressive'
import { Rocket } from './Rocket/Rocket'
import { Simple } from './Simple/Simple'
import type {
  DefaultValues,
  Template,
  TemplateData,
  TemplateName,
  Templates
} from '@/types'
import { cloneDeep, merge, set } from 'lodash'
import { EditIcon, TextIcon } from 'lucide-react'

export const templates = {
  classic: {
    label: 'Classic',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. donec lobortis tristique neque sit amet pretium. Cras non purus congue, scelerisque lacus ac, gravida sem. Aenean gravida porttitor venenatis. Pellentesque cursus, diam sit amet egestas egestas, diam justo lacinia urna, in malesuada sem erat id felis. Nam hendrerit, tortor interdum mattis tincidunt, metus purus laoreet lectus, ut elementum justo ligula sed ante.',
    shortDescription:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. donec lobortis tristique neque sit amet pretium.',
    features: [
      'Modern, clean design',
      'Smooth animations',
      'Tokenomics section',
      'Mobile responsive'
    ],
    price: 0.05,
    categories: [
      {
        name: 'Edit',
        icon: EditIcon,
        subCategories: [
          {
            label: 'Text',
            fields: [
              {
                type: 'text',
                name: 'logoText',
                label: 'Project name',
                editor: true,
                defaultValues: { fontSizeValue: 40 }
              },
              {
                type: 'text',
                name: 'ticker',
                label: 'Ticker',
                editor: true,
                defaultValues: {
                  fontSizeValue: 7.5,
                  sizeUnit: 'rem',
                  styles: ['bold'],
                  align: 'center',
                  animation: 'heartBeat'
                }
              },
              {
                type: 'text',
                name: 'contractAddress',
                label: 'Contract Address',
                editor: true,
                defaultValues: {
                  color: '#000'
                }
              },
              {
                type: 'text',
                name: 'description',
                label: 'Description',
                editor: true,
                defaultValues: {
                  color: '#000'
                }
              },
              {
                type: 'text',
                name: 'buyNowText',
                label: 'Buy Now',
                editor: true,
                defaultValues: {
                  value: 'Buy Now',
                  color: '#000',
                  align: 'center',
                  styles: ['bold']
                }
              }
            ]
          },
          {
            label: 'Images',
            fields: [
              {
                type: 'image',
                name: 'logoImage',
                label: 'Logo',
                placeholder: 'URL',
                editor: true,
                defaultValues: {
                  width: 90,
                  height: 90,
                  sizeUnit: 'px'
                }
              },
              {
                type: 'image',
                name: 'background',
                label: 'Background',
                placeholder: 'URL',
                editor: true,
                defaultValues: {
                  src: 'https://media.assettype.com/outlookindia/2024-04/819e7205-4a83-4447-9b76-cd38384e10f8/2.png?w=801&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0',
                  width: 100,
                  height: 100,
                  sizeUnit: '%'
                }
              },
              {
                type: 'image',
                name: 'preview',
                label: 'Image Preview',
                placeholder: 'URL',
                editor: true,
                defaultValues: {
                  width: 340,
                  sizeUnit: 'px'
                }
              }
            ]
          },
          {
            label: 'Links',
            fields: [
              {
                type: 'link',
                label: 'Tiktok',
                name: 'tiktok',
                placeholder: 'https://www.tiktok.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Instagram',
                name: 'instagram',
                placeholder: 'https://www.instagram.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Discord',
                name: 'discord',
                placeholder: 'https://discord.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Telegram',
                name: 'telegram',
                placeholder: 'https://t.me',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Twitter',
                name: 'twitter',
                placeholder: 'https://twitter.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Dexscreener',
                name: 'dexscreener',
                placeholder: 'https://dexscreener.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Pump.fun',
                name: 'pumpfun',
                placeholder: 'https://pump.fun',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Coin Gecko',
                name: 'coingecko',
                placeholder: 'https://www.coingecko.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Coin Market Cap',
                name: 'coinmarketcap',
                placeholder: 'https://coinmarketcap.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Birdeye',
                name: 'birdeye',
                placeholder: 'https://www.birdeye.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Dextools',
                name: 'dextools',
                placeholder: 'https://www.dextools.io',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Whitepaper',
                name: 'whitepaper',
                placeholder: 'https://example.com/whitepaper',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Author Telegram',
                name: 'authorTelegram',
                placeholder: 'https://t.me',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Author Twitter',
                name: 'authorTwitter',
                placeholder: 'https://twitter.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Author Discord',
                name: 'authorDiscord',
                placeholder: 'https://discord.com',
                defaultValues: { iconName: 'tiktok' }
              }
            ]
          },
          {
            label: 'How to Buy',
            fields: [
              {
                type: 'toggle',
                name: 'showHowToBuy',
                label: 'Show'
              },
              {
                type: 'text',
                name: 'firstStep',
                label: 'Step 1',
                defaultValues: {
                  value:
                    'Mobile Users: Download the Phantom app for free. Desktop Users: Download the Phantom chrome extension.',
                  color: '#000',
                  fontSizeValue: 20,
                  align: 'center'
                },
                editor: true
              },
              {
                type: 'text',
                name: 'secondStep',
                label: 'Step 2',
                defaultValues: {
                  value:
                    'Fund your wallet with Solana, you can buy Solana from an exchange or cross chain swap and send it to your wallet.',
                  color: '#000',
                  fontSizeValue: 20,
                  align: 'center'
                },
                editor: true
              },
              {
                type: 'text',
                name: 'thirdStep',
                label: 'Step 3',
                defaultValues: {
                  value:
                    'Go to Raydium or Jupiter and swap your Solana for $Ticker.',
                  color: '#000',
                  fontSizeValue: 20,
                  align: 'center'
                },
                editor: true
              }
            ]
          },
          {
            label: 'Buttons',
            fields: [
              {
                type: 'link',
                name: 'buyNowLink',
                label: 'Buy Now URL',
                placeholder: 'URL'
              }
            ]
          }
        ]
      },
      {
        name: 'Text',
        icon: TextIcon,
        subCategories: [
          {
            label: 'Something',
            fields: [
              {
                type: 'text',
                name: 'something',
                label: 'Project name',
                placeholder: 'Name'
              },
              {
                type: 'link',
                name: 'twitter',
                label: 'Twitter',
                placeholder: '#'
              }
            ]
          },
          {
            label: 'Something else',
            fields: [
              {
                type: 'image',
                name: 'something',
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
    element: Classic
  },
  simple: {
    label: 'Simple',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis tristique neque sit amet pretium. Cras non purus congue, scelerisque lacus ac, gravida sem. Aenean gravida porttitor venenatis. Pellentesque cursus, diam sit amet egestas egestas, diam justo lacinia urna, in malesuada sem erat id felis. Nam hendrerit, tortor interdum mattis tincidunt, metus purus laoreet lectus, ut elementum justo ligula sed ante.',
    shortDescription:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. donec lobortis tristique neque sit amet pretium.',
    features: [
      'Modern, clean design',
      'Smooth animations',
      'Tokenomics section',
      'Mobile responsive'
    ],
    price: 0.05,
    categories: [
      {
        name: 'Edit',
        icon: EditIcon,
        subCategories: [
          {
            label: 'Text',
            fields: [
              {
                type: 'text',
                name: 'ticker',
                label: 'Ticker',
                editor: true,
                defaultValues: {
                  fontSizeValue: 6,
                  sizeUnit: 'rem',
                  styles: ['bold'],
                  align: 'center',
                  animation: 'heartBeat'
                }
              },
              {
                type: 'text',
                name: 'contractAddress',
                label: 'Contract Address',
                editor: true,
                defaultValues: {
                  color: '#000'
                }
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
                placeholder: 'URL',
                editor: true,
                defaultValues: {
                  src: 'https://media.assettype.com/outlookindia/2024-04/819e7205-4a83-4447-9b76-cd38384e10f8/2.png?w=801&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0',
                  width: 100,
                  height: 100,
                  sizeUnit: '%'
                }
              },
              {
                type: 'image',
                name: 'preview',
                label: 'Image Preview',
                placeholder: 'URL',
                editor: true,
                defaultValues: {
                  width: 420,
                  sizeUnit: 'px'
                }
              }
            ]
          },
          {
            label: 'Links',
            fields: [
              {
                type: 'link',
                label: 'Tiktok',
                name: 'tiktok',
                placeholder: 'https://www.tiktok.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Instagram',
                name: 'instagram',
                placeholder: 'https://www.instagram.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Discord',
                name: 'discord',
                placeholder: 'https://discord.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Telegram',
                name: 'telegram',
                placeholder: 'https://t.me',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Twitter',
                name: 'twitter',
                placeholder: 'https://twitter.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Dexscreener',
                name: 'dexscreener',
                placeholder: 'https://dexscreener.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Pump.fun',
                name: 'pumpfun',
                placeholder: 'https://pump.fun',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Coin Gecko',
                name: 'coingecko',
                placeholder: 'https://www.coingecko.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Coin Market Cap',
                name: 'coinmarketcap',
                placeholder: 'https://coinmarketcap.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Birdeye',
                name: 'birdeye',
                placeholder: 'https://www.birdeye.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Dextools',
                name: 'dextools',
                placeholder: 'https://www.dextools.io',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Whitepaper',
                name: 'whitepaper',
                placeholder: 'https://example.com/whitepaper',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Author Telegram',
                name: 'authorTelegram',
                placeholder: 'https://t.me',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Author Twitter',
                name: 'authorTwitter',
                placeholder: 'https://twitter.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Author Discord',
                name: 'authorDiscord',
                placeholder: 'https://discord.com',
                defaultValues: { iconName: 'tiktok' }
              }
            ]
          }
        ]
      }
    ],
    element: Simple
  },
  impressive: {
    label: 'Impressive',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis tristique neque sit amet pretium. Cras non purus congue, scelerisque lacus ac, gravida sem. Aenean gravida porttitor venenatis. Pellentesque cursus, diam sit amet egestas egestas, diam justo lacinia urna, in malesuada sem erat id felis. Nam hendrerit, tortor interdum mattis tincidunt, metus purus laoreet lectus, ut elementum justo ligula sed ante.',
    shortDescription:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. donec lobortis tristique neque sit amet pretium.',
    features: [
      'Modern, clean design',
      'Smooth animations',
      'Tokenomics section',
      'Mobile responsive'
    ],
    price: 0.05,
    categories: [
      {
        name: 'Edit',
        icon: EditIcon,
        subCategories: [
          {
            label: 'Text',
            fields: [
              {
                type: 'text',
                name: 'ticker',
                label: 'Ticker',
                editor: true,
                defaultValues: {
                  fontFamily: 'Dino',
                  fontSizeValue: 6,
                  sizeUnit: 'rem',
                  styles: ['bold'],
                  align: 'center',
                  animation: 'heartBeat',
                  strokeWidth: 2,
                  strokeColor: '#000'
                }
              },
              {
                type: 'text',
                name: 'contractAddress',
                label: 'Contract Address',
                editor: true,
                defaultValues: {
                  color: '#000',
                  fontSizeValue: 28
                }
              },
              {
                type: 'text',
                name: 'buyNowText',
                label: 'Buy Now',
                editor: true,
                defaultValues: {
                  value: 'Buy',
                  fontFamily: 'Dino',
                  color: '#fff',
                  fontSizeValue: 28,
                  styles: ['bold']
                }
              },
              {
                type: 'text',
                name: 'aboutUsTitle',
                label: 'About Us title',
                editor: true,
                defaultValues: {
                  fontFamily: 'Dino',
                  fontSizeValue: 72,
                  color: '#000'
                }
              },
              {
                type: 'text',
                name: 'aboutUsDescription',
                label: 'About Us description',
                editor: true,
                defaultValues: { fontSizeValue: 32, color: '#000' }
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
                placeholder: 'URL',
                editor: true,
                defaultValues: {
                  width: 102,
                  height: 102,
                  sizeUnit: 'px'
                }
              },
              {
                type: 'image',
                name: 'primaryBackground',
                label: 'Primary Background',
                placeholder: 'URL',
                editor: true,
                defaultValues: {
                  src: 'https://img.freepik.com/premium-photo/orange-background-backgrounds-texture-weathered_53876-218333.jpg',
                  slideshowItems: [
                    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F022%2F325%2F079%2Flarge_2x%2Fnature-wallpaper-background-nature-digital-painting-colorful-nature-ai-background-free-photo.jpg&f=1&nofb=1&ipt=44ae5060e26ab081d15d95175d711be57bc9e79c334f9749478e8f0bb6db2616&ipo=images'
                  ],
                  width: 100,
                  height: 100,
                  sizeUnit: '%'
                }
              },
              {
                type: 'image',
                name: 'secondaryBackground',
                label: 'Secondary Background',
                placeholder: 'URL',
                editor: true,
                defaultValues: {
                  src: 'https://www.knoxalliance.store/wp-content/uploads/2017/05/light-color-background-images-for-website-top-hd-images-for-free-background-for-website-in-light-color-1-1024x640.jpg',
                  width: 100,
                  height: 100,
                  sizeUnit: '%'
                }
              },
              {
                type: 'image',
                name: 'preview',
                label: 'Image Preview',
                placeholder: 'URL',
                editor: true,
                defaultValues: {
                  width: 100,
                  sizeUnit: '%'
                }
              },
              {
                type: 'image',
                name: 'aboutUsPreview',
                label: 'About Us preview',
                placeholder: 'URL',
                editor: true,
                defaultValues: {
                  width: 100,
                  sizeUnit: '%'
                }
              }
            ]
          },
          {
            label: 'Links',
            fields: [
              {
                type: 'link',
                label: 'Tiktok',
                name: 'tiktok',
                placeholder: 'https://www.tiktok.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Instagram',
                name: 'instagram',
                placeholder: 'https://www.instagram.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Discord',
                name: 'discord',
                placeholder: 'https://discord.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Telegram',
                name: 'telegram',
                placeholder: 'https://t.me',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Twitter',
                name: 'twitter',
                placeholder: 'https://twitter.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Dexscreener',
                name: 'dexscreener',
                placeholder: 'https://dexscreener.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Pump.fun',
                name: 'pumpfun',
                placeholder: 'https://pump.fun',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Coin Gecko',
                name: 'coingecko',
                placeholder: 'https://www.coingecko.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Coin Market Cap',
                name: 'coinmarketcap',
                placeholder: 'https://coinmarketcap.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Birdeye',
                name: 'birdeye',
                placeholder: 'https://www.birdeye.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Dextools',
                name: 'dextools',
                placeholder: 'https://www.dextools.io',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Whitepaper',
                name: 'whitepaper',
                placeholder: 'https://example.com/whitepaper',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Author Telegram',
                name: 'authorTelegram',
                placeholder: 'https://t.me',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Author Twitter',
                name: 'authorTwitter',
                placeholder: 'https://twitter.com',
                defaultValues: { iconName: 'tiktok' }
              },
              {
                type: 'link',
                label: 'Author Discord',
                name: 'authorDiscord',
                placeholder: 'https://discord.com',
                defaultValues: { iconName: 'tiktok' }
              }
            ]
          },
          {
            label: 'Buttons',
            fields: [
              {
                type: 'link',
                name: 'buyNowLink',
                label: 'Buy Now URL',
                placeholder: 'URL'
              }
            ]
          },
          {
            label: 'Roadmap',
            fields: [
              {
                type: 'text',
                name: 'roadmapTitle',
                label: 'Title',
                defaultValues: {
                  value: 'Roadmap',
                  fontFamily: 'Dino',
                  fontSizeValue: 72,
                  color: '#000',
                  align: 'center'
                }
              },
              {
                type: 'text',
                name: 'roadmapFirstStepTitle',
                label: 'Phase 1 title',
                defaultValues: {
                  value: 'Phase 1',
                  color: '#fff'
                }
              },
              {
                type: 'text',
                name: 'roadmapFirstStepDescription',
                label: 'Phase 1 description',
                defaultValues: {
                  color: '#000'
                }
              },
              {
                type: 'text',
                name: 'roadmapSecondStepTitle',
                label: 'Phase 2 title',
                defaultValues: {
                  value: 'Phase 2',
                  color: '#fff'
                }
              },
              {
                type: 'text',
                name: 'roadmapSecondStepDescription',
                label: 'Phase 2',
                defaultValues: {
                  color: '#000'
                }
              },
              {
                type: 'text',
                name: 'roadmapThirdStepTitle',
                label: 'Phase 3 title',
                defaultValues: {
                  value: 'Phase 3',
                  color: '#fff'
                }
              },
              {
                type: 'text',
                name: 'roadmapThirdStepDescription',
                label: 'Phase 3',
                defaultValues: {
                  color: '#000'
                }
              }
            ]
          },
          {
            label: 'How to Buy',
            fields: [
              {
                type: 'text',
                name: 'howToBuyTitle',
                label: 'Title',
                defaultValues: {
                  value: 'How to Buy',
                  fontFamily: 'Dino',
                  fontSizeValue: 72,
                  color: '#000',
                  align: 'center'
                }
              },
              {
                type: 'text',
                name: 'howToBuyFirstStep',
                label: 'Step 1',
                defaultValues: {
                  value:
                    'Create any wallet of your choice, we recommend Phantom.',
                  color: '#000',
                  align: 'center'
                }
              },
              {
                type: 'text',
                name: 'howToBuySecondStep',
                label: 'Step 2',
                defaultValues: {
                  value:
                    'Fund your wallet with Solana, you can buy Solana from an exchange.',
                  color: '#000',
                  align: 'center'
                }
              },
              {
                type: 'text',
                name: 'howToBuyThirdStep',
                label: 'Step 3',
                defaultValues: {
                  value:
                    'Head to Jupiter & paste our Contract Address, and swap your Solana to our token.',
                  color: '#000',
                  align: 'center'
                }
              },
              {
                type: 'text',
                name: 'howToBuyFourthStep',
                label: 'Step 4',
                defaultValues: {
                  value: 'Welcome aboard degen!',
                  color: '#000',
                  align: 'center'
                }
              }
            ]
          },
          {
            label: 'FAQ',
            fields: [
              {
                type: 'text',
                name: 'FAQTitle',
                label: 'Title',
                defaultValues: {
                  value: 'FAQ',
                  fontFamily: 'Dino',
                  fontSizeValue: 72,
                  color: '#000',
                  align: 'center'
                }
              },
              {
                type: 'text',
                name: 'firstQuestion',
                label: 'Question 1',
                defaultValues: {
                  value: 'FIRST QUESTION',
                  color: '#000'
                }
              },
              {
                type: 'text',
                name: 'firstAnswer',
                label: 'Answer 1',
                defaultValues: {
                  value: 'FIRST ANSWER',
                  color: '#000'
                }
              },
              {
                type: 'text',
                name: 'secondQuestion',
                label: 'Question 2',
                defaultValues: {
                  value: 'SECOND QUESTION',
                  color: '#000'
                }
              },
              {
                type: 'text',
                name: 'secondAnswer',
                label: 'Answer 2',
                defaultValues: {
                  value: 'SECOND ANSWER',
                  color: '#000'
                }
              },
              {
                type: 'text',
                name: 'thirdQuestion',
                label: 'Question 3',
                defaultValues: {
                  value: 'THIRD QUESTION',
                  color: '#000'
                }
              },
              {
                type: 'text',
                name: 'thirdAnswer',
                label: 'Answer 3',
                defaultValues: {
                  value: 'THIRD ANSWER',
                  color: '#000'
                }
              },
              {
                type: 'text',
                name: 'fourthQuestion',
                label: 'Question 4',
                defaultValues: {
                  value: 'FOURTH QUESTION',
                  color: '#000'
                }
              },
              {
                type: 'text',
                name: 'fourthAnswer',
                label: 'Answer 4',
                defaultValues: {
                  value: 'FOURTH ANSWER',
                  color: '#000'
                }
              }
            ]
          }
        ]
      }
    ],
    element: Impressive
  },
  rocket: {
    label: 'Rocket',
    description: 'Rocket',
    shortDescription: 'Rocket',
    features: [],
    price: 0,
    categories: [
      {
        name: 'Colors',
        icon: EditIcon,
        subCategories: [
          {
            label: 'Accent Colors',
            fields: [
              {
                type: 'color',
                name: 'primaryColor',
                label: 'Primary Color',
                defaultValues: {
                  value: '#3B82F6'
                }
              },
              {
                type: 'color',
                name: 'secondaryColor',
                label: 'Secondary Color',
                defaultValues: {
                  value: '#c0bfbc'
                }
              }
            ]
          },
          {
            label: 'Text',
            fields: [
              {
                type: 'text',
                name: 'heroTitle',
                label: 'Hero title',
                editor: true,
                defaultValues: {
                  value: 'Token name',
                  fontSizeValue: 64,
                  fontFamily: 'Orbitron',
                  styles: ['bold']
                }
              },
              {
                type: 'text',
                name: 'ticker',
                label: 'Ticker',
                editor: true,
                defaultValues: {
                  value: 'Ticker',
                  fontSizeValue: 28,
                  fontFamily: 'Orbitron',
                  color: '#c0bfbc'
                }
              },
              {
                type: 'text',
                name: 'description',
                label: 'Description',
                editor: true,
                defaultValues: {
                  value:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, elit ac hendrerit fermentum, lorem quam blandit sapien, non finibus tortor est et urna. Etiam commodo iaculis convallis.',
                  fontSizeValue: 16,
                  color: '#c0bfbc'
                }
              },
              {
                type: 'text',
                name: 'contractAddress',
                label: 'Contract Address',
                editor: true,
                defaultValues: {
                  fontSizeValue: 14
                }
              },
              {
                type: 'text',
                name: 'contractAddressLabel',
                label: 'Contract Address Label',
                editor: true,
                defaultValues: {
                  value: 'Contract Address',
                  fontSizeValue: 14,
                  fontFamily: 'Orbitron',
                  color: '#c0bfbc'
                }
              },
              {
                type: 'text',
                name: 'projectName',
                label: 'Project Name',
                editor: true,
                defaultValues: {
                  value: 'Name',
                  fontSizeValue: 80,
                  color: '#000',
                  styles: ['bold']
                }
              },
              {
                type: 'text',
                name: 'buyTicker',
                label: 'Header Button',
                editor: true,
                defaultValues: {
                  value: 'Buy Ticker',
                  fontFamily: 'Orbitron',
                  fontSizeValue: 16,
                  color: '#fff'
                }
              },
              {
                type: 'text',
                name: 'buyNow',
                label: 'Buy Now Button',
                editor: true,
                defaultValues: {
                  value: 'Buy now',
                  fontFamily: 'Orbitron',
                  fontSizeValue: 18,
                  color: '#fff'
                }
              },
              {
                type: 'text',
                name: 'joinUs',
                label: 'Join Us Button',
                editor: true,
                defaultValues: {
                  value: 'Join Us',
                  fontFamily: 'Orbitron',
                  fontSizeValue: 18,
                  color: '#fff'
                }
              },
              ,
            ]
          },
          {
            label: 'Buttons',
            fields: [
              {
                type: 'link',
                name: 'buyTickerLink',
                label: 'Buy Ticker URL',
                placeholder: 'URL'
              },
              {
                type: 'link',
                name: 'buyNowLink',
                label: 'Buy Now URL',
                placeholder: 'URL'
              },
              {
                type: 'link',
                name: 'joinUsLink',
                label: 'Join Us URL',
                placeholder: 'URL'
              },
              {
                type: 'link',
                name: 'telegramButtonLink',
                label: 'Telegram Button URL',
                editor: true,
                defaultValues: { placeholder: 'URL' }
              },
              {
                type: 'toggle',
                name: 'showTelegramButton',
                label: 'Show telegram button'
              },
              {
                type: 'link',
                name: 'twitterButtonLink',
                label: 'Twitter Button URL',
                editor: true,
                defaultValues: { placeholder: 'URL' }
              },
              {
                type: 'toggle',
                name: 'showTwitterButton',
                label: 'Show twitter button'
              }
            ]
          }
        ]
      }
    ],
    element: Rocket
  }
} as const satisfies Templates

export const defaultFieldValues: DefaultValues = {
  text: {
    value: '',
    fontFamily: 'Inter',
    fontSizeValue: 24,
    sizeUnit: 'px',
    color: '',
    styles: [],
    strokeColor: '#ff0000',
    strokeWidth: 0,
    backgroundColor: 'transparent',
    rotation: 0,
    animation: null,
    animationDuration: 1000
  },
  image: {
    src: '',
    slideshowItems: [],
    width: 300,
    height: 'auto',
    sizeUnit: 'px',
    rotation: 0,
    opacity: 100,
    borderColor: '#ff0000',
    borderWidth: 0,
    slideshowInterval: 2000,
    animation: null,
    animationDuration: 1000
  },
  link: {
    url: '',
    iconName: 'default',
    size: 70,
    rotation: 0,
    animation: null,
    animationDuration: 1000
  },
  toggle: {
    value: true
  },
  color: {
    value: '#ff0000'
  }
}

export const getTemplateFields = (templateName: TemplateName): TemplateData => {
  const result = { links: {} }
  const currentTemplate = templates[templateName] as Template

  currentTemplate.categories.forEach(({ subCategories }) => {
    subCategories.forEach(({ fields }) => {
      fields.forEach(({ defaultValues, ...fieldData }) => {
        const { type, name } = fieldData
        if (result.hasOwnProperty(name)) return

        const data = merge(
          fieldData,
          cloneDeep(defaultFieldValues[type]),
          defaultValues
        )

        if (type === 'link') {
          set(result, `links.${name}`, data)
        } else {
          set(result, name, data)
        }
      })
    })
  })

  return result as TemplateData
}

const getTemplatesData = () => {
  const result: { [key: string]: TemplateData } = {}

  const templateNames = Object.keys(templates) as TemplateName[]
  templateNames.forEach((name: TemplateName) => {
    result[name] = getTemplateFields(name)
  })

  return result
}

export const templatesData = getTemplatesData()
