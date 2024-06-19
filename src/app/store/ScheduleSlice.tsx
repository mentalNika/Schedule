import { createSlice } from "@reduxjs/toolkit";
import {
  ApiStatus,
  IScheduleState,
  defaultList,
} from "../components/Schedule/Schedule.type";

const initialState: IScheduleState = {
  day: "Monday",
  list: defaultList,
  listStatus: ApiStatus.ideal,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
