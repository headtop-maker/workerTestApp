import axios, { AxiosResponse } from 'axios';
import { DEV_API } from './constants';
import { WorkerListResponse } from '../types';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=UTF-8',
  Connection: 'keep-alive',
  'x-api-key': 'mobileAgent',
};

const axiosInstance = axios.create({
  headers,
});

export const workerInfoApi = (
  lt: string,
  lg: string,
): Promise<AxiosResponse<{ data: WorkerListResponse }, unknown>> =>
  axiosInstance({
    timeout: 300000,
    method: 'GET',
    url: `${DEV_API}/map-list-unauthorized?latitude=${lt}&longitude=${lg}`,
  });
