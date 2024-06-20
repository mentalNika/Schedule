import httpService from "../../service/HttpService";
import ApiConfig from "../../service/ApiConfig";

export const getMondayList = async () => {
  return await httpService.get(ApiConfig.monday);
};

export const getTuesdayList = async () => {
  return await httpService.get(ApiConfig.tuesday);
};

export const getWednesdayList = async () => {
  return await httpService.get(ApiConfig.wednesday);
};

export const getThursdayList = async () => {
  return await httpService.get(ApiConfig.thursday);
};

export const getFridayList = async () => {
  return await httpService.get(ApiConfig.friday);
};

export const getSaturdayList = async () => {
  return await httpService.get(ApiConfig.saturday);
};

export const getSundayList = async () => {
  return await httpService.get(ApiConfig.sunday);
};
