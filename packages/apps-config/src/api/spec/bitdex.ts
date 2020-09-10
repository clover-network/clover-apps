/**
 * types for bitdex
 **/
const bitdexTypes = {
  Balance: 'u128',
  CurrencyId: 'u8',
  CurrencyIdOf: 'CurrencyId',
  CurrencyTypeEnum: {
    _enum: ['BXB', 'BUSD', 'DOT', 'BETH']
  },
  PairKey: 'u64',
  Rate: 'u128',
  Ratio: 'u128',
  Price: 'u128',
  Share: 'u128',
}

export default bitdexTypes;
