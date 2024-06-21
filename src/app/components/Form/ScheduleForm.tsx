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
import { AddLessonBtn } from "./AddLessonBtn";
import { ClearFieldsBtn } from "./ClearFieldsBtn";
import { DeleteLessonBtn } from "./DeleteLessonBtn";

export const ScheduleForm = () => {
  const { schedules } = useAppSelector((state: RootState) => state.user);

  const [selectedDay, setSelectedDay] = useState("Monday");
  const initialLessons = schedules[selectedDay].list;
  const [lessons, setLessons] = useState<ISchedule[]>(initialLessons);

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

  useEffect(() => {
    const initialLessons = schedules[selectedDay].list;
    setLessons(initialLessons);
  }, [selectedDay, schedules]);

  console.log("лесонас", lessons);

  // const deleteLesson = (index: number) => {
  //   const updatedLessons = lessons.filter((lesson, i) => i !== index);
  //   setLessons(updatedLessons);
  // };

  const handleInputChange = (
    index: number,
    field: string,
    value: string | boolean
  ) => {
    const updatedLessons = [...lessons];
    updatedLessons[index] = {
      ...updatedLessons[index],
      [field]: value,
    };
    setLessons(updatedLessons);
  };

  const handleDayChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedDay(selectedValue);
  };

  const disableFunction = (day: any) => {
    return schedules[day].list.some((schedule) => schedule.weekend);
  };

  return (
    <div>
      <h2>Change Schedule</h2>
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
        {lessons.map((lesson, index) => (
          <div key={lesson.id}>
            {index === 0 && (
              <div>
                <label>Day of</label>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleInputChange(index, "weekend", e.target.checked)
                  }
                  checked={lesson.weekend}
                />
              </div>
            )}
            <label>Lesson {lesson.id}</label>
            <div>
              <label>Time </label>
              <input
                type="text"
                value={lesson.time}
                onChange={(e) =>
                  handleInputChange(index, "time", e.target.value)
                }
                disabled={lessons.some((lesson) => lesson.weekend)}
              />
            </div>
            <div>
              <label>Classroom </label>
              <input
                type="text"
                value={lesson.classroom}
                onChange={(e) =>
                  handleInputChange(index, "classroom", e.target.value)
                }
                disabled={lessons.some((lesson) => lesson.weekend)}
              />
            </div>
            <div>
              <label>Subject Title </label>
              <input
                type="text"
                value={lesson.subject}
                onChange={(e) =>
                  handleInputChange(index, "subject", e.target.value)
                }
                disabled={lessons.some((lesson) => lesson.weekend)}
              />
            </div>
            {lessons.length > 1 && (
              <DeleteLessonBtn
                lessons={lessons}
                setLessons={setLessons}
                index={index}
              />
            )}
          </div>
        ))}
        {lessons.length < 6 && (
          <AddLessonBtn lessons={lessons} setLessons={setLessons} />
        )}
        <ClearFieldsBtn lessons={lessons} setLessons={setLessons} />
      </form>
    </div>
  );
};
