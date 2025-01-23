import { Classic } from './Classic/Classic'
import { Impressive } from './Impressive/Impressive'
import { Rocket } from './Rocket/Rocket'
import { Simple } from './Simple/Simple'
import {
  DefaultValues,
  Template,
  TemplateData,
  TemplateName,
  Templates
} from '@/types/templates'
import { cloneDeep, merge, set } from 'lodash'

export const templates = {
  classic: {
    label: 'Classic',
    description:
      'This template is created not just for the presentation of memecoin, but to turn a visit to the site into a memorable experience. From the first seconds the user enters a bright, dynamic world where everything speaks of creativity, boldness and lightness of the project. The visual component of the template as if shouts: "Here begins the story, which is worth remembering!"',
    shortDescription:
      'This template is created not just for the presentation of memecoin, but to turn a visit to the site into a memorable experience',
    features: [
      'Intuitive navigation',
      'Beautiful effects',
      'Сlear structure',
      'Fast interaction'
    ],
    price: 0.045,
    categories: [
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
            type: 'image',
            name: 'firstStepImage',
            label: 'Step 1 Image',
            defaultValues: {
              src: 'https://firebasestorage.googleapis.com/v0/b/webby-2376c.firebasestorage.app/o/images%2Fphantomlogo.jpeg?alt=media&token=1bc88ed9-0e45-4cf9-9174-e3a72e276c49',
              width: 64,
              height: 64
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
            type: 'image',
            name: 'secondStepImage',
            label: 'Step 2 Image',
            defaultValues: {
              src: 'https://firebasestorage.googleapis.com/v0/b/webby-2376c.firebasestorage.app/o/images%2Fsolicon.jpeg?alt=media&token=341437f5-35d6-41c0-b777-8c99435bdbbf',
              width: 64,
              height: 64
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
          },
          {
            type: 'image',
            name: 'thirdStepImage',
            label: 'Step 3 Image',
            defaultValues: {
              src: 'https://firebasestorage.googleapis.com/v0/b/webby-2376c.firebasestorage.app/o/images%2Fjuplogo.jpeg?alt=media&token=1e7e9715-b502-4ad2-9aa0-3e60c597c05b',
              width: 64,
              height: 64
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
    ],
    element: Classic
  },
  simple: {
    label: 'Simple',
    description:
      "This template is the epitome of simplicity and convenience, created especially for those who want to quickly and easily present their memecoin. It allows you to focus on the main thing without distracting users with unnecessary details. With this template, you don't need to understand complex technical details or spend hours on customization. Just fill in the fields, upload the necessary images - and your site is ready!",
    shortDescription:
      'This template is the epitome of simplicity and convenience, created especially for those who want to quickly and easily present their memecoin.',
    features: [
      'Visual simplicity',
      'Modern interface',
      'Functionality',
      'Focus on memcoin'
    ],
    price: 0.045,
    categories: [
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
    ],
    element: Simple
  },
  impressive: {
    label: 'Impressive',
    description:
      'This template is the perfect choice for creating your memcoin website that will attract attention and become a memorable event in the crypto world. User-friendly, colorful and functional, it makes it easy to present your project to a wide audience. The template is designed with ease of use and stylish design in mind, so that even beginners can launch their site in a few minutes. Its design emphasizes the lightness and humor characteristic of memcoins, creating a unique atmosphere and allowing you to stand out among other projects.',
    shortDescription:
      'This template is the perfect choice for creating your memecoin website that will attract attention and become a memorable event in the crypto world.',
    features: [
      'FAQ section',
      'Road Map Section',
      'Bright and energetic design',
      'Full customization'
    ],
    price: 0.05,
    badge: 'popular',
    categories: [
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
              value: 'Create any wallet of your choice, we recommend Phantom.',
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
    ],
    element: Impressive
  },
  rocket: {
    label: 'Rocket',
    description:
      "Rocket template is a bright, dynamic and memorable choice for your memecoin website. Its main feature is a stylish rocket animation, which creates a sense of movement and growth, symbolizing the rapid development of your project. This template is perfect for those who want to show the ambitiousness of their memcoin and attract users' attention with a unique presentation.",
    shortDescription:
      'Rocket template is a bright, dynamic and memorable choice for your memecoin website.',
    features: [
      'Motion background',
      'Interactive buttons',
      'Adaptability',
      'SEO optimization'
    ],
    price: 0.065,
    badge: 'new',
    categories: [
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
          {
            type: 'text',
            name: 'tokenomicsTitle',
            label: 'Tokenomics Title',
            editor: true,
            defaultValues: {
              value: 'Tokenomics',
              fontFamily: 'Orbitron',
              fontSizeValue: 48
            }
          },
          {
            type: 'text',
            name: 'missionTimelineTitle',
            label: 'Mission Timeline Title',
            defaultValues: {
              value: 'Mission Timeline',
              fontFamily: 'Orbitron',
              fontSizeValue: 48
            },
            editor: true
          },
          {
            type: 'text',
            name: 'missionControlTitle',
            label: 'Mission Control Title',
            defaultValues: {
              value: 'Mission Control',
              fontFamily: 'Orbitron',
              fontSizeValue: 48
            },
            editor: true
          },
          {
            type: 'text',
            name: 'FAQTitle',
            label: 'Mission FAQ Title',
            defaultValues: {
              value: 'Mission FAQ',
              fontFamily: 'Orbitron',
              fontSizeValue: 48
            },
            editor: true
          },
          {
            type: 'text',
            name: 'joinTitle',
            label: 'Join The Mission Title',
            defaultValues: {
              value: 'Join The Mission',
              fontFamily: 'Orbitron',
              fontSizeValue: 48
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
          }
        ]
      },
      {
        label: 'Tokenomics',
        fields: [
          {
            type: 'text',
            name: 'firstTokenomicsIcon',
            label: 'First Icon',
            defaultValues: { value: '💰', fontSizeValue: 40 }
          },
          {
            type: 'text',
            name: 'firstTokenomicsTitle',
            label: 'First Title',
            defaultValues: {
              value: 'Total Supply',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            }
          },
          {
            type: 'text',
            name: 'firstTokenomicsValue',
            label: 'First Value',
            defaultValues: {
              value: '1000000000',
              fontSizeValue: 32,
              fontFamily: 'Orbitron'
            }
          },
          {
            type: 'text',
            name: 'secondTokenomicsIcon',
            label: 'Second Icon',
            defaultValues: { value: '📈', fontSizeValue: 40 }
          },
          {
            type: 'text',
            name: 'secondTokenomicsTitle',
            label: 'Second Title',
            defaultValues: {
              value: 'Buy Tax',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            }
          },
          {
            type: 'text',
            name: 'secondTokenomicsValue',
            label: 'Second Value',
            defaultValues: {
              value: '5%',
              fontSizeValue: 32,
              fontFamily: 'Orbitron'
            }
          },
          {
            type: 'text',
            name: 'thirdTokenomicsIcon',
            label: 'Third Icon',
            defaultValues: { value: '📉', fontSizeValue: 40 }
          },
          {
            type: 'text',
            name: 'thirdTokenomicsTitle',
            label: 'Third Title',
            defaultValues: {
              value: 'Sell Tax',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            }
          },
          {
            type: 'text',
            name: 'thirdTokenomicsValue',
            label: 'Third Value',
            defaultValues: {
              value: '5%',
              fontSizeValue: 32,
              fontFamily: 'Orbitron'
            }
          },
          {
            type: 'text',
            name: 'fourthTokenomicsIcon',
            label: 'Fourth Icon',
            defaultValues: { value: '🔒', fontSizeValue: 40 }
          },
          {
            type: 'text',
            name: 'fourthTokenomicsTitle',
            label: 'Fourth Title',
            defaultValues: {
              value: 'LP Lock',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            }
          },
          {
            type: 'text',
            name: 'fourthTokenomicsValue',
            label: 'Fourth Value',
            defaultValues: {
              value: '2 Years',
              fontSizeValue: 32,
              fontFamily: 'Orbitron'
            }
          }
        ]
      },
      {
        label: 'Mission Timeline',
        fields: [
          {
            type: 'text',
            name: 'firstTimelinePhaseTitle',
            label: 'Phase 1 title',
            defaultValues: {
              value: 'Phase 1',
              color: '#fff',
              fontSizeValue: 14,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'firstTimelineTitle',
            label: 'Phase 1 title',
            defaultValues: {
              value: 'Concept & Vision',
              color: '#fff',
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'firstTimelineDescription',
            label: 'Phase 1 description',
            defaultValues: {
              value:
                'Define your big idea and lay out the foundation for your project. Set clear goals and build excitement around what’s coming next. 🚀',
              color: '#c0bfbc',
              fontSizeValue: 16
            },
            editor: true
          },
          {
            type: 'text',
            name: 'firstTimelineDate',
            label: 'Phase 1 date',
            defaultValues: {
              value: 'Q1 2024',
              fontSizeValue: 14,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'secondTimelinePhaseTitle',
            label: 'Phase 2 title',
            defaultValues: {
              value: 'Phase 2',
              color: '#fff',
              fontSizeValue: 14,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'secondTimelineTitle',
            label: 'Phase 2 title',
            defaultValues: {
              value: 'Build & Launch',
              color: '#fff',
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'secondTimelineDescription',
            label: 'Phase 2 description',
            defaultValues: {
              value:
                'Start creating! Focus on getting your product, service, or community up and running. This is where things start to come to life. 🌟',
              color: '#c0bfbc',
              fontSizeValue: 16
            },
            editor: true
          },
          {
            type: 'text',
            name: 'secondTimelineDate',
            label: 'Phase 2 date',
            defaultValues: {
              value: 'Q2 2025',
              fontSizeValue: 14,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'thirdTimelinePhaseTitle',
            label: 'Phase 3 title',
            defaultValues: {
              value: 'Phase 3',
              color: '#fff',
              fontSizeValue: 14,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'thirdTimelineTitle',
            label: 'Phase 3 title',
            defaultValues: {
              value: 'Build & Launch',
              color: '#fff',
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'thirdTimelineDescription',
            label: 'Phase 3 description',
            defaultValues: {
              value:
                'Start creating! Focus on getting your product, service, or community up and running. This is where things start to come to life. 🌟',
              color: '#c0bfbc',
              fontSizeValue: 16
            },
            editor: true
          },
          {
            type: 'text',
            name: 'thirdTimelineDate',
            label: 'Phase 3 date',
            defaultValues: {
              value: 'Q2 2025',
              fontSizeValue: 14,
              fontFamily: 'Orbitron'
            },
            editor: true
          }
        ]
      },
      {
        label: 'Mission Control',
        fields: [
          {
            type: 'image',
            name: 'firstControlAvatar',
            label: 'First Avatar',
            defaultValues: { width: 120 },
            editor: true
          },
          {
            type: 'text',
            name: 'firstControlName',
            label: 'First Name',
            defaultValues: {
              value: 'Meme Lord',
              color: '#fff',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'firstControlJob',
            label: 'First Job',
            defaultValues: {
              value: 'Platform Architect',
              fontFamily: 'Orbitron',
              fontSizeValue: 16
            },
            editor: true
          },
          {
            type: 'image',
            name: 'secondControlAvatar',
            label: 'Second Avatar',
            defaultValues: { width: 120 },
            editor: true
          },
          {
            type: 'text',
            name: 'secondControlName',
            label: 'Second Name',
            defaultValues: {
              value: 'Degen Dev',
              color: '#fff',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'secondControlJob',
            label: 'Second Job',
            defaultValues: {
              value: 'Smart Contract Wizard',
              fontFamily: 'Orbitron',
              fontSizeValue: 16
            },
            editor: true
          },
          {
            type: 'image',
            name: 'thirdControlAvatar',
            label: 'Third Avatar',
            defaultValues: { width: 120 },
            editor: true
          },
          {
            type: 'text',
            name: 'thirdControlName',
            label: 'Third Name',
            defaultValues: {
              value: 'Ser Launch',
              color: '#fff',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'thirdControlJob',
            label: 'Third Job',
            defaultValues: {
              value: 'Community Lead',
              fontFamily: 'Orbitron',
              fontSizeValue: 16
            },
            editor: true
          }
        ]
      },
      {
        label: 'FAQ',
        fields: [
          {
            type: 'text',
            name: 'firstQuestion',
            label: 'First Question',
            defaultValues: {
              value: 'What is AURORA? 🚀',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'firstAnswer',
            label: 'First Answer',
            defaultValues: {
              value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor eget nunc vel rutrum. Nullam efficitur metus a nibh ullamcorper suscipit. Nullam eget aliquam turpis, sed aliquet orci. Nulla sit amet nisl in lectus dapibus fringilla vitae id turpis.',
              fontSizeValue: 16,
              color: '#c0bfbc'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'secondQuestion',
            label: 'Second Question',
            defaultValues: {
              value: 'Why AURORA? 🌟',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'secondAnswer',
            label: 'Second Answer',
            defaultValues: {
              value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor eget nunc vel rutrum. Nullam efficitur metus a nibh ullamcorper suscipit. Nullam eget aliquam turpis, sed aliquet orci. Nulla sit amet nisl in lectus dapibus fringilla vitae id turpis.',
              fontSizeValue: 16,
              color: '#c0bfbc'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'thirdQuestion',
            label: 'Third Question',
            defaultValues: {
              value: 'How does it work? ⚡',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'thirdAnswer',
            label: 'Third Answer',
            defaultValues: {
              value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor eget nunc vel rutrum. Nullam efficitur metus a nibh ullamcorper suscipit. Nullam eget aliquam turpis, sed aliquet orci. Nulla sit amet nisl in lectus dapibus fringilla vitae id turpis.',
              fontSizeValue: 16,
              color: '#c0bfbc'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'fourthQuestion',
            label: 'Fourth Question',
            defaultValues: {
              value: 'How does it work? ⚡',
              fontSizeValue: 20,
              fontFamily: 'Orbitron'
            },
            editor: true
          },
          {
            type: 'text',
            name: 'fourthAnswer',
            label: 'Fourth Answer',
            defaultValues: {
              value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor eget nunc vel rutrum. Nullam efficitur metus a nibh ullamcorper suscipit. Nullam eget aliquam turpis, sed aliquet orci. Nulla sit amet nisl in lectus dapibus fringilla vitae id turpis.',
              fontSizeValue: 16,
              color: '#c0bfbc'
            },
            editor: true
          }
        ]
      },
      {
        label: 'Links',
        fields: [
          {
            type: 'link',
            name: 'joinTelegram',
            label: 'Telegram',
            editor: true,
            placeholder: 'URL'
          },
          {
            type: 'link',
            name: 'joinTwitter',
            label: 'Twitter',
            editor: true,
            placeholder: 'URL'
          },
          {
            type: 'link',
            name: 'joinDiscord',
            label: 'Discord',
            editor: true,
            placeholder: 'URL'
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

  currentTemplate.categories.forEach(({ fields }) => {
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
