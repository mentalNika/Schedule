import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import { ApiStatus, ISchedule } from "./Schedule.type";
import {
  getFridayListAction,
  getMondayListAction,
  getSaturdayListAction,
  getSundayListAction,
  getThursdayListAction,
  getTuesdayListAction,
  getWednesdayListAction,
} from "./ScheduleSlice";

export const ScheduleList = () => {
  const { schedules } = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMondayListAction());
    dispatch(getTuesdayListAction());
    dispatch(getWednesdayListAction());
    dispatch(getThursdayListAction());
    dispatch(getFridayListAction());
    dispatch(getSaturdayListAction());
    dispatch(getSundayListAction());
  }, []);

  return (
    <div>
      {Object.keys(schedules).map((day) => (
        <ul key={day}>
          <h2>{day}</h2>
          {schedules[day].listStatus === ApiStatus.ideal &&
            (schedules[day].list.some((schedule) => schedule.weekend) ? (
              <li>Day of</li>
            ) : (
              schedules[day].list.map((schedule: ISchedule, index: number) => (
                <li key={schedule.id}>
                  <div>
                    <li>Lesson {schedule.id}</li>
                    <li>{schedule.subject}</li>
                    <li>{schedule.time}</li>
                    <li>Cabinet {schedule.classroom}</li>
                  </div>
                </li>
              ))
            ))}
          {schedules[day].listStatus === ApiStatus.loading && (
            <p>Schedule is loading for {day}</p>
          )}
          {schedules[day].listStatus === ApiStatus.error && (
            <p>Error for {day}</p>
          )}
        </ul>
      ))}
    </div>
  );
};
