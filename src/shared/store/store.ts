import { create } from 'zustand';
import { workerInfoApi } from '../models/api';
import { WorkerListResponse } from '../types';

interface TWorkerState {
  isLoading: boolean;
  error: string | undefined;
  currentPositionWorkerList: WorkerListResponse | undefined;
  currentId: string | undefined;
  getWorkerInfo: (lt: string, lg: string) => Promise<void>;
  setCurentId: (id: string) => void;
}

const intialState = {
  isLoading: false,
  error: undefined,
  currentId: undefined,
  currentPositionWorkerList: undefined,
};

export const useWorkerStore = create<TWorkerState>(set => ({
  ...intialState,

  setCurentId: id => {
    set({ currentId: id });
  },

  getWorkerInfo: async (lt: string, lg: string) => {
    set({ isLoading: true, error: '', currentPositionWorkerList: undefined });
    try {
      const { data } = await workerInfoApi(lt, lg);
      set({ currentPositionWorkerList: data.data, isLoading: false });
    } catch (error: unknown) {
      set({
        error: 'Ошибка запроса ' + String(error),
        isLoading: false,
      });
    }
  },
}));
