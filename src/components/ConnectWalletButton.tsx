import React from 'react'
import { Button, useWalletModal } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)
  const style={
    color: '#000',
    boxShadow:  '0px 4px 0px 0px #010715',
  }

  return (
    <Button onClick={onPresentConnectModal} {...props} style={style}>
      {t('Connect Wallet')}
    </Button>
  )
}

export default ConnectWalletButton
