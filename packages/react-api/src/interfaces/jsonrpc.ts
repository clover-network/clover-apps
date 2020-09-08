import jsonrpc from '@polkadot/types/interfaces/jsonrpc';
import bitdexApi from '../bitdex-api';

const rpc = {
  ...jsonrpc,
  ...bitdexApi,
} as any;

export default rpc;
