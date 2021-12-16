import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: '/',
      },
      {
        label: t('Blog'),
        href: '/',
      },
      {
        label: t('Community'),
        href: '/',
      },
      {
        label: t('NSBC token'),
        href: '/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: '/',
      },
      {
        label: t('Guids & FAQ'),
        href: '/',
      },
      {
        label: t('Terms & Conditions'),
        href: '/',
      },
      {
        label: t('Disclaimer'),
        href: '/',
      },
      {
        label: t('Privacy'),
        href: '/',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: '/',
      },
      {
        label: t('Audits'),
        href: '/',
      },
    ],
  },
]
