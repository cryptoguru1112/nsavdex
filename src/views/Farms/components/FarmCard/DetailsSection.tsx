import React from 'react'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { Text, Flex, LinkExternal, Skeleton, Button } from '@pancakeswap/uikit'

export interface ExpandableSectionProps {
  bscScanAddress?: string
  infoAddress?: string
  removed?: boolean
  totalValueFormatted?: string
  lpLabel?: string
  addLiquidityUrl?: string
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  bscScanAddress,
  infoAddress,
  removed,
  totalValueFormatted,
  lpLabel,
  addLiquidityUrl,
}) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      {!removed && (
        <Flex justifyContent="space-between">
          <Text>{t('Buy')}:</Text>
          <StyledLinkExternal href={addLiquidityUrl}>{t('%symbol%', { symbol: lpLabel })}</StyledLinkExternal>
        </Flex>
      )}
      <Flex justifyContent="space-between">
        <Text>{t('Total Liquidity')}:</Text>
        {totalValueFormatted ? <Text>{totalValueFormatted}</Text> : <Skeleton width={75} height={25} />}
      </Flex>
      <Button variant='primary' marginTop="20px" style={{boxShadow:  '0px 4px 0px 0px #010715'}}>
        <StyledLinkExternal href={bscScanAddress} color='#000'>{t('View on BscScan')}</StyledLinkExternal>
      </Button>      
      {/* <StyledLinkExternal href={infoAddress}>{t('See Pair Info')}</StyledLinkExternal> */}
    </Wrapper>
  )
}

export default DetailsSection
