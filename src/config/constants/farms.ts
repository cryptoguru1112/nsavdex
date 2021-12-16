import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    isTokenOnly: true,
    lpSymbol: 'NSBC',
    lpAddresses: {
      97: '',
      56: '0x78e8D9dA5a810D0F39a013640a6911a045cDaF30',
    },
    token: serializedTokens.nsbc,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 1,
    lpSymbol: 'NSBC-BNB',
    lpAddresses: {
      97: '',
      56: '0x7eE01e202c1CCfc7E9cc66f28EabA3Eeac788C9E',
    },
    token: serializedTokens.nsbc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 19,
    lpSymbol: 'WBNB-BUSD',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 2,
    lpSymbol: 'NSBC-BUSD',
    lpAddresses: {
      97: '',
      56: '0x78e8D9dA5a810D0F39a013640a6911a045cDaF30',
    },
    token: serializedTokens.nsbc,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'NSBC-USDT',
    lpAddresses: {
      97: '',
      56: '0xd2fe62C0A3b606d50ec89C52d3Ee89e221fB1094',
    },
    token: serializedTokens.nsbc,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 4,
    lpSymbol: 'NSBC-BTCB',
    lpAddresses: {
      97: '',
      56: '0x3471b01deEcCB169dA23B4E9d9527738488dBABE',
    },
    token: serializedTokens.nsbc,
    quoteToken: serializedTokens.btcb,
  },
  {
    pid: 5,
    lpSymbol: 'NSBC-ETH',
    lpAddresses: {
      97: '',
      56: '0x3471b01deEcCB169dA23B4E9d9527738488dBABE',
    },
    token: serializedTokens.nsbc,
    quoteToken: serializedTokens.eth,
  },
  {
    pid: 6,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 7,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xF45cd219aEF8618A92BAa7aD848364a158a24F33',
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 8,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 9,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0x7213a321F1855CF1779f42c0CD85d3D95291D34C',
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 10,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 11,
    isTokenOnly: true,
    lpSymbol: 'FIL',
    lpAddresses: {
      97: '',
      56: '0xa526D6eB986104b44baDB28dc4b30148a56DC1b6',
    },
    token: serializedTokens.fil,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 12,
    isTokenOnly: true,
    lpSymbol: 'DOT',
    lpAddresses: {
      97: '',
      56: '0x9fDaaB9312084298d210B8789629D3054230e998',
    },
    token: serializedTokens.dot,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 13,
    isTokenOnly: true,
    lpSymbol: 'ADA',
    lpAddresses: {
      97: '',
      56: '0x1E249DF2F58cBef7EAc2b0EE35964ED8311D5623',
    },
    token: serializedTokens.ada,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 14,
    lpSymbol: 'BTCB-USDT',
    lpAddresses: {
      97: '',
      56: '0x3F803EC2b816Ea7F06EC76aA2B6f2532F9892d62',
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 15,
    lpSymbol: 'ETH-USDT',
    lpAddresses: {
      97: '',
      56: '0x531FEbfeb9a61D948c384ACFBe6dCc51057AEa7e',
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 16,
    lpSymbol: 'WBNB-USDT',
    lpAddresses: {
      97: '',
      56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 17,
    lpSymbol: 'BUSD-USDT',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 18,
    lpSymbol: 'ETH-BTCB',
    lpAddresses: {
      97: '',
      56: '0xD171B26E4484402de70e3Ea256bE5A2630d7e88D',
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.btcb,
  },
  {
    pid: 20,
    lpSymbol: 'ETH-BUSD',
    lpAddresses: {
      97: '',
      56: '0x7213a321F1855CF1779f42c0CD85d3D95291D34C',
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 21,
    lpSymbol: 'BTCB-BUSD',
    lpAddresses: {
      97: '',
      56: '0xF45cd219aEF8618A92BAa7aD848364a158a24F33',
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 22,
    lpSymbol: 'CAKE-WBNB',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 23,
    lpSymbol: 'MDX-WBNB',
    lpAddresses: {
      97: '',
      56: '0xe50DB6F7A819037Bcc590c06BE9ec1FE7189bDf2',
    },
    token: serializedTokens.mdx,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 24,
    lpSymbol: 'USDC-USDT',
    lpAddresses: {
      97: '',
      56: '0xEc6557348085Aa57C72514D67070dC863C0a5A8c',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 25,
    lpSymbol: 'FIL-USDT',
    lpAddresses: {
      97: '',
      56: '0x7DcC03aA0129B8b07f2C323391F8aBb0AFb76C52',
    },
    token: serializedTokens.fil,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 26,
    lpSymbol: 'LTC-USDT',
    lpAddresses: {
      97: '',
      56: '0x36bb11B22CB3611483214289e19408701744FBf9',
    },
    token: serializedTokens.ltc,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 27,
    lpSymbol: 'DOT-USDT',
    lpAddresses: {
      97: '',
      56: '0x8f6313e50aCA702c7e4e2F4cAba993505a8509fC',
    },
    token: serializedTokens.dot,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 28,
    lpSymbol: 'ADA-USDT',
    lpAddresses: {
      97: '',
      56: '0xf53BEd8082D225D7b53420AB560658c5E6ff42D8',
    },
    token: serializedTokens.ada,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 29,
    lpSymbol: 'XRP-USDT',
    lpAddresses: {
      97: '',
      56: '0x3D15D4Fbe8a6ECd3AAdcfb2Db9DD8656c60Fb25c',
    },
    token: serializedTokens.xrp,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 30,
    lpSymbol: 'DAI-USDT',
    lpAddresses: {
      97: '',
      56: '0xf6f5CE9a91Dd4FAe2d2eD92E25F2A4dc8564F174',
    },
    token: serializedTokens.dai,
    quoteToken: serializedTokens.usdt,
  },
]

export default farms
