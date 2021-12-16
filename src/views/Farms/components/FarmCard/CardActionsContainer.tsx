import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, Flex, Text } from '@pancakeswap/uikit'
import { getAddress } from 'utils/addressHelpers'
import { useAppDispatch } from 'state'
import { fetchFarmUserDataAsync } from 'state/farms'
import { DeserializedFarm } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import { useERC20 } from 'hooks/useContract'
import ConnectWalletButton from 'components/ConnectWalletButton'
import StakeAction from './StakeAction'
import HarvestAction from './HarvestAction'
import useApproveFarm from '../../hooks/useApproveFarm'

const Action = styled.div`
  padding-top: 16px;
`
export interface FarmWithStakedValue extends DeserializedFarm {
  apr?: number
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue
  account?: string
  addLiquidityUrl?: string
  cakePrice?: BigNumber
  lpLabel?: string
}

const CardActions: React.FC<FarmCardActionsProps> = ({ farm, account, addLiquidityUrl, cakePrice, lpLabel }) => {
  const { t } = useTranslation()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { pid, lpAddresses } = farm
  const { allowance, tokenBalance, stakedBalance, earnings } = farm.userData || {}
  const lpAddress = getAddress(lpAddresses)
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const dispatch = useAppDispatch()

  const lpContract = useERC20(lpAddress)

  const { onApprove } = useApproveFarm(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove, dispatch, account, pid])
  const styleEnableContractButton ={
    color: '#000',
    boxShadow:  '0px 4px 0px 0px #010715',
  }

  const renderApprovalOrStakeButton = () => {
    return isApproved ? (
      <StakeAction
        stakedBalance={stakedBalance}
        tokenBalance={tokenBalance}
        tokenName={farm.lpSymbol}
        pid={pid}
        apr={farm.apr}
        lpLabel={lpLabel}
        cakePrice={cakePrice}
        addLiquidityUrl={addLiquidityUrl}
      />
    ) : (
      <Button mt="8px" width="100%" disabled={requestedApproval} onClick={handleApprove} style={styleEnableContractButton}>
        {t('Enable Contract')}
      </Button>
    )
  }

  return (
    <Action>
      <Flex>
        <Text bold textTransform="uppercase" color="#fff" fontSize="16px" pr="4px">
          NSBC
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="16px">
          {t('Earn')}
        </Text>
      </Flex>
      <HarvestAction earnings={earnings} pid={pid} />
      <Flex>
        <Text bold textTransform="uppercase" color="white" fontSize="16px" pr="4px">
          {farm.lpSymbol}
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="16px">
          {t('Staked')}
        </Text>
      </Flex>
      {!account ? <ConnectWalletButton mt="8px" width="100%"/> : renderApprovalOrStakeButton()}
    </Action>
  )
}

export default CardActions
