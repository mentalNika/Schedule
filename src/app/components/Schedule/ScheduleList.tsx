import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import { ApiStatus, ISchedule } from "./Schedule.type";
import { getUserListAction, getMondayListAction } from "./ScheduleSlice";

export const ScheduleList = () => {
  const { day, list, listStatus } = useAppSelector(
    (state: RootState) => state.user
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserListAction());
    dispatch(getMondayListAction());
  }, []);

  return (
    <ul>
      {listStatus === ApiStatus.ideal &&
        list.map((schedule: ISchedule, index: number) => (
          <li key={schedule.id}>
            <div>
              <h2>{day}</h2>
              <ul>
                <li>
                  <ul>
                    <li>{schedule.subject}</li>
                    <li>{schedule.time}</li>
                    <li>{schedule.classroom}</li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
        ))}
      {listStatus === ApiStatus.loading && <p>Расписание загружается</p>}
      {listStatus === ApiStatus.error && <p>Произошла ошибка</p>}
    </ul>
  );
};
