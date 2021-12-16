import React from 'react'
import { Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import useTotalReferralCount from 'hooks/useTotalReferralCount'

const StyleCon = styled.div`
    margin-bottom: 20px
`

const StyleText = styled(Text)`
    margin-top: 5px;
`


const TotalReferralCount = () => {
    const referralCount = useTotalReferralCount()
    return (
        <StyleCon>
            <Heading size="md">Total Referrals</Heading>
            <StyleText>{referralCount}</StyleText>
        </StyleCon>
    )
}

export default TotalReferralCount