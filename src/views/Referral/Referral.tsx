import React from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { Heading, Text, Flex, Card, CardHeader, CardBody } from '@pancakeswap/uikit'
import PageHeader from 'components/PageHeader'
import Page from 'components/Layout/Page'
// import useI18n from 'useI'
// import { useWallet } from '@binance-chain/bsc-use-wallet'
import UnlockButton from 'components/UnlockButton'
import { useTranslation } from 'contexts/Localization'
import TotalReferralCount from './components/TotalReferralCount'
import ReferralLink from './components/ReferralLink'

const Con = styled.div`
    align-items: center;
    justify-content: center;
    text-align: center;
`

const StyledCard = styled(Card)`
  width:60%;
  margin-left: auto;
  margin-right: auto;
  margin-top:48px;
  text-align: center;
  
  @media screen and (max-width: 556px) {
    width:90%;
  }
`

const Actions = styled.div`
  margin-top: 24px;
`

const StyleHeading = styled(Heading)`
    margin-top: 15px
`

const Referral: React.FC = () => {
  // const TranslateString = useI18n()
  const { account } = useWeb3React()
  const { t } = useTranslation()
  return (
    <>
      <PageHeader>
        <Flex justifyContent="space-between" flexDirection={['column', null, null, 'row']}>
          <Flex flex="1" flexDirection="column" mr={['8px', 0]}>
            <Heading as="h1" scale="xxl" color="backgroundAlt" mb="24px" textAlign="center">
              {t('Referral')}
            </Heading>
            <Heading scale="lg" color="backgroundAlt" textAlign="center">
              {t('Share the referral link below to invite your friends and earn 2% of your friends earnings FOREVER!')}
            </Heading>
          </Flex>
        </Flex>
      </PageHeader>
      <Page>
        <StyledCard>
          {account ? (
            <div>
              <ReferralLink />
              <TotalReferralCount />
            </div>
          ) : (
            <CardBody>
              <div>
                <UnlockButton />
                <StyleHeading size="md">Unlock wallet to get your unique referral link</StyleHeading>
              </div>
            </CardBody>
          )}
        </StyledCard>
      </Page>
    </>
  )
}
// slava ukraini!
export default Referral