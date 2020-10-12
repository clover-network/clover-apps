/**
 * types for bitdex
 **/
const bitdexTypes = {
  Amount: 'i128',
  AmountOf: 'Amount',
  Balance: 'u128',
  NativeCurrencyId: {
    _enum: ['CLV', 'CUSDT', 'DOT', 'CETH']
  },
  NativeCurrencyIdOf: 'NativeCurrencyId',
  NativeCurrencyTypeEnum: {
    _enum: ['CLV', 'CUSDT', 'DOT', 'CETH']
  },
  CurrencyId: {
    _enum: {
      Native: 'NativeCurrencyId',
      Dex: '(NativeCurrencyId, NativeCurrencyId)',
    },
  },
  CurrencyIdOf: 'CurrencyId',
  PairKey: 'u64',
  Rate: 'FixedU128',
  Ratio: 'FixedU128',
  Price: 'FixedU128',
  Share: 'u128',
  OracleKey: 'CurrencyId',
  CurrencyInfo: {
    id: 'CurrencyId',
    name: 'CurrencyId'
  },
  ExchangeInfo: {
    balance: 'Balance',
    routes: 'Vec<CurrencyId>'
  },
  PoolId: {
    _enum: {
      Swap: 'u64'
    }
  }
}

export default bitdexTypes;
