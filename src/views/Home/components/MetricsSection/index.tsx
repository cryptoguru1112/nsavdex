import React from 'react'
import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon, Button, Link, Card } from '@pancakeswap/uikit'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useWeb3React } from '@web3-react/core'
import { Timeline } from 'react-twitter-widgets'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTokenBalance, { FetchStatus, useGetCakeBalance } from 'hooks/useTokenBalance'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import { formatLocalisedCompactNumber, getFullDisplayBalance, formatBigNumber } from 'utils/formatBalance'
import styled from 'styled-components'
import { useAppDispatch } from 'state'
import { fetchFarmUserDataAsync } from 'state/farms'
import { useTotalValue } from 'state/farms/hooks'
import farmsConfig from 'config/constants/farms'
import UnlockButton from 'components/UnlockButton'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'

// Values fetched from bitQuery effective 6/9/21
const txCount = 30841921
const addressCount = 2751624

const Stats = () => {
  
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const data = useTotalValue()
  const { theme } = useTheme()
  
  const dispatch = useAppDispatch()

  const tvlString = data ? formatLocalisedCompactNumber(data[0].toNumber()) : '-';
  const earnings = data ? formatLocalisedCompactNumber(data[1].toNumber()) : '-';
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)

  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="secondary" width="36px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="36px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="failure" width="36px" />,
  }

  const farmsToFetch = farmsConfig
  const pids = farmsToFetch.map((farmToFetch) => farmToFetch.pid)
  const StyledCard = styled(Card)`
    background: #fff;
    margin: 12px;
    border-radius: 6px;
    padding: 18px;
    & div{
      background: #fff;
    }
  `
  const { logout } = useAuth()
  const handleLogout = () => {
    logout()
  }
  const { balance, fetchStatus } = useGetCakeBalance()

  const registerToken = async (tokenAddress: string, tokenSymbol: string, tokenDecimals: number) => {
    const tokenAdded = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: `https://nsavdex.io/images/token.png`,
        },
      },
    })
  
    return tokenAdded
  }
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading textAlign="center" scale="xxl" marginBottom="12px">
        {t('NSBC Finance')}
      </Heading>
      <Heading textAlign="center" scale="md" mb="32px">
        {t('Rewarding Binance Smart Chain Yield Farmers, with NSBC, every day!')}
      </Heading>
      {/* <Flex flexWrap="wrap">
        <Text display="inline" textAlign="center" color="textSubtle" mb="20px">
          {entrusting}
          <>{data ? <>{tvlString}</> : <Skeleton display="inline-block" height={16} width={70} mt="2px" />}</>
          {inFunds}
        </Text>
      </Flex> */}
      <Flex flexDirection={['column', null, null, 'row']}>
        <StyledCard>
          <Heading scale="xl" color="#000" mb="12px">
            {t('Farming & Staking')}
          </Heading>
          <Flex color="#000" mb="24px">
            <Button style={{background: "#113356", borderRadius: "24px"}}>
              <Link href="https://nsavdex.io/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" style={{textDecoration: "none"}}>
              Buy NSBC
              </Link>            
            </Button>
            <Text color="#000" fontSize="32px" fontWeight="700" marginX="16px">+</Text>
            <Button style={{background: "#141d3c", borderRadius: "24px"}} onClick={() => registerToken('0x95E0150D37A2b2F0D44eA0a0A0120a3Aca69a41E', 'LIME', 18)}>
              <img src="/images/meta-mask.png" alt="" />
            </Button>
          </Flex>
          <Heading scale="md" color="#000" mb="12px">
            NSBC to Harvest
          </Heading>
          <Flex color="#000" mb="24px" justifyContent="space-between">
            {!account?
              <Text color="#000" fontSize="18px">LOCKED</Text>
              : <><Text color="#000" fontSize="18px">USD</Text><Text color="#000" fontSize="18px">{t('$%earn%', { earn: earnings })}</Text></>
            }
          </Flex>
          <Heading scale="md" color="#000" mb="12px">
            NSBC in Wallet
          </Heading>
          <Flex color="#000" mb="24px" justifyContent="space-between">
            {!account?
              <Text color="#000" fontSize="18px">LOCKED</Text>
              : <><Text color="#000" fontSize="18px">NSBC</Text>
              {fetchStatus !== FetchStatus.SUCCESS ? (
                <Skeleton height="22px" width="60px" />
              ) : (
                <Text color="#000" fontSize="18px">{formatBigNumber(balance, 6)}</Text>
              )}
              </>
            }  
          </Flex>
          <Flex>
          {account ? 
          <Button variant="secondary" width="100%" onClick={handleLogout} color="#fff" style={{background: "#113356"}}>
              {t('Disconnect Wallet')}
            </Button> : 
          <UnlockButton style={{background: "#113356", borderRadius: "24px", color: "#fff", width: "100%"}}/>
          }            
          </Flex>          
        </StyledCard>
        <StyledCard>
          <Heading scale="xl" color="#000" mb="12px" textAlign="center">
            Total Value
          </Heading>
          <Heading scale="xl" color="#000" mb="12px" textAlign="center">
            Locked(TVL)
          </Heading>
          <Text color="#000" fontSize="72px" fontWeight="700" textAlign="center">{t('$%tvl%', { tvl: tvlString })}</Text>
          <Text color="#000" fontWeight="700" textAlign="center">Across all Farms and Pools</Text>
        </StyledCard>
        <StyledCard>
          <Heading scale="xl" color="#000" mb="12px">
            Announcements
          </Heading>
          <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'nsavdexio'
          }}
          options={{
            height: '300',
            chrome: "noheader, nofooter",
          }}
        />
        </StyledCard>
      </Flex>
    </Flex>
  )
}

export default Stats
