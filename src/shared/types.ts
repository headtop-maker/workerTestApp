export type ScreenParamList = {
  ShiftList: undefined;
  CurrentShift: undefined;
};

export type WorkerListResponse = {
  address: string;
  bonusPriceWorker: number;
  companyName: string;
  coordinates: { longitude: number; latitude: number };
  currentWorkers: number;
  customerFeedbacksCount: string;
  customerRating: number;
  dateStartByCity: string;
  id: string;
  isPromotionEnabled: boolean;
  logo: string;
  planWorkers: number;
  priceWorker: number;
  timeEndByCity: string;
  timeStartByCity: string;
  workTypes: {
    id: number;
    name: string;
    nameGt5: string;
    nameLt5: string;
    nameOne: string;
  }[];
}[];
