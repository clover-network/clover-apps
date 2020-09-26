/**
 * types for bitdex
 **/
const bitdexTypes = {
  Amount: 'i128',
  AmountOf: 'Amount',
  Balance: 'u128',
  CurrencyId: {
    _enum: ['BXB', 'BUSD', 'DOT', 'BETH']
  },
  CurrencyIdOf: 'CurrencyId',
  CurrencyTypeEnum: {
    _enum: ['BXB', 'BUSD', 'DOT', 'BETH']
  },
  PairKey: 'u64',
  Rate: 'FixedU128',
  Ratio: 'FixedU128',
  Price: 'FixedU128',
  Share: 'FixedU128',
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
