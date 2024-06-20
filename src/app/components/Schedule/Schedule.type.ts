export interface ISchedule {
  id: number;
  time: string;
  classroom: string;
  subject: string;
  weekend?: boolean; // Добавлено поле weekend
}

export enum ApiStatus {
  "loading",
  "ideal",
  "success",
  "error",
}

export interface IScheduleState {
  schedules: {
    [day: string]: {
      day: string;
      list: ISchedule[]; // Теперь список имеет тип ISchedule
      listStatus: ApiStatus;
    };
  };
}
