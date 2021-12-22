import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'support@NSAVDEX.io',
      },
      {
        label: t('Community'),
        href: 'https://t.me/nsavdex',
      },
      {
        label: t('NSBC token'),
        href: 'https://bscscan.com/address/0x4837eB79E05C3aC845C010060C488992d1f1AcE0',
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
