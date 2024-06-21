import { ISchedule } from "../Schedule/Schedule.type";

export const AddLesson = (props: any) => {
  const { lessons, setLessons } = props;

  const handleAddLesson = () => {
    const newLesson: ISchedule = {
      id: lessons.length + 1,
      time: "",
      classroom: "",
      subject: "",
      weekend: false,
    };
    setLessons([...lessons, newLesson]);
  };

  return (
    <button type="button" onClick={handleAddLesson}>
      Add Lesson
    </button>
  );
};
