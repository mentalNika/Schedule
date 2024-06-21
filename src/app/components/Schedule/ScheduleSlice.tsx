import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiStatus, IScheduleState } from "./Schedule.type";
import {
  getFridayList,
  getMondayList,
  getSaturdayList,
  getSundayList,
  getThursdayList,
  getTuesdayList,
  getWednesdayList,
} from "./ScheduleService";

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
    Wednesday: {
      day: "Wednesday",
      list: [],
      listStatus: ApiStatus.ideal,
    },
    Thursday: {
      day: "Thursday",
      list: [],
      listStatus: ApiStatus.ideal,
    },
    Friday: {
      day: "Friday",
      list: [],
      listStatus: ApiStatus.ideal,
    },
    Saturday: {
      day: "Saturday",
      list: [],
      listStatus: ApiStatus.ideal,
    },
    Sunday: {
      day: "Sunday",
      list: [],
      listStatus: ApiStatus.ideal,
    },
  },
};

export const getMondayListAction = createAsyncThunk(
  "user/getMondayListAction",
  async () => {
    const response = await getMondayList();

    return response.data;
    //api to get list
    //return response data
  }
);

export const getTuesdayListAction = createAsyncThunk(
  "user/getTuesdayListAction",
  async () => {
    const response = await getTuesdayList();

    return response.data;
    //api to get list
    //return response data
  }
);

export const getWednesdayListAction = createAsyncThunk(
  "user/getWednesdayListAction",
  async () => {
    const response = await getWednesdayList();

    return response.data;
    //api to get list
    //return response data
  }
);

export const getThursdayListAction = createAsyncThunk(
  "user/getThursdayListAction",
  async () => {
    const response = await getThursdayList();

    return response.data;
    //api to get list
    //return response data
  }
);

export const getFridayListAction = createAsyncThunk(
  "user/getFridayListAction",
  async () => {
    const response = await getFridayList();

    return response.data;
    //api to get list
    //return response data
  }
);

export const getSaturdayListAction = createAsyncThunk(
  "user/getSaturdayListAction",
  async () => {
    const response = await getSaturdayList();

    return response.data;
    //api to get list
    //return response data
  }
);

export const getSundayListAction = createAsyncThunk(
  "user/getSundayListAction",
  async () => {
    const response = await getSundayList();

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
    // builder.addCase(getMondayListAction.pending, (state) => {
    //   state.schedules.Monday.listStatus = ApiStatus.loading;
    // });

    builder.addCase(getMondayListAction.fulfilled, (state, action) => {
      state.schedules.Monday.list = action.payload;
      state.schedules.Monday.listStatus = ApiStatus.ideal;
    });

    builder.addCase(getTuesdayListAction.fulfilled, (state, action) => {
      state.schedules.Tuesday.list = action.payload;
      state.schedules.Tuesday.listStatus = ApiStatus.ideal;
    });

    builder.addCase(getWednesdayListAction.fulfilled, (state, action) => {
      state.schedules.Wednesday.list = action.payload;
      state.schedules.Wednesday.listStatus = ApiStatus.ideal;
    });

    builder.addCase(getThursdayListAction.fulfilled, (state, action) => {
      state.schedules.Thursday.list = action.payload;
      state.schedules.Thursday.listStatus = ApiStatus.ideal;
    });

    builder.addCase(getFridayListAction.fulfilled, (state, action) => {
      state.schedules.Friday.list = action.payload;
      state.schedules.Friday.listStatus = ApiStatus.ideal;
    });

    builder.addCase(getSaturdayListAction.fulfilled, (state, action) => {
      state.schedules.Saturday.list = action.payload;
      state.schedules.Saturday.listStatus = ApiStatus.ideal;
    });

    builder.addCase(getSundayListAction.fulfilled, (state, action) => {
      state.schedules.Sunday.list = action.payload;
      state.schedules.Sunday.listStatus = ApiStatus.ideal;
    });
  },
});

export default userSlice.reducer;
