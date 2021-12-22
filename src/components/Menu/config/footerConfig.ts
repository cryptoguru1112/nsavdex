import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'mailto:support@NSAVDEX.io?subject=nsavdex',
      },
      {
        label: t('Community'),
        href: 'https://t.me/nsavdex',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Terms & Conditions'),
        href: '/termcondition',
      },
      {
        label: t('Disclaimer'),
        href: '/disclaimer',
      },
      {
        label: t('Privacy'),
        href: '/privacy',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/BlockChainSuperDev/NSAVDEX.git',
      },
      {
        label: t('Audits'),
        href: '/',
      },
    ],
  },
]
