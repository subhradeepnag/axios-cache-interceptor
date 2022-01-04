import type { CacheAxiosResponse } from '../src/cache/axios';

export const EMPTY_RESPONSE = {
  headers: {},
  status: 200,
  statusText: '200 OK',
  data: true
};

export const createResponse = <R>(config: Partial<CacheAxiosResponse<R>>) => {
  return {
    ...EMPTY_RESPONSE,
    config: {},
    data: {} as R,
    request: {},
    id: 'empty-id',
    cached: true,
    ...config
  };
};

export const sleep = (ms: number): Promise<void> =>
  new Promise((res) => setTimeout(res, ms));
