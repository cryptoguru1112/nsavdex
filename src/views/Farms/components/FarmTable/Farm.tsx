import React from 'react'
import styled from 'styled-components'
import { useFarmUser } from 'state/farms/hooks'
import { useTranslation } from 'contexts/Localization'
import { Text, Image } from '@pancakeswap/uikit'
import { Token } from '@pancakeswap/sdk'
import { getBalanceNumber } from 'utils/formatBalance'
import { TokenPairImage } from 'components/TokenImage'

export interface FarmProps {
  label: string
  pid: number
  token: Token
  quoteToken: Token
}

interface FarmProps1 extends FarmProps {
  isTokenOnly: boolean
}

const Container = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 32px;
  }
`

const TokenWrapper = styled.div`
  padding-right: 8px;
  width: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 40px;
  }
`

const Farm: React.FunctionComponent<FarmProps1> = ({ token, quoteToken, label, pid, isTokenOnly }) => {
  const { stakedBalance } = useFarmUser(pid)
  const { t } = useTranslation()
  const rawStakedBalance = getBalanceNumber(stakedBalance)

  const handleRenderFarming = (): JSX.Element => {
    if (rawStakedBalance) {
      return (
        <Text color="secondary" fontSize="12px" bold textTransform="uppercase">
          {t('Farming')}
        </Text>
      )
    }

    return null
  }
  const image = `/images/tokens/${token.address}.svg`
  return (
    <Container>
      <TokenWrapper>
      {
        isTokenOnly ?
        <Image src={image} width={64} height={64} alt="Token Image" /> : 
        <TokenPairImage variant="inverted" primaryToken={token} secondaryToken={quoteToken} width={64} height={64} />
      }
      </TokenWrapper>
      <div>
        {handleRenderFarming()}
        <Text bold>{label}</Text>
      </div>
    </Container>
  )
}

export default Farm