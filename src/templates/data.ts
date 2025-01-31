import { Classic } from './Classic/Classic'
import { Impressive } from './Impressive/Impressive'
import { Rocket } from './Rocket/Rocket'
import { Simple } from './Simple/Simple'

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
    element: Rocket
  }
}
