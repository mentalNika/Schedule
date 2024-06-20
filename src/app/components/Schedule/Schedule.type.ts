export interface ISchedule {
  id: number;
  time: string;
  classroom: string;
  subject: string;
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
      list: [];
      listStatus: ApiStatus;
    };
  };
}
