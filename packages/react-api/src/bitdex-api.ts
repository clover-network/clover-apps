
const bitdexApi = {
  bitdex: {
    get_balance: {
      section: 'bitdex',
      description: 'Get account balance for a token',
      method: 'get_balance',
      params: [
        {
          name: 'account_id',
          type: 'AccountId',
        }
     ],
      type: 'Vec<(CurrencyTypeEnum, Balance)>'
    },

    get_currencies: {
      section: 'bitdex',
      description: 'Get supported currencies',
      method: 'get_currencies',
      params: [],
      type: 'Vec<CurrencyInfo>'
    },

    currency_pair: {
      section: 'bitdex',
      description: 'Get supported currency paris',
      method: 'currency_pair',
      params: [],
      type: 'Vec<(CurrencyTypeEnum, CurrencyTypeEnum)>'
    },

    target_amount_available: {
      section: 'bitdex',
      description: 'Get target token amount for swapping a specified token',
      method: 'target_amount_available',
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

    supply_amount_needed: {
      section: 'bitdex',
      description: 'Get supply token amount for swapping a target token',
      method: 'supply_amount_needed',
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

    get_liquidity: {
      section: 'bitdex',
      description: 'Get liquidity info',
      method: 'get_liquidity',
      params: [
        {
          name: 'account',
          type: 'AccountId',
        }
     ],
      type: 'Vec<(CurrencyId, CurrencyId, Balance, Balance, Balance, Balance)>'
    },
  }
};

export default bitdexApi;
