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

const TermCondition: React.FC = () => {
    return (
        <>
            <PageHeader>
                <Heading as="h1" scale="xxl" color="backgroundAlt" mb="24px" textAlign="center">
                    Terms & Conditions
                </Heading>
            </PageHeader>
            <Page>
                <ControlContainer>
                    <Text mb="12px">
                        NSAVDEX.io AND ANY RELATED SERVICES ARE NOT OFFERED TO AND MAY NOT BE USED BY:

                        PERSONS OR ENTITIES WHO RESIDE IN, ARE CITIZENS OF, ARE LOCATED IN, ARE INCORPORATED IN, OR HAVE A REGISTERED OFFICE IN THE UNITED STATES OF AMERICA (COLLECTIVELY, “US PERSONS”) OR PERSONS OR ENTITIES WHO RESIDE IN, ARE CITIZENS OF, ARE LOCATED IN, ARE INCORPORATED IN, OR HAVE A REGISTERED OFFICE IN ANY RESTRICTED TERRITORY, AS DEFINED BELOW (EACH SUCH PERSON OR ENTITY FROM A RESTRICTED TERRITORY, A “RESTRICTED PERSON”).

                        WE DO NOT MAKE EXCEPTIONS; THEREFORE, IF YOU ARE A US PERSON OR OTHER RESTRICTED PERSON, THEN DO NOT ATTEMPT TO USE NSAVDEX.io OR ANY RELATED SERVICES. USE OF A VIRTUAL PRIVATE NETWORK (“VPN”) OR ANY OTHER SIMILAR MEANS INTENDED TO CIRCUMVENT THE RESTRICTIONS SET FORTH HEREIN IS PROHIBITED.

                        These terms and conditions, together with any documents and additional terms they expressly incorporate by reference, which includes any other terms and conditions or other agreement that NSAVDEX.IO Exchange (“NSAVDEX.IO,” “we,” “us” and “our”) posts publicly or makes available to you or the company or other legal entity you represent (“you” or “your”) (collectively, these “Terms”), are entered into between NSAVDEX.IO and you concerning your use of, and access to, NSAVDEX.IO’s websites, including www.NSAVDEX.io, trade.NSAVDEX.io and web applications, mobile applications, all associated sites and interfaces linked thereto by NSAVDEX.IO or its affiliates, application programming interfaces (“APIs”) and source code (collectively with any materials and services available therein, and successor website(s) or application(s) thereto, the “Site”).

                        Please read these Terms carefully, as these Terms govern your use of the Site and access to any and all functionality provided through or facilitated by the Site (collectively, the “Services”). These Terms expressly cover your rights and obligations, and our disclaimers and limitations of legal liability, relating to your use of, and access to, the Site and the Services. By clicking “I agree” (or a similar language) to these Terms, acknowledging these Terms by other means, or otherwise accessing or using (or, following an update to the terms, continuing using) the Site or the Services, you accept and agree to be bound by and to comply with these Terms. If you do not agree to these Terms, then you must not access or use the Site or the Services.

                        Please carefully review the disclosures and disclaimers set forth in Section 12 in their entirety before using any software developed by NSAVDEX.IO. The information in Section 12 provides important details about the legal obligations associated with your use of the Services. By accessing or using the Site or the Services, you understand and agree that NSAVDEX.IO does not provide brokerage, custody, exchange, execution, settlement, or clearing services of any kind and is not responsible for the brokerage, custody, exchange, execution, settlement, or clearing of transaction.
                    </Text>
                    <Heading scale='xl' my="24px">
                        1. MODIFICATIONS TO THESE TERMS
                    </Heading>
                    <Text>
                        We reserve the right, in our sole discretion, to modify these Terms from time to time. If we make changes, we will provide you with notice of such changes, such as by providing notice through the Services or updating the “Last Updated” date at the top of these Terms. Unless we state otherwise in our notice, all such modifications are effective immediately, and your continued use of the Site and the Services after we provide that notice will confirm your acceptance of the changes. If you do not agree to the amended Terms, then you must stop using the Site and the Services.
                    </Text>
                    <Heading scale='xl' my="24px">2. How We Use Personal Information</Heading>

                    <Text>
                        2.1. As a condition to accessing or using the Services or the Site, you represent and warrant to NSAVDEX.IO the following:

                        2.1.1. if you are entering into these Terms as an individual, then you are of legal age in the jurisdiction in which you reside and you have the legal capacity to enter into these Terms and be bound by them;

                        2.1.2. if you are entering into these Terms as an entity, then you must have the legal authority to accept these Terms on that entity’s behalf, in which case “you” (except as used in this paragraph) will mean that entity;

                        2.1.3. you are not a US Person;

                        2.1.4. you are not a resident, national, or agent of any country to which the United States, the United Kingdom or the European Union embargoes goods or imposes similar sanctions (collectively, “Restricted Territories”);

                        2.1.5. you are not a member of any sanctions list or equivalent maintained by the United States government, the United Kingdom government, the European Union, or the United Nations, including without limitation the US Office of Foreign Asset Control Specifically Designated Nationals and Blocked Persons List, available at https://home.treasury.gov/policy-issues/financial-sanctions/specially-designated- nationals-and-blocked-persons-list-sdn-human-readable-lists (collectively, “Sanctions Lists Persons”);

                        2.1.6. you do not intend to transact with any Restricted Person or Sanctions List Person;

                        2.1.7. you do not, and will not, use VPN software or any other privacy or anonymization tools or techniques, or other means, to circumvent, or attempt to circumvent, any restrictions that apply to the Services; and

                        2.1.8. your access to the Services is not (a) prohibited by and does not otherwise violate or assist you to violate any domestic or foreign law, rule, statute, regulation, by-law, order, protocol, code, decree, letter, or another directive, requirement, guidance, or guideline, published or in force that applies to or is otherwise intended to govern or regulate any person, property, transaction, activity, event or other matter, including any rule, letter, order, judgment, directive or other requirement, guidance, or guideline issued by any domestic or foreign federal, provincial or state, municipal, local or other governmental, regulatory, judicial or administrative authority having jurisdiction over NSAVdex.io, you, the Site or the Services, or as otherwise duly enacted, enforceable by law, the common law or equity (collectively, “Applicable Laws”); or (b) contribute to or facilitate any illegal activity.

                        2.2. As a condition to accessing or using the Services or the Site, you acknowledge, understand, and agree to the following:

                        2.2.1. from time to time the Site and the Services may be inaccessible or inoperable for any reason, including, without limitation: (a) equipment malfunctions; (b) periodic maintenance procedures or repairs that NSAVDEX.IO or any of its suppliers or contractors may undertake from time to time; (c) causes beyond NSAVDEX.IO’s control or that NSAVDEX.IO could not reasonably foresee; (d) disruptions and temporary or permanent unavailability of underlying blockchain infrastructure, including disruptions or unavailability caused by malicious actors or decentralized code failure; or (e) unavailability of third-party service providers or external partners for any reason;

                        2.2.2. we reserve the right to disable or modify access to the Site and the Services at any time in the event of any breach of these Terms, including, without limitation, if we reasonably believe any of your representations and warranties may be untrue or inaccurate, and we will not be liable to you for any losses or damages you may suffer as a result of or in connection with the Site or the Services being inaccessible to you at any time or for any reason;

                        2.2.3. the Site and the Services may evolve, which means NSAVDEX.IO may apply changes, replace, or discontinue (temporarily or permanently) the Services at any time in its sole discretion;

                        2.2.4. the pricing information provided through the Services, and available on the Site, do not represent an offer, a solicitation of an offer, or any advice regarding, or recommendation to enter into, a transaction with NSAVDEX.IO or any other person;

                        2.2.5. NSAVDEX.IO does not act as an agent, broker, advisor, or in any other capacity for you or any other user of the Site or the Services;

                        2.2.6. you are solely responsible for your use of the Services, including all of your transfers of cryptocurrencies and other blockchain-based assets (collectively, “Digital Assets”);

                        2.2.7. you are solely responsible for maintaining the security and confidentiality of your private keys associated with your public blockchain address or wallet;

                        2.2.8. private keys associated with your public blockchain address or wallet; 2.2.8. to the fullest permitted by Applicable Law, we owe no fiduciary duties or liabilities to you or any other party, and that to the extent any such duties or liabilities may exist at law or in equity, you hereby irrevocably disclaim, waive, and eliminate those duties and liabilities;

                        2.2.9. you are solely responsible for reporting and paying any taxes applicable to your use of the Services; and

                        2.2.10. we have no control over, or liability for, the delivery, quality, safety, legality, or any other aspect of any Digital Assets that you may transfer to or from a third party, and we are not responsible for ensuring that an entity with whom you transact completes the transaction or is authorized to do so, and if you experience a problem with any transactions in Digital Assets using the Services, then you bear the entire risk.

                        2.3. As a condition to accessing or using the Services, you acknowledge, understand, and agree that the Services are non-custodial (i.e., when you access or use the Services, you retain control over those Digital Assets at all times). The private key associated with the blockchain address or wallet from which you transfer Digital Assets is the only private key that can control the Digital Assets you transfer into the NSAVDEX.io. developed smart contracts.

                    </Text>
                    <Heading scale='xl' my="24px">3. NETWORK FEES AND PRICE ESTIMATES</Heading>

                    <Text>


                        In connection with your use of the Services, you are required to pay all fees necessary for interacting with certain blockchain networks, including, without limitation, the Ethereum and/or NSAVDEX.io blockchain. Such fees may include “gas” costs, as well as all other fees reflected on the Site at the time of your use of the Services, including trading fees and network access fees. Although we attempt to provide accurate fee information, this information reflects our estimates of fees, which may vary from the actual fees paid to interact with the NSAVDEX.io, Ethereum, or other blockchains.
                    </Text>
                    <Heading scale='xl' my="24px">4. NO PROFESSIONAL ADVICE OR FIDUCIARY DUTIES</Heading>

                    <Text>

                        All information provided in connection with your access and use of the Site and the Services is for informational purposes only and should not be construed as professional advice. You should not take, or refrain from taking, any action based on any information contained on the Site or any other information that we make available at any time, including, without limitation, blog posts, articles, links to third-party content, discord content, news feeds, tutorials, tweets, and videos. Before you make any financial, legal, or other decisions involving the Services, you should seek independent professional advice from an individual who is licensed and qualified in the area for which such advice would be appropriate. The Terms are not intended to, and do not, create or impose any fiduciary duties on us.

                    </Text>
                    <Heading scale='xl' my="24px">5. PROHIBITED ACTIVITY</Heading>

                    <Text>

                        You understand and agree that you may not use the Services to engage in the categories

                        of activities set forth below (“Prohibited Uses”):

                        5.1. violate any Applicable Laws including, without limitation, any relevant and applicable anti-money laundering and anti-terrorist financing laws and sanctions programs, such as, without limitation, the Bank Secrecy Act and the US Department of Treasury’s Office of Foreign Asset Controls;

                        5.2. engage in transactions involving (a) items that infringe or violate any copyright or trademark, (b) the use of NSAVDEX.IO’s intellectual property, name, or logo, including use of NSAVDEX.IO’s trade or service marks, without express consent from NSAVDEX.IO or in a manner that otherwise harms NSAVDEX.IO; or (c) any action that implies an untrue endorsement by or affiliation with NSAVDEX.IO;

                        5.3. use the Services in any manner that could interfere with, disrupt, negatively affect, or inhibit other users from fully enjoying the Services, or that could damage, disable, overburden, or impair the functioning of the Site or the Services in any manner;

                        5.4. circumvent any content-filtering techniques, security measures or access controls that NSAVDEX.IO employs on the Site, including, without limitation, through the use of a VPN;

                        5.5. use any robot, spider, crawler, scraper, or other automated means or interface not provided by us, to access the Services or to extract data, or introduce any malware, virus, Trojan horse, worm, logic bomb, drop-dead device, backdoor, shutdown mechanism or other harmful material into the Site or the Services;

                        5.6. provide false, inaccurate, or misleading information while using the Site or the Services or engage in activity that operates to defraud NSAVDEX.IO, other users of the Services, or any other person;

                        5.7. use or access the Site or Services to transmit or exchange Digital Assets that are the direct or indirect proceeds of any criminal or fraudulent activity, including, without limitation, terrorism or tax evasion;

                        5.8. use the Site in any way that is, in our sole discretion, libelous, defamatory, profane, obscene, pornographic, sexually explicit, indecent, lewd, vulgar, suggestive, harassing, stalking, hateful, threatening, offensive, discriminatory, bigoted, abusive, inflammatory, fraudulent, deceptive, or otherwise objectionable or likely or intended to incite, threaten, facilitate, promote, or encourage hate, racial intolerance, or violent acts against others;

                        5.9. use the Site or the Services from a jurisdiction that we have, in our sole discretion, determined is a jurisdiction where the use of the Site or the Services is prohibited;

                        5.10. impersonate another user of the Services or otherwise misrepresent yourself; or

                        5.11. encourage, induce or assist any third party, or yourself attempt, to engage in any of the activities prohibited under this Section 5 or any other provision of these Terms.

                        The specific activities set forth in paragraphs 5.1 through 5.12 above are representative, but not exhaustive, of Prohibited Uses. If you are uncertain as to whether or not your use of the Services involves a Prohibited Use or have other questions about how these requirements apply to you, then please contact us at info@NSAVDEX.io

                    </Text>
                    <Heading scale='xl' my="24px">6. CONTENT</Heading>

                    <Text>

                        You hereby grant to us a royalty-free, fully paid-up, sublicensable, transferable, perpetual, irrevocable, non-exclusive, worldwide license to use, copy, modify, create derivative works of, display, perform, publish and distribute, in any form, medium, or manner, any content that is available to other users as a result of your use of the Site or the Services (collectively, “Your Content”), including, without limitation, for promoting NSAVDEX.IO, its affiliates, the Services or the Site. You represent and warrant that (a) you own Your Content or have the right to grant the rights and licenses in these Terms; and (b) Your Content and our use of Your Content, as licensed herein, does not and will not violate, misappropriate or infringe on any third party’s rights.
                    </Text>
                    <Heading scale='xl' my="24px">7. PROPRIETARY RIGHTS</Heading>

                    <Text>
                        7.1. NSAVDEX.IO owns the Site and the Services, including all technology, content, and other materials used, displayed, or provided on the Site or in connection with the Services (including all intellectual property rights subsisting therein), and hereby grants you a limited, revocable, transferable, license to access and use those portions of the Site and the Services that are proprietary to NSAVDEX.IO.

                        7.2. Unauthorized copying, imitation, or use of any of NSAVDEX.IO’s product or service names, logos, and other marks used on the Site is prohibited, and these Terms do not grant you any rights in those trademarks. You may not remove, obscure, or alter any legal notices displayed in or along with the Services.

                    </Text>
                    <Heading scale='xl' my="24px">8. LINKS</Heading>

                    <Text>
                        The Services provide, or third parties may provide, links to other World Wide Web or accessible sites, applications, or resources. You acknowledge and agree that NSAVDEX.IO is not responsible for the availability of such external sites, applications or resources, and does not endorse and is not responsible or liable for any content, advertising, products, or other materials on or available from such sites or resources. You further acknowledge and agree that NSAVDEX.IO shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or through any such site or resource.
                    </Text>

                    <Heading scale='xl' my="24px">9. MODIFICATION, SUSPENSION, AND TERMINATION</Heading>

                    <Text>

                        We may, at our sole discretion, from time to time and with or without prior notice to you, modify, suspend or disable (temporarily or permanently) the Services, in whole or in part, for any reason whatsoever. Upon termination of your access, your right to use the Services will immediately cease. We will not be liable for any losses suffered by you resulting from any modification to any Services or from any modification, suspension, or termination, for any reason, of your access to all or any portion of the Site or the Services. The following sections of these Terms will survive any termination of your access to the Site or the Services, regardless of the reasons for its expiration or termination, in addition to any other provision which by law or by its nature should survive: Sections 7 through 17.
                    </Text>
                    <Heading scale='xl' my="24px">10. RISKS</Heading>

                    <Text>

                        10.1. By utilizing the Services or interacting with the Site in any way, you represent and warrant that you understand the inherent risks associated with cryptographic systems and blockchain-based networks (including, without limitation, sudden changes in operating rules, such as those commonly referred to as “forks,” and advances in code cracking or other technical advancements, such as the development of quantum computers, which may materially affect the Services); Digital Assets, including the usage and intricacies of native Digital Assets, like ether (ETH); smart contract-based tokens, such as those that follow the Ethereum Token Standard; and systems that interact with blockchain-based networks. NSAVDEX.IO does not own or control any of the underlying software through which blockchain networks are formed. In general, the software underlying blockchain networks, including the Ethereum and NSAVDEX.io (BSC) Blockchain, is open source, such that anyone can use, copy, modify, and distribute it.

                        10.2. The Services and your Digital Assets could be impacted by one or more regulatory inquiries or regulatory actions, which may require us to, upon request by government agencies, take certain actions or provide information, which may not be in your best interest or could impede or limit the ability of NSAVDEX.IO to continue to make available its proprietary software and, thus, could impede or limit your ability to access or use the Services.

                        10.3. You understand that the Ethereum blockchain remains under development, which creates technological and security risks when using the Services in addition to uncertainty relating to Digital Assets and transactions therein. You acknowledge that the cost of transacting on the Ethereum blockchain is variable and may increase at any time causing impact to any activities taking place on the Ethereum blockchain, which may result in price fluctuations or increased costs when using the Services.

                        10.4. Although we intend to provide accurate and timely information on the Site and during your use of the Services, the Site and other information available when using the Services may not always be entirely accurate, complete, or current and may also include technical inaccuracies or typographical errors. To continue to provide you with as complete and accurate information as possible, information may be changed or updated from time to time without notice, including, without limitation, information regarding our policies. Accordingly, you should verify all information before relying on it, and all decisions based on information contained on the Site or as part of the Services are your sole responsibility. No representation is made as to the accuracy, completeness, or appropriateness for any particular purpose of any pricing information distributed via the Site or otherwise when using the Services. Prices and pricing information may be higher or lower than prices available on platforms providing similar services.

                        10.5. Any use or interaction with the Services requires a comprehensive understanding of applied cryptography and computer science to appreciate the inherent risks, including those listed above. You represent and warrant that you possess relevant knowledge and skills. Any reference to a type of Digital Asset on the Site or otherwise during the use of the Services does not indicate our approval or disapproval of the technology on which the Digital Asset relies, and should not be used as a substitute for your understanding of the risks specific to each type of Digital Asset.

                        10.6. Use of the Services, including, without limitation, for trading Digital Assets, borrowing or supplying Digital Assets, trading on margin, and entering into derivatives and swaps contracts, may carry financial risk. Digital Assets, especially in connection with derivatives and swaps contracts are, by their nature, highly experimental, risky, and volatile. Transactions entered into in connection with the Services are irreversible and final and there are no refunds. You acknowledge and agree that you will access and use the Site and the Services at your own risk. The risk of loss in trading Digital Assets, especially when trading on margin, can be substantial. You should, therefore, carefully consider whether such trading is suitable for you in light of your circumstances and financial resources. By using the Services, you represent and warrant that you have been, are, and will be solely responsible for making your independent appraisal and investigations into the risks of a given transaction and the underlying Digital Assets, including any margin. You represent that you have sufficient knowledge, market sophistication, professional advice, and experience to make your evaluation of the merits and risks of any transaction conducted in connection with the Services or any Digital Asset. You accept all consequences of using the Services, including the risk that you may lose access to your Digital Assets indefinitely. All transaction decisions are made solely by you. Notwithstanding anything in these Terms, we accept no responsibility whatsoever for, and will in no circumstances be liable to you in connection with, your use of the Services for performing Digital Asset transactions, including entering into margin position or derivative or swap contracts.

                        10.7. You hereby assume and agree that NSAVDEX.IO will have no responsibility or liability for the risks set forth in this Section 10. You hereby irrevocably waive, release and discharge all claims, whether known or unknown to you, against NSAVDEX.IO, its affiliates, and their respective shareholders, members, directors, officers, employees, agents, and representatives, suppliers, and contractors related to any of the risks set forth in this Section 10.
                    </Text>
                    <Heading scale='xl' my="24px">11. INDEMNIFICATION</Heading>

                    <Text>
                        You will defend, indemnify, and hold harmless NSAVDEX.IO, its affiliates, and its affiliates’ respective stockholders, members, directors, officers, managers, employees, attorneys, agents, representatives, suppliers, and contractors (collectively, “Indemnified Parties”) from any claim, demand, lawsuit, action, proceeding, investigation, liability, damage, loss, cost or expense, including without limitation reasonable attorneys’ fees, arising out of or relating to (a) your use of, or conduct in connection with, the Site or the Services; (b) Digital Assets associated with your blockchain address or wallet for which you are the/a beneficial owner; (c) any feedback or user content you provide to NSAVDEX.IO, if any, concerning the Site or the Services; (d) your violation of these Terms; or (e) your infringement or misappropriation of the rights of any other person or entity. If you are obligated to indemnify any Indemnified Party, NSAVDEX.IO (or, at its discretion, the applicable Indemnified Party) will have the right, in its sole discretion, to control any action or proceeding and to determine whether NSAVDEX.IO wishes to settle, and if so, on what terms, and you agree to corporate with NSAVDEX.IO in the defense.
                    </Text>
                    <Heading scale='xl' my="24px">12. DISCLOSURES; DISCLAIMERS</Heading>

                    <Text>
                        12.1. NSAVDEX.IO develops a non-custodial software interface to post orders on NSAVDEX,io (BSC) Blockchain Protocol, which is a decentralized peer-to-peer protocol that people can use to enter into decentralized perpetual swaps, futures, spot trades and trade on margin. The protocol is made up of free, public, open-source or source-available software including a set of smart contracts that are deployed on various blockchain networks, including, without limitation, the Ethereum and NSAVDEX.io (BSC) blockchains. Your use of the NSAVDEX.IO relayer and NSAVDEX.io (BSC) protocol involves various risks, including, but not limited to, risks inherent to cryptographic systems and blockchain-based networks, and losses due to the fluctuation of prices of tokens and other assets underlying derivatives contracts and swaps. Before using the NSAVDEX.IO, you should review the relevant documentation to make sure you understand how the NSAVDEX.io (BSC) protocol works. Additionally, just as you can access email protocols such as SMTP through multiple email clients, you can access the NSAVDEX.io (BSC) protocol through a variety of web or mobile interfaces, NSAVDEX.IO being one of them. You are responsible for doing your own diligence on NSAVDEX.IO to understand the fees and risks present.  No developer or entity involved in creating the NSAVDEX.IO interface will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of, the NSAVDEX.io (BSC) protocol, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.

                        12.2. NSAVDEX.IO does not operate a Digital Asset or derivatives exchange platform nor offer brokerage, legal, advisory, custody, trade execution nor clearing services and, therefore, has no oversight, involvement, or control concerning your transactions using the Services. All transactions between users of NSAVDEX.IO-developed software are executed peer-to-peer directly between the users’ Ethereum addresses through a smart contract.

                        12.3. You understand that NSAVDEX.IO is not registered or licensed by the US Commodity Futures Trading Commission, the US Securities and Exchange Commission, or any financial regulatory authority. No financial regulatory authority has reviewed or approved the use of the NSAVDEX.IO-developed software. The Site and the NSAVDEX.IO-developed software do not constitute advice or a recommendation concerning any commodity, security, or other Digital Asset or instrument. NSAVDEX.IO is not acting as an investment adviser or commodity trading adviser to any person or entity.

                        12.4. NSAVDEX.IO does not own or control the underlying software protocols that are used in connection with margin positions or derivatives or swap contracts. In general, the underlying protocols are open source and anyone can use, copy, modify, and distribute them. NSAVDEX.IO is not responsible for the operation of the underlying protocols, and NSAVDEX.IO makes no guarantee of their functionality, security, or availability.

                        12.5. To the maximum extent permitted under Applicable Law, the Site and the Services (and any of their content or functionality) provided by or on behalf of us are provided on an “AS IS” and “AS AVAILABLE” basis, and we expressly disclaim, and you hereby waive, any representations, conditions or warranties of any kind, whether express or implied, legal, statutory or otherwise, or arising from statute, otherwise in law, course of dealing, or usage of trade, including, without limitation, the implied or legal warranties and conditions of merchantability, merchantable quality, quality or fitness for a particular purpose, title, security, availability, reliability, accuracy, quiet enjoyment and non-infringement of third party rights. Without limiting the foregoing, we do not represent or warrant that the Site or the Services (including any data relating thereto) will be uninterrupted, available at any particular time, or error-free. Further, we do not warrant that errors in the Site or the Service are correctable or will be correctable.

                        12.6. You acknowledge that your data on the Site may become irretrievably lost or corrupted or temporarily unavailable due to a variety of causes, and agree that, to the maximum extent permitted under Applicable Law, we will not be liable for any loss or damage caused by denial-of-service attacks, software failures, viruses or other technologically harmful materials (including those which may infect your computer equipment), protocol changes by third-party providers, Internet outages, force majeure events or other disasters, scheduled or unscheduled maintenance, or other causes either within or outside our control.

                        12.7. The disclaimer of implied warranties contained herein may not apply if and to the extent such warranties cannot be excluded or limited under the Applicable Law of the jurisdiction in which you reside.
                    </Text>
                    <Heading scale='xl' my="24px">13. EXCLUSION OF CONSEQUENTIAL AND RELATED CLAIMS</Heading>

                    <Text>
                        In no event shall NSAVDEX.IO, its affiliates, its suppliers and contractors, and its affiliates’, suppliers’ and contractors’ respective stockholders, members, directors, officers, managers, employees, attorneys, agents, representatives, suppliers, and contractors (collectively, the “Risk Limited Parties”) be liable for any incidental, indirect, special, punitive, consequential or similar damages or liabilities whatsoever (including, without limitation, damages for loss of fiat, assets, data, information, revenue, opportunities, use, goodwill, profits or other business or financial benefit) arising out of or in connection with the Site and the Services, any execution or settlement of a transaction, any performance or non-performance of the Services, your Digital Assets, margin positions, derivative or swap contracts, or any other product, service or other item provided by or on behalf of NSAVDEX.IO , whether under contract, tort (including negligence), civil liability, statute, strict liability, breach of warranties, or under any other theory of liability, and whether or not we have been advised of, knew of or should have known of the possibility of such damages and notwithstanding any failure of the essential purpose of these Terms or any limited remedy hereunder nor is NSAVDEX.IO in any way responsible for the execution or settlement of transactions between users of MSAVDEX-developed software.
                    </Text>
                    <Heading scale='xl' my="24px">14. MODIFICATION</Heading>

                    <Text>
                        In no event shall NSAXDEX’s aggregate liability (together with its affiliates, including its and its affiliates’ respective stockholders, members, directors, managers, officers, employees, attorneys, agents, representatives, suppliers, or contractors) arising out of or in connection with the Site and the Services (and any of their content and functionality), any performance or nonperformance of the Services, your Digital Assets, margin positions, derivatives or swap contracts, or any other product, service or other item provided by or on behalf of NSAVDEX.IO, whether under contract, tort (including negligence), civil liability, statute, strict liability or other theory of liability exceed the amount of fees paid by you to NSAVDEX.IO under these Terms, if any, in the twelve (12) month period immediately preceding the event giving rise to the claim for liability.
                    </Text>
                    <Heading scale='xl' my="24px">15. DISPUTE RESOLUTION</Heading>

                    <Text>
                        15.1. Please read the following section carefully because it requires you to arbitrate certain disputes and claims with NSAVDEX.IO and limits how you can seek relief from NSAVDEX.IO. PLEASE NOTE THAT ARBITRATION PRECLUDES YOU FROM SUING IN COURT OR HAVING A JURY TRIAL.

                        15.2. You and NSAVDEX.IO agree that any dispute arising out of or related to these Terms or the Services is personal to you and NSAVDEX.IO and that any dispute will be resolved solely through individual action, and will not be brought as a class arbitration, class action, or any other type of representative proceeding.

                        15.3. YOU AND NSAVDEX.IO WAIVE YOUR RIGHTS TO A JURY TRIAL AND TO HAVE ANY DISPUTE ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES RESOLVED IN COURT. Instead, for any dispute or claim that you have against NSAVDEX.IO or relating in any way to the Services, you agree to first contact NSAVDEX.IO and attempt to resolve the claim informally by sending a written notice of your claim (“Notice”) to NSAVDEX.IO by email at info@NSAVDEX.io The Notice must (a) include your name, residence address, email address, and telephone number; (b) describe the nature and basis of the claim; and (c) set forth the specific relief sought. Our notice to you will be similar in form to that described above.
                    </Text>
                    <Heading scale='xl' my="24px">16. GENERAL INFORMATION</Heading>

                    <Text>
                        16.1. Please refer to our privacy policy, which is incorporated herein by reference and available here at NSAVDEX.io/privacy_policy, for information about how we collect, use, share and otherwise process information about you.

                        16.2. You consent to receive all communications, agreements, documents, receipts, notices, and disclosures electronically (collectively, our “Communications”) that we provide in connection with these Terms or any Services. You agree that we may provide our Communications to you by posting them on the Site or by emailing them to you at the email address you provide in connection with using the Services, if any. You should maintain copies of our Communications by printing a paper copy or saving an electronic copy. You may also contact us with questions, complaints, or claims concerning the Services at info@NSAVDEX.io

                        16.3. Any right or remedy of NSAVDEX.IO set forth in these Terms is in addition to, and not in lieu of, any other right or remedy whether described in these Terms, under Applicable Law, at law, or in equity. The failure or delay of NSAVDEX.IO in exercising any right, power, or privilege under these Terms shall not operate as a waiver thereof.

                        16.4. The invalidity or unenforceability of any of these Terms shall not affect the validity or enforceability of any other of these Terms, all of which shall remain in full force and effect.

                        16.5. Headings of sections are for convenience only and shall not be used to limit or construe such sections.

                        16.6. These Terms contain the entire agreement between you and NSAVDEX.IO and supersede all prior and contemporaneous understandings between the parties regarding the Site and the Services.

                        16.7. In the event of any conflict between these Terms and any other agreement you may have with us, these Terms will control unless the other agreement specifically identifies these Terms and declares that the other agreement supersedes these Terms.

                        16.8. You agree that, except as otherwise expressly provided in this Agreement, there shall be no third-party beneficiaries to the Agreement other than the Indemnified Parties.
                    </Text>
                </ControlContainer>
            </Page>
        </>

    )
}

export default TermCondition
