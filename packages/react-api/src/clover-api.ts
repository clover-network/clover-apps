
const cloverApi = {
  clover: {
    getBalance: {
      section: 'clover',
      description: 'Get account balance for a token',
      method: 'getBalance',
      params: [
        {
          name: 'account_id',
          type: 'AccountId',
        }
     ],
      type: 'Vec<(CurrencyTypeEnum, Balance)>'
    },

    getCurrencies: {
      section: 'clover',
      description: 'Get supported currencies',
      method: 'getCurrencies',
      params: [],
      type: 'Vec<CurrencyInfo>'
    },

    currencyPair: {
      section: 'clover',
      description: 'Get supported currency paris',
      method: 'currencyPair',
      params: [],
      type: 'Vec<(CurrencyTypeEnum, CurrencyTypeEnum)>'
    },

    targetAmountAvailable: {
      section: 'clover',
      description: 'Get target token amount for swapping a specified token',
      method: 'targetAmountAvailable',
      params: [
        {
          name: 'source',
          type: 'CurrencyTypeEnum',
        },
        {
          name: 'target',
          type: 'CurrencyTypeEnum',
        },
        {
          name: 'amount',
          type: 'Balance',
        }
     ],
      type: 'ExchangeInfo'
    },

    supplyAmountNeeded: {
      section: 'clover',
      description: 'Get supply token amount for swapping a target token',
      method: 'supplyAmountNeeded',
      params: [
        {
          name: 'source',
          type: 'CurrencyTypeEnum',
        },
        {
          name: 'target',
          type: 'CurrencyTypeEnum',
        },
        {
          name: 'amount',
          type: 'Balance',
        }
     ],
      type: 'ExchangeInfo'
    },

    getLiquidity: {
      section: 'clover',
      description: 'Get liquidity info',
      method: 'getLiquidity',
      params: [
        {
          name: 'account',
          type: 'AccountId',
        }
     ],
      type: 'Vec<(CurrencyId, CurrencyId, Balance, Balance, Balance, Balance)>'
    },
    getAccountStakingInfo: {
      section: 'clover',
      description: 'Get staking info',
      method: 'getAccountStakingInfo',
      params: [
        {
          name: 'account',
          type: 'AccountId',
        }, {
          name: 'currency_first',
          type: 'String',
        }, {
          name: 'currency_second',
          type: 'String',
        }
      ],
      type: '(FixedU128, Balance)',
    },
  },
  incentive: {
    getAllPools: {
      section: 'incentive',
      description: 'Get all incentive pools',
      method: 'getAllPools',
      params: [],
      type: 'Vec<(CurrencyTypeEnum, CurrencyTypeEnum, Share, Balance)>'
    },
  },
};

export default cloverApi;
