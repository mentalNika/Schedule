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
