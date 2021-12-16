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
  margin-right: 36px;
  margin-left: 36px;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: 16px;
    grid-template-columns: repeat(5, auto);
  }
`

const StyledFlex = styled(Flex)`
  max-width: 280px;
  height: 200px;
  justify-content: center;
  background: linear-gradient(0deg, #141d3c 0%, #113255 37%);
  border-radius: 4px;
`

const emissionsPerBlock = 22

const CakeDataRow = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(tokens.nsbc.address))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const cakePriceBusd = usePriceCakeBusd()
  const mcap = cakePriceBusd.times(cakeSupply)
  const mcapString = formatLocalisedCompactNumber(mcap.toNumber())
  const imageStyle ={
    marginLeft:"auto", 
    marginRight: "auto", 
    height: "80px"
  }

  return (
    <Grid>
      <StyledFlex flexDirection="column">
        <img src="images/home/cake/market-cap.png" alt="" style={imageStyle}/>
        <Text color="textSubtle">{t('Market cap')}</Text>
        {mcap?.gt(0) && mcapString ? (
          <Heading scale="lg">{t('$%marketCap%', { marketCap: mcapString })}</Heading>
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
      </StyledFlex>
      <StyledFlex flexDirection="column">
      <img src="images/home/cake/minted.png" alt="" style={imageStyle}/>
        <Text color="textSubtle">{t('Total Minted')}</Text>
        {cakeSupply ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={cakeSupply} />
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
      </StyledFlex>
      <StyledFlex flexDirection="column" justifyContent="center">
      <img src="images/home/cake/burned.png" alt="" style={imageStyle}/>
        <Text color="textSubtle">{t('Total Burned')}</Text>
        {burnedBalance ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={burnedBalance} />
        ) : (
          <Text color="textSubtle" fontSize="24px" lineHeight="1.1" bold>{t('0')}</Text>
        )}
      </StyledFlex>
      <StyledFlex flexDirection="column">
      <img src="images/home/cake/c-supply.png" alt="" style={imageStyle}/>
        <Text color="textSubtle">{t('Circulating Supply')}</Text>
        <Heading scale="lg">{t('%totalSup%', { totalSup: getBalanceNumber(totalSupply) })}</Heading>
      </StyledFlex>
      <StyledFlex flexDirection="column">
      <img src="images/home/cake/logo-icon-1.png" alt="" style={imageStyle}/>
        <Text color="textSubtle">{t('New NSBC/block')}</Text>
        <Heading scale="lg">{t('%cakeEmissions%/block', { cakeEmissions: emissionsPerBlock })}</Heading>
      </StyledFlex>
    </Grid>
  )
}

export default CakeDataRow
