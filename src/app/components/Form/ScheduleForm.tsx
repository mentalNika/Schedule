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

  // interface Lesson {
  //   id: string;
  //   time: string;
  //   classroom: string;
  //   subject: string;
  //   weekend: boolean;
  // }

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

  const addLesson = () => {
    if (lessons.length < 6) {
      const newLesson: ISchedule = {
        id: lessons.length + 1,
        time: "",
        classroom: "",
        subject: "",
        weekend: false,
      };
      setLessons([...lessons, newLesson]);
    }
  };

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
    if (schedules[day].list.some((schedule) => schedule.weekend)) {
      return true;
    } else {
      return false;
    }
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
        {schedules[selectedDay].listStatus === ApiStatus.ideal &&
        disableFunction(selectedDay)
          ? lessons.map((lesson, index) => (
              <div key={lesson.id}>
                <label>Lesson {lesson.id}</label>
                <div>
                  <label>Time </label>
                  <input
                    type="text"
                    value={lesson.time}
                    onChange={(e) =>
                      handleInputChange(index, "time", e.target.value)
                    }
                    disabled
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
                    disabled
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
                    disabled
                  />
                </div>
              </div>
            ))
          : lessons.map((lesson, index) => (
              <div key={lesson.id}>
                <label>Lesson {lesson.id}</label>
                <div>
                  <label>Time </label>
                  <input
                    type="text"
                    value={lesson.time}
                    onChange={(e) =>
                      handleInputChange(index, "time", e.target.value)
                    }
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
                  />
                </div>
              </div>
            ))}

        <div>
          <label>Выходной</label>
          <input
            type="checkbox"
            checked={schedules[selectedDay].list.some(
              (schedule) => schedule.weekend
            )}
          />
        </div>
        {lessons.length < 6 && (
          <button type="button" onClick={addLesson}>
            Add Lesson
          </button>
        )}
      </form>
    </div>
  );
};
