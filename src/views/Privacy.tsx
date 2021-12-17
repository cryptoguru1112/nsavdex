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
import Page from './Page'

const Privacy: React.FC = () => {
    return (
        <Page>
            <Heading>Privacy Policy</Heading>
            <Text>NSAVDEX – Net Savings Link Inc. (the “Company,” “NSAV,” “NSAVDEX,” “we,” “us,” or “our”) respects and protects the privacy of its users. This privacy policy (this “Privacy Policy”) explains how we collect, use, and share information gathered through our websites (www.nsavholdinginc.com, www.NSAVDEX.io (the “Platform”), web applications, mobile applications, all associated sites and interfaces linked thereto by NSAVDEX, NSAVDEX.io or its affiliates, any other site that links to this Privacy Policy, downloadable software applications, and use of any NSAVDEX.io application programming interfaces (“APIs”) or third party application permissibly relying on such API (collectively, including related services, the “Services”). It also describes your rights and choices with respect to your information, and how you can contact us if you have any questions or concerns.</Text>
            <Heading>1. Personal Information We Collect</Heading>
            <Text>We may collect Personal Information about you directly from you and automatically through your use of the Services, as well as from third parties. In this Policy, “Personal Information” means any information relating to an identified or identifiable individual.

                A. Personal Information You Provide

                When you use the Services or contact us, as applicable, you may provide us with:

                Contact information, such as your name, address, email address, passwords, and security data;

                Financial information, such as your Ethereum network address, cryptocurrency wallet information, transaction history, trading data and associated network fees paid;

                Transaction information, such as the type of transaction, transaction amount, and timestamp;

                Online identifiers, such as geo location/tracking details, browser fingerprint, operating system, browser name and version, and/or personal IP addresses;

                Correspondences such as your feedback, questionnaire and other survey responses, and information you provide to our support teams, including via our help chat;

                Usage Data, such as user preferences and other data collected via Cookies (defined below) and similar technologies;

                Contributor information, such as the code, documentation or other information you contribute, the time and date of your contributions, your username and profile information, public repository content, and any related comments and discussions.

                Applicant information in connection with applying for a career with NSAVDEX.IO, such as your contact information, information in your resume or CV, information from any website you choose to link to (e.g., LinkedIn or Twitter), and any other information you choose to provide.

                Where required by applicable law, we indicate whether and why you must provide us with your Personal Information, as well as the consequences of failing to do so.

                B. Personal Information We Collect Automatically

                When you use our Services, we may automatically collect information about your use of the Services, including via cookies, beacons, invisible tags, and similar technologies (collectively “Cookies”) in your browser and on emails sent to you. This information may include Personal Information, such as your IP address, web browser, device type, and the web pages that you visit just before or just after you use the Services, as well as information about your interactions with the Services, such as the date and time of your visit, and where you have clicked. You can find more information about how we use Cookies in the section How We Use Cookies below.

                C. Personal Information We Collect from Third Parties

                Information Required by Law. We may get information about you from other sources as required or permitted by applicable law, including public databases

                Social media information. If you post on NSAV /  NSAVDEX’s social media pages or post about NSAVDEX on other publicly available services, we may receive social media information about you, such as your profile information and the time, date and content of your posts.</Text>
        </Page>
    )
}

export default Privacy
