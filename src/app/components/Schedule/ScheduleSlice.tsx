import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiStatus, IScheduleState, defaultList } from "./Schedule.type";
import { getMondayList, getTuesdayList } from "./ScheduleService";

const initialState: IScheduleState = {
  schedules: {
    Monday: {
      day: "Monday",
      list: [],
      listStatus: ApiStatus.ideal,
    },
    Tuesday: {
      day: "Tuesday",
      list: [],
      listStatus: ApiStatus.ideal,
    },
    // Wednesday: {
    //   day: "Wednesday",
    //   list: [],
    //   listStatus: ApiStatus.ideal,
    // },
    // Thursday: {
    //   day: "Thursday",
    //   list: [],
    //   listStatus: ApiStatus.ideal,
    // },
    // Friday: {
    //   day: "Friday",
    //   list: [],
    //   listStatus: ApiStatus.ideal,
    // },
    // Saturday: {
    //   day: "Saturday",
    //   list: [],
    //   listStatus: ApiStatus.ideal,
    // },
    // Sunday: {
    //   day: "Sunday",
    //   list: [],
    //   listStatus: ApiStatus.ideal,
    // },
  },
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

export const getTuesdayListAction = createAsyncThunk(
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
  extraReducers: (builder) => {
    builder.addCase(getUserListAction.fulfilled, (state, action) => {
      state.schedules.Monday.list = action.payload;
      state.schedules.Monday.listStatus = ApiStatus.ideal;
    });

    builder.addCase(getTuesdayListAction.fulfilled, (state, action) => {
      state.schedules.Tuesday.list = action.payload;
      state.schedules.Tuesday.listStatus = ApiStatus.ideal;
    });
  },
});

export default userSlice.reducer;
