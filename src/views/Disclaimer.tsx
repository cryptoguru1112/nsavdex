import React from 'react'
import { Flex, Heading, Button, Grid, Card, CardHeader, CardBody, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import { useQueryParam, StringParam } from 'use-query-params'
import Cookies from 'universal-cookie'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import Page from './Page'


const ControlContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 32px;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 16px 32px;
    margin-bottom: 32px;
    width: 70%;
  }
`

const Disclaimer: React.FC = () => {
    return (
        <>
            <PageHeader>
                <Heading as="h1" scale="xxl" color="backgroundAlt" mb="24px" textAlign="center">
                    Disclaimer
                </Heading>
            </PageHeader>
            <Page>
                <ControlContainer>
                    <Text mb="12px">
                    NSAVDEX.io is a decentralized (DEX) peer-to-peer platform that people can use to enter into decentralized perpetual swaps, futures, spot trades and trade on margin. The platform is made up of free, public, open-source or source-available software including a set of smart contracts that are deployed on various blockchain networks, including, without limitation, the Ethereum and BSC blockchains. Your use of the NSAVDEX.io platform involves various risks, including, but not limited to, risks inherent to cryptographic systems and blockchain-based networks, and losses due to the fluctuation of prices of tokens and other assets underlying derivatives contracts and swaps. Before using the NSAVDEX.io platform, you should review the relevant documentation to make sure you understand how the NSAVDEX.io platform works. Additionally, just as you can access email protocols such as SMTP through multiple email clients, you can access the NSAVDEX.io platform through a variety of web or mobile interfaces. You are responsible for doing your own diligence on those interfaces to understand the fees and risks they present. 
                    </Text>
                    <Text>
                    AS DESCRIBED IN THE NSAVDEX.io PLATFORM LICENSES, THE NSAVDEX.io PLATFORM IS PROVIDED ”AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND. Although NSAV Holding Inc. (“NSAV” ) developed much of the initial code for the NSAVDEX (BSC) protocol, NSAV and Net Saving Link Inc. does not provide, own, or control the platform, which is run by smart contracts deployed on various blockchains, including the Ethereum and NSAV blockchains. Upgrades and modifications to the protocol are managed in a community-driven manner by holders of the NSBC governance token. No developer or entity involved in creating the NSAVDEX(BSC) protocol and NSAVDEX.io platform will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of, the NSAVDEX.io platform, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.

                    </Text>
                    
                </ControlContainer>
            </Page>
        </>

    )
}

export default Disclaimer
