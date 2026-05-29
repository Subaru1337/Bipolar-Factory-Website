export type Product = {
  slug: string
  name: string
  url: string
  intro: string
  description: string[]
  features: string[]
  accent: string
}

export const products: Product[] = [
  {
    slug: 'oly-store-sync',
    name: 'OLY Store Sync',
    url: 'https://www.oly.live/',
    intro:
      'Oly is an advanced retail analytics solution designed to unlock the full potential of your existing security cameras, going beyond basic image capture to deliver unparalleled insights.',
    description: [
      'Store Sync is exclusively crafted for retail establishments, empowering them to harness the full spectrum of Brick and Mortar Analytics capabilities. With cutting-edge artificial intelligence and machine learning technologies, Store Sync offers comprehensive insights into customer interactions such as foot traffic, dwell time, demographics, path analysis and conversion rates.',
      'Leverage this valuable information to optimize and elevate your business capabilities.',
    ],
    features: [
      'A.I. Automation',
      'Heat Mapping',
      'Camera Health',
      'Theft/Fire Detection',
      'Alarm Triggers',
    ],
    accent: 'var(--brand-blue)',
  },
  {
    slug: 'oly-control-center',
    name: 'OLY Control Center',
    url: 'https://www.oly.live/',
    intro:
      "Enterprises can leverage Oly's advanced Video Management System (VMS) for centralised oversight and monitoring of security cameras.",
    description: [
      'Control Center, characterised by a data-driven design and a customisable dashboard featuring useful widgets, can seamlessly integrate with Oly Store Sync or operate independently as a standalone software, seamlessly working with your existing retail analytics suite.',
    ],
    features: ['Camera Control', 'Live Widgets', 'Recording and Storage', 'Map View'],
    accent: 'var(--brand-blue)',
  },
  {
    slug: 'metawood',
    name: 'Metawood',
    url: 'https://www.themetawood.com/',
    intro:
      'Metawood presents a pioneering fusion of a gamified streaming platform and a decentralized creator economy, harnessing the power of the metaverse and virtual reality to redefine the landscape of entertainment.',
    description: [
      'Offering an unparalleled virtual experience, this platform enables users to seamlessly connect with friends, create avatars, engage in real-time conversations, and make plans in a vibrant virtual world.',
      'Production houses can gain complete command over their content by orchestrating live events, screenings, and concerts within its immersive environment. Content Creators can leverage the benefits of the decentralised economy, showcasing their talents and generating revenue effortlessly.',
      'Metawood stands as a visionary force shaping the future of content creation, where personalized content takes center stage, and audiences become integral participants in this dynamic, transformative entertainment landscape.',
    ],
    features: ['Single-player Story Mode', 'Watch Party', 'Free Roam', 'Virtual Theater'],
    accent: 'var(--brand-lime)',
  },
]

export function getProductUrl(name: string): string {
  const product = products.find((p) => p.name === name)
  return product?.url ?? '/products'
}
