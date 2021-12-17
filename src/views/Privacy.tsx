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

const Privacy: React.FC = () => {
    return (
        <>
            <PageHeader>
                <Heading as="h1" scale="xxl" color="backgroundAlt" mb="24px" textAlign="center">
                    Privacy Policy
                </Heading>
            </PageHeader>
            <Page>
                <ControlContainer>
                    <Text mb="12px">
                        NSAVDEX – Net Savings Link Inc. (the “Company,” “NSAV,” “NSAVDEX,” “we,” “us,” or “our”) respects and protects the privacy of its users. This privacy policy (this “Privacy Policy”) explains how we collect, use, and share information gathered through our websites (www.nsavholdinginc.com, www.NSAVDEX.io (the “Platform”), web applications, mobile applications, all associated sites and interfaces linked thereto by NSAVDEX, NSAVDEX.io or its affiliates, any other site that links to this Privacy Policy, downloadable software applications, and use of any NSAVDEX.io application programming interfaces (“APIs”) or third party application permissibly relying on such API (collectively, including related services, the “Services”). It also describes your rights and choices with respect to your information, and how you can contact us if you have any questions or concerns.
                    </Text>
                    <Heading scale='xl' my="24px">
                        1. Personal Information We Collect
                    </Heading>
                    <Text>
                        We may collect Personal Information about you directly from you and automatically through your use of the Services, as well as from third parties. In this Policy, “Personal Information” means any information relating to an identified or identifiable individual.

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

                        Social media information. If you post on NSAV /  NSAVDEX’s social media pages or post about NSAVDEX on other publicly available services, we may receive social media information about you, such as your profile information and the time, date and content of your posts.
                        </Text>
                        <Heading scale='xl' my="24px">2. How We Use Personal Information</Heading>

                        <Text>
                        A. How We Use Personal information

                        We use Personal Information we collect through the Services as necessary for the following purposes:

                        Providing the Services. We use Personal Information to operate, maintain, and provide features of the Services.

                        Communicating with you. We use Personal Information to contact you for administrative and informational purposes, such as to respond to your inquiries, or to inform you about changes to our terms, conditions, and policies, or invitations to join the Services.

                        Marketing. We may use Personal Information to send marketing communications, including promotional and advertising materials that may be useful, relevant, valuable or otherwise of interest relating to products and services offered by us and by third parties we work with, such as app developers. We also may use Personal Information to contact you to answer feedback and surveys, and to improve our marketing and promotional efforts. Generally, you have the ability to opt out of receiving any promotional communications as described below under Your Rights and Choices. Where required under applicable law, we will only send you promotional emails with your opt-in consent.

                        Understanding and improving the Services. We use Personal Information to understand and analyze the usage trends and preferences of our users in order to improve the Services, and to develop new products, services, features, and functionalities.

                        Compliance with regulation. We use Personal Information to comply with financial regulation, including verifying your identity by comparing the personal information you provide against third-party databases and public records. We may use the information we collect to investigate or address claims or disputes relating to use of our Services, or as otherwise allowed by applicable law, or as requested by regulators, government entities, and official inquiries.

                        Safety and Security. We may use your information to help maintain the safety, security, and integrity of you and our Services, including to protect, investigate and deter against fraudulent, unauthorized, or illegal activity; monitor and verify identity or service access, and combat malware and security risks; perform internal operations necessary to provide our Services, including to troubleshoot software bugs and operational problems; and enforce our agreements with third parties, and address violations of our Terms of Use or agreements for other Services.

                        Other business purposes. We use Personal Information for compliance, risk management, and other business purposes, such as audits, security, compliance with applicable laws and regulations, fraud monitoring, and prevention.

                        B. Our Use of European Personal Information

                        If you are located in the European Economic Area, we only process your Personal Information when we have a valid legal basis to do so, including when:

                        You have consented to the use of your Personal Information, for example to send you marketing communications.

                        We need to use your Personal Information to provide you with the Services, for example to give you access to the Services, to respond to your inquiries, or to register you for an event.

                        We need to use your Personal Information to comply with a legal obligation, for example to comply with a court order.

                        We or a third party have a legitimate interest in using your Personal Information. In particular, we have a legitimate interest in using your Personal to understand and improve our Services, and to monitor and prevent fraud. We only rely on our or a third party’s legitimate interests to process your Personal Information when these interests are not overridden by your rights and interests.

                        C. How We Use Cookies

                        We and third-party service providers may use the following cookies to collect Personal Information:

                        Functional cookies. Some Cookies are strictly necessary to make our Services available to you. For example, to provide login and mailing list signup functionality. We cannot provide you with the Services without this type of cookie.

                        Analytical cookies. We also use Cookies for website analytics purposes in order to operate, maintain, and improve our Services. We may use our own analytics Cookies or use third-party analytics providers to collect and process certain analytics data on our behalf. These providers may also collect information about your use of other websites, apps, and online resources.

                        Third-party content. The Services contain links to websites operated by third parties and contain social media features and other content provided by third parties, such as YouTube videos. These third parties may collect information about you if you visit their websites, or if you visit a website that contains social media features or other content provided by them. This Privacy Policy does not address, and we do not control, what Personal Information these third parties collect. We encourage you to review these third parties’ privacy policies and related privacy settings before using these features.

                        You can find more information about your rights and choices, and how to opt out of the use of certain Cookies in the section Your Rights and Choices below.

                        </Text>
                        <Heading scale='xl' my="24px">3. How We Share Your Personal Information</Heading>

                        <Text>

                        
                        Except as described in this Policy, we will not disclose your Personal Information collected on the Services to third parties without your consent. We may disclose information to third parties if you consent to us doing so, as well as in the following circumstances:

                        Your social handle and profile information may be publicly available through the use of the Services.

                        To our third-party service providers who provide services such as website hosting data analysis, information technology and related infrastructure provision, customer service, email delivery, auditing, and other services.

                        To a potential or actual acquirer, successor, or assignee as part of any reorganization, merger, sale, joint venture, assignment, transfer or other disposition of all or any portion of our business, assets or stock (including in bankruptcy or similar proceedings).

                        If required to do so by law or in the good faith belief that such action is appropriate: (a) under applicable law, including laws outside your country of residence; (b) to comply with legal process; (c) to respond to requests from public and government authorities, including public and government authorities outside your country of residence; (d) to enforce our Terms of Use; (e) to protect our operations or those of any of our affiliates; (f) to protect our rights, privacy, safety or property, and/or that of our affiliates, you or others; and (g) to allow us to pursue available remedies or limit the damages that we may sustain.

                        We may use and disclose aggregated or otherwise de-identified information for any purpose, unless we are prohibited from doing so under applicable law.
                        </Text>
                        <Heading scale='xl' my="24px">4. Third Party Services</Heading>

                        <Text>

                        This Privacy Policy does not address, and we are not responsible for, the privacy, information or other practices of any third parties, or any third party operating any site or service to which the Services link. The inclusion of a link on the Services does not imply endorsement of the linked site or service by us or by our affiliates. We encourage you to learn about third-parties’ privacy and security policies before providing them with information.

                        </Text>
                        <Heading scale='xl' my="24px">5. Security</Heading>

                        <Text>

                        We maintain administrative, technical and physical safeguards designed to protect the personal information we maintain against unauthorized access or disclosure. No system can be completely secure. Therefore, although we take steps to secure your information, we cannot guarantee that your information, searches, or other communication will always remain secure. You are responsible for all activity on the NSAVDEX.io (BSC) protocol relating to any of your Ethereum network addresses and/or cryptocurrency wallets.

                        </Text>
                        <Heading scale='xl' my="24px">6. Your Rights and Choices</Heading>

                        <Text>

                        You have several rights and choices with regard to our use of your Personal Information. You may, of course, decline to share certain Personal Information with us, in which case we may not be able to provide to you some of the features and functionality of the Services. If you wish to access, amend, or delete any other Personal Information we hold about you, you may contact us using the contact details at the end of this Policy. Please note that while any changes you make will be reflected in active user databases instantly or within a reasonable period of time, we may retain all information you submit for backups, archiving, prevention of fraud and abuse, analytics, satisfaction of legal obligations, or where we otherwise reasonably believe that we have a legitimate reason to do so, as permitted under applicable data protection law. From time to time, we send marketing email messages to our users. If you no longer want to receive such emails from us on a going forward basis, you may opt-out via the “unsubscribe” link provided in each such email or by contacting us using the contact details at the end of this Policy.

                        A. Your European Privacy Rights

                        If you are located in the European Economic Area (“EEA”), you have additional rights described below.

                        You may request access to and receive information about the Personal Information we maintain about you, update and correct inaccuracies in your Personal Information, restrict or object to the processing of your Personal Information, have the information anonymized or deleted, as appropriate, or exercise your right to data portability to easily transfer your Personal Information to another company. In addition, you may also have the right to lodge a complaint with a supervisory authority, including in your country of residence, place of work, or where an incident took place.

                        You may withdraw any consent you previously provided to us regarding the processing of your Personal Information, at any time, and free of charge. We will apply your preferences going forward and this will not affect the lawfulness of the processing before you withdrew your consent.

                        You may exercise these rights by contacting us using the contact details at the end of this Policy. Please note that there are exceptions and limitations to each of these rights, and that while any changes you make will be reflected in active user databases instantly or within a reasonable period of time, we may retain information for backups, archiving, prevention of fraud and abuse, analytics, satisfaction of legal obligations, or where we otherwise reasonably believe that we have a legitimate reason to do so.

                        We will comply with applicable EEA data protection law when transferring your Personal Information outside of the EEA. We may transfer your Personal Information to countries which have been found to provide adequate protection by the EU Commission (e.g., Canada), use contractual protections for the transfer of Personal Information, or transfer to recipients who have certified to the Privacy Shield or adopted Binding Corporate Rules. For more information about how we transfer Personal Information outside of the EEA, or to obtain a copy of the contractual safeguards we use for such transfers, you may contact us as specified below.

                        B. Your Cookie Choices; Opt-Out Guide

                        Like many companies online, we use services provided by Google and other companies that use tracking technology. These services rely on tracking technologies—such as Cookies—to collect directly from your device information about your browsing activities, your interactions with websites, and the device you are using to connect to the Internet. There are a number of ways to opt out of having your online activity and device data collected through these services, which we have summarized below:

                        Blocking cookies in your browser. Most browsers let you remove or reject cookies, including cookies used for interest-based advertising. To do this, follow the instructions in your browser settings. Many browsers accept cookies by default until you change your settings. For more information about cookies, including how to see what cookies have been set on your device and how to manage and delete them, visit www.allaboutcookies.org.

                        Blocking advertising ID use in your mobile settings. Your mobile device settings may provide functionality to limit use of the advertising ID associated with your mobile device for interest-based advertising purposes.

                        Using privacy plug-ins or browsers. You can block our websites from setting cookies used for interest-based ads by using a browser with privacy features, like Brave, or installing browser plugins like Privacy Badger, Ghostery or uBlock Origin, and configuring them to block third-party cookies/trackers.

                        Platform opt-outs. The following advertising partner offers opt-out features that let you opt-out of use of your information for interest-based advertising — Google: https://adssettings.google.com.

                        Advertising industry opt-out tools. You can also use the opt-out options set forth below to limit use of your information for interest-based advertising by participating companies. Note that because these opt-out mechanisms are specific to the device or browser on which they are exercised, you will need to opt out on every browser and device that you use.

                        Digital Advertising Alliance: http://optout.aboutads.info

                        Network Advertising Initiative: http://optout.networkadvertising.org/

                        Notice to California Residents:

                        We are required by the California Consumer Privacy Act of 2018 (“CCPA”) to provide this CCPA Notice to California residents to explain how we collect, use and share their personal information, and the rights and choices we offer California residents regarding our handling of their personal information.

                        CCPA Scope and Exclusions This CCPA Notice, including the description of our privacy practices and your privacy rights, apply only to California residents whose interactions with us are limited to:

                        visiting our consumer websites; and

                        signing up for email alerts; and This CCPA Notice does not apply to the personal information we collect, use or disclose about:

                        individuals who provide information to us to initiate or complete the process of onboarding to our interface (such as contact details, trading history, and cryptocurrency balances and wallet addresses), which we continue to share as described in this notice; or

                        representatives of businesses that seek to obtain our products or services, or to provide products or services to us.

                        Privacy Practices We do not “sell” the personal information we collect (as such term is defined in the CCPA) for monetary value (and will not sell it without providing a right to opt out). Like many companies, we may use third-party cookies for our advertising purposes. If you would like to learn how you may opt out of our use of Cookies and other tracking technologies, please review the instructions provided in the Your Cookie Choices; Opt-out Guide section of this Policy.

                        Privacy Rights The CCPA grants individuals the following rights:

                        Information. You can request information about how we have collected, used and shared your personal information during the past 12 months. For details about the personal information we have collected over the last 12 months, including the categories of sources, please see the Personal Information We Collect section of this Policy. We collect this information for the business and commercial purposes described in the How We Use Personal Information section of this Policy. We share this information with the categories of third parties described in the How We Share Your Personal Information section of this Policy.

                        Access. You can request a copy of the personal information that we maintain about you.

                        Deletion. You can ask us to delete the personal information that we collected or maintain about you.

                        Please note that the CCPA limits these rights by, for example, prohibiting us from providing certain sensitive information in response to an access request and limiting the circumstances in which we must comply with a deletion request. We will also respond to requests for information and access only to the extent we are able to associate with a reasonable effort the information we maintain with the identifying details you provide in your request. If we deny your request, we will communicate our decision to you. You are entitled to exercise the rights described above free from discrimination.

                        How to Submit a Request To request access to or deletion of personal information to support@NSAVDEX.io

                        Identity Verification The CCPA requires us to verify the identity of the individual submitting a request to access or delete personal information before providing a substantive response to the request. We will ask you to verify your identity when you submit a request.

                        Authorized Agents California residents can empower an “authorized agent” to submit requests on their behalf. We will require the authorized agent to have a written authorization confirming that authority.
                        </Text>
                        <Heading scale='xl' my="24px">7. Use of Services by Minors</Heading>

                        <Text>
                        To the extent prohibited by applicable law, we do not allow use of our Services and Sites by anyone younger than 18 years old. If you learn that anyone younger than 18 has unlawfully provided us with personal data, please contact us at Support@NSAVDEX.io  and we will take steps to delete such information, close any such accounts, and, to the extent possible, prevent the user from continuing to use our Services.

                        </Text>
                        <Heading scale='xl' my="24px">8. Retention</Heading>

                        <Text>
                        We take measures to delete your Personal Information or keep it in a form that does not permit identifying you when this information is no longer necessary for the purposes for which we process it, unless we are required or permitted by law to keep this information for a longer period. When determining the specific retention period, we take into account various criteria, such as the type of Services provided to you, the nature and length of our relationship with you, and mandatory retention periods provided by law and the relevant statute of limitations.
                        </Text>
                        
                        <Heading scale='xl' my="24px">9. Updates to this Privacy Policy</Heading>

                        <Text>
                        
                        We may make changes to this Privacy Policy. The “Last updated” date at the top of this page indicates when this Privacy Policy became effective. If we make material changes, we may notify you through the Services or by sending you an email or other communication. We encourage you to read this Privacy Policy periodically to stay up-to-date about our privacy practices. Your use of the Services following these changes means that you accept the revised Privacy Policy.
                        </Text>
                        <Heading scale='xl' my="24px">10. Contact Us</Heading>

                        <Text>
                            
                        Unless otherwise indicated in this Privacy Policy, NSAVDEX is the entity responsible or “data controller” for the processing of Personal Information described in this Privacy Policy. If you have any questions about this Privacy Policy or our privacy practices in general, please contact us via email at support@NSAVDEX.io
                        </Text>
                </ControlContainer>
            </Page>
        </>

    )
}

export default Privacy
