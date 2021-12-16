import React from 'react'
import styled from 'styled-components'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getBalanceNumber, formatLocalisedCompactNumber } from 'utils/formatBalance'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { Flex, Text, Heading, Skeleton } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import tokens from 'config/constants/tokens'

const StyledColumn = styled(Flex)<{ noMobileBorder?: boolean }>`
  flex-direction: column;
  ${({ noMobileBorder, theme }) =>
    noMobileBorder
      ? `${theme.mediaQueries.md} {
           padding: 0 16px;
           border-left: 1px ${theme.colors.inputSecondary} solid;
         }
       `
      : `border-left: 1px ${theme.colors.inputSecondary} solid;
         padding: 0 8px;
         ${theme.mediaQueries.sm} {
           padding: 0 16px;
         }
       `}
`

const Grid = styled.div`
  display: grid;
  grid-gap: 16px 8px;
  grid-template-columns: repeat(1, auto);
  text-align: center;
  justify-contetn: center;
  margin-top: 36px;
  padding: 8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: 16px;
    grid-template-columns: repeat(2, auto);
    margin-left: 120px;
    margin-right: 120px;
  }
`

const StyledFlex = styled(Flex)`
  justify-content: center;
`
const StyledSection = styled.div`
  justify-content: center;
  text-align: center;
`

const StyledCoin = styled.div`
`

const CryptoSection = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(tokens.nsbc.address))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const cakePriceBusd = usePriceCakeBusd()
  const mcap = cakePriceBusd.times(cakeSupply)
  const mcapString = formatLocalisedCompactNumber(mcap.toNumber())

  return (
    <StyledSection>
      <Heading scale="xxl" marginBottom="24px">{t('Add Liquidity Minning')}</Heading>
      <Heading scale="md">New Currency pair to Liquidity Minning</Heading>
      <Grid>
        <StyledFlex flexDirection="initial">
          <StyledCoin>
            <img src="/images/home/busd.png" alt=""/>
            <Heading scale="xl">BUSD</Heading>
          </StyledCoin>
          <Heading scale="xxl" marginX="40px" py="40px">-</Heading>
          <StyledCoin>
            <img src="/images/home/usdt.png" alt=""/>
            <Heading scale="xl">USDT</Heading>
          </StyledCoin>
        </StyledFlex>
        <StyledFlex flexDirection="initial">
          <StyledCoin>
            <img src="/images/home/bnb.png" alt=""/>
            <Heading scale="xl">BNB</Heading>
          </StyledCoin>
          <Heading scale="xxl" marginX="40px" pt="30px">-</Heading>
          <StyledCoin>
            <img src="/images/home/usdt.png" alt=""/>
            <Heading scale="xl">USDT</Heading>
          </StyledCoin>
        </StyledFlex>
      </Grid>
    </StyledSection>    
    
  )
}

export default CryptoSection
