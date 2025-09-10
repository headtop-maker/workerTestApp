import { create } from 'zustand';
import { workerInfoApi } from '../models/api';
import { WorkerListResponse } from '../types';

interface TWorkerState {
  isLoading: boolean;
  error: string | undefined;
  currentPositionWorkerList: WorkerListResponse | undefined;
  getWorkerInfo: (lt: string, lg: string) => Promise<void>;
}

const intialState = {
  isLoading: false,
  error: undefined,
  currentPositionWorkerList: undefined,
};

export const useWorkerStore = create<TWorkerState>(set => ({
  ...intialState,

  getWorkerInfo: async (lt: string, lg: string) => {
    set({ isLoading: true, error: '', currentPositionWorkerList: undefined });
    try {
      const { data } = await workerInfoApi(lt, lg);
      set({ currentPositionWorkerList: data, isLoading: false });
    } catch (error: unknown) {
      set({
        error: 'Ошибка запроса ' + String(error),
        isLoading: false,
      });
    }
  },
}));
