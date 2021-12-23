import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'Farm',
    href: '/farms',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
    ],
  },
  {
    label: t('Pools'),
    icon: 'Pool',
    href: '/pools',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  {
    label: t('Win'),
    href: '/lottery',
    icon: 'Trophy',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Lottery'),
        href: '/lottery',
      },
      // {
      //   label: t('Prediction (BETA)'),
      //   href: '/prediction',
      // },
      
    ],
  },
  {
    label: t('Referral'),
    href: '/referral',
    icon: 'Info',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Referral'),
        href: '/referral',
      },
    ],
  },
]

export default config
