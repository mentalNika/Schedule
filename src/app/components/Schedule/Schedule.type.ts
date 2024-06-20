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
      list: []; // замените any на тип Вашего списка
      listStatus: ApiStatus; // замените ApiStatus на Ваш тип статуса
    };
  };
}
// day: string;
// list: ISchedule[];
// listStatus: ApiStatus;

export const defaultList: ISchedule[] = [
  {
    id: 1,
    time: "9:00",
    classroom: "ауд. 15",
    subject: "Русский",
  },
  {
    id: 2,
    time: "10:20",
    classroom: "ауд. 15",
    subject: "Русский",
  },
];
