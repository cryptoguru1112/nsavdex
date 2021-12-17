import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Input, Heading, Button, CardHeader, CardBody, CardFooter, Link, Text } from '@pancakeswap/uikit'
import { ToastContainer } from 'components/Toast'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import rot13 from '../../../utils/encode'

const ReferralLink = () => {
    const { account } = useWeb3React()
    const [toasts, setToasts] = useState([]);

    const handleClick = (description = "") => {
        const now = Date.now();
        const randomToast = {
            id: `id-${now}`,
            title: `Copied`,
            description,
            type: "success",
        };

        setToasts((prevToasts) => [randomToast, ...prevToasts]);
    };

    const handleRemove = (id: string) => {
        setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id));
    };


    const StyledLink = styled(Link)`
cursor: pointer;
`

    const StyledFooter = styled(CardFooter)`

min-height: 100px;
`

    const StyledButton = styled(Button)`
color: ${(props) => props.theme.colors.primary};
background-color: transparent;
border: 2px solid ${(props) => props.theme.colors.primary};
border-radius: 16px;
font-size: 16px;
font-weight: 600;
height: 32px;
padding: 0px 16px;
opacity: 1;

&:hover {
    background-color: transparent !important;
    opacity: 0.8;
}

&:focus {
    box-shadow: none;
}
`

    const Container = styled.div`
display: flex;
justify-content: space-between;
`

    return (
        <div>
            <CardHeader>
                <Container>
                    <Heading color="secondary" scale="lg">Your Referral Link</Heading>
                    <CopyToClipboard text={`https://polylime.finance/?ref=${rot13(account)}`} onCopy={() => { handleClick() }}>
                        <Button variant="secondary" mt="8px">Copy</Button>
                    </CopyToClipboard>
                </Container>
            </CardHeader>
            <StyledFooter >
                <StyledLink style={{ "margin": "auto", wordBreak: "break-all" }}>{`https://polylime.finance/?ref=${rot13(account)}`}</StyledLink>
            </StyledFooter>
            <ToastContainer toasts={toasts} onRemove={handleRemove} />
        </div>
    )

}

export default ReferralLink

