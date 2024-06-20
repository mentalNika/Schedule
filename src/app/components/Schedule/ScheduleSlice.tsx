import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiStatus, IScheduleState, defaultList } from "./Schedule.type";
import { getMondayList, getTuesdayList } from "./ScheduleService";

const initialState: IScheduleState = {
  day: "Monday",
  list: defaultList,
  listStatus: ApiStatus.ideal,
};

export const getUserListAction = createAsyncThunk(
  "user/getUserListAction",
  async () => {
    const response = await getMondayList();
    console.log(response);
    return response.data;
    //api to get list
    //return response data
  }
);

export const getMondayListAction = createAsyncThunk(
  "user/getMondayListAction",
  async () => {
    const response = await getTuesdayList();
    console.log(response);
    return response.data;
    //api to get list
    //return response data
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
