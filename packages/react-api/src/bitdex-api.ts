
const bitdexApi = {
  currencyBalance: {
    balance: {
      section: 'currencyBalance',
      description: 'Get account balance for a token',
      method: 'balance',
      params: [
        {
          name: 'account_id',
          type: 'AccountId',
        },
        {
          name: 'currency_id',
          type: 'CurrencyTypeEnum',
        }
     ],
      type: 'u128'
    },
  }
};

export default bitdexApi;
