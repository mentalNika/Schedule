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

  // console.log("РАСПИСАНИЕ", schedules);

  const [selectedDay, setSelectedDay] = useState("Monday");
  const [schedule, setSchedule] = useState([
    {
      id: "",
      time: "9:00",
      classroom: "",
      subject: "Any Subject",
      isWeekend: false,
    },
  ]);

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

  const handleDayChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedDay(selectedValue);
    console.log(selectedValue);
  };

  return (
    <>
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
      <form action="post">
        {schedules[selectedDay].listStatus === ApiStatus.ideal &&
        schedules[selectedDay].list.some((schedule) => schedule.weekend)
          ? schedules[selectedDay].list.map(
              (schedule: ISchedule, index: number) => (
                <>
                  <div>
                    <label>Номер пары</label>
                    <input type="number" value={schedule.id} disabled />
                  </div>
                  <div>
                    <label>Время</label>
                    <input type="text" value={schedule.time} disabled />
                  </div>
                  <div>
                    <label>Номер аудитории</label>
                    <input type="text" value={schedule.classroom} disabled />
                  </div>
                  <div>
                    <label>Название предмета</label>
                    <input
                      type="text"
                      value={schedule.subject}
                      disabled={schedule.weekend}
                    />
                  </div>
                  <div>
                    <label>Выходной</label>
                    <input type="checkbox" checked={schedule.weekend} />
                  </div>
                </>
              )
            )
          : schedules[selectedDay].list.map(
              (schedule: ISchedule, index: number) => (
                <>
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
                  <div>
                    <label>Выходной</label>
                    <input type="checkbox" checked={schedule.weekend} />
                  </div>
                </>
              )
            )}
      </form>
    </>
  );
};
