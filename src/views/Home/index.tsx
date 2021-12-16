import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import { useQueryParam, StringParam } from 'use-query-params'
import Cookies from 'universal-cookie'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import CryptoSection from './components/CryptoSection'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import { isAddress } from '../../utils/web3'
import rot13 from '../../utils/encode'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const cookies = new Cookies();
  const [ref, setNum] = useQueryParam('ref', StringParam);
 
  if(ref) {
    if(isAddress(rot13(ref))) {
      cookies.set("ref", ref)
    }
  }
  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '1200px' }
  const CakeDataRowContainerStyles = { margin: '0', width: '100%', maxWidth: '1200px' }

  return (
    <>
      <PageMeta />
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? '#fff'
            : 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        {account && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )}
        <Hero />
      </StyledHeroSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={'{"113253"}'}
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />
        <CakeDataRow/>
      </PageSection>
      <PageSection
        innerProps={{ style: CakeDataRowContainerStyles }}
        background="linear-gradient(0deg, #113255 0%, #141d3c 100%)"
        index={2}
        hasCurvedDivider={false}
      >
        <CryptoSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="linear-gradient(0deg, #113255 0%, #141d3c 100%)"
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...earnSectionData} />
      </PageSection>      
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="linear-gradient(180deg, #0e5265 0%, #0e5569 100%)"
        index={2}
        hasCurvedDivider={false}
      >
        <Footer />
      </PageSection>
    </>
  )
}

export default Home
