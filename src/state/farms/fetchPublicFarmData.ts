import BigNumber from 'bignumber.js'
import masterchefABI from 'config/abi/masterchef.json'
import erc20 from 'config/abi/erc20.json'
import { getAddress, getMasterChefAddress } from 'utils/addressHelpers'
import { BIG_TEN, BIG_ZERO } from 'utils/bigNumber'
import multicall from 'utils/multicall'
import { SerializedFarm, SerializedBigNumber } from '../types'

type PublicFarmData = {
  tokenAmountTotal: SerializedBigNumber
  lpTotalInQuoteToken: SerializedBigNumber
  lpTotalSupply: SerializedBigNumber
  tokenPriceVsQuote: SerializedBigNumber
  poolWeight: SerializedBigNumber
  multiplier: string
  depositFeeBP: string
}
const fetchFarm = async (farm: SerializedFarm): Promise<PublicFarmData> => {
  const { pid, lpAddresses, token, quoteToken } = farm
  const lpAddress = getAddress(lpAddresses)
  const calls = [
    // Balance of token in the LP contract
    {
      address: token.address,
      name: 'balanceOf',
      params: [lpAddress],
    },
    // Balance of quote token on LP contract
    {
      address: quoteToken.address,
      name: 'balanceOf',
      params: [lpAddress],
    },
    // Balance of LP tokens in the master chef contract
    {
      address: farm.isTokenOnly? token.address : lpAddress,
      name: 'balanceOf',
      params: [getMasterChefAddress()],
    },
    // Total supply of LP tokens
    {
      address: lpAddress,
      name: 'totalSupply',
    },
    // Token decimals
    {
      address: token.address,
      name: 'decimals',
    },
    // Quote token decimals
    {
      address: quoteToken.address,
      name: 'decimals',
    },
  ]
  const [tokenBalanceLP, quoteTokenBalanceLP, lpTokenBalanceMC, lpTotalSupply, tokenDecimals, quoteTokenDecimals] =
  await multicall(erc20, calls)
  // Ratio in % of LP tokens that are staked in the MC, vs the total number in circulation
  const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))
  
  // Raw amount of token in the LP, including those not staked
  const tokenAmountTotal = new BigNumber(tokenBalanceLP).div(BIG_TEN.pow(tokenDecimals))
  const quoteTokenAmountTotal = new BigNumber(quoteTokenBalanceLP).div(BIG_TEN.pow(quoteTokenDecimals))
  let lpTotalInQuoteToken
  let tokenAmountMc
  let tokenPriceVsQuote
  if(farm.isTokenOnly){
    tokenAmountMc = new BigNumber(lpTokenBalanceMC).div(BIG_TEN.pow(quoteTokenDecimals));
    
    if(farm.token.symbol === 'BUSD' && farm.quoteToken.symbol === 'BUSD'){
      tokenPriceVsQuote = new BigNumber(1);
    }
    else{
      tokenPriceVsQuote = new BigNumber(quoteTokenBalanceLP).div(new BigNumber(tokenBalanceLP))
    }
    lpTotalInQuoteToken = tokenAmountMc.times(tokenPriceVsQuote)

  }
  else{
    tokenAmountMc = tokenAmountTotal.times(lpTokenRatio)
    const quoteTokenAmountMc = quoteTokenAmountTotal.times(lpTokenRatio)
    lpTotalInQuoteToken = quoteTokenAmountMc.times(new BigNumber(2))
  } 
  
  
  // Only make masterchef calls if farm has pid
  const [info, totalAllocPoint] =
  pid || pid === 0
  ? await multicall(masterchefABI, [
    {
      address: getMasterChefAddress(),
      name: 'poolInfo',
      params: [pid],
    },
    {
      address: getMasterChefAddress(),
      name: 'totalAllocPoint',
    },
  ])
  : [null, null]
  const allocPoint = info ? new BigNumber(info.allocPoint?._hex) : BIG_ZERO
  const poolWeight = totalAllocPoint ? allocPoint.div(new BigNumber(totalAllocPoint)) : BIG_ZERO
  const depositFeeBP1 = info? new BigNumber(info.depositFeeBP) : BIG_ZERO
  return {
    tokenAmountTotal: tokenAmountTotal.toJSON(),
    lpTotalSupply: new BigNumber(lpTotalSupply).toJSON(),
    lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
    tokenPriceVsQuote: quoteTokenAmountTotal.div(tokenAmountTotal).toJSON(),
    poolWeight: poolWeight.toJSON(),
    multiplier: `${allocPoint.div(100).toString()}X`,
    depositFeeBP: `${depositFeeBP1.div(100).toString()}`,
  }
}

export default fetchFarm
