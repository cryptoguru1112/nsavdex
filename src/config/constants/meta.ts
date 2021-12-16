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
        title: `${t('Home')} | ${t('NSBC')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('NSBC')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('NSBC')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('NSBC')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('NSBC')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('NSBC')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('NSBC')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('NSBC')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('NSBC')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('NSBC')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('NSBC')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('NSBC')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('NSBC')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('NSBC')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('NSBC')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('NSBC')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('NSBC')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('NSBC')}`,
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
        title: `${t('Your Profile')} | ${t('NSBC')}`,
      }
    default:
      return null
  }
}
