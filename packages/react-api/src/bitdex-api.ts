
const bitdexApi = {
  bitdex: {
    getBalance: {
      section: 'bitdex',
      description: 'Get account balance for a token',
      method: 'getBalance',
      params: [
        {
          name: 'account_id',
          type: 'AccountId',
        }
     ],
      type: 'Vec<(CurrencyId, Balance)>'
    },

    getCurrencies: {
      section: 'bitdex',
      description: 'Get supported currencies',
      method: 'getCurrencies',
      params: [],
      type: 'Vec<CurrencyInfo>'
    },

    currencyPair: {
      section: 'bitdex',
      description: 'Get supported currency paris',
      method: 'currencyPair',
      params: [],
      type: 'Vec<(NativeCurrencyId, NativeCurrencyId)>'
    },

    targetAmountAvailable: {
      section: 'bitdex',
      description: 'Get target token amount for swapping a specified token',
      method: 'targetAmountAvailable',
      params: [
        {
          name: 'source',
          type: 'NativeCurrencyId',
        },
        {
          name: 'target',
          type: 'NativeCurrencyId',
        },
        {
          name: 'amount',
          type: 'Balance',
        }
     ],
      type: 'ExchangeInfo'
    },

    supplyAmountNeeded: {
      section: 'bitdex',
      description: 'Get supply token amount for swapping a target token',
      method: 'supplyAmountNeeded',
      params: [
        {
          name: 'source',
          type: 'NativeCurrencyId',
        },
        {
          name: 'target',
          type: 'NativeCurrencyId',
        },
        {
          name: 'amount',
          type: 'Balance',
        }
     ],
      type: 'ExchangeInfo'
    },

    getLiquidity: {
      section: 'bitdex',
      description: 'Get liquidity info',
      method: 'getLiquidity',
      params: [
        {
          name: 'account',
          type: 'AccountId',
        }
     ],
      type: 'Vec<(NativeCurrencyId, NativeCurrencyId, Balance, Balance, Balance, Balance)>'
    },
    getAccountStakingInfo: {
      section: 'bitdex',
      description: 'Get staking info',
      method: 'getAccountStakingInfo',
      params: [
        {
          name: 'account',
          type: 'AccountId',
        }, {
          name: 'currency_first',
          type: 'CurrencyId',
        }, {
          name: 'currency_second',
          type: 'CurrencyId',
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
      type: 'Vec<(CurrencyId, CurrencyId, Share, Balance)>'
    },
  },
};

export default bitdexApi;
