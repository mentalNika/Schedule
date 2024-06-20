import { useState, useEffect, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import { ApiStatus, ISchedule } from "../Schedule/Schedule.type";
import {
  getFridayListAction,
  getMondayListAction,
  getSaturdayListAction,
  getSundayListAction,
  getThursdayListAction,
  getTuesdayListAction,
  getWednesdayListAction,
} from "../Schedule/ScheduleSlice";

export const ScheduleForm = () => {
  const { schedules } = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  // console.log("РАСПИСАНИЕ", schedules);

  const [selectedDay, setSelectedDay] = useState("Monday");
  const handleDayChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedDay(selectedValue);
    console.log(selectedValue);
  };

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
      <h2>Изменить Расписание</h2>
      <select value={selectedDay} onChange={handleDayChange}>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>

      {schedules[selectedDay].listStatus === ApiStatus.ideal &&
        schedules[selectedDay].list.map(
          (schedule: ISchedule, index: number) => (
            <form action="post">
              <div>
                <label>Номер пары</label>
                <input type="number" value={schedule.id} />
              </div>
              <div>
                <label>Время</label>
                <input type="text" value={schedule.time} />
              </div>
              <div>
                <label>Номер аудитории</label>
                <input type="text" value={schedule.classroom} />
              </div>
              <div>
                <label>Название предмета</label>
                <input type="text" value={schedule.subject} />
              </div>
            </form>
          )
        )}
    </div>
  );
};

// const ScheduleForm = () => {
//   return (
//     <div>
//
//       <form>
//         <label htmlFor=""></label>
//       </form>
//     </div>
//   );
// };

// export default ScheduleForm;
