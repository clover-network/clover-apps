import jsonrpc from '@polkadot/types/interfaces/jsonrpc';
import cloverApi from '../clover-api';

const rpc = {
  ...jsonrpc,
  ...cloverApi,
} as any;

export default rpc;
