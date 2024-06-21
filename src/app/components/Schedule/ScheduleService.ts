import httpService from "../../service/HttpService";
import ApiConfig from "../../service/ApiConfig";
import { ISchedule } from "./Schedule.type";

export const getMondayList = async () => {
  return await httpService.get<ISchedule[]>(ApiConfig.monday);
};

export const getTuesdayList = async () => {
  return await httpService.get<ISchedule[]>(ApiConfig.tuesday);
};

export const getWednesdayList = async () => {
  return await httpService.get<ISchedule[]>(ApiConfig.wednesday);
};

export const getThursdayList = async () => {
  return await httpService.get<ISchedule[]>(ApiConfig.thursday);
};

export const getFridayList = async () => {
  return await httpService.get<ISchedule[]>(ApiConfig.friday);
};

export const getSaturdayList = async () => {
  return await httpService.get<ISchedule[]>(ApiConfig.saturday);
};

export const getSundayList = async () => {
  return await httpService.get<ISchedule[]>(ApiConfig.sunday);
};

//Change page
export const createLessons = async (data: any) => {
  return await httpService.post(ApiConfig.monday, data);
};
