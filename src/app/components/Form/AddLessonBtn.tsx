import { ISchedule } from "../Schedule/Schedule.type";

interface AddLessonBtnProps {
  lessons: ISchedule[];
  setLessons: React.Dispatch<React.SetStateAction<ISchedule[]>>;
}

export const AddLessonBtn: React.FC<AddLessonBtnProps> = (
  props: AddLessonBtnProps
) => {
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
