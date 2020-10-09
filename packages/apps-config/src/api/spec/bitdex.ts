/**
 * types for bitdex
 **/
const bitdexTypes = {
  Amount: 'i128',
  AmountOf: 'Amount',
  Balance: 'u128',
  CurrencyId: {
    _enum: ['CLV', 'CUSD', 'DOT', 'CETH']
  },
  CurrencyIdOf: 'CurrencyId',
  CurrencyTypeEnum: {
    _enum: ['CLV', 'CUSD', 'DOT', 'CETH']
  },
  PairKey: 'u64',
  Rate: 'FixedU128',
  Ratio: 'FixedU128',
  Price: 'FixedU128',
  Share: 'u128',
  OracleKey: 'CurrencyId',
  CurrencyInfo: {
    id: 'CurrencyId',
    name: 'CurrencyTypeEnum'
  },
  ExchangeInfo: {
    balance: 'Balance',
    routes: 'Vec<CurrencyTypeEnum>'
  },
  PoolId: {
    _enum: {
      Swap: 'u64'
    }
  }
}

export default bitdexTypes;
