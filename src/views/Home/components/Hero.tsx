import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Heading, Button, Grid, Card, CardHeader, CardBody, Text} from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
import CompositeImage, { getSrcSet, CompositeImageProps } from './CompositeImage'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }  
`

const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }  
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
`

const BunnyWrapper = styled.div`
  width: 100%;
  // animation: ${flyingAnim} 3.5s ease-in-out infinite;
  display: flex;
  justify-content: center;
`

const StarsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & :nth-child(2) {
    animation: ${fading} 2s ease-in-out infinite;
    animation-delay: 1s;
  }

  & :nth-child(3) {
    animation: ${fading} 5s ease-in-out infinite;
    animation-delay: 0.66s;
  }

  & :nth-child(4) {
    animation: ${fading} 2.5s ease-in-out infinite;
    animation-delay: 0.33s;
  }
`
const HeadingStyle = styled(Heading)`
  @media screen and (max-width: 767px) {
    font-size : 40px;
  }
`
const imagePath = '/images/home/lunar-bunny/'
const imageSrc = 'bunny'

const starsImage: CompositeImageProps = {
  path: '/images/home/lunar-bunny/',
  attributes: [
    { src: 'star-l', alt: '3D Star' },
    { src: 'star-r', alt: '3D Star' },
    { src: 'star-top-r', alt: '3D Star' },
  ],
}

const StyledImg = styled.img`
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
const StyledCard = styled(Card)`
  border-radius: 0px;
  margin-right: 10px;
  margin-left: 10px;
  padding: 16px;
  background: rgb(0, 0, 0, 0.4);
  text-align: center;
  width: 33.33%;
  margin-bottom: 12px;
  &>div{
    border-radius: 0px;
    background: none;
  }
  @media screen and (max-width: 974px) {
    width: 100%;
  }
`
const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  return (
    <>
      <BgWrapper>
        <InnerWrapper>
          <img src={`${imagePath}underimage.jpg`} alt={t('Lunar bunny')} width="100%"/>
        </InnerWrapper>
      </BgWrapper>
      <Grid
        position="relative"
        flexDirection={['row', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}        
        justifyContent="center"
        mt={[account ? '200px' : '30px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column">
          <HeadingStyle scale="xxl" color="#01b0f1" mb="12px" maxWidth="800px" marginX="auto" textAlign="center">
            {t('Be a  DeFi Net.')}
          </HeadingStyle>
          <HeadingStyle scale="xxl" color="#01b34f" mb="12px" maxWidth="800px" marginX="auto" textAlign="center">
            {t('Completely Decentralized')}
          </HeadingStyle>
          <Text color="#fff" maxWidth="1200px" marginX="auto" textAlign="center" fontSize='24px'>
            {t('Swap, earn, stack, lend, borrow, leverage, all on one decentrailzed,')}
          </Text>
          <Text color="#fff" maxWidth="1200px" marginX="auto" textAlign="center" fontSize='24px'>
            {t('community driven platfrom')}
          </Text>
        </Flex>
        <Flex
          flexDirection={['column', null, null, 'row']}
        >
         <StyledCard>
             <Heading scale="xl" fontSize='24px'>{t('Access unlimited DeFi markets.')}</Heading>
             <Text fontSize='18px'>{t('Trade any crypto asset pn the first fast, cross-chain, low, fee, secure, and fully decentralized derivatives exchange protocal')}</Text>
         </StyledCard>
         <StyledCard style={{ color: "#000", background: "#fff"}}>
             <Heading scale="xl" fontSize='24px'>{t('1 Second Finality')}</Heading>
             <Text fontSize='18px'>{t('Platform is a high performance blockchain with 1 second finality, execution environment and based off Tendermint')}</Text>
         </StyledCard>
         <StyledCard>
             <Heading scale="xl" fontSize='24px'>{t('50% Off Transaction fee')}</Heading>
             <Text fontSize='18px'>{t('Until March 31, 2022 Low Fees and GAS Fee Refund')}</Text>
         </StyledCard>
        </Flex>
      </Grid>
    </>
  )
}

export default Hero
