import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'NSBC',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by NSBC), NFTs, and more, on a platform you can trust.',
  image: 'https://NSBC.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Nsavdex')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Nsavdex')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Nsavdex')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Nsavdex')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Nsavdex')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Nsavdex')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Nsavdex')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Nsavdex')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Nsavdex')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Nsavdex')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Nsavdex')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Nsavdex')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Nsavdex')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Nsavdex')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Nsavdex')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Nsavdex')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Nsavdex')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Nsavdex')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('NSBC Info & Analytics')}`,
        description: 'View statistics for NSBC exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('NSBC Info & Analytics')}`,
        description: 'View statistics for NSBC exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('NSBC Info & Analytics')}`,
        description: 'View statistics for NSBC exchanges.',
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('Nsavdex')}`,
      }
    default:
      return null
  }
}
